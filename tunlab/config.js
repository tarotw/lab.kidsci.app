window.CONFIG={
  "id": "G05",
  "path": "tunlab",
  "status": "complete",
  "controller": "tunlab.js",
  "extras": [
    "tunlab-model.js",
    "tunlab.css",
    "tunlab.js"
  ],
  "title": [
    "水熊蟲的休眠不是無敵",
    "Tardigrade dormancy is not invincibility"
  ],
  "question": [
    "先按逐步，看慢慢變乾與復水後的等待。",
    "Step through drying and the wait after water returns."
  ],
  "hint": [
    "所有條件都可直接調；先用慢乾與有水，看能否恢復。",
    "All controls are ready. Try slow drying and returning water."
  ],
  "defaults": {
    "strategy": "prepare",
    "dry": 1,
    "water": 2,
    "challenge": 0
  },
  "controls": [
    {
      "key": "dry",
      "label": [
        "乾燥快慢",
        "Drying rate"
      ],
      "min": 0,
      "max": 10,
      "step": 1,
      "value": 1,
      "units": [
        "示意刻度",
        "toy marks"
      ],
      "unit": "示意刻度 / toy marks"
    },
    {
      "key": "water",
      "label": [
        "後半段復水",
        "Rewetting supply"
      ],
      "min": 0,
      "max": 10,
      "step": 1,
      "value": 2,
      "units": [
        "示意刻度",
        "toy marks"
      ],
      "unit": "示意刻度 / toy marks"
    },
    {
      "key": "challenge",
      "label": [
        "乾燥期間示例挑戰",
        "Toy dry-phase challenge"
      ],
      "min": 0,
      "max": 10,
      "step": 1,
      "value": 0,
      "units": [
        "示意刻度",
        "toy marks"
      ],
      "unit": "示意刻度 / toy marks"
    }
  ],
  "mission": [
    "縮成小桶，就保證能恢復嗎？",
    "Does a tun shape guarantee recovery?"
  ],
  "options": [
    [
      "不保證，準備與環境條件都重要",
      "No; preparation and conditions matter"
    ],
    [
      "保證，水熊蟲什麼都不怕",
      "Yes; tardigrades can withstand anything"
    ]
  ],
  "answer": 0,
  "reason": [
    "外觀與恢復能力不同。這些自訂門檻只是教具，不是所有水熊蟲的真耐受界線。",
    "Appearance and recovery capacity differ. Invented thresholds are teaching rules, not real limits for all tardigrades."
  ],
  "comparisons": [],
  "ep": "c18",
  "episodeTitle": "〈VIP點播｜微米世界的極限生存大師：水熊蟲的「假死」超能力｜VIP.18〉",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/in/podcast/vip%E9%BB%9E%E6%92%AD-%E5%BE%AE%E7%B1%B3%E4%B8%96%E7%95%8C%E7%9A%84%E6%A5%B5%E9%99%90%E7%94%9F%E5%AD%98%E5%A4%A7%E5%B8%AB-%E6%B0%B4%E7%86%8A%E8%9F%B2%E7%9A%84-%E5%81%87%E6%AD%BB-%E8%B6%85%E8%83%BD%E5%8A%9B-vip-18/id1812447277?i=1000775524331&l=hi",
    "episodeId": "1000775524331",
    "duration": "約18分鐘",
    "durationEn": "About 18 minutes",
    "subscribersOnly": true,
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource211/v4/8a/73/b9/8a73b91e-d756-c853-d722-1314c8cddd3d/e159bbdd-981e-421a-b172-af1cf05575ae.jpg/1200x1200ECA.PESS01-60.jpg?imgShow=Podcasts211/v4/41/3f/f0/413ff073-a7c5-b6a0-8286-3f3dbf061111/mza_1220969070254895353.jpeg",
    "coverAvailable": true,
    "verifiedOn": "2026-10-07",
    "verifiedStorefront": "in",
    "TaiwanEntitlementVerified": false,
    "coverStatus": "Exact official Indian storefront metadata200 and original1200x1200artwork saved/viewed. Page labels subscriber-only. Taiwan account access, audio and exact seconds not tested."
  },
  "source": [
    "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144803",
    "Kondo等2015：部分水熊蟲的準備條件",
    "Kondo et al.2015: preconditioning"
  ],
  "extraSources": [
    [
      "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0261485",
      "Poprawa等2022：tun外觀不保證恢復",
      "Poprawa et al.2022: tun appearance and recovery"
    ],
    [
      "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0270386",
      "Roszkowska等2023：不同種與恢復等待",
      "Roszkowska et al.2023: species and recovery"
    ],
    [
      "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0317780",
      "2025作者與機構勘誤",
      "2025 author/affiliation correction"
    ]
  ],
  "limit": [
    "30拍的自訂狀態機，非真時間、水含量百分比、相對濕度、存活率、致死閾值或所有種的生理。前20拍乾燥、後10拍復水；水格、準備4拍、恢復3拍、挑戰30點全部未校準。挑戰只代表本例乾燥期間額外條件，不能換°C、輻射或真空。失敗表示本例未恢復，不是宣判動物死亡；換參數會從起點重算同拍，不是治療或逆轉傷害。tun外觀不能保證成功；活躍需要水，準備／tun／等待期間失去覓食機會。真物種、乾燥方法、時間與復水影響不同；只示意有條件的脫水休眠，不把所有隱生都說成同一種tun。不作生物實驗操作或人體療效推論。 tun記錄拍只在尚未受阻且符合本例tun條件時計入；包含觸發挑戰受阻那一拍，之後停止。水帳仍更新，外形可維持小桶；該數字不等於所有小桶外觀拍數或全部未覓食拍。新開說明／頁面隱藏暫停，恢復頁面不自動續播；切語言／模式恢復已開面板保留播放。30拍只代表觀察區段結束，未活動不推成永遠不能恢復；換參數是另一情境。",
    "An invented 30-step state machine, not real time, water percentage, relative humidity, survival probability, lethal limits or physiology of every species. Twenty drying steps precede ten rewetting steps. Water marks, four preparation steps, three recovery steps and 30 challenge points are uncalibrated. Challenge stands for extra dry-phase conditions, not temperature, radiation or vacuum. Failure means no recovery in this example, not a declaration of death. Parameter changes recompute the same step from the start, not a treatment or reversal. Tun appearance does not guarantee recovery. Active life needs water; preparation, tun and waiting lose feeding opportunities. Species, protocols and durations vary; only conditional anhydrobiosis is illustrated, not every type of cryptobiosis. No animal procedures or human treatment claims. Tun-step records count the toy tun condition while not yet blocked, including the step triggering challenge blockage, then stop. Water bookkeeping continues and a tun shape can remain; this count is not every tun-shaped or non-feeding step. Opening explanations or hiding the page pauses; becoming visible does not auto-resume. Language/mode restoration of open panels preserves playback. Step30 ends the observation window; inactivity does not predict never recovering. Changing parameters creates another scenario."
  ],
  "formulaText": [
    "前20拍：每拍失水min(現有水,8×乾燥刻度)。後10拍：每拍入水min(100−現有水,10×復水刻度)。水格=100+累計入−累計失。選準備且乾燥>0時，4個水≥40拍才能完成準備；未準備而水<40，本例失敗。已準備且水≤20進tun，乾燥拍累計挑戰，>30點本例失敗。復水拍水≥80連續3拍才恢復；水不足不覓食。乾燥0直接保持活動。準備完成而水未低到20時仍等待，不直接畫tun；每拍只有活動階段算一次可覓食機會。以上全為自訂規則，無真致死數值。 tun拍計數包含觸發挑戰受阻的拍；本例一旦受阻，後續不再增加tun／覓食／準備紀錄，但入失水帳仍計算。沒有把晚些復水當修復。",
    "For the first 20 steps, lose min(current water,8×drying mark) per step. For the last 10, add min(100−water,10×rewetting mark). Water=100+added−lost. With preparation selected and drying>0, four drying steps at water≥40 are required. Below 40 before preparation, this example fails. Prepared and water≤20 enters tun; challenge accumulates only on dry tun steps. Above 30 points fails here. On rewetting steps, three consecutive steps at water≥80 restore activity; inadequate water prevents feeding. Drying 0 stays active. Completed preparation waits until water≤20 before a tun is shown. Only active steps count feeding opportunities. All rules are invented, not real lethal values. Tun count includes the step triggering challenge blockage. Once blocked, later tun/feeding/preparation records do not increase, although water entry/loss is still accounted for. Later water is not modeled as repair."
  ],
  "description": [
    "自由改乾燥、復水與示例挑戰，比較活躍和準備休眠的水熊蟲，觀察有條件的恢復與覓食代價；繁中英文原創SVG教具。",
    "Change drying, rewetting and toy challenge; compare active and dormancy-preparing tardigrades, conditional recovery and missed feeding opportunities in a bilingual SVG tool."
  ],
  "keywords": "水熊蟲,緩步動物,休眠,脫水休眠,隱生,復水,小桶狀態,tardigrade,water bear,anhydrobiosis,cryptobiosis,tun,rehydration,preconditioning",
  "date": "2026-10-04",
  "icon": "💧",
  "formula": "前20拍：每拍失水min(現有水,8×乾燥刻度)。後10拍：每拍入水min(100−現有水,10×復水刻度)。水格=100+累計入−累計失。選準備且乾燥>0時，4個水≥40拍才能完成準備；未準備而水<40，本例失敗。已準備且水≤20進tun，乾燥拍累計挑戰，>30點本例失敗。復水拍水≥80連續3拍才恢復；水不足不覓食。乾燥0直接保持活動。準備完成而水未低到20時仍等待，不直接畫tun；每拍只有活動階段算一次可覓食機會。以上全為自訂規則，無真致死數值。 tun拍計數包含觸發挑戰受阻的拍；本例一旦受阻，後續不再增加tun／覓食／準備紀錄，但入失水帳仍計算。沒有把晚些復水當修復。\nFor the first 20 steps, lose min(current water,8×drying mark) per step. For the last 10, add min(100−water,10×rewetting mark). Water=100+added−lost. With preparation selected and drying>0, four drying steps at water≥40 are required. Below 40 before preparation, this example fails. Prepared and water≤20 enters tun; challenge accumulates only on dry tun steps. Above 30 points fails here. On rewetting steps, three consecutive steps at water≥80 restore activity; inadequate water prevents feeding. Drying 0 stays active. Completed preparation waits until water≤20 before a tun is shown. Only active steps count feeding opportunities. All rules are invented, not real lethal values. Tun count includes the step triggering challenge blockage. Once blocked, later tun/feeding/preparation records do not increase, although water entry/loss is still accounted for. Later water is not modeled as repair.",
  "dateModified": "2026-10-11"
};
