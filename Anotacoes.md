# Anotacoes:

- activeTools fica com array vazio antes de botar vaso de planta
- toolId 1 = vaso pequeno

## fetch para HARVEST:

````js
fetch("https://backend-farm.plantvsundead.com/farms/61664b06deb3c1001206a35b/harvest", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHhiNTUzNzg0NjZmOTJlNzAyZWIzNTBhN2ViMmQ3N2ZmOWJhMTkwOWYzIiwibG9naW5UaW1lIjoxNjM0MzUwMjQ5MjEwLCJjcmVhdGVEYXRlIjoiMjAyMS0xMC0wMSAyMjowNzozNyIsImlhdCI6MTYzNDM1MDI0OX0.bBCvNoxHkRN0Bskht0g8HjNHkqqK62e8lIRe9YD6wmM",
    "content-type": "application/json;charset=UTF-8",
    "sec-ch-ua": "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://marketplace.plantvsundead.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{}",
  "method": "POST",
  "mode": "cors"
})
```

## fetch de plantar Sapling:
```js
fetch("https://backend-farm.plantvsundead.com/farms", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHhiNTUzNzg0NjZmOTJlNzAyZWIzNTBhN2ViMmQ3N2ZmOWJhMTkwOWYzIiwibG9naW5UaW1lIjoxNjM0Mjk1NDE1ODIzLCJjcmVhdGVEYXRlIjoiMjAyMS0xMC0wMSAyMjowNzozNyIsImlhdCI6MTYzNDI5NTQxNX0.GH6D4lzBN9OOgEar86IdtUj0rndERaFII3YNHRwFysk",
    "content-type": "application/json;charset=UTF-8",
    "sec-ch-ua": "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://marketplace.plantvsundead.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"landId\":0,\"sunflowerId\":1}",
  "method": "POST",
  "mode": "cors"
});
````

## fetch de remover planta ja colhida:

```js
fetch(
  'https://backend-farm.plantvsundead.com/farms/6164dc148af8d80020e046de/deactivate',
  {
    headers: {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
      authorization:
        'Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHhiNTUzNzg0NjZmOTJlNzAyZWIzNTBhN2ViMmQ3N2ZmOWJhMTkwOWYzIiwibG9naW5UaW1lIjoxNjM0Mjk1NDE1ODIzLCJjcmVhdGVEYXRlIjoiMjAyMS0xMC0wMSAyMjowNzozNyIsImlhdCI6MTYzNDI5NTQxNX0.GH6D4lzBN9OOgEar86IdtUj0rndERaFII3YNHRwFysk',
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
);
```

## Exemplo de `data` com ultima planta com corvo:

> { data: [] }

