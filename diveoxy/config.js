window.CONFIG={
  "id": "B08",
  "path": "diveoxy",
  "status": "complete",
  "title": [
    "深潛鯨魚的氧氣預算",
    "Whale dive oxygen budget"
  ],
  "question": [
    "留在深處前，要替上浮留下多少氧？",
    "How much oxygen must be reserved for the ascent?"
  ],
  "hint": [
    "先加深，再把活動量加倍；按觀察看返程。",
    "Dive deeper, then double activity. Watch the ascent budget."
  ],
  "controls": [
    {
      "key": "depth",
      "label": [
        "計畫深度",
        "Planned depth"
      ],
      "min": 0,
      "max": 1500,
      "step": 100,
      "value": 500,
      "unit": "m",
      "options": null
    },
    {
      "key": "speed",
      "label": [
        "下潛／上浮速率",
        "Descent / ascent speed"
      ],
      "min": 0.5,
      "max": 3,
      "step": 0.5,
      "value": 1.5,
      "unit": "m/s",
      "options": null
    },
    {
      "key": "activity",
      "label": [
        "示例活動耗氧倍率",
        "Example activity multiplier"
      ],
      "min": 1,
      "max": 5,
      "step": 1,
      "value": 1,
      "unit": "×",
      "options": null
    },
    {
      "key": "hold",
      "label": [
        "計畫深處停留",
        "Planned bottom time"
      ],
      "min": 0,
      "max": 30,
      "step": 5,
      "value": 10,
      "unit": "min",
      "options": null
    },
    {
      "key": "reserve",
      "label": [
        "示例總氧儲備",
        "Example total oxygen store"
      ],
      "min": 25,
      "max": 150,
      "step": 25,
      "value": 100,
      "unit": "L O₂",
      "options": null
    }
  ],
  "action": [
    "觀察一次",
    "Watch once"
  ],
  "mission": [
    "心跳變慢，就能判定耗氧一定少嗎？",
    "Does a slower heart guarantee lower oxygen use?"
  ],
  "options": [
    [
      "還要看活動、氧儲量與返程",
      "Activity, stores and ascent also matter"
    ],
    [
      "只算心跳，不需要返程氧",
      "Heart rate alone; ignore ascent oxygen"
    ]
  ],
  "answer": 0,
  "reason": [
    "心率不是耗氧速率。返程也要消耗氧，不能把所有儲備都花在停留；此例只示範帳本。",
    "Heart rate is not oxygen consumption. Returning also costs oxygen; the whole store cannot be spent waiting. This is an illustrative ledger."
  ],
  "comparisons": [
    {
      "label": [
        "活動1倍／2倍",
        "Activity 1× / 2×"
      ],
      "key": "activity",
      "a": 1,
      "b": 2
    },
    {
      "label": [
        "淺500／深1500公尺",
        "500 / 1500 m depth"
      ],
      "key": "depth",
      "a": 500,
      "b": 1500
    },
    {
      "label": [
        "停留10／30分鐘",
        "10 / 30 min bottom time"
      ],
      "key": "hold",
      "a": 10,
      "b": 30
    }
  ],
  "limit": [
    "匿名等效鯨類的教學帳本，並非獨角鯨或藍鯨量測參數。示例氧儲備以L O₂等效量表示，肺／血液／肌肉固定10%／50%／40%，按比例同時扣除；全程假設閉氣，0m停留也不補氧；不模擬氣體交換、肺塌陷、壓力、乳酸與恢復。游動耗氧=(2+0.5u³)×活動倍率 L/min，停留=2×活動倍率 L/min，是自訂關係，不從心率估算。等速垂直下潛與上浮；計畫需氧含完整返程。氧不足時動畫止於帳本耗盡點，虛線仍保留未完成計畫；不是死亡、受傷或真實可潛時間預測。論文中的獨角鯨為脫離纏網／擱淺後的逃離情境，不泛化為全部潛水。 顯示數字分別四捨五入，三庫顯示值相加可能與總欄的末位不同；帳本計算使用未捨入值。",
    "An anonymous equivalent-cetacean teaching ledger, not measured narwhal or blue-whale parameters. Oxygen uses equivalent L O₂; illustrative lung / blood / muscle stores are 10% / 50% / 40%, withdrawn proportionally together. Breathing is absent throughout, including waits at 0 m. Gas exchange, lung collapse, pressure, lactate and recovery are omitted. Movement use=[2+0.5(u/(1 m/s))³]×activity L/min; waiting use=2×activity L/min, designed relations independent of heart rate. Constant-speed vertical descent and ascent; required oxygen includes the complete return. An insufficient budget stops the animation at depletion while a dashed plan remains. This predicts neither injury nor actual dive limits. The cited narwhals were escaping after net entanglement or stranding, not ordinary dives. Readouts are rounded separately, so displayed store labels may differ from the rounded total in the last digit. The ledger uses unrounded values."
  ],
  "formula": "tDown=depth/speed/60 min; tUp=tDown\nmoveRate=(2+0.5*(speed/(1 m/s))³)*activity L O₂/min\nholdRate=2*activity L O₂/min\nrequired=2*tDown*moveRate+hold*holdRate\nbottomTimeBudget=max(0,(reserve−2*tDown*moveRate)/holdRate)\nreturnReserve(depthNow)=depthNow/speed/60*moveRate\nremaining=max(0,reserve−cumulativeUse); stop at depletion\nlung/blood/muscle = remaining × [0.10,0.50,0.40]",
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/29217577/",
    "Williams et al. (2017) · Narwhal escape physiology"
  ],
  "extraSources": [
    [
      "https://bpb-us-e1.wpmucdn.com/sites.ucsc.edu/dist/7/1769/files/2024/07/Williams-et-al_2017_Paradoxical-escape-responses-by-narwhals.pdf",
      "Author-hosted paper · oxygen-budget discussion"
    ]
  ],
  "ep": "199",
  "episodeTitle": "〈EP.199｜海洋中的獨角獸：獨角鯨的長牙機密與心跳悖論〉",
  "date": "2026-10-03",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/ep-199-%E6%B5%B7%E6%B4%8B%E4%B8%AD%E7%9A%84%E7%8D%A8%E8%A7%92%E7%8D%B8-%E7%8D%A8%E8%A7%92%E9%AF%A8%E7%9A%84%E9%95%B7%E7%89%99%E6%A9%9F%E5%AF%86%E8%88%87%E5%BF%83%E8%B7%B3%E6%82%96%E8%AB%96/id1812447277?i=1000710884482&uo=4",
    "episodeId": "1000710884482",
    "source": "https://open.firstory.fm/story/cmdpx4cut00dc01xl51vbhfuq",
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/vngb2Rlf4o9qK4WepLbrp.jpg",
    "duration": "12 分 36 秒",
    "durationEn": "12 min 36 sec",
    "durationIso": "PT12M36S",
    "subscribersOnly": false,
    "verifiedOn": "2026-10-06"
  },
  "icon": "🐋",
  "keywords": "鯨魚,獨角鯨,深潛,氧氣預算,返程,whale,narwhal,diving,oxygen budget,ascent,科學好好聽,science for kids",
  "description": [
    "改變深度、游速與活動，探索包含返程的三儲存庫教學氧氣帳本。",
    "Change depth, speed and activity in a three-store oxygen ledger that includes the ascent."
  ],
  "defaults": {
    "depth": 500,
    "speed": 1.5,
    "activity": 1,
    "hold": 10,
    "reserve": 100
  },
  "formulaZh": "下潛與上浮各需：深度/速率/60（模型分鐘）\n游動耗氧＝[2＋0.5×(速率/(1m/s))³]×活動倍率 L O₂/min\n停留耗氧＝2×活動倍率 L O₂/min\n往返需氧＝2×下潛分鐘×游動耗氧率\n完整計畫需氧＝往返需氧＋停留分鐘×停留耗氧率\n可分配停留＝max(0,(儲備－往返需氧)/停留耗氧率)\n往返已不足時不能將0分鐘解釋為足夠完成返程\n從目前深度返程需氧＝目前深度/速率/60×游動耗氧率\n目前儲量＝max(0,初始儲備－累計消耗)；在耗盡時停止\n三庫＝儲量×[肺0.10、血液0.50、肌肉0.40]，同時按比例扣\n0m也假設閉氣不補氧；0深度且0停留不耗氧\n2秒畫面看實際停止前的整段；模型分鐘由時計明示\n全部係數為假設；心率不在公式，不提供真實安全時間",
  "dateModified": "2026-10-09"
};
