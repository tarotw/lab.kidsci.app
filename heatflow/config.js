window.CONFIG={
  "id": "J07",
  "path": "heatflow",
  "status": "complete",
  "topic": "earth",
  "icon": "🌊",
  "title": [
    "洋流帶著熱量走",
    "Ocean currents carry heat"
  ],
  "question": [
    "暖水換了位置，熱量消失了嗎？",
    "When warm water moves, does its heat disappear?"
  ],
  "date": "2026-10-14",
  "defaults": {
    "direction": "E",
    "speed": 0.8,
    "mixing": 500,
    "power": 80,
    "source": false,
    "open": false,
    "heatX": 2,
    "heatY": 3
  },
  "extras": [
    "heatflow-model.js",
    "heatflow.css",
    "heatflow.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "description": [
    "在假想水格網調流向、流速與混合，放暖水並追蹤比10°C多出的熱量、人工加熱與邊界流出。",
    "Change flow direction, speed and mixing in a hypothetical water grid; add warm water and track excess heat above 10°C, artificial heating and boundary outflow."
  ],
  "keywords": "洋流,熱量,溫度,平流,混合,擴散,能量守恆,邊界收支,海洋, ocean currents,heat,temperature,advection,mixing,diffusion,energy conservation,boundary budget,ocean",
  "sources": [
    [
      "https://oceanservice.noaa.gov/facts/current.html",
      "NOAA：什麼是洋流？",
      "NOAA: What is a current?"
    ],
    [
      "https://oceanexplorer.noaa.gov/ocean-fact/currents/",
      "NOAA：洋流搬運熱量",
      "NOAA: currents transport heat"
    ],
    [
      "https://www.gfdl.noaa.gov/ocean-and-ice-processes/",
      "NOAA GFDL：海洋循環與混合",
      "NOAA GFDL: circulation and mixing"
    ],
    [
      "https://podcasts.apple.com/tw/podcast/%E5%85%AC%E9%96%8B-%E7%86%B1%E8%83%BD%E5%A4%A7%E5%86%92%E9%9A%AA-%E7%86%B1%E8%88%87%E6%BA%AB%E5%BA%A6%E7%9A%84%E7%A5%9E%E7%A5%95%E5%B7%AE%E5%88%A5-ep-88/id1812447277?i=1000778994178",
      "Apple Podcasts：延伸EP88官方單集資料（非模型資料）",
      "Apple Podcasts: related EP88 details (not model data)"
    ]
  ],
  "podcast": {
    "ep": "EP.147",
    "title": "海洋的律動：潮汐、洋流與氣候的連結",
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277",
    "verified": false
  },
  "mission": [
    "沒有加熱、沒有再放暖水時，混合會創造更多熱量嗎？",
    "With heating off and no added warm water, can mixing create extra heat?"
  ],
  "options": [
    [
      "不會，只在格子之間分配",
      "No, it redistributes heat"
    ],
    [
      "會，每格都會一直升溫",
      "Yes, every cell keeps warming"
    ]
  ],
  "answer": 0,
  "reason": [
    "混合把熱量從較暖格移向較冷格。環接邊界總額外熱量不變；開放邊界會帶走額外熱量。人工加熱和手動暖水另列輸入帳。",
    "Mixing moves heat from warmer to cooler cells. Wrapped boundaries conserve total excess heat; open boundaries can carry it away. Artificial heating and warm pulses are separate inputs."
  ],
  "formula": [
    "96格，每格1km×1km×10m；自訂ρ1000kg/m³、c4000J/(kg·K)\n每格熱容量40TJ/K，E=40(T−10°C)TJ；TJ=10¹²J\n初始3×3格20°C，共3600TJ額外熱量\n每步Δt≤60s；平流C=uΔt/1000，混合R=κΔt/1000000\n原格E×C送下游；兩鄰格交換R(Ei−Ej)，每步先用舊值\nC+4R≤1，旋鈕最大值時0.60；大步分割成1模型分鐘\n人工P GW加熱：Q=P×0.001×Δt TJ，平均給選取9格\n放一次暖水每選取格+10°C，另帳+3600TJ\n環接：出一側回另一側；開放：下游流出、上游10°C補水；邊界無混合熱交換\nΣE=初始＋人工加熱＋手動暖水−流出；不是絕對內能",
    "96 cells, each 1 km×1 km×10 m; custom density 1000 kg/m³ and heat capacity 4000 J/(kg·K)\nCell thermal capacity 40 TJ/K; E=40(T−10°C) TJ; TJ=10¹² J\nInitial 3×3 patch at 20°C: 3600 TJ excess\nStep Δt≤60 s; advection C=uΔt/1000, mixing R=κΔt/1000000\nSend old E×C downstream; exchange R(Ei−Ej) between neighbors using old values\nC+4R≤1; max controls give 0.60; large steps split into one model minute\nArtificial P GW adds Q=P×0.001×Δt TJ, divided among nine selected cells\nA warm pulse adds 10°C to each selected cell, counted as 3600 TJ input\nWrapped: connect opposite edges; open: downstream export and 10°C upstream replacement; no boundary mixing exchange\nΣE=initial+heater+pulses−export; not absolute internal energy"
  ],
  "limit": [
    "假想12×8水格網，非真海域、全球氣候或氣溫預測。每格固定等水量，流速均勻，不計密度改變、海面風或三維水動力。10°C為任選參考，零額外熱量不代表水沒有內能。ρ1000與比熱4000為圓整教學值，非實測海水。混合係數為自訂有效格間交換，不是分子導熱率。上風離散自身有數值擴散：流速不為0時即使混合旋鈕0也會散開，不能歸因真海洋湍流。流速0且混合0、無加熱時不變。環接是假想相對邊連接，非封閉海岸；開放上游補10°C水、下游帶熱流出，邊界混合隔熱。人工熱源自訂GW、不是太陽輻射資料。手動放暖水是額外熱輸入而非只搬既有水；選位置本身不加熱。初始與重開各有3600TJ，改設定保留既有時間與熱帳。固定10–30°C色尺，超過30°C飽和但文字仍列實值；不是海洋地圖。1模型分鐘穩定步長、30分鐘逐步，播放20模型分鐘/秒、到6模型小時結束。對照兩個新3×3起點到6h，僅改混合0/目前，不推算已改設定歷史。主題EP147 metadata待核，僅節目首頁／Logo；延伸EP88官方集名／Firstory單集網址／10分40秒按本日既有實測證據同步；本頁封面與音訊尚待驗。 溫度是固定熱容量下的教具讀值，忽略相變、蒸發及熱物性隨溫度改變；反覆加暖水是新增熱量示意，不是真添水質量或沸騰模型。",
    "A hypothetical 12×8 water grid, not a real region, global climate model or forecast. Equal fixed water masses, uniform flow; no density dynamics, winds or 3D hydrodynamics. The arbitrary 10°C reference means zero excess is not zero internal energy. Rounded density 1000 and specific heat 4000 are teaching assumptions, not measured seawater. Mixing is custom effective cell exchange, not molecular conductivity. Upwind discretization has numerical diffusion: nonzero flow can spread heat even at mixing zero; this is not proof of ocean turbulence. Zero flow/mixing/heating leaves the grid unchanged. Wrapped opposite edges are not sealed coastlines. Open boundaries replace upstream water at 10°C and export downstream heat; mixing is insulated there. Artificial GW heating is not solar data. A warm pulse adds heat rather than only moving existing water; selecting a position adds none. Fresh starts contain 3600 TJ; parameter edits preserve time and heat ledgers. Fixed 10–30°C colors saturate above 30°C but readings remain actual. One-minute stable steps, 30-minute manual steps, playback 20 model minutes/second to 6 hours. Comparison uses two fresh equal patches for 6 hours, changing only mixing zero/current, not edited-history prediction. Primary EP147 metadata unverified, with showhomepage/Logo only. Related EP88 title/Firstory link/10 min 40 sec synchronized from today’s existing official-page evidence; this page’s artwork and actual audio remain unchecked. Temperatures are lesson values at constant heat capacity; phase changes, evaporation and changing thermal properties are omitted. Repeated warm pulses demonstrate added energy, not added water mass or a boiling model."
  ],
  "relatedPodcast": {
    "title": "〈熱能大冒險：熱與溫度的神祕差別｜EP.88〉",
    "url": "https://open.firstory.fm/story/cmryokos806oc01yxfley8y1l",
    "episodeId": "1000778994178",
    "urlVerified": true,
    "artworkVerified": false,
    "metadataChecked": "2026-10-14",
    "durationDisplayMinutes": 11,
    "ep": "EP.88",
    "durationSeconds": 640,
    "durationIso": "PT10M40S",
    "durationLabel": [
      "10 分 40 秒",
      "10 min 40 sec"
    ],
    "evidenceBasis": "native-review-heatpath-checkpoint-20261014.md official Firstory title/time; artwork not integrated on this page"
  }
};
