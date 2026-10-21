window.CONFIG={
  "id": "L01",
  "path": "leaflim",
  "status": "complete",
  "topic": "biology",
  "icon": "🍃",
  "date": "2026-10-14",
  "title": [
    "光合作用的資源瓶頸",
    "Photosynthesis: the resource bottleneck"
  ],
  "question": [
    "只加亮燈，葉片就一定做更多糖嗎？",
    "Does brighter light always make more sugar?"
  ],
  "defaults": {
    "light": 80,
    "water": 80,
    "co2": 5,
    "resp": 1,
    "time": 0,
    "boost": "light",
    "story": 0
  },
  "extras": [
    "leaflim-model.js",
    "leaflim.css",
    "leaflim.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "description": [
    "調光、水與二氧化碳，找飽和教具的瓶頸；分開觀察碳吸收、呼吸返回與糖庫，跟六個碳原子看糖的來源。",
    "Change light, water and carbon dioxide to find the limiting capacity in a saturation teaching model; separate carbon uptake, respiration and sugar storage, then follow six carbon atoms."
  ],
  "keywords": "光合作用,限制因子,碳收支,二氧化碳,呼吸,糖,葉片,科學好好聽,photosynthesis,limiting factors,carbon budget,carbon dioxide,respiration,sugar,leaf",
  "sources": [
    [
      "https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis",
      "OpenStax：光合作用概觀",
      "OpenStax: photosynthesis overview"
    ],
    [
      "https://openstax.org/books/biology-2e/pages/8-3-using-light-energy-to-make-organic-molecules",
      "OpenStax：碳來源與呼吸",
      "OpenStax: carbon source and respiration"
    ],
    [
      "https://www.monash.edu/student-academic-success/biology/photosynthesis/factors-affecting-photosynthesis",
      "Monash：影響光合作用的因素",
      "Monash: factors affecting photosynthesis"
    ]
  ],
  "podcast": {
    "ep": "EP168",
    "title": "綠色奇蹟：揭開葉片裡的「量子光電廠」",
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "mission": [
    "糖裡的碳，這裡從哪裡來？",
    "Where does carbon in the sugar come from here?"
  ],
  "options": [
    [
      "從二氧化碳進入葉片",
      "Carbon dioxide entering the leaf"
    ],
    [
      "全部從土壤變成碳",
      "All soil turns into carbon"
    ]
  ],
  "answer": 0,
  "reason": [
    "光提供能量，二氧化碳提供糖的碳；水與土壤礦物也有作用，不能說植物全部質量來自土壤。植物也呼吸，把糖中部分碳返回二氧化碳。",
    "Light provides energy; carbon dioxide provides sugar carbon. Water and soil minerals matter too, so plant mass does not all come from soil. Plants also respire, returning some sugar carbon as carbon dioxide."
  ],
  "formula": [
    "光、水、CO₂供應刻度0–100皆自訂，非W/m²、土壤含水率或ppm。\n各教學上限Cᵢ=6rᵢ/(rᵢ+20) C份/拍；20與6均自訂。\n總同化G=min(C光,C水,C二氧化碳)，不是實際光合作用定律。\n固定初始糖庫碳12C份，連續群體量，非分數原子。\n吸收I=Gt；呼吸需求D=Rt；返回O=min(D,12+I)。\n留存S=12+I−O≥0；未滿需求D−O。\nG<R時耗盡時刻12/(R−G)；此後教具實際呼吸最多G，非植物存活推算。\n1糖當量=6C份；只算碳，無氧、水、能量完整帳。\nA/B同初庫、同呼吸與時刻；B只把選定供應刻度加20，最高100。\n六碳故事另為反應總覽，非速率帳逐顆原子。Calvin cycle先做G3P再形成多種糖。\n動畫1實秒走1自訂拍，最多12拍。",
    "Light/water/CO₂ supply scales0–100 are custom, not W/m², soil moisture or ppm.\nTeaching capacities Cᵢ=6rᵢ/(rᵢ+20) C units/beat;20 and6 custom.\nGross assimilation G=min(C light,C water,C CO₂), not an actual photosynthesis law.\nInitial sugar carbon12C units, continuous population amounts, not fractional atoms.\nUptake I=Gt; respiratory demand D=Rt; return O=min(D,12+I).\nStored S=12+I−O≥0; unmet demandD−O.\nIfG<R, depletion12/(R−G); thereafter actual teaching respiration at mostG, no survival prediction.\n1sugar equivalent=6C units; carbon only, no full oxygen/water/energy budget.\nA/B share initial bank, respiration and time; B boosts only selected supply by20, capped100.\nSix-carbon story is a separate reaction overview, not individual atoms from the rate ledger. Calvin cycle makesG3P, then various sugars.\nAnimation1custom beat/s, at most12beats."
  ],
  "limit": [
    "飽和＋最小值教學模型，非葉片實測公式；所有供應刻度、20、6、C份與拍自訂，不換算濃度、物種生長或產量。不模擬溫度、光抑制、氣孔、水分運輸、光呼吸及儲備物轉換。供應表示持續條件，不是會被扣掉的有限水槽／CO₂庫；呼吸需求獨立指定、氧氣假設可用，碳不足就限實際返回，未滿需求明示，不預測植物死亡。初始12C份是假想既有糖碳，來源為此前光合作用；碳份是群體連續量，不是分數原子。六碳故事與速率時鐘分開，為多步反應總覽；先G3P再有多種糖，不稱直接一步合成葡萄糖。沒有把物質變成能量或所有植物質量歸土壤；水與礦物質作用另說。EP168／169單集網址、時長與封面待官方核對。",
    "Saturation plus minimum is a teaching model, not a measured leaf law. Supply scales,20,6,C units and beats custom; no concentration/species growth/yield predictions. No temperature, photoinhibition, stomata, transport, photorespiration or reserve conversion. Supplies are sustained conditions, not finite tanks; respiration demand independently selected with oxygen available, actual carbon return capped by substrate and unmet demand shown, no death forecast. Initial12C units are hypothetical existing sugar from earlier photosynthesis; C units continuous population amounts, not fractional atoms. Six-carbon story is separate from rate clock, a multi-step reaction overview; G3P precedes various sugars, not one-step glucose creation. Matter is not converted to energy and all plant mass is not attributed to soil; water/minerals also matter. EP168/169 episode URL, duration and artwork await official verification."
  ]
};
