window.CONFIG={
  "id": "G08",
  "path": "brood",
  "status": "complete",
  "controller": "brood.js",
  "extras": [
    "brood-model.js",
    "brood.css",
    "brood.js"
  ],
  "title": [
    "口孵魚：保護與進食的兩難",
    "Mouthbrooding: care or food?"
  ],
  "question": [
    "先看幼魚，再分配護幼和覓食；看看媽媽的資源帳。",
    "Visit the fry stage, then divide care and foraging; follow the mother’s resource account."
  ],
  "hint": [
    "按「看幼魚」，再改護幼份量；所有控制隨時可用。",
    "Tap “See fry”, then change the care share. All controls are ready."
  ],
  "defaults": {
    "incubate": 6,
    "care": 8,
    "food": 6,
    "hazard": 2,
    "guard": 3
  },
  "controls": [
    {
      "key": "guard",
      "label": [
        "幼魚期分給護幼的時間",
        "Care share with swimming fry"
      ],
      "min": 0,
      "max": 4,
      "value": 3,
      "units": [
        "四等份；其餘覓食",
        "quarters; rest for foraging"
      ],
      "step": 1,
      "unit": "四等份；其餘覓食 / quarters; rest for foraging"
    },
    {
      "key": "incubate",
      "label": [
        "含卵＋卵黃幼魚的孵育長度",
        "Egg and yolk-sac brooding length"
      ],
      "min": 4,
      "max": 12,
      "value": 6,
      "units": [
        "教具回合，非天數",
        "toy rounds, not days"
      ],
      "step": 1,
      "unit": "教具回合，非天數 / toy rounds, not days"
    },
    {
      "key": "care",
      "label": [
        "游出後再照顧多久？",
        "Care after fry emerge"
      ],
      "min": 0,
      "max": 12,
      "value": 8,
      "units": [
        "教具回合；0不延長",
        "toy rounds; 0 adds no care"
      ],
      "step": 1,
      "unit": "教具回合；0不延長 / toy rounds; 0 adds no care"
    },
    {
      "key": "food",
      "label": [
        "全回合覓食可得的食物",
        "Food from a full foraging round"
      ],
      "min": 0,
      "max": 8,
      "value": 6,
      "units": [
        "資源點／全覓食回合",
        "points/full foraging round"
      ],
      "step": 1,
      "unit": "資源點／全覓食回合 / points/full foraging round"
    },
    {
      "key": "hazard",
      "label": [
        "外面的示例危險",
        "Toy external hazard"
      ],
      "min": 0,
      "max": 4,
      "value": 2,
      "units": [
        "暴露點／未護幼回合",
        "exposure points/unguarded round"
      ],
      "step": 1,
      "unit": "暴露點／未護幼回合 / exposure points/unguarded round"
    }
  ],
  "mission": [
    "護幼時間拉長，就一定能多吃又毫無危險嗎？",
    "Does longer care guarantee more food and no danger?"
  ],
  "options": [
    [
      "不會；護幼占用覓食，不保證危險消失",
      "No; care takes foraging time without guaranteeing safety"
    ],
    [
      "會；照顧幼魚不花資源",
      "Yes; caring costs no resources"
    ]
  ],
  "answer": 0,
  "reason": [
    "本例護幼花資源且少覓食。外面有危險時，護幼減少暴露但不歸零；暴露點不是存活率。",
    "Toy care uses resources and replaces foraging. With external hazard, care reduces exposure but leaves some; points are not survival rates."
  ],
  "comparisons": [],
  "ep": "s44",
  "episodeTitle": "〈VIP｜動物母親專輯(5)｜嘴巴裡的育嬰房：莫三比克口孵魚的生存奇蹟｜SP.44〉",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/de/podcast/vip-%E5%8B%95%E7%89%A9%E6%AF%8D%E8%A6%AA%E5%B0%88%E8%BC%AF-5-%E5%98%B4%E5%B7%B4%E8%A3%A1%E7%9A%84%E8%82%B2%E5%AC%B0%E6%88%BF-%E8%8E%AB%E4%B8%89%E6%AF%94%E5%85%8B%E5%8F%A3%E5%AD%B5%E9%AD%9A%E7%9A%84%E7%94%9F%E5%AD%98%E5%A5%87%E8%B9%9F-sp-44/id1812447277?i=1000765953085",
    "episodeId": "1000765953085",
    "duration": "約17分鐘",
    "durationEn": "About 17 minutes",
    "subscribersOnly": true,
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource211/v4/3a/23/57/3a23576f-83ae-8846-822d-416c70e146b9/56dce499-b896-493f-90ad-d1d090f2af0c.jpg/1200x1200ECA.PESS01-60.jpg?imgShow=Podcasts211/v4/41/3f/f0/413ff073-a7c5-b6a0-8286-3f3dbf061111/mza_1220969070254895353.jpeg",
    "coverAvailable": true,
    "verifiedOn": "2026-10-07",
    "verifiedStorefront": "de",
    "TaiwanEntitlementVerified": false,
    "coverStatus": "Exact original official German metadata200 and1200x1200cover saved/viewed. Subscriber-only label; Taiwan account access/audio/exact seconds unverified."
  },
  "source": [
    "https://oliveiralab.org/wp-content/uploads/2015/01/1998a_oliveira_almada.pdf",
    "Oliveira與Almada 1998：莫三比克口孵魚的分階段護幼與進食",
    "Oliveira and Almada 1998: staged maternal care and feeding"
  ],
  "extraSources": [
    [
      "https://faculty.lsu.edu/maruskalab/files/publications/30_food_deprivation_explains_effects_of_mouthbrooding_on_ovaries.pdf",
      "Grone等2012：另一種慈鯛的口孵與缺食；不移植數值",
      "Grone et al.2012: another cichlid’s brooding and food deprivation; no transferred coefficients"
    ]
  ],
  "limit": [
    "以莫三比克口孵魚的母孵與幼魚期防衛作背景。其他魚可父孵、雙親照顧或不口孵，不能泛化。研究觀察母魚進食受抑制且有偶發取食；教具把含卵／卵黃期普通餐量簡化為0，不宣稱完全不吃不喝。游出後的護幼格表示守護與口內暫避，不表示所有幼魚整格困在嘴裡；幼魚日常覓食、卵黃與成長收支未模擬。所有回合、四格時間、起始72資源點、成本、食物收益和暴露係數自訂未校準；非卡路里、真發育天數、繁殖成功率、飼養指引或強制孵化。孵育長度是情境假設，不是可以催熟魚卵的按鈕。固定24回合觀察，較長孵育會讓終點幼魚較年輕；不同策略不假稱同齡。暴露點不隨機殺魚、不計死亡或存活。起始72只為覆蓋最昂貴的24回合成本，耗到0也不宣判死亡。改設定從起點重算同一格，非中途治療；危險不自動替孩子選策略。 四格計畫只代表游出後照顧期的設定；照顧長度0時四格全覓食、護幼份量保留但不使用，照顧期結束也不再套用該份量。全護幼／全覓食不稱輪流。相同對照標題與註記一致。新開說明／頁面隱藏暫停，回到頁面不自動續播；語言／模式恢復已開面板保留播放。 官方德國單集頁核對VIP／約17分鐘與封面；精確秒數、臺灣帳號權益及實際音訊未驗，沒有新增未測播放器。",
    "Mozambique tilapia maternal brooding and fry defence provide context. Other fishes may have paternal, biparental or no mouthbrooding. Observed feeding was suppressed with occasional intake; zero ordinary meals during eggs/yolk is a simplification, not a universal total fast or lack of drinking. Care slots mean defence and temporary oral refuge, not every fry confined throughout. Fry feeding, yolk and growth accounts are omitted. Rounds, quarters, initial 72 resource points, costs, food gains and exposure coefficients are invented and unfitted: not calories, developmental days, breeding success or husbandry. Brooding length defines a hypothetical scenario, not accelerated development. Both plans run 24 rounds; longer incubation leaves younger offspring at the endpoint. Exposure causes no random deaths and gives no survival estimate. Initial 72 covers the most costly window; zero reserve does not diagnose death. Settings recompute the same slot from the start, not treatment; hazard does not select a strategy for the child. The four-slot plan describes only the extended-care period after emergence. Care length 0 makes all slots foraging while retaining the unused care share; it also no longer applies after the period ends. All-care/all-foraging plans do not alternate. Identical-comparison titles match their note. Opening explanations or hiding the page pauses; becoming visible does not auto-resume. Language/mode restoration of open panels preserves playback. The official German episode page confirms VIP/about17minutes and artwork; exact seconds, Taiwan account entitlement and audio remain untested. No untested player was added."
  ],
  "formulaText": [
    "固定24回合，每回合4格，共96格。初始資源72點。每格維持0.5點；護幼格另花0.25點。含卵／卵黃期I回合全為護幼，普通餐0；前ceil(I/2)回合畫卵，後面畫卵黃幼魚。之後C回合每回合前G格護幼，其餘覓食。再後母魚都覓食、不再護幼。覓食每格收F/4點。護幼格暴露D/16點，其他格D/4點，D=0時都0；係數全自訂。72＋吃入＝維持＋護幼成本＋剩餘。最貴情境96格都護幼，成本72，故有限窗口內不透支。保護格數＋覓食格數＝已走格數。固定時間比較，發育階段未必相同。",
    "24 rounds × 4 slots = 96 slots. Start with 72 resource points. Every slot costs 0.5 maintenance; a care slot costs another 0.25. I egg/yolk rounds are all care with zero ordinary meals; draw eggs for ceil(I/2) rounds, then yolk-sac fry. Next C rounds have G care slots first and 4−G foraging slots each. Afterwards the mother only forages. Each foraging slot yields F/4. Exposure is D/16 per care slot and D/4 otherwise; D=0 gives zero. All coefficients are invented. 72 + food = maintenance + care costs + reserve. The most costly 96-care-slot plan costs 72, so this finite window never borrows. Care slots + foraging slots = elapsed slots. Equal observation time is not equal developmental age."
  ],
  "description": [
    "分配母魚護幼與覓食時間、改孵育長度、食物和危險；用雙語SVG與自訂資源帳觀察口孵育幼的取捨，不推算真存活率。",
    "Divide maternal care and foraging; vary brooding length, food and hazard in a bilingual SVG resource account, without predicting real survival."
  ],
  "keywords": "口孵魚,莫三比克口孵魚,吳郭魚,母孵,護幼,覓食,孵育,資源帳,能量成本,mouthbrooding,Mozambique tilapia,Oreochromis mossambicus,maternal care,foraging,parental investment,energy trade-off",
  "date": "2026-10-04",
  "icon": "🐟",
  "formula": "固定24回合，每回合4格，共96格。初始資源72點。每格維持0.5點；護幼格另花0.25點。含卵／卵黃期I回合全為護幼，普通餐0；前ceil(I/2)回合畫卵，後面畫卵黃幼魚。之後C回合每回合前G格護幼，其餘覓食。再後母魚都覓食、不再護幼。覓食每格收F/4點。護幼格暴露D/16點，其他格D/4點，D=0時都0；係數全自訂。72＋吃入＝維持＋護幼成本＋剩餘。最貴情境96格都護幼，成本72，故有限窗口內不透支。保護格數＋覓食格數＝已走格數。固定時間比較，發育階段未必相同。\n\n24 rounds × 4 slots = 96 slots. Start with 72 resource points. Every slot costs 0.5 maintenance; a care slot costs another 0.25. I egg/yolk rounds are all care with zero ordinary meals; draw eggs for ceil(I/2) rounds, then yolk-sac fry. Next C rounds have G care slots first and 4−G foraging slots each. Afterwards the mother only forages. Each foraging slot yields F/4. Exposure is D/16 per care slot and D/4 otherwise; D=0 gives zero. All coefficients are invented. 72 + food = maintenance + care costs + reserve. The most costly 96-care-slot plan costs 72, so this finite window never borrows. Care slots + foraging slots = elapsed slots. Equal observation time is not equal developmental age.",
  "dateModified": "2026-10-12"
};
