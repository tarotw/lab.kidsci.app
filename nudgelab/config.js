window.CONFIG={
  "id": "K06",
  "path": "nudgelab",
  "status": "complete",
  "topic": "space",
  "icon": "☄️",
  "date": "2026-10-14",
  "title": [
    "讓小行星提前一點點轉彎",
    "Nudge an asteroid a little, early"
  ],
  "question": [
    "同樣每秒加1公尺，早推和晚推差在哪裡？",
    "With the same1m/s nudge, what changes if you push earlier?"
  ],
  "defaults": {
    "day": 20,
    "dv": 1,
    "direction": "along"
  },
  "extras": [
    "nudgelab-model.js",
    "nudgelab.css",
    "nudgelab.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "description": [
    "操作介入日、速度增量與方向，在平面太陽中心重力教具對照未介入與輕推後的小行星軌跡、最近距離及停止時刻。",
    "Change intervention day, delta velocity and direction; compare original and nudged asteroid paths, closest distances and stop times in a planar solar-gravity teaching model."
  ],
  "keywords": "小行星,行星防禦,速度增量,提前介入,軌道,萬有引力,科學好好聽,asteroid,planetary defense,delta velocity,early intervention,orbit,gravity",
  "sources": [
    [
      "https://www.nasa.gov/directorates/smd/nasas-first-asteroid-deflection-mission-enters-next-design-phase/",
      "NASA：小速度改變提前累積",
      "NASA: small early velocity changes accumulate"
    ],
    [
      "https://cneos.jpl.nasa.gov/nda/tour.html",
      "JPL：沿軌道速度與能量",
      "JPL: along-track velocity and energy"
    ],
    [
      "https://science.nasa.gov/planetary-defense-dart/",
      "NASA：DART為動能撞擊示範",
      "NASA: DART kinetic-impact demonstration"
    ]
  ],
  "podcast": {
    "ep": "s15",
    "title": "地球防衛隊：如何阻止小行星撞地球？",
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "mission": [
    "把Δv設0，兩條軌跡應該怎樣？",
    "Set delta-v to0. What should the two paths do?"
  ],
  "options": [
    [
      "重合，因為沒有改變速度",
      "Overlap: velocity was not changed"
    ],
    [
      "仍會分開，因為按過介入",
      "Still separate because intervention was selected"
    ]
  ],
  "answer": 0,
  "reason": [
    "相同初始條件與引力，Δv0不產生新軌道。提前效果還要看方向和情境，不能保證每次都更好。",
    "Same initial state and gravity; zero delta-v creates no new orbit. Early effects depend on direction and scenario, not a universal guarantee."
  ],
  "formula": [
    "教學單位au／day；1au=149597870.7km；年365.25day\nμ=(2π/365.25)² au³/day²，校準1au圓軌道一教學年\nr''=−μr/|r|³，固定步長RK4 .025day\n自訂小行星a1.2au、e.3，調初相位，未介入中心相遇名義第180day\n介入把速度瞬時加Δv向量，m/s轉au/day：Δv×.001×86400/au\n太陽中心引力；地球為1au圓軌道移動碰撞標記，不施加引力\n地球半徑約6400km教學圓；小行星視為點\n每步用相對距離導數尋找近點，碰撞第一次接觸事件二分，停止該條軌跡\n最近距離是到地球中心，0..該軌跡停止；不是離地表高度\n兩條停止時刻可能不同，凍結數字各自標示\n日心距離≤.05au或RK4中間進入，保守停在上一安全點，避開奇點\n不是星曆、DART重現、撞擊器質量或防禦成功率",
    "Teaching units au/day;1au=149597870.7km; year365.25day\nμ=(2π/365.25)²au³/day² sets a1au circular orbit to one teaching year\nr''=−μr/|r|³; fixed-step RK4 .025day\nCustom asteroid a1.2au, e.3; phase chosen for nominal centre encounter at day180 without intervention\nImpulse adds a delta-v vector; m/s to au/day:delta-v×.001×86400/au\nSolar gravity only; Earth is a moving circular1au collision marker, exerts no gravity\nRounded6400km Earth teaching radius; point asteroid\nRelative-distance derivative locates minima within steps; first contact event bisection stops each path\nClosest is distance to Earth centre from0 to that path’s stop, not altitude\nPaths may stop at different times; frozen values labelled separately\nAt heliocentric radius≤.05au or intermediate RK4 entry, conservatively stop at last safe point before singularity\nNot an ephemeris, DART reconstruction, impactor mass model or defense success probability"
  ],
  "limit": [
    "自訂平面二體教學情境，μ由1au／365.25day圓軌道校準；小行星a1.2au、e.3，名義未介入第180天中心相遇，實際半徑約6400km首次接觸較早。地球只作圓軌道移動標記不施重力，小行星是點，不含其他行星、地球重力聚焦、大氣或碰撞後。各條第一次接觸停止，各自帳本只涵蓋0到停止日；220天是觀察窗，不代表永久安全。Δv為直接設定的結果，不算撞擊器質量、動量增強或核武。較早較好僅可在指定順行示例觀察，不普遍保證。日心.05au為數值安全邊界非太陽表面，中間階段靠近則停上一安全點。全圖天體放大，近點放大圖另有固定km刻度，不能用放大符號判碰撞。s15/c25 metadata待官方核對。",
    "Custom planar two-body teaching scenario. μ calibrated by1au/365.25day circle; asteroid a1.2au/e.3 phased for nominal day180 centre encounter. Rounded6400km radius gives earlier first contact. Earth is a circular moving marker with no gravity; point asteroid; no other planets, Earth focusing, atmosphere or post-impact motion. Each path stops at first contact; its ledger covers0 to its stop.220day observation window does not prove permanent safety. Delta-v is directly specified, not computed from impactor mass, ejecta or nuclear design. Early improvement applies to the chosen along-track example, not all directions/scenarios. Heliocentric.05au is numerical safety, not solar surface; unsafe RK4 intermediate stops at previous safe point. Enlarged bodies in global plot; closest-point inset has fixed km scale, symbols cannot decide contact. s15/c25 metadata unverified."
  ]
};
