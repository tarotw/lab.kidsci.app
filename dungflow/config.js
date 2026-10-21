window.CONFIG={
  "id": "F06",
  "path": "dungflow",
  "status": "complete",
  "controller": "dung.js",
  "extras": [
    "dung-model.js",
    "dung-view.js",
    "dung.css",
    "dung.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "title": [
    "糞金龜的養分搬運站",
    "Dung beetle nutrient station"
  ],
  "question": [
    "糞不見了，裡面的氮去了哪裡？",
    "Dung disappears. Where does its nitrogen go?"
  ],
  "hint": [
    "先按下一輪，看標記搬到哪裡；再調雨量，查流失帳。",
    "Press Next round and watch the markers move; change rain and inspect the loss ledger."
  ],
  "controls": [
    {
      "key": "beetles",
      "label": [
        "示例搬運金龜數",
        "Toy transporting beetles"
      ],
      "min": 0,
      "max": 10,
      "step": 1,
      "value": 5,
      "unit": "隻 / beetles"
    },
    {
      "key": "decay",
      "label": [
        "每輪分解機率",
        "Release chance per round"
      ],
      "min": 0,
      "max": 40,
      "step": 1,
      "value": 20,
      "unit": "% / %"
    },
    {
      "key": "rain",
      "label": [
        "雨指數（非毫米）",
        "Rain index (not mm)"
      ],
      "min": 0,
      "max": 100,
      "step": 1,
      "value": 30,
      "unit": "點 / points"
    },
    {
      "key": "seed",
      "label": [
        "同批次抽樣編號",
        "Batch draw seed"
      ],
      "min": 1,
      "max": 999,
      "step": 1,
      "value": 246,
      "unit": "號 / ID"
    }
  ],
  "defaults": {
    "beetles": 5,
    "decay": 20,
    "rain": 30,
    "seed": 246,
    "bury": 1
  },
  "action": [
    "下一輪",
    "Next round"
  ],
  "mission": [
    "分解變快，這一批的總氮會變多嗎？",
    "Does faster release create more nitrogen in this batch?"
  ],
  "options": [
    [
      "會，分解會生出氮",
      "Yes: decomposition makes N"
    ],
    [
      "不會，位置與形式改變",
      "No: location and form change"
    ]
  ],
  "answer": 1,
  "reason": [
    "同一批100個標記各1mg氮，分解不製造氮。地表、埋入、土壤可用、植物與流失加起來仍100mgN；養分可以循環，能量不是這樣循環。",
    "The same 100 markers each represent 1 mg of N. Release does not create N; surface, buried, available soil, plant and lost accounts still sum to 100 mg N. Nutrient cycling is different from energy flow."
  ],
  "comparisons": [],
  "ep": "246",
  "episodeTitle": "閃耀的黃金活寶石：仰望星空的滾糞蟲",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://iris.unito.it/retrieve/e27ce42c-8241-2581-e053-d805fe0acbaa/Nervo_et_al-2017-Ecology.pdf",
    "Nervo et al. 2017 · Dung-derived nitrogen tracing"
  ],
  "extraSources": [],
  "limit": [
    "原創五庫存、20輪、100mg氮的單批教具，不重現真農田氮收支或完整自然循環。每標記代表1mg氮，編號與顏色不是氮分子、化學形態或能量。Nervo2017作者機構PDF摘要／分類／方法與部分討論已讀，未逐圖表／全文驗證；本教具只取示蹤和不同生活策略背景，不以其實驗數字校準。不是所有糞金龜都埋糞，「搬運／不搬運」是模型開關，不等於埋糞型／住糞型所有生態效果。示例搬運數0–10，各增加地表標記每輪4%埋入機率；分解0–40%為微生物礦化與入土的合併箭頭，非糞金龜獨自完成所有分解。雨指數0–100不是毫米，地表沖走0–15%、土壤可用氮淋失0–20%；雨不調分解或植物吸收，並非真水文。土壤可用氮每輪15%被植物吸收。每ID每輪只有一次輪初位置的類別抽樣；地表競爭機率總和≤95%，其餘留下。標記是有限樣本，實際轉移比例未必剛好等於設定機率。以固定seed／輪／ID鍵取可重現示例，非動物智力或預測精確率。植物與流失為本批次觀察終點，沒有背景土壤氮、額外糞輸入、固氮、植物死亡回流、金龜攝食體內氮、微生物固持或氣態損失。流失是離開此示例地塊，並不是氮從宇宙消失。所有五帳含流失仍100mgN，各帳前量＋入−出＝後量。改參數按同回合從相同初始批次重算、暫停但保留回合；不是把新條件加到舊歷史中途。語言／檢視／模式／選ID保留實驗；三卡只換0／5／10搬運數，同seed、其他參數及回合一致。不宣稱任何情況更多金龜一定令所有指標更高。示意桑基線寬按本輪mgN，非空間距離／流速；0流只有虛線路徑。EP246單集網址／封面／時長待官方核實，只連節目首頁並明示Logo。",
    "Original single-batch toy: five pools, 20 abstract rounds and 100 mg N, not a real field budget or full natural cycle. Each numbered, colored marker is 1 mg N, not a molecule, chemical species or energy. Nervo2017 author PDF abstract, classification, methods and discussion excerpts were read, not every figure/table or the whole paper. Tracer and strategy background only; no calibration to its measurements. Not all dung beetles bury dung. Transport on/off is a model switch, not all functions of tunnelers/dwellers. Toy beetles0–10 each add 4% surface burial chance per round. Release0–40% combines microbial mineralization and soil entry, not beetles doing all decomposition. Rain index0–100 is not mm; runoff0–15% and available-soil leaching0–20%. Rain does not change release or uptake here. Available soil N has 15% uptake per round. Each marker uses its beginning-of-round pool and moves at most once; competing surface probabilities sum to at most95%, remainder stays. Finite markers need not exactly match probability percentages. Counter seed/round/ID gives reproducible examples, not intelligence or predictive accuracy. Plant and lost pools end this batch observation. Background soil N, new dung, fixation, litter return, beetle-body N, microbial immobilization and gaseous losses are omitted. Lost means leaving this plot, not destruction of N. All five pools sum to100mgN; old+in−out=new in each. Parameter changes recompute from the same starting batch at the retained round and pause; they do not continue old history under new conditions. Language/view/mode/ID selection preserves state. Three cards change beetles0/5/10 only, with matching seed, other conditions and round. More beetles need not improve every measure. Sankey widths represent this round’s mgN, not speed/distance; zero flow has only a dashed possible route. EP246 metadata unverified; podcast home and labeled logo only."
  ],
  "formulaZh": "每批100個固定ID標記，各1mg氮；初始全部在地表糞。\n五帳：地表S、埋入B、土壤可用M、植物P、流失L。\n每輪按輪初位置抽一次，最多走一條箭頭；輪不是日／月。\nS→B：4%×搬運金龜數×搬運開關；S→M：分解%；S→L：0.15%×雨指數。\nS機率相加最多95%，其餘留S；B→M：分解%，其餘留B。\nM→P：15%；M→L：0.2%×雨指數，其餘留M。\nP和L只作本批觀察終點，不代表真自然不再轉移。\n固定seed、輪、ID的32位元鍵混合均勻抽樣；非不受控瀏覽器亂數。\n每帳後量=前量＋本輪入帳−本輪出帳；S+B+M+P+L=100mgN。\n實際1mg標記數是有限抽樣，機率不是每輪保證的實際百分比。\n分解合併礦化與入土；搬運／雨／吸收率全自訂，不作物種或農田預測。",
  "formula": "100 fixed-ID markers, each1mgN; initially all in surface dung S.\nPools: surface S, buried B, available soil M, plant P, lost L.\nOne draw from beginning-of-round location; at most one edge per abstract round.\nS→B=.04*beetles*transport; S→M=release/100; S→L=.0015*rainIndex.\nSum of S probabilities≤.95; remainder stays. B→M=release/100.\nM→P=.15; M→L=.002*rainIndex; remainder stays.\nP and L end this batch observation, not all natural transfers.\nCounter-keyed32-bit seed/round/ID mix provides a repeatable uniform draw.\nNew pool stock=old+this round in−this round out. S+B+M+P+L=100mgN.\nCounts are finite1mg marker samples, not guaranteed probability percentages.\nRelease combines mineralization and soil entry; all rates invented, no field prediction.",
  "keywords": "糞金龜,養分搬運,氮循環,分解,土壤,植物,降雨,養分流失,庫存收支,dung beetle,nutrient transfer,nitrogen,decomposition,soil,plant,rainfall,nutrient loss,mass balance",
  "description": [
    "調搬運金龜數、分解與雨指數，逐輪追蹤100個氮標記，在地表、土壤、植物與流失帳核對收支；繁中英文教學示例。",
    "Adjust toy beetle count, release and rain index, tracking 100 nitrogen markers through surface, soil, plant and loss accounts with per-round budgets in Chinese and English."
  ],
  "date": "2026-10-04",
  "icon": "🪲",
  "dateModified": "2026-10-11"
};
