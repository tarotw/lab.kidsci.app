window.CONFIG={
  "id": "F01",
  "path": "webgeom",
  "status": "complete",
  "controller": "geom.js",
  "extras": [
    "geom-model.js",
    "geom-view.js",
    "geom.css",
    "geom.js"
  ],
  "title": [
    "蜘蛛網的幾何工作台",
    "Spiderweb geometry workbench"
  ],
  "question": [
    "同樣大的網，多繞幾圈會多用多少絲？",
    "Same-sized web: how much silk do extra turns need?"
  ],
  "hint": [
    "先加一圈，看青色黏絲與用絲量；再換排列，半徑保持相同。",
    "Add one turn; watch the cyan spiral and silk length. Change layouts at the same radius."
  ],
  "controls": [
    {
      "key": "radius",
      "label": [
        "網半徑",
        "Web radius"
      ],
      "min": 10,
      "max": 30,
      "step": 1,
      "value": 20,
      "unit": "cm / cm"
    },
    {
      "key": "turns",
      "label": [
        "螺線圈數",
        "Spiral turns"
      ],
      "min": 3,
      "max": 14,
      "step": 1,
      "value": 7,
      "unit": "圈 / turns"
    },
    {
      "key": "spokes",
      "label": [
        "支撐輻條",
        "Support spokes"
      ],
      "min": 6,
      "max": 32,
      "step": 1,
      "value": 16,
      "unit": "條 / lines"
    },
    {
      "key": "probe",
      "label": [
        "測試圓片直徑",
        "Test disk diameter"
      ],
      "min": 0,
      "max": 5,
      "step": 0.2,
      "value": 2,
      "unit": "cm / cm"
    }
  ],
  "defaults": {
    "radius": 20,
    "turns": 7,
    "spokes": 16,
    "probe": 2,
    "type": 0
  },
  "action": [
    "加一圈",
    "Add a turn"
  ],
  "mission": [
    "半徑相同的三種網，用絲量和空隙一定相同嗎？",
    "Must same-radius webs use equal silk and have equal gaps?"
  ],
  "options": [
    [
      "一定，外圈同樣大",
      "Yes: same outer circle"
    ],
    [
      "不一定，絲的排列也重要",
      "No: thread layout matters"
    ]
  ],
  "answer": 1,
  "reason": [
    "外圈和測量區面積相同，黏絲路徑卻不同。格點碰絲比例與最遠點距離都是幾何估算，不是昆蟲捕獲率。",
    "The outer circle and measured area match, but spiral paths differ. Sample contact and farthest-point distance are geometric estimates, not prey-capture rates."
  ],
  "comparisons": [],
  "ep": "261",
  "episodeTitle": "超級建築師：蜘蛛結網的秘密工程與科學奇蹟",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC4233696/",
    "Zaera et al.2014 · Idealized orb-web geometry"
  ],
  "extraSources": [
    [
      "https://pubmed.ncbi.nlm.nih.gov/9284492/",
      "Vollrath et al.1997 · Geometry varies with conditions"
    ]
  ],
  "limit": [
    "本站是原創平面數學教具，不是真網照片或某物種的建造程序。三種網同外半徑R，內側0.2R為中心區；量測環形區面積π(R²−(0.2R)²)，不是整圈都有黏性。青色螺線作黏絲，灰色輻條與圓框作不黏支撐絲；每類長度分開。總線長是用絲成本代理，不等於真絲質量、供能或施工時間。每圈96段折線近似，物理座標為cm，與畫面尺寸無關。等距r/R=0.2+0.8u；對數r/R=0.2×5^u；不規則排列為固定正弦擾動，非隨機真實量測。各曲線u=0..1、同圈數，同半徑起終點；不規則輻條角度以固定正權重分配。31×31固定正方格中心只保留環形區，圓片中心在這些點；最近青絲距離≤圓片半徑便記碰絲，0直徑定義不碰。比例是有限格點估算，不含黏性、逃脫、飛行、碰撞能量或物種辨識。估算最大空隙為最遠取樣點到黏絲距離的2倍，不是精確最大內切圓，可能越過量測區邊界；格距2R/31，微小差異不要過度解讀。網大小改變仍用相同格數，不把估算誤差當真細節。支撐絲不計黏絲接觸或此空隙，框長2πR、輻條NR；未含網外錨線、膠滴、中心絲、立體變形或力學。真實圓網不一律是完美對數螺線；支持研究模型也有用途與限制。EP261單集網址、封面時長待確認，Logo非單集封面。",
    "Original planar mathematical toys, not web photographs or a species construction sequence. All have outer radius R; inner0.2R is a hub. Measured annulus area=pi(R²−(0.2R)²), not a fully sticky disk. Cyan spiral represents sticky silk; gray spokes and circular frame represent nonsticky support. Lengths are separate; total thread length is a silk-use cost proxy, not silk mass, energy or construction time. Curves use96 polyline segments per turn, physical cm independent of viewport. Even r/R=0.2+0.8u; log r/R=0.2*5^u. Uneven layout uses fixed sinusoidal perturbations, not random field measurements. Curves share u=0..1, turns and radial endpoints. Uneven spoke angles use fixed positive weights. Only annular centers from a31-by31 square lattice are retained. A probe centered there contacts the cyan spiral if nearest distance≤probe radius; diameter0 is defined as no contact. This sampled fraction excludes adhesion, escape, flight, impact energy and species vision. Estimated largest gap is twice the farthest sample distance to the spiral, not an exact largest inscribed circle; it may cross the measurement-domain boundary. Grid pitch=2R/31; do not overinterpret small differences. Changing radius keeps the same sample count, not real additional resolution. Support threads do not count toward spiral contact or this gap; frame length2piR, radial lengthNR. External anchors, glue drops, hub threads,3D deformation and mechanics omitted. Real orb webs are not universally perfect logarithmic spirals; research idealizations also have limits. EP261 metadata awaits verification; logo is not episode artwork."
  ],
  "formula": "Physical cm coordinates; u=i/(96*n), theta=2*pi*n*u.\nEven r=R*(.2+.8*u); log r=.2*R*5^u.\nUneven w=u+.06*sin(2piu)+.015*sin(6piu)+.005*sin(18piu); r=R*(.2+.8*w); theta=2pi*n*(u+.02*sin(2piu)).\nSpiral length=sum hypot(dx,dy),96 segments/turn. Support length=N*R+2*pi*R. Total/100 in meters.\nMeasured annulus area=pi*R^2*(1-.2^2) cm^2.\nSpoke weights=1+.35*sin(i*2.399)+.15*cos(i*1.13)>0; normalized sum2pi.\n31*31 square-cell centers; keep .2R<=hypot(x,y)<=R.\nPoint-to-segment distance via clamped orthogonal projection.\nProbe contacts sticky spiral when nearestDistance<=diameter/2; diameter0: no contact.\nSample coverage=100*contactCount/sampleCount. Estimated max gap=2*max(nearestDistance).\nGap is sampled clearance to sticky spiral, NOT exact largest hole diameter.\nViewport pixels appear only in SVG rendering, never measurements.",
  "keywords": "蜘蛛網,圓網,阿基米德螺線,對數螺線,幾何,間距,線長,格點估算,用絲成本,spider web,orb web,Archimedean spiral,logarithmic spiral,geometry,spacing,thread length,sampling,silk cost",
  "description": [
    "切換三種同半徑數學網，改圈數、輻條與測試圓片，量測用絲長度、面積與格點空隙；繁中英文可自由操作。",
    "Compare three same-radius mathematical webs; change turns, spokes and test disks to measure silk length, area and sampled gaps in Chinese and English."
  ],
  "date": "2026-10-03",
  "icon": "🕸️",
  "formulaZh": "物理座標用cm；u=i/(96×圈數n)。\n等距：r=R(0.2+0.8u)，θ=2πnu。\n對數：r=0.2R×5^u，θ=2πnu。\n不規則：w=u+0.06sin(2πu)+0.015sin(6πu)+0.005sin(18πu)；r=R(0.2+0.8w)，θ=2πn[u+0.02sin(2πu)]。\n黏絲長=每圈96段折線的長度加總。\n支撐絲長=N×R+2πR；全部總長除100換m。\n量測環形面積=πR²(1−0.2²)，用cm²。\n不規則輻條：第i個正權重=1+0.35sin(i×2.399)+0.15cos(i×1.13)，加總角度正規化到2π。\n31×31正方格中心；只保留0.2R≤√(x²+y²)≤R。\n最近黏絲距離：各折線段垂直投影限制於段內，找最小值。\n最近距離≤圓片直徑/2便碰絲；0直徑定義不碰。\n格點碰絲比例=碰絲點數/全部取樣點數×100%。\n估算最大空隙=2×最遠格點到最近黏絲的距離。\n這不是精確最大網孔直徑，格距2R/31。\n視窗像素只用於畫SVG，不參與任何量測。",
  "dateModified": "2026-10-10"
};
