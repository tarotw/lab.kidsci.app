window.CONFIG={
  "id": "F04",
  "path": "weavelab",
  "status": "complete",
  "controller": "weave.js",
  "extras": [
    "weave-model.js",
    "weave-view.js",
    "weave.css",
    "weave.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "title": [
    "織巢鳥的纖維編織課",
    "Weaverbird fiber workshop"
  ],
  "question": [
    "把草葉交錯固定，就能分散拉力嗎？",
    "Can joined fibers share the pull?"
  ],
  "hint": [
    "先換成「無固定」，看看拉力與蛋重；再固定兩側，拖風力。",
    "Try No anchors and watch tension and egg support; then anchor both sides and change wind."
  ],
  "controls": [
    {
      "key": "length",
      "label": [
        "纖維長度倍率",
        "Fiber length factor"
      ],
      "min": 0.8,
      "max": 1.5,
      "step": 0.01,
      "value": 1,
      "unit": "× / ×"
    },
    {
      "key": "density",
      "label": [
        "交錯層數（並列纖維）",
        "Weave layers (parallel fibers)"
      ],
      "min": 1,
      "max": 4,
      "step": 1,
      "value": 2,
      "unit": "層 / layers"
    },
    {
      "key": "wind",
      "label": [
        "風力（−左／＋右）",
        "Wind force (−left / +right)"
      ],
      "min": -2,
      "max": 2,
      "step": 0.05,
      "value": 0,
      "unit": "N / N"
    },
    {
      "key": "egg",
      "label": [
        "示例蛋重（分3點）",
        "Toy egg mass (3 points)"
      ],
      "min": 0,
      "max": 100,
      "step": 1,
      "value": 30,
      "unit": "g / g"
    }
  ],
  "defaults": {
    "length": 1,
    "density": 2,
    "wind": 0,
    "egg": 30,
    "anchors": 0,
    "step": 24
  },
  "action": [
    "編一段",
    "Add a segment"
  ],
  "mission": [
    "把所有固定點拿掉，纖維還能把蛋重傳到樹枝嗎？",
    "With no anchors, can fibers transmit egg weight to the branch?"
  ],
  "options": [
    [
      "可以，交錯就能自己掛住",
      "Yes: crossings can suspend themselves"
    ],
    [
      "不行，還要連到固定點",
      "No: a path to an anchor is needed"
    ]
  ],
  "answer": 1,
  "reason": [
    "沒有連到固定點的組件沒有支撐，線力為0，外力沒有消失。增加層數會多用纖維，也增加自重；本站理想接點不是只交叉就黏住的真草葉。",
    "Unanchored components have no support and zero fiber force; their applied loads still exist. More layers add fibers and self-weight. Ideal locked joints here are not real grass sticking at every crossing."
  ],
  "comparisons": [],
  "ep": "265",
  "episodeTitle": "非洲草原的天才建築師：朱巴蘭織布鳥的空中別墅",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1474-919X.1963.tb02498.x",
    "Crook1963 · Weaverbird nest structure (summary)"
  ],
  "extraSources": [],
  "limit": [
    "原創二維有限繩網，不是真鳥巢剖面或全三維強度。Crook1963公開摘要比較62種織巢鳥，提到材料、附著與編織差異；本站未讀全文，不拿研究量測校準朱巴蘭織布鳥或判斷伴侶品質。11節點、24段的順序是自訂教學步序，非鳥的真實編織順序。只有白色圓點是理想鎖定接點；線條中途交叉不自動黏合。省略真草葉接點滑移／摩擦／扭轉／彎曲／雨水、鳥與枝條的動態及三維巢形。兩頂部支點參考x±0.10m，三層各三點高0.06／0.12／0.18m。每段參考長乘0.8–1.5得到未受拉長度；每層自訂EA10N、斷力0.8N、線密度5g/m，非物種草材量測。1–4層是同網路的並列纖維束，增加用料、自重與軸向剛度，不是改真鳥巢空間孔隙。拉長才有張力，鬆弛／受壓力0。自重每段各一半給兩端，斷後材料仍計在端點，不模擬掉落散料。蛋0–100g與水平風力−2..2N平均加到三底點；三點圖示是同一總重量的分配，非三顆真蛋。風力直接輸入N，不從風速估阻力。二維非線性靜力勢能求解，每次新條件重新從參考節點開始。平衡後超閾值的段同時斷開，再分配，非載荷緩升、疲勞或斷裂韌性。未連到支點的載入組沒有靜力解，零線力不表示外力消失；粉色位置只做標記，不是落下或停住的預測。只對連到固定點的組求平衡；未支撐外力另記。自由節點殘差≤1e−7N為收斂條件，求解失敗不當有效結果。選段顯示每條纖維拉力，不是整束力；直線畫兩端弦線，鬆線外形未解。視圖自動等比例縮放，10cm尺依比例更新；對照卡共用同一比例。參數變更停自動編織但保留步數，語言／檢視／模式／重選保留；從0／全24／重設是明確的步序動作。EP265單集metadata待官方核對，只連節目首頁並明示Logo。",
    "Original 2D finite cable toy, not a real nest section or 3D strength prediction. Crook1963 summary compares62 weaver species and describes material, attachment and weaving variation; full text unread, no calibration for Ploceus dichrocephalus or mate-quality inference. Eleven nodes and24 segments follow an invented teaching order, not bird behavior. Only white dots are ideal locked joints; mid-line crossings do not bond. Grass slip/friction/twist/bending/rain, bird/branch dynamics and3D shape are omitted. Reference pins x±0.10m; three rows y0.06/0.12/0.18m. Rest length equals reference length ×0.8–1.5. Invented per-layer EA10N, break threshold0.8N and line density5g/m are not measured grass. Layers1–4 are parallel fibers on the same graph, adding material, self-weight and axial stiffness, not spatial pores. Tension exists only when stretched; slack/compression carries zero. Half each segment mass is assigned to each end even after breaking; falling material is not modeled. Total toy egg0–100g and signed horizontal wind−2..2N are shared among three bottom points, not three real eggs. Wind is force in N, not speed-based drag. A nonlinear2D static energy solve starts from reference nodes for each new condition. Overloaded segments break simultaneously after equilibrium, then redistribute; no slowly ramped loads, fatigue or fracture toughness. Unanchored loaded components have no static solution: zero tension does not erase loads. Pink positions are markers, not predicted falls/rest positions. Equilibrium concerns anchored components only; unsupported force is separate. Free-node residual≤1e−7N defines convergence; failure is not a valid answer. Segment readout is per fiber, not whole bundle. Lines are end-to-end chords; slack shapes are unsolved. Auto-fit preserves geometry with a10cm scale; comparison cards share scale. Parameter changes pause automatic weaving and keep step; language/view/mode/reselection preserves state. From0/All24/Reset explicitly change sequence. EP265 metadata unverified; podcast home and labeled logo only."
  ],
  "formula": "Invented locked-joint cable network. Each segment has n parallel fibers.\nRest length L0=reference distance * lengthFactor; stiffness k=n*EA/L0.\nExtension=max(0,currentLength-L0); bundle tension T=k*extension; per-fiber t=T/n.\nPer-fiber EA=10N, break threshold=.8N, linear mass=.005kg/m.\nInstalled material mass=sum(n*L0*.005); half assigned to each endpoint, including after break.\nAt bottom nodes: horizontal wind/3 N; egg mass/3 *9.81N/kg. Self-weight at every node.\nE=sum(.5*k*extension^2)-sum(Fx*x+Fy*y) for anchored components.\nNonlinear Newton solve with descent line search, fixed pins, free-node residual <=1e-7N.\nAfter equilibrium all segments t>.8N break at once; solve again until stable or disconnected.\nUnanchored loaded nodes have no static solution; they retain unsupported loads but zero segment tension.\nExternal supported load + pin reactions = numerical residual. Unsupported load is a separate ledger.\nParallel layers have identical paths; extra layers add mass and stiffness. No true grass calibration.",
  "formulaZh": "理想鎖定接點繩網；每段有n條並列纖維。\n未拉長度L0=參考兩端距離×長度倍率；整束剛度k=n×EA/L0。\n伸長=max(0,當前兩端距離−L0)；整束張力T=k×伸長；每條t=T/n。\n每條EA10N、斷力閾值0.8N、線密度0.005kg/m都是自訂。\n已編材料質量=Σn×L0×0.005；每段各一半給兩端，斷開後也保留。\n三底點各受水平風力/3 N、總蛋質量/3×9.81N/kg；各點也受材料自重。\n只對連支點的組求勢能E=Σ0.5k×伸長²−Σ(Fx×x＋Fy×y)。\n非線性牛頓法＋下降線搜，支點固定，自由點殘差≤1e−7N。\n平衡後所有t>0.8N的段同時斷，重算直到穩定／斷連。\n未固定的載入組無靜力解，外力仍在，段張力0；位置只是標記。\n受支撐外力＋支點反力=數值殘差；未支撐外力分開記。\n層數是在同路徑並列增加纖維，增加質量與剛度，非真草材校準。",
  "keywords": "織巢鳥,編織,纖維,張力,固定點,載荷分配,材料重量,動物工程,weaverbird,weaving,fiber,tension,anchors,load sharing,material mass,animal engineering",
  "description": [
    "改纖維長度、交錯層數、支點、風力與蛋重，逐段觀察原創二維繩網張力、斷線與材料重量；繁中英文直接操作。",
    "Change length, weave layers, anchors, wind force and toy egg mass in an original2D tension network, exploring construction, broken paths and material cost in Chinese and English."
  ],
  "date": "2026-10-04",
  "icon": "🪺",
  "dateModified": "2026-10-10"
};
