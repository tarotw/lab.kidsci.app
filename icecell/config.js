window.CONFIG={
  "id": "G02",
  "path": "icecell",
  "status": "complete",
  "controller": "icecell.js",
  "extras": [
    "icecell-model.js",
    "icecell.css",
    "icecell.js"
  ],
  "title": [
    "林蛙結冰保護：冰在哪裡？",
    "Wood frog freezing: where is the ice?"
  ],
  "question": [
    "先看細胞外的冰，再看看裡面的水。",
    "Watch outside ice and the water inside."
  ],
  "hint": [
    "按降溫，看水往哪裡移。",
    "Press Cool and watch water move."
  ],
  "defaults": {
    "rate": 1,
    "protect": 6,
    "cold": 55
  },
  "controls": [
    {
      "key": "rate",
      "label": [
        "變冷速度",
        "Cooling rate"
      ],
      "min": 1,
      "max": 5,
      "step": 1,
      "value": 1,
      "units": [
        "刻度/拍",
        "marks/beat"
      ],
      "unit": "刻度/拍 / marks/beat"
    },
    {
      "key": "protect",
      "label": [
        "示例保護量",
        "Toy protection"
      ],
      "min": 0,
      "max": 10,
      "step": 1,
      "value": 6,
      "units": [
        "保護格",
        "units"
      ],
      "unit": "保護格 / units"
    },
    {
      "key": "cold",
      "label": [
        "寒冷終點（越大越冷）",
        "Cold endpoint (higher = colder)"
      ],
      "min": 0,
      "max": 100,
      "step": 1,
      "value": 55,
      "units": [
        "刻度",
        "marks"
      ],
      "unit": "刻度 / marks"
    }
  ],
  "mission": [
    "只看見細胞外冰，能保證青蛙會活嗎？",
    "Does outside ice alone guarantee survival?"
  ],
  "options": [
    [
      "不能，還有其他凍結傷害",
      "No: other freezing stresses matter"
    ],
    [
      "能，細胞裡沒冰就一定安全",
      "Yes: no inner ice means certain safety"
    ]
  ],
  "answer": 0,
  "reason": [
    "細胞內結冰很危險，但外冰也帶來脫水等壓力。本教具沒有模擬所有傷害，不能推算存活。",
    "Intracellular ice is hazardous, but outside ice also causes stresses such as dehydration. This toy omits many injuries and cannot predict survival."
  ],
  "comparisons": [],
  "ep": "186",
  "episodeTitle": "生存藝術（下）：林蛙與蠑螈",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0117234",
    "Costanzo等2015：保護物質與族群耐凍差異",
    "Costanzo et al. 2015: cryoprotectants and population differences"
  ],
  "extraSources": [
    [
      "https://pubmed.ncbi.nlm.nih.gov/10413574/",
      "Devireddy等1999：肝組織水移動（摘要）",
      "Devireddy et al. 1999: liver water transport (abstract)"
    ],
    [
      "https://journals.biologists.com/jeb/article/217/12/2193/12112/Wood-frog-adaptations-to-overwintering-in-Alaska",
      "Larson等2014：野外越冬林蛙",
      "Larson et al. 2014: overwintering wood frogs"
    ],
    [
      "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0124029",
      "2015勘誤：Table 5註腳排版",
      "2015 correction: Table 5 footnote placement"
    ]
  ],
  "limit": [
    "北美林蛙Rana sylvatica的概念細胞圖，不是所有青蛙。水100格、保護0–10格、寒冷0–100刻度與速度1–5刻度/拍全為自訂，沒有對應溫度、劑量或真時間。葡萄糖、尿素等保護作用以單一假想旋鈕概括；不模擬合成、血液輸送、缺氧、膜傷害、代謝、凍融恢復等。外冰促使水外移；保護降低示例冰份額與過度縮水，並延後內冰。係數未擬合研究；無內冰不等於健康或存活，最高保護也不保證極冷下維持內液。不是低溫保存或醫療操作指南。圖與晶體大小只是示意，外冰先形成不等於外冰無害；格數不是細胞或冰晶數。切語言／模式／圖層保留狀態，改參數在同一拍重算替代情境，不是半途往動物添加物質。 水帳每0.05拍計算，兩步之間線性插值；寒冷與階段按目前拍數直接算。內冰大於10⁻⁹水格才顯示警示，低於此值視作數值零，不是生物安全門檻。四水欄以0.1格平衡圓整，顯示少量界限時不能把界限當精確數字相加。下一刻度指下一個10拍整點，不一定前進10拍。開啟說明或頁面隱藏會暫停，重新顯示不自動續播；切語言／模式保留原本展開狀態與播放。",
    "Conceptual cell for North American Rana sylvatica, not all frogs. All units are invented: 100 water units, 0–10 protection units, 0–100 cold marks, rate 1–5 marks/beat. No real temperatures, doses or time. One hypothetical knob summarizes protection associated with glucose/urea, omitting synthesis, circulation, hypoxia, membrane injury, metabolism and freeze–thaw recovery. Outside ice moves water outward; protection lowers the toy ice fraction and excessive shrinkage and delays inner ice. Rules are not fitted research. No inner ice does not prove health/survival; maximum protection cannot guarantee inner liquid under extreme cold. Not a preservation or medical protocol. Artwork and crystal size are illustrative; outside ice is still stressful, and units are not cell/crystal counts. Language/view/layers retain state. Changing parameters recomputes an alternative at the same beat, not adding chemicals to an animal mid-freeze. Water accounts use 0.05-beat steps and linear interpolation between steps; cold and phase use the current beat directly. Inner ice above 10⁻⁹ water units triggers the warning; smaller values are numerical zero, not a biological safety threshold. Four accounts use balanced rounding to 0.1 units; small-amount bounds cannot be added as exact numbers. Next mark means the next multiple of 10, not necessarily an advance of 10 beats. Opening explanations or hiding the page pauses; becoming visible does not auto-resume. Language/mode changes retain existing expanded panels and playback."
  ],
  "formulaText": [
    "本頁全部係數自訂、未校準。初始水格：內液60、外液40，總100。P=保護格/10；c=min(終點,速度×拍)。每0.05拍：外冰份額q=clamp((c−10−8P)/(90+12P),0,0.95)。目標內水=60[1−(0.7−0.3P)q]；移出量=min(內液,max(0,內水−目標內水)×[1−exp(−0.14×0.05)])。水只從內液移到外液；外液／外冰依q重新分配。內冰門檻h=35+30P+0.3×移出水；新增內冰=內液×[1−exp(−0.02×max(0,c−h)×0.05)]。新增內冰由內液扣除，不再融化；本頁不模擬回暖或修復。總水永遠100格。0..120拍為示例時間，不是秒／小時；120拍停止且保留。改參數暫停、依同一拍重算替代情境，不是在真細胞半途加入保護物質。對照均在120拍，速度不同則到終點與停留時長也不同，兩者均明示。 顯示：水帳於相鄰步間線性插值，寒冷c直接按目前t計算，c=0為未變冷、0<c<終點為正在變冷，其餘為終點停留。保留的軌跡含不可改寫的參數資料；缺少此資料的舊序列化陣列只能插值近似寒冷。警示ii>10⁻⁹；顯示小量以<0.1／<0.01標記，拍數接近120仍未完成時顯>119.9。四欄以最大餘數平衡圓整到總100.0；它們不是各自獨立四捨五入。每組終點數值快取上限64筆，不儲存翻譯文字，不改模型計算。",
    "All coefficients are invented, unfitted teaching rules. Start: 60 inner-liquid and 40 outer-liquid units, total 100. P=protection/10; c=min(endpoint,rate×beat). Every 0.05 beat: outer ice fraction q=clamp((c−10−8P)/(90+12P),0,0.95). Desired inner water=60[1−(0.7−0.3P)q]. Outflow=min(inner liquid,max(0,inner total−desired)×[1−exp(−0.14×0.05)]). Transfer only inner liquid to outer liquid; repartition outer water by q. Inner-ice threshold h=35+30P+0.3×outflow accumulated. New inner ice=inner liquid×[1−exp(−0.02×max(0,c−h)×0.05)], deducted from inner liquid. No thawing or repair. Total remains 100 units. 0..120 beats are abstract time, not seconds/hours. Stop and retain at 120. Parameter changes pause and recompute the alternative at the same beat, not add real protection mid-freeze. Comparisons share 120 beats; rates also change arrival and holding duration, both stated. Display: interpolate water accounts between adjacent steps; compute cold c directly at current t. Phase: c=0 means no cooling, 0<c<endpoint cooling, otherwise holding. Trajectories retain immutable parameter context; old serialized arrays without it can only interpolate approximate cold. Warning: ii>10⁻⁹. Small amounts use <0.1/<0.01; unfinished times close to 120 use >119.9. Largest-remainder rounding balances four accounts to 100.0, rather than rounding each independently. Endpoint numeric cache holds at most 64 entries, stores no translated text and changes no model calculation."
  ],
  "formula": "本頁全部係數自訂、未校準。初始水格：內液60、外液40，總100。P=保護格/10；c=min(終點,速度×拍)。每0.05拍：外冰份額q=clamp((c−10−8P)/(90+12P),0,0.95)。目標內水=60[1−(0.7−0.3P)q]；移出量=min(內液,max(0,內水−目標內水)×[1−exp(−0.14×0.05)])。水只從內液移到外液；外液／外冰依q重新分配。內冰門檻h=35+30P+0.3×移出水；新增內冰=內液×[1−exp(−0.02×max(0,c−h)×0.05)]。新增內冰由內液扣除，不再融化；本頁不模擬回暖或修復。總水永遠100格。0..120拍為示例時間，不是秒／小時；120拍停止且保留。改參數暫停、依同一拍重算替代情境，不是在真細胞半途加入保護物質。對照均在120拍，速度不同則到終點與停留時長也不同，兩者均明示。 顯示：水帳於相鄰步間線性插值，寒冷c直接按目前t計算，c=0為未變冷、0<c<終點為正在變冷，其餘為終點停留。保留的軌跡含不可改寫的參數資料；缺少此資料的舊序列化陣列只能插值近似寒冷。警示ii>10⁻⁹；顯示小量以<0.1／<0.01標記，拍數接近120仍未完成時顯>119.9。四欄以最大餘數平衡圓整到總100.0；它們不是各自獨立四捨五入。每組終點數值快取上限64筆，不儲存翻譯文字，不改模型計算。\nAll coefficients are invented, unfitted teaching rules. Start: 60 inner-liquid and 40 outer-liquid units, total 100. P=protection/10; c=min(endpoint,rate×beat). Every 0.05 beat: outer ice fraction q=clamp((c−10−8P)/(90+12P),0,0.95). Desired inner water=60[1−(0.7−0.3P)q]. Outflow=min(inner liquid,max(0,inner total−desired)×[1−exp(−0.14×0.05)]). Transfer only inner liquid to outer liquid; repartition outer water by q. Inner-ice threshold h=35+30P+0.3×outflow accumulated. New inner ice=inner liquid×[1−exp(−0.02×max(0,c−h)×0.05)], deducted from inner liquid. No thawing or repair. Total remains 100 units. 0..120 beats are abstract time, not seconds/hours. Stop and retain at 120. Parameter changes pause and recompute the alternative at the same beat, not add real protection mid-freeze. Comparisons share 120 beats; rates also change arrival and holding duration, both stated. Display: interpolate water accounts between adjacent steps; compute cold c directly at current t. Phase: c=0 means no cooling, 0<c<endpoint cooling, otherwise holding. Trajectories retain immutable parameter context; old serialized arrays without it can only interpolate approximate cold. Warning: ii>10⁻⁹. Small amounts use <0.1/<0.01; unfinished times close to 120 use >119.9. Largest-remainder rounding balances four accounts to 100.0, rather than rounding each independently. Endpoint numeric cache holds at most 64 entries, stores no translated text and changes no model calculation.",
  "description": [
    "調寒冷速度與示例保護量，觀察林蛙概念細胞內外的液水與冰、水量守恆和保護限制；繁中英文互動教具，不推算存活。",
    "Adjust toy cooling speed and protection, observe liquid water and ice inside and outside a wood frog cell, conserved water and limited protection. A bilingual teaching model, not a survival forecast."
  ],
  "keywords": "林蛙,細胞外結冰,細胞內結冰,葡萄糖,尿素,水遷移,耐凍,wood frog,Rana sylvatica,extracellular ice,intracellular ice,glucose,urea,water transport,freeze tolerance",
  "date": "2026-10-04",
  "icon": "🧊",
  "dateModified": "2026-10-11"
};
