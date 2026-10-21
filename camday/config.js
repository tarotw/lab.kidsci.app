window.CONFIG={
  "id": "L04",
  "path": "camday",
  "status": "complete",
  "topic": "biology",
  "icon": "🌵",
  "date": "2026-10-08",
  "title": [
    "仙人掌的用水時間表",
    "A cactus water timetable"
  ],
  "question": [
    "晚上收碳，白天用碳：同一天的兩種時間表，誰失水較多？",
    "Collect carbon at night and use it by day: which timetable loses more water?"
  ],
  "defaults": {
    "dayTemp": 35,
    "nightTemp": 20,
    "dayHum": 30,
    "nightHum": 70,
    "water": 50,
    "cap": 6,
    "time": 0,
    "plant": "cam"
  },
  "extras": [
    "camday-model.js",
    "camday.css",
    "camday.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "description": [
    "調日夜溫濕，比較典型CAM與普通C3的24小時氣孔、外來碳暫存、糖碳與有限水庫帳；看節水與儲酸代謝成本。",
    "Adjust day/night temperature and humidity; compare24-hour stomatal schedules, stored external carbon, sugar carbon and finite water budgets for teaching CAM/C3 examples, with acid-storage costs."
  ],
  "keywords": "仙人掌,景天酸代謝,CAM,氣孔,光合作用,水分,碳收支,科學好好聽,cactus,CAM,crassulacean acid metabolism,stomata,photosynthesis,water budget,carbon budget",
  "sources": [
    [
      "https://askabiologist.asu.edu/cam-plants",
      "ASU：CAM夜存碳、日用碳",
      "ASU: carbon storage at night and use by day"
    ],
    [
      "https://www.fao.org/4/y2808e/y2808e06.htm",
      "FAO：日夜氣體交換與水分",
      "FAO: diel gas exchange and water"
    ],
    [
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC9298356/",
      "Winter & Smith：酸循環與代謝成本",
      "Winter & Smith: acid cycles and metabolic costs"
    ]
  ],
  "podcast": {
    "ep": "EP235",
    "title": "沙漠裡的綠色巨人：索諾蘭的生存奇蹟",
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "mission": [
    "CAM在白天關孔，怎麼仍用碳做糖？",
    "How can CAM use carbon to make sugars behind closed daytime stomata?"
  ],
  "options": [
    [
      "用昨夜暫存的外來碳，白天仍需光供能",
      "It uses external carbon stored overnight, with light supplying daytime energy"
    ],
    [
      "完全不用碳或光，水自己變成糖",
      "No carbon or light needed; water turns into sugar"
    ]
  ],
  "answer": 0,
  "reason": [
    "夜間收進的CO₂暫存於酸中，白天釋放再固定。這裡只追外來碳，沒有把酸原有三碳骨架算成新收碳；光、儲酸與回收仍有代謝成本。",
    "Captured nocturnal CO₂ is stored in acid and released for refixation by day. We track external carbon, not the recycled three-carbon skeleton as new uptake. Light, storage and recycling still have metabolic costs."
  ],
  "formula": [
    "18:00開始24小時：0–12h夜，12–24h日；不是穩態星曆或真物種預測。\n自訂乾燥指數D=(1−RH/100)×2^((T−20)/10)，不是VPD實測公式。\n預定開孔失水率2D mL/h，閉孔仍漏失.05D；兩例同係數。\n各段有水時間=min(段長,剩水/失水率)；扣有限水庫，不足只算有水時段，0率且有水可繼續。\nCAM夜收外來碳1C份/h直到酸暫存容量；日酸外碳轉糖1C份/h直到空。\n普通C3日直接收與轉糖1C份/h；兩例同初糖碳6、酸外碳0，呼吸.1C份/h。\n6+新收碳=酸暫存外碳+糖碳+呼吸返回碳。酸三碳骨架回收省略，不把全蘋果酸4C視為新CO₂碳。\nCAM額外工作需求=.5×酸儲存外碳+1×轉糖外碳（自訂工作份）；不是ATP或J，未計完整能量庫。\n0水不收碳或轉酸碳，仍從既有糖碳呼吸；不預測存活。\n改條件從0重做；切植物／語言／模式保留同一時鐘。",
    "Start18:00 for24hours:0–12h night,12–24h day; no steady-state species prediction.\nCustom drying indexD=(1−RH/100)×2^((T−20)/10), not a measured VPD formula.\nScheduled open water-loss rate2D mL/h; closed leakage.05D; same coefficients for both examples.\nWet duration=min(segment duration,water/loss rate); finite store, count only wet part. Zero loss with positive water allows continued processing.\nCAM night uptake1external C unit/h until acid capacity; day conversion1C/h until acid empty.\nC3 day uptake/conversion1C/h; initial sugar6,acid externalC0; respiration.1C/h for both.\n6+uptake=acid externalC+sugarC+respiredC. Three-carbon skeleton recycling omitted, not all4malate carbons counted as new CO₂.\nCAM extra work=.5×stored externalC+1×convertedC, custom work units, not ATP/J or a complete energy budget.\nZero water stops uptake/conversion; stored sugar still supports respiration, no survival prediction.\nCondition changes restart; plant/language/mode preserve the shared clock."
  ],
  "limit": [
    "典型夜開／日閉CAM與日開C3的教具，非巨人柱或任何真物種。真CAM有晨暮開孔、可塑性與內部碳回收；此處省略。日夜溫濕只改自訂乾燥指數，不模擬溫度代謝曲線；失水係數、碳速率、初糖、水庫與酸容量皆假想。閉孔仍有漏失；酸滿停止收碳但仍按簡化排程開孔，未做氣孔回饋。有限水庫0後停止新碳與轉糖，仍有既有糖呼吸，不推死亡或存活時間。只追外來碳，酸三碳骨架回收省略，不能將整個蘋果酸4C當新收碳；沒有化學水／氧或能量全帳。額外能量需求用自訂工作份，供能假設足夠，0額外工作的C3不代表光合免費。假想18:00初酸0、初糖6是一次實驗起點，非週期穩態；24h完成不進下一夜。所有體積與圖框是教具規模，不是真巨人柱儲水；EP235／168單集metadata待核。",
    "Teaching strong CAM night-open/day-closed versus daytime C3, no saguaro/species prediction. Real CAM has dawn/dusk opening, plasticity and internal recycling, omitted here. Temperature/humidity change a custom drying index, no metabolic temperature curve; water-loss coefficients,carbon rates,initial sugar/water and acid capacity hypothetical. Closed leakage persists; full acid stops uptake but simplified opening schedule remains, no feedback. Zero store stops new carbon/conversion while stored sugar respiration remains, no death/survival prediction. External carbon only; recycled three-carbon skeleton omitted, not all4malate carbons counted as new uptake. No complete chemical water/oxygen/energy budget. Extra demand in custom work units with adequate supply assumed; C3 zero extra does not mean free photosynthesis. Initial18:00 acid0/sugar6 is an experiment start, not periodic steady state;24h stops before next night. Volumes/frames teaching scale, no saguaro capacity. EP235/168 metadata unverified."
  ]
};
