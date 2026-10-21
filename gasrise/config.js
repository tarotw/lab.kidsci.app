window.CONFIG={
  "id": "J03",
  "path": "gasrise",
  "status": "complete",
  "topic": "earth",
  "icon": "🫧",
  "title": [
    "火山氣體為什麼會膨脹？",
    "Why do volcanic gas bubbles expand?"
  ],
  "question": [
    "降低上方壓力，氣體會留在岩漿裡、形成泡，還是逃出去？",
    "Lower the overlying pressure: does gas stay dissolved, form bubbles or escape?"
  ],
  "defaults": {
    "gas": 3,
    "pressure": 20,
    "viscosity": 3,
    "open": true
  },
  "extras": [
    "gasrise-model.js",
    "gasrise.css",
    "gasrise.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "date": "2026-10-14",
  "description": [
    "降低教學樣本的壓力，觀察溶解氣體析出與理想氣泡膨脹；調黏度和逸氣通道，追蹤溶解、泡內及已逸出的氣體帳。",
    "Depressurize a teaching sample to observe gas exsolution and ideal bubble expansion. Change viscosity and the escape route while tracking dissolved, bubble and escaped gas."
  ],
  "keywords": "火山,岩漿,氣泡,膨脹,壓力,黏度,溶解氣體,逸氣,理想氣體,守恆,volcano,magma,gas bubble,expansion,pressure,viscosity,dissolved gas,degassing,ideal gas,conservation",
  "sources": [
    [
      "https://www.usgs.gov/observatories/hvo/news/volcano-watch-now-youre-monitoring-gas",
      "USGS：減壓與溶解氣體析出",
      "USGS: depressurization and gas exsolution"
    ],
    [
      "https://home.nps.gov/subjects/volcanoes/volcanic-eruptions.htm",
      "NPS：黏度與氣體逸出",
      "NPS: viscosity and gas escape"
    ],
    [
      "https://openstax.org/books/university-physics-volume-2/pages/2-1-molecular-model-of-an-ideal-gas",
      "OpenStax：理想氣體關係",
      "OpenStax: ideal gas law"
    ]
  ],
  "podcast": {
    "ep": "EP.126",
    "title": "地球也會長青春痘？火山三兄弟來了！",
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277",
    "verified": false
  },
  "mission": [
    "同樣的氣體量與溫度，壓力減半時，理想氣體體積呢？",
    "For the same gas amount and temperature, what happens to ideal-gas volume when pressure halves?"
  ],
  "options": [
    [
      "變成兩倍",
      "It doubles"
    ],
    [
      "不變",
      "It stays the same"
    ]
  ],
  "answer": 0,
  "reason": [
    "PV=nRT。固定n與T時V和P成反比。岩漿中的泡還可能析出、逸出或重新溶解，所以整體泡量不只受壓力影響。",
    "PV=nRT. For fixed n and T, V is inversely proportional to P. Magma bubbles can also exsolve, escape or redissolve, so total bubble volume depends on more than pressure."
  ],
  "formula": [
    "教學溶解容量 = 0.25 × P(MPa) mol\n溶解量 = min(樣本內剩餘氣體量, 容量)\n泡內量 = 剩餘量 − 溶解量\nV(L)=n泡 × 8.314 × 1200 ÷ (P × 10⁶) × 1000\n上升進度速率 = 0.08 ÷ 黏度倍率 每模型秒\n到頂且通道開：整包氣體移至逸出帳\n溶解＋泡內＋已逸出 = 初始氣量\n分包步長0.1模型秒；觀察60秒，播放12倍",
    "Teaching dissolved capacity = 0.25 × P(MPa) mol\nDissolved = min(gas remaining in sample, capacity)\nBubble gas = remaining − dissolved\nV(L)=nbubble × 8.314 × 1200 ÷ (P × 10⁶) × 1000\nRise progress rate = 0.08 / viscosity factor per model second\nAt top with route open: transfer the packet to escaped ledger\nDissolved + bubbles + escaped = initial gas\n0.1 model-second steps; observe 60 s, playback 12×"
  ],
  "limit": [
    "單一假想氣體，固定1200K，壓力0.1–20MPa皆為絕對壓力。0.25mol/MPa溶解容量是自訂線性教具，非水、CO₂或SO₂的真岩漿溶解度；理想氣體在高壓是趨勢近似，非真火山體積預測。減壓／加壓立即達溶解平衡，不模擬成核、擴散延遲、表面張力、結晶或冷卻；加壓可讓未逸出氣體重新溶解，已逸出不返回。單包最多0.25mol，四固定起始高度，上升速率0.08/黏度倍率是自訂進度率，不是公尺／秒、Stokes定律或真黏度。到頂且通道開整包轉逸出；關通道仍可上升到頂、保留量，並不計壓力回饋或噴發。黏度1–10只是示例倍率，固定其他條件較高倍率較慢；不由泡量、倍率或通道開關推噴發日期、威力或安全。Canvas泡符號依四通道／高度區間合併，大小按各組理想體積立方根；不是實際泡數、合併物理、岩漿體積比例或完整火山剖面。圖外另列完整氣量／體積／時鐘。改初始氣量明示新樣本，改壓力／黏度／通道、語言／模式保留時計和逸出帳；重選目前狀態保留。60秒上限不是氣體已全部逸出；重播重開樣本。對照另開同氣量／壓力／通道的兩個樣本從0到60秒，只改倍率1／10，不複製目前歷史。EP126／66 metadata待核，只節目首頁／Logo。",
    "One hypothetical gas at fixed 1200 K; absolute pressure 0.1–20 MPa. Custom linear capacity 0.25 mol/MPa is not measured magma solubility for water, CO₂ or SO₂. High-pressure ideal gas is a trend approximation, not a real volcanic volume prediction. Pressure edits instantly equilibrate dissolved and bubble gas, omitting nucleation, diffusion delays, surface tension, crystallization and cooling. Compression can redissolve unescaped gas; escaped gas does not return. Packets hold at most 0.25 mol with four initial heights. Custom rise progress rate 0.08/viscosity factor is neither m/s nor Stokes law or measured viscosity. An open route transfers whole packets at the top; a closed route retains them there, without pressure feedback or eruption. Factors 1–10 only demonstrate slower escape under otherwise fixed conditions. No eruption date, violence or safety inference follows. Canvas symbols group four lanes and height bins; radii follow cube roots of group ideal volumes. They are not actual bubble counts, physical coalescence, magma volume scale or a full volcano cross-section. Complete gas, volume and time ledgers are outside Canvas. Changing initial gas explicitly starts a new sample. Pressure, viscosity, route, language and mode preserve clock and escaped gas. The 60 s cap does not mean all gas escaped; replay starts a new sample. Comparison starts two fresh samples at the same gas amount/pressure/route for 60 s, changing only factors 1/10, without copying the current history. EP126/66 metadata await verification; homepage/Logo only."
  ]
};
