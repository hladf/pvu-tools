import fetch from 'node-fetch';
import { TOKEN } from '../config/constants.js';

export async function applyTool(toolId, plantId) {
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
  console.log('Aplicando tool...', toolId, plantId);

  return fetch(url, options).then((res) => res.json());
}

export async function getFarmData() {
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

export async function fetchLatestPlantsDataOnMarket(type = 1) {
  // const url = 'https://backend-farm.plantvsundead.com/get-plants-filter-v2';
  // // const url =
  // //   'https://backend-farm.plantvsundead.com/get-plants-filter-v2?offset=0&limit=700&sort=latest&type=1';

  // const options = {
  //   method: 'GET',
  //   qs: { offset: '0', limit: '600', sort: 'latest', type: '1' },
  //   headers: {
  //     authority: 'backend-farm.plantvsundead.com',
  //     'sec-ch-ua':
  //       '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
  //     accept: 'application/json, text/plain, */*',
  //     dnt: '1',
  //     authorization: `Bearer Token: ${TOKEN}`,
  //     'sec-ch-ua-mobile': '?0',
  //     'user-agent':
  //       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',
  //     'sec-ch-ua-platform': '"Windows"',
  //     origin: 'https://marketplace.plantvsundead.com',
  //     'sec-fetch-site': 'same-site',
  //     'sec-fetch-mode': 'cors',
  //     'sec-fetch-dest': 'empty',
  //     referer: 'https://marketplace.plantvsundead.com/',
  //     'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
  //     'if-none-match': 'W/"1425-dDkzSbHb5OGwDzvdFCC+HCBOyrM"',
  //   },
  // };

  // return fetch(url, options).then((res) => res.json());
  return fetch(
    `https://backend-farm.plantvsundead.com/get-plants-filter-v2?offset=0&limit=500&sort=latest&type=${type}`,
    {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        authorization:
          'Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHhiNTUzNzg0NjZmOTJlNzAyZWIzNTBhN2ViMmQ3N2ZmOWJhMTkwOWYzIiwibG9naW5UaW1lIjoxNjM0MTY5NDUzMjg4LCJjcmVhdGVEYXRlIjoiMjAyMS0xMC0wMSAyMjowNzozNyIsImlhdCI6MTYzNDE2OTQ1M30.Zq74jWUcebWVqh8WiHnw9jrhSUNRPxU3GtuxnTuo6A0',
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
