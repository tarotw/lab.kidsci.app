window.CONFIG={
  "id": "A09",
  "path": "snowpaw",
  "title": [
    "雪豹的雪地靴",
    "Snow leopard snowshoes"
  ],
  "question": [
    "腳掌變大，雪地上的壓力怎麼變？",
    "How do wider paws change pressure?"
  ],
  "hint": [
    "把接觸面積從 400 改成 800 cm²，留意壓力數字和腳印。",
    "Change contact area from 400 to 800 cm². Watch pressure and the footprint."
  ],
  "controls": [
    {
      "key": "area",
      "label": [
        "總接觸面積",
        "Total contact area"
      ],
      "min": 100,
      "max": 1000,
      "step": 20,
      "value": 400,
      "unit": "cm²",
      "options": null
    },
    {
      "key": "mass",
      "label": [
        "身體質量",
        "Body mass"
      ],
      "min": 20,
      "max": 80,
      "step": 1,
      "value": 40,
      "unit": "kg",
      "options": null
    },
    {
      "key": "snow",
      "label": [
        "雪的承載閾值",
        "Snow threshold"
      ],
      "min": 2,
      "max": 20,
      "step": 0.5,
      "value": 8,
      "unit": "kPa",
      "options": null
    }
  ],
  "action": [
    "踩一次",
    "Press paw"
  ],
  "mission": [
    "面積加倍、體重相同，壓力會？",
    "Double the area, same mass: pressure becomes…"
  ],
  "options": [
    [
      "一半",
      "Half"
    ],
    [
      "兩倍",
      "Twice"
    ]
  ],
  "answer": 0,
  "reason": [
    "同樣重量分散到較大面積，平均壓力就降低。",
    "The same weight spread over more area gives lower average pressure."
  ],
  "comparisons": [
    {
      "label": [
        "400／800 cm²",
        "400 / 800 cm²"
      ],
      "key": "area",
      "a": 400,
      "b": 800
    },
    {
      "label": [
        "40／80 kg",
        "40 / 80 kg"
      ],
      "key": "mass",
      "a": 40,
      "b": 80
    },
    {
      "label": [
        "反例：很鬆的雪",
        "Counterexample: weak snow"
      ],
      "key": "snow",
      "a": 8,
      "b": 2
    }
  ],
  "limit": [
    "使用總承重接觸面積。陷入只是閾值示意，沒有真實深度；真雪有壓實、破壞與步態差異。",
    "Area is total load-bearing contact. Sinking is a threshold illustration with no real depth; actual snow compacts and fails."
  ],
  "formula": "P = mg / A\nm: mass in kg; A: area in m²; g = 9.81 m/s²\n1 cm² = 0.0001 m²; 1 kPa = 1000 Pa\nSink illustration = clamp((P − threshold) / threshold, 0, 1)\nclamp limits a value to 0…1; this does not predict real snow depth.",
  "source": [
    "https://snowleopard.org/snow-leopard-facts/physical-features/",
    "Snow Leopard Trust · Physical features"
  ],
  "ep": "233",
  "date": "2026-10-03",
  "episodeTitle": "〈VIP｜雪山之鬼：雪豹的極限生存黑科技與驚人基因秘密｜EP.233〉",
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277?i=1000772783409",
    "verified": true,
    "duration": "約16分鐘",
    "durationEn": "About 16 min",
    "access": [
      "訂閱者限定",
      "Subscribers only"
    ],
    "reviewed": "2026-10-06",
    "officialImage": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource211/v4/9e/23/d1/9e23d1f0-b177-cdef-98e9-acb9a4eb17d4/55102f15-5a80-43ae-b3bb-912eed93e1b0.jpg/250x250bb.webp"
  },
  "defaults": {
    "area": 400,
    "mass": 40,
    "snow": 8
  },
  "keywords": "雪豹的雪地靴,Snow leopard snowshoes,科學好好聽,兒童科學,互動實驗,science for kids,interactive experiment,腳掌,承重接觸面積,壓力,重量,雪地,平均壓力,雪豹適應,paws,contact area,pressure,weight force,snow,snow leopard adaptations",
  "description": [
    "腳掌變大，雪地上的壓力怎麼變？ 動手調整、比較與解釋，探索動物機制的教學模型。",
    "How do wider paws change pressure? Change conditions, compare results and explain an educational model of animal mechanisms."
  ],
  "formulaZh": "壓力 P = mg / A\n質量 m 用 kg，面積 A 用 m²，重力加速度 g = 9.81 m/s²\n1 cm² = 0.0001 m²；1 kPa = 1000 Pa\n下陷示意量 = clamp((壓力 − 示範門檻) / 示範門檻, 0, 1)\nclamp 表示把數值限制在 0 到 1；不預測真實雪地的下陷深度。",
  "dateModified": "2026-10-07"
};
