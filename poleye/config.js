window.CONFIG={
  "id": "C10",
  "path": "poleye",
  "title": [
    "螳螂蝦的偏振訊息",
    "Mantis shrimp polarization"
  ],
  "question": [
    "顏色相同，光的振動方向也相同嗎？",
    "Same colour: is the vibration direction the same?"
  ],
  "hint": [
    "先把分析片調45°，看兩區一樣亮；再調90°，看圖案變暗。",
    "Set the analyzer to 45° for equal patches, then 90° for a dark pattern."
  ],
  "controls": [
    {
      "key": "angle",
      "label": [
        "分析片角度",
        "Analyzer angle"
      ],
      "min": 0,
      "max": 180,
      "step": 5,
      "value": 0,
      "unit": "°",
      "options": null
    },
    {
      "key": "polar",
      "label": [
        "入射偏振",
        "Input polarization"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 0,
      "unit": "",
      "options": [
        [
          "線偏振",
          "Linear"
        ],
        [
          "圓偏振",
          "Circular"
        ]
      ]
    },
    {
      "key": "light",
      "label": [
        "入射強度（相對值）",
        "Incident intensity (relative)"
      ],
      "min": 0,
      "max": 100,
      "step": 5,
      "value": 100,
      "unit": "%",
      "options": null
    }
  ],
  "action": [
    "觀察機制",
    "Watch"
  ],
  "mission": [
    "圓偏振穿過理想線分析片，轉片時平均亮度？",
    "Circular input through an ideal linear analyzer: rotating it…"
  ],
  "options": [
    [
      "保持一半",
      "Keeps half the intensity"
    ],
    [
      "每次都完全消光",
      "Always extinguishes light"
    ]
  ],
  "answer": 0,
  "reason": [
    "圓偏振的電場方向持續旋轉；平均而言，理想線分析片留下入射強度的一半。",
    "The field direction rotates in circular polarization. On average, an ideal linear analyzer transmits half the input intensity."
  ],
  "comparisons": [
    {
      "label": [
        "分析片 0°／90°",
        "Analyzer 0° / 90°"
      ],
      "key": "angle",
      "a": 0,
      "b": 90
    },
    {
      "label": [
        "線／圓偏振",
        "Linear / circular"
      ],
      "key": "polar",
      "a": 0,
      "b": 1
    },
    {
      "label": [
        "反例：沒有入射光",
        "Counterexample: no input"
      ],
      "key": "light",
      "a": 100,
      "b": 0
    }
  ],
  "limit": [
    "理想線分析片教具。線偏振的圖案與背景各有同強度、同顏色、互差90°的入射光；圓偏振時兩區同偏振，不比較左右旋。各區平均透光各自不超過其入射強度，不能把不同面積區域的強度直接當同一束光總能量。強度以最大入射100%為固定基準；差異比除以目前入射強度，無光時不定義（內部採0、畫面—），不是成功率。左箭頭只畫圖案區的瞬時入射電場，正比平方根強度；同平均輸入的圓場大小為線場峰值的1/√2。2秒動畫看2概念循環，與真實光頻率無關；讀數與灰階是時間平均。灰階先將強度取12位小數再轉0–255整數，消除45°／135°的浮點差異；固定尺度，未做螢幕亮度或視覺校準。小於1e−10繪圖單位的零場箭頭省略，不代表偵測門檻。螢幕未產生實驗用偏振圖案；不重現螳螂蝦眼睛、神經或世界觀。Daly研究兩種螳螂蝦的轉眼與線偏振對比；實際眼睛有多組感受器，中帶部分具四分之一波片機制，本頁未建模。不宣稱圓偏振能力唯一，也不預測辨識成功率。EP244官方顯示約21分鐘、訂閱者限定；精確秒數未提供。",
    "An ideal linear-analyzer toy. Pattern and background inputs have equal intensity and colour, with linear axes 90° apart; circular inputs match, without comparing handedness. Each patch transmits at most its own incident intensity. Intensities from unequal-area regions are not a single-beam energy sum. Transmission uses maximum input=100% as a fixed reference; contrast divides by current input, undefined at zero (internal convention0, readout—), not recognition accuracy. The arrow shows only the pattern patch’s instantaneous incident electric field. Field amplitude scales with square-root intensity; at equal mean input, circular magnitude is linear peak divided by √2. Two display seconds show two concept cycles, unrelated to optical frequency; readings and grayscale are time averages. Intensity is rounded to12 decimals before fixed 0–255 gray encoding to remove floating-point differences at45°/135°, without screen or visual calibration. A zero-field arrow below1e−10 drawing units is omitted, not a sensing threshold. This does not generate experimental polarized patterns or reproduce shrimp eyes, neurons or perception. Daly studied eye rotations and linear-polarization contrast in two species; real eyes have multiple channels and some midband receptors act as quarter-wave plates, omitted here. No uniqueness or recognition-success claim. EP244 officially shows about21minutes, subscribers only; exact seconds are unavailable."
  ],
  "formula": "I0 = incident intensity setting / 100, separately for each patch.\nLinear pattern/background: I0 cos²θ / I0 sin²θ.\nCircular: each patch mean I0/2, independent of analyzer angle.\nContrast = |pattern − background| / I0 for I0 > 0; undefined at I0=0. Internal zero convention, readout —.\nIntensity ∝ time-mean |E|². Same mean input: linear peak 61√I0; circular magnitude 61√(I0/2).\nDisplayed pattern input field: linear [61√I0 cosφ,0]; circular 61√(I0/2)[cosφ,sinφ].\nφ=4π×animation phase: 2 concept cycles over 2 display seconds, not optical frequency. Step=¼ cycle.\nMean readings and saved cards do not follow the instantaneous field.\nGray code = round(255 × intensity rounded to 12 decimals); fixed scale, uncalibrated brightness.\nZero-field arrow omitted below 1e−10 drawing units. No biological sensitivity threshold.",
  "source": [
    "https://www.nature.com/articles/ncomms12140",
    "Daly et al. (2016) · Dynamic polarization vision"
  ],
  "ep": "244",
  "date": "2026-10-10",
  "episodeTitle": "〈海底最強生化戰士：雀尾螳螂蝦的爆破神拳與奇幻視覺｜EP.244〉",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/%E6%B5%B7%E5%BA%95%E6%9C%80%E5%BC%B7%E7%94%9F%E5%8C%96%E6%88%B0%E5%A3%AB-%E9%9B%80%E5%B0%BE%E8%9E%B3%E8%9E%82%E8%9D%A6%E7%9A%84%E7%88%86%E7%A0%B4%E7%A5%9E%E6%8B%B3%E8%88%87%E5%A5%87%E5%B9%BB%E8%A6%96%E8%A6%BA-ep-244/id1812447277?i=1000785303067",
    "episodeId": "1000785303067",
    "showId": "1812447277",
    "source": "https://open.firstory.me/story/cmt5uziue0p1801tb7y0qeyy1",
    "duration": "約21分鐘",
    "durationEn": "About 21 minutes",
    "subscribersOnly": true,
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource211/v4/0d/53/89/0d538997-6173-9e16-8439-f5473b994e61/d14308be-342c-43d2-beb9-11397be3cb1e.jpg/500x500bb.webp",
    "coverAvailable": true,
    "verifiedOn": "2026-10-10",
    "coverVerifiedOn": "2026-10-10",
    "coverStatus": "Official Taiwan Apple episode artwork loaded, inspected and downloaded through Computer Use. Original WebP preserved; JPEG format conversion only.",
    "durationStatus": "Official21minutes; exact seconds unavailable, do not invent or use Apple P0D."
  },
  "defaults": {
    "angle": 0,
    "polar": 0,
    "light": 100
  },
  "keywords": "螳螂蝦,偏振,線偏振,圓偏振,馬呂斯定律,分析片,電場,平均強度,灰階圖案,mantis shrimp,polarization,linear polarization,circular polarization,Malus law,analyzer,electric field,time averaged intensity,grayscale pattern,科學好好聽,science for kids",
  "description": [
    "轉動理想分析片，探索線偏振與圓偏振的平均透光強度；比較45°、90°和無入射光。以灰階圖案與電場箭頭示意，不重現螳螂蝦視覺。",
    "Rotate an ideal analyzer to compare mean transmission of linear and circular input at 45°, 90° and zero light. Grayscale patterns and field arrows illustrate optics, without reproducing shrimp vision."
  ],
  "icon": "👁️",
  "extraSources": [
    [
      "https://openstax.org/books/university-physics-volume-3/pages/1-7-polarization",
      "OpenStax · Polarization"
    ]
  ],
  "formulaZh": "I0＝入射強度設定 / 100；各區分別有相同的I0。\n線偏振：圖案I0 cos²θ；背景I0 sin²θ。\n圓偏振：各區時間平均I0/2，與分析片角度無關。\n差異比＝|圖案−背景| / I0，僅I0>0有定義；無光時內部採0慣例，畫面顯示—。\n強度正比於|E|²時間平均。同平均輸入：線偏振峰值61√I0；圓偏振大小61√(I0/2)。\n圖案區入射場：線偏振[61√I0 cosφ,0]；圓偏振61√(I0/2)[cosφ,sinφ]。\nφ＝4π×動畫進度：2顯示秒看2概念圈，不是真實光頻率；逐步＝¼圈。\n讀數和保存卡為時間平均，不隨此刻箭頭改寫。\n灰階碼＝round(255×強度取12位小數)，固定尺度，未校準亮度。\n小於1e−10繪圖單位的零場箭頭省略，不是生物感測門檻。"
};
