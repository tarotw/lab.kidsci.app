window.CONFIG={
  "id": "J04",
  "path": "waterlog",
  "status": "complete",
  "topic": "earth",
  "icon": "💧",
  "title": [
    "一滴水的循環賬本",
    "A water-cycle ledger"
  ],
  "question": [
    "水離開海洋後，一定只走同一條回家的路嗎？",
    "After leaving the ocean, must water always take the same route back?"
  ],
  "defaults": {
    "sun": 50,
    "plants": 50,
    "rain": 50,
    "infiltration": 50,
    "evap": true,
    "boundary": false
  },
  "extras": [
    "waterlog-model.js",
    "waterlog.css",
    "waterlog.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "date": "2026-10-14",
  "description": [
    "調日照、植被、降雨和滲透，以守恆流帶觀察海洋、水蒸氣、雲水、地表、土壤與河流的水量；核對外來和外送水。",
    "Adjust sunlight, vegetation, rain and infiltration. Follow conservative flows through ocean, vapor, cloud water, land surface, soil and river, including boundary inputs and outputs."
  ],
  "keywords": "水循環,水蒸氣,雲水,蒸發,蒸騰,凝結,降雨,滲透,地表逕流,水量守恆,桑基圖,water cycle,water vapor,cloud water,evaporation,transpiration,condensation,precipitation,infiltration,runoff,water balance,Sankey diagram",
  "sources": [
    [
      "https://www.usgs.gov/glossary/glossary-water-cycle-terms",
      "USGS：水循環庫存與流量定義",
      "USGS: water-cycle pools and fluxes"
    ],
    [
      "https://water.usgs.gov/edu/watercycle-kids-int.html",
      "USGS：兒童水循環說明",
      "USGS: water cycle for children"
    ]
  ],
  "podcast": {
    "ep": "EP.138",
    "title": "水跑到哪裡去了？——永不止息的地球水循環大冒險！",
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277?i=1000732139358",
    "verified": false,
    "urlVerified": true,
    "metadataSource": "https://xn--5usa33m461dd8g.app/guide/138",
    "metadataChecked": "2026-10-14"
  },
  "mission": [
    "關掉直接蒸發後，已有水蒸氣還能凝成雲水嗎？",
    "With direct evaporation off, can existing vapor still condense into cloud water?"
  ],
  "options": [
    [
      "可以，來自已有蒸氣",
      "Yes, from existing vapor"
    ],
    [
      "所有雲水立刻消失",
      "All cloud water vanishes instantly"
    ]
  ],
  "answer": 0,
  "reason": [
    "蒸發是液態變氣態；凝結把已有水蒸氣變成液態雲水。關蒸發不會抹掉原有蒸氣／雲水，植物蒸騰或外來蒸氣也可能補入。",
    "Evaporation changes liquid to vapor; condensation turns existing vapor into liquid cloud water. Turning evaporation off does not erase vapor or cloud stocks, and transpiration or outside vapor can still supply them."
  ],
  "formula": [
    "每0.1模型日，同時用小步起點的庫存算需求\n海／河／地表直接蒸發需求 = (8／1／1.5)×日照比例 kg/模型日\n裸土蒸發 = 1.2×日照×(1−植被)，植物蒸騰=6×日照×植被\n凝結=.15×水蒸氣庫；總雨=.5×雨旋鈕比例×雲水庫\n雨落海35%、落地表65%（自訂份額）\n滲透需求=8×滲透比例，且不超過土壤空位／0.1日\n逕流=.15×地表水；土排水=.02×土壤水；入海=.1×河水\n每庫所有流出需求若超存量，按同一比例縮小\n開邊界：外來蒸氣2kg/日，河流外送需求3kg/日\n新庫量=舊庫量＋實際流入−實際流出\n六庫合計 = 起點1000kg＋累計外來−累計外送",
    "Each 0.1 model day uses starting stocks simultaneously\nOcean/river/surface direct evaporation demands=(8/1/1.5)×sun fraction kg/model day\nBare-soil evaporation=1.2×sun×(1−plants); transpiration=6×sun×plants\nCondensation=.15×vapor; rain=.5×rain factor×cloud stock\nRain: 35% ocean, 65% land surface (custom shares)\nInfiltration demand=8×factor, limited by free soil capacity / 0.1 day\nRunoff=.15×surface; drainage=.02×soil; discharge=.1×river\nAll requests from a pool scale together if they exceed its stock\nOpen boundary: outside vapor 2 kg/day; river export demand 3 kg/day\nNew stock=old stock + delivered inputs − delivered outputs\nSix-pool total=initial 1000 kg + accumulated imports − exports"
  ],
  "limit": [
    "假想區域初始1000kg，不是真全球水量比例或天氣／洪水預測。水量用kg；1kg液態水約1L，但蒸氣庫kg不是氣體體積。六庫為海洋、水蒸氣、液態雲水、地表積水、土壤水與河水；空氣水蒸氣不可見，雲含微小液滴／冰，本頁只液滴、不畫蒸發直接成雲。忽略冰雪、深地下水、鹽、截留、空間地形／熱能及氣象。所有係數、雨落海35%份額、土壤200kg上限是自訂；土壤排到河流是統合延遲示例，不是真含水層。日照0在本教具停直接蒸發及植物蒸騰，不能推成真夜晚絕無蒸發。植被只改蒸騰和裸土蒸發，不捏造根系或截雨。關直接蒸發不關植物蒸騰，也不清掉已有蒸氣／雲水；乾空氣示範明示套用蒸發關／植被0／邊界關／蒸氣與雲0起點，若再加植被，還須日照大於0且土壤有可供水才會供蒸氣。0.1日先算全部需求，以每庫原存量比例限流，土壤入流不超原空位；本步新水下步才再用，避免負庫量／憑空水。所有內部流都雙邊記帳；外來蒸氣和河流外送另帳，外送也受河庫限流。流帶寬只按目前下一0.1日可供率kg/模型日，比例尺可能變；不是累計量、真河寬或已移動水，暫停／30日結束仍可看供率。庫卡以固定1000kg尺畫存量，不是真形狀體積。0–30模型日，每播放秒2模型日，不是真天數；設定／語言／模式保留歷史，重開樣本／乾空氣示範／重播才歸零。對照另開同起點、同其他設定的新樣本30日，只改滲透0／100，不拿目前歷史當預測。EP138集名與單集連結按官方伴讀核對；時長與Podcast封面、EP169 metadata仍待核，配圖仍為節目Logo。",
    "A hypothetical region starts with 1000 kg, not global storage proportions or weather/flood predictions. Amounts use kg; 1 kg liquid water is about 1 L, but vapor kg is not gas volume. Six pools: ocean, vapor, liquid cloud water, surface water, soil moisture and river. Vapor is invisible; clouds contain droplets/ice, with only droplets modeled here. Evaporation does not directly create cloud water. Ice/snow, deep groundwater, salt, interception, terrain, heat and meteorology are omitted. All rates, the 35% ocean rain share and 200 kg soil capacity are custom. Soil-to-river drainage is a lumped delay, not an aquifer model. Zero sunlight stops modeled direct evaporation and transpiration, not all real nighttime evaporation. Plants affect only transpiration and bare-soil evaporation. Turning direct evaporation off does not disable transpiration or erase vapor/cloud stocks. Dry-air demonstration explicitly applies evaporation off, plants zero, boundary closed and zero vapor/cloud stocks; adding plants supplies vapor only with positive modeled sunlight and available soil water. Each 0.1-day step uses old stocks to request flows, scales all withdrawals from each pool together, and limits soil intake to its old free capacity. New water is usable next step. Internal transfers use double-entry bookkeeping; vapor imports and river exports are separate, and exports are stock-limited. Flow widths show next-step available rates kg/model day, with a changing legend, not cumulative amounts, real river widths or already moved water. Rates remain inspectable while paused or at the 30-day cap. Stock cards use a fixed 1000 kg scale, not physical volumes. Observe 0–30 model days at 2 model days/playback second; settings/language/mode preserve history. New sample, dry demonstration and replay explicitly reset. Comparison starts equal new samples for 30 days, changing only infiltration 0/100; it is not a forecast of the current history. EP138 title and episode link verified against the official companion guide; duration, podcast artwork and EP169 metadata await verification. The image remains the show Logo."
  ]
};
