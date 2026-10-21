window.CONFIG={
  "id": "B01",
  "path": "fintask",
  "status": "complete",
  "title": [
    "魚尾任務：直游與轉彎",
    "Fish-tail task lab"
  ],
  "question": [
    "同一條尾巴，在兩種任務都最好嗎？",
    "Can one tail be best at both tasks?"
  ],
  "hint": [
    "先跑直線，再換兩次轉彎；比較完成所需的示例能量。",
    "Try a straight route, then two turns. Compare the illustrative energy cost."
  ],
  "controls": [
    {
      "key": "tail",
      "label": [
        "示例尾形",
        "Example tail"
      ],
      "min": 0,
      "max": 2,
      "step": 1,
      "value": 0,
      "unit": "",
      "options": [
        [
          "新月尾",
          "Lunate"
        ],
        [
          "圓尾",
          "Rounded"
        ],
        [
          "柔軟叉尾",
          "Flexible fork"
        ]
      ]
    },
    {
      "key": "task",
      "label": [
        "路線任務",
        "Route task"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 0,
      "unit": "",
      "options": [
        [
          "直線",
          "Straight"
        ],
        [
          "兩次轉彎",
          "Two turns"
        ]
      ]
    },
    {
      "key": "budget",
      "label": [
        "可用能量",
        "Energy budget"
      ],
      "min": 0,
      "max": 200,
      "step": 10,
      "value": 100,
      "unit": "J",
      "options": null
    }
  ],
  "mission": [
    "只看尾巴外形，能確定真魚的性能嗎？",
    "Does tail outline alone determine real performance?"
  ],
  "options": [
    [
      "還要看柔軟度、擺動與其他鰭",
      "Flexibility, motion and other fins matter"
    ],
    [
      "所有叉尾都一定更省能",
      "Every forked tail is more efficient"
    ]
  ],
  "answer": 0,
  "reason": [
    "研究中的柔軟叉尾不一定比截尾省能；本關卡的查表只用來隔離任務取捨。",
    "Flexible forked tails need not beat truncate tails in real studies. This lookup isolates a task trade-off."
  ],
  "comparisons": [
    {
      "label": [
        "直線尾形取捨",
        "Tail trade-off on straight route"
      ],
      "key": "tail",
      "a": 0,
      "b": 1,
      "base": {
        "task": 0
      }
    },
    {
      "label": [
        "同一尾形換任務",
        "Same tail, different task"
      ],
      "key": "task",
      "a": 0,
      "b": 1,
      "base": {
        "tail": 0
      }
    },
    {
      "label": [
        "轉彎換尾形",
        "Tail trade-off on turns"
      ],
      "key": "tail",
      "a": 0,
      "b": 1,
      "base": {
        "task": 1
      }
    }
  ],
  "limit": [
    "純教學查表，三種設計的直線效率為 0.8／0.55／0.45，單次轉彎附加成本為 80／20／30 J。路線總長 10 m，基礎直線阻力功 20 J；兩轉彎路線也長 10 m。動畫按預算／需求顯示能走到的比例，不代表真實速度或連續動力學。數字由本關卡定義，非魚類量測或實驗擬合；其他鰭、身體、柔軟度與擺動方式都重要。",
    "A teaching lookup: straight efficiencies 0.8/0.55/0.45 and per-turn costs 80/20/30 J. Both routes total 10 m; baseline straight drag work is 20 J. Motion shows budget / required cost, not actual speed or continuous dynamics. Numbers are defined rules, not fish measurements or fitted data. Body, other fins, flexibility and motion matter."
  ],
  "formula": "η=[0.8,0.55,0.45]; turnCost=[80,20,30] J\nrequired=20/η+turns*turnCost; turns=0 or 2\nroute fraction=min(1,budget/required); used=min(budget,required)",
  "source": [
    "https://journals.biologists.com/jeb/article/225/22/jeb244967/284368/A-tale-of-two-fish-tails-does-a-forked-tail-really",
    "JEB (2022) · A tale of two fish tails"
  ],
  "extraSources": [],
  "icon": "🐟",
  "ep": "182",
  "episodeTitle": "〈EP.182｜水下法拉利：揭開魚類演化與流體力學的超能力祕密〉",
  "date": "2026-10-03",
  "action": [
    "觀察一次",
    "Watch once"
  ],
  "podcast": {
    "verified": true,
    "urlVerified": true,
    "provider": "Firstory",
    "url": "https://open.firstory.fm/story/cmk8bu12n0ivc01te3aqc3tzv",
    "source": "https://open.firstory.fm/story/cmk8bu12n0ivc01te3aqc3tzv",
    "title": "〈EP.182｜水下法拉利：揭開魚類演化與流體力學的超能力祕密〉",
    "durationSeconds": 787,
    "duration": "13 分 07 秒",
    "durationEn": "13 min 07 sec",
    "durationIso": "PT13M7S",
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/LOW9EB1iPRBLtyEbLS8KK.jpg",
    "coverAvailable": true,
    "coverFile": "podcast/ep182.jpg",
    "artworkVisualChecked": true,
    "verifiedOn": "2026-10-08",
    "publishedAt": "Sat, 10 Jan 2026 10:45:37 GMT",
    "evidenceBasis": "Current saved publisher RSS + exact full public Firstory episode page + matching artwork bytes and pixels. No Apple ID, entitlement or audio inference."
  },
  "defaults": {
    "tail": 0,
    "task": 0,
    "budget": 100
  },
  "keywords": "魚尾任務：直游與轉彎,Fish-tail task lab,尾鰭,任務取捨,推進效率,caudal fin,trade-off,propulsion,科學好好聽,動物科學,互動科學,science for kids",
  "description": [
    "同一條尾巴，在兩種任務都最好嗎？ 動手改變條件，觀察機制與假設。",
    "Can one tail be best at both tasks? Change conditions and inspect the mechanism and assumptions."
  ],
  "formulaZh": "η＝直線效率：[0.8,0.55,0.45]\n每次轉彎成本：[80,20,30] J；轉彎數n＝0或2\n完成所需能量E＝20/η＋n×轉彎成本（J）\n可走比例＝min(1,預算/E)；可走距離＝10×比例（m）\n使用能量＝min(預算,E)；剩餘＝max(0,預算−E)\n兩種完整路線皆10m；曲線按預算比例展示，不是在路上逐次扣轉彎費\n數值是公開的教學關卡規則，不是魚類量測、速度或代謝預測",
  "dateModified": "2026-10-08"
};
