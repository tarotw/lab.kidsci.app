window.CONFIG={
  "id": "G10",
  "path": "wolfcare",
  "status": "complete",
  "controller": "wolfcare.js",
  "extras": [
    "wolfcare-model.js",
    "wolfcare.css",
    "wolfcare.js"
  ],
  "title": [
    "狼蛛媽媽的背包：照顧也要付成本",
    "Wolf spider care: two resource accounts"
  ],
  "question": [
    "多背幾隻小蜘蛛，媽媽與孩子的帳會怎麼變？",
    "What changes for mother and young when she carries more spiderlings?"
  ],
  "hint": [
    "先改幼蛛數，再按「走一格」；看媽媽花費與每隻幼蛛剩餘。",
    "Change the young count, then tap “One slot”; inspect mother’s costs and each young’s reserve."
  ],
  "defaults": {
    "count": 4,
    "forage": 2,
    "hazard": 2,
    "food": 6,
    "strategy": 0
  },
  "controls": [
    {
      "key": "count",
      "label": [
        "示意幼蛛數",
        "Schematic young count"
      ],
      "min": 0,
      "max": 12,
      "step": 1,
      "value": 4,
      "units": [
        "隻示意幼蛛",
        "schematic young"
      ],
      "unit": "隻示意幼蛛 / schematic young"
    },
    {
      "key": "forage",
      "label": [
        "每回合覓食份量",
        "Foraging share per round"
      ],
      "min": 0,
      "max": 4,
      "step": 1,
      "value": 2,
      "units": [
        "格／4格",
        "slots / 4 slots"
      ],
      "unit": "格／4格 / slots / 4 slots"
    },
    {
      "key": "hazard",
      "label": [
        "環境危險刻度",
        "Environmental hazard"
      ],
      "min": 0,
      "max": 4,
      "step": 1,
      "value": 2,
      "units": [
        "自訂刻度",
        "toy scale"
      ],
      "unit": "自訂刻度 / toy scale"
    },
    {
      "key": "food",
      "label": [
        "全覓食回合食物",
        "Food per full foraging round"
      ],
      "min": 0,
      "max": 8,
      "step": 1,
      "value": 6,
      "units": [
        "母體資源點",
        "maternal resource points"
      ],
      "unit": "母體資源點 / maternal resource points"
    }
  ],
  "mission": [
    "最省媽媽資源的安排，一定最好嗎？",
    "Is the cheapest plan for mother always best?"
  ],
  "options": [
    [
      "不一定；也要看幼蛛花費與暴露",
      "No; also inspect young costs and exposure"
    ],
    [
      "是；只看媽媽剩幾點就夠",
      "Yes; only mother’s reserve matters"
    ]
  ],
  "answer": 0,
  "reason": [
    "帶幼需照顧與搬運點；分散讓幼蛛另花活動點，暴露也可能增加。危險設0時暴露為0，但資源花費仍在。這些自訂點不能判斷真生物存活。",
    "Carrying costs care and transport points. Dispersal adds young activity costs and can raise exposure. Zero hazard removes exposure, not resource costs. Invented points cannot predict real survival."
  ],
  "comparisons": [],
  "ep": "s46",
  "episodeTitle": "〈VIP｜動物母親專輯(7)｜密集恐懼症的終極保母：狼蛛媽媽的超級育兒術｜SP.46〉",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/vip-%E5%8B%95%E7%89%A9%E6%AF%8D%E8%A6%AA%E5%B0%88%E8%BC%AF-7-%E5%AF%86%E9%9B%86%E6%81%90%E6%87%BC%E7%97%87%E7%9A%84%E7%B5%82%E6%A5%B5%E4%BF%9D%E6%AF%8D-%E7%8B%BC%E8%9B%9B%E5%AA%BD%E5%AA%BD%E7%9A%84%E8%B6%85%E7%B4%9A%E8%82%B2%E5%85%92%E8%A1%93-sp-46/id1812447277?i=1000767355664",
    "episodeId": "1000767355664",
    "duration": "約14分鐘",
    "durationEn": "About 14 minutes",
    "subscribersOnly": true,
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource221/v4/26/8b/ec/268bec4d-e752-ecba-8051-d24ff92f14b8/93327ffa-b2ba-47b8-85fa-0721f4c11709.jpg/500x500bb.webp",
    "coverAvailable": true,
    "coverFile": "podcast-covers/g10-official-20261012.webp",
    "coverFormat": "webp",
    "verifiedOn": "2026-10-12",
    "verifiedStorefront": "tw",
    "TaiwanEntitlementVerified": false,
    "coverStatus": "Official current Taiwanese detail page title/subscriber label/14minutes and artwork viewed via Computer Use. Exact seconds, account entitlement and audio untested."
  },
  "source": [
    "https://www.sciencedirect.com/science/article/abs/pii/S0022191016300269",
    "Ruhland等2016：特定狼蛛母體能量；只讀索引摘要／導論",
    "Ruhland et al. 2016: maternal energy in one species; indexed abstract/introduction only"
  ],
  "extraSources": [
    [
      "https://api.naturalis.fcnym.unlp.edu.ar/server/api/core/bitstreams/70da390b-365e-49ee-a9a6-cb8a80c5bbdc/content",
      "Trabalon等2017：卵囊內發育與卵黃儲備",
      "Trabalon et al. 2017: development and yolk reserves inside the egg sac"
    ],
    [
      "https://www.sciencedirect.com/science/article/pii/S0003347223002476",
      "2025卵囊負重研究：不能推成所有負重必然變慢；索引摘要",
      "2025 egg-sac load study: no universal slower-load rule; indexed abstract"
    ]
  ],
  "description": [
    "調示意幼蛛數、覓食份量與危險，比較帶幼、假想暫留與分散；核對母蛛與幼蛛各自資源帳，不推算真速度或存活率。",
    "Vary a schematic brood, foraging and hazard. Compare carrying with hypothetical caching and dispersal; trace separate resource accounts without predicting speed or survival."
  ],
  "keywords": "狼蛛,幼蛛,親代照顧,育幼,母蛛,卵黃,能量分配,能量帳,負重,取捨,wolf spider,spiderling,parental care,Pardosa,maternal care,yolk,resource budget,carrying,trade-off",
  "date": "2026-10-04",
  "icon": "🕷️",
  "limit": [
    "以Pardosa狼蛛育幼研究為背景，幼體已出卵囊；物種、發育期、取食與移動會不同，不將所有狼蛛概括成背幼必變慢。暫留與提前分散是假想對照，非已核對自然策略或飼養指引。12回合、4格／回合、0–12幼蛛、母體72點、每隻幼體12點、全部支出與暴露係數為未校準教學假設；點不是焦耳、機率或死亡率，回合不是天。食物只進母體帳；幼體有自有儲備、未模擬幼體覓食／母體餵食／成長／死亡／成熟；幼體符號永不因暴露自動消失。數量0不顯示每隻虛構儲備。搬運成本不轉成真重量或速度。相同時間與食物輸入比較三策略，母體暴露系數不因策略暗改。改設定重算同一格是假設比較，非改寫真生物過去或救治。主讀數四捨五入至兩位，規則與帳內保留精確分數。SP46官方單集ID1000767355664、約14分鐘與封面已核對；精確秒數、帳號收聽權益及實際音訊未測。 零幼蛛也有48格觀察上限，母體食物只由覓食格產生；不承諾所有安排都有搬運費。多幼蛛對照最多12隻，按實際增加0–4隻標示；相同設定卡明示相同。頁面隱藏暫停，可見不自動續播。",
    "Context is research on Pardosa wolf spider care after young leave the egg sac. Species, stage, feeding and movement differ; carrying does not universally imply slower movement. Caching and early dispersal are hypothetical contrasts, not verified natural strategies or care instructions. Twelve rounds of four slots, 0–12 young, 72 maternal points, 12 points per young and all cost/exposure coefficients are unfitted teaching assumptions. Points are not joules, probabilities or mortality; rounds are not days. Food enters only the maternal account. Young use their own reserves; young foraging, maternal feeding, growth, death and maturity are omitted. Symbols never disappear due to exposure. Zero young gives no per-young reserve. Costs do not imply measured mass or speed. Strategies compare at equal time and food input; maternal exposure coefficients stay equal. Changing settings recomputes the same slot as a hypothetical comparison. Main readings round to two decimals; rules and internal ledgers retain exact fractions. Official SP46 ID1000767355664, about14minutes and artwork verified; exact seconds, account access and audio untested. Zero young still has the 48-slot observation limit; maternal food comes only from foraging slots. Not every plan has carrying costs. Brood comparisons stop at12 and label the actual0–4increase; identical plans are identified. Hiding the page pauses; becoming visible does not auto-resume."
  ],
  "formula": "Mother: 72 + food = maintenance + care + carrying + placement + reserve. Young: 12*n = maintenance + dispersal activity + reserve. Each round has 4 slots; first f forage.",
  "formulaText": [
    "全部自訂、未校準。12回合×4格。每回合前f格覓食，其他休息。\n媽媽：起始72；每格維持1/2；每覓食格吃入p/4。\n帶幼：每格照顧n/64；覓食格搬運n/16。\n假想暫留：非覓食格照顧n/64；首格安置n/8。\n假想分散：首格安置n/4，不另收照顧或搬運。\n幼蛛：每隻起始12、每格維持1/8；分散每格再花1/8活動點。母體食物不轉給幼體。\n幼體總暴露：帶幼覓食hn/8、休息hn/16；暫留覓食hn/4、回旁hn/16；分散每格hn/4。\n媽媽暴露：覓食h/4、休息h/16，各策略相同。\n兩本帳各自守恆；暴露不扣資源、不代表機率或死亡。n=0無幼體帳、h=0暴露0。",
    "All invented and unfitted. 12 rounds × 4 slots. First f slots forage; the rest are rest.\nMother: initial 72; maintenance 1/2 per slot; food p/4 per foraging slot.\nCarry: care n/64 per slot; carrying n/16 per foraging slot.\nHypothetical cache: care n/64 in non-foraging slots; placement n/8 once in the first slot.\nHypothetical disperse: placement n/4 once in the first slot; no care/carrying costs.\nYoung: initial 12 each; maintenance 1/8 each per slot; dispersal adds 1/8 activity each per slot. Maternal food does not transfer to young.\nTotal young exposure: carry hn/8 foraging, hn/16 rest; cache hn/4 foraging, hn/16 with mother; disperse hn/4 each slot.\nMother exposure: h/4 foraging, h/16 rest, equal across strategies.\nEach resource account conserves separately. Exposure is not a resource deduction, probability or death. n=0 gives no young account; h=0 gives zero exposure."
  ],
  "dateModified": "2026-10-12"
};
