window.CONFIG={
  "id": "J06",
  "path": "tracklab",
  "status": "complete",
  "topic": "earth",
  "icon": "🌀",
  "title": [
    "颱風路徑的幾股推力",
    "What steers a tropical cyclone?"
  ],
  "question": [
    "颱風自己在轉，它的中心就一定往同一方向走嗎？",
    "Does a spinning cyclone center always move in one fixed direction?"
  ],
  "defaults": {
    "east": 12,
    "north": 4,
    "strength": 20,
    "highX": 900,
    "hemisphere": 1,
    "beta": true,
    "spread": 20
  },
  "extras": [
    "tracklab-model.js",
    "tracklab.css",
    "tracklab.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "date": "2026-10-14",
  "description": [
    "調環境東西／南北風、示意高壓強度與位置，選北南半球，比較九個微差起點的中心路徑；觀察速度向量與集合範圍。",
    "Adjust environmental east/north flow and a schematic high-pressure circulation, choose a hemisphere and compare nine perturbed starting tracks, velocity vectors and ensemble spread."
  ],
  "keywords": "颱風,颶風,熱帶氣旋,路徑,引導氣流,高壓,β漂移,北半球,南半球,軌跡集合,不確定性,typhoon,hurricane,tropical cyclone,track,steering flow,high pressure,beta drift,hemisphere,trajectory ensemble,uncertainty",
  "sources": [
    [
      "https://www.aoml.noaa.gov/hrd/hrd_sub/motion.html",
      "NOAA AOML：環境風與颱風移動",
      "NOAA AOML: environmental flow and storm motion"
    ],
    [
      "https://www.aoml.noaa.gov/hrd/hrd_sub/models.html",
      "NOAA AOML：歷史BAM概念",
      "NOAA AOML: historical beta-and-advection concept"
    ],
    [
      "https://www.noaa.gov/education/resource-collections/weather-atmosphere/hurricanes",
      "NOAA：熱帶氣旋與半球旋向",
      "NOAA: tropical cyclones and hemispheric circulation"
    ],
    [
      "https://podcasts.apple.com/tw/podcast/ep-136-%E7%86%B1%E5%B8%B6%E5%B7%A8%E7%8D%B8%E9%A7%95%E5%88%B0-%E6%8E%A2%E7%A7%98%E9%A2%B6%E9%A2%A8-%E9%A2%B1%E9%A2%A8-%E7%9A%84%E7%A5%9E%E7%A5%95%E4%B9%8B%E7%9C%BC%E5%92%8C%E8%B6%85%E7%8B%82%E9%A2%A8%E6%9A%B4/id1812447277?i=1000731794215&uo=4",
      "Apple Podcasts：官方EP136單集資料（非模型資料）",
      "Apple Podcasts: official EP136 details (not model data)"
    ]
  ],
  "podcast": {
    "ep": "EP.136",
    "title": "〈EP.136｜熱帶巨獸駕到！🌪️ 探秘颶風（颱風）的神祕之眼和超狂風暴！〉",
    "url": "https://podcasts.apple.com/tw/podcast/ep-136-%E7%86%B1%E5%B8%B6%E5%B7%A8%E7%8D%B8%E9%A7%95%E5%88%B0-%E6%8E%A2%E7%A7%98%E9%A2%B6%E9%A2%A8-%E9%A2%B1%E9%A2%A8-%E7%9A%84%E7%A5%9E%E7%A5%95%E4%B9%8B%E7%9C%BC%E5%92%8C%E8%B6%85%E7%8B%82%E9%A2%A8%E6%9A%B4/id1812447277?i=1000731794215&uo=4",
    "verified": false,
    "episodeId": "1000731794215",
    "urlVerified": true,
    "artworkVerified": false,
    "metadataChecked": "2026-10-08",
    "durationDisplayMinutes": 23
  },
  "mission": [
    "只看颱風的自轉旋向，能決定中心往哪裡走嗎？",
    "Can cyclone spin alone determine where its center goes?"
  ],
  "options": [
    [
      "不能，要看周圍引導氣流",
      "No, inspect the steering flow"
    ],
    [
      "可以，逆時針一定往西",
      "Yes, counterclockwise always goes west"
    ]
  ],
  "answer": 0,
  "reason": [
    "中心路徑由周圍環境等因素共同影響；颱風繞中心的旋轉不是中心的平移方向。這頁的微差集合也不是正式預報機率。",
    "Surrounding flow and other factors influence center motion. Circulation around the center is distinct from its translation, and this arbitrary perturbation ensemble is not an official forecast probability."
  ],
  "formula": [
    "x東、y北，km；時間模型小時\n背景速度=(東旋鈕,北旋鈕) km/h\n高壓中心=(x旋鈕,700km)，尺度L=300km\ndx=x−高壓x，dy=y−700，w=半球符號×強度/L×exp(.5−(dx²+dy²)/(2L²))\n高壓速度=(w dy,−w dx)，北半球順時針、南半球反向\nβ開：(-2,2×半球符號)km/h，自訂漂移示例\n合成v=背景＋高壓＋β，以RK4 .1模型小時積分\n九起點=(200,200)+各軸0／±20km，或全部同起點\n同時刻集合外包與相鄰時刻外包畫帶，非機率\n對照同新起點0→48h，高壓強度0／目前值",
    "x east, y north in km; time in model hours\nBackground velocity=(east dial,north dial) km/h\nHigh center=(x dial,700 km), L=300 km\ndx=x−highX,dy=y−700; w=hemisphere×strength/L×exp(.5−(dx²+dy²)/(2L²))\nHigh circulation velocity=(w dy,−w dx): clockwise north, opposite south\nBeta on: (-2,2×hemisphere) km/h, custom drift example\nSum velocities and integrate with RK4 at .1 model hour\nNine starts=(200,200)+0/±20 km on each axis, or identical starts\nConvex envelopes at each time and between adjacent times form a band, not probability\nComparison: equal new starts for 48 h, high strength 0/current"
  ],
  "limit": [
    "假想平面速度場教具，不是真颱風預報／警報或城市風險圖，無即時資料。x東y北為局部km、非經緯度；0–48模型小時、播放每秒3模型小時，不對應真時程。三個相加的是速度向量，不是牛頓力／完整科氏力積分。環境風自訂均勻，高壓為平滑切向速度示例、尺度300km、最大速度＝強度旋鈕；不是壓力hPa、真高壓邊界／禁止進入區或勢障。北半球高壓順時針與颱風逆時針，南半球反向；半球切換不是在平面上跨赤道，自訂β漂移西2及向極2km/h，不是真BAM數值、漂移大小與強度／緯度不連動。颱風圖標旋轉只是方向符號，不把本體自旋加入中心速度。忽略垂直風、熱／濕／對流、海溫、球面、地形、強度及生成消亡。RK4固定.1h，同設定可重現；背景／高壓／半球／β改動保留先前軌跡與時間，新設定只用於後續，圖場箭頭為目前場、不是整段歷史同場。起點微差20/0切換明示新樣本；語言／模式保存。九起點為±20km方格、自訂，不是真觀測誤差分布；凸外包帶只涵蓋這些離散教具路徑，非所有可能、機率或官方預報錐，可能變窄。點／颱風符號非真大小；鏡頭自動包含路徑並顯示km尺，沒有邊界停住／暗改距離。對照兩組新起點48h僅改高壓0／目前強度，不拿當前被改過設定的歷史當預測。EP136官方單集連結、集名與頁面約23分鐘已核；精確秒數、封面與實際音訊待驗，使用節目Logo。延伸EP137 metadata待核。",
    "A hypothetical planar velocity-field lesson, not a real tropical-cyclone forecast, warning or city risk map; no live data. Local x east/y north use km, not latitude/longitude. Observe 0–48 model hours at 3 model hours/playback second, not real timing. Added terms are velocities, not Newtonian forces or full Coriolis integration. Background flow is uniform and custom. High pressure is a smooth tangential flow example with scale 300 km and peak speed equal to its dial, not hPa, a real pressure boundary or an impenetrable barrier. Northern high circulation is clockwise and cyclone circulation counterclockwise, opposite in the south. Hemisphere switching is not crossing the equator. Custom beta drift is 2 km/h west and 2 km/h poleward, not real BAM values and not coupled to intensity/latitude. Cyclone spin is a direction symbol and does not drive its center velocity. Vertical winds, convection, heat/moisture, ocean temperature, spherical geometry, terrain, intensity and genesis/decay are omitted. Fixed .1 h RK4 is reproducible. Flow/high/hemisphere/beta edits preserve old tracks and time, applying only to the future; arrows depict the current field, not the entire edited history. Switching start offsets 20/0 explicitly restarts; language/mode preserve state. Nine starts form an arbitrary ±20 km square, not an observed error distribution. Convex envelope bands cover only these discrete lesson paths, not all possibilities, probabilities or an official cone; spread can shrink. Symbols are not storm size. Camera auto-fits paths with km scales; paths do not freeze at picture edges. Comparison runs equal fresh starts for 48 h, changing only high strength zero/current, not forecasting edited history. Official EP136 link/title and about 23 displayed minutes verified; exact seconds, artwork and actual audio remain unchecked, with the show Logo retained. Related EP137 metadata are unverified."
  ]
};
