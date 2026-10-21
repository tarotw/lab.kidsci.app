window.CONFIG={
  "id": "B04",
  "path": "rayfin",
  "status": "complete",
  "title": [
    "仿魟鰭的離床挑戰",
    "Ray-inspired fin clearance"
  ],
  "question": [
    "貼近底部，一定會多一股向上的力嗎？",
    "Does approaching the bottom always add upward lift?"
  ],
  "hint": [
    "先用波浪鰭、距離 37%、角度 2°；再改成 0°，看力是否向下。37% 約離床 10 cm。",
    "Try an undulating fin, 37% clearance and 2°. Change to 0° and inspect downward force. 37% is about 10 cm."
  ],
  "controls": [
    {
      "key": "wave",
      "label": [
        "示例鰭運動",
        "Example fin motion"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "整片拍動",
          "Oscillatory"
        ],
        [
          "波浪傳遞",
          "Undulatory"
        ]
      ]
    },
    {
      "key": "gap",
      "label": [
        "離床距離／鰭長",
        "Clearance / fin length"
      ],
      "min": 27,
      "max": 71,
      "step": 1,
      "value": 37,
      "unit": "%",
      "options": null
    },
    {
      "key": "speed",
      "label": [
        "外加水流速度",
        "Imposed flow speed"
      ],
      "min": 0,
      "max": 0.3,
      "step": 0.05,
      "value": 0.15,
      "unit": "m/s",
      "options": null
    },
    {
      "key": "angle",
      "label": [
        "整片鰭的平均傾角",
        "Mean pitch of whole fin"
      ],
      "min": 0,
      "max": 10,
      "step": 1,
      "value": 2,
      "unit": "°",
      "options": null
    }
  ],
  "mission": [
    "這個機械鰭結果，能當成所有魟魚的規則嗎？",
    "Can this mechanical-fin result describe all rays?"
  ],
  "options": [
    [
      "要看物種、鰭運動與實驗條件",
      "Species, motion and setup matter"
    ],
    [
      "所有魟魚靠近底部都受下吸力",
      "Every ray experiences suction near the bottom"
    ]
  ],
  "answer": 0,
  "reason": [
    "研究用可控制波數的機械鰭，不是全部魟魚；靜止河魟的形態實驗可能得到不同的近床力。",
    "The study used a controllable mechanical fin. Tests of a stationary river-ray body can show different near-bottom forces."
  ],
  "comparisons": [
    {
      "label": [
        "拍動／波浪",
        "Oscillation / undulation"
      ],
      "key": "wave",
      "a": 0,
      "b": 1,
      "base": {
        "angle": 0
      }
    },
    {
      "label": [
        "平鰭／微仰",
        "Level / pitched fin"
      ],
      "key": "angle",
      "a": 0,
      "b": 2,
      "base": {
        "wave": 1,
        "gap": 37
      }
    },
    {
      "label": [
        "較近／較遠",
        "Near / farther bottom"
      ],
      "key": "gap",
      "a": 27,
      "b": 71,
      "base": {
        "angle": 0
      }
    }
  ],
  "limit": [
    "仿生鰭教學查表，非活體魟魚或 CFD。鰭長 27 cm、面積 0.0513 m²；距離比範圍 0.27–0.71，不外推。拍動 CL 在 0.27/0.37/0.50/0.71 為 −0.60/−0.40/−0.18/0；波浪為 −0.10/−0.08/−0.04/0，線性內插，再加 0.04×整片平均仰角（度）。係數依論文趨勢自訂，未擷取量測圖。中性浮力示例 V=0.005 m³、m=5.125 kg，海水密度1025，加水慣性5 kg、垂直阻尼5 N·s/m。RK4 每2 ms，從靜止觀察1 s，步內二分定位資料邊界並保留事件時刻／速度；起點在邊界且受力朝外則0秒立即停止推算，不表示撞底或平衡。水流由外部供能，省略拍鰭瞬時力及水平運動。2026-10-06由Apple及官方Firstory核對EP.250；本機舊metadata的263不作單集判定。",
    "Teaching lookup for a bio-inspired fin, not a live ray or CFD. Chord 27 cm, area 0.0513 m²; valid gap ratios 0.27–0.71 only. At ratios 0.27/0.37/0.50/0.71, oscillatory CL is −0.60/−0.40/−0.18/0; undulatory CL is −0.10/−0.08/−0.04/0. Interpolate, then add 0.04 per degree of whole-fin mean pitch. Coefficients are designed from trends, not digitized observations. Neutral example V=0.005 m³, m=5.125 kg, seawater 1025 kg/m³, added inertia 5 kg and vertical damping 5 N·s/m. RK4 at 2 ms for 1 s from rest; locate lookup boundary events within each step and preserve their time/velocity (outward force at an initial boundary stops at t=0), without implying ground impact or equilibrium. External flow power, instantaneous flapping forces and horizontal motion are omitted. EP.250 was verified with Apple and official Firstory on 2026-10-06; the old local metadata label 263 is not used as the episode identity."
  ],
  "formula": "q=0.5*1025*0.0513*U²; CL=lookup(h/0.27,wave)+0.04α\nB=1025g*0.005; W=5.125g; F=B−W+qCL−5v\nh′=v; v′=F/(5.125+5); h(0)=0.27*gap/100; v(0)=0\nStop at h/0.27 outside [0.27,0.71]; do not extrapolate\nBoundary events are located within an RK4 step; an initial boundary with outward force stops at t=0. Freeze event time/h/v; do not impose impact or zero velocity. Screen2 s represents at most1 model s.",
  "source": [
    "https://arxiv.org/html/2504.00427v1",
    "Zhu et al. (2025) · Wavenumber and near-substrate lift"
  ],
  "extraSources": [
    [
      "https://pubmed.ncbi.nlm.nih.gov/42636885/",
      "Seamone et al. (2026) · River stingray ground interactions"
    ]
  ],
  "icon": "🛸",
  "ep": "250",
  "episodeTitle": "〈揭開海洋幽靈的面紗：在海床上飛翔的「魟魚」戰士｜EP.250〉",
  "date": "2026-10-03",
  "action": [
    "觀察一次",
    "Watch once"
  ],
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/sg/podcast/%E6%8F%AD%E9%96%8B%E6%B5%B7%E6%B4%8B%E5%B9%BD%E9%9D%88%E7%9A%84%E9%9D%A2%E7%B4%97-%E5%9C%A8%E6%B5%B7%E5%BA%8A%E4%B8%8A%E9%A3%9B%E7%BF%94%E7%9A%84-%E9%AD%9F%E9%AD%9A-%E6%88%B0%E5%A3%AB-ep-250/id1812447277?i=1000792031412",
    "episodeId": "1000792031412",
    "duration": "24 分 02 秒",
    "durationEn": "24 min 02 sec",
    "durationIso": "PT24M2S",
    "subscribersOnly": true,
    "verifiedDate": "2026-10-06",
    "source": "https://open.firstory.fm/story/cmulaj2bv005j01v8f0ye2jwp",
    "coverUrl": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/kLcKhteav-E06MHwj7GW_.jpg"
  },
  "defaults": {
    "wave": 1,
    "gap": 37,
    "speed": 0.15,
    "angle": 2
  },
  "keywords": "仿魟鰭的離床挑戰,Ray-inspired fin clearance,魟魚,仿生鰭,負向升力,離床距離,ray-inspired fin,ground effect,lift,科學好好聽,動物科學,互動科學,science for kids",
  "description": [
    "貼近底部，一定會多一股向上的力嗎？ 動手改變條件，觀察機制與假設。",
    "Does approaching the bottom always add upward lift? Change conditions and inspect the mechanism and assumptions."
  ],
  "formulaZh": "動壓尺度q＝0.5×1025×0.0513×U²（N）\n鰭長c＝0.27m；高度比h/c限0.27..0.71\n拍動係數：[−.60,−.40,−.18,0]；波浪：[−.10,−.08,−.04,0]\n高度比節點：[.27,.37,.50,.71]，線性內插\n下吸力＝q×查表係數；姿態力＝q×0.04×α（α以度計）\n浮力B＝(1025×0.005)g；重量W＝5.125g，皆為N；本例相同\n向上為正：h′＝v；v′＝(B−W＋下吸力＋姿態力−5v)/10.125\nh(0)＝0.27×距離百分比/100；v(0)＝0\nRK4每2ms，邊界事件在步內二分定位；到界保留該時刻h與v\n起點就在界線且受力朝外：t＝0立即停止；不強加v＝0或撞床\n2秒畫面看最多1模型秒；到資料邊界後時刻與圖形保留\n係數為教學假設，不是活體魟魚的量測表",
  "dateModified": "2026-10-08"
};
