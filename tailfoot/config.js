window.CONFIG={
  "id": "A08",
  "path": "tailfoot",
  "title": [
    "袋鼠尾巴：第五個支點",
    "Kangaroo tail support"
  ],
  "question": [
    "尾巴接地與抬起，受力有什麼不同？",
    "How do forces change when the tail contacts the ground?"
  ],
  "hint": [
    "停在 35%：後足抬起。切尾巴接地／移除，看支撐與反力。",
    "At 35%, hind feet are raised. Remove tail contact and inspect support and force."
  ],
  "controls": [
    {
      "key": "phase",
      "label": [
        "低速步態時間軸",
        "Slow-gait timeline"
      ],
      "min": 0,
      "max": 100,
      "step": 5,
      "value": 35,
      "unit": "%",
      "options": null
    },
    {
      "key": "tail",
      "label": [
        "尾巴接地安排",
        "Tail-contact setting"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "移除接地",
          "Remove contact"
        ],
        [
          "依步態接地",
          "Follow gait"
        ]
      ]
    },
    {
      "key": "cm",
      "label": [
        "重心前後位置",
        "Fore–aft mass centre"
      ],
      "min": -80,
      "max": 80,
      "step": 5,
      "value": 0,
      "unit": "cm",
      "options": null
    },
    {
      "key": "push",
      "label": [
        "尾巴要求水平推力",
        "Requested horizontal tail force"
      ],
      "min": 0,
      "max": 100,
      "step": 10,
      "value": 30,
      "unit": "N",
      "options": null
    }
  ],
  "mission": [
    "尾巴還在空中時，地面給尾巴的力？",
    "When the tail is airborne, its ground force is…"
  ],
  "options": [
    [
      "零",
      "Zero"
    ],
    [
      "跟接地時一樣",
      "The same as when grounded"
    ]
  ],
  "answer": 0,
  "reason": [
    "地面反力需要接觸；垂直支撐範圍以接地點界定，越界時需要動態調整。",
    "Ground reaction requires contact. Contact locations define the vertical-support interval; outside it, dynamic adjustment is needed."
  ],
  "comparisons": [
    {
      "label": [
        "接地／移除尾巴",
        "Contact / remove tail"
      ],
      "key": "tail",
      "a": 1,
      "b": 0,
      "base": {
        "phase": 35,
        "cm": 0
      }
    },
    {
      "label": [
        "重心前移",
        "Move mass centre forward"
      ],
      "key": "cm",
      "a": 0,
      "b": 80,
      "base": {
        "phase": 35,
        "tail": 1
      }
    },
    {
      "label": [
        "同一尾巴：抬起／接地",
        "Tail airborne / grounded"
      ],
      "key": "phase",
      "a": 10,
      "b": 35,
      "base": {
        "tail": 1,
        "cm": 0
      }
    }
  ],
  "limit": [
    "30 kg 平面教學物體；成對前足、後足各合為一個接地點，尾巴另為一點。垂直靜態可行時選最小平方反力分配；越界時只保持總垂直力等於重量並標出未平衡力矩，必須動態調整。水平尾巴反力上限為 0.7 倍其垂直力，是抓地假設，會使物體加速。步態時段與參數是示例，不是實測百分比或完整肌肉求解。 力矩帳只計垂直反力；未給重心高度，不計水平力的轉動效應，也不模擬傾倒。",
    "A 30 kg planar teaching object. Each fore-/hind-foot pair is collapsed to one point, with a separate tail point. Where vertical static balance is feasible, use a minimum-square reaction allocation. Outside support, balance vertical force only and show residual torque requiring dynamics. Tail horizontal force is capped at 0.7 times its vertical reaction, an assumed grip limit that accelerates the body. Gait phases are illustrative, not measured proportions or a muscle solution. The moment ledger uses vertical reactions only: centre height and horizontal-force moments are omitted, and tipping is not simulated."
  ],
  "formula": "m=30 kg; g=9.81 m/s²; weight W=294.3 N\nFore x=+0.65m; tail x=−0.70m; hind x=0m\nxCM=control cm/100; cyan interval includes endpoints\nFeasible: ΣNi=W; ΣNi xi=W xCM; Ni≥0\nChoose minimum ΣNi² among feasible allocations; airborne Ni=0\nOutside: share W equally across contacts; vertical force only\nVertical residual=ΣNi xi−W xCM (N·m)\nTail push=min(request,0.7 Ntail); no contact gives 0\n0.7 is assumed grip, not measured; push accelerates body\nNo horizontal moment, tipping or muscles; example phases\n0–<20% hind;20–<50% fore+tail;50–<70% all;70–<100% hind+tail;100% wraps to0%",
  "source": [
    "https://www.sfu.ca/locomotionlab/assets/oconnor-etal-kangaroo-tail-and-locomotion2014.pdf",
    "O’Connor et al. (2014) · Pentapedal tail forces"
  ],
  "icon": "🦘",
  "ep": "208",
  "episodeTitle": "〈EP.208｜演化論的肌肉與魔法：解密「袋鼠」不可思議的生存工藝〉",
  "date": "2026-10-03",
  "action": [
    "觀察一次",
    "Watch once"
  ],
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/ep-208-%E6%BC%94%E5%8C%96%E8%AB%96%E7%9A%84%E8%82%8C%E8%82%89%E8%88%87%E9%AD%94%E6%B3%95-%E8%A7%A3%E5%AF%86-%E8%A2%8B%E9%BC%A0-%E4%B8%8D%E5%8F%AF%E6%80%9D%E8%AD%B0%E7%9A%84%E7%94%9F%E5%AD%98%E5%B7%A5%E8%97%9D/id1812447277?i=1000754102986",
    "duration": "約 18 分鐘",
    "durationEn": "About 18 min",
    "appleId": "1000754102986",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/62/a3/78/62a378ed-c3b5-bb64-2164-2d980461071d/mza_7866055195508036093.jpg/500x500bb.webp",
    "subscribersOnly": false,
    "reviewed": "2026-10-06"
  },
  "defaults": {
    "phase": 35,
    "tail": 1,
    "cm": 0,
    "push": 30
  },
  "keywords": "袋鼠尾巴：第五個支點,Kangaroo tail support,袋鼠尾巴,支撐,地面反力,ground reaction,pentapedal gait,科學好好聽,動物科學,互動科學,science for kids",
  "description": [
    "尾巴接地與抬起，受力有什麼不同？ 動手改變條件，觀察機制與假設。",
    "How do forces change when the tail contacts the ground? Change conditions and inspect the mechanism and assumptions."
  ],
  "formulaZh": "m=30 kg；g=9.81 m/s²；重量 W=294.3 N\n前足 x=+0.65m；尾巴 x=−0.70m；後足 x=0m\n重心 xCM=控制公分÷100；青色範圍含兩端點\n可平衡：ΣNi=W、ΣNi xi=W xCM、Ni≥0\n在可行分配中選 ΣNi² 最小；未接地 Ni=0\n越界：各接地點平均分 W，只平衡垂直總力\n垂直殘餘力矩=ΣNi xi−W xCM（N·m）\n尾巴水平力=min(要求推力,0.7 N尾)；無接地為0\n0.7是自訂抓地係數，不是實測；水平力會加速\n不計水平力矩、真實傾倒或肌肉。步態時段是示例\n0–<20%後足；20–<50%前足＋尾；50–<70%三點；70–<100%後足＋尾；100%回0%",
  "dateModified": "2026-10-09"
};
