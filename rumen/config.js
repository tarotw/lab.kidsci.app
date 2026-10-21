window.CONFIG={
  "id": "D10",
  "path": "rumen",
  "status": "complete",
  "title": [
    "牛的四隔間工廠",
    "Cow: one stomach, four rooms"
  ],
  "question": [
    "關掉微生物，纖維裡的營養去哪裡？",
    "Where does fiber go without microbial fermentation?"
  ],
  "hint": [
    "先關微生物，看纖維發酵變0；再開回來、切反芻，比較VFA那條路。",
    "Turn microbes off: fiber fermentation becomes0. Turn them on and toggle rechewing to compare the VFA route."
  ],
  "controls": [
    {
      "key": "bugs",
      "label": [
        "微生物發酵",
        "Microbial fermentation"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "關閉教具",
          "Toy off"
        ],
        [
          "開啟",
          "On"
        ]
      ]
    },
    {
      "key": "chew",
      "label": [
        "反芻：回嘴再嚼",
        "Rumination: rechew"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "不反芻",
          "No rechewing"
        ],
        [
          "反芻",
          "Rechew"
        ]
      ]
    },
    {
      "key": "fiber",
      "label": [
        "纖維裡的碳",
        "Carbon in fiber"
      ],
      "min": 0,
      "max": 100,
      "step": 10,
      "value": 60,
      "unit": "gC",
      "options": null
    },
    {
      "key": "starch",
      "label": [
        "澱粉裡的碳",
        "Carbon in starch"
      ],
      "min": 0,
      "max": 100,
      "step": 10,
      "value": 20,
      "unit": "gC",
      "options": null
    },
    {
      "key": "nitrogen",
      "label": [
        "可用氮來源",
        "Available nitrogen"
      ],
      "min": 0,
      "max": 10,
      "step": 1,
      "value": 4,
      "unit": "gN",
      "options": null
    },
    {
      "key": "water",
      "label": [
        "本次另加的水",
        "Water added this time"
      ],
      "min": 0,
      "max": 500,
      "step": 50,
      "value": 200,
      "unit": "mL",
      "options": null
    }
  ],
  "defaults": {
    "bugs": 1,
    "chew": 1,
    "fiber": 60,
    "starch": 20,
    "nitrogen": 4,
    "water": 200
  },
  "action": [
    "看營養分流",
    "Trace nutrient routes"
  ],
  "mission": [
    "純碳水和水，可以憑空長出蛋白質嗎？",
    "Can carbohydrate and water alone make protein?"
  ],
  "options": [
    [
      "還需要氮來源",
      "A nitrogen source is also needed"
    ],
    [
      "反芻就能憑空製造",
      "Rechewing creates it from nothing"
    ]
  ],
  "answer": 0,
  "reason": [
    "反芻讓纖維更容易被微生物利用；VFA和微生物蛋白是不同路。新蛋白需要氮，水和純碳水不能變出氮。模型列每一份碳、氮與水的去向，沒有直接換算長肉。",
    "Rechewing improves microbial access to fiber. VFA and microbial protein follow different routes. New protein requires nitrogen: water and pure carbohydrate cannot create it. Every carbon, nitrogen and water input has a destination; the toy does not predict meat gain."
  ],
  "comparisons": [
    {
      "key": "bugs",
      "a": 0,
      "b": 1,
      "label": [
        "微生物：關／開",
        "Microbes: off / on"
      ]
    },
    {
      "key": "chew",
      "a": 0,
      "b": 1,
      "label": [
        "反芻：無／有",
        "Rechewing: off / on"
      ]
    },
    {
      "key": "nitrogen",
      "a": 0,
      "b": 4,
      "label": [
        "氮：0／4gN",
        "Nitrogen:0 /4gN"
      ]
    }
  ],
  "ep": "s60",
  "episodeTitle": "〈吃草怎麼長出滿身牛肉？解密牛的「體內細菌農場」與四個胃的消化奇蹟｜SP.60〉",
  "podcast": {
    "verified": true,
    "url": "https://open.firstory.fm/story/cmu8f6hqi0xv101zd7ov5bdph",
    "episodeId": "1000790675354",
    "source": "https://open.firstory.fm/story/cmu8f6hqi0xv101zd7ov5bdph",
    "appleRegion": "US",
    "duration": "15 分 20 秒",
    "durationEn": "15 min 20 sec",
    "durationIso": "PT15M20S",
    "subscribersOnly": true,
    "coverAvailable": true,
    "verifiedOn": "2026-10-10",
    "accessBasis": "Current official Firstory page15:20/Join to Unlock, and its linked Apple US episode1000790675354/Subscribers Only observed2026-10-10. CTA remains Firstory; no Taiwan entitlement/account/audio claim.",
    "coverStatus": "Current official Firstory artwork visibly loaded1400px; plain file GET403 retained. Independent official Apple page provides observed960w JPEG, downloaded and visually checked. No altered Firstory URL/header/proxy.",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource211/v4/62/76/22/6276223a-1329-7fcd-8c45-23d5b80151a5/e1a938e6-3951-491c-8c07-19ad9c7cf88a.jpg/960x960bb-60.jpg",
    "coverFile": "podcast/sp60.jpg",
    "artworkVisualChecked": true,
    "urlVerified": true
  },
  "source": [
    "https://extension.msstate.edu/publications/understanding-the-ruminant-animal-digestive-system",
    "MSU Extension P2503 · Ruminant digestion"
  ],
  "extraSources": [
    [
      "https://www.fda.gov/animal-veterinary/animal-health-literacy/how-cows-eat-grass",
      "FDA · How cows eat grass"
    ],
    [
      "https://dairy.extension.wisc.edu/articles/protein-what-is-it-and-why-do-cows-need-it/",
      "UW–Madison Extension · Nitrogen and microbial protein"
    ]
  ],
  "limit": [
    "同一胃四隔間；網胃與瘤胃互通，反芻回嘴再嚼。VFA從瘤胃壁吸收，微生物蛋白經皺胃與小腸另行消化。gC＝其中碳的克數、gN＝其中氮的克數，不是整份食物、VFA或蛋白的重量；碳／氮／水分別守恆，不宣稱完整化學反應質量模型。發酵比例、蛋白路C:N=4、後段吸收及水分配都是自訂轉化表，未校準真牛。模型起點是已有含水環境的瘤胃，水滑桿只算本次另加水，0mL非乾胃；未追蹤原有菌體或水的周轉。菌關閉只為反例，不是真牛安全處置。無pH、真消化時間、飼料建議、增肉或牛奶推估；氧、氫等元素未建模，氣體gC不等於甲烷重量。 初始微生物已存在；0gN只是本次沒有新氮投入，仍採固定發酵示例，不建模長時間缺氮。 畫面碳、氮帳分項以三位小數列出，避免兩位四捨五入相加與投入不一致；這是教具運算精度，非測量精度。完整數字各分流階段相同，2畫面秒／1/8逐步／完成重啟及示範時計同步；同值與來源、公式、猜題、隔間選擇保留。SP.60官方Firstory單集已核對15分20秒及加入會員解鎖，收聽按鈕連此單集；2026-10-10也核對該頁提供的Apple美國單集1000790675354及官方封面。台灣帳戶權益與實際音訊未測。",
    "One stomach has four connected compartments; the reticulum and rumen exchange digesta, and cud returns to the mouth. VFA is absorbed through the rumen wall; microbial protein travels through the abomasum and intestine. gC and gN mean grams of carbon and nitrogen, not whole food, VFA or protein mass. Separate elemental and water ledgers do not model complete chemical mass. Fermentation fractions, toy protein C:N=4, intestinal uptake and water splits are invented and uncalibrated. An already wet rumen is assumed; the water slider tracks only new added water, so0mL is not a dry rumen. Existing microbial biomass and water turnover are omitted. Microbes off is a counterexample, not a safe treatment for cattle. No pH, real digestion time, feeding advice, meat or milk forecast; H and O are omitted, and gas gC is not methane mass. Established microbes are assumed:0gN adds no new nitrogen in this batch. Fixed fermentation fractions remain a toy assumption, not long-term nitrogen starvation. Display C/Nterms to3decimals: independently rounded2decimal subterms can fail the displayed input equality. This is toy calculation precision, not measurement accuracy. Full-input values stay fixed through2display seconds/1/8Step; completion restart/demo clocks match. No-op, sources/formulas, quiz, language/mode and room selection retain state. Official FirstorySP.60 confirms15min20sec and member unlock; the listen button opens that episode. Its linked Apple US episode1000790675354 and official artwork were verified2026-10-10. Taiwan account access and actual audio remain untested."
  ],
  "formula": "Invented carbon/nitrogen/water routing, not chemical stoichiometry:\nfiberFerment = bugs × fiberC × (chew ? 0.60 : 0.35)\nstarchFerment = bugs × starchC × 0.75\nconvertedC = fiberFerment + starchFerment\nproteinC = min(0.20 × convertedC, 4 × inputN); proteinN = proteinC / 4\nremainingC = convertedC − proteinC\nVFA_C = 0.80 × remainingC; gasC = 0.20 × remainingC\ndirectC = 0.85 × (starchC − starchFerment)\nproteinAbsC/N = 0.80 × proteinC/N; proteinResidueC/N = 0.20 × proteinC/N\nresidueC = fiberC − fiberFerment + 0.15 × (starchC − starchFerment) + proteinResidueC\nC_in = VFA_C + gasC + directC + proteinAbsC + residueC\nN_in = proteinAbsN + proteinResidueN + unusedN\nomasumWater = 0.70 × addedWater; intestineWater = 0.80 × remainingWater\naddedWater = omasumWater + intestineWater + waterOut\n2s animation: path demonstration, not real digestion.\nDisplay C/N ledger terms at3decimals; legal0.005gC/gN subterms can fail to close after independent2decimal rounding\nFull-input values at every schematic phase;2display seconds, Step=1/8flow, no real digestion time\nSame/capped/invalid inputs, language/mode/quiz/source openness keep state; completed Step restart explicit\nRoom inspection changes only emphasis and explanation, not inputs/time/cards",
  "keywords": "牛,反芻,瘤胃,網胃,瓣胃,皺胃,四隔間,微生物發酵,揮發性脂肪酸,微生物蛋白,碳氮守恆,cow,rumination,rumen,reticulum,omasum,abomasum,microbial fermentation,VFA,microbial protein,carbon nitrogen ledger",
  "description": [
    "操作牛的同一胃四隔間，切微生物與反芻、調纖維澱粉氮和水，分別看VFA與微生物蛋白路徑，核對碳氮水教具帳。",
    "Explore one cow stomach with four compartments. Toggle microbes and rechewing, change fiber, starch, nitrogen and water, trace separate VFA and microbial protein routes and check toy ledgers."
  ],
  "date": "2026-10-10",
  "icon": "🐄",
  "formulaZh": "以下為自訂碳／氮／另加水分配表，不是真反應化學計量或飼料配方\ngC／gN＝元素碳／氮的克數，不是整份食物／VFA／蛋白重量\n纖維發酵＝菌×纖維碳×（反芻0.60，否則0.35）\n澱粉發酵＝菌×澱粉碳×0.75；轉化碳＝兩項發酵碳和\n新蛋白碳＝min(0.20×轉化碳，4×新氮)；新蛋白氮＝新蛋白碳/4\n剩餘碳＝轉化碳−新蛋白碳；VFA碳＝0.80×剩餘碳；氣體碳＝0.20×剩餘碳\n澱粉後段直接吸收碳＝0.85×（澱粉碳−澱粉發酵）\n蛋白路吸收C／N＝0.80×新蛋白C／N；蛋白路殘留＝0.20×新蛋白C／N\n殘留碳＝未發酵纖維+0.15×未發酵澱粉+蛋白路殘留碳\n碳輸入＝VFA+氣體+澱粉直接吸收+蛋白路吸收+殘留（都用gC）\n氮輸入＝蛋白路吸收+蛋白路殘留+未用氮（都用gN）\n瓣胃水＝0.70×另加水；腸水＝0.80×剩餘水；排水＝另加水−兩處吸水\n水輸入＝瓣胃+腸+排出（mL），只算本次新增，0mL不是乾胃\n已有菌體及濕環境；0新氮仍固定發酵是教具假設，非長期缺氮生理\n畫面碳、氮帳三位小數，可容納合法設定的0.005gC／gN分項，避免兩位相加不閉合\n2畫面秒為分流，逐步1/8；完整投入數值各階段相同，無真消化秒數\n同值／夾限同值／空值／非有限值、語言／模式／來源公式／猜題保留\n完成逐步從頭明示，示範時計2秒，隔間檢視只換強調不改實驗"
};
