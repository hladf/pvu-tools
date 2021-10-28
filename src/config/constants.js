import dotenv from 'dotenv';
import {
  applyTool,
  harvestPlant,
  plantSaplingOrMamaTree,
  removePlant,
} from '../services/index.js';
dotenv.config();

export const MIN_PROFIT = process.env.MIN_PROFIT || 7;
export const MIN_PRICE = process.env.MIN_PRICE || 8;
export const MAX_PRICE = process.env.MAX_PRICE || 16;
export const TOKEN = process.env.TOKEN;
export const PVU_PRICE = process.env.PVU_PRICE || 0;
export const REAIS_PRICE = process.env.REAIS_PRICE || 5.4;
export const CONVERSION_LE_PVU = process.env.CONVERSION_LE_PVU || 0;
/** in minutes */
export const CACHE_EXPIRES_IN = process.env.CACHE_EXPIRES_IN || 2;
/** in seconds */
export const INTERVAL_BETWEEN_ACTIONS =
  process.env.INTERVAL_BETWEEN_ACTIONS || 2;
/** in minutes */
export const LOOP_TIME = process.env.LOOP_TIME || 5;
/** in HOURS */
export const MAX_PLANT_HOURS = process.env.MAX_PLANT_HOURS || 0;
export const PLANT_ELEMENTS_FILTER = process.env.PLANT_ELEMENTS_FILTER || '';
export const PLANT_TYPE = process.env.PLANT_TYPE || 1;

export const TOOLS_DICT = {
  SmallPot: { id: 1, name: 'Small Pot' },
  BigPot: { id: 2, name: 'Big Pot' },
  Scarecrow: { id: 4, name: 'Scarecrow' },
  Water: { id: 3, name: 'Water' },
};

export const ACTIONS_DICT = {
  RemovePlant: { name: 'Remove Plant', function: removePlant },
  HarvestPlant: { name: 'Harvest Plant', function: harvestPlant },
  PlantSapling: {
    name: 'Plant Sapling',
    function: () => plantSaplingOrMamaTree(1),
  },
  PlantMamaTree: {
    name: 'Plant Mama Tree',
    function: () => plantSaplingOrMamaTree(2),
  },
  ApplySmallPot: {
    name: TOOLS_DICT.SmallPot.name,
    function: (plantId) => applyTool(TOOLS_DICT.SmallPot.id, plantId),
  },
  ApplyBigPot: {
    name: TOOLS_DICT.BigPot.name,
    function: (plantId) => applyTool(TOOLS_DICT.BigPot.id, plantId),
  },
  ApplyScarecrow: {
    name: TOOLS_DICT.Scarecrow.name,
    function: (plantId) => applyTool(TOOLS_DICT.Scarecrow.id, plantId),
  },
  ApplyWater: {
    name: TOOLS_DICT.Water.name,
    function: (plantId) => applyTool(TOOLS_DICT.Water.id, plantId),
  },
};

export const TEST_MODE = false;
