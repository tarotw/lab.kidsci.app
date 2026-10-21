window.CONFIG={
  "id": "F05",
  "path": "dungnav",
  "title": [
    "糞金龜的星空指南針",
    "Dung beetle sky compass"
  ],
  "question": [
    "遮住天空，直走會變難嗎？",
    "Is straight travel harder under a covered sky?"
  ],
  "hint": [
    "先按逐步10步，看青點往哪走，再只改一項條件重看。",
    "Step 10 steps, watch the cyan point, then change one setting and replay."
  ],
  "controls": [
    {
      "key": "cue",
      "label": [
        "天空線索",
        "Sky cue"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "遮住",
          "Covered"
        ],
        [
          "看得到",
          "Visible"
        ]
      ]
    },
    {
      "key": "rotation",
      "label": [
        "天空線索旋轉",
        "Sky-cue rotation"
      ],
      "min": -90,
      "max": 90,
      "step": 15,
      "value": 0,
      "unit": "°",
      "options": null
    },
    {
      "key": "noise",
      "label": [
        "每步方向擾動",
        "Noise per step"
      ],
      "min": 0,
      "max": 30,
      "step": 5,
      "value": 15,
      "unit": "°",
      "options": null
    },
    {
      "key": "seed",
      "label": [
        "可重做的種子",
        "Repeatable seed"
      ],
      "min": 1,
      "max": 99,
      "step": 1,
      "value": 42,
      "unit": "",
      "options": null
    }
  ],
  "action": [
    "走80步",
    "Walk 80 steps"
  ],
  "mission": [
    "天空轉動，方向跟著轉，支持什麼想法？",
    "If heading shifts when the sky cue rotates, what does it support?"
  ],
  "options": [
    [
      "天空能提供方向線索",
      "The sky can provide a directional cue"
    ],
    [
      "知道每顆星的名字",
      "It knows every star’s name"
    ]
  ],
  "answer": 0,
  "reason": [
    "研究中的夜行糞金龜 Scarabaeus satyrus 利用銀河亮度分布等線索，並非辨識人類星座。",
    "In studies, nocturnal Scarabaeus satyrus uses cues including Milky Way brightness patterns, rather than human constellations."
  ],
  "comparisons": [
    {
      "label": [
        "天空遮住／可見",
        "Sky covered / visible"
      ],
      "key": "cue",
      "a": 0,
      "b": 1
    },
    {
      "label": [
        "天空 0°／30°",
        "Sky 0° / 30°"
      ],
      "key": "rotation",
      "a": 0,
      "b": 30
    },
    {
      "label": [
        "反例：擾動增加",
        "Counterexample: more noise"
      ],
      "key": "noise",
      "a": 5,
      "b": 30
    }
  ],
  "limit": [
    "80步、每步1個教具距離單位，從0°開始。擾動、0.2校正比例與2秒播放皆為自訂，非實測路程、速度或神經模型。路徑和讀值只列已走步；0步的直行程度與RMS不定義，對照卡保留各組完整80步。同種子配對每步隨機抽樣，不保證每個種子或每個指標都改善；直行程度不是成功率。天空遮住時旋轉不改路徑，只改人為誤差參考。本例不找家，也不識別星名；相關研究是特定夜行滾糞蟲，不能推成所有糞金龜。2025勘誤將2013原文一處滾動速度單位由m/s更正為cm/s；作者說明統計原已用正確單位，結論不變。本頁不採用該實測速度。",
    "80 steps, 1 toy distance unit each, starting at 0°. Perturbations, 20% correction and 2 s playback are invented, not measured travel, speed or neural processing. Path and readings cover completed steps; straightness and RMS are undefined at 0. Cards retain full 80-step endpoints. Matched seeds pair random draws, without guaranteeing improvement for every seed or metric; straightness is not success. Covered rotation changes only the human error reference, not the path. This does not find home or identify star names; research concerns particular nocturnal ball rollers, not all dung beetles. The 2025 correction changes a printed rolling-speed unit from m/s to cm/s. The authors state that analyses used the correct unit and conclusions are unchanged. This toy does not use that measured speed."
  ],
  "formula": "Each step adds seeded uniform angular perturbation in [−noise, +noise] degrees.\nVisible cue: add 0.2 × the shortest signed turn from heading to cue angle.\nx += sin(heading); y += cos(heading); each step is 1 toy distance unit.\nCurrent path length = completed steps; displacement = straight distance from start.\nStraightness = displacement/path (undefined at 0 steps; not success probability).\nError = RMS of shortest heading−reference angles over completed steps.\nWhen covered, reference rotation changes only the error benchmark, not the route.",
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/23352694/",
    "Dacke et al. (2013) · Dung beetles use the Milky Way"
  ],
  "ep": "246",
  "date": "2026-10-03",
  "episodeTitle": "閃耀的黃金活寶石：仰望星空的滾糞蟲",
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277",
    "verified": false
  },
  "defaults": {
    "cue": 1,
    "rotation": 0,
    "noise": 15,
    "seed": 42
  },
  "keywords": "糞金龜,滾糞蟲,銀河,天光線索,方向導航,路程與位移,固定種子,兒童科學,科學好好聽,dung beetle,Milky Way,sky compass,celestial orientation,path and displacement,seeded perturbations,science for kids",
  "description": [
    "用同種子的80步教具，比較看得見或遮住天光時的方向漂移；旋轉線索、逐步走路，核對目前路程、位移與方向誤差。",
    "Compare heading drift over 80 matched-seed toy steps with a visible or covered sky cue. Rotate the cue, walk in steps and inspect current path, displacement and angular error."
  ],
  "icon": "🌌",
  "dateModified": "2026-10-20",
  "formulaZh": "每步：方向加上固定種子的擾動（−擾動幅度至＋幅度，度）\n看得到時：方向再加0.2×「線索角度−方向」的最短轉角\nx增加sin(方向)，y增加cos(方向)；每步長1個教具距離單位\n目前路程＝已走步數；位移＝起點到目前點的直線距離\n直行程度＝位移÷路程（0步不定義；不是成功率）\n方向誤差＝已走各步相對參考方向的最短角度之均方根\n遮住時轉參考方向只改誤差基準，不改路徑。",
  "extraSources": [
    [
      "https://pubmed.ncbi.nlm.nih.gov/40651468/",
      "Dacke et al. (2025) · Rolling-speed unit correction: cm/s"
    ],
    [
      "https://pubmed.ncbi.nlm.nih.gov/28193823/",
      "Foster et al. (2017) · Stellar performance: study scope"
    ]
  ]
};
