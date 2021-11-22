import {
  ACTIONS_DICT,
  INTERVAL_BETWEEN_ACTIONS,
  TEST_MODE,
} from '../config/constants.js';
import { getFarmData } from '../services/index.js';
import { registerLog } from './fileSystem.js';

export async function waitSeconds(seconds) {
  return await new Promise((resolve) =>
    setTimeout(() => resolve(), seconds * 1000)
  );
}

function generateActionsList(farmData = []) {
  return farmData.reduce((accumulator, current) => {
    const canBeHarvested =
      current.totalHarvest > 0 || current.totalExtraHarvest > 0;

    if (canBeHarvested) {
      // Opção de harvest
      console.log(
        'Hora da colheita! totalHarvest/totalExtraHarvest ->',
        current.totalHarvest,
        current.totalExtraHarvest
      );
      accumulator.push({
        id: current._id,
        action: ACTIONS_DICT.HarvestPlant,
        message: `Colhido: ${current.totalHarvest}/${current.rate?.le} totalExtraHarvest: ${current.totalExtraHarvest}`,
      });

      // remove plant e se é temporaria, planta novamente
      const actionPlantAgain = current.isTempPlant
        ? current.plantType === 2
          ? ACTIONS_DICT.PlantMamaTree
          : ACTIONS_DICT.PlantSapling
        : ACTIONS_DICT.PlantNFT;
      console.log('replantando ' + actionPlantAgain.name);
      // não precisa mais remover
      // accumulator.push({ id: current._id, action: ACTIONS_DICT.RemovePlant });
      accumulator.push({
        id: current.isTempPlant ? current._id : current.plantId,
        action: actionPlantAgain,
      });
      accumulator.push({
        id: current._id,
        action: ACTIONS_DICT.ApplySmallPot,
      });
      accumulator.push({ id: current._id, action: ACTIONS_DICT.ApplyWater });
    }

    if (
      current.activeTools &&
      !current.activeTools.find((i) => i.id === 1 || i.id === 2)
    ) {
      accumulator.push({
        id: current._id,
        action: ACTIONS_DICT.ApplySmallPot,
      });
    }

    if (current.needWater) {
      // usar agua 1x ja conta pra 2 aguas
      accumulator.push({ id: current._id, action: ACTIONS_DICT.ApplyWater });
    }
    if (current.hasCrow) {
      accumulator.push({
        id: current._id,
        action: ACTIONS_DICT.ApplyScarecrow,
      });
    }

    return accumulator;
  }, []);
}

export async function runFarmAutomation() {
  console.log('Iniciando FarmAutomation...'.blue.bold);
  const farmResponse = await getFarmData();
  if (!farmResponse?.data?.length) {
    return console.log(
      'Nao foi encontrado dados de plantas na sua farm!'.red.bold
    );
  }

  const plantActionsList = generateActionsList(farmResponse.data);

  if (!plantActionsList.length) {
    const message = 'Nao ha acoes para serem feitas nas suas plantas';
    registerLog({ message, title: 'Farm Automation' });
    return console.log(message.green.bold);
  }

  if (TEST_MODE) {
    console.log('\n\n\t plantActionsList >>\n', plantActionsList, '\n');
  }

  for (const plant of plantActionsList) {
    try {
      const message = `Aplicando acao "${plant.action.name}" na planta ${
        plant.id
      }. ${plant.message || ''}`;
      registerLog({ message, title: 'Farm Automation' });
      console.log(message.red.bold);
      plant.action.function && (await plant.action.function(plant.id));

      const messageSuccess = `Acao concluida com sucesso`;
      registerLog({ message: messageSuccess, title: 'Farm Automation' });
      console.log(messageSuccess.green.bold);
      await waitSeconds(INTERVAL_BETWEEN_ACTIONS);
    } catch (error) {
      const messageError = `Houve um erro ao executar a acao ${
        plant.action.name
      } na planta ${plant.id}. Erro: ${error.message || error}`;
      registerLog({ message: messageError, title: 'Farm Automation' });
      console.log(messageError.black.bgRed.bold);
    }
  }
}
