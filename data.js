var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.016010361203800727,
        "pitch": -0.1037355657127037,
        "fov": 1.1484881807277594
      },
      "linkHotspots": [
        {
          "yaw": -1.8975832826744856,
          "pitch": 0.09822881209569445,
          "rotation": 4.71238898038469,
          "target": "1-dining"
        },
        {
          "yaw": -1.6700060694947503,
          "pitch": 0.12224798991664443,
          "rotation": 0.7853981633974483,
          "target": "2-stair"
        },
        {
          "yaw": -1.587841184330987,
          "pitch": 0.27800502241562697,
          "rotation": 1.5707963267948966,
          "target": "3-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining",
      "name": "dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.17295713179701977,
        "pitch": -0.05494214675836062,
        "fov": 1.1484881807277594
      },
      "linkHotspots": [
        {
          "yaw": -1.8615304994040685,
          "pitch": 0.2558184576985898,
          "rotation": 0,
          "target": "0-living"
        },
        {
          "yaw": 2.8734312743917876,
          "pitch": 0.04450002862626867,
          "rotation": 0,
          "target": "3-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-stair",
      "name": "stair",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.010685689297922352,
        "pitch": -0.05006041410094575,
        "fov": 1.325599857056214
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "3-patio",
      "name": "patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "360 out",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
