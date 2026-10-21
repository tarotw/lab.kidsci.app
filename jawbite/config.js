window.CONFIG={
  "id": "X02",
  "path": "jawbite",
  "status": "complete",
  "controller": "jawbite.js",
  "extras": [
    "jawbite-model.js",
    "jawbite.css",
    "jawbite.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "title": [
    "食人魚的下顎槓桿",
    "Piranha jaw levers"
  ],
  "question": [
    "同樣拉一下，哪個咬點更有力？",
    "With the same muscle pull, which bite point is stronger?"
  ],
  "hint": [
    "把粉色咬點往支點移，看咬力和移動距離。",
    "Move the pink bite point toward the hinge; compare force and movement."
  ],
  "defaults": {
    "attach": 25,
    "bite": 55,
    "gape": 30,
    "force": 50
  },
  "controls": [],
  "mission": [
    "後牙較有力，就能同時移動得更遠嗎？",
    "Does the stronger rear bite also travel farther?"
  ],
  "options": [
    [
      "不會，同角度轉動時離支點近就移得少",
      "No: nearer the hinge moves less for the same rotation"
    ],
    [
      "會，有力就一定移得更遠",
      "Yes: more force always means more travel"
    ]
  ],
  "answer": 0,
  "reason": [
    "肌肉扭矩非零、兩個咬點都離支點時，後牙的輸出力臂短、平衡力較大；同樣外部試合1°卻上升較少。零扭矩時兩者力都是0，已到0°則不再試合。這是槓桿取捨，不是免費增加能量。",
    "With nonzero muscle torque and both bites away from the hinge, the rear point has a shorter output arm and greater balanced force, but less rise for the same external 1° test. Zero torque gives zero force at both points; at 0° no further test occurs. This is a lever trade-off, not free energy."
  ],
  "comparisons": [],
  "ep": "274",
  "episodeTitle": "揭開亞馬遜致命殺手的真相：食人魚的剪刀利齒與魔戒新物種的奇幻相遇",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://link.springer.com/article/10.1007/s00114-026-02071-w",
    "Huskey等2026：食人魚肌肉與各牙咬合模型",
    "Huskey et al. 2026: piranha muscle and tooth-specific bite models"
  ],
  "extraSources": [
    [
      "https://meyersgroup.ucsd.edu/papers/journals/Meyers%20488.pdf",
      "Velasco-Hogan與Meyers2021：下顎轉矩分析",
      "Velasco-Hogan & Meyers 2021: jaw torque analysis"
    ]
  ],
  "description": [
    "拖動肌肉附著點、咬點、張口角度與同一拉力，觀察垂直力臂、平衡咬合力及試轉1°的牙齒位移；比較前後牙並檢查零力臂。",
    "Move muscle attachment, bite point and gape under the same pull. Explore perpendicular moment arms, static bite force and tooth travel for a one-degree test rotation; compare front/rear teeth and zero-arm limits."
  ],
  "keywords": "食人魚,下顎槓桿,咬合力,力臂,轉矩,機械優勢,位移,張口角度,piranha,jaw lever,bite force,moment arm,torque,mechanical advantage,gape,displacement trade-off",
  "date": "2026-10-04",
  "icon": "🐟",
  "limit": [
    "單一無質量剛性顎桿與一條恆定拉力，固定支點及上方肌肉起點(-10,40) mm；顎長60 mm，附著距離0–40 mm、咬距0–60 mm、張口0–60°、肌肉力0–100 N全為自訂教具，非任何物種的解剖尺寸或實測性能。上顎、牙齒與頭形都是原創示意；牙齒形狀不用於推壓力或斷骨。真魚有多塊肌肉、肌肉長度張力關係、骨骼變形及複雜接觸，本頁沒有模擬。每個角度均假設物體頂住顎桿，做獨立靜態轉矩平衡；自由張口時不宣稱有此輸出反力。青箭頭為肌肉對顎桿的力，粉箭頭為物體向下反推顎桿，牙齒則給物體大小相等、方向相反的上推力；箭頭只表方向，不按力值縮放。輸入力臂是支點到肌肉作用線的垂直距離，不等於附著點距離。輸出反力設為鉛直，故輸出力臂是咬點的水平投影。支點反力承擔其餘合力，但對支點不產生轉矩。輸入力臂0或拉力0時扭矩與可平衡咬力均為0；咬點距離0時式子退化，顯示無法求咬力，不顯示無限大或任意選0。後方20 mm與前方55 mm比較一次只咬一處，共用拉力、附著位置與角度，不把兩個最大力同時加在一根顎上。位移尺是外部慢慢試轉1°的幾何差，不是肌肉自主運動；已閉至0°時不再往負角轉，位移為0。即使拉力0或附著在支點，外部仍可轉動，但本肌肉不會提供關閉扭矩。肌肉縮短量為兩個角度的線長差，牙上升量是垂直座標差；有限1°位移不可直接乘目前咬力冒稱精確功。瞬時速度比為輸出力臂／輸入力臂，僅在兩臂非零時定義；不是動態速度預測。N是牛頓、mm是毫米；不以教具N值作物種強弱排名，不直接把牛頓寫成公斤。EP274主題與EP65簡單機械背景，官方單集metadata待核實。",
    "One massless rigid jaw bar and one constant muscle pull, with a fixed hinge and muscle origin at (−10,40) mm. Jaw length 60 mm, attachment 0–40 mm, bite distance 0–60 mm, gape 0–60° and force 0–100 N are chosen teaching values, not measured anatomy or performance of a species. Upper jaw, teeth and head are original schematics; tooth shapes do not predict pressure or fracture. Real jaws have several muscles, length–tension effects, bone deformation and complex contact, which are omitted. Every gape is a separate static balance with an object holding the jaw; an empty open mouth is not claimed to produce that reaction. Cyan arrows show muscle force on the jaw; pink arrows show the object pushing down on it. The tooth pushes the object upward with equal magnitude. Arrows show direction only, not magnitude. The input moment arm is perpendicular distance from hinge to muscle line of action, not attachment distance. The chosen output reaction is vertical, so its moment arm is the bite point’s horizontal projection. Hinge reaction balances remaining forces but has zero moment about the hinge. Zero input arm or zero pull gives zero torque and balanced bite force; at bite distance zero, the torque equation is degenerate and force is undefined, not infinite or arbitrarily zero. Rear 20 mm and front 55 mm are alternative single-point bites sharing force, attachment and gape; they do not load both teeth with full force simultaneously. The travel ruler is an externally imposed one-degree closing test, not autonomous muscle motion. At 0° no further closing is imposed. An external probe can rotate the jaw with zero pull or attachment at the hinge, but this muscle supplies no closing torque. Muscle shortening is the difference of line lengths; tooth rise is a vertical coordinate difference. Multiplying current force by finite one-degree travel is not an exact work calculation. Local velocity ratio is output/input moment arm only when both are nonzero; it does not predict dynamic speed. N means newtons and mm means millimetres. Toy forces do not rank species, and newtons are not kilograms. EP274 is the topic, EP65 adds simple-machine background; official episode metadata awaits verification."
  ],
  "formula": "I=(a cosθ,−a sinθ), P=(−10,40) mm; u=(P−I)/|P−I|; rin=Ix uy−Iy ux; rout=b cosθ. τ=Fin rin, Fbite=τ/rout when b>0. Test δ=min(θ,1°): shortening=|P−Iθ|−|P−Iθ−δ|; toothRise=b[sinθ−sin(θ−δ)].",
  "formulaText": [
    "下顎支點O=(0,0)，肌肉起點P=(-10,40) mm。\n附著點I=(a cosθ,−a sinθ)；拉力方向u=(P−I)/|P−I|。\n輸入垂直力臂r入=Ix uy−Iy ux。\n咬點B=(b cosθ,−b sinθ)；垂直反力的r出=b cosθ。\nF入×r入=F咬×r出，扭矩單位N·mm。\nb=0時不除以0，標為無法求咬力。\n外部試合δ=min(張口角,1°)：\n肌肉縮短=原線長−新線長；牙上升=b[sinθ−sin(θ−δ)]。\n兩臂非零時，瞬時位移／速度比r出/r入=1/機械優勢。",
    "Hinge O=(0,0), muscle origin P=(−10,40) mm.\nInsertion I=(a cosθ,−a sinθ); pull unit vector u=(P−I)/|P−I|.\nInput perpendicular arm rin=Ix uy−Iy ux.\nBite B=(b cosθ,−b sinθ); vertical reaction arm rout=b cosθ.\nFin×rin=Fbite×rout; torque unit N·mm.\nAt b=0, do not divide by zero: bite force is undefined.\nExternal test closure δ=min(gape,1°):\nShortening=old muscle length−new length; rise=b[sinθ−sin(θ−δ)].\nFor two nonzero arms, local motion ratio rout/rin=1/mechanical advantage."
  ],
  "dateModified": "2026-10-08"
};
