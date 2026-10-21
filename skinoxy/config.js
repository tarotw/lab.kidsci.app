window.CONFIG={
  "id": "G03",
  "path": "skinoxy",
  "status": "complete",
  "controller": "skinoxy.js",
  "extras": [
    "skinoxy-model.js",
    "skinoxy.css",
    "skinoxy.js"
  ],
  "title": [
    "兩棲動物的皮膚呼吸站",
    "Amphibian skin breathing station"
  ],
  "question": [
    "改兩側的氧，箭頭會往哪裡走？",
    "Change oxygen on both sides. Which way does net oxygen move?"
  ],
  "hint": [
    "先調外側氧，看淨入能不能追上需求。",
    "Change outside oxygen; can net entry match demand?"
  ],
  "defaults": {
    "area": 4,
    "wet": 80,
    "outer": 75,
    "inner": 25,
    "need": 4
  },
  "controls": [
    {
      "key": "outer",
      "label": [
        "外側溶解氧",
        "Outside dissolved oxygen"
      ],
      "min": 0,
      "max": 100,
      "step": 1,
      "value": 75,
      "units": [
        "濃度刻度",
        "marks"
      ],
      "unit": "濃度刻度 / marks"
    },
    {
      "key": "inner",
      "label": [
        "內側溶解氧",
        "Inside dissolved oxygen"
      ],
      "min": 0,
      "max": 100,
      "step": 1,
      "value": 25,
      "units": [
        "濃度刻度",
        "marks"
      ],
      "unit": "濃度刻度 / marks"
    },
    {
      "key": "wet",
      "label": [
        "皮膚濕潤程度",
        "Skin wetness"
      ],
      "min": 0,
      "max": 100,
      "step": 1,
      "value": 80,
      "units": [
        "刻度",
        "marks"
      ],
      "unit": "刻度 / marks"
    },
    {
      "key": "area",
      "label": [
        "交換面積",
        "Exchange area"
      ],
      "min": 0,
      "max": 8,
      "step": 1,
      "value": 4,
      "units": [
        "面積格",
        "patches"
      ],
      "unit": "面積格 / patches"
    },
    {
      "key": "need",
      "label": [
        "身體需求（獨立）",
        "Body demand (independent)"
      ],
      "min": 0,
      "max": 10,
      "step": 1,
      "value": 4,
      "units": [
        "氧點/拍",
        "points/beat"
      ],
      "unit": "氧點/拍 / points/beat"
    }
  ],
  "mission": [
    "有氧、有通道且兩側濃度相等，氧分子都不動了嗎？",
    "With oxygen and open paths, do equal concentrations stop molecular motion?"
  ],
  "options": [
    [
      "兩方向平衡，淨量是0",
      "Both directions balance; net flow is zero"
    ],
    [
      "全部停止，不再交換",
      "All exchange stops"
    ]
  ],
  "answer": 0,
  "reason": [
    "有氧與交換通道時，兩方向可以平衡，淨交換為零，不是分子停下來。零面積沒有交換通道；兩側氧皆0則沒有氧可交換。",
    "With oxygen and exchange paths, both directions can balance, giving net zero without stopping molecules. Zero area removes the paths; zero oxygen on both sides leaves no oxygen to exchange."
  ],
  "comparisons": [],
  "ep": "185",
  "episodeTitle": "登陸先鋒（上）：青蛙與蟾蜍的雙重生活",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://journals.biologists.com/jeb/article/154/1/67/5947/Effect-Of-Boundary-Layers-On-Cutaneous-Gas",
    "Pinder與Feder 1990：水邊界層的阻力（摘要）",
    "Pinder & Feder 1990: boundary-layer resistance (abstract)"
  ],
  "extraSources": [
    [
      "https://pubmed.ncbi.nlm.nih.gov/6804273/",
      "Gatz 1982：皮膚氣體交換與擴散（摘要）",
      "Gatz 1982: diffusion and skin gas exchange (abstract)"
    ],
    [
      "https://doi.org/10.1242/jeb.01349",
      "Burggren與Vitalis：水分／血流與氣體交換",
      "Burggren & Vitalis: hydration, blood flow and gas exchange"
    ]
  ],
  "limit": [
    "假想兩棲皮膚的Fick比例教具，不是特定物種或器官貢獻百分比。面積格、濕潤刻度、氧濃度刻度、氧點與拍全部自訂未校準，不能換算真尺寸、劑量、血氧或存活。兩側都是同一溶解氧參照；不直接比較空氣氧%與含血紅素的總血氧。固定膜厚、邊界層／溫度／血流等；真動物會調節，脫水不能直接等同本旋鈕的線性變化。0濕仍有0.1通透因子，只表示本例交換減少；不是乾燥動物安全。入／出箭頭是兩方向份額示意，不是追蹤單個分子，圈圈數不是分子計數。循環／補給假想維持兩側濃度，是開放系統；累積差額是需其他來源平衡的帳，不是可花費氧庫。肺／其他呼吸途徑、二氧化碳、蒸發水與酸鹼調節未計。浸水不代表無限氧，水中邊界層和供氧也重要。模式／語言／圖層保留狀態；改條件在同一拍重算另一情境。 顯示與方向判斷採10⁻⁹氧點數值容差，不是生物安全門檻；供需提示使用相同容差，避免浮點殘差被當成真正不足。下一刻度為下一個2拍整點，不一定增加2拍；未完成的近終點拍數顯>19.9。新開說明／頁面隱藏暫停，恢復頁面不自動續播；切語言／模式恢復已開面板仍保留播放。對照已是指定值時明示同條件，加面積明示實際格數並最多8。",
    "Fick-proportion teaching tool for hypothetical amphibian skin, not a species forecast or fixed organ contribution. Area patches, wetness, concentration marks, oxygen points and beats are invented and unfitted; no conversion to real size, dose, blood oxygen or survival. Both sides share a dissolved-oxygen reference; do not compare air oxygen percent with hemoglobin-bound total blood oxygen. Membrane thickness, boundary-layer resistance, temperature and blood flow are fixed. Real animals regulate exchange; dehydration is not a universal linear wetness law. Wetness zero retains a 0.1 conductance factor here, not a guarantee that dry animals are safe. Directional arrows show toy shares, not individual molecular tracking; circles are not molecule counts. Hypothetical circulation/renewal maintains both concentrations in an open system. Accumulated balance is an accounting amount to be balanced by other sources, not a spendable oxygen store. Lungs/other pathways, CO2, water evaporation and acid–base regulation are omitted. Immersion is not infinite oxygen: supply and boundary layers matter. Language/view/layers retain state; setting changes recompute another condition at the same beat. Displays and direction use a 10⁻⁹-point numerical tolerance, not a biological safety threshold. Supply/demand hints share that tolerance so floating residuals do not imply a real deficit. Next mark means the next multiple of 2, not necessarily an advance of 2 beats; unfinished times near the endpoint use >19.9. Opening explanations or hiding the page pauses; becoming visible does not auto-resume. Language/mode restoration of open panels preserves playback. Comparisons show matching settings when already selected; area changes show actual patches, capped at 8."
  ],
  "formulaText": [
    "同一溶解氧參照的兩側刻度；不是空氣氧%或總血氧。固定厚度與其他阻力，K=0.02為自訂通透係數。A=面積格（同大小皮膚片），m=0.1+0.9×濕潤刻度/100。向內F_in=K A m C_out，向外F_out=K A m C_in，淨交換J=F_in−F_out=K A m(C_out−C_in)，單位自訂氧點/拍。需求D獨立；差額B=J−D，需補量max(0,−B)，超出需求量max(0,B)。20拍帳：向內／向外／淨量／需求／差額各為相應速率×t。兩方向份額是教學分解，不是微觀測量。濃度由假想補給／循環維持，是開放系統，不是會耗盡的封閉氧庫。改條件暫停，在同一拍重算另一條件，不保留舊條件的累積歷史。差額不是體內氧量、血氧、缺氧程度或存活率。",
    "Both concentration scales use the same dissolved-oxygen reference, not air oxygen percent or total blood oxygen. Thickness and other resistances are fixed. Invented conductance K=0.02; A counts equal-area skin patches; m=0.1+0.9×wetness/100. Inward F_in=K A m C_out; outward F_out=K A m C_in; net J=F_in−F_out=K A m(C_out−C_in), in invented oxygen points/beat. Independent demand D; balance B=J−D; additional amount needed=max(0,−B), amount above demand=max(0,B). Over t of 20 beats, each ledger is its rate×t. Directional shares are a teaching decomposition, not microscopic measurements. Hypothetical renewal/circulation maintains concentrations: an open system, not a finite oxygen store. Changes pause and recompute another condition at the same beat, not retain history under old conditions. Balance is not body oxygen content, blood oxygen, severity of hypoxia or survival."
  ],
  "formula": "同一溶解氧參照的兩側刻度；不是空氣氧%或總血氧。固定厚度與其他阻力，K=0.02為自訂通透係數。A=面積格（同大小皮膚片），m=0.1+0.9×濕潤刻度/100。向內F_in=K A m C_out，向外F_out=K A m C_in，淨交換J=F_in−F_out=K A m(C_out−C_in)，單位自訂氧點/拍。需求D獨立；差額B=J−D，需補量max(0,−B)，超出需求量max(0,B)。20拍帳：向內／向外／淨量／需求／差額各為相應速率×t。兩方向份額是教學分解，不是微觀測量。濃度由假想補給／循環維持，是開放系統，不是會耗盡的封閉氧庫。改條件暫停，在同一拍重算另一條件，不保留舊條件的累積歷史。差額不是體內氧量、血氧、缺氧程度或存活率。\nBoth concentration scales use the same dissolved-oxygen reference, not air oxygen percent or total blood oxygen. Thickness and other resistances are fixed. Invented conductance K=0.02; A counts equal-area skin patches; m=0.1+0.9×wetness/100. Inward F_in=K A m C_out; outward F_out=K A m C_in; net J=F_in−F_out=K A m(C_out−C_in), in invented oxygen points/beat. Independent demand D; balance B=J−D; additional amount needed=max(0,−B), amount above demand=max(0,B). Over t of 20 beats, each ledger is its rate×t. Directional shares are a teaching decomposition, not microscopic measurements. Hypothetical renewal/circulation maintains concentrations: an open system, not a finite oxygen store. Changes pause and recompute another condition at the same beat, not retain history under old conditions. Balance is not body oxygen content, blood oxygen, severity of hypoxia or survival.",
  "description": [
    "改面積、濕潤與兩側溶解氧示例刻度，看皮膚淨交換與獨立身體需求的氧點帳；繁中英文互動教具，非真動物血氧或存活預測。",
    "Adjust area, wetness and toy dissolved oxygen on both sides; compare net skin exchange with independent demand. A bilingual oxygen ledger, not a blood-oxygen or survival forecast."
  ],
  "keywords": "兩棲動物,皮膚呼吸,氧氣,擴散,Fick定律,表面積,濕潤,濃度差,水邊界層,amphibian,cutaneous respiration,oxygen,diffusion,Fick law,surface area,wetness,concentration gradient,boundary layer",
  "date": "2026-10-04",
  "icon": "🐸",
  "dateModified": "2026-10-11"
};
