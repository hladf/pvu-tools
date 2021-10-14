import { LOOP_TIME } from './config/constants.js';
import { runPlantsProfitReport, runFarmAutomation } from './helpers/index.js';
// eslint-disable-next-line
import colors from 'colors';

function runInLoop() {
  let loopId = 0;
  const time = LOOP_TIME * 60 * 1000;
  try {
    const today = new Date().toLocaleString();
    console.log(`Agora é: ${today}`.black.bgGreen);
    console.log('Configurações:'.blue.bold);
    console.log(`{ LOOP_TIME: ${LOOP_TIME} minutos }`.blue.bold);
    runFarmAutomation();
    loopId = setInterval(() => {
      console.log('.'.black);
      const today = new Date().toLocaleTimeString(); // returns today's date in mm/dd/yyyy format
      console.log(`>>> ${today} `.black.bgGreen);
      runFarmAutomation();
    }, time);
  } catch (error) {
    clearInterval(loopId);
    console.error({ error });
  }
}

// console.log(process.argv);
if (process.argv.includes('--report')) {
  runPlantsProfitReport();
} else {
  runInLoop();
}
