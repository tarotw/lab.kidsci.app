window.CONFIG={
  "id": "H03",
  "path": "birdtime",
  "status": "complete",
  "controller": "birdtime.js",
  "extras": [
    "birdtime-model.js",
    "birdtime.css",
    "birdtime.js"
  ],
  "title": [
    "候鳥與食物高峰",
    "Birds and the food peak"
  ],
  "question": [
    "鳥到了，毛毛蟲也正多嗎？",
    "Do birds and caterpillars arrive at the right time?"
  ],
  "hint": [
    "先把溫差調成＋3°C，看食物高峰往前移；再把抵達日調早，試著找回重疊。",
    "Try +3°C to move the food peak earlier. Then move arrival earlier to recover overlap."
  ],
  "defaults": {
    "temp": 0,
    "arrival": 40,
    "shift": 0
  },
  "controls": [],
  "mission": [
    "兩條曲線一起晚14天，重疊會改變嗎？",
    "If both curves move 14 days later, does overlap change?"
  ],
  "options": [
    [
      "不變；它們之間的時間差相同",
      "No; their relative timing stays the same"
    ],
    [
      "一定減少；晚就是比較差",
      "Yes; later must be worse"
    ]
  ],
  "answer": 0,
  "reason": [
    "本例只看相對時序，兩條曲線形狀與總量不變，且沒有被圖框截掉；一起平移不改重疊。這不代表真實晚繁殖沒有其他影響。",
    "This model depends on relative timing. Shapes and totals stay fixed and fully on the graph, so a shared shift preserves overlap. Real late breeding may have other effects."
  ],
  "comparisons": [],
  "ep": "192",
  "episodeTitle": "〈EP.192｜鳥類的生活史：從巨蛋奇觀到萬里長征〉",
  "podcast": {
    "verified": true,
    "urlVerified": true,
    "provider": "Firstory",
    "url": "https://open.firstory.fm/story/cmdpx4cuu00dq01xl06ck02rx",
    "source": "https://open.firstory.fm/story/cmdpx4cuu00dq01xl06ck02rx",
    "title": "〈EP.192｜鳥類的生活史：從巨蛋奇觀到萬里長征〉",
    "durationSeconds": 655,
    "duration": "10 分 55 秒",
    "durationEn": "10 min 55 sec",
    "durationIso": "PT10M55S",
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/llm3fpL8HFAQUlMjtigPM.jpg",
    "coverAvailable": true,
    "coverFile": "podcast/ep192.jpg",
    "artworkVisualChecked": true,
    "verifiedOn": "2026-10-08",
    "publishedAt": "Wed, 04 Feb 2026 21:18:46 GMT",
    "evidenceBasis": "Current saved publisher RSS + exact full public Firstory episode page + matching artwork bytes and pixels. No Apple ID, entitlement or audio inference."
  },
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/16672969/",
    "Both等（2006）：荷蘭斑姬鶲研究摘要",
    "Both et al. (2006): Dutch pied flycatcher study abstract"
  ],
  "extraSources": [
    [
      "https://www.bto.org/our-work/science/publications/papers/sensitivity-breeding-songbirds-change-seasonal-timing",
      "BTO／Franks等（2017）：錯位與族群變化的界線",
      "BTO / Franks et al. (2017): limits of mismatch explanations"
    ]
  ],
  "description": [
    "調整春季溫差與候鳥抵達日，觀察昆蟲供給和育雛需求的時間重疊；一起平移曲線，檢查相對時間差。示例曲線不預測存活率。",
    "Change spring temperature and bird arrival to explore overlap between insect supply and chick demand. Shift both curves to test relative timing. These example curves do not predict survival."
  ],
  "keywords": "候鳥,物候,食物高峰,育雛,昆蟲,毛毛蟲,遷徙,春季溫度,供需重疊,時間錯位,bird migration,phenology,food peak,nestling demand,caterpillars,spring temperature,trophic mismatch,temporal overlap",
  "date": "2026-10-04",
  "icon": "🐦",
  "limit": [
    "這是未校準的供需時間教具，不指定鳥種／地點／真實日期。示例季節第0天是任意參考；供給和需求都用24天寬、最高10份／天、總120份的三角形。份是可配對的教具資源，不是毛毛蟲隻數、焦耳或鳥數。假定同日可用食物最多滿足同日需求，不能把多餘食物存到未來。重疊百分比＝同日配對份量／120份需求，不是育雛成功率或存活率。只移動時序，不改食物總量。食物高峰＝60−4×溫差＋共同平移日；每°C提前4天是自訂，不是研究擬合。育雛需求高峰＝抵達基準日＋20天＋共同平移日；固定20天濃縮繁殖準備與發育，不代表所有鳥的時程。溫差不會自動移動鳥的抵達日；由你選另一假設，並非鳥能隨意控制或只靠同一訊號遷徙。共同平移改兩條完整曲線與抵達日期，不改相對差；全範圍都在0–140天固定圖框內。未模型化其他食物、競爭、覓食效率、棲地、天氣、繁殖或族群數，不能單因曲線推出氣候導致所有鳥類下降。Both2006只實讀摘要；BTO2017研究說明提醒族群變化不能簡化成錯位直接降低繁殖。 操作提示依實際對齊與溫差範圍更新，建議抵達日保持在控制範圍。主帳各項顯示到小數兩位，顯示總和不等於120時用「≈」，不更改原帳；相同對照明示相同。",
    "An unfitted timing tool, not a species, site or real calendar forecast. Day 0 is an arbitrary seasonal reference. Supply and demand each use a 24-day-wide triangle, peak 10 portions/day, total 120 portions. Portions are toy resources, not insect counts, joules or birds. Same-day available food can meet same-day demand; excess is not stored. Overlap percent is matched portions / 120 demand portions, not breeding success or survival. Timing changes while totals stay fixed. Food peak = 60 − 4 × temperature change + shared shift; 4 days/°C is chosen, not fitted. Demand peak = base arrival + 20 days + shared shift; the fixed 20-day lag condenses preparation and development, not every bird’s schedule. Temperature does not automatically move bird arrival. Your choice is another scenario, not free control by a bird or one universal migration cue. A shared shift moves both full curves and arrival without changing relative timing. All curves fit the fixed 0–140-day frame. Other foods, competition, foraging, habitats, weather, reproduction and populations are omitted. The curves cannot establish climate as the sole cause of bird declines. Both (2006) was read as an abstract; the BTO (2017) account cautions against a simple direct mismatch-to-productivity explanation.  Prompts follow actual alignment and temperature bounds; suggested arrival days remain in the control range. Main terms round to two decimals; “≈” identifies displayed sums unequal to120 without altering the original account. Identical comparisons are labeled identical."
  ],
  "formula": "F=60−4T+S; N=A+20+S. r(day,c)=10 max(0,1−abs(day−c)/12). Food=Need=120 portions. overlap=integral min(r(day,F),r(day,N))=120 max(0,1−abs(N−F)/24)^2. unmatched=120−overlap.",
  "formulaText": [
    "食物高峰 F＝60−4×溫差＋共同平移\n需求高峰 N＝抵達基準日＋20＋共同平移\n日曲線 r(d,c)＝10×max(0,1−|d−c|/12) 份／天\n每條總量＝24×10÷2＝120份\n重疊＝逐日較小值的面積\n＝120×max(0,1−|N−F|/24)²份\n未配對需求＝120−重疊；未配對食物亦同\n共同平移在 N−F 中抵銷；不是存活率。",
    "Food peak F = 60 − 4 × temperature change + shared shift\nDemand peak N = base arrival + 20 + shared shift\nDaily rate r(d,c) = 10 × max(0,1−|d−c|/12) portions/day\nEach total = 24 × 10 / 2 = 120 portions\nOverlap = integral of the smaller daily rate\n= 120 × max(0,1−|N−F|/24)² portions\nUnmatched demand = 120 − overlap; unused food likewise\nShared shifts cancel in N−F. This is not survival."
  ],
  "dateModified": "2026-10-12"
};
