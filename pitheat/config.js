window.CONFIG={
  "id": "C07",
  "path": "pitheat",
  "status": "complete",
  "title": [
    "響尾蛇：熱訊號",
    "Rattlesnake: heat clues"
  ],
  "question": [
    "關燈後，暖老鼠還有線索嗎？",
    "Lights off: still a warm-mouse clue?"
  ],
  "hint": [
    "先調老鼠溫度，看右圖；試關燈，再把背景調到同溫。最後加障壁，看熱訊號被遮擋。",
    "Change mouse temperature; watch the right map. Turn lights off, match background temperature, then add a barrier."
  ],
  "controls": [
    {
      "key": "mouse",
      "label": [
        "老鼠表面溫度",
        "Mouse surface temperature"
      ],
      "min": 0,
      "max": 60,
      "step": 1,
      "value": 35,
      "unit": "°C"
    },
    {
      "key": "rock",
      "label": [
        "石頭表面溫度",
        "Rock surface temperature"
      ],
      "min": 0,
      "max": 60,
      "step": 1,
      "value": 20,
      "unit": "°C"
    },
    {
      "key": "bg",
      "label": [
        "背景表面溫度",
        "Background surface temperature"
      ],
      "min": 0,
      "max": 60,
      "step": 1,
      "value": 20,
      "unit": "°C"
    },
    {
      "key": "light",
      "label": [
        "可見光照明",
        "Visible illumination"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "關燈",
          "Lights off"
        ],
        [
          "開燈",
          "Lights on"
        ]
      ]
    },
    {
      "key": "wall",
      "label": [
        "老鼠前的障壁",
        "Barrier in front of mouse"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 0,
      "unit": "",
      "options": [
        [
          "移開",
          "Away"
        ],
        [
          "不透紅外線",
          "IR-opaque"
        ]
      ]
    }
  ],
  "action": [
    "即時比較",
    "Live comparison"
  ],
  "mission": [
    "哪種改變會讓老鼠方向的熱對比消失？",
    "Which change removes the mouse-region heat contrast?"
  ],
  "options": [
    [
      "讓老鼠和背景同溫",
      "Match mouse and background temperature"
    ],
    [
      "只關掉可見光照明",
      "Only turn visible lights off"
    ]
  ],
  "answer": 0,
  "reason": [
    "有頰窩的響尾蛇能用輻射升溫的感受器取得熱線索；不是所有蛇都有頰窩。溫度較高的石頭也能產生強烈線索，熱對比本身不能辨認「這就是食物」。",
    "Pit-bearing rattlesnakes obtain heat cues through radiation warming sensory tissue. Not all snakes have pits. A warm rock can also produce a strong cue; contrast alone cannot identify food."
  ],
  "comparisons": [
    {
      "label": [
        "老鼠20／35°C",
        "Mouse 20 / 35°C"
      ],
      "key": "mouse",
      "a": 20,
      "b": 35,
      "base": {}
    },
    {
      "label": [
        "開燈／關燈",
        "Lights on / off"
      ],
      "key": "light",
      "a": 1,
      "b": 0,
      "base": {}
    },
    {
      "label": [
        "移開／加障壁",
        "Barrier away / added"
      ],
      "key": "wall",
      "a": 0,
      "b": 1,
      "base": {}
    }
  ],
  "limit": [
    "鼠、石頭、背景與障壁都是均勻表面，固定相同示例放射率ε=0.95；表面自行放射功率M=εσ(T°C+273.15)^4 W/m²，σ=5.670374419×10^-8 W m^-2 K^-4（NIST2022值的有限位數近似）。1 W/m²＝每平方米每秒放射1焦耳。M是所有波長合計、向外半球的表面放射功率密度，不是頰窩收到的照度、吸收功率、神經輸出或體溫。模型只計自身放射，忽略反射背景輻射、光譜、距離、立體角、空氣吸收、皮毛及真實放射率差；沒有預測可偵測距離或生物門檻。右圖24×12格，每格以4×4固定子樣本平均M；固定灰階250–700 W/m²，250黑、700白，沒有逐圖自動拉高對比。左圖鼠與石頭外型為放大示意；右圖只是表面輻射教具，不是真蛇視野或人類熱像照片。鼠較冷時對比可為負，仍可能有差異；同溫且相同放射率時本模型對比為0，沒有偷偷留鼠輪廓。關可見光只改左圖，熱數值和網格保持不變，忽略照明熱效應。障壁特別定義為不透所考慮熱輻射，並設為背景溫度及相同放射率；覆蓋鼠的全部示意區域，圖中此方向改為障壁自身放射，鼠仍放射但其貢獻被擋住。不是所有可見光不透明材料都同樣擋紅外線，不主張能透視牆壁、土壤或地穴。較熱石頭不等於食物；未建模頰窩膜熱傳導、TRPA1反應、神經融合或覓食辨識。滑桿即時改示例條件，不是動物瞬間升降溫。 整數灰階與粗取樣也可能淡化小溫差；不保證每個非零數值對比都有清楚輪廓。Schraft等2018對野外角響尾蛇呈現不同溫度蜥蜴屍體，對比與光照能預測反應，未支持僅按絕對獵物溫度評估其逃避能力；本例關燈不改熱數值，不表示真蛇行為不受照明影響。",
    "Mouse, rock, background and barrier are uniform surfaces with identical illustrative emissivity ε=0.95. Self-emitted surface exitance M=εσ(T°C+273.15)^4 W/m²; σ=5.670374419×10^-8 W m^-2 K^-4 is a finite-digit approximation of the NIST 2022 value. One W/m² means one joule emitted per square metre each second. M integrates all wavelengths and the outward hemisphere; it is not irradiance received by a pit, absorbed power, neural output or body temperature. Only self-emission is modeled. Reflected background radiation, spectrum, distance, solid angle, atmospheric absorption, fur and real emissivity differences are omitted; no detection distance or biological threshold is predicted. The right map has 24×12 cells, each averaging 4×4 fixed subsamples of M. Fixed grayscale 250–700 W/m²: 250 black, 700 white, without per-image contrast enhancement. Left-side shapes are enlarged diagrams. The right map is a surface-radiation teaching aid, not snake perception or a human thermal photograph. A colder mouse gives negative contrast, still a difference; equal temperatures with equal emissivity give zero contrast without a hidden mouse outline. Lights off changes only the left image, leaving thermal values and cells unchanged; illumination heating is omitted. The barrier is specifically defined as opaque to the modeled thermal radiation and held at background temperature with the same emissivity. It covers the entire schematic mouse region: that direction now represents barrier emission. The mouse still emits, but its contribution is blocked. Not all materials opaque to visible light block infrared alike. No seeing through walls, soil or burrows is claimed. A warmer rock is not automatically food. Pit-membrane heat transfer, TRPA1 responses, neural fusion and prey recognition are not modeled. Sliders change example conditions instantly, not an animal’s real thermal dynamics. Integer grayscale and coarse sampling can obscure small differences; nonzero numerical contrast does not guarantee a distinct outline. Schraft et al. (2018) presented lizard carcasses to free-ranging sidewinders: contrast and light predicted responses, without evidence for prey-temperature-based evaluation. Lights leave this toy’s thermal numbers invariant, not real snake behavior."
  ],
  "formula": "Kelvin = Celsius + 273.15\nEmissivity = 0.95 for all surfaces\nSigma = 5.670374419e-8 W m^-2 K^-4 (rounded finite digits)\nM = emissivity * sigma * Kelvin^4 W/m² (self-emission only)\nMouse-region contrast = M_mouse − M_background\nIR-opaque barrier at background temperature => mouse-region contrast = 0\nRock contrast = M_rock − M_background\n24×12 cells; each cell averages 16 fixed subsamples\nGray = round(255 * clamp((M−250)/450, 0, 1))\nVisible illumination does not change thermal values\nEqual temperatures and emissivities => no thermal outline\nNo optical/neural receiver, hunting accuracy or detection threshold\nCoarse averaging and integer grayscale can hide small differences\nLive static comparison: no playback time",
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/20228791/",
    "Gracheva et al. (2010) · Molecular basis of infrared detection by snakes"
  ],
  "extraSources": [
    [
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC2855400/",
      "Original paper · PMC archive"
    ],
    [
      "https://physics.nist.gov/cuu/pdf/all.pdf",
      "NIST · 2022 CODATA constants"
    ],
    [
      "https://imagine.gsfc.nasa.gov/resources/dict_qz.html",
      "NASA GSFC · Stefan–Boltzmann law"
    ],
    [
      "https://pubmed.ncbi.nlm.nih.gov/29218413/",
      "Schraft et al. (2018) · Free-ranging sidewinder thermal cues"
    ]
  ],
  "ep": "236",
  "episodeTitle": "〈VIP｜沙漠晝夜與不喝水的奇蹟：從南極到火星的極限挑戰｜EP.236〉",
  "date": "2026-10-06",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/vip-%E6%B2%99%E6%BC%A0%E6%99%9D%E5%A4%9C%E8%88%87%E4%B8%8D%E5%96%9D%E6%B0%B4%E7%9A%84%E5%A5%87%E8%B9%9F-%E5%BE%9E%E5%8D%97%E6%A5%B5%E5%88%B0%E7%81%AB%E6%98%9F%E7%9A%84%E6%A5%B5%E9%99%90%E6%8C%91%E6%88%B0-ep-236/id1812447277?i=1000775523120",
    "episodeId": "1000775523120",
    "showId": "1812447277",
    "source": "https://open.firstory.me/story/cmr7ud86905k601v5hma6hsxn",
    "duration": "約20分鐘",
    "durationEn": "About 20 minutes",
    "subscribersOnly": true,
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource221/v4/83/00/01/830001ee-decf-84a1-4a22-824635b7dd4d/3a01d594-8e54-43da-a2ed-c98e57c6b1ab.jpg/500x500bb.webp",
    "coverAvailable": true,
    "verifiedOn": "2026-10-10",
    "coverVerifiedOn": "2026-10-10",
    "coverStatus": "Official Apple episode page artwork loaded, inspected and downloaded through Computer Use. Original WebP preserved; JPEG format conversion only.",
    "durationStatus": "Apple visible page says20 minutes. Exact seconds unavailable; Apple schema P0D is not a valid episode duration and is omitted."
  },
  "icon": "🐍",
  "keywords": "響尾蛇,頰窩,紅外線感受,熱輻射,溫差,放射率,灰階,Stefan-Boltzmann,rattlesnake,pit organ,infrared sensing,thermal radiation,temperature contrast,emissivity,grayscale,科學好好聽,science for kids",
  "description": [
    "調老鼠、石頭與背景表面溫度，觀察粗解析灰階輻射對比；關燈不消除熱線索，不透紅外線障壁會遮擋鼠的貢獻。",
    "Change mouse, rock and background surface temperatures and inspect a coarse grayscale radiation map. Lights off preserves heat clues; an IR-opaque barrier blocks the mouse contribution."
  ],
  "defaults": {
    "mouse": 35,
    "rock": 20,
    "bg": 20,
    "light": 1,
    "wall": 0
  },
  "formulaZh": "溫度K＝表面°C＋273.15；示例放射率全為0.95\nσ＝5.670374419×10⁻⁸ W m⁻² K⁻⁴（有限位數近似）\nM＝0.95σK⁴ W/m²：自身向外半球的全波段放射\n鼠方向對比＝M鼠−M背景；石頭對比＝M石−M背景\n不透本例紅外線、背景同溫的障壁替代鼠貢獻，對比0\n24×12格，每格4×4固定子樣本的M平均\n灰階＝round(255×clamp((M−250)/450,0,1))\n固定250–700 W/m²，不逐圖增強；粗格與整數灰階可淡化小差異\n關可見光不改熱數值；同溫同放射率鼠對比0\n數值即時；保存對照沒有播放時間\n不計反射／光譜／距離／接收立體角／皮毛／頰窩熱傳／神經\n不預測覓食成功率、偵測距離或真蛇視野",
  "dateModified": "2026-10-10"
};