```json
[
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
        "endTime": "2021-10-11T23:59:59.999Z",
        "startTime": "2021-10-10T23:59:59.999Z"
      }
    ],
    "createdAt": "2021-10-07T17:19:27.275Z",
    "updatedAt": "2021-10-11T10:02:00.835Z",
    "__v": 0,
    "harvestTime": "2021-10-14T17:20:02.719Z",
    "rate": {
      "le": 1332,
      "hours": 168
    },
    "startTime": "2021-10-07T17:20:02.719Z",
    "hasSynergy": false,
    "needWater": false,
    "hasSeed": false,
    "inGreenhouse": false,
    "count": 119,
    "totalHarvest": 0,
    "totalExtraHarvest": 0
  },
  {
    "_id": "61602733c0a29a002979aa8d",
    "plant": {
      "farmConfig": {
        "le": 850,
        "hours": 144
      },
      "sunflowerId": 2,
      "type": 2,
      "iconUrl": "https://pvu-static.s3.ap-southeast-1.amazonaws.com/farms/mama.svg",
      "synergy": {}
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
    "isTempPlant": true,
    "stage": "farming",
    "ownerId": "0xb55378466f92e702eb350a7eb2d77ff9ba1909f3",
    "landId": 0,
    "plantId": 0,
    "plantType": 2,
    "activeTools": [
      {
        "count": 1,
        "_id": "61602733c0a29a002979aa8e",
        "id": 1,
        "type": "POT",
        "duration": 10,
        "endTime": "2021-10-18T11:11:18.042Z",
        "startTime": "2021-10-08T11:11:18.042Z"
      },
      {
        "count": 2,
        "_id": "61602733c0a29a002979aa90",
        "id": 3,
        "type": "WATER",
        "duration": 0,
        "endTime": "2021-10-11T23:59:59.999Z",
        "startTime": "2021-10-10T23:59:59.999Z"
      }
    ],
    "createdAt": "2021-10-08T11:10:43.476Z",
    "updatedAt": "2021-10-11T12:15:44.436Z",
    "__v": 0,
    "harvestTime": "2021-10-14T11:40:19.558Z",
    "rate": {
      "le": 850,
      "hours": 144
    },
    "startTime": "2021-10-08T11:11:18.051Z",
    "hasSynergy": false,
    "needWater": false,
    "hasSeed": false,
    "pausedTime": null,
    "inGreenhouse": false,
    "count": 175,
    "totalHarvest": 0,
    "totalExtraHarvest": 0
  },
  {
    "_id": "61602739276dc8001294bc1b",
    "plant": {
      "farmConfig": {
        "le": 250,
        "hours": 72
      },
      "sunflowerId": 1,
      "type": 1,
      "iconUrl": "https://pvu-static.s3.ap-southeast-1.amazonaws.com/farms/sapling.svg",
      "synergy": {}
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
    "isTempPlant": true,
    "stage": "farming",
    "ownerId": "0xb55378466f92e702eb350a7eb2d77ff9ba1909f3",
    "landId": 0,
    "plantId": 0,
    "plantType": 1,
    "activeTools": [
      {
        "count": 1,
        "_id": "61602739276dc8001294bc1c",
        "id": 1,
        "type": "POT",
        "duration": 10,
        "endTime": "2021-10-18T11:11:26.342Z",
        "startTime": "2021-10-08T11:11:26.342Z"
      },
      {
        "count": 2,
        "_id": "61602739276dc8001294bc1e",
        "id": 3,
        "type": "WATER",
        "duration": 0,
        "endTime": "2021-10-11T23:59:59.999Z",
        "startTime": "2021-10-10T23:59:59.999Z"
      }
    ],
    "createdAt": "2021-10-08T11:10:49.080Z",
    "updatedAt": "2021-10-11T12:21:16.881Z",
    "__v": 0,
    "harvestTime": "2021-10-11T22:52:43.787Z",
    "rate": {
      "le": 250,
      "hours": 72
    },
    "startTime": "2021-10-08T11:11:26.354Z",
    "hasSynergy": false,
    "needWater": false,
    "hasSeed": false,
    "pausedTime": null,
    "inGreenhouse": false,
    "count": 56,
    "totalHarvest": 0,
    "totalExtraHarvest": 0
  },
  {
    "_id": "616058bf26379a00125edd8a",
    "plant": {
      "farmConfig": {
        "le": 3580,
        "hours": 336
      },
      "stats": {
        "type": "metal",
        "hp": 0,
        "defPhysics": 0,
        "defMagic": 0,
        "damagePhysics": 0,
        "damageMagic": 308,
        "damagePure": 0,
        "damageHpLoss": 0,
        "damageHpRemove": 0
      },
      "type": 1,
      "iconUrl": "https://pvuresources.s3.ap-southeast-2.amazonaws.com/icon/plant/26_1.png",
      "rarity": 0,
      "synergy": {
        "requirement": 10,
        "description": "This land is immune to weather. Metal plants/trees productivity + 20%."
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
    "plantId": 1052610813,
    "plantUnitId": 10526108,
    "plantType": 1,
    "plantElement": "metal",
    "activeTools": [
      {
        "count": 1,
        "_id": "616058bf26379a00125edd8c",
        "id": 2,
        "type": "POT",
        "duration": 30,
        "endTime": "2021-11-07T14:42:13.390Z",
        "startTime": "2021-10-08T14:42:13.390Z"
      },
      {
        "count": 2,
        "_id": "616058bf26379a00125edd8d",
        "id": 3,
        "type": "WATER",
        "duration": 0,
        "endTime": "2021-10-11T23:59:59.999Z",
        "startTime": "2021-10-10T23:59:59.999Z"
      }
    ],
    "createdAt": "2021-10-08T14:42:07.912Z",
    "updatedAt": "2021-10-11T11:42:31.638Z",
    "__v": 0,
    "harvestTime": "2021-10-22T22:11:46.066Z",
    "rate": {
      "le": 3580,
      "hours": 336
    },
    "startTime": "2021-10-08T14:42:13.397Z",
    "hasSynergy": false,
    "needWater": false,
    "hasSeed": false,
    "pausedTime": null,
    "inGreenhouse": false,
    "count": 30,
    "totalHarvest": 0,
    "totalExtraHarvest": 0
  },
  {
    "_id": "616249663519f800129a5449",
    "plant": {
      "farmConfig": {
        "le": 250,
        "hours": 72
      },
      "sunflowerId": 1,
      "type": 1,
      "iconUrl": "https://pvu-static.s3.ap-southeast-1.amazonaws.com/farms/sapling.svg",
      "synergy": {}
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
    "isTempPlant": true,
    "stage": "farming",
    "ownerId": "0xb55378466f92e702eb350a7eb2d77ff9ba1909f3",
    "landId": 0,
    "plantId": 0,
    "plantType": 1,
    "activeTools": [
      {
        "count": 1,
        "_id": "616249663519f800129a544a",
        "id": 1,
        "type": "POT",
        "duration": 10,
        "endTime": "2021-10-20T02:01:19.220Z",
        "startTime": "2021-10-10T02:01:19.220Z"
      },
      {
        "count": 2,
        "_id": "616249663519f800129a544c",
        "id": 3,
        "type": "WATER",
        "duration": 0,
        "endTime": "2021-10-11T23:59:59.999Z",
        "startTime": "2021-10-10T23:59:59.999Z"
      }
    ],
    "createdAt": "2021-10-10T02:01:10.670Z",
    "updatedAt": "2021-10-11T06:17:28.186Z",
    "__v": 0,
    "harvestTime": "2021-10-13T02:01:19.228Z",
    "rate": {
      "le": 250,
      "hours": 72
    },
    "startTime": "2021-10-10T02:01:19.228Z",
    "hasSynergy": false,
    "needWater": false,
    "hasSeed": false,
    "inGreenhouse": false,
    "count": 147,
    "totalHarvest": 0,
    "totalExtraHarvest": 0
  },
  {
    "_id": "61627a2b60b72d00227c5ba7",
    "plant": {
      "farmConfig": {
        "le": 250,
        "hours": 72
      },
      "sunflowerId": 1,
      "type": 1,
      "iconUrl": "https://pvu-static.s3.ap-southeast-1.amazonaws.com/farms/sapling.svg",
      "synergy": {}
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
    "isTempPlant": true,
    "stage": "paused",
    "ownerId": "0xb55378466f92e702eb350a7eb2d77ff9ba1909f3",
    "landId": 0,
    "plantId": 0,
    "plantType": 1,
    "activeTools": [
      {
        "count": 1,
        "_id": "61627a2b60b72d00227c5ba8",
        "id": 1,
        "type": "POT",
        "duration": 10,
        "endTime": "2021-10-20T05:29:33.998Z",
        "startTime": "2021-10-10T05:29:33.998Z"
      },
      {
        "count": 2,
        "_id": "61627a2b60b72d00227c5baa",
        "id": 3,
        "type": "WATER",
        "duration": 0,
        "endTime": "2021-10-11T23:59:59.999Z",
        "startTime": "2021-10-10T23:59:59.999Z"
      }
    ],
    "createdAt": "2021-10-10T05:29:15.912Z",
    "updatedAt": "2021-10-11T13:21:52.672Z",
    "__v": 0,
    "harvestTime": "2021-10-13T06:11:18.154Z",
    "rate": {
      "le": 250,
      "hours": 72
    },
    "startTime": "2021-10-10T05:29:34.009Z",
    "hasSynergy": false,
    "needWater": false,
    "hasSeed": false,
    "hasCrow": true,
    "pausedTime": "2021-10-11T13:21:52.672Z",
    "inGreenhouse": false,
    "count": 104,
    "totalHarvest": 0,
    "totalExtraHarvest": 0
  }
]
```

