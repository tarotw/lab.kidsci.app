window.CONFIG={
  "id": "G06",
  "path": "molt",
  "status": "complete",
  "controller": "molt.js",
  "extras": [
    "molt-model.js",
    "molt.css",
    "molt.js"
  ],
  "title": [
    "外骨骼的長大關卡",
    "Growing beyond a rigid shell"
  ],
  "question": [
    "先分配食物，再走回合，看幼蟹如何換大殼。",
    "Allocate food and step through a juvenile crab’s molt."
  ],
  "hint": [
    "先按走一回合，所有安排都能直接改。",
    "Start with one round; all plans are ready."
  ],
  "defaults": {
    "food": 6,
    "allocate": 2,
    "schedule": 6,
    "shelter": "hide"
  },
  "controls": [
    {
      "key": "food",
      "label": [
        "每次可找到的食物",
        "Available food"
      ],
      "min": 0,
      "max": 8,
      "step": 1,
      "value": 6,
      "units": [
        "資源點／可覓食回合",
        "resource points/feeding round"
      ],
      "unit": "資源點 / resource points"
    },
    {
      "key": "allocate",
      "label": [
        "分給成長的養分",
        "Allocation to growth"
      ],
      "min": 0,
      "max": 4,
      "step": 1,
      "value": 2,
      "units": [
        "四等份",
        "quarters"
      ],
      "unit": "四等份 / quarters"
    },
    {
      "key": "schedule",
      "label": [
        "最早哪回合準備換殼？",
        "Earliest preparation round"
      ],
      "min": 0,
      "max": 24,
      "step": 1,
      "value": 6,
      "units": [
        "回合；0不換殼",
        "rounds; 0 skips molting"
      ],
      "unit": "回合 / rounds"
    }
  ],
  "mission": [
    "吃很多，就能永遠在舊硬殼裡變大嗎？",
    "Can more food make a crab grow forever inside its old shell?"
  ],
  "options": [
    [
      "不能；換殼和硬化都有代價",
      "No; molting and hardening have costs"
    ],
    [
      "可以；不用換殼也沒有上限",
      "Yes; no molt or size limit is needed"
    ]
  ],
  "answer": 0,
  "reason": [
    "硬殼尺寸受限。新殼先柔軟再硬化，成長仍需食物資源；不同動物的週期不同。",
    "A rigid shell limits size. The new shell is soft before hardening; growth still needs food resources and cycles vary."
  ],
  "comparisons": [],
  "ep": "173",
  "episodeTitle": "隱形帝國：佔領地球97%的無脊椎動物（上集）",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0046299",
    "Chung等2012：藍蟹換殼、擴張與硬化",
    "Chung et al.2012: blue-crab expansion and hardening"
  ],
  "extraSources": [
    [
      "https://doi.org/10.1093/conphys/cov013",
      "McLean與Todgham2015：幼蟹食物與成長",
      "McLean and Todgham 2015: juvenile food and growth"
    ],
    [
      "https://repository.si.edu/bitstreams/2782c2e0-3387-442c-909b-ae5667392bb4/download",
      "Shirley等1990：蛻殼藍蟹與棲地暴露差異",
      "Shirley et al.1990: molting crabs and habitat exposure"
    ]
  ],
  "limit": [
    "只示意一隻幼蟹的一次換殼，不代表所有節肢動物或成體；部分物種／成體有最後一次蛻殼。30回合不是天／秒，10→12尺寸格、初始投入80點、容量100→144、資源點、硬化3回合和暴露點全部自訂未校準。資源點是教具收支，非卡路里、乾重、營養配方或真實能量分配。蛻殼時外形擴張示意新殼柔軟與吸水，不把外形增加當成同量新組織。內圈只是成長投入符號，非解剖或殼內壓力。維持不足不宣判死亡；暴露點不是遭捕食機率／存活率。躲藏不消除暴露，額外少一次覓食是自訂安排，不是所有幼蟹固定習性。自然蛻殼由生理與環境控制，按鈕是反事實計畫教具，非飼養或催促蛻殼方法。食物／最早準備／躲藏改變會從起點重算同回合，不是實驗進行中即時治療。 成長分配是最多投入比例，舊／新殼容量滿時實際投入可為0；食物0／1點的減食對照按實際差額標示，完全相同安排不稱為只改一項。硬化完成回合的階段表示回合末狀態；軟殼帳與少覓食帳依回合開始階段計入，不把回合末硬殼說成該回合已收食物。新開說明／頁面隱藏會暫停，回到頁面不自動續播；換語言／模式恢復已開面板保留播放。",
    "One hypothetical juvenile crab and one molt, not all arthropods or adults; some have terminal molts. Thirty rounds are not days or seconds. Size 10→12, initial investment 80 and capacity 100→144, resource points, three hardening rounds and exposure points are invented and unfitted. Resource points are a teaching account, not calories, dry mass, a diet or real allocation. Outline expansion represents pliable cuticle and water uptake, not an equal instant tissue gain. The inner circle symbolizes growth investment, not anatomy or internal pressure. Unpaid maintenance is not a death diagnosis; exposure is not predation or survival probability. Shelter leaves exposure; its extra missed feeding round is a chosen toy plan, not a universal habit. Real molting is physiologically and environmentally regulated; controls are counterfactual plans, not husbandry or molt induction. Changes recompute the same round from the start, not treatment. Allocation is an upper limit; a full old/new shell can receive zero growth investment. Food reduction comparisons label the actual reduction at food 0/1, and identical plans are identified. Phase describes the end of a round; soft-phase/missed-feeding accounts follow its starting phase, so a newly hardened endpoint does not imply food was collected in that round. Opening explanations or hiding the page pauses; becoming visible does not auto-resume. Language/mode restoration of already open panels preserves playback."
  ],
  "formulaText": [
    "初始儲備E=6、投入B=80、容量K=100、尺寸L=10、硬化H=3。30回合只換殼一次。硬殼可覓食回合收F點；每回合先付min(E,2)維持，欠額另列。成長投入g=min(K−B,E,max(0,F−2)×a/4)，E扣g、B加g。最早回合s=0表示不換；s>0且i≥s、B=100、儲備至少28（在外）／30（躲藏）時付8點開始準備。下一回合不覓食、付4點蛻殼：K=144、L=12、H=0；B不憑空增加。其後3回合每回合付2點硬化，H增加1，完成後硬殼；躲藏安排再不覓食1回合。準備完成後直到硬化／額外躲藏回合不收食物，每回合仍付維持。初始6＋吃入＝維持已付＋成長投入＋換殼花費＋剩餘。準備開始、蛻殼、3硬化共5回合屬暴露窗口：在外每回合5點、藏好1點；其餘每回合1點。軟殼帳含蛻殼與3硬化回合（最後回合由軟變硬）。暴露點不是機率。換殼18點，躲藏另少一次食物；全為自訂規則。",
    "Start reserve E=6, investment B=80, capacity K=100, size L=10, hardening H=3. One molt in 30 rounds. A hard-shell feeding round collects F points. Each round first pays min(E,2) maintenance, recording unmet demand. Growth g=min(K−B,E,max(0,F−2)×a/4); subtract g from E and add to B. Earliest round s=0 skips molting. Otherwise i≥s, B=100 and reserve≥28 (open) or 30 (sheltered) starts preparation at cost 8. Next round collects no food and pays 4 to shed: K=144,L=12,H=0; B does not jump. Three following rounds each pay 2 for hardening and add 1 to H. Shelter then misses one extra feeding round. From the shedding round through hardening/extra shelter, food is zero but maintenance continues. Initial 6 + food = paid maintenance + growth investment + molt costs + reserve left. Five exposure-window rounds (preparation onset, shedding, three hardening rounds) add 5 points/round in the open or 1 sheltered. Other rounds add 1. The soft-phase account includes shedding and three hardening rounds; the last begins soft and ends hard. Exposure is not probability. Molt cost totals 18; shelter misses one extra meal. All rules are invented."
  ],
  "formula": "初始儲備E=6、投入B=80、容量K=100、尺寸L=10、硬化H=3。30回合只換殼一次。硬殼可覓食回合收F點；每回合先付min(E,2)維持，欠額另列。成長投入g=min(K−B,E,max(0,F−2)×a/4)，E扣g、B加g。最早回合s=0表示不換；s>0且i≥s、B=100、儲備至少28（在外）／30（躲藏）時付8點開始準備。下一回合不覓食、付4點蛻殼：K=144、L=12、H=0；B不憑空增加。其後3回合每回合付2點硬化，H增加1，完成後硬殼；躲藏安排再不覓食1回合。準備完成後直到硬化／額外躲藏回合不收食物，每回合仍付維持。初始6＋吃入＝維持已付＋成長投入＋換殼花費＋剩餘。準備開始、蛻殼、3硬化共5回合屬暴露窗口：在外每回合5點、藏好1點；其餘每回合1點。軟殼帳含蛻殼與3硬化回合（最後回合由軟變硬）。暴露點不是機率。換殼18點，躲藏另少一次食物；全為自訂規則。\n\nStart reserve E=6, investment B=80, capacity K=100, size L=10, hardening H=3. One molt in 30 rounds. A hard-shell feeding round collects F points. Each round first pays min(E,2) maintenance, recording unmet demand. Growth g=min(K−B,E,max(0,F−2)×a/4); subtract g from E and add to B. Earliest round s=0 skips molting. Otherwise i≥s, B=100 and reserve≥28 (open) or 30 (sheltered) starts preparation at cost 8. Next round collects no food and pays 4 to shed: K=144,L=12,H=0; B does not jump. Three following rounds each pay 2 for hardening and add 1 to H. Shelter then misses one extra feeding round. From the shedding round through hardening/extra shelter, food is zero but maintenance continues. Initial 6 + food = paid maintenance + growth investment + molt costs + reserve left. Five exposure-window rounds (preparation onset, shedding, three hardening rounds) add 5 points/round in the open or 1 sheltered. Other rounds add 1. The soft-phase account includes shedding and three hardening rounds; the last begins soft and ends hard. Exposure is not probability. Molt cost totals 18; shelter misses one extra meal. All rules are invented.",
  "description": [
    "分配幼蟹食物資源、安排一次蛻殼和躲藏，看舊殼尺寸上限、新殼硬化、成長與暴露代價；雙語SVG互動教具。",
    "Allocate juvenile-crab food, schedule one molt and choose shelter; compare rigid-shell limits, hardening, growth and exposure costs in a bilingual SVG teaching tool."
  ],
  "keywords": "外骨骼,蛻皮,蛻殼,幼蟹,甲殼類,成長,硬化,養分分配,躲藏,exoskeleton,molting,moulting,ecdysis,juvenile crab,cuticle hardening,growth,food allocation,shelter",
  "date": "2026-10-04",
  "icon": "🦀",
  "dateModified": "2026-10-11"
};
