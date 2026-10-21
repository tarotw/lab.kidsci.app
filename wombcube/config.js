window.CONFIG={
  "id": "X08",
  "path": "wombcube",
  "status": "complete",
  "controller": "wombcube.js",
  "extras": [
    "wombcube-model.js",
    "wombcube.css",
    "wombcube.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "title": [
    "袋熊的方形便便",
    "Wombat shape workshop"
  ],
  "question": [
    "圓形腸道裡，軟硬不同的管壁能怎樣改變形狀？",
    "How can different wall stiffness change a shape inside a round gut?"
  ],
  "hint": [
    "先按「看收緊時」，找找右邊變平和彎曲的地方。",
    "Try At contraction. Look for flatter and more curved parts on the right."
  ],
  "defaults": {
    "contrast": 4,
    "strength": 75,
    "water": 0
  },
  "controls": [],
  "mission": [
    "圓度下降，就代表變成正方形嗎？",
    "Does lower circularity prove that a shape is square?"
  ],
  "options": [
    [
      "不一定；橢圓也可能下降",
      "No; an ellipse can also have lower circularity"
    ],
    [
      "一定，數字越小越方",
      "Yes; a smaller number always means squarer"
    ]
  ],
  "answer": 0,
  "reason": [
    "要看輪廓與變形過程，不能只用一個數字判定方形。",
    "Inspect the outline and its history; one number cannot establish squareness."
  ],
  "comparisons": [],
  "ep": "210",
  "episodeTitle": "〈EP.210｜澳洲荒野的「戰鬥推土機」：揭開袋熊的生物學奧秘〉",
  "podcast": {
    "verified": true,
    "urlVerified": true,
    "provider": "Firstory",
    "url": "https://open.firstory.fm/story/cmmpnhkt8fy1x01uh2fn97j8q",
    "source": "https://open.firstory.fm/story/cmmpnhkt8fy1x01uh2fn97j8q",
    "title": "〈EP.210｜澳洲荒野的「戰鬥推土機」：揭開袋熊的生物學奧秘〉",
    "durationSeconds": 654,
    "duration": "10 分 54 秒",
    "durationEn": "10 min 54 sec",
    "durationIso": "PT10M54S",
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/7f9MbawbOznmt9rxNcfz3.jpg",
    "coverAvailable": true,
    "coverFile": "podcast/ep210.jpg",
    "artworkVisualChecked": true,
    "verifiedOn": "2026-10-08",
    "publishedAt": "Fri, 13 Mar 2026 21:05:48 GMT",
    "evidenceBasis": "Current saved publisher RSS + exact full public Firstory episode page + matching artwork bytes and pixels. No Apple ID, entitlement or audio inference."
  },
  "source": [
    "https://hu.gatech.edu/wp-content/uploads/2021/01/Hu21-wombat.pdf",
    "Yang等2021：袋熊方形糞便的彈性環研究（作者公開PDF）",
    "Yang et al. 2021: elastic-ring study of wombat feces (author PDF)"
  ],
  "extraSources": [],
  "description": [
    "比較均勻與軟硬分區的彈性環，調整收縮和含水示意情境，觀察圓角與橢圓如何出現。原創互動教具，保留截面面積，不把圓度當正方形證明。",
    "Compare uniform and segmented elastic rings. Adjust contraction and illustrative moisture scenarios to observe rounded corners and ovals. This original teaching model preserves cross-sectional area and distinguishes circularity from squareness."
  ],
  "keywords": "袋熊,方形便便,腸道,彈性,軟硬分區,截面,面積守恆,wombat,cube feces,elastic ring,stiffness,contraction,circularity",
  "date": "2026-10-04",
  "icon": "🟫",
  "limit": [
    "研究對象為裸鼻袋熊Vombatus ursinus。論文的動態環假設兩硬兩軟交替；不是四面方形出口，也不是袋熊刻意雕刻。這裡是受該機制啟發的48點二維彈性環，並非論文模型或真腸道的數值重現。初始張力與均勻壓力平衡；收緊半段、放鬆半段。步長0.002，共1000步，只有相對進度，不是真實秒數。每步用整體縮放恢復各自初始面積，並加入相對初始輪廓的離散彎曲正則項；這是教具數值約束，不是研究中的體積／壓力定律。節點同時代表管壁及隨壁材料，沒有獨立顆粒在壁內穿行。含水三情境僅把自訂阻尼設為2、3.5、5；無含水百分比、流變校準、塑性、乾燥或永久定形，不宣稱較乾一定較方。兩環初始半徑相同，各自面積固定，但分區環節點疏密不同而初始多邊形面積略異。圓度4πA/L²下降也可能是橢圓；不是立方體準確率。下方排放只複製目前輪廓並按外框對齊，無重力、接觸或堆疊穩定性計算。不提供真腸道尺寸、壓力、時間或醫療判定。本集EP210資料已核；延伸EP57的官方單集資料仍待核對。",
    "The research concerns the bare-nosed wombat Vombatus ursinus. The paper assumes alternating two stiff and two soft regions in its dynamic ring, not a square outlet or deliberate sculpting. This original 48-node 2-D ring is inspired by that mechanism, not a numerical reproduction of the paper or a real intestine. Initial tension balances uniform pressure; one half contracts and the other relaxes. A 0.002 step for 1000 steps gives relative progress, not real seconds. Global scaling restores each ring’s initial area after every step, with discrete bending regularization relative to its initial outline. These teaching constraints are not the paper’s volume or pressure law. Nodes lump the wall and adjoining material; no independent particles travel inside a wall. Three illustrative moisture scenarios set invented damping to 2, 3.5 or 5. There is no measured water fraction, calibrated rheology, plasticity, drying or permanent shape retention, and drier does not guarantee squarer. Both initial radii match, but different node spacing gives slightly different polygon areas, each conserved separately. Circularity 4πA/L² can decrease for an ellipse; it is not cube accuracy. The arrangement below copies the current outline and aligns bounding boxes; it has no gravity, contact or stability simulation. No real gut dimensions, pressures, times or medical judgments are provided. EP210 metadata is verified; the related EP57 metadata still awaits verification."
  ],
  "formula": "48 nodes; F_edge=k*(length-rest)*unit; alternating k=60 and 60*contrast; rest=.08*(1-strength/100) during contraction, .08 during relaxation; baseline pressure force=P*area_gradient; bending=-2*D4(q-q_initial); damped velocity update; centre and scale by sqrt(A_initial/A) each step; circularity=4*pi*A/perimeter^2.",
  "formulaText": [
    "相鄰點用彈簧相連：力＝k×(長度−目標長度)\n兩硬兩軟交替：k＝60及60×硬度比（自訂單位）\n前半段目標長度＝0.08×(1−收縮設定)；後半段恢復0.08\n初始壓力力＝P×面積梯度；初始彈簧力與它平衡\n彎曲平滑＝−2×輪廓偏移的四階差分\n含水情境只改阻尼：2／3.5／5（自訂）\n積分後置中，整體乘√(初始面積／目前面積)\n速度由修正前後位置差更新\n圓度＝4π×面積÷周長²；1接近圓，較小不一定方",
    "Adjacent nodes: spring force=k×(length−rest length)\nAlternating stiffness: k=60 and 60×ratio (invented units)\nFirst half: rest=.08×(1−contraction); second half: rest=.08\nInitial pressure force=P×area gradient balances initial springs\nBending regularizer=−2×fourth difference of outline displacement\nMoisture scenarios only change damping: 2 / 3.5 / 5 (invented)\nAfter integration: centre, then scale by √(initial area/current area)\nVelocity is recomputed from corrected displacement\nCircularity=4π×area/perimeter²; near 1 is round, lower is not necessarily square"
  ],
  "dateModified": "2026-10-08"
};