## Exemplo de `data` com segunda planta para colher:

> { data: [] }

```json
[
  { ... },
  {
      "_id": "6168f12d90d0380021b4bb6b",
      "plant": {
        "farmConfig": {
          "le": 1100,
          "hours": 108
        },
        "stats": {
          "type": "water",
          "hp": 0,
          "defPhysics": 0,
          "defMagic": 0,
          "damagePhysics": 0,
          "damageMagic": 400,
          "damagePure": 0,
          "damageHpLoss": 0,
          "damageHpRemove": 0
        },
        "type": 1,
        "iconUrl": "https://pvuresources.s3.ap-southeast-2.amazonaws.com/icon/plant/36_2.png",
        "rarity": 1,
        "synergy": {
          "requirement": 8,
          "description": "All plants on this land are fully-watered 2/9. Water +5% productivity."
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
      "plantId": 1043626089,
      "plantUnitId": 10436260,
      "plantType": 1,
      "plantElement": "water",
      "activeTools": [
        {
          "count": 1,
          "_id": "6168f12d90d0380021b4bb6d",
          "id": 2,
          "type": "POT",
          "duration": 30,
          "endTime": "2021-11-14T03:10:42.666Z",
          "startTime": "2021-10-15T03:10:42.666Z"
        },
        {
          "count": 2,
          "_id": "6168f12d90d0380021b4bb6e",
          "id": 3,
          "type": "WATER",
          "duration": 0,
          "endTime": "2021-10-19T23:59:59.999Z",
          "startTime": "2021-10-18T23:59:59.999Z"
        }
      ],
      "createdAt": "2021-10-15T03:10:37.107Z",
      "updatedAt": "2021-10-19T15:19:15.094Z",
      "__v": 0,
      "harvestTime": "2021-10-24T03:19:15.094Z",
      "rate": {
        "le": 1100,
        "hours": 108
      },
      "startTime": "2021-10-19T15:19:15.094Z",
      "hasSynergy": false,
      "needWater": false,
      "hasSeed": false,
      "pausedTime": null,
      "inGreenhouse": false,
      "count": 192,
      "totalHarvest": 1221,
      "totalExtraHarvest": 0
    },
]
```

