window.CONFIG={
  "id": "B06",
  "path": "whisker",
  "status": "complete",
  "title": [
    "海豹鬍鬚的水流足跡",
    "Seal-whisker wake search"
  ],
  "question": [
    "魚已離開，還能從水流找到舊路線嗎？",
    "After a fish leaves, can its wake reveal a trail?"
  ],
  "hint": [
    "先移探測器找訊號，再揭開路線。按觀察看10秒衰減；桌機可拖金圈。",
    "Move the probe to find a signal, then reveal the trail. Watch 10 s of decay; desktop users can drag the gold ring."
  ],
  "controls": [
    {
      "key": "x",
      "label": [
        "探測器左右位置",
        "Probe horizontal position"
      ],
      "min": 0,
      "max": 10,
      "step": 0.5,
      "value": 5,
      "unit": "m",
      "options": null
    },
    {
      "key": "y",
      "label": [
        "探測器上下位置",
        "Probe vertical position"
      ],
      "min": 0,
      "max": 6,
      "step": 0.25,
      "value": 3,
      "unit": "m",
      "options": null
    },
    {
      "key": "reveal",
      "label": [
        "路線提示",
        "Trail hint"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 0,
      "unit": "",
      "options": [
        [
          "先藏起來",
          "Hidden"
        ],
        [
          "揭開核對",
          "Reveal"
        ]
      ]
    },
    {
      "key": "path",
      "label": [
        "剛才魚的路線",
        "Earlier fish route"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "直線",
          "Straight"
        ],
        [
          "彎曲",
          "Curved"
        ]
      ]
    },
    {
      "key": "shape",
      "label": [
        "示例感覺毛",
        "Example whisker"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 0,
      "unit": "",
      "options": [
        [
          "波紋形",
          "Wavy"
        ],
        [
          "圓柱形",
          "Cylindrical"
        ]
      ]
    },
    {
      "key": "age",
      "label": [
        "魚通過後等待",
        "Wait after fish passed"
      ],
      "min": 0,
      "max": 30,
      "step": 5,
      "value": 0,
      "unit": "s",
      "options": null
    }
  ],
  "mission": [
    "鬍鬚追水流，需要自己發出聲波嗎？",
    "Must whiskers emit sound to follow a wake?"
  ],
  "options": [
    [
      "被動感受局部水流擾動",
      "Passively sense local flow disturbances"
    ],
    [
      "鬍鬚就是主動聲納",
      "Whiskers are active sonar"
    ]
  ],
  "answer": 0,
  "reason": [
    "港海豹鬍鬚可利用尾流線索，波紋形狀有助抑制自身振動噪聲；不是主動聲納，也不保證每次追蹤成功。",
    "Harbor seal whiskers can use wakes; their undulations help suppress self-induced noise. This is passive flow sensing, not sonar or guaranteed tracking."
  ],
  "comparisons": [
    {
      "label": [
        "路徑附近／偏離",
        "Near / off trail"
      ],
      "key": "y",
      "a": 3,
      "b": 0,
      "base": {
        "x": 5
      }
    },
    {
      "label": [
        "剛通過／等待30秒",
        "Fresh / 30 s old"
      ],
      "key": "age",
      "a": 0,
      "b": 30
    },
    {
      "label": [
        "波紋／圓柱噪聲",
        "Wavy / cylinder noise"
      ],
      "key": "shape",
      "a": 0,
      "b": 1
    }
  ],
  "limit": [
    "預先生成0–10 m的21個局部擾動點；直線y=3 m，彎曲y=3+1.2sin(πx/5)。高斯寬0.35 m、RMS水速示例0.02 m/s，以12 s時間常數衰減。局部訊號為高斯權重平方和的平方根，不是完整渦街或Navier–Stokes；動畫只畫感覺毛的示意位移。示例噪聲RMS為波紋2 mm/s、圓柱10 mm/s，是自訂數字，未擷取真海豹閾值。信噪比低不表示沒有魚；形狀只改噪聲，魚路線相同。從設定等待再觀察10 s；移動探測器或揭開路線不重置觀察年齡。只代表港海豹靈感的被動感覺，不含神經決策或真實追蹤成功率。",
    "A preset trail of 21 local disturbances over 0–10 m: y=3 m straight, or y=3+1.2sin(πx/5). Gaussian width 0.35 m, illustrative RMS water speed 0.02 m/s and 12 s decay time. Local signal is the square root of summed squared Gaussian weights, not a complete vortex street or Navier–Stokes solution. Whisker displacement is schematic. Assumed RMS noise is 2 mm/s for wavy and 10 mm/s for cylindrical whiskers, not measured detection thresholds. Low SNR does not prove fish absence. Shape changes noise only, with the same trail. Observe 10 s after the chosen wait; moving the probe or revealing the trail preserves wake age. Passive harbor-seal-inspired sensing, without neural decisions or real tracking success rates."
  ],
  "formula": "g_i=exp(−distance_i²/(2*0.35²)); signal0=0.02*sqrt(Σg_i²/1.5) m/s\nage=wait+10*observationFraction; signal=signal0*exp(−age/12)\nnoiseRMS=[0.002,0.010] m/s; SNR=signal/noiseRMS\nMotion schematic: water signal and noise displace whisker; not sonar\nScreen 2 s represents 10 s decay. Probe/shape/reveal preserve age; reselecting a current option is a no-op.",
  "source": [
    "https://arxiv.org/abs/1501.04582",
    "Beem & Triantafyllou (2015) · Passive wake sensing"
  ],
  "extraSources": [],
  "icon": "🦭",
  "ep": "195",
  "episodeTitle": "〈EP.195｜哺乳動物（下）：生存大師的裝備庫與感官世界〉",
  "date": "2026-10-03",
  "action": [
    "觀察一次",
    "Watch once"
  ],
  "podcast": {
    "verified": true,
    "urlVerified": true,
    "provider": "Firstory",
    "url": "https://open.firstory.fm/story/cmdpx4cuu00dk01xle9m8flf4",
    "source": "https://open.firstory.fm/story/cmdpx4cuu00dk01xle9m8flf4",
    "title": "〈EP.195｜哺乳動物（下）：生存大師的裝備庫與感官世界〉",
    "durationSeconds": 1071,
    "duration": "17 分 51 秒",
    "durationEn": "17 min 51 sec",
    "durationIso": "PT17M51S",
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/FSRkGqAhhOviNl0Pb7fhg.jpg",
    "coverAvailable": true,
    "coverFile": "podcast/ep195.jpg",
    "artworkVisualChecked": true,
    "verifiedOn": "2026-10-08",
    "publishedAt": "Fri, 13 Feb 2026 21:20:36 GMT",
    "evidenceBasis": "Current saved publisher RSS + exact full public Firstory episode page + matching artwork bytes and pixels. No Apple ID, entitlement or audio inference."
  },
  "defaults": {
    "path": 1,
    "shape": 0,
    "reveal": 0,
    "x": 5,
    "y": 3,
    "age": 0
  },
  "keywords": "海豹鬍鬚的水流足跡,Seal-whisker wake search,海豹,鬍鬚,尾流,被動感覺,信噪比,seal whisker,wake tracking,passive sensing,SNR,科學好好聽,動物科學,互動科學,science for kids",
  "description": [
    "魚已離開，還能從水流找到舊路線嗎？ 動手改變條件，觀察機制與假設。",
    "After a fish leaves, can its wake reveal a trail? Change conditions and inspect the mechanism and assumptions."
  ],
  "formulaZh": "21個示例擾動點：xᵢ＝i/2m（i＝0..20）\n直線yᵢ＝3m；彎曲yᵢ＝3＋1.2sin(πxᵢ/5)m\ngᵢ＝exp[−距離ᵢ²/(2×0.35²)]\n局部初始訊號＝0.02×√(Σgᵢ²/1.5)m/s\n尾流年齡＝設定等待＋10×觀察比例（s）\n目前訊號＝初始訊號×exp(−年齡/12)\n示例噪聲RMS：波紋0.002／圓柱0.010m/s\n信噪比＝目前訊號/示例噪聲；不是偵測成功率\n2秒畫面看10秒衰減；移探測器、換感覺毛或揭開保留年齡\n改魚路線或等待才重新看；重選目前選項不重開\n感覺毛位移是示意；無主動聲波、神經定位或完整渦流解",
  "dateModified": "2026-10-09"
};
