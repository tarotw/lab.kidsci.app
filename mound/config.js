window.CONFIG={
  "id": "F02",
  "path": "mound",
  "status": "complete",
  "controller": "mound.js",
  "extras": [
    "mound-model.js",
    "mound-view.js",
    "mound.css",
    "mound.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "title": [
    "白蟻丘的通風實驗室",
    "Termite mound ventilation"
  ],
  "question": [
    "風不大，丘內的氣流怎麼轉向？",
    "How can internal flow reverse without strong wind?"
  ],
  "hint": [
    "先反轉溫差，看看兩支管的箭頭；按開始，再看氣體往哪去。",
    "Reverse ΔT and watch both arrows. Press Start to see where gas goes."
  ],
  "controls": [
    {
      "key": "temp",
      "label": [
        "外側−中央溫差",
        "Flute − core ΔT"
      ],
      "min": -10,
      "max": 10,
      "step": 0.5,
      "value": 3,
      "unit": "°C / °C"
    },
    {
      "key": "wind",
      "label": [
        "外風（＋抽／−壓）",
        "Toy wind (+suction)"
      ],
      "min": -5,
      "max": 5,
      "step": 0.5,
      "value": 0,
      "unit": "m/s / m/s"
    },
    {
      "key": "wall",
      "label": [
        "牆交換倍率",
        "Wall exchange factor"
      ],
      "min": 0,
      "max": 5,
      "step": 0.1,
      "value": 1,
      "unit": "× / ×"
    },
    {
      "key": "source",
      "label": [
        "額外氣體源（示例）",
        "Extra gas source (toy)"
      ],
      "min": 0,
      "max": 10,
      "step": 0.5,
      "value": 5,
      "unit": "mL/min / mL/min"
    }
  ],
  "defaults": {
    "temp": 3,
    "wind": 0,
    "source": 5,
    "wall": 1,
    "block": 0
  },
  "action": [
    "反轉溫差",
    "Reverse ΔT"
  ],
  "mission": [
    "氣體在丘內繞圈，就一定排到外面了嗎？",
    "Does internal circulation always remove gas outside?"
  ],
  "options": [
    [
      "一定，箭頭動就算排出",
      "Yes: moving arrows mean removal"
    ],
    [
      "不一定，還得穿牆／流出",
      "No: it must cross walls or flow out"
    ]
  ],
  "answer": 1,
  "reason": [
    "內部氣流只搬運氣體，只有穿壁交換或外部流出才進「出去」帳。把牆交換設0，循環仍可存在，新增氣體卻全留下。",
    "Internal flow moves gas. Only wall exchange or outward leakage adds to the escaped ledger. With wall exchange0, circulation can persist while all added gas remains."
  ],
  "comparisons": [],
  "ep": "247",
  "episodeTitle": "草原上的微型摩天樓：解密非洲白蟻丘的「呼吸」奇蹟",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/%E8%8D%89%E5%8E%9F%E4%B8%8A%E7%9A%84%E5%BE%AE%E5%9E%8B%E6%91%A9%E5%A4%A9%E6%A8%93-%E8%A7%A3%E5%AF%86%E9%9D%9E%E6%B4%B2%E7%99%BD%E8%9F%BB%E4%B8%98%E7%9A%84-%E5%91%BC%E5%90%B8-%E5%A5%87%E8%B9%9F-ep-247/id1812447277?i=1000789336961",
    "episodeId": "1000789336961",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource221/v4/38/35/2d/38352d99-6ff5-ee8e-26f9-d8fe4f023ff6/0e3c063c-4cf4-4bfe-8a50-f0e19258856c.jpg/960x960bb.webp",
    "coverAvailable": true,
    "coverFile": "f02-ep247-cover.webp",
    "durationLabel": [
      "約22分鐘",
      "About 22 minutes"
    ],
    "subscriberOnly": true,
    "checkedAt": "2026-10-10",
    "evidence": "native-review-mound-official-20261010.json"
  },
  "source": [
    "https://softmath.seas.harvard.edu/wp-content/uploads/2019/10/2015-12.pdf",
    "King, Ocko & Mahadevan2015 · Mound ventilation"
  ],
  "extraSources": [
    [
      "https://pubmed.ncbi.nlm.nih.gov/26316023/",
      "PubMed · DOI10.1073/pnas.1423242112"
    ]
  ],
  "limit": [
    "原創兩腔示例，非真丘截面、CFD或24小時日夜熱模型。研究O.obesus在觀察條件的閉式循環與多孔壁氣體交換，不是所有白蟻丘都用同一機制。本文外風不是主要動力；本站微小外部漏氣是自訂擴充，未校準真牆。ΔT=外側−中央手動固定30分鐘，不推體溫／溫度調節。假想高1.5m、參考300K、密度1.2kg/m³；線性浮力壓差B=ρgHΔT/Tref。中央與外側管各80L/min/Pa；堵管把該通導設0。氣流＋向上、−向下；兩節點同時滿足流量守恆。兩個外漏通導h=0.01×牆倍率L/min/Pa。風有號＋表示上側抽氣、−表示壓入，P外=−0.2×0.5ρu|u|；0.2係數自訂，不是實測方向或表面形狀。牆倍率0時漏氣與氣體穿壁交換都關，外風不能推封閉回圈。堵一管時未堵管可能仍有少量外漏流，不能說兩管全停止。下腔30L、上腔15L充分混合；CO₂外部示例420ppm（不是當前全球值），初始相同。自訂額外氣源0–10mL/min；固定溫度／總空氣體積的稀薄示蹤近似，不預測代謝、耐受或生存。穿壁濃度差交換K下=0.05×牆、K上=0.8×牆L/min，與壓差漏氣分開。通道內分子擴散、真孔洞網絡、熱滯後、濕度、真材料阻力與湍流省略。時間快180倍（30min約10秒）。0.02min Euler每步流出限制保正；0.2min採樣，任意時刻線性插值。帳只含高於420ppm的額外CO₂：新增=儲存＋穿壁／流出，單位mL。全關源保持420ppm但流仍可能存在；無壓差流仍可穿壁擴散。在兩腔閉壁教具，±同大小溫差反轉箭頭卻有相同混合結果，不能稱夜晚必較好。改物理條件從0重算，重按相同條件、模式、檢視及換語言保留進度；手動反轉為明確實驗修改。EP247 官方頁已核對，約22分鐘且目前訂閱者限定；EP88只是熱背景。",
    "Original two-cavity toy, not a real section, CFD or a24-hour thermal cycle. The O.obesus study distinguishes closed circulation from porous-wall gas exchange; it does not establish a universal mound mechanism. Wind was not the main driver in its conditions. Our tiny pressure leakage is an invented extension, not calibrated walls. ΔT=flute−core stays fixed for30min; no body temperature or regulation prediction. Assumed height1.5m, reference300K, density1.2kg/m³; linear buoyancy head B=rho*g*H*ΔT/Tref. Core/flute conductance80L/min/Pa each; a blocked pipe has zero conductance. Signed flows: positive up, negative down. Two pressure nodes conserve flow. Both external leakage conductances h=.01*wall factor L/min/Pa. Signed wind positive means top suction, negative top pressure; external head=−.2*.5*rho*u*abs(u), with invented coefficient. Factor0 disables leakage and wall gas exchange, so wind cannot drive a closed loop. An unblocked pipe may retain tiny external flow when the other is blocked. Lower30L/upper15L cavities are well mixed; illustrative ambient420ppm, not current global CO₂, initializes both. Invented extra gas0–10mL/min is a dilute tracer at fixed reference temperature and air volume, not metabolism, tolerance or survival. Wall concentration exchange K=[.05,.8]*factor L/min is separate from pressure leakage. Molecular diffusion along internal tubes, real pore networks, thermal lag, humidity, actual material resistance and turbulence omitted. Time accelerated180-fold:30min in about10s. Euler.02min with positive outgoing bounds; samples.2min, linear time interpolation. Ledger counts excess CO₂ above420ppm: added=stored+wall/outflow, in mL. Zero source keeps ambient while flow can exist; zero pressure flow still permits wall diffusion. Matched opposite gradients yield equal mixing in this closed two-cavity toy despite reversed arrows; no claim night is always better. Actual parameter changes restart at0; reselecting a condition, mode, view or language preserves progress. Reverse is an explicit experiment change. EP247 official page verified, about 22 minutes and currently subscriber-only. EP88 is heat background only."
  ],
  "formula": "Invented two-cavity network; fixed reference temperature and volume.\nV=[30,15]L; ambient=420ppm. Extra CO2 mass in mL, concentration x=mass/V in mL/L.\nCore/flute G=80L/min/Pa; blocked G=0.\nB=rho*g*H*ΔT/300K; rho=1.2kg/m^3, H=1.5m.\nPwind=-.2*.5*rho*u*abs(u) Pa, invented pressure coefficient.\nh=.01*wallFactor L/min/Pa. K=[.05,.8]*wallFactor L/min.\nqc=Gc*(Plo-Phi); qf=Gf*(Plo-Phi+B); qin=-h*Plo; qout=h*(Phi-Pwind).\nSolve qc+qf=qin=qout. Closed h0: choose Plo0, Phi=Gf*B/(Gc+Gf).\nEach internal flow transfers abs(q)*donor x; sum internal transfers=0.\nExterior inflow adds no EXCESS; outgoing removes q*x. Wall removes K*x.\nLower source S in mL/min; .02min explicit Euler steps, .2min stored samples.\nppm=420+1000*mass/V. Added=S*t=stored+escaped.\nEach node dt*outgoingConductance/V<1; positivity without clipping.\nTwo mixed cavities omit directional spatial gradients; equal |ΔT| in closed loop can mix equally with opposite arrows.",
  "formulaZh": "假想兩腔網路，固定參考溫度與總空氣體積。\nV下30L、V上15L；外氣示例420ppm。額外CO₂用mL，濃度x=儲量/V，用mL/L。\n中央／外側通導各80L/min/Pa，堵管設0。\nB=ρgHΔT/300K；ρ=1.2kg/m³，H=1.5m。\n示例風壓P外=−0.2×0.5ρu|u|Pa。\n漏氣通導h=0.01×牆倍率L/min/Pa；穿壁交換K=(0.05,0.8)×牆倍率L/min。\nq中央=G中央(P下−P上)；q外側=G外側(P下−P上+B)。\nq入=−hP下；q出=h(P上−P外)。\n同步解q中央＋q外側=q入=q出。牆h0時可選P下0，P上=G外側B/(G中央＋G外側)。\n每支內流搬|q|×上游濃度；內部氣體搬運加總0。\n外來空氣不加額外氣體；外流移走q×x，穿壁移走K×x。\n下方自訂源S mL/min；Euler步0.02min，保存每0.2min。\nppm=420+1000×額外mL/V；新增S×時間=儲存＋穿壁／流出。\n每腔dt×總流出係數/V<1，保正而非事後截零。\n兩腔充分混合略去空間方向梯度；閉壁時同大小反向ΔT可以同混合，箭頭反向。",
  "keywords": "白蟻丘,通風,日夜溫差,浮力,氣流,多孔壁,二氧化碳,氣體守恆,動物工程,termite mound,ventilation,temperature difference,buoyancy,airflow,porous wall,carbon dioxide,gas conservation,animal engineering",
  "description": [
    "換溫差、堵管和外風，觀察假想兩腔白蟻丘氣流與CO₂帳；區分內部循環與穿壁交換，繁中英文自由操作。",
    "Change gradients, pipe blockages and toy wind in a two-cavity mound to explore airflow and CO₂ ledgers, separating circulation from wall exchange in Chinese and English."
  ],
  "date": "2026-10-04",
  "icon": "🏜️",
  "dateModified": "2026-10-10"
};
