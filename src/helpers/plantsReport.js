// const datajson = require('./data.json');
// import datajson from '../data.json';
import {
  MIN_PRICE,
  MAX_PRICE,
  MIN_PROFIT,
  PVU_PRICE,
  CACHE_EXPIRES_IN,
  MAX_PLANT_HOURS,
  REAIS_PRICE,
  CONVERSION_LE_PVU,
} from '../config/constants.js';
import { fetchLatestPlantsDataOnMarket } from '../services/index.js';
import { readFileData } from './fileSystem.js';
import { writeDataToFile } from './index.js';

export function generatePlantsProfitReport(data) {
  if (!Array.isArray(data)) {
    console.log('Dados invalidos...\n\n'.bgRed, { data });
    return;
  }

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
    }) => ({
      url: 'https://marketplace.plantvsundead.com/farm#/plant/' + id,
      pricePVU: startingPrice,
      precoEmReais: startingPrice * PVU_PRICE * REAIS_PRICE,
      le,
      hours,
      daysToHarvest: hours / 24,
      profit: le / hours,
      LePorDia: (le / hours) * 24,
      DolaresPorDia: (((le / hours) * 24) / CONVERSION_LE_PVU) * PVU_PRICE,
      ReaisPorDia:
        (((le / hours) * 24) / CONVERSION_LE_PVU) * PVU_PRICE * REAIS_PRICE,
      payback: 0,
      plantType: type,
    })
  );

  const filtered = formatted
    .filter(
      (i) =>
        i.profit >= MIN_PROFIT &&
        i.hours <= (MAX_PLANT_HOURS ? MAX_PLANT_HOURS : 999)
    )
    .sort((a, b) => b.profit - a.profit);

  console.log({
    'Registros encontrados no range de min/max price': upToMaxPvuPrice.length,
    'Registros filtrados pelos outros parametros': filtered.length,
  });
  writeDataToFile(filtered, 'src/reports/RecentPlantsSelling.json');
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
        'O cache eh recente (2 minutos). Usando ele ao inves de chamar API.'
          .blue.bold
      );
      return generatePlantsProfitReport(datajson.data);
    }

    console.log(
      'O cache NAO eh mais recente que 2 minutos. Chamando API pra guardar os dados...'
        .bgGreen.black
    );

    const response = await fetchLatestPlantsDataOnMarket(1);
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
