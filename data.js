var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room-",
      "name": "Living room ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 422,
      "initialViewParameters": {
        "yaw": 1.4993746454252168,
        "pitch": 0.14243304306746296,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": 1.1882512680642225,
          "pitch": 0.08905246396971833,
          "rotation": 0,
          "target": "1-bedroom-1"
        },
        {
          "yaw": 0.4692975716262495,
          "pitch": 0.06727835049120046,
          "rotation": 0,
          "target": "2-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 422,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.296669160278025,
          "pitch": 0.06643519697026434,
          "rotation": 0,
          "target": "0-living-room-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 375,
      "initialViewParameters": {
        "yaw": -1.9684695486596464,
        "pitch": 0.10351364902142635,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": 0.6009836026589142,
          "pitch": 0.0085265387853255,
          "rotation": 0.7853981633974483,
          "target": "0-living-room-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "First floor Low",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
