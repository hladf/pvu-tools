import fetch from 'node-fetch';
import { TEST_MODE, TOKEN } from '../config/constants.js';
import { farmDataMock } from '../tests/mocks/farmDataMock.js';

export async function applyTool(toolId, plantId) {
  if (TEST_MODE) {
    console.log(`applyTool(${toolId}, ${plantId})`.bgWhite.black);
    return;
  }
  const url = 'https://backend-farm.plantvsundead.com/farms/apply-tool';
  const body = `{"farmId":"${plantId}","toolId":${toolId},"token":{"challenge":"default","seccode":"default","validate":"default"}}`;
  const options = {
    method: 'POST',
    headers: {
      authority: 'backend-farm.plantvsundead.com',
      'sec-ch-ua':
        '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
      dnt: '1',
      'sec-ch-ua-mobile': '?0',
      authorization: `Bearer Token: ${TOKEN}`,
      'content-type': 'application/json;charset=UTF-8',
      accept: 'application/json, text/plain, */*',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',
      'sec-ch-ua-platform': '"Windows"',
      origin: 'https://marketplace.plantvsundead.com',
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      referer: 'https://marketplace.plantvsundead.com/',
      'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    },
    body,
  };

  return fetch(url, options).then((res) => res.json());
}

export async function getFarmData() {
  if (TEST_MODE) {
    console.log(`getFarmData() Mock`.bgWhite.black);
    return { data: farmDataMock };
  }
  return fetch(
    'https://backend-farm.plantvsundead.com/farms?limit=10&offset=0',
    {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        authorization: `Bearer Token: ${TOKEN}`,
        'if-none-match': 'W/"1e70-jFZ0xCTVPt66HxIu86Iv0MVqxNY"',
        'sec-ch-ua':
          '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
      },
      referrer: 'https://marketplace.plantvsundead.com/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: null,
      method: 'GET',
      mode: 'cors',
    }
  ).then((res) => res.json());
}

export async function fetchLatestPlantsDataOnMarket(type = 1, elements = '') {
  return fetch(
    `https://backend-farm.plantvsundead.com/get-plants-filter-v2?offset=0&limit=500&sort=latest&type=${type}${
      elements ? '&elements=' + elements : ''
    }`,
    {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        authorization: `Bearer Token: ${TOKEN}`,
        'if-none-match': 'W/"143b-m9mC3mzOUz+S2GBLgT1Bmuee4zg"',
        'sec-ch-ua':
          '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
      },
      referrer: 'https://marketplace.plantvsundead.com/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: null,
      method: 'GET',
      mode: 'cors',
    }
  ).then((res) => res.json());
}

export async function plantTree(plantId = 1, isTempPlant = false) {
  if (TEST_MODE) {
    console.log(`plantSaplingOrMamaTree(${plantId})`.bgWhite.black);
    return;
  }
  return fetch('https://backend-farm.plantvsundead.com/farms', {
    headers: {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
      authorization: `Bearer Token: ${TOKEN}`,
      'content-type': 'application/json;charset=UTF-8',
      'sec-ch-ua':
        '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
    },
    referrer: 'https://marketplace.plantvsundead.com/',
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: `{"landId":0,"${
      isTempPlant ? 'sunflowerId' : 'plantId'
    }":${plantId}}`,
    method: 'POST',
    mode: 'cors',
  }).then((res) => res.json());
}

export async function removePlant(id) {
  if (TEST_MODE) {
    console.log(`removePlant(${id})`.bgWhite.black);
    return;
  }
  return fetch(
    `https://backend-farm.plantvsundead.com/farms/${id}/deactivate`,
    {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        authorization: `Bearer Token: ${TOKEN}`,
        'content-type': 'application/json;charset=UTF-8',
        'sec-ch-ua':
          '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
      },
      referrer: 'https://marketplace.plantvsundead.com/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: '{}',
      method: 'POST',
      mode: 'cors',
    }
  ).then((res) => res.json());
}

export async function harvestPlant(id) {
  if (TEST_MODE) {
    console.log(`harvestPlant(${id})`.bgWhite.black);
    return;
  }
  return fetch(`https://backend-farm.plantvsundead.com/farms/${id}/harvest`, {
    headers: {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
      authorization: `Bearer Token: ${TOKEN}`,
      'content-type': 'application/json;charset=UTF-8',
      'sec-ch-ua':
        '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
    },
    referrer: 'https://marketplace.plantvsundead.com/',
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: '{}',
    method: 'POST',
    mode: 'cors',
  }).then((res) => res.json());
}
