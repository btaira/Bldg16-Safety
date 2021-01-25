var APP_DATA = {
  "scenes": [
    {
      "id": "0-power-room",
      "name": "Power Room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.1628777388713978,
        "pitch": 0.07583819975950234,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 1.1194152626750586,
          "pitch": 0.11442129215732422,
          "rotation": 0,
          "target": "1-calibration-cabinet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-calibration-cabinet",
      "name": "Calibration Cabinet",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.9295393323215944,
        "pitch": 0.47107016630118714,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 1.561196411416395,
          "pitch": -0.03645948150152023,
          "rotation": 0,
          "target": "3-dans-bench"
        },
        {
          "yaw": -1.2730166921420256,
          "pitch": -0.2166327115606741,
          "rotation": 0,
          "target": "0-power-room"
        },
        {
          "yaw": 1.0857699416763502,
          "pitch": -0.03589576735477351,
          "rotation": 0,
          "target": "4-incoming"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.8903537666959664,
          "pitch": 0.42049403216151937,
          "title": "Calibrated Equipment",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-chassis-row",
      "name": "Chassis Row",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.8320806324051038,
        "pitch": 0.06643610600768568,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 1.1850606813986282,
          "pitch": -0.23076555033971857,
          "rotation": 0,
          "target": "3-dans-bench"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.710293054663616,
          "pitch": -0.03366169750642101,
          "title": "NCS5500",
          "text": "Text"
        },
        {
          "yaw": 1.947075176897897,
          "pitch": 0.3428198479582534,
          "title": "Load Cards",
          "text": "Text"
        },
        {
          "yaw": 0.8702790624969126,
          "pitch": 0.531716384122987,
          "title": "ASR9K",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-dans-bench",
      "name": "Dan's Bench",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.0723527949398903,
        "pitch": 0.06207242798869572,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -0.9437300233661468,
          "pitch": -0.21944493236537532,
          "rotation": 0,
          "target": "2-chassis-row"
        },
        {
          "yaw": 0.30773488064897236,
          "pitch": 0.0767449072379982,
          "rotation": 0,
          "target": "1-calibration-cabinet"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.2390415030231114,
          "pitch": 0.17266103976157154,
          "title": "Security Products",
          "text": "Text"
        },
        {
          "yaw": 3.0208714274796904,
          "pitch": 0.187313689193358,
          "title": "ASR-900",
          "text": "Text"
        },
        {
          "yaw": 1.2625245294856011,
          "pitch": 0.3278351598841489,
          "title": "Catalyst Edge 8000",
          "text": "Text"
        },
        {
          "yaw": 2.33672352956002,
          "pitch": -0.055640437184802494,
          "title": "BIG Power",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-incoming",
      "name": "Incoming",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.8957107537314677,
        "pitch": 0.7371503901567351,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -0.9966466306149933,
          "pitch": 0.14214615414452858,
          "rotation": 0,
          "target": "3-dans-bench"
        },
        {
          "yaw": -0.08106216521455956,
          "pitch": -0.19721991826909147,
          "rotation": 0,
          "target": "2-chassis-row"
        },
        {
          "yaw": 1.5524551653902865,
          "pitch": 0.2713181982481796,
          "rotation": 0,
          "target": "1-calibration-cabinet"
        },
        {
          "yaw": 1.6577436183257301,
          "pitch": 0.02980979914821802,
          "rotation": 0,
          "target": "0-power-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.0900212130345395,
          "pitch": 0.42052219911090205,
          "title": "To be dispositioned",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
