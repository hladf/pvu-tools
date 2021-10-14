import { INTERVAL_BETWEEN_ACTIONS, TOOLS_DICT } from '../config/constants.js';
import { applyTool, getFarmData } from '../services/index.js';
import { registerLog } from './generateLogs.js';

export async function waitSeconds(seconds) {
  await new Promise((resolve) => setTimeout(() => resolve(), seconds * 1000));
}

export async function runFarmAutomation() {
  console.log('Iniciando FarmAutomation...'.blue.bold);
  const farmResponse = await getFarmData();
  if (!farmResponse?.data?.length) {
    return console.log('Nao foi encontrado dados de plantas na sua farm!'.red.bold);
  }

  const plantsThatNeedUseTools = farmResponse.data.reduce(
    (accumulator, current) => {
      if (current.needWater) {
        accumulator.push({ id: current._id, toolToUse: TOOLS_DICT.Water });
        accumulator.push({ id: current._id, toolToUse: TOOLS_DICT.Water });
      }
      if (current.hasCrow) {
        accumulator.push({ id: current._id, toolToUse: TOOLS_DICT.Scarecrow });
      }
      return accumulator;
    },
    []
  );

  // console.log({ plantsThatNeedUseTools });

  if (!plantsThatNeedUseTools.length) {
    const message = 'Nao ha acoes para serem feitas nas suas plantas';
    registerLog({ message, title: 'Farm Automation' });
    return console.log(message.green.bold);
  }

  for (const plant of plantsThatNeedUseTools) {
    try {
      const message = `A planta ${plant.id} precisa da tool ${plant.toolToUse.name}`;
      registerLog({ message, title: 'Farm Automation' });
      console.log(message.red.bold);
      await applyTool(plant.toolToUse.id, plant.id);

      const messageSuccess = `A planta ${plant.id} usou a tool ${plant.toolToUse.name}`;
      registerLog({ message: messageSuccess, title: 'Farm Automation' });
      console.log(messageSuccess.green.bold);
      await waitSeconds(INTERVAL_BETWEEN_ACTIONS);
    } catch (error) {
      const messageError = `Houve um erro ao usar a tool ${
        plant.toolToUse.name
      } na planta ${plant.id}. Erro: ${error.message || error}`;
      registerLog({ message: messageError, title: 'Farm Automation' });
      console.log(messageError.black.bgRed.bold);
    }
  }
}

/* 
Exemplo de retorno de dados da farm:
{
  "status": 0,
  "data": [
    {
      "_id": "615f2c1f8e5ce9002d1c6247",
      "plant": {
        "farmConfig": {
          "le": 1332,
          "hours": 168
        },
        "stats": {
          "type": "parasite",
          "hp": 0,
          "defPhysics": 0,
          "defMagic": 0,
          "damagePhysics": 132,
          "damageMagic": 0,
          "damagePure": 0,
          "damageHpLoss": 0,
          "damageHpRemove": 0
        },
        "type": 1,
        "iconUrl": "https://pvuresources.s3.ap-southeast-2.amazonaws.com/icon/plant/23_1.png",
        "rarity": 0,
        "synergy": {
          "requirement": 10,
          "description": "All plants/trees (except parasite) productivity is increased by 20%."
        }
      },
      "land": {
        "elements": {
          "fire": 0,
          "water": 0,
          "ice": 0,
          "wind": 0,
          "electro": 0,
          "parasite": 0,
          "light": 0,
          "dark": 0,
          "metal": 0
        },
        "capacity": {
          "plant": 5,
          "motherTree": 1
        },
        "landId": 0,
        "x": 0,
        "y": 0,
        "totalOfElements": 0,
        "rarity": 0
      },
      "isTempPlant": false,
      "stage": "farming",
      "ownerId": "0xb55378466f92e702eb350a7eb2d77ff9ba1909f3",
      "landId": 0,
      "plantId": 1012313216,
      "plantUnitId": 10123132,
      "plantType": 1,
      "plantElement": "parasite",
      "activeTools": [
        {
          "count": 1,
          "_id": "615f2c1f8e5ce9002d1c6249",
          "id": 2,
          "type": "POT",
          "duration": 30,
          "endTime": "2021-11-06T17:20:02.709Z",
          "startTime": "2021-10-07T17:20:02.709Z"
        },
        {
          "count": 2,
          "_id": "615f2c1f8e5ce9002d1c624a",
          "id": 3,
          "type": "WATER",
          "duration": 0,
          "endTime": "2021-10-13T23:59:59.999Z",
          "startTime": "2021-10-12T23:59:59.999Z"
        }
      ],
      "createdAt": "2021-10-07T17:19:27.275Z",
      "updatedAt": "2021-10-13T11:13:13.603Z",
      "__v": 0,
      "harvestTime": "2021-10-15T00:12:12.612Z",
      "rate": {
        "le": 1332,
        "hours": 168
      },
      "startTime": "2021-10-07T17:20:02.719Z",
      "hasSynergy": false,
      "needWater": false,
      "hasSeed": false,
      "hasCrow": false,
      "pausedTime": null,
      "inGreenhouse": false,
      "count": 183,
      "totalHarvest": 0,
      "totalExtraHarvest": 0
    },
    ...
  ],
  "total": 6
}
*/
