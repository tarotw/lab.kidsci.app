window.CONFIG={
  "id": "J08",
  "path": "ensolab",
  "status": "complete",
  "topic": "earth",
  "icon": "🌏",
  "date": "2026-10-14",
  "title": [
    "聖嬰的海洋蹺蹺板",
    "El Niño: an ocean seesaw"
  ],
  "question": [
    "信風變弱，東邊的冷水還能把海面降溫嗎？",
    "When trade winds weaken, can eastern cold water still cool the surface?"
  ],
  "defaults": {
    "forcing": 1,
    "bias": 0,
    "feedback": true
  },
  "extras": [
    "ensolab-model.js",
    "ensolab.css",
    "ensolab.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "description": [
    "調示例信風和溫躍層傾斜，觀察東西海溫與上升冷卻的耦合回饋。自訂鬆弛模型，不是ENSO預測。",
    "Adjust illustrative trade winds and thermocline tilt to explore coupled western/eastern surface temperatures and upwelling cooling. A custom relaxation lesson, not an ENSO forecast."
  ],
  "keywords": "聖嬰,反聖嬰,信風,溫躍層,上升流,海溫,正回饋,海氣耦合,El Niño,La Niña,ENSO,trade winds,thermocline,upwelling,sea surface temperature,positive feedback,ocean atmosphere coupling",
  "sources": [
    [
      "https://oceanservice.noaa.gov/facts/ninonina.html",
      "NOAA：聖嬰與反聖嬰的風與海水",
      "NOAA: El Niño / La Niña winds and water"
    ],
    [
      "https://pmel.noaa.gov/elnino/what-is-el-nino/",
      "NOAA PMEL：溫躍層與東側冷卻",
      "NOAA PMEL: thermocline and eastern cooling"
    ],
    [
      "https://www.pmel.noaa.gov/public/pmel/publications-search/search_abstract.php?fmContributionNum=3947",
      "PMEL研究摘要：海氣回饋與阻尼",
      "PMEL research abstract: coupled feedback and damping"
    ]
  ],
  "podcast": {
    "ep": "c17",
    "title": "地球的氣候大怒神！聖嬰與反聖嬰現象的科學奧秘",
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277",
    "verified": false
  },
  "mission": [
    "在這個示例裡，風變弱、東側溫躍層加深後，冷卻通常怎麼變？",
    "In this lesson, when winds weaken and the eastern thermocline deepens, what happens to cooling?"
  ],
  "options": [
    [
      "冷卻減弱，東側海面較暖",
      "Less cooling; eastern surface warms"
    ],
    [
      "冷卻加強，東側更冷",
      "More cooling; eastern surface cools"
    ]
  ],
  "answer": 0,
  "reason": [
    "較深的溫躍層讓冷水較難影響表面，較弱風也減少這頁的上升冷卻指標。實際ENSO還有波動、季節與更多耦合過程，這頁不預報事件。",
    "A deeper thermocline makes cold subsurface water less effective at cooling the surface; weaker wind also reduces this lesson’s cooling index. Real ENSO includes waves, seasons and other processes; this page does not predict events."
  ],
  "formula": [
    "所有係數自訂示例；t為模型月，非實際等待時間\n風u 0..2，傾斜z −.5..2.5，西溫Tw 27.6..28.4°C，東溫Te 18..28°C\n正常起點u=1,z=1,Tw=28,Te=24；不是觀測基準\n回饋項f=開時 .3×((Tw−Te)−4)/4，關時0\nu目標=夾限(外加信風+f,0,2)；du/dt=(目標−u)/1月\nz目標=夾限(u+額外偏移,−.5,2.5)；dz/dt=(目標−z)/2月\n東深He=120−40z m，西深Hw=120+40z m\n上升冷卻指標q=u/(1+He/100)，無量綱、非水速\nTw目標=27.6+.4u；Te目標=夾限(28−7.2q,18,28)°C\n兩表溫以2模型月鬆弛到目標，不是封閉熱量守恆\n顯式步≤1/120模型月，每步有界凸組合；大步切小步\n對照相同正常起點24模型月，只改外加風0.2/1",
    "All coefficients are custom; t is model months, not a real waiting time\nWind u 0..2; tilt z −.5..2.5; west Tw 27.6..28.4°C; east Te 18..28°C\nNeutral lesson start u=1,z=1,Tw=28,Te=24; not observed climatology\nFeedback f=.3×((Tw−Te)−4)/4 when on; zero when off\nu target=clamp(external trade wind+f,0,2); du/dt=(target−u)/1 month\nz target=clamp(u+extra bias,−.5,2.5); dz/dt=(target−z)/2 months\nEast depth He=120−40z m; west Hw=120+40z m\nCooling index q=u/(1+He/100), dimensionless, not water velocity\nTw target=27.6+.4u; Te target=clamp(28−7.2q,18,28)°C\nBoth temperatures relax to targets over 2 model months; not a closed heat budget\nExplicit steps≤1/120 model month are bounded convex combinations; large steps split\nComparison: equal neutral starts for 24 model months, external wind0.2/1 only"
  ],
  "limit": [
    "風／海水／大氣四狀態的教學鬆弛示例，不是ENSO數值預報或實際海溫觀測、沒有即時資料。不推固定各地降雨災害、不給下一事件日期／週期。初始溫度與深度自訂，東海溫相對24°C的偏差只是教具基準，非Niño3.4觀測異常／官方事件判定。風相對強度0..2不是m/s；冷卻指標不是上升流m/s。額外傾斜偏移為人為干預，不是另計真實波動；對比可正負傾斜，示意剖面不按水平／垂直真比例。深度20..220m與溫度18..28.4°C均為自訂模型範圍，非所有真事件的界限。風、傾斜、兩溫度各自鬆弛；回饋項由溫差偏離4°C影響風目標，開關不立即重設狀態。隱含背景熱交換、未計守恆熱帳／水量、對流雲／雨、季節、波傳與赤道球面、非自然週期振盪模式。播放2模型月/秒、到24模型月，非真ENSO發展速度。參數編輯保留過去曲線；語言／模式保存；只有新樣本／重設／結束重播重開正常起點。兩新起點比較弱0.2／正常1，其他設定相同，不推當前改過歷史。c17／EP147單集metadata待核，僅節目首頁與Logo。",
    "A four-state wind/ocean relaxation lesson, not an ENSO forecast or measured SST; no live data. No fixed regional rainfall/disaster outcome, next-event date or cycle. Initial temperatures/depths are custom. Eastern deviation from 24°C is a lesson reference, not observed Niño3.4 anomalies or official event classification. Relative wind0..2 is not m/s; cooling index is not upwelling velocity. Extra tilt bias is a manual intervention, not resolved real waves. Cross-section is schematic, not true horizontal/vertical scale. Depth20..220m and temperature18..28.4°C are custom bounds, not limits on all real events. Wind, tilt and both temperatures relax; temperature contrast relative to4°C feeds the wind target. Feedback switching keeps current state. Background heat exchange is implicit, without a conserved heat/water ledger, clouds/rain, seasons, waves or spherical dynamics; this is not a natural oscillation model. Playback2 model months/second to24 months, not real ENSO timing. Parameter edits retain old curves; language/mode preserve state. New sample/reset/end replay explicitly return to neutral starts. Comparison uses weak0.2/normal1 new starts with otherwise equal settings, not an edited-history forecast. c17/EP147 metadata await verification; homepage/Logo only."
  ]
};
