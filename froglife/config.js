window.CONFIG={
  "id": "G01",
  "path": "froglife",
  "title": [
    "青蛙的器官與棲地",
    "Frog stages and habitats"
  ],
  "question": [
    "換了身體，住哪裡、吃什麼也要換嗎？",
    "As the body changes, do habitat and food change too?"
  ],
  "hint": [
    "先選階段，再搭配呼吸、食物和棲地；綠色表示符合本例。",
    "Choose a stage, then match breathing, food and habitat. Green matches this example."
  ],
  "controls": [
    {
      "key": "stage",
      "label": [
        "觀察階段",
        "Inspect stage"
      ],
      "min": 0,
      "max": 3,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "卵",
          "Egg"
        ],
        [
          "蝌蚪",
          "Tadpole"
        ],
        [
          "幼蛙",
          "Froglet"
        ],
        [
          "成蛙",
          "Adult"
        ]
      ]
    },
    {
      "key": "breath",
      "label": [
        "主要交換方式（示例）",
        "Main gas exchange (example)"
      ],
      "min": 0,
      "max": 2,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "卵膜",
          "Egg membrane"
        ],
        [
          "鰓＋皮膚",
          "Gills + skin"
        ],
        [
          "肺＋皮膚",
          "Lungs + skin"
        ]
      ]
    },
    {
      "key": "food",
      "label": [
        "食物安排（示例）",
        "Food provision (example)"
      ],
      "min": 0,
      "max": 2,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "卵內養分",
          "Egg reserves"
        ],
        [
          "藻類等",
          "Algae etc."
        ],
        [
          "小昆蟲等",
          "Small insects etc."
        ]
      ]
    },
    {
      "key": "habitat",
      "label": [
        "棲地安排",
        "Habitat provision"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 0,
      "unit": "",
      "options": [
        [
          "水中",
          "In water"
        ],
        [
          "潮濕岸邊",
          "Moist shore"
        ]
      ]
    }
  ],
  "action": [
    "觀察機制",
    "Watch"
  ],
  "mission": [
    "所有青蛙都有自由游泳的蝌蚪嗎？",
    "Do all frogs have a free-swimming tadpole stage?"
  ],
  "options": [
    [
      "不是，部分直接發育",
      "No; some develop directly"
    ],
    [
      "全部一樣",
      "All are the same"
    ]
  ],
  "answer": 0,
  "reason": [
    "這裡示範常見的水生蝌蚪型生活史；科基蛙從卵孵出小蛙，沒有自由游泳的蝌蚪階段。",
    "This example uses a common aquatic-tadpole life cycle. Coquí hatch as froglets without a free-swimming tadpole stage."
  ],
  "comparisons": [
    {
      "label": [
        "蝌蚪／成蛙需求",
        "Tadpole / adult needs"
      ],
      "key": "stage",
      "a": 1,
      "b": 3
    },
    {
      "label": [
        "水中／潮濕岸邊",
        "Water / moist shore"
      ],
      "key": "habitat",
      "a": 0,
      "b": 1
    },
    {
      "label": [
        "藻類／小昆蟲",
        "Algae / small insects"
      ],
      "key": "food",
      "a": 1,
      "b": 2
    }
  ],
  "limit": [
    "依常見水生蝌蚪型列出階段需求，配對是教材分類，非存活率。蛙類食性、呼吸與棲地有物種差異；蝌蚪不全是素食。肺與皮膚都能參與成蛙交換，不是變形瞬間關掉所有鰓。可回看階段，不代表生物能倒退發育。",
    "A common aquatic-tadpole sequence; matching categories are teaching tools, not survival rates. Diet, breathing and habitat vary by species; not all tadpoles are herbivores. Lungs and skin both contribute in adults; changes are gradual. Reviewing stages does not reverse development."
  ],
  "formula": "Sequence = egg → tadpole → froglet → adult\nMatch requirements[stage] with selected provision\nException: Eleutherodactylus coqui develops directly",
  "source": [
    "https://www.nps.gov/teachers/classrooms/life-cycles.htm",
    "NPS · Life cycles (exception: USGS coquí species profile)"
  ],
  "ep": "187",
  "date": "2026-10-03",
  "episodeTitle": "變態日記：從吃素的蝌蚪到吃肉的青蛙",
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277",
    "verified": false
  },
  "defaults": {
    "stage": 1,
    "breath": 1,
    "food": 1,
    "habitat": 0
  },
  "keywords": "青蛙的器官與棲地,Frog stages and habitats,科學好好聽,動物科學,兒童科學,互動實驗,animal science,science for kids,interactive experiment",
  "description": [
    "換了身體，住哪裡、吃什麼也要換嗎？ 直接調整條件，探索動物機制的教學模型。",
    "As the body changes, do habitat and food change too? Change conditions and explore an educational animal mechanism model."
  ],
  "icon": "🐸",
  "extraSources": [
    [
      "https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=60",
      "USGS · Coquí direct development"
    ]
  ],
  "dateModified": "2026-10-09"
};
