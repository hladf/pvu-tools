import dotenv from 'dotenv';
dotenv.config();

export const MIN_PROFIT = process.env.MIN_PROFIT || 7;
export const MIN_PRICE = process.env.MIN_PRICE || 8;
export const MAX_PRICE = process.env.MAX_PRICE || 16;
export const TOKEN = process.env.TOKEN;
export const PVU_PRICE = process.env.PVU_PRICE || 0;
/** in minutes */
export const CACHE_EXPIRES_IN = process.env.CACHE_EXPIRES_IN || 2;
/** in seconds */
export const INTERVAL_BETWEEN_ACTIONS =
  process.env.INTERVAL_BETWEEN_ACTIONS || 2;
/** in minutes */
export const LOOP_TIME = process.env.LOOP_TIME || 5;
/** in HOURS */
export const MAX_PLANT_HOURS = process.env.MAX_PLANT_HOURS || 0;

export const TOOLS_DICT = {
  Scarecrow: { id: 4, name: 'Scarecrow' },
  Water: { id: 3, name: 'Water' },
};
