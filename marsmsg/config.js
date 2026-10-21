window.CONFIG={
  "id": "K05",
  "path": "marsmsg",
  "status": "complete",
  "topic": "space",
  "icon": "📡",
  "date": "2026-10-14",
  "title": [
    "給火星發訊息要多久？",
    "How long does a message to Mars take?"
  ],
  "question": [
    "先把火星移近，發訊息；再移遠，等回覆會差多少？",
    "Move Mars nearer and send a message; move it farther and compare the reply time."
  ],
  "defaults": {
    "earth": 0,
    "mars": 60,
    "delay": 60,
    "rate": 60
  },
  "extras": [
    "marsmsg-model.js",
    "marsmsg.css",
    "marsmsg.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "description": [
    "調整地球與火星在示意圓軌道的位置，以光速傳訊，分開觀察單程、處理等待與回覆來回時間。",
    "Adjust Earth and Mars on schematic circular orbits; send a light-speed signal and separate one-way, processing and round-trip time."
  ],
  "keywords": "火星,地球,光速,訊息,單程延遲,來回時間,天文單位,科學好好聽,Mars,Earth,speed of light,communication,one-way delay,round trip,astronomical unit",
  "sources": [
    [
      "https://www.bipm.org/en/si-base-units/metre",
      "BIPM：光速定義",
      "BIPM: exact speed of light"
    ],
    [
      "https://iauarchive.eso.org/public/themes/measuring/",
      "IAU：天文單位",
      "IAU: astronomical unit"
    ],
    [
      "https://science.nasa.gov/mars/mars-relay-network/",
      "NASA：火星訊息延遲",
      "NASA: Mars message delay"
    ],
    [
      "https://science.nasa.gov/sun/facts/",
      "NASA：太陽約70萬公里半徑",
      "NASA: Sun radius about700,000km"
    ]
  ],
  "podcast": {
    "ep": "EP.115",
    "title": "〈星空藏寶圖：從巨石陣到哈伯望遠鏡的天文奇幻旅程｜EP.115〉",
    "url": "https://open.firstory.fm/story/cmv3s8fzh00o901vsd8ny74tq",
    "verified": true,
    "urlVerified": true,
    "provider": "Firstory",
    "firstory": "https://open.firstory.fm/story/cmv3s8fzh00o901vsd8ny74tq",
    "durationSeconds": 1171,
    "durationIso": "PT19M31S",
    "durationLabel": [
      "19 分 31 秒",
      "19 min 31 sec"
    ],
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/CL_qGe9JIlC0AEBd8NO7v.jpg",
    "coverFile": "podcast/ep115.jpg",
    "coverAvailable": true,
    "artworkVerified": true,
    "artworkVisualChecked": true,
    "metadataChecked": "2026-10-14",
    "evidenceBasis": "Current official RSS and actual Firstory h1, 00:19:31 and cover pixels matched local official artwork; audio and Apple access untested."
  },
  "mission": [
    "火星處理多等60秒，回覆到地球多等多久？",
    "If Mars spends60 extra seconds processing, how much later is the reply?"
  ],
  "options": [
    [
      "多60秒，光的路程沒變",
      "60 seconds later; the light path is unchanged"
    ],
    [
      "多120秒，處理時間也算兩趟",
      "120 seconds later; processing happens twice"
    ]
  ],
  "answer": 0,
  "reason": [
    "去程與回程各走一次；處理只在火星等一次。來回＝2×單程＋處理。",
    "One outbound and one return journey; processing happens once on Mars. Round trip=2×one-way+processing."
  ],
  "formula": [
    "地球半徑1au，火星半徑1.5au（自訂教學圓軌道）\n距離d=√[(x火−x地)²+(y火−y地)²]\n1au=149597870.7km；c=299792.458km/s\n單程秒=d×au/c；來回秒=2×單程＋處理秒\n按發訊息起算；去程→火星處理一次→回程→地球收到\n行星在實驗中固定；不算傳輸資料量、排程、中繼、行星轉動或相對論修正\n最近線段到太陽中心距離≤700000km則遮擋，不發送\n幾何單程仍可計算，遮擋時不是可收到訊息的時間\n太陽半徑採NASA約值，圖為空心放大標記；中心小點才對應半徑\n不含日冕干擾，無遮擋不保證真通訊可用",
    "Earth radius1au, Mars1.5au: teaching circles\nd=Euclidean distance between planet positions\n1au=149597870.7km; c=299792.458km/s\nOne-way seconds=d×au/c; round trip=2×one-way+processing\nSend starts the clock: outbound→one Mars processing wait→return→Earth receives\nPlanets fixed during experiment; no data serialization, scheduling, relays, planet rotation or relativistic corrections\nA segment passing within700000km of the Sun centre is blocked; no send\nGeometric one-way time is still calculable, not a successful delivery time when blocked\nSolar radius is a NASA rounded value; hollow circle is an enlarged marker, central dot is physical size\nNo corona interference; no disk blockage does not guarantee real communication"
  ],
  "limit": [
    "1／1.5au自訂圓軌道、行星固定，是距離除光速教具，不是今日星曆或真實最短最長延遲。光／無線電在真空同速；動畫快60／240倍，秒數仍為模型真時間。改位置或處理會取消舊訊息，明示重新發送；換語言／模式／播放倍率保留。去回路程相同，處理只等一次。太陽阻擋以NASA約70萬km半徑線段判定，不把放大空心標記當實際大小。不含日冕、其他遮擋、排程、資料量、中繼或行星移動，所以無遮擋不保證真通訊。EP115官方集名、網址、19:31時長與封面已核對；實際音訊及Apple權限未測，s20仍待確認。",
    "Custom1/1.5au circles and fixed planets: distance/c teaching model, not current ephemeris or actual minimum/maximum delays. Light and radio have the same vacuum speed. Animation60/240×; displayed seconds are model physical time. Changing positions or processing cancels the old message with a resend notice; language/mode/rate preserve it. Same path out and back; one processing wait. Solar disk segment test uses NASA rounded700000km radius; enlarged hollow marker is not physical size. No corona, other occultation, scheduling, serialization, relays or moving endpoints; no disk blockage does not guarantee real communication. EP115 official title, URL, 19:31 duration and artwork verified; actual audio and Apple access untested; s20 remains unverified."
  ],
  "episodeTitle": "〈星空藏寶圖：從巨石陣到哈伯望遠鏡的天文奇幻旅程｜EP.115〉"
};
