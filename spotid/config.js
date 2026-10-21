window.CONFIG={
  "id": "H08",
  "path": "spotid",
  "status": "complete",
  "controller": "spotid.js",
  "extras": [
    "spotid-model.js",
    "spotid.css",
    "spotid.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "title": [
    "鯨鯊斑點的身分配對",
    "Whale shark spot matching"
  ],
  "question": [
    "把照片轉一下，還能找到同一個圖樣嗎？",
    "Rotate the picture: can you still match its pattern?"
  ],
  "hint": [
    "先轉動或縮放，再加入漏點；看候選與分數怎麼變。",
    "Rotate or scale first, then hide spots. Watch the candidates and scores."
  ],
  "defaults": {
    "sample": "A",
    "rotate": 0,
    "scale": 100,
    "shift": 0,
    "yaw": 0,
    "noise": 0,
    "missing": 0,
    "false": 0
  },
  "controls": [],
  "mission": [
    "畫面旋轉與斜拍壓扁，三角形比例都不變嗎？",
    "Do image rotation and an oblique view both preserve triangle ratios?"
  ],
  "options": [
    [
      "旋轉保留比例；斜拍壓縮可能改變",
      "Rotation preserves ratios; foreshortening may change them"
    ],
    [
      "兩種都一定保留，總能認出來",
      "Both always preserve them, so identification always works"
    ]
  ],
  "answer": 0,
  "reason": [
    "等比例縮放與平面旋轉保留邊長比例，斜拍只壓縮一個方向就會改變形狀。漏點、錯點與定位誤差也可能讓候選錯排；真研究仍需核對。",
    "Uniform scale and in-plane rotation preserve side ratios. Compressing one direction changes shape. Missing, false or misplaced spots can also reorder candidates; real research still needs validation."
  ],
  "comparisons": [],
  "ep": "260",
  "episodeTitle": "繁星鯊奇遇記：海洋溫柔巨人的超能力與星空密碼",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/j.1365-2664.2005.01117.x",
    "Arzoumanian等（2005）：鯨鯊斑點的三角形配對",
    "Arzoumanian et al. (2005): triangle matching of whale shark spots"
  ],
  "extraSources": [
    [
      "https://www.sharkbook.ai/photographing.jsp",
      "Sharkbook：同側圖樣與拍攝角度",
      "Sharkbook: same-side patterns and viewing angle"
    ]
  ],
  "description": [
    "旋轉、縮放和平移合成鯨鯊斑點圖，改斜拍、漏點、誤點與定位誤差，查看三角形比例和候選排名；分數不是身分機率。",
    "Rotate, scale and shift synthetic whale shark spot patterns. Add foreshortening, missing points, false points and position error to inspect triangle ratios and candidate rankings; scores are not identity probabilities."
  ],
  "keywords": "鯨鯊,斑點辨識,個體辨識,三角形相似,照片辨識,漏點,誤點,whale shark,photo identification,spot pattern,triangle matching,similarity transform,foreshortening,false positives",
  "date": "2026-10-04",
  "icon": "🔎",
  "limit": [
    "所有圖都是原創合成斑點，不是真動物照片、族群資料或官方身分。樣本1–3來自本機圖庫A/B/C，樣本4的D不在圖庫；揭曉只是檢查已知生成來源，不會修改配對。每份原本12點，固定漏點順序與固定260亂數噪聲，避免改條件時重抽。配對器只讀點的座標，不讀樣本代碼、漏點標籤或真身分。點位誤差在旋轉縮放前加入，單位為自訂圖點；誤點也跟著變換，皆同色。斜拍只作x乘cos角度的平面壓縮，不是相機透視、彎曲身體或真魚三維模型。比對先按各自最大點距離正規化，用三角形短邊／長邊與中邊／長邊篩候選，再用同一個旋轉＋縮放＋平移對整組點找一對一符合。門檻與分數完全自訂，並未重製論文全部投票、誤差推導與影像處理。忽略鏡像，不比較左右側，只有本機三個參考。分數=2×符合點數／(觀測點數＋12)，不是準確率、機率或保育狀況。明顯候選也要人工核對；未通過不表示新的鯨鯊，噪聲變大也不保證每一步分數單調下降。原始最長距離若被誤點改變，會影響正規化；很少點時不作可靠配對。EP260官方單集metadata待確認。 兩圖共用同一個自動檢視倍率，保留彼此大小關係；這只是畫面縮放，不改配對數值。",
    "All patterns are original synthetic points, not animal photographs, population records or official identities. Samples 1–3 come from catalog A/B/C; sample 4 is D, absent from the catalog. Reveal checks known generation truth without changing matching. Each source has 12 points, with a fixed omission order and fixed seed260 errors. The matcher receives coordinates only, not source IDs or truth labels. Position errors are added before rotation and scale in chosen drawing units; false spots undergo the same transform and share the same appearance. Oblique viewing is modeled only by x multiplied by cos(angle), not camera perspective, body curvature or real 3D geometry. Clouds are normalized by their own greatest pair distance. Short/long and middle/long triangle ratios propose candidates; a common rotation, scale and translation then seeks one-to-one spot agreement. Thresholds and score are chosen, not the full paper’s voting scheme, error propagation or image processing. No reflection, left/right matching or online database; only three local references. Score = 2 × matched points / (observed count + 12), not accuracy, identity probability or conservation status. Even a clear candidate needs human review. Failure is not proof of a new shark, and scores need not decrease monotonically as errors rise. False points can affect diameter normalization; too few points cannot yield a reliable match. Official EP260 metadata awaits verification. Both panels share one automatic display zoom, preserving relative size without changing matching."
  ],
  "formula": "Normalize each cloud by its diameter. Triangle signature=(short/long,middle/long); shortest/longest>=0.2 and twice-area/longest²>=0.08. Signature distance<=0.025 proposes orientation-preserving similarity fit. One-to-one matches within0.035 reference diameters. Score=2m/(n+12). Candidate:m>=8,score>=0.70,lead>=0.08. Otherwise uncertain/failed/insufficient.",
  "formulaText": [
    "三邊由短到長a≤b≤c；比較a/c與b/c。\n排除a/c<0.2或二倍面積/c²<0.08的三角形。\n兩組比例距離≤0.025，才嘗試共同旋轉、縮放、平移。\n正規化後離參考點≤0.035，算一對一符合；每點最多配一點。\n先找符合點最多的變換，同數再比位置誤差；誤差相差≤1e-10時選較大三角形供觀察。\n幾何分數=100×2m/(n+12)，m符合點、n觀測點。\n明顯候選：m≥8、分數≥70、領先第二名≥8分；不是身分機率。\n不足3點或沒有合格三角形：資料不足。\n其餘符合≥4點：不確定；更少：配對失敗。",
    "Sort sides a≤b≤c and compare a/c and b/c.\nExclude a/c<0.2 or twice-area/c²<0.08.\nSignature distance≤0.025 proposes one common rotation, scale and translation.\nOne-to-one agreement requires distance≤0.035 reference diameters.\nMaximize matched count; break count ties by positional error; within1e-10 choose the larger query triangle for display.\nGeometric score=100×2m/(n+12), with m matches and n observed points.\nClear candidate: m≥8, score≥70 and lead≥8 points, not identity probability.\nFewer than3 points or no eligible triangles: insufficient.\nOtherwise≥4 matches: uncertain; fewer: failed."
  ],
  "dateModified": "2026-10-13"
};
