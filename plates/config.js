window.CONFIG={
  "id": "J02",
  "path": "plates",
  "status": "complete",
  "topic": "earth",
  "icon": "🌋",
  "title": [
    "板塊邊界的地形工廠",
    "Plate boundary terrain factory"
  ],
  "question": [
    "拉開、推近、擦肩：哪種邊界會形成山脈、裂谷或海溝？",
    "Pull apart, push together, slide past: which boundaries form mountains, rifts or trenches?"
  ],
  "defaults": {
    "boundary": "converge",
    "left": "ocean",
    "right": "continent",
    "dense": "left",
    "vl": 3,
    "vr": 2
  },
  "extras": [
    "plates-model.js",
    "plates.css",
    "plates.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "date": "2026-10-14",
  "description": [
    "改兩側板塊速度、海洋／大陸材料與海洋相對密度，對照三種邊界、地形與可能地震帶。用百萬年時計核對累計相對移動距離。",
    "Change plate speeds, oceanic/continental material and relative oceanic density. Compare three boundary types, terrain and possible earthquake zones with a million-year displacement ledger."
  ],
  "keywords": "板塊,張裂,聚合,錯動,隱沒,海溝,中洋脊,大陸碰撞,裂谷,地震,plate tectonics,divergent boundary,convergent boundary,transform fault,subduction,trench,ridge,continental collision,rift,earthquake",
  "sources": [
    [
      "https://home.nps.gov/para/learn/nature/plate-tectonics.htm",
      "NPS：板塊與三類邊界",
      "NPS: plates and three boundary types"
    ],
    [
      "https://home.nps.gov/subjects/geology/plate-tectonics-collisional-mountain-ranges.htm",
      "NPS：大陸碰撞山脈",
      "NPS: collisional mountain ranges"
    ],
    [
      "https://pubs.usgs.gov/gip/earthq1/where.html",
      "USGS：地震位置（搜尋摘要；原頁讀取403）",
      "USGS: quake locations (search excerpt; page fetch 403)"
    ]
  ],
  "podcast": {
    "ep": "EP.128",
    "title": "地球大拼圖：板塊互進、告別與擦肩而過",
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277",
    "verified": false
  },
  "mission": [
    "每種板塊邊界都一定有火山嗎？",
    "Does every plate boundary necessarily have volcanoes?"
  ],
  "options": [
    [
      "不一定",
      "No"
    ],
    [
      "每種都有",
      "Yes, every type"
    ]
  ],
  "answer": 0,
  "reason": [
    "錯動主要是沿斷層水平擦過；大陸碰撞主要擠皺、增厚。這個簡化圖不在這兩種情境加火山，也不能拿速度算火山爆發時刻。",
    "Transform motion is horizontal fault slip; continental collision folds and thickens crust. This simplified diagram adds no volcano to those cases, and speed does not predict eruption times."
  ],
  "formula": [
    "每側距離增量 km = 10 × 速度 cm/年 × 時間增量 百萬年\n相對移動距離 = 左距離＋右距離（相向／反向安排）\n張裂：左向左、右向右；聚合：左向右、右向左\n錯動俯視：左向上、右向下\n1 cm/年 × 100萬年 = 10 km\n圖像不按距離比例，也不推算山高或地震次數。",
    "Each distance increment km = 10 × speed cm/year × time increment Myr\nRelative displacement = left distance + right distance (opposing directions)\nDivergence: left moves left, right moves right\nConvergence: left moves right, right moves left\nTransform plan view: left moves up, right moves down\n1 cm/year × 1 million years = 10 km\nDiagram is not to scale; no mountain height or quake count is predicted."
  ],
  "limit": [
    "板塊包括地殼與上部剛性地函；海洋／大陸選項表示邊界附近的材料，不代表整塊板塊只有一類。速度0–10cm/年自訂，兩側反向、無共同平移；時計0–2百萬年，播放每秒0.1百萬年。累計距離按每次速度分段積分；速度改動保留過去帳，換邊界／材料／兩海洋密度假設會明示重開，重選現況不重開。地形是已形成邊界的靜態機制示意，移動標記只呈現方向，無物理比例或岩石力學，不能由時間或距離推山高、海溝深度、火山／地震時刻。兩海洋密度比較是自訂相對浮力情境，不是真密度或隱沒方向預測；相同假設時不任選隱沒側。海洋對大陸預設海洋隱沒；兩大陸顯示碰撞增厚，不畫典型隱沒火山弧。張裂兩海洋示意新地殼／中洋脊，兩大陸示意裂谷；混合張裂不指定唯一地形。錯動改為俯視，無地殼生成或消耗。橘點是可能地震帶的概念位置，不是事件次數、頻率或已觀測震源；零速度不代表既有邊界絕無地震。隱沒區流體促進上方地函部分熔融，不是整塊板塊立即融化。EP128／126 metadata未核，僅節目首頁與Logo。",
    "Plates include crust and rigid upper mantle; material choices describe the local boundary, not an entire plate. Custom speeds 0–10 cm/year oppose each other, omitting common translation. Observe 0–2 Myr at 0.1 Myr per playback second. Piecewise speed integration preserves past distances; changing boundary, material or oceanic density assumption explicitly restarts, while reselecting the current choice preserves state. Terrain is a static schematic of an established boundary. Moving markers only show direction, without physical scale or rock mechanics. Time and distance do not predict height, trench depth, eruptions or earthquake timing. Oceanic relative buoyancy is a custom scenario, not measured density or a prediction of real subduction polarity. Equal oceanic assumptions leave the subducting side undetermined. Ocean/continent defaults to oceanic subduction; two continents show collision and thickening without a typical subduction arc. Ocean/ocean divergence shows a ridge/new crust; continent/continent a rift; mixed divergence leaves terrain unspecified. Transform uses plan view without crust creation or consumption. Orange dots mark conceptual potential earthquake zones, not events, rates or measured hypocenters. Zero speed does not prove an existing boundary has no earthquakes. Subduction fluids promote partial melting above the slab, rather than instantly melting the whole slab. EP128/126 metadata await verification; only show homepage and Logo."
  ]
};