## fetch de pegar reward da world tree (type = numero do reward)

```js
const reward = 1;
fetch('https://backend-farm.plantvsundead.com/world-tree/claim-reward', {
  headers: {
    accept: 'application/json, text/plain, */*',
    'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    authorization:
      'Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHhiNTUzNzg0NjZmOTJlNzAyZWIzNTBhN2ViMmQ3N2ZmOWJhMTkwOWYzIiwibG9naW5UaW1lIjoxNjM0NzMyNDY5MDE4LCJjcmVhdGVEYXRlIjoiMjAyMS0xMC0wMSAyMjowNzozNyIsImlhdCI6MTYzNDczMjQ2OX0.MCpYXZ666--sv2xEq3FYl1H8g4Ohb3rAVUBNFRUUgHU',
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
  body: `{"type": ${reward}}`,
  method: 'POST',
  mode: 'cors',
});
```

## fetch de give water na world tree

```js
fetch('https://backend-farm.plantvsundead.com/world-tree/give-waters', {
  headers: {
    accept: 'application/json, text/plain, */*',
    'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    authorization:
      'Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHhiNTUzNzg0NjZmOTJlNzAyZWIzNTBhN2ViMmQ3N2ZmOWJhMTkwOWYzIiwibG9naW5UaW1lIjoxNjM0NzMyNDY5MDE4LCJjcmVhdGVEYXRlIjoiMjAyMS0xMC0wMSAyMjowNzozNyIsImlhdCI6MTYzNDczMjQ2OX0.MCpYXZ666--sv2xEq3FYl1H8g4Ohb3rAVUBNFRUUgHU',
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
  body: '{"amount":20}',
  method: 'POST',
  mode: 'cors',
});
```
