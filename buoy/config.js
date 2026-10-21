window.CONFIG={
  "id": "I02",
  "path": "buoy",
  "status": "complete",
  "topic": "physics",
  "icon": "🛁",
  "title": [
    "阿基米德的排水秤",
    "Archimedes’ overflow tank"
  ],
  "question": [
    "同樣一公升的物體，為什麼有的浮、有的沉？",
    "Why do equal-volume objects float or sink?"
  ],
  "defaults": {
    "shape": 0,
    "mass": 0.6,
    "rho": 1000
  },
  "extras": [
    "buoy-model.js",
    "buoy.css",
    "buoy.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "date": "2026-10-08",
  "description": [
    "改變同體積物體的質量、形狀與液體密度，放手觀察浮沉；分清目前排水與量杯累積溢水，核對浮力與重力。",
    "Change mass, shape and fluid density, then release equal-volume objects. Compare buoyancy with weight and distinguish current displacement from collected overflow."
  ],
  "keywords": "阿基米德,浮力,排水,溢水,密度,浮沉,Archimedes,buoyancy,displacement,overflow,density,floating,sinking",
  "sources": [
    [
      "https://openstax.org/books/university-physics-volume-1/pages/14-4-archimedes-principle-and-buoyancy",
      "OpenStax：阿基米德原理與浮力",
      "OpenStax: Archimedes’ principle and buoyancy"
    ],
    [
      "https://open.firstory.fm/story/cmsbtejib0w6601stfrh4goy9",
      "本集官方資料（非模型數值來源）",
      "Official episode metadata (not model parameters)"
    ]
  ],
  "podcast": {
    "ep": "C21",
    "title": "〈泡澡泡出靈感的瘋狂發明家（上）：阿基米德的皇冠密碼與浮力傳奇｜C21〉",
    "url": "https://open.firstory.fm/story/cmsbtejib0w6601stfrh4goy9",
    "verified": true,
    "priorUnverifiedCode": "VIP.21",
    "planEpisode": "c21",
    "urlVerified": true,
    "provider": "Firstory",
    "firstory": "https://open.firstory.fm/story/cmsbtejib0w6601stfrh4goy9",
    "durationSeconds": 944,
    "durationIso": "PT15M44S",
    "durationLabel": [
      "15 分 44 秒",
      "15 min 44 sec"
    ],
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/14l6iWCoJd1eI96PbjlI9.jpg",
    "coverFile": "podcast/epC21.jpg",
    "coverAvailable": true,
    "artworkVisualChecked": true,
    "metadataChecked": "2026-10-08",
    "publishedAt": "Sun, 02 Aug 2026 22:02:07 GMT",
    "evidenceBasis": "Original plan explicitly c21 / Archimedes upper episode and original c21 manuscript title; current official publisher C21 RSS and full Firstory page match topic/title/artwork. Prior VIP.21 was unverified author inference, now corrected. No Apple identity/access/audio inference."
  },
  "mission": [
    "物體已完全浸入，再放深一點，浮力會怎樣？",
    "Once fully submerged, does going deeper increase buoyancy?"
  ],
  "options": [
    [
      "浮力不變（液體密度不變）",
      "It stays the same at constant fluid density"
    ],
    [
      "越深浮力就一直變大",
      "It keeps increasing with depth"
    ]
  ],
  "answer": 0,
  "reason": [
    "浮力取決於排開液體的重量。完全浸入後，排水體積已等於物體體積；同密度液體裡再深也不增加。",
    "Buoyancy depends on the weight of displaced fluid. Full immersion already displaces the entire object volume; going deeper adds no volume."
  ],
  "limit": [
    "三個不吸水、密閉剛體均為1L；立方體高10cm、直圓柱高16cm、球以精確球缺體積計算，方向固定。質量0.2–1.6kg為可獨立調整的教具設定；不模擬皇冠材料、船進水或史實鑑定。均勻不可壓縮液體800–1200kg/m³；水1000為約數，1200不等同一般海水。g=9.81m/s²。水槽水平截面0.04m²，溢口下30cm為有孔支架，底下仍有液體；沉底後支持力另列。量杯累積只增不減，水位依液量守恆下降；水面瞬時水平，不模擬水波與出水流率。手動定位為外力固定，放手後一維運動，以RK4固定0.002s步長；水阻為自訂8×浸入比例×速度，忽略附加質量、表面張力、轉動、湍流及空氣浮力。碰支架不反彈。真實沉浮時間不由此預測。每次觀察最多12s，停止是保留觀察結果，不表示物理速度必為零。換形狀／質量／密度會重新補水量測；移動深度保留已溢水、歸零計時並固定物體。模式／語言與重選目前形狀保留狀態。主題c21按官方C21資料核對；延伸EP67單集資料仍待核。",
    "Three sealed, rigid, nonabsorbing objects each have volume 1 L: a 10 cm cube, a 16 cm vertical cylinder, and a sphere using exact spherical-cap volume. Mass is an independent teaching setting, not crown-material identification. Fluid density is uniform and incompressible, 800–1200 kg/m³; 1000 approximates water, and 1200 is not ordinary seawater. g=9.81 m/s². Tank area is 0.04 m²; a perforated support sits 30 cm below the outlet, with fluid underneath. Collected overflow never returns automatically; fluid conservation sets the lowered surface. Waves and outflow rates are omitted. A hand holds the object until release. One-dimensional motion uses RK4 at 0.002 s; chosen drag is 8 × submerged fraction × velocity. Added mass, surface tension, rotation, turbulence and air buoyancy are omitted. Support impacts do not bounce. Timing is illustrative. A run ends at 12 s without claiming zero physical velocity. Shape, mass or density changes refill for a new measurement; changing depth keeps the collected overflow, resets the clock and holds the body. Language, mode and reselecting a shape preserve state. Plan c21 is verified as official C21; related EP67 metadata remains unverified."
  ],
  "formula": [
    "V＝1L＝0.001m³；V浸為目前水面以下的物體體積\n浮力Fb＝ρgV浸；重力W＝mg\n向下為正：ma＝W−Fb−8(V浸/V)v−支持力\n液量守恆：槽截面A×水位下降δ＋V浸＝量杯累積Q\nQ只增加；放手前手提供固定位置所需的力\n靜止漂浮：V浸＝m/ρ；完全浸入：V浸＝V\n球缺體積＝πu²(r−u/3)，0≤u≤2r",
    "V=1 L=0.001 m³; Vsub is the volume below the current surface\nBuoyancy Fb=ρgVsub; weight W=mg\nDownward positive: ma=W−Fb−8(Vsub/V)v−support\nFluid conservation: tank area A × surface drop δ + Vsub = collected Q\nQ only increases; a hand supplies the holding force before release\nFloating at rest: Vsub=m/ρ; fully submerged: Vsub=V\nSpherical cap: πu²(r−u/3), 0≤u≤2r"
  ],
  "episodeTitle": "〈泡澡泡出靈感的瘋狂發明家（上）：阿基米德的皇冠密碼與浮力傳奇｜C21〉"
};
