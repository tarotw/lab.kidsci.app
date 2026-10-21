window.CONFIG={
  "id": "A12",
  "path": "stridel",
  "title": [
    "鴕鳥快跑：兩腳的節奏",
    "Ostrich stepping rhythm"
  ],
  "question": [
    "一步走更遠，或每秒多走幾步，速度會怎麼變？",
    "How do step length and steps per second change speed?"
  ],
  "hint": [
    "拖時間軸看接地與騰空，再把步頻加倍；比較平均速度。",
    "Scrub contact and flight, then double step frequency and compare speed."
  ],
  "controls": [
    {
      "key": "phase",
      "label": [
        "拖時間軸：循環起點",
        "Scrub the starting phase"
      ],
      "min": 0,
      "max": 100,
      "step": 5,
      "value": 10,
      "unit": "%",
      "options": null
    },
    {
      "key": "length",
      "label": [
        "單步長：左足到右足",
        "Step length: left to right"
      ],
      "min": 0.5,
      "max": 2,
      "step": 0.25,
      "value": 1.5,
      "unit": "m",
      "options": null
    },
    {
      "key": "freq",
      "label": [
        "步頻：每秒落足次數",
        "Step frequency: footfalls per second"
      ],
      "min": 1,
      "max": 4,
      "step": 0.5,
      "value": 2,
      "unit": "次/秒 / footfalls/s",
      "options": null
    },
    {
      "key": "duty",
      "label": [
        "每足接地占完整循環",
        "Stance share per foot"
      ],
      "min": 25,
      "max": 60,
      "step": 5,
      "value": 35,
      "unit": "%",
      "options": null
    }
  ],
  "mission": [
    "同一步長，步頻加倍會？",
    "Same step length, twice the step frequency…"
  ],
  "options": [
    [
      "平均速度加倍",
      "Doubles average speed"
    ],
    [
      "可以直接算最高速度",
      "Determines top speed"
    ]
  ],
  "answer": 0,
  "reason": [
    "步長 × 步頻是平均速度；接地時段顯示有沒有騰空，不由腳趾數推算速度。",
    "Step length times step frequency gives mean speed. Stance timing identifies flight; toe count does not determine speed."
  ],
  "comparisons": [
    {
      "label": [
        "步頻加倍",
        "Double step frequency"
      ],
      "key": "freq",
      "a": 1,
      "b": 2
    },
    {
      "label": [
        "單步長加倍",
        "Double step length"
      ],
      "key": "length",
      "a": 0.75,
      "b": 1.5
    },
    {
      "label": [
        "有／無騰空",
        "With / without flight"
      ],
      "key": "duty",
      "a": 35,
      "b": 55
    }
  ],
  "limit": [
    "左右足交替、相差半個完整循環的示例排程；一步指相鄰兩足落足，完整同足循環有兩步，週期 2/步頻。接地比例可調，與速度獨立，用來隔離概念，不保證真實鴕鳥能實現所有組合。均速與指定擺足曲線，不解肌肉、接觸力或踢力；足部二趾只是構造示意。",
    "An illustrative alternating schedule with a half-cycle offset. A step is between consecutive opposite footfalls; a same-foot cycle contains two steps and lasts 2/frequency. Duty share varies independently of speed to isolate the concept; not every combination is physically achievable by ostriches. Constant speed and prescribed foot motion, without muscles, contact forces or kicks. Two toes are anatomical illustration only."
  ],
  "formula": "Mean v = step length ℓ × footfall frequency f (m/s)\nSame-foot full cycle T = 2/f; two alternating steps\nLeft stance: q < d; right stance: (q+0.5) mod 1 < d\nStance time per foot = Td; aerial fraction = max(0,1−2d)\nBoth-feet fraction = max(0,2d−1)\nq is cycle phase; d is stance fraction (0..1)\nBody-relative stance x = ℓ/2−2ℓq; world foot stays fixed in stance\nSwing uses a prescribed smooth return; height = 0.2 sin(πu) m\n4× slow: animation duration 4T; Step = T/16 model seconds\nClock starts at selected phase and spans one cycle;100%=0%\nFrequency and duty vary independently to isolate ideas; not all combinations are achievable\nNo muscles, contact forces, kicks or real top-speed prediction",
  "source": [
    "https://journals.biologists.com/jeb/article/214/7/1123/33537/Toe-function-and-dynamic-pressure-distribution-in",
    "Schaller et al. (2011) · Ostrich toe contact"
  ],
  "icon": "🐦",
  "ep": "223",
  "episodeTitle": "〈VIP｜EP.223｜鴕鳥逆襲：披著羽毛的迅猛龍與防疫救星〉",
  "date": "2026-10-06",
  "action": [
    "觀察一次",
    "Watch once"
  ],
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/vip-ep-223-%E9%B4%95%E9%B3%A5%E9%80%86%E8%A5%B2-%E6%8A%AB%E8%91%97%E7%BE%BD%E6%AF%9B%E7%9A%84%E8%BF%85%E7%8C%9B%E9%BE%8D%E8%88%87%E9%98%B2%E7%96%AB%E6%95%91%E6%98%9F/id1812447277?i=1000761396880",
    "duration": "18 分 05 秒",
    "durationEn": "18 min 05 sec",
    "durationIso": "PT18M5S",
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/CEBWNksCwbJ17UvCVjV44.jpg",
    "subscribersOnly": true,
    "verifiedOn": "2026-10-06",
    "source": "https://open.firstory.fm/story/cmnz5wfci0r2001w73pb61hld"
  },
  "defaults": {
    "length": 1.5,
    "freq": 2,
    "duty": 35,
    "phase": 10
  },
  "keywords": "鴕鳥快跑：兩腳的節奏,Ostrich stepping rhythm,鴕鳥,步頻,步長,接地比例,step frequency,duty factor,科學好好聽,動物科學,互動科學,science for kids",
  "description": [
    "一步走更遠，或每秒多走幾步，速度會怎麼變？ 動手改變條件，觀察機制與假設。",
    "How do step length and steps per second change speed? Change conditions and inspect the mechanism and assumptions."
  ],
  "formulaZh": "平均速度v＝單步長ℓ × 落足頻率f；單位m/s\n同一足的完整週期T＝2/f，包含左右兩步\n左足接地：q<d；右足接地：(q+0.5) mod 1 < d\n每足接地時間＝Td；騰空份額＝max(0,1−2d)\n兩足同時接地份額＝max(0,2d−1)\nq為循環相位，d為每足接地比例（0..1）\n接地足的身體相對位置x＝ℓ/2−2ℓq；地面座標接地時不滑動\n擺足由指定平滑曲線回到起點，高度為0.2 sin(πu) m\n4倍慢放：動畫用時4T；逐步為T/16模型秒\n時計從選定起點開始計一整圈；相位100%與0%相同\n步頻與份額可獨立調整以隔離概念，任意組合不代表真實能力\n不解肌肉、接觸力、踢力或真正最高速度"
};
