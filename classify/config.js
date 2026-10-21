window.CONFIG={
  "id": "L06",
  "path": "classify",
  "status": "complete",
  "topic": "digital",
  "icon": "🧩",
  "date": "2026-10-17",
  "title": [
    "教機器分類：規則還是例子？",
    "Teach a classifier: rules or examples?"
  ],
  "question": [
    "學習卡全對，為什麼沒學過的魚卡仍可能分錯？",
    "Why can a classifier match every learning card yet get held-out fish cards wrong?"
  ],
  "defaults": {
    "labels": [
      0,
      0,
      0,
      0,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ],
    "algo": "near",
    "selected": 0,
    "testSelected": 4,
    "focus": "test",
    "x": 6,
    "y": 6,
    "checked": false,
    "seen": false
  },
  "extras": [
    "classify-model.js",
    "classify.css",
    "classify.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "description": [
    "標注合成魚卡的兩個圖案刻度，比較最近鄰與一層規則樹；用保留練習卡查看錯例、等距未知與資料選擇造成的邊界改變。",
    "Label synthetic fish cards with two pattern scales; compare nearest-neighbor and one-split tree predictions using held-out practice cards, errors, ties and changing boundaries."
  ],
  "keywords": "機器學習,分類,最近鄰,決策樹,訓練資料,測試資料,資料洩漏,科學好好聽,machine learning,classification,nearest neighbor,decision stump,training data,test data,data leakage",
  "sources": [
    [
      "https://scikit-learn.org/stable/modules/neighbors.html",
      "scikit-learn：距離近鄰與等距",
      "scikit-learn: neighbors and equal distances"
    ],
    [
      "https://scikit-learn.org/stable/modules/tree.html",
      "scikit-learn：樹的分割與Gini",
      "scikit-learn: tree splits and Gini"
    ],
    [
      "https://scikit-learn.org/stable/common_pitfalls.html",
      "scikit-learn：訓練與測試分離",
      "scikit-learn: separate training and test data"
    ]
  ],
  "podcast": {
    "ep": "EP96",
    "title": "機器人超進化：從傻傻聽話到偷偷學會變聰明",
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "mission": [
    "學習卡全符合，就保證之後的新卡全對嗎？",
    "Does matching all learning cards guarantee every new card will be right?"
  ],
  "options": [
    [
      "不保證，要看資料範圍與獨立新卡",
      "No: data coverage and independent new cards matter"
    ],
    [
      "保證，學習分數已證明任何魚都能分",
      "Yes: a learning score proves it can classify any fish"
    ]
  ],
  "answer": 0,
  "reason": [
    "最近鄰回看自己可以完全符合，卻在缺例子區域分錯；反覆看過答案的八張練習卡，也不能當全新資料的無偏成功率。",
    "Nearest neighbors can match their own examples while failing in regions without examples. Eight practice cards whose answers you have revisited cannot estimate unbiased performance on genuinely new data."
  ],
  "formula": [
    "X／Y為作者自訂0–10圖案刻度，兩軸事先同尺度；不是動物物理量。\n學習候選A1–A12可標藍0／金1／不加入−1，保留T1–T8永不進fit。\n最近鄰：選最小d²=(X−Xi)²+(Y−Yi)²；距離相同且標籤衝突→未知，自訂拒答而非庫預設。距離不是信心。\n一層樹：只從學習資料的X／Y相鄰不同值中點選切點；左≤切點，右>切點。\n每葉H=2p藍(1−p藍)，分割成本=各葉人數加權H；只有嚴格降低才分割。平手先X、再較小切點；葉多數平手→未知。\n作者參考兩隊：X+Y≥10為金，其餘藍；只是玩具指定答案，不是自然分類。\n學習自我符合對孩子標籤核對；保留卡分數對作者參考，未知另記、不混當答對。\n色塊為0.5格中心採樣，不是精確連續邊界。\n答案只在揭開後用於核對；反覆調整已看測試可能造成選擇偏差，不報無偏泛化率。",
    "X/Y: pre-agreed 0–10 custom pattern scales, not animal physical measurements.\nA1–A12 can be blue 0, gold 1 or unused −1; held-out T1–T8 never enter fit.\nNearest: minimize d²=(X−Xi)²+(Y−Yi)²; conflicting equal-distance labels→unknown, our explicit abstention rather than library default. Distance is not confidence.\nOne-split tree: training-only midpoints between distinct X/Y values; left ≤ cut, right > cut.\nLeaf H = 2pBlue(1−pBlue); minimize size-weighted H and split only with strict improvement. Split ties prefer X, then lower cut; equal leaf counts→unknown.\nAuthor reference: gold if X+Y ≥ 10, otherwise blue. A toy agreement, not biological truth.\nTraining self-match uses child labels; held-out scoring uses author answers. Unknown counts separately.\nColor tiles sample 0.5-grid centers, not an exact continuous boundary.\nAnswers score only after reveal. Repeated tuning after seeing answers can bias selection; no unbiased generalization claim."
  ],
  "limit": [
    "本機最近鄰與只分一次的樹，不是生成AI、完整scikit-learn或物種辨識。合成魚卡與兩隊為作者約定，圖案刻度不表達演化、毒性或價值；鰭圖形只示意。固定八張保留卡不入算法訓練，反覆看到其答案後調資料的分數仍不是無偏泛化估計。無例子／衝突平手明示未知；距離或葉標籤數不是機率。自我符合只核對孩子提供的標籤，未驗證自然正確性。",
    "Local nearest-neighbor and one-split tree, not generative AI, the full scikit-learn library or species recognition. Synthetic fish and teams are author agreements, not evolution, toxicity or value; fin shape is schematic. Eight fixed held-out cards never enter algorithm fitting, but tuning after seeing answers does not yield unbiased generalization estimates. Empty data or conflicting ties abstain; distances and label counts are not probabilities. Self-match checks the supplied labels, not biological truth."
  ]
};
