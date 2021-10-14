# Anotacoes:

## CURL de POST de espantalho pra tirar corvo:

```
curl 'https://backend-farm.plantvsundead.com/farms/apply-tool' \
  -H 'authority: backend-farm.plantvsundead.com' \
  -H 'sec-ch-ua: "Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"' \
  -H 'dnt: 1' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'authorization: Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHhiNTUzNzg0NjZmOTJlNzAyZWIzNTBhN2ViMmQ3N2ZmOWJhMTkwOWYzIiwibG9naW5UaW1lIjoxNjMzOTUzODQ2NjMyLCJjcmVhdGVEYXRlIjoiMjAyMS0xMC0wMSAyMjowNzozNyIsImlhdCI6MTYzMzk1Mzg0Nn0.pZ_7RenboTAAvlysFSxtYKWJ-UWKpmGc0R5o96UjzbM' \
  -H 'content-type: application/json;charset=UTF-8' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36' \
  -H 'sec-ch-ua-platform: "Windows"' \
  -H 'origin: https://marketplace.plantvsundead.com' \
  -H 'sec-fetch-site: same-site' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://marketplace.plantvsundead.com/' \
  -H 'accept-language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7' \
  --data-raw '{"farmId":"61627a2b60b72d00227c5ba7","toolId":4,"token":{"challenge":"default","seccode":"default","validate":"default"}}' \
  --compressed
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
        "endTime": "2021-10-14T23:59:59.999Z",
        "startTime": "2021-10-13T23:59:59.999Z"
      }
    ],
    "createdAt": "2021-10-07T17:19:27.275Z",
    "updatedAt": "2021-10-14T08:19:37.313Z",
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
    "pausedTime": null,
    "inGreenhouse": false,
    "count": 46,
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
    "stage": "cancelled",
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
        "endTime": "2021-10-14T23:59:59.999Z",
        "startTime": "2021-10-13T23:59:59.999Z"
      }
    ],
    "createdAt": "2021-10-08T11:10:43.476Z",
    "updatedAt": "2021-10-14T12:29:18.370Z",
    "__v": 0,
    "harvestTime": "2021-10-14T12:28:58.270Z",
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
    "count": 132,
    "totalHarvest": 850,
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
        "endTime": "2021-10-14T23:59:59.999Z",
        "startTime": "2021-10-13T23:59:59.999Z"
      }
    ],
    "createdAt": "2021-10-08T14:42:07.912Z",
    "updatedAt": "2021-10-14T05:50:36.836Z",
    "__v": 0,
    "harvestTime": "2021-10-22T22:44:07.754Z",
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
    "count": 156,
    "totalHarvest": 0,
    "totalExtraHarvest": 0
  },
  {
    "_id": "6164dc148af8d80020e046de",
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
        "_id": "6164dc148af8d80020e046df",
        "id": 1,
        "type": "POT",
        "duration": 10,
        "endTime": "2021-10-22T00:54:12.454Z",
        "startTime": "2021-10-12T00:54:12.454Z"
      },
      {
        "count": 2,
        "_id": "6164dc148af8d80020e046e1",
        "id": 3,
        "type": "WATER",
        "duration": 0,
        "endTime": "2021-10-14T23:59:59.999Z",
        "startTime": "2021-10-13T23:59:59.999Z"
      }
    ],
    "createdAt": "2021-10-12T00:51:32.533Z",
    "updatedAt": "2021-10-14T12:33:36.828Z",
    "__v": 0,
    "harvestTime": "2021-10-15T05:06:36.140Z",
    "rate": {
      "le": 250,
      "hours": 72
    },
    "startTime": "2021-10-12T00:54:12.493Z",
    "hasSynergy": false,
    "needWater": false,
    "hasSeed": false,
    "pausedTime": null,
    "inGreenhouse": false,
    "count": 70,
    "totalHarvest": 0,
    "totalExtraHarvest": 0
  },
  {
    "_id": "61664b06deb3c1001206a35b",
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
        "_id": "61664b06deb3c1001206a35c",
        "id": 1,
        "type": "POT",
        "duration": 10,
        "endTime": "2021-10-23T03:08:32.242Z",
        "startTime": "2021-10-13T03:08:32.242Z"
      },
      {
        "count": 2,
        "_id": "61664b06deb3c1001206a35e",
        "id": 3,
        "type": "WATER",
        "duration": 0,
        "endTime": "2021-10-14T23:59:59.999Z",
        "startTime": "2021-10-13T23:59:59.999Z"
      }
    ],
    "createdAt": "2021-10-13T02:57:10.943Z",
    "updatedAt": "2021-10-14T11:19:27.276Z",
    "__v": 0,
    "harvestTime": "2021-10-16T03:08:32.254Z",
    "rate": {
      "le": 250,
      "hours": 72
    },
    "startTime": "2021-10-13T03:08:32.254Z",
    "hasSynergy": false,
    "needWater": false,
    "hasSeed": false,
    "inGreenhouse": false,
    "count": 130,
    "totalHarvest": 0,
    "totalExtraHarvest": 0
  },
  {
    "_id": "6166bf5a05f8db0012467f5e",
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
        "_id": "6166bf5a05f8db0012467f5f",
        "id": 1,
        "type": "POT",
        "duration": 10,
        "endTime": "2021-10-23T11:13:37.346Z",
        "startTime": "2021-10-13T11:13:37.346Z"
      },
      {
        "count": 2,
        "_id": "6166bf5a05f8db0012467f61",
        "id": 3,
        "type": "WATER",
        "duration": 0,
        "endTime": "2021-10-14T23:59:59.999Z",
        "startTime": "2021-10-13T23:59:59.999Z"
      }
    ],
    "createdAt": "2021-10-13T11:13:30.659Z",
    "updatedAt": "2021-10-14T11:26:02.292Z",
    "__v": 0,
    "harvestTime": "2021-10-16T11:13:37.352Z",
    "rate": {
      "le": 250,
      "hours": 72
    },
    "startTime": "2021-10-13T11:13:37.352Z",
    "hasSynergy": false,
    "needWater": false,
    "hasSeed": false,
    "inGreenhouse": false,
    "count": 96,
    "totalHarvest": 0,
    "totalExtraHarvest": 0
  }
]
```
