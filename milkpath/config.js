window.CONFIG={
  "id": "G12",
  "path": "milkpath",
  "status": "complete",
  "controller": "milkpath.js",
  "extras": [
    "milkpath-model.js",
    "milkpath.css",
    "milkpath.js"
  ],
  "title": [
    "蟻蛛餵奶？營養來源追蹤",
    "Spider milk: trace the nutrient path"
  ],
  "question": [
    "小蜘蛛的營養點，從哪裡來？",
    "Where do the young spiders’ nutrient markers come from?"
  ],
  "hint": [
    "先按下一步，追蹤食物變成分泌物；再把供給回合數減少，看看依賴期。",
    "Tap next to trace food into secretions. Then shorten supply and inspect the dependent phase."
  ],
  "defaults": {
    "food": 4,
    "rate": 4,
    "duration": 6,
    "wild": 2
  },
  "controls": [
    {
      "key": "food",
      "label": [
        "媽媽每回合攝食",
        "Mother’s food per round"
      ],
      "min": 0,
      "max": 8,
      "value": 4,
      "units": [
        "教具營養點／回合",
        "toy points / round"
      ],
      "step": 1,
      "unit": "教具營養點／回合 / toy points / round"
    },
    {
      "key": "rate",
      "label": [
        "每回合分泌上限",
        "Secretion limit per round"
      ],
      "min": 0,
      "max": 8,
      "value": 4,
      "units": [
        "教具營養點／回合",
        "toy points / round"
      ],
      "step": 1,
      "unit": "教具營養點／回合 / toy points / round"
    },
    {
      "key": "duration",
      "label": [
        "供給回合數",
        "Supply duration"
      ],
      "min": 0,
      "max": 6,
      "value": 6,
      "units": [
        "教具回合（非天數）",
        "toy rounds, not days"
      ],
      "step": 1,
      "unit": "教具回合（非天數） / toy rounds, not days"
    },
    {
      "key": "wild",
      "label": [
        "後期幼蛛覓食上限",
        "Later young foraging"
      ],
      "min": 0,
      "max": 4,
      "value": 2,
      "units": [
        "教具營養點／回合",
        "toy points / round"
      ],
      "step": 1,
      "unit": "教具營養點／回合 / toy points / round"
    }
  ],
  "mission": [
    "會自己覓食，就一定立刻停止喝分泌物嗎？",
    "Does foraging mean milk feeding stops immediately?"
  ],
  "options": [
    [
      "不一定；可以同時接受餵養和自己覓食",
      "No; milk can supplement their own foraging"
    ],
    [
      "一定；開始覓食就沒有親代餵養",
      "Yes; foraging always ends parental feeding"
    ]
  ],
  "answer": 0,
  "reason": [
    "研究中的Toxeus magnus幼蛛早期依賴分泌物，後期會外出覓食但仍接受分泌物；親代照顧也不等同於只餵養。",
    "In the study, early Toxeus magnus young depend on secretions; later they forage and still take milk. Maternal care also includes more than feeding."
  ],
  "comparisons": [],
  "ep": "s42",
  "episodeTitle": "〈VIP｜動物母親專輯(3)｜偽裝大師的超級母乳：大蟻蛛的哺乳奇觀｜SP.42〉",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/de/podcast/vip-%E5%8B%95%E7%89%A9%E6%AF%8D%E8%A6%AA%E5%B0%88%E8%BC%AF-3-%E5%81%BD%E8%A3%9D%E5%A4%A7%E5%B8%AB%E7%9A%84%E8%B6%85%E7%B4%9A%E6%AF%8D%E4%B9%B3-%E5%A4%A7%E8%9F%BB%E8%9B%9B%E7%9A%84%E5%93%BA%E4%B9%B3%E5%A5%87%E8%A7%80-sp-42/id1812447277?i=1000765881017&l=en-GB",
    "episodeId": "1000765881017",
    "duration": "約19分鐘",
    "durationEn": "About 19 minutes",
    "subscribersOnly": true,
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource211/v4/ae/0e/02/ae0e021e-ad2d-f4f2-e8fe-e03a0c16c1ba/5e8d4b08-1fdd-46e8-89c3-3fb3486047c3.jpg/1200x1200ECA.PESS01-60.jpg?imgShow=Podcasts211/v4/41/3f/f0/413ff073-a7c5-b6a0-8286-3f3dbf061111/mza_1220969070254895353.jpeg",
    "coverAvailable": true,
    "verifiedOn": "2026-10-07",
    "verifiedStorefront": "de",
    "TaiwanEntitlementVerified": false,
    "coverStatus": "Exact original official German English-language metadata200 and1200x1200cover saved/viewed. Subscriber-only label; Taiwan account access/audio/exact seconds unverified.",
    "coverFile": "milkpath-cover.jpg"
  },
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/30498127/",
    "Chen等2018：大蟻蛛分泌物餵養原研究摘要",
    "Chen et al. 2018: original study abstract"
  ],
  "extraSources": [
    [
      "https://belgianspiders.be/wp-content/uploads/2018/12/2018_Chen-et-al_Prolonged-milk-provisioning-in-a-jumping-spider-3.pdf",
      "2018原研究PDF：觀察與供給中止實驗",
      "2018 original paper PDF: observations and interruption experiments"
    ]
  ],
  "description": [
    "追蹤大蟻蛛Toxeus magnus的親代營養分泌物。逐步把自訂營養點從攝食移入媽媽、分泌物、幼蛛與成長用途，調供給期間，看依賴期與後期覓食。",
    "Trace parental secretions in Toxeus magnus. Move toy nutrient markers through maternal, secretion and young stores into growth use; adjust supply duration and later foraging."
  ],
  "keywords": "大蟻蛛,蜘蛛分泌物,親代餵養,營養轉移,育幼,依賴期,混合餵養,營養守恆,跳蛛,Toxeus magnus,spider milk,parental provisioning,nutrient transfer,maternal care,mixed diet,resource conservation,jumping spider",
  "date": "2026-10-04",
  "icon": "🕷️",
  "limit": [
    "物種限定Toxeus magnus。早期依賴親代分泌物，後期可覓食且仍接受餵養；不是哺乳類乳腺，也不泛化所有蜘蛛。分泌物來自腹面生殖溝；圖的箭頭只畫庫存流程，不是解剖位置。原研究觀察先在巢壁吸食，再直接吸食；本頁合為分泌物庫。可能來自營養卵的演化是研究假說，不是已確認起源。固定4隻示意幼蛛、媽媽初始8點、每回合成長需求4點、累積成長用途12點才開啟覓食，全部是未校準教具。6回合各4事件不是天數，0.8秒只是揭示速度；本頁不推測體長、存活、死亡或真實斷奶時間。達12點僅示意覓食能力，不宣稱研究測出營養門檻。供給回合數後關閉新增分泌與親代餵養；剩餘分泌物保留帳內，不消失，不是實際液滴保存期限。覓食先補幼蛛需求，再以分泌物補足；優先順序是自訂，不是測得飲食比例。成長用途點從庫存移出，不可重花；不是等量體重或能量效率，代謝、排泄、母體維持、產液成本與營養成分分開損失未建模。親代食物及後期幼蛛食物是兩個外部輸入；只有母源餵養必須扣媽媽庫存。改設定會明確重算當前事件，是換假設不是逆轉生命。 零供給／零分泌時提示按實際轉移量更新；未達覓食門檻時可依序補供給3回合、分泌4點／回合與攝食2點／回合，皆為本例新假設，非動物照護建議。供給1回合最多移出4點，不會到本例12點門檻；相同對照明示相同。 官方德國英文單集頁核對VIP／約19分鐘與封面；精確秒數、臺灣帳號權益及實際音訊未驗，沒有新增未測播放器。",
    "Species limited to Toxeus magnus. Early young depend on maternal secretions; later they can forage while still taking milk. This is not a mammalian mammary gland or a claim about all spiders. Secretions emerge from the ventral epigastric furrow; arrows show accounts, not anatomy. Nest-surface and direct feeding are merged into one store. A trophic-egg origin is a hypothesis, not a proven origin. Four schematic young, maternal initial8 points, growth demand4 per round and readiness after12 used points are unfitted teaching choices. Six rounds of four events are not days;0.8seconds is reveal cadence. No length, survival, mortality or real weaning time is predicted. Readiness is a toy dependency threshold, not a measured nutrient threshold. After supply duration, new secretion and maternal feeding stop; unused secretion remains accounted for, not a real droplet lifetime. Wild food fills demand before milk; this priority is a toy choice, not measured diet proportions. Growth-use points leave stores and cannot be spent twice; they are not body mass or energy efficiency. Metabolism, excretion, maternal maintenance, secretion costs and nutrient-specific losses are omitted. Maternal and young wild foods are separate external inputs; maternal feeding always comes from maternal resources. Settings recompute the current event under a new hypothesis, not reverse life.  Zero supply/secretion prompts use actual transfers. A plan below readiness can test supply 3 rounds, rate 4 points/round and food 2 points/round in sequence; these are new toy hypotheses, not animal-care advice. One supply round uses at most 4 points and never reaches the toy 12-point gate. Identical comparisons are identified. The official German English-language episode page confirms VIP/about19minutes and artwork; exact seconds, Taiwan account entitlement and audio remain untested. No untested player was added."
  ],
  "formula": "initial8 + maternal food input + young wild input = maternal store + secretion store + young store + growth-use points. Each round: food -> secretion -> young feeding -> growth. Secretion/feeding only while round<=duration; wild input only after accumulated growth>=12. Demand4 per round; all unfitted.",
  "formulaText": [
    "全部點與門檻自訂。\n媽媽初始8點；固定4隻示意幼蛛，每回合合計需求4點。\n每回合四事件：媽媽食物入庫→分泌轉移→餵養／覓食入幼蛛庫→成長用途移出。\n供給開啟時：分泌=min(媽媽庫存,分泌上限)，扣媽媽、加分泌物。\n累計成長用途≥12點才有本例覓食能力；未達時即使覓食滑桿大於0，仍無野外輸入。\n餵養事件：先野外覓食=min(設定,4−幼蛛現有)，再親代餵養=min(分泌物庫存,剩餘需求)。供給期間結束則親代餵養0。\n成長事件：移出幼蛛全部點，累積成長用途；不足=4−移出點。不足不是死亡或生物停育預測。\n8＋媽媽食物輸入＋幼蛛覓食輸入＝媽媽庫＋分泌物庫＋幼蛛庫＋已移出成長用途。\n每庫追蹤母源青點與野外金點。六回合不換算天數。",
    "All points and gates are invented.\nMother starts with8 points. Four symbolic young need4 points together per round.\nFour events each round: maternal food in -> secretion transfer -> feeding/foraging into young store -> growth use out.\nWhile supply is on: secretion=min(maternal store,rate), subtracted from mother and added to secretion.\nToy foraging readiness requires accumulated growth use>=12; before that, wild input remains0 regardless of slider.\nFeeding: wild=min(setting,4-existing young points), then maternal milk=min(secretion store,remaining demand). Maternal feeding becomes0 after supply duration.\nGrowth: move all young points out to accumulated growth use; gap=4-used. A gap is not a mortality or developmental-arrest forecast.\n8 + maternal food input + young wild input = mother + secretion + young stores + growth-use account.\nTrace maternal cyan and wild gold markers. Six rounds are not days."
  ],
  "dateModified": "2026-10-12"
};
