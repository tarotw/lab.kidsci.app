window.CONFIG={
  "id": "E05",
  "path": "silklab",
  "title": [
    "蜘蛛絲材料實驗室",
    "Silk materials lab"
  ],
  "question": [
    "很難拉斷，就一定最能接住小球嗎？",
    "Does the strongest material catch the most energy?"
  ],
  "hint": [
    "先換材料再拉伸，看強度與做功；接球或逐步都換未預拉的新試片。",
    "Choose material and extend it to compare strength and work. Drop or step uses a fresh, unstretched sample."
  ],
  "controls": [
    {
      "key": "mat",
      "label": [
        "同尺寸材料",
        "Same-size material"
      ],
      "min": 0,
      "max": 2,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "硬脆",
          "Brittle"
        ],
        [
          "蛛絲啟發",
          "Silk-like"
        ],
        [
          "柔軟",
          "Stretchy"
        ]
      ]
    },
    {
      "key": "stretch",
      "label": [
        "伸長比例",
        "Extension"
      ],
      "min": 0,
      "max": 65,
      "step": 1,
      "value": 0,
      "unit": "%",
      "options": null
    },
    {
      "key": "ball",
      "label": [
        "小球質量",
        "Ball mass"
      ],
      "min": 10,
      "max": 1000,
      "step": 10,
      "value": 400,
      "unit": "g",
      "options": null
    }
  ],
  "action": [
    "新試片接球",
    "Fresh drop"
  ],
  "mission": [
    "哪一個量代表斷裂前吸收的能量？",
    "Which shows energy absorbed before failure?"
  ],
  "options": [
    [
      "曲線最高點",
      "Curve peak"
    ],
    [
      "曲線下面積",
      "Area under curve"
    ]
  ],
  "answer": 1,
  "reason": [
    "強度看最大應力；韌性看整段曲線的面積，也要考慮伸長。",
    "Strength is peak stress. Toughness is the area under the curve, including extension."
  ],
  "comparisons": [
    {
      "label": [
        "硬脆／蛛絲啟發",
        "Brittle / silk-like"
      ],
      "key": "mat",
      "a": 0,
      "b": 1
    },
    {
      "label": [
        "蛛絲啟發／柔軟",
        "Silk-like / stretchy"
      ],
      "key": "mat",
      "a": 1,
      "b": 2
    },
    {
      "label": [
        "反例：更重的小球",
        "Counterexample: heavier ball"
      ],
      "key": "ball",
      "a": 400,
      "b": 1000
    }
  ],
  "limit": [
    "三條是合成拉伸教具曲線，不是蜘蛛絲、鋼或橡膠的實測。試片同長10 cm、截面0.1 mm²，體積10 mm³。曲線面積乘體積為拉伸做功，不表示全部能量可回收。入射檢查用未預拉新試片與10 cm落差的mgh；不計接觸後重力做功、回彈、黏著、幾何、載入速率或固定端破壞，只比較理想能量容量，不保證真實接球。兩秒動畫、球與斷裂位置都是示意，不求碰撞運動或斷裂後形變。",
    "Three synthetic tensile curves, not measured silk, steel or rubber. Samples share length 10 cm, area 0.1 mm² and volume 10 mm³. Curve area × volume is tensile work, not necessarily recoverable energy. Incident checks use fresh, unstretched samples and mgh over 10 cm. Gravity work after contact, rebound, adhesion, geometry, loading rate and support failure are omitted. Only ideal energy capacity is compared; catching is not guaranteed. The two-second animation, ball and broken icon are illustrative, not collision or post-failure dynamics."
  ],
  "formula": "Strength = max(stress); toughness = ∫ to failure stress d(strain)\nMPa = MJ/m³; strain = extension / original length\nVolume = 0.1 m × 10⁻⁷ m² = 10⁻⁸ m³ = 10 mm³\nTensile work = shaded area × volume; capacity = total area × volume\nWork is not necessarily all recoverable.\nIncident energy = mgh; m in kg, g = 9.81 m/s², h = 0.1 m\nGravity work after contact and rebound are omitted; catching is not guaranteed.",
  "source": [
    "https://web.mit.edu/mbuehler/www/papers/Nature_2012_wc.pdf",
    "Cranford et al., Nature (2012)"
  ],
  "ep": "261",
  "date": "2026-10-07",
  "episodeTitle": "超級建築師：蜘蛛結網的秘密工程與科學奇蹟",
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277",
    "verified": false,
    "verificationStatus": "2026-10-10 Apple Taiwan ready show-all list, actual internal search261 submitted with Enter, explicit no matching result. Not proof of nonexistence. No unique episode ID/duration/art verified; retain official show link and logo."
  },
  "defaults": {
    "mat": 1,
    "stretch": 0,
    "ball": 400
  },
  "keywords": "蜘蛛絲,強度,韌性,應力應變,拉伸做功,斷裂,曲線積分,能量容量,spider silk,strength,toughness,stress strain,tensile work,fracture,curve integration,energy capacity,science for kids,科學好好聽",
  "description": [
    "用同尺寸的合成材料曲線，比較最高應力、韌性與拉伸做功；逐步觀察新試片入射能量與理想容量的比較。",
    "Compare peak stress, toughness and tensile work in equal-size synthetic specimens. Step through a fresh-sample illustration and compare incident energy with ideal capacity."
  ],
  "formulaZh": "強度 = 應力最大值；韌性 = ∫到斷點 應力 d(應變)\nMPa = MJ/m³；應變 = 伸長量 ÷ 原長度\n試片體積 = 0.1 m × 10⁻⁷ m² = 10⁻⁸ m³ = 10 mm³\n拉伸做功 = 填色面積 × 體積；容量 = 完整曲線面積 × 體積\n這些做功不一定全部可回收。\n入射能量 = mgh；m以kg、g = 9.81 m/s²、h = 0.1 m\n接觸後重力做功與回彈未模擬，不保證實際接住。",
  "dateModified": "2026-10-10"
};
