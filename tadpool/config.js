window.CONFIG={
  "id": "G09",
  "path": "tadpool",
  "status": "complete",
  "controller": "tadpool.js",
  "extras": [
    "tadpool-model.js",
    "tadpool.css",
    "tadpool.js"
  ],
  "title": [
    "箭毒蛙送蝌蚪：小水池的選擇",
    "Poison frog nurseries: choose a pool"
  ],
  "question": [
    "先選水池、送一隻，再走一天；水夠不夠，路遠不遠？",
    "Choose a pool, deliver one tadpole, then advance a day. Enough water? How far?"
  ],
  "hint": [
    "點 A、B 或 C，再按「送一隻」。最後走一天，看水量與同池提醒。",
    "Pick A, B or C and tap “Deliver one”. Then advance a day to inspect water and sharing."
  ],
  "defaults": {
    "dry": 2,
    "rain": 0,
    "resident": 1
  },
  "controls": [
    {
      "key": "dry",
      "label": [
        "每天乾燥失水",
        "Daily drying loss"
      ],
      "min": 0,
      "max": 4,
      "step": 1,
      "value": 2,
      "units": [
        "水格／教具日",
        "water units/toy day"
      ],
      "unit": "水格／教具日 / water units/toy day"
    },
    {
      "key": "rain",
      "label": [
        "每天落入的雨水",
        "Daily rain entering"
      ],
      "min": 0,
      "max": 4,
      "step": 1,
      "value": 0,
      "units": [
        "水格／教具日",
        "water units/toy day"
      ],
      "unit": "水格／教具日 / water units/toy day"
    },
    {
      "key": "resident",
      "label": [
        "B池原有幼體",
        "Residents in pool B"
      ],
      "min": 0,
      "max": 3,
      "step": 1,
      "value": 1,
      "units": [
        "隻示意幼體",
        "schematic tadpoles"
      ],
      "unit": "隻示意幼體 / schematic tadpoles"
    }
  ],
  "mission": [
    "最遠的水池，是否永遠是最好的選擇？",
    "Is the farthest pool always the best choice?"
  ],
  "options": [
    [
      "不是；要看水量、同池幼體和運送花費",
      "No; consider water, other tadpoles and travel costs"
    ],
    [
      "是；路遠就一定安全",
      "Yes; distance guarantees safety"
    ]
  ],
  "answer": 0,
  "reason": [
    "遠池每趟花7點，18點只能送兩隻；水多也不保證安全。近池便宜；持續淨失水時較早乾，雨夠多時不一定乾。所有符號與風險等級都是教具，不算死亡或成長。",
    "A far trip costs 7 points; 18 points cover only two. More water does not guarantee safety. The near pool is cheaper and dries sooner with persistent net water loss; enough rain can prevent drying. Symbols and alerts are a teaching model, not death or growth predictions."
  ],
  "comparisons": [],
  "ep": "s41",
  "episodeTitle": "〈VIP｜動物母親專輯(2)｜雨林裡的超級外送員：草莓箭毒蛙媽媽的「愛心便當」大冒險！｜SP.41〉",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/us/podcast/vip-%E5%8B%95%E7%89%A9%E6%AF%8D%E8%A6%AA%E5%B0%88%E8%BC%AF-2-%E9%9B%A8%E6%9E%97%E8%A3%A1%E7%9A%84%E8%B6%85%E7%B4%9A%E5%A4%96%E9%80%81%E5%93%A1-%E8%8D%89%E8%8E%93%E7%AE%AD%E6%AF%92%E8%9B%99%E5%AA%BD%E5%AA%BD%E7%9A%84-%E6%84%9B%E5%BF%83%E4%BE%BF%E7%95%B6-%E5%A4%A7%E5%86%92%E9%9A%AA-sp-41/id1812447277?i=1000764072568&l=ko",
    "episodeId": "1000764072568",
    "duration": "約24分鐘",
    "durationEn": "About 24 minutes",
    "subscribersOnly": true,
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource211/v4/0e/9f/de/0e9fde54-3804-9e83-d843-1d9a268814ea/20c9a940-3a00-45a2-80d0-24e4ba059f9f.jpg/1200x1200ECA.PESS01-60.jpg?imgShow=Podcasts211/v4/41/3f/f0/413ff073-a7c5-b6a0-8286-3f3dbf061111/mza_1220969070254895353.jpeg",
    "coverAvailable": true,
    "verifiedOn": "2026-10-07",
    "verifiedStorefront": "us",
    "TaiwanEntitlementVerified": false,
    "coverStatus": "Exact original official US Korean-language metadata200 and1200x1200cover saved/viewed. Subscriber-only label; Taiwan account access/audio/exact seconds unverified."
  },
  "source": [
    "https://link.springer.com/article/10.1007/s00265-016-2148-5",
    "Dugas等2016：同池攻擊不等於吃掉對方；已讀原刊摘要",
    "Dugas et al.2016: aggression is not cannibalism; publisher abstract read"
  ],
  "extraSources": [
    [
      "https://sites.harding.edu/plummer/herp/pdf/wilhelmamp10.pdf",
      "Stynoski 2009：母蛙運送、餵卵與地點辨識",
      "Stynoski 2009: maternal transport, egg provisioning and location cues"
    ],
    [
      "https://bibianarojas.co/wp-content/uploads/2015/02/rojas2014.pdf",
      "Rojas 2014：另一種箭毒蛙的水池選擇，不泛化",
      "Rojas 2014: pool selection in a different poison frog; not generalized"
    ]
  ],
  "description": [
    "用有限運送資源選三個示意水池，調乾燥、降雨與B池居民；逐日核對水收支、乾池與同池暴露，不推算真存活率。",
    "Choose three toy nurseries with a finite transport budget. Vary drying, rain and residents; trace daily water and sharing without predicting survival."
  ],
  "keywords": "草莓箭毒蛙,箭毒蛙,蝌蚪,親代照顧,運送,植物水池,水收支,乾旱,同池競爭,能量取捨,poison frog,Oophaga pumilio,tadpole transport,parental care,phytotelmata,water balance,drought,nursery competition,energy trade-off",
  "date": "2026-10-04",
  "icon": "🐸",
  "limit": [
    "以草莓箭毒蛙 Oophaga pumilio 常見的母蛙運送與餵未受精卵為背景；雄蛙也照顧卵，不能稱全靠母親。2016同池實驗出現攻擊與致死，但未觀察吃掉受害者；此頁不演示兄弟互吃。其他箭毒蛙可能由父蛙運送、容忍同池或吃幼體，不泛化。本例3隻、18資源點、1／2／3路格、3／5／7趟費、6／12／18水格容量、10教具日與所有提醒門檻自訂未校準。三池假設相同開口面積、滿池起步、容量不同；每日至少雨先入，再溢出，再失水，沒有植物補水／滲漏／天氣隨機性。水格不是mL；路格不是公尺，SVG位置不按路距比例。運送花費含去回程與卸下，日內瞬間完成；只有初次運送，後續餵卵、媽媽維持與幼體營養／成長未計入，不能稱完整育幼能量帳。只允許送到目前有水的池；到達以當日記錄，下一日開始計每日暴露。已送幼體不會自動死、消失、變態或搬池，未送幼體不被當成死亡。乾池幼體日＝日末池乾時本次已送幼體數；同池幼體日＝日末有水且總數超過1時已送幼體數。這些是觀察記帳，不是攻擊次數、機率、死亡率或安全判定。水0或總數>1標高提醒；水1–4且不共池標留意；其餘只是兩項提醒未觸發，不代表安全。改雨／失水只影響接下來的日子，改B池居民代表切換此刻之後的情境，不是玩家抓放野生動物；歷史帳保留。10日是觀察上限，不是真發育週期。不可當野外飼育指引。 提示按目前水量、趟費、雨與失水更新，不把可運送稱安全。乾池只有雨大於失水才在下一日恢復；雨水不增加運送點。第10日原本仍允許有水且足額的當日運送，明示零個後續觀察日，不補帳或推成成功。頁面隱藏暫停，可見不自動續播。 官方美國單集頁核對VIP／約24分鐘與封面；精確秒數、臺灣帳號權益及實際音訊未驗，沒有新增未測播放器。",
    "Context is common maternal transport and unfertilized-egg provisioning in Oophaga pumilio; males also care for eggs. A 2016 nursery experiment found aggression and fatalities without cannibalism of victims. Other species differ. Three tadpoles, 18 resource points, 1/2/3 route units, 3/5/7 trip costs, 6/12/18 water capacities, 10 toy days and alert thresholds are invented and unfitted. Equal openings, initially full pools and unequal capacities are assumed. Each day adds rain, spills overflow, then removes available water up to the drying demand; plant input, leakage and random weather are omitted. Water units are not mL; route units are not metres and SVG positions are not metric distances. Initial trips include return and unloading, complete within the same toy day, and omit later provisioning, maternal maintenance and larval food/growth; this is not a full parenting energy budget. Deliveries require current water and record arrival day; daily exposure begins with the next day. Tadpoles never automatically die, disappear, metamorphose or relocate; undelivered tadpoles are not deaths. Dry tadpole-days count delivered larvae at dry daily endpoints; shared tadpole-days count delivered larvae at wet endpoints with more than one total occupant. These are accounting observations, not attacks, probabilities, mortality or safety predictions. Dry/total>1 gives a high alert; 1–4 water units with no sharing gives watch; otherwise only these alerts are absent, not all dangers. Climate changes affect future days only. Changing B residents defines the situation from now on, not wildlife handling; history stays. Ten days is an observation limit, not development time or husbandry advice. Hints follow current water, trip costs, rain and drying; available destinations do not imply safety. A dry pool refills next day only when rain exceeds loss; rain does not restore trip points. The original model allows affordable wet-pool deliveries at day10, with zero subsequent observation days, no backfilled accounts or success claim. Hiding the page pauses; becoming visible does not auto-resume. The official US Korean-language episode page confirms VIP/about24minutes and artwork; exact seconds, Taiwan account entitlement and audio remain untested. No untested player was added."
  ],
  "formulaText": [
    "初始能量18點；每趟費＝去回程2×路格＋卸下1點，A／B／C分別3／5／7點。餘額＝18−已花，不能透支。每日日末：溢出=max(0,前日水＋雨−容量)；可用水＝前日水＋雨−溢出；實際失水=min(可用水,乾燥要求)；新水＝可用水−實際失水。起始水＋累積落雨＝目前水＋累積溢出＋累積失水。每筆日帳保留當天雨、失水設定與當天居民。幼體只能在有水且資源足夠時送，抵達日不回溯加暴露。設定只改未來，不重寫過去。",
    "Initial transport energy 18. Trip cost = 2 × route units + 1 unloading point; A/B/C cost 3/5/7. Reserve = 18 − spent, with no borrowing. Each daily endpoint: overflow = max(0, previous water + rain − capacity); available = previous + rain − overflow; actual loss = min(available, drying demand); new water = available − actual loss. Initial water + cumulative rain = current water + cumulative overflow + loss. Daily receipts retain that day’s settings and residents. Deliver only with water and enough resources; arrival does not add past exposure. Settings affect future events, never rewrite past receipts."
  ],
  "formula": "初始能量18點；每趟費＝去回程2×路格＋卸下1點，A／B／C分別3／5／7點。餘額＝18−已花，不能透支。每日日末：溢出=max(0,前日水＋雨−容量)；可用水＝前日水＋雨−溢出；實際失水=min(可用水,乾燥要求)；新水＝可用水−實際失水。起始水＋累積落雨＝目前水＋累積溢出＋累積失水。每筆日帳保留當天雨、失水設定與當天居民。幼體只能在有水且資源足夠時送，抵達日不回溯加暴露。設定只改未來，不重寫過去。\n\nInitial transport energy 18. Trip cost = 2 × route units + 1 unloading point; A/B/C cost 3/5/7. Reserve = 18 − spent, with no borrowing. Each daily endpoint: overflow = max(0, previous water + rain − capacity); available = previous + rain − overflow; actual loss = min(available, drying demand); new water = available − actual loss. Initial water + cumulative rain = current water + cumulative overflow + loss. Daily receipts retain that day’s settings and residents. Deliver only with water and enough resources; arrival does not add past exposure. Settings affect future events, never rewrite past receipts.",
  "dateModified": "2026-10-12"
};
