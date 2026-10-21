window.CONFIG={
  "id": "F09",
  "path": "reefpair",
  "title": [
    "小丑魚與海葵的交換",
    "Clownfish–anemone exchange"
  ],
  "question": [
    "合作的好處和成本，兩邊都一樣嗎？",
    "Does cooperation bring the same gains and costs to both partners?"
  ],
  "hint": [
    "比較四種搭配；再降低魚帶來的養分，看看海葵的帳。",
    "Compare four pairings. Lower fish nutrient input and check the anemone ledger."
  ],
  "controls": [
    {
      "key": "pair",
      "label": [
        "目前搭配",
        "Current pairing"
      ],
      "min": 0,
      "max": 3,
      "step": 1,
      "value": 3,
      "unit": "",
      "options": [
        [
          "都沒有",
          "Neither"
        ],
        [
          "只有魚",
          "Fish only"
        ],
        [
          "只有海葵",
          "Anemone only"
        ],
        [
          "兩者一起",
          "Together"
        ]
      ]
    },
    {
      "key": "pred",
      "label": [
        "掠食壓力（示例）",
        "Predator pressure (example)"
      ],
      "min": 0,
      "max": 10,
      "step": 1,
      "value": 6,
      "unit": "點 / points",
      "options": null
    },
    {
      "key": "nutrient",
      "label": [
        "魚帶來的養分收益",
        "Fish nutrient benefit"
      ],
      "min": 0,
      "max": 10,
      "step": 1,
      "value": 7,
      "unit": "點 / points",
      "options": null
    },
    {
      "key": "space",
      "label": [
        "擁擠程度（示例）",
        "Crowding (example)"
      ],
      "min": 0,
      "max": 10,
      "step": 1,
      "value": 2,
      "unit": "點 / points",
      "options": null
    }
  ],
  "action": [
    "觀察機制",
    "Watch"
  ],
  "mission": [
    "收益小而成本高，合作會？",
    "Small benefits and high costs: a partnership can…"
  ],
  "options": [
    [
      "對某一方不划算",
      "Be costly to one partner"
    ],
    [
      "兩邊永遠賺最多",
      "Always maximize both gains"
    ]
  ],
  "answer": 0,
  "reason": [
    "可共居的小丑魚能從海葵獲得庇護；魚排出的養分可供宿主內的共生藻利用。真實互利取決於物種與環境，這裡用示例點數拆開兩方的帳。",
    "Compatible anemonefish gain shelter from host anemones; excreted fish nutrients can support the host’s symbiotic algae. Outcomes depend on species and setting; invented points separate the two ledgers."
  ],
  "comparisons": [
    {
      "label": [
        "魚單獨／一起",
        "Fish alone / together"
      ],
      "key": "pair",
      "a": 1,
      "b": 3
    },
    {
      "label": [
        "海葵單獨／一起",
        "Anemone alone / together"
      ],
      "key": "pair",
      "a": 2,
      "b": 3
    },
    {
      "label": [
        "一起：養分7／0",
        "Together: nutrients 7/0"
      ],
      "key": "nutrient",
      "a": 7,
      "b": 0,
      "base": {
        "pair": 3
      }
    }
  ],
  "limit": [
    "四種出現條件各自覈算。魚：基準 10−掠食壓力，庇護減去 70% 掠食損失，但付 1+0.4×擁擠成本。海葵：基準 5，合作加養分、減 2+0.6×擁擠成本。所有點數為教學假設，不是存活率、數量、餵養處方或實測最佳配置。 以可共居的物種為前提，不宣稱全部小丑魚對任何海葵完全免疫；庇護與養分機制以公開物種資料作背景，原Roopin2009頁於10月7日複查回傳403，未讀全文或校準分數。四格是相同掠食／養分／擁擠的假設帳，沒有動畫時間。單獨對照保留目前未比較條件；養分示範明示兩組共居7／0。缺席個體不計0分；差額0表示此教具結餘相同，不能稱雙方皆增加。",
    "Four presence conditions have separate ledgers. Fish baseline 10−predation; shelter removes 70% predation loss, costing 1+0.4×crowding. Anemone baseline 5; gains nutrients and pays 2+0.6×crowding. All points are assumptions, not survival rates, abundance, husbandry or measured optima. Assumes compatible host associations, not universal immunity to any anemone. Public species accounts support shelter/nutrient context; the original Roopin (2009) page returned 403 during the October 7 review, without full text or score calibration. Four tiles are hypothetical matched-pressure/nutrient/crowding ledgers, with no animation time. Alone comparisons retain current unrelated settings; the nutrient demo explicitly uses Together with 7/0. Absent individuals have no zero score; a zero difference means equal toy net, not a gain for both."
  ],
  "formula": "Fish alone = 10−P; paired = 10−0.3P−(1+0.4S)\nAnemone alone = 5; paired = 5+N−(2+0.6S)\nAbsent partners have no payoff (not zero survival)\nP=toy predator pressure, N=nutrient gain, S=crowding; all invented points. Display rounded; floating noise below 1e-12 shows 0. No animation time.",
  "source": [
    "https://fishesofaustralia.net.au/home/species/317",
    "澳洲魚類資料庫：小丑魚庇護與養分",
    "Fishes of Australia: clownfish shelter and nutrients"
  ],
  "ep": "255",
  "date": "2026-10-03",
  "episodeTitle": "海洋中的毒堡壘與隱形鬥篷：揭開小丑魚與海葵的終極生存密碼",
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277",
    "verified": false
  },
  "defaults": {
    "pair": 3,
    "pred": 6,
    "nutrient": 7,
    "space": 2
  },
  "keywords": "小丑魚,海葵,互利共生,庇護,養分,排出養分,擁擠,收益,成本,結餘,兒童科學,clownfish,anemone,mutualism,shelter,nutrients,excreted nutrients,crowding,benefit,cost,net payoff,science for kids",
  "description": [
    "切換四種魚與海葵搭配，調掠食壓力、養分與擁擠，核對兩方的收益、成本、結餘與合作差額；繁中英文教具。",
    "Switch four clownfish–anemone arrangements; vary predator pressure, nutrients and crowding to inspect each partner’s gains, costs, net and pairing difference. Bilingual teaching toy."
  ],
  "icon": "🐠",
  "dateModified": "2026-10-11",
  "formulaZh": "魚單獨結餘＝10−P；一起＝10−0.3P−(1＋0.4S)\n魚合作差額＝0.7P−1−0.4S\n海葵單獨結餘＝5；一起＝5＋N−(2＋0.6S)\n海葵合作差額＝N−2−0.6S\nP＝示例掠食壓力，N＝養分收益，S＝擁擠；全為自訂點數。缺席沒有帳，不是0存活。顯示已圓整；小於1e−12的浮點噪音顯0，原數值公式不改。",
  "extraSources": [
    [
      "https://australian.museum/learn/animals/fishes/eastern-clown-anemonefish-amphiprion-percula/",
      "澳洲博物館：指定小丑魚與宿主",
      "Australian Museum: specific clownfish and hosts"
    ],
    [
      "https://www.sciencedirect.com/science/article/pii/S0022098108005753",
      "Roopin與Chadwick2009（原文403，未重試）",
      "Roopin and Chadwick 2009 (original page 403; not retried)"
    ]
  ],
  "extras": [
    "reefpair.css",
    "reefpair-view.js",
    "app.js"
  ],
  "controller": "app.js"
};
