window.CONFIG={
  "id": "I07",
  "path": "phase",
  "status": "complete",
  "topic": "physics",
  "icon": "🧊",
  "title": [
    "物質狀態與能量台階",
    "Phase changes and energy steps"
  ],
  "question": [
    "溫度沒上升，移入的能量去哪裡了？",
    "Where does added energy go when temperature stays flat?"
  ],
  "defaults": {
    "mass": 0.2,
    "power": 500,
    "direction": 1,
    "start": 0
  },
  "extras": [
    "phase-model.js",
    "phase.css",
    "phase.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "date": "2026-10-14",
  "description": [
    "加熱或冷卻固定壓力下的一份純水，追蹤冰、水、水蒸氣比例、溫度平台與累計熱量；比較質量加倍的需求。",
    "Heat or cool a fixed-pressure pure-water sample. Track ice, liquid and vapor fractions, temperature plateaus and cumulative heat; compare energy needs for twice the mass."
  ],
  "keywords": "相變,潛熱,熔化,結冰,沸騰,凝結,焓,比熱,加熱曲線,phase change,latent heat,melting,freezing,boiling,condensation,enthalpy,specific heat,heating curve",
  "sources": [
    [
      "https://openstax.org/books/university-physics-volume-2/pages/1-5-phase-changes",
      "OpenStax：相變與潛熱",
      "OpenStax: phase changes and latent heat"
    ]
  ],
  "podcast": {
    "ep": "EP.57",
    "title": "〈公開｜物理化學專輯(4)｜物質變身大探險：從硬邦邦到亮晶晶的四種樣子〉",
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277?i=1000763322933",
    "verified": true,
    "coverFile": "phase-cover.jpg",
    "duration": "10:46",
    "durationIso": "PT10M46S",
    "source": "https://gongo.app/",
    "numberVerified": false
  },
  "mission": [
    "同起點、同終點，質量加倍，理想需要的熱量大小變幾倍？",
    "Same starting and target states: how does twice the mass change the required heat magnitude?"
  ],
  "options": [
    [
      "2倍",
      "2×"
    ],
    [
      "不變",
      "Unchanged"
    ]
  ],
  "answer": 0,
  "reason": [
    "升降溫用Q=mcΔT，相變用Q=mL；相同單位質量的狀態改變，總熱量與質量成正比。功率相同時所需時間也加倍。",
    "Sensible heat uses Q=mcΔT and phase change uses Q=mL. The same change per unit mass needs heat proportional to mass, and twice the time at the same power."
  ],
  "limit": [
    "固定1atm下純水的準靜態、均溫焓模型；固定質量且水蒸氣保留，不是開口杯沸騰流失，也不是密閉定容加熱。符號圖是狀態卡，不表示真體積、密度、分子軌跡或粒子數量。只含冰／液態水／水蒸氣，不含電漿、過冷、成核延遲、蒸發散失或壓力／雜質改變。0°C與100°C平台只適用這組理想化定壓純水條件。取教學常數c冰2090、c水4186、c蒸氣2020J/(kg°C)，熔化潛熱334000、汽化潛熱2256000J/kg，非完整物性資料庫。比焓h以0°C冰為0；h<0冰、0…Lf為冰水相變、Lf…Lf+c水100為液態升溫、其後Lv區間為沸騰／凝結，再後為水蒸氣升溫。每相的定壓熱量包含體積功的焓效果；Q淨=mΔh，不把它當內能變化或另重複加膨脹功。Q移入與Q移出分別累計，淨Q可正／負／0。輸入功率±200…1000W，加熱／冷卻反向保留狀態，改質量／起點重開。範圍−20…120°C；到端點只積算抵達所需的時間與熱量，不把超出的熱量丟掉後繼續計時。3600秒為觀察上限，可能未完成相變；改方向可從溫度邊界繼續，觀察時間到上限則重播。播放120倍速，下一界線跳到順方向的下一焓分段邊界，若先到時間上限則停於實際狀態。對照從相同起始狀態到全液態0°C或全蒸氣100°C，列原質量與2倍質量、帶符號熱量及固定功率理想時長；此目標需求不限上方3600秒觀察範圍。圖中能量軸線性且含長汽化平台，不為版面壓縮潛熱比例。EP57／EP186 metadata待核。",
    "A quasi-static uniform-temperature pure-water enthalpy model at fixed 1 atm, with fixed mass and retained vapor. It is neither an open boiling cup with mass loss nor fixed-volume sealed heating. Symbols are a state card, not real volumes, densities, molecular paths or particle counts. Only ice, liquid and vapor are included; plasma, supercooling, nucleation delay, evaporation losses, pressure changes and impurities are omitted. The 0°C and 100°C plateaus apply to these ideal fixed-pressure pure-water conditions. Teaching constants are ci=2090, cw=4186 and cv=2020 J/(kg°C), Lf=334000 and Lv=2256000 J/kg, not a full property database. Specific enthalpy h is zero for ice at 0°C, with piecewise sensible and latent-heat regions. Constant-pressure heat includes the enthalpy effect of volume work: net Q=mΔh, not ΔU with a second added expansion-work term. Heat in and out accumulate separately; net Q can be positive, negative or zero. Power is ±200…1000 W. Direction changes preserve state; mass or starting-state edits restart. Bounds are −20…120°C. At a boundary only the time and heat needed to reach it are accumulated; excess heat is not discarded while time continues. A 3600 s observation limit may interrupt a phase change. Reversing direction resumes from a temperature bound; replay restarts after the time limit. Playback is 120×. Next boundary jumps along the current direction to the next enthalpy knot, or stops sooner at the time limit. Comparison uses the same initial state and targets all-liquid 0°C or all-vapor 100°C for current and doubled mass, with signed required heat and ideal fixed-power duration beyond the main observation limit if needed. The energy axis is linear, including the long vaporization plateau. Official EP57/EP186 metadata await verification."
  ],
  "formula": [
    "固定壓力：Q淨＝Q移入−Q移出＝m(h−h起點)\n單一相：ΔQ＝mcΔT；相變：ΔQ＝mLΔ比例\nh冰＝c冰T（0°C冰為0）\n冰水平台：T＝0°C，液態比例＝h/Lf\nh水＝Lf+c水T\n沸騰平台：T＝100°C，蒸氣比例＝(h−Lf−100c水)/Lv\nh蒸氣＝Lf+100c水+Lv+c蒸氣(T−100)\nΔQ＝有正負的P×Δt；1kJ＝1000J\n固定起點／目標，m×2→Q×2、所需時間×2",
    "Fixed pressure: net Q=heat in−heat out=m(h−hstart)\nSingle phase: ΔQ=mcΔT; phase change: ΔQ=mLΔfraction\nIce h=ciT, referenced to ice at 0°C\nMelting plateau: T=0°C, liquid fraction=h/Lf\nLiquid h=Lf+cwT\nBoiling plateau: T=100°C, vapor fraction=(h−Lf−100cw)/Lv\nVapor h=Lf+100cw+Lv+cv(T−100)\nΔQ=signed P×Δt; 1 kJ=1000 J\nSame start/target: twice m→twice Q and duration"
  ]
};
