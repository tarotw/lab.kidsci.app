window.CONFIG={
  "id": "A11",
  "path": "footpad",
  "title": [
    "大象腳掌緩衝墊",
    "Elephant cushion lab"
  ],
  "question": [
    "腳墊越軟，就一定越能緩衝嗎？",
    "Is a softer cushion always better?"
  ],
  "hint": [
    "按落下看腳墊壓縮；換軟墊，注意是否觸底和力曲線。",
    "Drop the test mass. Try a softer pad and check bottoming and the force curve."
  ],
  "controls": [
    {
      "key": "height",
      "label": [
        "示例落下高度",
        "Test drop height"
      ],
      "min": 0,
      "max": 10,
      "step": 0.5,
      "value": 4,
      "unit": "cm",
      "options": null
    },
    {
      "key": "k",
      "label": [
        "腳墊硬度",
        "Pad stiffness"
      ],
      "min": 1,
      "max": 80,
      "step": 1,
      "value": 10,
      "unit": "kN/m",
      "options": null
    },
    {
      "key": "damp",
      "label": [
        "壓縮阻尼",
        "Compression damping"
      ],
      "min": 0,
      "max": 1000,
      "step": 50,
      "value": 250,
      "unit": "N·s/m",
      "options": null
    },
    {
      "key": "window",
      "label": [
        "受力曲線範圍",
        "Force-curve range"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 0,
      "unit": "",
      "options": [
        [
          "放大前0.3秒",
          "Zoom first 0.3 s"
        ],
        [
          "完整1.5秒",
          "Full 1.5 s"
        ]
      ]
    }
  ],
  "action": [
    "讓重物落下",
    "Drop test mass"
  ],
  "mission": [
    "很軟的腳墊壓到最底時，可能？",
    "A very soft pad bottoms out. What may happen?"
  ],
  "options": [
    [
      "碰到硬底、力變大",
      "Hard-stop force rises"
    ],
    [
      "一定最安全",
      "Always safest"
    ]
  ],
  "answer": 0,
  "reason": [
    "較長減速距離有助緩衝，但太軟觸底會遇到硬底；阻尼也不是越大越好。",
    "Longer stopping distance can cushion impact, but too-soft pads hit the hard stop. More damping is not always better."
  ],
  "comparisons": [
    {
      "label": [
        "硬墊／適中墊",
        "Stiff / moderate pad"
      ],
      "key": "k",
      "a": 60,
      "b": 10
    },
    {
      "label": [
        "無阻尼／適中阻尼",
        "No / moderate damping"
      ],
      "key": "damp",
      "a": 0,
      "b": 250
    },
    {
      "label": [
        "反例：過軟觸底",
        "Counterexample: too soft"
      ],
      "key": "k",
      "a": 10,
      "b": 1,
      "base": {
        "height": 10,
        "damp": 0
      }
    }
  ],
  "limit": [
    "非洲象足墊是脂肪與纖維組織。此圖是 10 kg 示例質點落在 8 cm 厚彈簧墊，觸底硬度 2 MN/m，單向壓縮阻尼；不是象體重、骨折或安全高度模型。 1.5秒計算以12秒展示（慢8倍），逐步18.75毫秒模型時間。點曲線或方向鍵改觀察時刻，參數不變。首次零速未在視窗內發生時，平均力與淨衝量不填，不等於没有減速。",
    "African elephant cushions contain fat and fibrous tissue. A 10 kg test mass drops onto an 8 cm spring pad with a 2 MN/m hard stop and compression-only damping. No injury or safe-height prediction. The 1.5 s calculation plays over 12 s (8× slow); Step advances 18.75 ms model time. Selecting a curve point or using arrows changes observation time, not parameters. Missing first-zero-speed events leave mean force/net impulse blank; this does not imply no braking."
  ],
  "formula": "m y″ = mg - Fcontact; m = 10 kg\nFor y < 0 (no contact): Fcontact = 0\nFor y >= 0: Fcontact = ky + c max(v,0) + Fstop\nFstop = 2,000,000 max(y - 0.08,0) N\ny in m; v in m/s; k in N/m; c in N·s/m\nImpulse = integral Fcontact dt (N·s); includes weight over time\nFirst braking: contact to first zero downward speed; missing event leaves mean force blank\nu=√(2gH); first net impulse=m u (weight subtracted)\nFirst contact impulse=m u+mg Δt; mean=m u/Δt+mg\nEnergy: ½mv²−mgy+½k max(y,0)²+½Kstop max(y−0.08,0)²+loss=mgH\nLoss=∫c max(v,0)²dt during contact compression\nFixed dt=0.0001s RK4, full1.5s; 0cm still loads the pad\nNumbers cover full calculation; gold line marks current time; not animal safety\nCurve retains100µs local maxima and the contact jump, not only uniform samples\n12s animation=1.5s model; Step18.75ms; arrows5ms\nZoom changes only plot view, retaining model time and parameters",
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/17118065/",
    "Weissengruber et al. (2006) · Elephant foot cushion structure"
  ],
  "ep": "217",
  "date": "2026-10-06",
  "episodeTitle": "〈公開｜EP.217｜陸地巨獸的溫柔與智慧：揭開非洲象的演化奇蹟〉",
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/%E5%85%AC%E9%96%8B-ep-217-%E9%99%B8%E5%9C%B0%E5%B7%A8%E7%8D%B8%E7%9A%84%E6%BA%AB%E6%9F%94%E8%88%87%E6%99%BA%E6%85%A7-%E6%8F%AD%E9%96%8B%E9%9D%9E%E6%B4%B2%E8%B1%A1%E7%9A%84%E6%BC%94%E5%8C%96%E5%A5%87%E8%B9%9F/id1812447277?i=1000758301068&uo=4",
    "verified": true,
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/3vfpkQujh1SqbgApHEetc.jpg",
    "duration": "11 分 58 秒",
    "appleId": "1000758301068",
    "reviewed": "2026-10-06",
    "firstory": "https://open.firstory.fm/story/cmnbtegge0a1t01y39r6edkne",
    "durationIso": "PT11M58S"
  },
  "defaults": {
    "height": 4,
    "k": 10,
    "damp": 250,
    "window": 0
  },
  "keywords": "大象腳掌緩衝墊,Elephant cushion lab,科學好好聽,兒童科學,互動實驗,science for kids,interactive experiment,大象腳墊,脂肪墊,阻尼,衝量,接觸力,elephant foot pad,impulse,contact force,damping",
  "description": [
    "以10公斤示例重物探索足墊硬度、壓縮阻尼與觸底，比較第一次煞停時間、峰值及平均接觸力。",
    "Explore pad stiffness, compression damping and bottoming with a 10 kg test mass. Compare first braking duration, peak and mean contact force."
  ],
  "formulaZh": "垂直運動：m y″ = mg − 接觸力 Fcontact\ny < 0（尚未接觸）時：接觸力 = 0\ny ≥ 0 時：接觸力 = ky + c max(v,0) + 硬限位力\n硬限位力 = 2,000,000 × max(y − 0.08, 0) N\n衝量 = ∫ 接觸力 dt，包含接觸期間支撐重量的作用\nm 是 10 kg 質量，y 是向下壓縮量（m），v 是向下速度（m/s）\nk 是剛度（N/m），c 是阻尼係數（N·s/m）；力用 N，衝量用 N·s。\n第一次減速：從接觸到首次向下速度為0；未到者不填平均力\n入射速率u=√(2gH)；第一次淨衝量=m u（扣除重量）\n第一次接觸衝量=m u+mg Δt；平均接觸力=m u/Δt+mg\n能量帳：½mv²−mgy+½k max(y,0)²+½Kstop max(y−0.08,0)²+耗能=mgH\n耗能=∫c max(v,0)² dt（只在接觸且壓縮時計）\n固定dt=0.0001s RK4，觀察1.5s；0cm仍被重力壓縮\n數據為整段計算，圖中金線標目前時間；不是實測象或安全推算\n曲線保留0.1ms步長的局部峰值及接觸跳變，非只取等距點\n12秒動畫=1.5秒模型；逐步18.75ms；方向鍵5ms\n放大只改曲線視窗，模型時間與參數不重設",
  "extraSources": [
    [
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC2048995/",
      "Full article (2006); browser access may require verification"
    ]
  ],
  "dateModified": "2026-10-07"
};
