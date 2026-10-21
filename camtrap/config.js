window.CONFIG={
  "id": "H07",
  "path": "camtrap",
  "title": [
    "雲豹相機調查",
    "Camera trap detective"
  ],
  "question": [
    "沒拍到，就代表森林裡沒有嗎？",
    "Does no photo mean no animal?"
  ],
  "hint": [
    "按調查，看 100 座假想森林；增加相機數後再做一次。",
    "Survey 100 imaginary forests. Add cameras, then repeat with the same seed."
  ],
  "controls": [
    {
      "key": "cameras",
      "label": [
        "相機數",
        "Cameras"
      ],
      "min": 1,
      "max": 20,
      "step": 1,
      "value": 3,
      "unit": "台 / cameras",
      "options": null
    },
    {
      "key": "days",
      "label": [
        "調查天數",
        "Survey days"
      ],
      "min": 1,
      "max": 30,
      "step": 1,
      "value": 5,
      "unit": "天 / days",
      "options": null
    },
    {
      "key": "p",
      "label": [
        "每台每天偵測率",
        "Detection per camera-day"
      ],
      "min": 0,
      "max": 100,
      "step": 1,
      "value": 5,
      "unit": "%",
      "options": null
    },
    {
      "key": "seed",
      "label": [
        "假想結果批號",
        "Sample number"
      ],
      "min": 1,
      "max": 999,
      "step": 1,
      "value": 42,
      "unit": "",
      "options": null
    }
  ],
  "action": [
    "調查100座",
    "Survey 100"
  ],
  "mission": [
    "有動物卻沒拍到，可能是？",
    "An animal exists but no photo is taken. Why?"
  ],
  "options": [
    [
      "偵測機率不夠高",
      "Detection was imperfect"
    ],
    [
      "動物一定不存在",
      "Definitely absent"
    ]
  ],
  "answer": 0,
  "reason": [
    "每次都可能漏拍；增加獨立觀測降低漏檢機率，但不替真實保育現況下結論。",
    "Each observation can miss. More independent observations reduce misses, without deciding real conservation status."
  ],
  "comparisons": [
    {
      "label": [
        "1／10 台相機",
        "1 / 10 cameras"
      ],
      "key": "cameras",
      "a": 1,
      "b": 10
    },
    {
      "label": [
        "1／20 天",
        "1 / 20 days"
      ],
      "key": "days",
      "a": 1,
      "b": 20
    },
    {
      "label": [
        "反例：偵測率 0",
        "Counterexample: detection 0"
      ],
      "key": "p",
      "a": 5,
      "b": 0
    }
  ],
  "limit": [
    "假設每個森林都有一隻假想動物，所有相機日獨立、偵測率相同、物種可被偵測。真實相機常相關；遊戲結果不能判定台灣雲豹仍存在，也不是 P(不存在｜沒拍到)。 每格是一座假想森林，不是一天或一台相機；兩秒播放只是依序揭開100組結果，不是調查所需時間。換種子改變假想抽樣，並不表示真實動物出現或消失。",
    "Every imaginary forest contains an animal. Camera-days are independent with equal detection probability and availability. Real cameras can be correlated. This is not evidence of surviving Formosan clouded leopards or P(absent | no photo). Each cell is one imaginary forest, not a day or a camera. The two-second playback reveals 100 simulation results; it is not survey duration. Changing the seed changes a synthetic sample, not real animal presence."
  ],
  "formula": "n = cameras × days\nP(no detection | present) = (1 − p)^n\n100 seeded Bernoulli surveys\nNo Bayesian absence probability is calculated\nSample number is the random seed; identical settings and sample number reproduce the grid.",
  "source": [
    "https://www.usgs.gov/publications/a-cautionary-note-substituting-spatial-subunits-repeated-temporal-sampling-studies",
    "USGS · Imperfect detection and independent surveys"
  ],
  "ep": "269",
  "date": "2026-10-04",
  "episodeTitle": "幽靈貓的傳說：探索台灣雲豹的神祕足跡與消失之謎",
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277",
    "verified": false
  },
  "defaults": {
    "cameras": 3,
    "days": 5,
    "p": 5,
    "seed": 42
  },
  "keywords": "雲豹,相機陷阱,偵測機率,漏拍,相機日,獨立觀測,伯努利試驗,抽樣波動,動物調查,科學好好聽,clouded leopard,camera trap,imperfect detection,camera-days,Bernoulli trials,sampling variation,animal surveys,interactive science",
  "description": [
    "調相機數、天數與偵測率，逐步揭開100座有動物的假想森林，分清漏拍機率與抽樣結果；不從遊戲判定保育現況。",
    "Change cameras, days and detection, then reveal 100 occupied imaginary forests. Compare theoretical miss probability and synthetic samples without inferring real conservation status."
  ],
  "formulaZh": "調查次數 n = 相機數 × 天數\n在動物存在的條件下：P(一次都沒拍到 | 存在) = (1 − p)^n\np 是每次獨立調查的拍到機率\n以固定種子重現 100 組伯努利調查\n沒有計算「沒拍到後，動物不存在的機率」。\n批號作為固定亂數種子；同設定、同批號重做，格圖相同。",
  "dateModified": "2026-10-12"
};
