window.CONFIG={
  "id": "D07",
  "path": "hibern",
  "status": "complete",
  "title": [
    "冬眠的電量條：還要留力氣醒來",
    "Hibernation: save enough to wake"
  ],
  "question": [
    "慢慢用能量，醒來那天還夠嗎？",
    "Does saving energy leave enough to wake?"
  ],
  "hint": [
    "先按逐步看一天，儲備少多少？再增加甦醒次數，比較完整冬季需求。",
    "Step one day: how much is spent? Add arousals and compare full-winter demand."
  ],
  "controls": [
    {
      "key": "reserve",
      "label": [
        "脂肪能量儲備",
        "Stored fat energy"
      ],
      "min": 0,
      "max": 800,
      "step": 50,
      "value": 400,
      "unit": "kJ"
    },
    {
      "key": "air",
      "label": [
        "示例環境溫度",
        "Example air temperature"
      ],
      "min": -5,
      "max": 15,
      "step": 5,
      "value": 5,
      "unit": "°C"
    },
    {
      "key": "wakes",
      "label": [
        "中途甦醒次數",
        "Midwinter arousals"
      ],
      "min": 0,
      "max": 10,
      "step": 1,
      "value": 4,
      "unit": "次 / times"
    }
  ],
  "defaults": {
    "reserve": 400,
    "air": 5,
    "wakes": 4
  },
  "action": [
    "看冬季帳本",
    "View winter"
  ],
  "mission": [
    "同溫同起點，多幾次甦醒會？",
    "At equal temperature and reserve, more arousals…"
  ],
  "options": [
    [
      "增加完整冬季需求",
      "Increase full-winter demand"
    ],
    [
      "不花能量",
      "Cost no energy"
    ]
  ],
  "answer": 0,
  "reason": [
    "低代謝仍需能量。示例甦醒日比低代謝日多扣清醒與回暖成本；最後春季回暖也要留預算。0次中途甦醒只是理想對照，不能當真動物不用醒。",
    "Low metabolism still uses energy. Toy arousal days add awake and rewarming costs; final spring rewarming also needs funds. Zero midwinter arousals is an ideal comparison, not a biological recommendation."
  ],
  "comparisons": [
    {
      "label": [
        "甦醒2／8次",
        "2 / 8 arousals"
      ],
      "key": "wakes",
      "a": 2,
      "b": 8,
      "base": {
        "reserve": 400,
        "air": 5
      }
    },
    {
      "label": [
        "環境5／−5°C",
        "Air5 / −5°C"
      ],
      "key": "air",
      "a": 5,
      "b": -5,
      "base": {
        "reserve": 400,
        "wakes": 4
      }
    },
    {
      "label": [
        "儲備200／600kJ",
        "Reserve200 / 600kJ"
      ],
      "key": "reserve",
      "a": 200,
      "b": 600,
      "base": {
        "air": 5,
        "wakes": 4
      }
    }
  ],
  "limit": [
    "固定60日、無進食的離散能量帳，所有常數自訂未校準，不是榛睡鼠或任何真物種的生存／體溫預測。脂肪能量儲備以kJ示例，不換算脂肪克數。低代謝每日成本S=1.5+0.3 max(0,5−Ta)+0.08 max(0,Ta−5) kJ/day，5°C成本最低是自訂規則；冷端保溫、暖端成本只是方向示例，非物種溫控門檻或真代謝曲線。清醒一日成本A=18+0.3 max(0,20−Ta) kJ/day；每次回暖另需R=6+0.2 max(0,20−Ta) kJ。中途n次排在第floor(60k/(n+1))日，k=1..n；甦醒日扣A+R而不再加整日S。其他日扣S。60日完成後還要R作最後春季回暖，不算完整春季生活成本。總需求=(60−n)S+n(A+R)+R。0次只是不計中途甦醒的理想帳本對照，不是動物不用醒或健康策略。研究物種和甦醒模式不同，不把周期或理由一概而論。本頁只展示排程，不模擬體溫、耗氧、維生、脂肪組成或甦醒必要生理功能。每日／最後回暖先檢查完整預算，足夠才扣款和前進；不足停在前一日邊界，可能有剩餘卻不足下一筆，不表示真動物瞬間停止代謝或死亡。固定日級帳本不猜不足時還能撐幾小時。已扣成本＝起點−餘額，未供足的計畫需求另列；負庫存不允許。圖中電量條以0–800kJ固定比例表示儲備，非真電池。12.2秒播放61個帳本步驟：60天及最後回暖；逐步一次1日，最後一步是回暖，非第61個冬日。最後觀察停止後重播從0，改語言／模式／重按目前模式保留；環境、儲備或排程改動從0重看。無音效或必要外連依賴。EP195官方Firstory單集、17分51秒與封面已核對；Apple單集ID、權限與實際音訊未確認。 合法溫度下成本以0.1kJ整數單位累計與核款，儲備不取整；不再用容差把不足視為足額。取樣只用已達付款時點，不提前顯示下一筆；逐步明確支付下一筆，完成後逐步明示從頭。示範保存B的實際停筆／畫面時間，0日、60日未回暖與61筆完成分清。相同／空／非有限輸入、語言與模式保留狀態及來源公式。",
    "A fixed60-day, no-feeding discrete ledger with uncalibrated constants, not hazel-dormouse or any species survival/temperature prediction. Stored fat energy is illustrative kJ, without grams conversion. Low-metabolism daily cost S=1.5+0.3 max(0,5-Ta)+0.08 max(0,Ta-5) kJ/day; minimum at5°C is an invented rule. Cold maintenance and warm costs are directional examples, not biological thresholds or calibrated curves. An awake day costs A=18+0.3 max(0,20-Ta) kJ/day; each rewarming costs R=6+0.2 max(0,20-Ta) kJ. n arousals are scheduled on days floor(60k/(n+1)), k1..n. An arousal day costs A+R, without adding a full low-metabolism day. After60 days, R is also required for final spring rewarming, without predicting all spring activity. Total demand=(60-n)S+n(A+R)+R. Zero arousals is an ideal ledger omitting midwinter arousals, not a healthy animal strategy. Species and arousal patterns differ. We do not simulate temperature, oxygen, life support, fat composition or the biological necessity of arousals. Each full daily/final cost is checked before spending and advancing. Insufficient funds stop at the previous day boundary; a positive balance may still not fund the next entry. This is not instantaneous biological shutdown or death; no hours of survival are predicted. Spent energy=initial-balance; unmet planned demand is separate. No negative stock. Fixed0-800kJ battery-like scale is a storage metaphor.12.2screen seconds show61 ledger steps:60 days and final rewarming. Step advances one day, then rewarming, not a61st winter day. Replay restarts at0; language/mode/current-mode clicks preserve state. Changing reserve, temperature or schedule restarts. No audio or essential online asset dependencies. Official Firstory EP195 page,17min51sec and artwork verified; Apple episode ID, entitlement and actual audio unconfirmed. Legal-temperature costs accumulate in integer0.1kJ units; reserve is not rounded and no affordability epsilon treats shortages as funded. Sample only records whose payment time has arrived. Step explicitly selects the next whole entry; completed Step names its restart. Demos keep Bactual stopping slot/time, distinguishing day0, day60without rewarming, and61paid entries. Same/blank/nonfinite inputs, language and mode retain state and source/formula openness."
  ],
  "formula": "60 winter days, no feeding; all constants invented\nS=1.5+0.3*max(0,5-Ta)+0.08*max(0,Ta-5) [kJ/day]\nA=18+0.3*max(0,20-Ta) [kJ/day]\nR=6+0.2*max(0,20-Ta) [kJ/rewarming]\nArousal days floor(60*k/(n+1)), k=1..n\nArousal day: A+R; other day: S; final spring: R\nDemand=(60-n)*S+n*(A+R)+R\nCheck full entry before spending: shortage stops at previous day\nSpent=initial-balance; no negative stock, no survival prediction\n61 ledger steps in12.2screen s; final step is rewarming, not day61\nLegal5°C grid gives integer0.1kJ cost units; internal tenth-kJ ledger does not round reserve or use an affordability epsilon\nSelect only records with slot/61<=current normalized phase; no future payment epsilon\nDisplaytime=slot/5 seconds; Step selects the next whole entry exactly, including final rewarming\nDemo/replay use actual stopping slot; completed Step explicitly restarts; source/language/mode/same input retain state",
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/34762135/",
    "Ruf et al. (2021) · Garden-dormouse torpor / arousal cycles"
  ],
  "extraSources": [
    [
      "https://journals.physiology.org/doi/10.1152/ajpregu.2000.279.1.R255",
      "Buck & Barnes (2000) · Arctic-ground-squirrel cold maintenance"
    ]
  ],
  "ep": "195",
  "episodeTitle": "〈EP.195｜哺乳動物（下）：生存大師的裝備庫與感官世界〉",
  "date": "2026-10-07",
  "podcast": {
    "verified": true,
    "urlVerified": true,
    "provider": "Firstory",
    "url": "https://open.firstory.fm/story/cmdpx4cuu00dk01xle9m8flf4",
    "source": "https://open.firstory.fm/story/cmdpx4cuu00dk01xle9m8flf4",
    "title": "〈EP.195｜哺乳動物（下）：生存大師的裝備庫與感官世界〉",
    "durationSeconds": 1071,
    "duration": "17 分 51 秒",
    "durationEn": "17 min 51 sec",
    "durationIso": "PT17M51S",
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/FSRkGqAhhOviNl0Pb7fhg.jpg",
    "coverAvailable": true,
    "coverFile": "podcast/ep195.jpg",
    "artworkVisualChecked": true,
    "verifiedOn": "2026-10-08",
    "publishedAt": "Fri, 13 Feb 2026 21:20:36 GMT",
    "evidenceBasis": "Current saved publisher RSS + exact full public Firstory episode page + matching artwork bytes and pixels. No Apple ID, entitlement or audio inference."
  },
  "icon": "🐿️",
  "keywords": "冬眠,睡鼠,低代謝,甦醒,脂肪能量,越冬,能量帳,保溫,hibernation,dormouse,torpor,arousal,fat energy,winter budget,thermoregulation,科學好好聽,science good listen",
  "description": [
    "逐日查看冬眠示例帳本，調脂肪能量、環境與甦醒次數；比較低代謝、回暖成本與不足時的停止，非真動物生存預測。",
    "Step through a toy hibernation ledger. Change stored energy, air temperature and arousals; compare costs and budget stops without predicting real survival."
  ],
  "formulaZh": "60冬日、不進食；成本自訂未校準，非動物存活／體溫預測\nS＝1.5+0.3 max(0,5−Ta)+0.08 max(0,Ta−5) kJ/day\nA＝18+0.3 max(0,20−Ta) kJ/day；R＝6+0.2 max(0,20−Ta) kJ/回暖\n中途n次安排第floor(60k/(n+1))日，k＝1..n\n甦醒日付A+R，不重複付S；其他日付S；60日後另外付R\n完整需求＝(60−n)S+n(A+R)+R；儲備不改完整需求\n合法溫度為5°C級距，成本均為0.1kJ整數倍\n帳本內部以0.1kJ單位扣款，不對儲備取整，不用容差讓不足當足額\n每筆先核對完整預算；不足不付、不前進、不做負庫存\n餘額＝起點−已付；已付＝低代謝+清醒+回暖\n不足時保留當前整日、餘額、下一筆與差額，非真停止代謝／死亡時刻\n只取已達付款時點的整筆資料，不提前顯示下一筆\n0.2畫面秒／1筆；12.2秒＝60日＋最後回暖共61筆\n逐步支付下一筆，最後回暖不是第61冬日；完成後逐步明示從頭\n0次中途醒為理想對照，不是健康策略；5°C最低成本是教具規則",
  "dateModified": "2026-10-10"
};
