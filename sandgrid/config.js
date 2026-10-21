window.CONFIG={
  "id": "J05",
  "path": "sandgrid",
  "status": "complete",
  "topic": "earth",
  "icon": "🏞️",
  "title": [
    "河流搬沙與堆沙",
    "River sand: erosion and deposition"
  ],
  "question": [
    "水慢下來，正在搬的沙會去哪裡？",
    "Where does moving sand go when the current slows?"
  ],
  "defaults": {
    "slope": 0.5,
    "flow": 6,
    "grain": 0.5,
    "feed": true
  },
  "extras": [
    "sandgrid-model.js",
    "sandgrid.css",
    "sandgrid.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "date": "2026-10-14",
  "description": [
    "調坡度、流量與粒徑，放大河彎並選格觀察搬沙與堆沙；核對河床、移動泥沙、上游輸入和下游輸出的質量。",
    "Adjust slope, discharge and grain size, zoom into a bend and inspect cells. Balance bed sediment, moving sediment, upstream inputs and downstream exports."
  ],
  "keywords": "河流,泥沙,侵蝕,沉積,粒徑,流量,河彎,河床,質量守恆,曼寧方程,river,sediment,erosion,deposition,grain size,discharge,meander,riverbed,mass balance,Manning equation",
  "sources": [
    [
      "https://www.usgs.gov/publications/fluvial-sediments-a-summary-source-transportation-deposition-and-measurement-sediment",
      "USGS：河流泥沙搬運與沉積概念",
      "USGS: fluvial sediment transport and deposition"
    ],
    [
      "https://www.nps.gov/articles/meandering-stream.htm",
      "NPS：河彎內外側的搬運差異",
      "NPS: inner and outer meander processes"
    ],
    [
      "https://www.usbr.gov/tsc/techreferences/mands/wmm/chap02_16.html",
      "USBR：均勻流與水力半徑限制",
      "USBR: normal flow and hydraulic radius"
    ],
    [
      "https://www.hec.usace.army.mil/confluence/hmsdocs/hmstrm/channel-flow/normal-depth-model",
      "USACE：正常水深假設的範圍",
      "USACE: scope of the normal-depth assumption"
    ]
  ],
  "podcast": {
    "ep": "EP.141",
    "title": "地球的雕塑師：風與水的鬼斧神工（下）",
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277",
    "verified": false
  },
  "mission": [
    "將流量降到0後，原本移動的沙還能沉下來嗎？",
    "At zero discharge, can previously moving sand still settle?"
  ],
  "options": [
    [
      "可以，沙轉入河床",
      "Yes, it moves into the bed"
    ],
    [
      "沙都憑空消失",
      "All sediment disappears"
    ]
  ],
  "answer": 0,
  "reason": [
    "流量0停止教具搬運、侵蝕與上游供沙；原本移動的沙仍可沉積。沙沒有消失，移動庫減少時河床庫增加。",
    "Zero discharge stops modeled transport, erosion and upstream supply, while previously moving sediment can still settle. It changes pools rather than disappearing."
  ],
  "formula": [
    "採SI：h／R為m、u為m/s、Q為m³/s；Manning係數取1。USBR來源圖中的1.49為英制寫法，不乘入本頁公尺公式。\n矩形寬6m、固定n=.035；S=坡度%/100\nA=6h，R=A/(6+2h)，Q=A R^(2/3) sqrt(S)/n；迭代解h，平均u=Q/A\n12段×3列，每段沿河20m；u格=u×[1+.25 sin(2π(i+.5)/12)×(j−1)]\n示例起動閾值=1.2 sqrt(d/.5) m/s，沉積閾值=.8 sqrt(d/.5) m/s（d為mm）\n每.25模型秒：侵蝕=min(原床量,.02 max(0,u格/起動−1) dt)\n沉積=原移動量×.06 max(0,1−u格/沉積閾值) dt\n下移量=原移動量×u格 dt/20，到末段才離開\n鄰列淨交換=(原移動量差)×.02 dt，有水流才交換\n上游供沙開且Q>0時輸入.5kg/模型秒，分三列\n初始床180kg＋移動12kg=192kg；總存量=192＋來−出",
    "SI convention: h/R in m, u in m/s and Q in m³/s; Manning prefactor is 1. The USBR image uses the customary-unit prefactor 1.49, not a multiplier in this metric formula.\nRectangular width 6 m, fixed n=.035; S=slope percent/100\nA=6h; R=A/(6+2h); Q=A R^(2/3) sqrt(S)/n. Solve h; mean u=Q/A\n12 reaches ×3 lanes, each 20 m long; cell u=u×[1+.25 sin(2π(i+.5)/12)×(j−1)]\nCustom erosion threshold=1.2 sqrt(d/.5) m/s; deposition threshold=.8 sqrt(d/.5), d in mm\nEach .25 model second: erosion=min(old bed,.02 max(0,u/erosion threshold−1) dt)\nDeposition=old moving stock×.06 max(0,1−u/deposition threshold) dt\nForward transfer=old moving stock×u dt/20; only last reach exports\nNet neighboring-lane exchange=(old moving difference)×.02 dt, only with flow\nSupply on and Q>0: .5 kg/model second divided among three inlet lanes\nInitial bed 180 kg + moving 12 kg=192 kg; stocks=192+imports−exports"
  ],
  "limit": [
    "質量守恆的假想搬沙格網，不是工程衝刷／洪水預測。每格原床5kg、原移動1/3kg，共192kg，單一不黏性粒徑0.1–8mm；不模擬黏土黏結、混合粒徑、石形／密度、紊流、懸沙垂向或真床載跳動。改粒徑明示新樣本；坡度／流量／供沙保留歷史。矩形正常水深以固定6m寬／n=.035求平均u，河彎以自訂±25%速度分配、三列均值等於平均u；不是彎道流場或水量時間積分。固定.25模型秒，先用原庫計侵蝕／沉積／下移／橫列交換，新沙下步再搬，不出負庫。閾值、侵蝕／沉降／混合率及.5kg/s供沙均自訂定性，不能泛化大石一定先沉或真泥沙量。流量0停止上游供沙、侵蝕、下移與混合，原移動沙仍沉下；0是無流示例、不是模擬乾河水位。床量變色固定±5kg尺且超界飽和，不是河床高度／河岸位移；點代表移動沙存量，不是顆粒數／軌跡。河彎放大只改畫面，不重置或變物理；格網河段240m，圖形非地理比例。每播放秒8模型秒，120秒止非真地貌時程；同設定可重現，對照從兩個同樣新起點120秒只改流量.5／12，不拿當前歷史當預測。EP141／139 metadata待核，僅首頁／Logo。 正常流假設不處理回水或水工構造物；Manning關係亦不可靠描述極淺流及黏性效應。",
    "A conservative hypothetical sediment grid, not engineering scour or flood prediction. Each of 36 cells starts with 5 kg bed and 1/3 kg moving sediment: 192 kg total. A single noncohesive grain size 0.1–8 mm; clay cohesion, mixed sizes, shape/density, turbulence, vertical suspension and actual bed-load hopping are omitted. Changing grain size explicitly starts a new sample; slope/discharge/supply keep history. Rectangular normal depth uses fixed width 6 m and n=.035 to derive mean speed; custom ±25% bend speed offsets average to the mean, not a bend-flow solver or dynamic water balance. Fixed .25 model seconds use old stocks for erosion, deposition, forward transport and lateral exchange; newly arriving sediment is usable next step. Thresholds and erosion/settling/mixing/supply rates are custom qualitative examples. No universal claim that larger stones always deposit first. At Q=0, supply, erosion, advection and mixing stop, while existing moving sediment can settle; zero-flow is not a dry-river stage model. Fixed bed-change colors saturate beyond ±5 kg, not bed elevations or moving banks. Dots represent moving stock, not particle count/trajectories. Bend zoom changes only the view. The modeled reach is 240 m, but drawing geometry is not geographic scale. Playback is 8 model seconds/second, capped at 120, not real geomorphic time. Comparison runs equal new samples for 120 seconds changing only discharge .5/12, not the edited current history. EP141/139 metadata await verification; homepage/Logo only. The normal-flow assumption omits backwater and hydraulic structures; Manning relations do not reliably describe very shallow flow or viscosity effects."
  ]
};
