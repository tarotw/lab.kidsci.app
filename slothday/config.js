window.CONFIG={
  "id": "D08",
  "path": "slothday",
  "status": "complete",
  "title": [
    "樹懶的一天：時間與能量",
    "A sloth day: time and energy"
  ],
  "question": [
    "多走幾小時，兩本帳會怎麼變？",
    "How does more moving change both ledgers?"
  ],
  "hint": [
    "先把移動從2調8小時，看休息少多少；再看一天的能量差額。",
    "Set moving from2 to8 hours: what happens to rest and the daily balance?"
  ],
  "controls": [
    {
      "key": "feed",
      "label": [
        "進食時間",
        "Feeding time"
      ],
      "min": 0,
      "max": 8,
      "step": 1,
      "value": 4,
      "unit": "h"
    },
    {
      "key": "move",
      "label": [
        "移動時間",
        "Moving time"
      ],
      "min": 0,
      "max": 12,
      "step": 1,
      "value": 2,
      "unit": "h"
    },
    {
      "key": "sun",
      "label": [
        "曬太陽時間",
        "Sunning time"
      ],
      "min": 0,
      "max": 12,
      "step": 1,
      "value": 2,
      "unit": "h"
    },
    {
      "key": "food",
      "label": [
        "示例食物熱值／每時",
        "Toy food energy per hour"
      ],
      "min": 10,
      "max": 100,
      "step": 10,
      "value": 40,
      "unit": "kJ/h"
    },
    {
      "key": "absorb",
      "label": [
        "能量吸收比例",
        "Energy absorbed"
      ],
      "min": 0,
      "max": 100,
      "step": 10,
      "value": 50,
      "unit": "%"
    }
  ],
  "defaults": {
    "feed": 4,
    "move": 2,
    "sun": 2,
    "food": 40,
    "absorb": 50
  },
  "action": [
    "看一天帳本",
    "View a day"
  ],
  "mission": [
    "慢慢移動，就完全不花能量嗎？",
    "Does moving slowly cost no energy?"
  ],
  "options": [
    [
      "仍需能量",
      "It still costs energy"
    ],
    [
      "完全免費",
      "It is free"
    ]
  ],
  "answer": 0,
  "reason": [
    "移動、進食和休息都需能量。日曬在這個自訂冷情境只補一部分暖身熱，不變成食物；時間總和不能超過24小時。",
    "Moving, feeding and rest all cost energy. In this assumed cool case, sun supplies part of warming heat, never food; the day cannot exceed24 hours."
  ],
  "comparisons": [
    {
      "label": [
        "移動2／8小時",
        "Move2 /8 hours"
      ],
      "key": "move",
      "a": 2,
      "b": 8,
      "base": {
        "feed": 4,
        "sun": 2,
        "food": 40,
        "absorb": 50
      }
    },
    {
      "label": [
        "吸收30／80%",
        "Absorb30 /80%"
      ],
      "key": "absorb",
      "a": 30,
      "b": 80,
      "base": {
        "feed": 4,
        "move": 2,
        "sun": 2,
        "food": 40
      }
    },
    {
      "label": [
        "日曬0／4小時",
        "Sun0 /4 hours"
      ],
      "key": "sun",
      "a": 0,
      "b": 4,
      "base": {
        "feed": 4,
        "move": 2,
        "food": 40,
        "absorb": 50
      }
    }
  ],
  "limit": [
    "固定24小時的自訂冷環境雙帳本，全部係數未校準，不是樹懶實際作息、體溫、消化速率或存活預測。進食F=0–8h、移動M=0–12h、曬太陽S=0–12h；F+M+S≤24，其餘休息，休息不等於睡眠。每次改一項，最大值限於24減另外兩項，不更動其他安排。模型對超時外部輸入依F→M→S夾限；UI限制當下項目。圖按進食→移動→曬→休息分組，非真晝夜時序。每時基礎2kJ；活動另扣進食1、移動8、曬1kJ/h。自訂每時暖身熱需求2kJ，日曬時環境供暖1.5kJ/h，該時代謝補0.5；其他時代謝補2。總成本=48+(F+8M+S)+(48−1.5S)。此為受控冷情境假設，不由研究推算，不能說暖環境曬越久越省能。環境暖身熱另列，不算食物能量、不是光合作用。食物總熱值F×示例熱值q(kJ/h)，吸收=總熱值×a/100，未吸收另列。簡化即時入帳，不模擬多室胃發酵、消化延遲、體溫、成長、生殖、過熱或熱儲存；不作動物餵養或日曬建議。差額可負代表帳面不足，不是脂肪庫存負值或死亡，沒有真生存幾日預測。慢移動與休息成本均非零。12畫面秒看24帳本時，步進一次1h；語言／模式保留進度，改參數从0重看；保存對照固定24h，不能隨重播進度變數字。研究為棕喉三趾樹懶，不把實測睡眠或代謝比例套到全體，也不把樹懶叫懶惰或蛾藻當必要共生。EP198官方台灣Apple單集1000710668769、完整集名已核對；2026-10-10從官方Firstory本集頁確認16分2秒，並從Apple頁實際picture來源取得官方封面。實際音訊／帳戶權益未測，未安裝GA。 取樣僅選已抵達的小時，不提前記下一筆；逐步一次明確前進下一小時，完成後從頭逐步有明示，示範時計12畫面秒／24帳本小時。夾限後同值亦保留；來源公式展開隨語言／模式保留。圖有固定差額kJ與時間h標示；赤字不阻止帳本核對，並非生存模擬。",
    "A fixed24-hour, invented cool-environment ledger, not measured sloth scheduling, body temperature, digestion or survival. Feeding F0–8h, moving M0–12h and sunning S0–12h total at most24; the remainder is rest, not necessarily sleep. Editing a time is capped by24 minus the other two, without changing them. External model inputs are bounded in F→M→S order; UI caps the edited item. Feeding→moving→sunning→rest grouping is a diagram, not a natural day/night sequence. Base cost2kJ/h; extra activity costs1 feeding,8 moving and1 sunning kJ/h. Invented warming requirement2kJ/h; sun supplies1.5kJ/h during sunning, with0.5kJ/h paid metabolically then and2 otherwise. Total cost=48+(F+8M+S)+(48-1.5S). This assumed cool case is not fitted to research and does not imply more sun saves energy in warm conditions. Solar warming is separate, never edible energy or photosynthesis. Gross food energy=F×toy q(kJ/h), absorbed=gross×a/100; unabsorbed is separate. Immediate bookkeeping omits fermentation, digestion delays, body temperature, growth, reproduction, overheating and heat storage. No feeding/sunning advice. Signed balance means a budget gap or surplus, not negative fat stock, death or days of survival. Rest and slow moving both cost energy.12screen seconds show24 ledger hours; Step advances1h. Language/mode preserve state; input changes restart. Saved24h comparisons keep final values during replay. Research species is Bradypus variegatus; no universal sleep duration or metabolism ratio, lazy label or necessary moth/algae claim. Taiwan Apple EP198 ID1000710668769/full title verified; current official Firstory episode page shows16min2sec. Official artwork obtained from the actual Apple picture source and visually checked. Audio/account access untested. No GA. Samples include only reached hours, no future-hour tolerance. Step selects the next whole hour; completed restart is explicit; demos show12display seconds/24ledger hours. Capped same-value inputs and source/formula openness survive language/mode changes. Fixed net-kJ/time-h chart labels; deficits do not stop bookkeeping and do not predict survival."
  ],
  "formula": "All constants invented; assumed cool environment, not sloth calibration\nF+M+S+rest=24 h; UI caps edited time to remaining hours\nGross=F*q; absorbed=gross*a/100; unabsorbed=gross-absorbed\nBase=24*2; activity=F+8*M+S\nSolar warming=1.5*S [kJ heat]; never food income\nMetabolic warming=48-solar [kJ]\nCost=base+activity+warming; signed balance=absorbed-cost\nGrouped hourly ledger;12screen s=24h; no survival prediction\nSample only records with hour/24<=current normalized phase, without future-hour epsilon\nStep selects next whole ledger hour;12display seconds=24hours, completion clamps at12s\nFull-day saved cards are independent of replay; same/capped-noop/invalid values retain state\nChart labels fixed net[kJ] and hour[h]; no fat-stock or survival inference",
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/30258712/",
    "Cliffe et al. (2018) · Sloth temperature and metabolism"
  ],
  "extraSources": [
    [
      "https://pubmed.ncbi.nlm.nih.gov/18482903/",
      "Rattenborg et al. (2008) · Wild-sloth sleep EEG"
    ]
  ],
  "ep": "198",
  "episodeTitle": "〈EP.198｜從巨獸到隱士：樹懶的節能生存奇蹟與史前冒險〉",
  "date": "2026-10-07",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277?i=1000710668769",
    "episodeId": "1000710668769",
    "duration": "16 分 2 秒",
    "durationEn": "16 min 2 sec",
    "coverAvailable": true,
    "verifiedOn": "2026-10-10",
    "coverStatus": "Current official Apple picture JPEG960w downloaded and visually matched to actual Apple/Firstory episode page; prior1x1 img-src placeholder was not artwork source. Direct Firstory image GET403 preserved, no repeat or header/URL variation.",
    "access": [
      "官方單集頁可讀；權益未測",
      "Official episode page readable; account access untested"
    ],
    "title": "〈EP.198｜從巨獸到隱士：樹懶的節能生存奇蹟與史前冒險〉",
    "source": "https://open.firstory.fm/story/cmdpx4cut00de01xl5jl5h7hp",
    "provider": "Apple Podcasts",
    "urlVerified": true,
    "durationSeconds": 962,
    "durationIso": "PT16M2S",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/0f/31/9b/0f319b0b-36de-b2c1-5c86-f09d4000df0e/mza_16641615994514448138.jpg/960x960bb-60.jpg",
    "coverFile": "podcast/ep198.jpg",
    "artworkVisualChecked": true,
    "evidenceBasis": "Actual native-review-slothday-apple and firstory public page snapshots/images; Firstory shows00:16:02; Apple episode1000710668769. Audio/account rights untested."
  },
  "icon": "🦥",
  "keywords": "樹懶,能量收支,時間排程,葉食,消化,日曬,保溫,休息,sloth,energy budget,time allocation,folivory,digestion,sunning,rest,科學好好聽,science good listen",
  "description": [
    "安排樹懶示例的24小時，調進食、移動、日曬及食物吸收；看時間上限、能量差額與另列的暖身熱。非真動物作息或存活預測。",
    "Plan a toy sloth day. Change feeding, moving, sunning and food absorption; explore24-hour limits, signed energy balance and separate warming heat, without survival predictions."
  ],
  "formulaZh": "全部常數為教具假設，固定24小時冷情境，非真樹懶作息／代謝校準\nF＝進食h，M＝移動h，S＝日曬h；休息＝24−F−M−S\nUI只限制當下改的項目至24減另外兩項，不暗改其他安排\n食物總熱值＝F×q；吸收＝F×q×a/100；未吸收＝F×q−吸收\n基礎成本＝24×2＝48kJ；活動成本＝F+8M+S kJ\n日曬環境供暖＝1.5S kJ熱，獨立列出，不算食物收入\n代謝補暖＝48−1.5S kJ；花費＝基礎+活動+代謝補暖\n整天差額＝吸收−花費，可負，非脂肪負庫存／死亡／存活時間\n進食→移動→日曬→休息為教學分組，非真晝夜活動；休息不等於睡眠\n逐時完整入帳，不提前顯示下一小時；每0.5畫面秒看1帳本小時\n12秒看24h；逐步明確前進下一完整小時，完成後從頭有明示\n曲線固定差額比例，縱軸kJ、橫軸h；單一點為目前已付帳\n保存A/B為完整24h帳，主畫面重播／換語言／模式不改保存值\n同值、夾限後仍同值、空值及非有限輸入保留進度／來源\n日曬省下的代謝暖身只適用本站冷情境，不是真曬太陽／餵食建議",
  "dateModified": "2026-10-10"
};
