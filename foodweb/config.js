window.CONFIG={
  "id": "H01",
  "path": "foodweb",
  "status": "complete",
  "controller": "foodweb.js",
  "extras": [
    "foodweb-model.js",
    "foodweb.css",
    "foodweb.js"
  ],
  "title": [
    "海洋食物網的能量預算",
    "Ocean food web: follow the energy"
  ],
  "question": [
    "切斷一條路，食物能量去哪裡？",
    "Cut one link. Where does food energy go?"
  ],
  "hint": [
    "先關掉「磷蝦→鯡魚」，看鯡魚還能不能從另一條路吃到能量。",
    "Turn off krill → herring. Can herring still receive energy along another path?"
  ],
  "defaults": {
    "input": 1000,
    "process": 50,
    "eff": {
      "krill": 20,
      "herring": 20,
      "cod": 20,
      "microbes": 20
    },
    "links": {
      "pk": true,
      "ph": true,
      "kh": true,
      "hc": true
    }
  },
  "controls": [],
  "mission": [
    "分解者能把散掉的熱變回食物嗎？",
    "Can decomposers turn dispersed heat back into food?"
  ],
  "options": [
    [
      "不能；養分可再利用，新的食物能量仍需來源",
      "No; nutrients can be reused, but new food energy needs a source"
    ],
    [
      "可以；能量會完整循環回來",
      "Yes; all energy cycles back"
    ]
  ],
  "answer": 0,
  "reason": [
    "分解者使用有機殘餘中的化學能，也會散熱。礦化養分能再利用，但熱不會在這個食物網中變回食物能量。",
    "Decomposers use chemical energy in organic remains and also release heat. Mineral nutrients can be reused; dispersed heat does not become food energy again in this web."
  ],
  "comparisons": [],
  "ep": "179",
  "episodeTitle": "生存遊戲：為什麼獅子比斑馬少？",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://www.noaa.gov/education/resource-collections/marine-life/aquatic-food-webs",
    "NOAA：水域食物網與分解",
    "NOAA: aquatic food webs and decomposition"
  ],
  "extraSources": [
    [
      "https://repository.library.noaa.gov/view/noaa/57926/noaa_57926_DS1.pdf",
      "Eddy等：海洋能量轉移效率綜述（2021）",
      "Eddy et al.: marine transfer efficiency review (2021)"
    ]
  ],
  "description": [
    "接通浮游植物、磷蝦與魚的食物連結，調整各消費者與分解者的保留比例，核對新生物量、有機殘餘與散熱帳；區分能量流動和養分循環。",
    "Connect plankton and fish feeding links, adjust consumer and decomposer retention, and balance biomass, organic remains and heat. Distinguish energy flow from nutrient recycling."
  ],
  "keywords": "海洋食物網,能量流動,養分循環,磷蝦,鯡魚,鱈魚,浮游植物,分解者,生長效率,能量守恆,marine food web,energy flow,nutrient cycling,krill,herring,cod,phytoplankton,decomposers,growth efficiency,energy conservation",
  "date": "2026-10-04",
  "icon": "🕸️",
  "limit": [
    "這是一次新生產的食物能量分配，不是族群數量或真實海域預測。起點已是浮游植物透過光合作用儲存的化學能，不是照到海面的全部陽光。四條攝食比例固定為50%、20%、60%、50%；切斷後原份量留在原節點，不自動改吃別的食物。未被吃的生物量保留，不自動當死亡。三個消費者固定20%攝食能量進入未同化有機殘餘，其餘分為新生物量與呼吸等散熱；0–80%滑桿是攝入食物中留為新生物量的比例（總生長效率），不是跨完整營養級的普遍效率。分解者處理指定比例的殘餘，分為自身新生物量與散熱；剩餘殘餘仍入帳。所有比例未校準，0%與80%是數學邊界，不是正常生理宣稱。微生物再被攝食、死亡、沉降、遷入遷出與時間變化未建模。養分虛線只示意礦化後再利用，沒有計算氮磷數量，也不把熱換成養分或加回能量。魚的大小與圖塊面積不代表数量、體重或能量比例。EP179官方單集網址、時長與封面尚未核對。 提示依實際流量、供食連結與保留比例更新，不承諾關閉或零生產的下游一起改變。主帳各項顯示到0.01 kJ；顯示數相加不恰等於顯示輸入時用「≈」，不改原始能量去向。相同對照明示相同。",
    "One pulse of newly produced food energy, not a population or real-ocean forecast. Input is chemical energy already stored by phytoplankton through photosynthesis, not total incident sunlight. Four feeding fractions are fixed at50%,20%,60%,50%; disabled shares stay with their source, without diet switching. Uneaten biomass stays stored, not automatically dead. Each animal sends20% of intake to unassimilated organic remains; the rest becomes new biomass or respiration-related heat. The0–80% slider is new biomass divided by ingestion (gross growth efficiency), not a universal whole-trophic-level efficiency. Microbes process a chosen fraction of remains into microbial biomass and heat; unprocessed remains stay accounted for. All fractions are unfitted;0% and80% are mathematical boundaries, not normal physiology. Microbial grazing, death, sinking, migration and time dynamics are omitted. The nutrient dotted path is qualitative mineralization and reuse, with no nitrogen/phosphorus budget; heat is never converted to nutrients or credited back as food energy. Animal sizes and boxes do not encode abundance, mass or energy. Official EP179 metadata unverified. Prompts follow actual flows, feeding links and retention; disabled or zero-production downstream paths are not promised a response. Main readings round to 0.01 kJ; if displayed terms do not sum exactly to displayed input, “≈” marks approximation without changing energy allocation. Identical comparisons are identified."
  ],
  "formula": "Animal intake = new biomass + 0.2*intake organic remains + heat; new biomass = intake*eff/100. Each enabled edge takes its fixed share of source production. Microbes: processed remains = microbial biomass + heat. Input = all remaining biomass + unprocessed remains + total heat.",
  "formulaText": [
    "每條開啟箭頭＝來源新生物量能量×固定攝食份額。關閉時＝0；原份額留在來源。\n動物：新生物量＝吃入×設定%；有機殘餘＝吃入×20%；散熱＝吃入×80%−新生物量。\n節點剩餘＝新生物量−所有流出箭頭。不要把中途新生產量和剩餘量重複加總。\n分解者處理量＝有機殘餘總量×處理%；新生物量＝處理量×保留%；散熱＝處理量−新生物量。\n起點輸入＝全部生物剩餘＋未處理有機殘餘＋全部散熱。\n單位kJ（千焦）；例子未校準，無時間或動物數量換算。",
    "Enabled flow = source production energy × fixed feeding share; disabled =0 and that share stays at source.\nAnimals: production=intake×eff%; organic remains=intake×20%; heat=intake×80%−production.\nRemaining biomass=production−all outgoing flows. Never add intermediate production again to final stores.\nMicrobial processing=total remains×process%; production=processed×retention%; heat=processed−production.\nInput=all remaining biomass+unprocessed remains+all heat.\nUnits:kJ(kilojoules), unfitted example; no time or animal-count conversion."
  ],
  "dateModified": "2026-10-12"
};
