window.CONFIG={
  "id": "D09",
  "path": "leafmeal",
  "status": "complete",
  "title": [
    "無尾熊葉子餐：三本小帳",
    "Koala leaves: three small ledgers"
  ],
  "question": [
    "能量多的葉子，其他帳也更好嗎？",
    "Does more leaf energy improve every ledger?"
  ],
  "hint": [
    "先加一份B，看能量和處理點一起變；再加C比較葉水。",
    "Add one B: energy and processing points change. Add C to compare leaf water."
  ],
  "controls": [
    {
      "key": "a",
      "label": [
        "A 葉份數",
        "A leaf portions"
      ],
      "min": 0,
      "max": 8,
      "step": 1,
      "value": 2,
      "unit": "份 / portions"
    },
    {
      "key": "b",
      "label": [
        "B 葉份數",
        "B leaf portions"
      ],
      "min": 0,
      "max": 8,
      "step": 1,
      "value": 1,
      "unit": "份 / portions"
    },
    {
      "key": "c",
      "label": [
        "C 葉份數",
        "C leaf portions"
      ],
      "min": 0,
      "max": 8,
      "step": 1,
      "value": 0,
      "unit": "份 / portions"
    },
    {
      "key": "drink",
      "label": [
        "另外喝的水",
        "Extra drinking water"
      ],
      "min": 0,
      "max": 200,
      "step": 25,
      "value": 0,
      "unit": "mL"
    }
  ],
  "defaults": {
    "a": 2,
    "b": 1,
    "c": 0,
    "drink": 0
  },
  "leaves": [
    {
      "key": "a",
      "title": [
        "A 少負荷",
        "A Low load"
      ],
      "gross": 60,
      "absorb": 60,
      "water": 40,
      "load": 1
    },
    {
      "key": "b",
      "title": [
        "B 能量多",
        "B More energy"
      ],
      "gross": 120,
      "absorb": 65,
      "water": 15,
      "load": 4
    },
    {
      "key": "c",
      "title": [
        "C 水最多",
        "C Most water"
      ],
      "gross": 80,
      "absorb": 35,
      "water": 65,
      "load": 2
    }
  ],
  "action": [
    "看能量分流",
    "View energy flow"
  ],
  "mission": [
    "吸收的能量，能全部留下嗎？",
    "Can all absorbed energy be kept?"
  ],
  "options": [
    [
      "還要扣處理成本",
      "Processing also costs energy"
    ],
    [
      "全部留下",
      "Keep it all"
    ]
  ],
  "answer": 0,
  "reason": [
    "食物總能量有未吸收部分；吸收後，示例還另扣處理成本。水與處理點分帳，三本帳不能互相混加，也不能直接當健康評分。",
    "Some gross energy is not absorbed. Processing is then paid from absorbed energy. Water and processing points are separate ledgers, not a health score."
  ],
  "comparisons": [
    {
      "label": [
        "B 葉1／4份",
        "B leaves1 /4"
      ],
      "key": "b",
      "a": 1,
      "b": 4,
      "base": {
        "a": 2,
        "c": 0,
        "drink": 0
      }
    },
    {
      "label": [
        "C 葉0／3份",
        "C leaves0 /3"
      ],
      "key": "c",
      "a": 0,
      "b": 3,
      "base": {
        "a": 2,
        "b": 1,
        "drink": 0
      }
    },
    {
      "label": [
        "飲水0／150mL",
        "Drink0 /150mL"
      ],
      "key": "drink",
      "a": 0,
      "b": 150,
      "base": {
        "a": 2,
        "b": 1,
        "c": 0
      }
    }
  ],
  "limit": [
    "三種合成葉片，不是真尤加利品種、測量營養表或無尾熊餵養建議。每份無真克數：A總熱值60kJ、吸收60%、葉水40mL、處理負荷1點；B120kJ、65%、15mL、4點；C80kJ、35%、65mL、2點。全部數字自訂未校準；處理點只是教具單位，不是真mg毒物或安全門檻。份數各0–8，飲水0–200mL。食物總熱值=Σ份數×熱值；吸收=Σ總熱值×吸收率；未吸收=總熱值−吸收；處理成本=2kJ／點×總處理點；可用能量=吸收−處理成本。不把未吸收重複扣兩次。水=葉水+飲水，飲水不加食物能量／處理負荷，未推算水需求、吸水率或脫水。此可用收益未扣基礎代謝、活動、保溫、成長／生殖，不能當全天結餘或健康判斷；較少熱量也不等於健康，更多收益可能伴隨更高處理負荷。不同次生物質處理機制和微生物群未模擬，不用所有毒物共用閾值。線性即時帳不模擬真消化時程、毒性、適應或營養全貌。分流箭頭2畫面秒為示意，非消化需2秒；任何時段均顯示整份餐的值。原創SVG；桌機可從三個葉按鈕拖到餐盤，每次加1份，點擊／Enter亦可加入；手機以點擊與滑桿操作，畫布允許垂直原生捲動。超過8份拒絕並保留狀態；拖盤外不加，模式／語言保留餐與進度。重設回A2 B1 C0、飲水0。EP207官方Apple單集1000753703670、集名及Firstory10分14秒已核對；2026-10-10核對官方Apple單集封面並顯示；精確時長沿用已核對的Firstory單集資料。未測真音訊／帳戶權益，無獨立GA。 同值、夾限後同值、空值與非有限輸入保留餐盤／進度／保存；語言與模式保留來源、公式及成分表展開。完成／示範時計固定2畫面秒，完成逐步明示從頭1/8分流。空盤無食物箭頭，已加入餐盤的游標在0點暫停亦保留。提示按各葉實際份數與上限給可做下一步，不將少吃、多喝或多收益當健康判斷。",
    "Three synthetic leaves, not real eucalypt species, measured nutrients or koala feeding advice. Portions have no real grams: A gross60kJ, absorption60%, leaf water40mL, processing1point; B120kJ,65%,15mL,4points; C80kJ,35%,65mL,2points. All values uncalibrated. Points are teaching units, not toxin mg or a safety threshold. Each count0–8; drinking water0–200mL. Gross=Σcount×energy; absorbed=Σgross×absorption; unabsorbed=gross−absorbed; processing cost=2kJ/point×total load; usable energy=absorbed−processing cost. Unabsorbed energy is not subtracted twice. Water=leaf water+drinking; drinking adds no food energy or processing load. No water requirement, uptake or dehydration predicted. Usable yield omits basal metabolism, activity, heating, growth and reproduction: not a full-day surplus or health verdict. Less energy is not automatically healthy; more yield may carry more processing load. No shared toxin threshold, real digestion timing, toxicity, adaptation or microbiome simulation.2screen seconds animate schematic arrows, not2seconds of digestion. All stages show the full meal. Original SVG. Desktop drag a leaf button into the bowl to add1; click/Enter also add. Mobile uses taps/sliders with native vertical scrolling. Above8 is refused with state preserved; outside-bowl drops add nothing. Mode/language retain meal and progress. Reset to A2 B1 C0 water0. Official AppleEP207 ID1000753703670/title and Firstory10min14sec verified. Official Apple episode artwork visually verified2026-10-10 and shown; exact duration retains verified Firstory episode evidence. Real audio/account rights untested. No GA. Same/capped-noop/blank/nonfinite inputs preserve meal/progress/cards; language/mode preserve sources, formulas and leaf-traits openness. Finish/demo clock is exactly2display seconds; completed Step names a1/8flow restart. No food arrow for an empty bowl; a populated bowl keeps its cursor even paused at0. Hints use actual portions/caps and feasible next actions, without judging health from less food, more water or yield."
  ],
  "formula": "All traits invented; portions have no real grams\nA:60kJ,60% absorbed,40mL water,1load point\nB:120kJ,65%,15mL,4points\nC:80kJ,35%,65mL,2points\nGross=Σcount*energy; absorbed=Σcount*energy*absorption\nUnabsorbed=gross-absorbed; processing=2kJ/point*Σcount*load\nUsable=absorbed-processing; not a whole-day surplus\nWater=Σcount*leafwater+drinking; separate from energy\nNo real toxin dose, water requirement or health verdict\nEquivalent independent coefficients:usable=34a+70b+24c; unabsorbed=24a+42b+52c\n2display seconds is schematic;Step=1/8flow, all stages keep full-meal numbers\nClamp exact2s; completed Step restart named, demo clock2s\nSame/invalid/capped values and trait/source/formula openness preserve state\nFull saved comparisons are independent of replay; load singular point localized",
  "source": [
    "https://researchportalplus.anu.edu.au/en/publications/eucalyptus-foliar-chemistry-explains-selective-feeding-by-koalas/",
    "Moore et al. (2005) · Foliar chemistry and koala feeding"
  ],
  "extraSources": [
    [
      "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0216964",
      "Mella et al. (2019) · Koalas use free water"
    ]
  ],
  "ep": "207",
  "episodeTitle": "〈EP.207｜無尾熊：演化史上的「極簡主義者」，還是深藏不露的生存大師？〉",
  "date": "2026-10-10",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277?i=1000753703670",
    "episodeId": "1000753703670",
    "source": "https://open.firstory.fm/story/cmmfmxj0s0wae01scdnsv61gf",
    "duration": "10 分 14 秒",
    "durationEn": "10 min 14 sec",
    "durationIso": "PT10M14S",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/45/31/bf/4531bfaa-940b-24fb-9a5c-e073c7d36dd0/mza_6184587057718514635.jpg/960x960bb-60.jpg",
    "coverAvailable": true,
    "verifiedOn": "2026-10-10",
    "coverStatus": "Official Apple EP207 JPEG960w observed, downloaded and visually checked 2026-10-10. Exact10:14 retained from official Firstory evidence dated2026-10-07; current Apple rounds to10min. Audio/account rights untested.",
    "coverFile": "podcast/ep207.jpg",
    "artworkVisualChecked": true,
    "urlVerified": true
  },
  "icon": "🐨",
  "keywords": "無尾熊,尤加利,葉食,能量吸收,未吸收,處理成本,葉水,飲水,koala,eucalyptus,folivory,absorption,processing cost,leaf water,drinking,科學好好聽,science good listen",
  "description": [
    "選合成葉片、加份數和飲水，分開看可用能量、水與處理負荷；未吸收能量和處理成本各自入帳，不推算健康或真毒性。",
    "Add synthetic leaves and drinking water; compare usable energy, water and processing load. Separate unabsorbed energy from handling cost without health or toxin predictions."
  ],
  "formulaZh": "全部葉片數字自訂未校準；每份無真克數、非真餵養量\nA：60kJ、吸收60%、葉水40mL、負荷1點；吸收36、處理2、可用34kJ\nB：120kJ、65%、15mL、4點；吸收78、處理8、可用70kJ\nC：80kJ、35%、65mL、2點；吸收28、處理4、可用24kJ\n總熱值＝60a+120b+80c；吸收＝36a+78b+28c\n未吸收＝24a+42b+52c；負荷＝a+4b+2c點\n處理成本＝2×負荷kJ；可用＝34a+70b+24c＝吸收−處理\n核帳：總熱值＝未吸收+處理+可用，不重扣未吸收\n葉水＝40a+15b+65c mL；總水＝葉水+另外飲水\n飲水只進水帳，不改能量／負荷；不推算吸水率、需求或脫水\n可用收益沒有扣基礎代謝、活動、保溫、生長等，不是全天結餘／健康評分\n每種0–8份，飲水0–200mL（UI25mL級距）；上限拒絕或同值保留\n2畫面秒只是分流，逐步1/8；整餐數值各階段相同，無真消化秒數\n完成後逐步從頭有明示；示範時計2秒；同值／空值／非有限值不重置\n餐盤、進度、對照、來源公式與葉片成分展開隨語言／模式保留"
};
