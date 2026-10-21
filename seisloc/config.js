window.CONFIG={
  "id": "J01",
  "path": "seisloc",
  "status": "complete",
  "topic": "earth",
  "icon": "📍",
  "title": [
    "地震波到站時間定位",
    "Locate a source with P and S arrivals"
  ],
  "question": [
    "同一站P先到、S後到，這段時間差能告訴你什麼？",
    "At one station P arrives before S. What does the time gap tell you?"
  ],
  "defaults": {
    "source": {
      "x": 55,
      "y": 50
    },
    "stations": [
      {
        "x": 15,
        "y": 15
      },
      {
        "x": 85,
        "y": 20
      },
      {
        "x": 25,
        "y": 85
      }
    ],
    "vp": 6,
    "vs": 3.5,
    "error": 0,
    "radii": [
      25,
      25,
      25
    ]
  },
  "extras": [
    "seisloc-model.js",
    "seisloc.css",
    "seisloc.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "date": "2026-10-14",
  "description": [
    "移動二維震源與三個測站，觀察P／S波到站差，拖距離圓半徑找交會；加入讀取誤差，查看可能區域與共線雙解。",
    "Move a 2D source and three stations, track P/S arrival gaps and adjust distance-circle radii. Add reading error to explore compatible regions and ambiguous collinear layouts."
  ],
  "keywords": "地震波,P波,S波,到站時間,定位,距離圓,測站,量測誤差,交會,earthquake,P wave,S wave,arrival time,trilateration,seismic station,measurement error,intersection",
  "sources": [
    [
      "https://www.usgs.gov/programs/earthquake-hazards/science-earthquakes",
      "USGS：地震科學與到站差定位",
      "USGS: earthquake science and arrival-gap location"
    ]
  ],
  "podcast": {
    "ep": "EP.129",
    "title": "地底偵探隊：P波與S波的悄悄話",
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277",
    "verified": false
  },
  "mission": [
    "只靠一個測站的P／S時間差，能知道震源方向嗎？",
    "Can one station’s P/S gap determine the source direction?"
  ],
  "options": [
    [
      "只能知道距離",
      "Only the distance"
    ],
    [
      "可知道唯一方向",
      "One unique direction"
    ]
  ],
  "answer": 0,
  "reason": [
    "同一距離上的點會有相同時間差，所以一站給一個圓。多站限制可縮小交會，但站點重疊、共線或誤差可能留下多解。",
    "Points at the same distance have the same gap, so one station gives a circle. More stations narrow the intersection, but coincident or collinear stations and errors can leave ambiguity."
  ],
  "limit": [
    "二維100×100km、均勻等向介質，震源與三站在同一平面，深度為0；圖是教學平面，不是真台灣地圖、三維震源定位、即時地震預警或安全訊息。固定教學速度P6、S3.5km/s，非所有地層的量測值，忽略分層、折射、曲面、有限頻率、路徑差與震源機制。直線距離d，tP=d/vP、tS=d/vS，d>0時P先S後；同位置d=0時同時0s。原點時間已知為0，只提供演示；用S−P差求距離不需要已知原點時間。讀取差Δt讀=max(0,Δt真+e_i ε)，固定偏差係數(-0.6,+0.4,-0.2)，ε=0–1s，是自訂有界時間差讀取誤差，不是隨機分布、誤差標準差或個別P／S拾取完整模型，改位置保留同一組偏差。實際P／S模型到站時間與帶偏差讀取差分欄，偏差不改變傳播速度／波圈或模型P／S先後。距離估計r=Δt讀/(1/vS−1/vP)，容許半徑差ε/(1/vS−1/vP)，內圈max(0,r−差)、外圈r+差。圓心必須在測站；拖圓是改半徑，不能把圓心拖離測站後稱定位。孩子手動圈半徑或按「依時間差畫圓」套用估計；移震源、測站或誤差不默默重設半徑，須明確重畫。位置5km步長、手機原生滑桿，桌機可拖圖上所選點及半徑把手；圓把手可超出地圖，但不得攔手機原生捲頁。無誤差時兩兩圓解析交點再檢查第三圓與地圖界線，不硬定唯一點；共線可兩點、同站同圓可非唯一、無交會明示。ε>0時用1km網格中心檢查三個環帶，共同符合的格子是約略可能區，非精確輪廓、統計信賴區或成功率；沒有符合格心不能斷言連續空間一定無解。只在零誤差顯示解析交點；有誤差一律不畫單點最佳解。波圈是各向到達前緣，線條／顏色非地層振幅或震度，圖外範圍裁切而不改比例。觀察50秒，5倍播放，前進5秒；全部站S已到不等於停止傳播。選點、語言／模式、揭開／藏震源、重按接法不重設位置、圈或時間；改位置會重開波鐘，誤差只改讀取。三站共線與重設是明示示範。EP129／c2官方metadata待核。",
    "A uniform isotropic 100×100 km 2D plane, with source and stations at zero depth. It is a teaching map, not Taiwan geography, 3D hypocenter location, live warning or safety information. Fixed illustrative P=6 and S=3.5 km/s are not measured values for every layer. Layering, refraction, curvature, finite frequency and source mechanisms are omitted. Straight-line d gives tP=d/vP and tS=d/vS; P precedes S for d>0, while both arrive at 0 s when colocated. Origin time is known as zero for demonstration; the S−P gap does not require it. Read gap=max(0,true gap+e_i ε), with fixed coefficients (−0.6,+0.4,−0.2) and ε=0–1 s. This is custom bounded gap-reading error, not a random distribution, standard deviation or full P/S pick model. Moving points preserves the bias pattern. Model P/S arrivals and the biased gap are separate columns; bias does not change wave speeds or fronts. Estimated r=read gap/(1/vS−1/vP), with radial tolerance ε/(1/vS−1/vP). Inner radius is max(0,r−tolerance), outer r+tolerance. Circles stay centered at stations; dragging a circle changes its radius. Radius settings are manual until the explicit gap-to-circles action. Source/station/error edits do not silently refit radii. Coordinates step by 5 km. Mobile sliders scroll natively; desktop supports selected-point and radius-handle drag. The handle can lie beyond the map, without blocking mobile scrolling. At zero error, analytic pair intersections are checked against all circles and map bounds, with no forced unique point. Collinear layouts can yield two points, coincident circles can be non-unique, and no intersection is reported. With error, 1 km cell centers test all three annuli; painted cells approximate compatibility, not an exact contour, statistical confidence region or success probability. No matching centers do not prove no continuous solution. No single best point is shown with error. Wave circles represent arrivals, not vibration amplitudes or shaking intensity; out-of-map parts clip without changing scale. Observe 50 s at 5× playback, stepping 5 s. All station S arrivals do not stop propagation. Selection, language, mode and reveal preserve settings/time. Position edits restart only the wave clock; error edits only change readings. Collinear example and Reset explicitly apply presets. Official EP129/c2 metadata await verification."
  ],
  "formula": [
    "d=√[(x源−x站)²+(y源−y站)²]\ntP=d/6，tS=d/3.5（km與s）\nΔt真=tS−tP=d(1/3.5−1/6)\nΔt讀=max(0,Δt真+e_i ε)\nr=Δt讀/(1/3.5−1/6)\n半徑容許差=ε/(1/3.5−1/6)\n檢查點：所有站 |點到站距離−圈半徑|≤容許差\n無誤差求解析交點；有誤差以1km格心近似區域",
    "d=√[(xsource−xstation)²+(ysource−ystation)²]\ntP=d/6; tS=d/3.5 (km and s)\nTrue gap=d(1/3.5−1/6)\nRead gap=max(0,true gap+e_i ε)\nr=read gap/(1/3.5−1/6)\nRadial tolerance=ε/(1/3.5−1/6)\nCompatibility: all |distance to station−circle r|≤tolerance\nZero error: analytic intersections; error: 1 km center-sampled region"
  ]
};
