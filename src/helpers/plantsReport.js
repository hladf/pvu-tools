import {
  MIN_PRICE,
  MAX_PRICE,
  MIN_PROFIT,
  PVU_PRICE,
  CACHE_EXPIRES_IN,
  MAX_PLANT_HOURS,
  REAIS_PRICE,
  CONVERSION_LE_PVU,
  PLANT_ELEMENTS_FILTER,
  PLANT_TYPE,
} from '../config/constants.js';
import { fetchLatestPlantsDataOnMarket } from '../services/index.js';
import { readFileData } from './fileSystem.js';
import { writeDataToFile } from './index.js';
import { generateWorkbook } from './xlsx.js';

function formatDecimal(number = 0) {
  return Number(number.toFixed(2));
}

/**
 *
 * @param {*} data
 * @param {string} sortBy 'profit' | 'payback'
 * @returns
 */
export function generatePlantsProfitReport(data, sortBy = 'profit') {
  if (!Array.isArray(data)) {
    console.log('Dados invalidos...\n\n'.bgRed, { data });
    return;
  }

  const sortByPayback = sortBy === 'payback';
  const sortByProfit = sortBy === 'profit';

  const upToMaxPvuPrice = (data || []).filter(
    (i) => i.startingPrice >= MIN_PRICE && i.startingPrice <= MAX_PRICE
  );
  const formatted = upToMaxPvuPrice.map(
    ({
      id,
      startingPrice,
      config: {
        farm: { le, hours },
        stats: { type },
      },
    }) => {
      const profitPerHours = formatDecimal(le / hours);

      const precoEmDolares = formatDecimal(startingPrice * PVU_PRICE);
      const precoEmReais = formatDecimal(precoEmDolares * REAIS_PRICE);
      const DolaresPorDia = formatDecimal(
        (((le / hours) * 24) / CONVERSION_LE_PVU) * PVU_PRICE
      );
      const ReaisPorDia = formatDecimal(DolaresPorDia * REAIS_PRICE);

      return {
        pricePVU: startingPrice,
        precoEmDolares,
        precoEmReais,
        le,
        hours,
        daysToHarvest: hours / 24,
        LePorHora: formatDecimal(profitPerHours),
        LePorDia: formatDecimal(profitPerHours * 24),
        DolaresPorDia,
        ReaisPorDia,
        paybackEmDias: formatDecimal(precoEmDolares / DolaresPorDia),
        plantType: type,
        url: 'https://marketplace.plantvsundead.com/farm#/plant/' + String(id),
      };
    }
  );

  let filtered = formatted.filter(
    (i) =>
      i.LePorHora >= MIN_PROFIT &&
      i.hours <= (MAX_PLANT_HOURS ? MAX_PLANT_HOURS : 999)
  );

  if (sortByPayback) {
    filtered = filtered.sort((a, b) => a.paybackEmDias - b.paybackEmDias);
  } else if (sortByProfit) {
    filtered = filtered.sort((a, b) => b.LePorHora - a.LePorHora);
  }

  console.log({
    'Registros encontrados no range de min/max price': upToMaxPvuPrice.length,
    'Registros filtrados pelos outros parametros': filtered.length,
  });
  if (!filtered.length) {
    return console.log(
      '\n\n',
      'Zero registros encontrados com o filtro selecionado!'.bgRed.black,
      '\n\n'
    );
  }
  writeDataToFile(filtered, 'src/reports/RecentPlantsSelling.json');
  generateWorkbook(filtered, 'src/reports/RecentPlantsSelling.xlsx');
}

export async function runPlantsProfitReport() {
  try {
    console.log('Parametros encontrados:'.red, {
      MIN_PRICE,
      MAX_PRICE,
      MIN_PROFIT,
      PVU_PRICE,
      MAX_PLANT_HOURS,
    });
    let datajson = {};
    try {
      datajson = JSON.parse(readFileData('./src/data.json'));
    } catch (error) {}

    const lastUpdateDate = datajson.date ? new Date(datajson.date) : undefined;

    const cacheTimeLimit = CACHE_EXPIRES_IN * 60 * 1000;
    const mustGetFromCache =
      lastUpdateDate &&
      lastUpdateDate.getTime() > new Date().getTime() - cacheTimeLimit;

    if (mustGetFromCache) {
      console.log(
        `O cache eh recente (${CACHE_EXPIRES_IN} minutos). Usando ele ao inves de chamar API.`
          .blue.bold
      );
      return generatePlantsProfitReport(datajson.data);
    }

    console.log(
      `O cache NAO eh mais recente que ${CACHE_EXPIRES_IN} minutos. Chamando API pra guardar os dados...`
        .bgGreen.black
    );

    const response = await fetchLatestPlantsDataOnMarket(
      PLANT_TYPE || 1,
      PLANT_ELEMENTS_FILTER
    );
    if (!Array.isArray(response.data)) {
      return console.error(`Os dados encontrados são inválidos\n`.bgRed.black, {
        response,
      });
    }
    generatePlantsProfitReport(response.data);
    writeDataToFile({ data: response.data, date: new Date() }, 'src/data.json');
  } catch (error) {
    console.error(
      '===========\n\n'.bgRed.black,
      error,
      '\n\n============='.bgRed.black
    );
  }
}
