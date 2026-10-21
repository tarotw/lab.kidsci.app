window.CONFIG={
  "id": "B07",
  "path": "krill",
  "title": [
    "藍鯨的磷蝦能量帳",
    "Blue whale energy ledger"
  ],
  "question": [
    "一大口水，真的每次都划算嗎？",
    "Is every big gulp worth the energy?"
  ],
  "hint": [
    "先把磷蝦密度調低，看收入與支出；再試著增加吞水量。",
    "Lower krill density and compare income with cost. Then increase gulp volume."
  ],
  "controls": [
    {
      "key": "density",
      "label": [
        "磷蝦密度",
        "Krill density"
      ],
      "min": 0,
      "max": 0.2,
      "step": 0.001,
      "value": 0.02,
      "unit": "kg/m³",
      "options": null
    },
    {
      "key": "volume",
      "label": [
        "吞水體積",
        "Gulp volume"
      ],
      "min": 10,
      "max": 100,
      "step": 5,
      "value": 50,
      "unit": "m³",
      "options": null
    },
    {
      "key": "cost",
      "label": [
        "基本衝刺成本",
        "Base lunge cost"
      ],
      "min": 10,
      "max": 200,
      "step": 10,
      "value": 60,
      "unit": "kJ",
      "options": null
    }
  ],
  "action": [
    "吞一口",
    "Take a gulp"
  ],
  "mission": [
    "磷蝦很稀疏時，大口吞可能？",
    "With sparse krill, a big gulp may…"
  ],
  "options": [
    [
      "花的比吃到的多",
      "Cost more than it gains"
    ],
    [
      "一定淨賺",
      "Always profit"
    ]
  ],
  "answer": 0,
  "reason": [
    "吞水也要花能量；食物密度高，才容易讓收入超過支出。",
    "Engulfing water costs energy. Dense prey makes it easier for gains to exceed costs."
  ],
  "comparisons": [
    {
      "label": [
        "稀疏／密集磷蝦",
        "Sparse / dense krill"
      ],
      "key": "density",
      "a": 0.001,
      "b": 0.1
    },
    {
      "label": [
        "小口／大口",
        "Small / large gulp"
      ],
      "key": "volume",
      "a": 20,
      "b": 80
    },
    {
      "label": [
        "反例：空水",
        "Counterexample: no food"
      ],
      "key": "density",
      "a": 0.02,
      "b": 0
    }
  ],
  "limit": [
    "捕捉80%、每kg捕到食物4000kJ均為教學假設。成本＝基本kJ＋1kJ×(體積/1m³)^1.3，係數與冪次自訂，未擬合真鯨數據；沒有同化率、呼吸、下潛／返程與尋找食物等成本。單次假設能量帳，不推算真實每日需求、體型極限、生態最佳吞水量或成功率。80%是捕捉比例，不是食物轉成肌肉功的效率。2秒動畫只示意吞一口，數字從開始就是完整單口帳，暫停保留粒子位置。固定種子的至多100粒子只示意密度，不是真蝦數或捕捉比例。",
    "80% capture and 4000 kJ/kg captured food are assumptions. Cost = base kJ + 1 kJ×(volume/1 m³)^1.3; coefficient and exponent are designed, not fitted whale data. Assimilation, respiration, descent/return and prey search are omitted. A single illustrative ledger, not daily needs, size limits, ecological optimum or success rate. Capture fraction is not food-to-muscle efficiency. The 2 s diagram is schematic; values are a full-gulp ledger throughout, and pausing retains particles. At most 100 seeded particles illustrate density, not real counts or capture fraction."
  ],
  "formula": "Captured food = density (kg/m³) × volume (m³) × 0.8\nGain = captured kg × 4000 kJ/kg\nCost = base kJ + 1 kJ×[volume/(1 m³)]^1.3\nNet kJ = gain − cost; 1 MJ = 1000 kJ\nBreak-even density = cost/(0.8 × volume × 4000 kJ/kg)\n80% is capture, not assimilation or muscle efficiency.\nThe 2 s animation is a diagram, not measured gulp time; all values cover one whole gulp.",
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/21147977/",
    "Goldbogen et al., JEB (2011)"
  ],
  "ep": "203",
  "date": "2026-10-03",
  "episodeTitle": "〈EP.203｜藍色巨獸與深海輓歌：解密地球終極生命體的生與死〉",
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/ep-203-%E8%97%8D%E8%89%B2%E5%B7%A8%E7%8D%B8%E8%88%87%E6%B7%B1%E6%B5%B7%E8%BC%93%E6%AD%8C-%E8%A7%A3%E5%AF%86%E5%9C%B0%E7%90%83%E7%B5%82%E6%A5%B5%E7%94%9F%E5%91%BD%E9%AB%94%E7%9A%84%E7%94%9F%E8%88%87%E6%AD%BB/id1812447277?i=1000712089721&uo=4",
    "verified": true,
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/m3ihPmYs10Vs6FrR7d0PE.jpg",
    "duration": "11 分 54 秒",
    "appleId": "1000712089721",
    "durationEn": "11 min 54 sec",
    "durationIso": "PT11M54S",
    "verifiedOn": "2026-10-06",
    "source": "https://open.firstory.fm/story/cmdpx4cut00d201xl18mqglw5",
    "subscribersOnly": false
  },
  "defaults": {
    "density": 0.02,
    "volume": 50,
    "cost": 60
  },
  "keywords": "藍鯨的磷蝦能量帳,Blue whale energy ledger,科學好好聽,兒童科學,互動實驗,science for kids,interactive experiment,藍鯨,磷蝦,鯨鬚,衝刺進食,食物密度,能量收支,blue whale,krill,baleen,lunge feeding,prey density,energy budget",
  "description": [
    "調磷蝦密度、吞水體積與衝刺成本，比較完整單口的收入、支出和淨收益。附中英文教學假設與公式，不預測真實藍鯨的每日需求。",
    "Change krill density, gulp volume and lunge cost to compare one full gulp’s gain, cost and net energy. Bilingual assumptions and formulas; no prediction of real daily whale needs."
  ],
  "formulaZh": "捕到食物＝密度(kg/m³)×吞水體積(m³)×0.8\n收入＝捕到kg×4000kJ/kg\n支出＝基本kJ＋1kJ×[吞水體積/(1m³)]^1.3\n淨收益(kJ)＝收入－支出；1MJ＝1000kJ\n收支相等密度＝支出/(0.8×體積×4000kJ/kg)\n1m³＝1000公升；1kg/m³＝1000g/1000公升\n80%是捕捉比例，不是同化率或食物轉成肌肉功的效率\n2秒動畫是示意，不是實測吞食秒數；所有數字是完整單口帳\n係數與冪次自訂，沒有下潛、返程或搜尋食物成本",
  "dateModified": "2026-10-09"
};
