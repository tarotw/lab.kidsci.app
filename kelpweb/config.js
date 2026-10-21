window.CONFIG={
  "id": "H12",
  "path": "kelpweb",
  "status": "complete",
  "controller": "kelpweb.js",
  "extras": [
    "kelpweb-model.js",
    "kelpweb.css",
    "kelpweb.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "title": [
    "海牛與海藻林的連鎖效應",
    "Sea cows and kelp cascades"
  ],
  "question": [
    "海獺少了，海牛也會立刻變少嗎？",
    "If otters decline, do sea cows decline immediately?"
  ],
  "hint": [
    "先走一回合，再換快／慢補回假設。",
    "Step once, then switch kelp replenishment assumptions."
  ],
  "defaults": {
    "otterLoss": 50,
    "cowLoss": 0,
    "grazing": 100,
    "delay": 2
  },
  "controls": [],
  "mission": [
    "兩組壓力一樣，結果就一定一樣嗎？",
    "Do identical pressures guarantee the same result under different assumptions?"
  ],
  "options": [
    [
      "不一定，作用速度與延遲也重要",
      "No; response rates and delays can matter"
    ],
    [
      "一定，食物網只會有一個結局",
      "Yes; a food web has only one possible outcome"
    ]
  ],
  "answer": 0,
  "reason": [
    "兩組海藻補回速度不同，食物支持海牛的路徑也會改變。這是比較假設，不是用教具判定唯一的歷史滅絕原因。",
    "Different kelp replenishment rates change food support for sea cows. This compares assumptions, not a unique historical explanation for extinction."
  ],
  "comparisons": [],
  "ep": "266",
  "episodeTitle": "消失的海洋公車：斯特拉海牛的悲歌與啟示",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/26504217/",
    "Estes等2016：連鎖假說（摘要與圖說）",
    "Estes et al.2016: cascade hypothesis (abstract and captions)"
  ],
  "extraSources": [
    [
      "https://pubmed.ncbi.nlm.nih.gov/17148336/",
      "Turvey與Risley2006：獵捕模型（搜尋摘要）",
      "Turvey & Risley2006: hunting model (search abstract)"
    ],
    [
      "https://www.nhm.ac.uk/discover/stellers-sea-cow-first-historical-extinction-of-marine-mammal-at-human-hands.html",
      "自然史博物館：史提勒海牛背景",
      "Natural History Museum: Steller’s sea cow background"
    ]
  ],
  "description": [
    "操作海獺與海牛壓力、海膽啃食與作用延遲，同時觀察兩種海藻補回假設的四節點軌跡；所有指數、正負作用和歷史限制清楚標示。",
    "Explore otter and sea-cow pressures, urchin grazing and delays. Compare four-node trajectories under two kelp replenishment assumptions, with explicit indices, signed links and historical limits."
  ],
  "keywords": "史提勒海牛,斯特拉海牛,海獺,海膽,海藻林,食物網,營養階層連鎖,時滯,Steller sea cow,Hydrodamalis gigas,sea otter,sea urchin,kelp,trophic cascade,time delay",
  "date": "2026-10-04",
  "icon": "🌿",
  "limit": [
    "四節點皆為0–100的自訂相對指數，各自基準不同，不能相加成生物量、能量或隻數。初值海獺70、海膽25、海藻70、海牛40；不是歷史調查。每回合先按本節點餘裕生長，再按自訂風險係數衰減，係數不是直接死亡百分比。海膽對海獺是食物正作用，海獺對海膽是捕食負作用；海膽與海牛對海藻是啃食負作用；海藻對海牛是食物正作用。這不是完整食物網，未列其他捕食者、病害、營養鹽、漂流食物或氣候。啃食作用0只停海膽→海藻那條路，不移除海膽或其他連結。海獺額外壓力和海牛直接壓力分開，0是沒有新增壓力。所有跨節點作用讀相同0／2／4回合前的狀態，早期不足用第0回合；本節點擁擠項用目前狀態。延遲不是量測繁殖時間；0延遲也在下一次離散更新才顯示，不是瞬時重算。慢／快海藻生長係數0.25／0.75，其他公式相同，兩組從同一初值、同一套每回合壓力同步前進；切看哪組不改歷史。改控制只用於下一回合並暫停，重播才重新開始。正值很小仍不是零，顯示小於0.1；真正0無移入不復生。40回合不是年份，0.5秒播放一回合。公式是自訂教具，沒有重製2006或2016研究；研究對直接獵捕與連鎖相對重要性有不同解釋，本頁不能裁定唯一歷史原因或確切滅絕年份。圖像比例、箭頭粗細與顏色不代表實測量或能量守恆。主題EP266，延伸EP179只作食物網背景，官方單集metadata待核實。",
    "All four nodes use chosen relative indices from 0 to 100 with different baselines. They cannot be added as biomass, energy or animal counts. Initial otter 70, urchin 25, kelp 70, cow 40 are not historical surveys. Each step applies density-limited growth followed by exponential loss; hazard coefficients are not direct death percentages. Urchins support otters as food (+), otters suppress urchins (−), urchins and sea cows consume kelp (−), and kelp supports sea cows (+). Other predators, disease, nutrients, drift food and climate are omitted. Grazing 0 disables only the urchin→kelp link, not the animals or other links. Otter and direct sea-cow added pressures are separate;0 means no added pressure. Cross-node effects read the same state 0/2/4 steps earlier, using the initial state when unavailable. Self-crowding uses current values. Delay is not a measured generation time; even delay 0 appears on the next discrete update. Slow/fast kelp growth coefficients are 0.25/0.75; all other rules match. Both scenarios share initial conditions and each step’s pressures. Viewing a scenario preserves both histories. Controls pause and affect the next step; replay starts anew. Tiny positive values display <0.1 and are not zero. True zero stays zero without immigration. Forty steps are not years; playback advances every 0.5s. Rules are chosen, not replicas of the 2006 or 2016 studies, whose interpretations of hunting and cascades differ. This toy cannot decide a unique historical cause or extinction date. Artwork scales and arrow styles are illustrative, not measurements or energy accounting. EP 266 is the main topic; EP 179 is food-web background only. Official episode metadata awaits verification."
  ],
  "formula": "For x in [0,1]: gain=r*x*(1-x); next=(x+gain)*exp(-q). rO=.15*Ulag/(Ulag+.2), rU=.30, rK=.25 or .75, rC=.10*Klag. qO=.04+.35*otterPressure/100; qU=.45*Olag; qK=.45*grazing/100*Ulag+.08*Clag; qC=.04*(1-Klag)+.22*cowPressure/100. lagIndex=max(0,t-delay).",
  "formulaText": [
    "x為0–1指數；顯示時乘100。\n本回合生長g＝r×x×(1−x)；下一回合＝(x+g)×exp(−q)。\nr海獺＝0.15×舊海膽/(舊海膽+0.2)；r海膽＝0.30。\nr海藻＝0.25（慢）或0.75（快）；r海牛＝0.10×舊海藻。\nq海獺＝0.04+0.35×海獺壓力/100；q海膽＝0.45×舊海獺。\nq海藻＝0.45×啃食作用/100×舊海膽+0.08×舊海牛。\nq海牛＝0.04×(1−舊海藻)+0.22×海牛壓力/100。\n舊值取第max(0,目前回合−延遲)回合。各節點有自己的基準，不能相加。",
    "x is an index in[0,1], displayed ×100.\nGain g=r×x×(1−x); next=(x+g)×exp(−q).\nrOtter=0.15×pastUrchin/(pastUrchin+0.2); rUrchin=0.30.\nrKelp=0.25(slow) or 0.75(fast); rCow=0.10×pastKelp.\nqOtter=0.04+0.35×otterPressure/100; qUrchin=0.45×pastOtter.\nqKelp=0.45×grazing/100×pastUrchin+0.08×pastCow.\nqCow=0.04×(1−pastKelp)+0.22×cowPressure/100.\nPast values use step max(0,currentStep−delay). Each index has a different baseline; do not add them."
  ],
  "dateModified": "2026-10-08"
};
