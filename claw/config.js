window.CONFIG={
  "id": "A01",
  "path": "claw",
  "title": [
    "獵豹的釘鞋",
    "Cheetah grip lab"
  ],
  "question": [
    "爪子伸出去，就一定抓得住嗎？",
    "Do claws always prevent slipping?"
  ],
  "hint": [
    "先把推力加大，看腳掌何時開始滑；再換成硬地。",
    "Raise the push and watch the paw slip. Then try hard ground."
  ],
  "controls": [
    {
      "key": "ground",
      "label": [
        "地面",
        "Ground"
      ],
      "min": 0,
      "max": 2,
      "step": 1,
      "value": 0,
      "unit": "",
      "options": [
        [
          "草地",
          "Grass"
        ],
        [
          "硬地",
          "Hard"
        ],
        [
          "濕地",
          "Wet"
        ]
      ]
    },
    {
      "key": "claw",
      "label": [
        "爪子接觸",
        "Claw contact"
      ],
      "min": 0,
      "max": 100,
      "step": 10,
      "value": 70,
      "unit": "%",
      "options": null
    },
    {
      "key": "push",
      "label": [
        "向後推地",
        "Push on ground"
      ],
      "min": 0,
      "max": 600,
      "step": 10,
      "value": 300,
      "unit": "N",
      "options": null
    }
  ],
  "action": [
    "推一次",
    "Push"
  ],
  "mission": [
    "同樣推力下，硬地加長爪子會怎樣？",
    "On hard ground, what do more claws do?"
  ],
  "options": [
    [
      "一定不滑",
      "Always stop slip"
    ],
    [
      "本模型沒有錨定加成",
      "No anchoring bonus"
    ]
  ],
  "answer": 1,
  "reason": [
    "爪子要能插入地面才有錨定效果；用力超過上限仍會滑。",
    "Claws need a suitable surface to anchor. Push beyond the limit still slips."
  ],
  "comparisons": [
    {
      "label": [
        "草地：少爪／多爪",
        "Grass: less / more claw"
      ],
      "key": "claw",
      "a": 0,
      "b": 100
    },
    {
      "label": [
        "同推力：草地／濕地",
        "Same push: grass / wet"
      ],
      "key": "ground",
      "a": 0,
      "b": 2
    },
    {
      "label": [
        "反例：硬地的爪子",
        "Counterexample: hard ground"
      ],
      "key": "claw",
      "a": 0,
      "b": 100
    }
  ],
  "limit": [
    "獵豹的爪子不能完全收回。摩擦與錨定係數為示例；硬地錨定=0。示意一個等效支撐點、40 kg 質量，不預測真實跑速。本輪只讀Wilson野外運動及Russell／Bryant爪形研究的公開摘要；不由摘要推定本教具係數。",
    "Cheetah claws cannot fully retract. Coefficients are illustrative; anchoring is zero on hard ground. One equivalent contact, mass 40 kg; no real speed prediction. Only the public abstracts of Wilson’s field locomotion study and Russell/Bryant’s claw morphology study were reviewed here; neither calibrates these illustrative coefficients."
  ],
  "formula": "Grip limit Fmax = μmg + anchoring force\nDelivered forward force F = min(push, Fmax); acceleration a = F / m\nMass m = 40 kg; gravity g = 9.81 m/s²\nIllustrative μ: grass 0.5 / hard 0.6 / wet 0.2\nAnchoring = contact fraction × (grass 150 / hard 0 / wet 30) N\nContact fraction = displayed percentage / 100; N is a newton of force.\nSpeed curve v = at: imagine starting from rest and holding the same force for 2 s.",
  "source": [
    "https://www.nature.com/articles/nature12295",
    "Wilson et al., Nature (2013)"
  ],
  "ep": "c5",
  "date": "2026-10-03",
  "episodeTitle": "〈VIP.5｜新年悄悄話特輯｜地球極速奧運會：誰才是披著毛皮的法拉利與生物界的戰鬥機？〉",
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/vip-5-%E6%96%B0%E5%B9%B4%E6%82%84%E6%82%84%E8%A9%B1%E7%89%B9%E8%BC%AF-%E5%9C%B0%E7%90%83%E6%A5%B5%E9%80%9F%E5%A5%A7%E9%81%8B%E6%9C%83-%E8%AA%B0%E6%89%8D%E6%98%AF%E6%8A%AB%E8%91%97%E6%AF%9B%E7%9A%AE%E7%9A%84%E6%B3%95%E6%8B%89%E5%88%A9%E8%88%87%E7%94%9F%E7%89%A9%E7%95%8C%E7%9A%84%E6%88%B0%E9%AC%A5%E6%A9%9F/id1812447277?i=1000708141872&uo=4",
    "verified": true,
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/FOZdcGcuKhBwxzKfEjD2X.jpg",
    "duration": "16 分 12 秒",
    "appleId": "1000708141872",
    "reviewed": "2026-10-06",
    "durationEn": "16 min 12 sec",
    "durationIso": "PT16M12S"
  },
  "defaults": {
    "ground": 0,
    "claw": 70,
    "push": 300
  },
  "keywords": "獵豹的釘鞋,Cheetah grip lab,科學好好聽,兒童科學,互動實驗,science for kids,interactive experiment,獵豹,爪子,抓地力,摩擦,土壤錨定,推力,加速度,打滑,受力,cheetah,claws,grip,friction,soil anchoring,push force,acceleration,slipping,force",
  "description": [
    "爪子伸出去，就一定抓得住嗎？ 動手調整、比較與解釋，探索動物機制的教學模型。",
    "Do claws always prevent slipping? Change conditions, compare results and explain an educational model of animal mechanisms."
  ],
  "formulaZh": "抓地上限 Fmax = μmg + 錨定力\n實際向前力 F = min(向後推力, Fmax)；加速度 a = F / m\n質量 m = 40 kg；重力加速度 g = 9.81 m/s²\n示例摩擦係數 μ：草地 0.5／硬地 0.6／濕地 0.2\n錨定力 = 爪子接觸比例 × (草地 150／硬地 0／濕地 30) N\n接觸比例 = 百分比 / 100；N 是力的單位牛頓。\n曲線 v = at：假想從靜止、以相同力持續推 2 秒。",
  "moreSources": [
    [
      "https://www.cambridge.org/core/journals/journal-of-zoology/article/abs/claw-retraction-and-protraction-in-the-carnivora-the-cheetah-acinonyx-jubatus-as-an-atypical-felid/382760327E6D92320BEE9825D3F0A584",
      [
        "Russell與Bryant（2001）爪子形態研究摘要",
        "Russell & Bryant (2001), claw morphology abstract"
      ]
    ]
  ],
  "dateModified": "2026-10-07"
};
