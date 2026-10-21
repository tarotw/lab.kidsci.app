window.CONFIG={
  "id": "H09",
  "path": "flyland",
  "status": "complete",
  "controller": "flyland.js",
  "extras": [
    "flyland-model.js",
    "flyland.css",
    "flyland.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "title": [
    "斑馬條紋與虻的降落",
    "Zebra stripes and fly landings"
  ],
  "question": [
    "同一批示例虻，換個花紋會停下來嗎？",
    "Will the same example flies land on a different pattern?"
  ],
  "hint": [
    "先按走一步，再換粗、細條紋看落點。",
    "Step forward, then compare wide and thin stripes."
  ],
  "defaults": {
    "pattern": "solid",
    "contrast": 100,
    "seed": 3,
    "effect": "on"
  },
  "controls": [],
  "mission": [
    "示例條紋讓落地變少，能證明牠們真的較少被咬嗎？",
    "Do fewer simulated landings prove fewer real bites?"
  ],
  "options": [
    [
      "還不行，要靠真實受控研究核對",
      "No; real controlled research is still needed"
    ],
    [
      "可以，動畫就是測量結果",
      "Yes; the animation is a measurement"
    ]
  ],
  "answer": 0,
  "reason": [
    "這裡的門檻是我們設定的。固定亮度、面積與種子，能公平比較這個教具；真動物還受氣味、動作與昆蟲種類等影響，降落也不等於叮咬。",
    "We chose these thresholds. Equal brightness, area and seeds make this toy comparison fair. Real animals also differ in odor, movement and fly species; landing is not biting."
  ],
  "comparisons": [],
  "ep": "253",
  "episodeTitle": "狂野草原謎團！斑馬為什麼不能像馬一樣被我們騎？",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0210831",
    "Caro等（2019）：虻的接近與降落觀察",
    "Caro et al. (2019): horsefly approaches and landings"
  ],
  "extraSources": [
    [
      "https://pubmed.ncbi.nlm.nih.gov/36700395/",
      "Caro等（2023）：對比與圖樣大小（摘要）",
      "Caro et al. (2023): contrast and pattern size (abstract)"
    ],
    [
      "https://www.bristol.ac.uk/news/2023/february/zebra-stripes.html",
      "Bristol作者機構：圖樣研究說明",
      "Bristol author institution: pattern study"
    ]
  ],
  "description": [
    "固定平均亮度、面積和亂數，逐步比較純色、粗條紋與細條紋的示例虻路徑；切換無作用假設，區分教具趨勢與實測證據。",
    "Keep mean brightness, area and random seed equal while comparing example fly paths around plain, wide-striped and thin-striped panels. Test a no-effect assumption and separate toy trends from evidence."
  ],
  "keywords": "斑馬,條紋,虻,降落,受控實驗,平均亮度,亂數種子,zebra stripes,horsefly,tabanid,landing,controlled experiment,contrast,random seed",
  "date": "2026-10-04",
  "icon": "🦓",
  "limit": [
    "本頁是原創合成布片與24條示例路徑，不是野外錄影、虻神經模型或真實咬傷預報。研究方向支持部分條紋／高對比圖樣可降低虻降落，但確切視覺機制未由此教具證明，也不擴及所有昆蟲、散熱或迷彩。純色、粗與細條紋面積固定為240×260圖單位²；黑白各半，線性平均亮度0.50，以sRGB轉碼顯示，非螢幕量測亮度。條紋單寬分別40與10圖單位，無動物公分意義。0–100對比是我們的滑桿設定，並非研究實測Michelson對比；實際線性明暗為0.50±0.45×設定/100。效果開啟時，純色門檻0.65，粗紋0.65−0.25c，細紋0.65−0.45c，c為設定/100；全部自訂，不擬合研究效果量。每隻共享同一個0–1亂數，低於門檻才示意停留；效果關閉或對比0三種花紋規則相同。亂數只由1–9種子產生，改條件不重抽；重播相同，換種子回第0步。前三種對照在同一步比較同一批；條件修改保留步數並重新計算，不是現實中途換皮。第0–6步共用接近路徑，第7步起用自訂插值，第9步分成停留／飛走，第12步演示結束；步不是秒，未模擬力量、碰撞、真速度或昆蟲決策。起點、24隻數量與氣味等固定；不預測遠處吸引或所有真實條紋的排序。降落不等於吸血或疾病傳播。EP253單集metadata待確認。",
    "Original synthetic panels and 24 example tracks, not field footage, fly neurobiology or bite prediction. Research supports reduced horsefly landing on some striped/high-contrast surfaces, but this toy cannot establish the visual mechanism or generalize to every insect, cooling or camouflage. All panels cover 240×260 drawing units squared. Stripes have equal dark/light area and linear mean luminance0.50, encoded as sRGB rather than measured on a screen. Stripe widths40 and10 are drawing units, not centimeters. Contrast0–100 is our setting, not a measured Michelson contrast; linear levels are0.50±0.45×setting/100. With the effect on, thresholds are0.65 for plain,0.65−0.25c for wide and0.65−0.45c for thin, where c=setting/100. These are chosen values, not fitted research effects. Each fly shares one uniform draw and stays only when it falls below the threshold. Effect off or zero contrast gives identical rules. Seeds1–9 fix all draws; replay repeats, and changing seed restarts at step0. All panels compare the same batch and step. Changing conditions keeps the step and recomputes the counterfactual, not a mid-flight skin change. Steps0–6 share an approach; later paths use chosen interpolation, outcomes appear at9 and end at12. Steps are not seconds; no force, collision, real speed or sensory decision simulation. Starting points, fly count and odor are fixed; no distant attraction or universal stripe ranking prediction. Landing is not feeding or disease. Official EP253 metadata awaits verification."
  ],
  "formula": "c=contrast/100; Ldark=0.5-0.45c; Llight=0.5+0.45c. Gate=0.65-k*c; k=0/0.25/0.45 for solid/wide/fine, or k=0 when effect off. Common LCG draw u<gate => example landing. Steps0..12; outcomes at9.",
  "formulaText": [
    "明暗亮度0.50±0.45×(對比設定/100)，兩色各半，平均0.50。\n純色0.50；三種布片面積皆240×260圖單位²。\n自訂停留門檻：純色0.65、粗紋0.65−0.25c、細紋0.65−0.45c。\n無作用假設：三個門檻都0.65；不是用資料選出的勝者。\n每隻固定同一亂數u；u<門檻就示例停留，其餘飛走。\n24＝接近中＋停留＋飛走；第9步才記入結果。\n同一種子重播相同，有限樣本可能打平；不是實測降落率。",
    "Linear levels0.50±0.45×(contrast/100), equal areas, mean0.50.\nPlain luminance0.50; every panel area240×260 drawing units².\nChosen gates: plain0.65, wide0.65−0.25c, thin0.65−0.45c.\nNo-effect assumption: every gate0.65; not a data-selected winner.\nEach fly shares one draw u; u<gate means example landing, otherwise leaving.\n24=approaching+landed+leaving; outcomes counted from step9.\nSame seed replays exactly; finite batches may tie. Not a measured landing rate."
  ],
  "dateModified": "2026-10-13"
};
