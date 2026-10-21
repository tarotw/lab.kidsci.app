window.CONFIG={
  "id": "E08",
  "path": "beakcore",
  "status": "complete",
  "controller": "beak.js",
  "extras": [
    "beak-model.js",
    "beak-view.js",
    "beak.css",
    "beak.js"
  ],
  "title": [
    "巨嘴鳥的輕量夾層喙",
    "Toucan: a lightweight sandwich beak"
  ],
  "question": [
    "外殼裡放一個多孔內芯，重量和彎曲會怎樣？",
    "How does a porous core change weight and bending?"
  ],
  "hint": [
    "拉大空隙，再按無芯，看重量與彎曲。",
    "Increase void space, then choose No core. Watch weight and bending."
  ],
  "controls": [
    {
      "key": "porosity",
      "label": [
        "內芯空隙",
        "Core void space"
      ],
      "min": 0,
      "max": 100,
      "step": 1,
      "value": 80,
      "unit": "% / %"
    },
    {
      "key": "thick",
      "label": [
        "外殼厚度",
        "Shell thickness"
      ],
      "min": 2.5,
      "max": 30,
      "step": 0.5,
      "value": 4,
      "unit": "% 高度H / % height H"
    },
    {
      "key": "length",
      "label": [
        "喙梁長度",
        "Beam length"
      ],
      "min": 1,
      "max": 3,
      "step": 0.1,
      "value": 2,
      "unit": "L₀ / L₀"
    },
    {
      "key": "load",
      "label": [
        "目標向下力",
        "Target downward force"
      ],
      "min": 0,
      "max": 100,
      "step": 1,
      "value": 60,
      "unit": "力點 / points"
    }
  ],
  "defaults": {
    "thick": 4,
    "porosity": 80,
    "length": 2,
    "load": 60,
    "core": 1
  },
  "action": [
    "重新加力",
    "Load again"
  ],
  "mission": [
    "這裡彎得較少，就能算出真鳥喙的咬力嗎？",
    "Can less bending here tell us a real beak's bite force?"
  ],
  "options": [
    [
      "可以，越少彎就越會咬",
      "Yes: less bending means a stronger bite"
    ],
    [
      "不行，還缺真材料與其他機制",
      "No: real materials and other mechanisms are missing"
    ]
  ],
  "answer": 1,
  "reason": [
    "這是自訂材料的梁教具，沒有真鳥尺寸、肌肉、屈曲與壓潰；抗彎剛性不是破壞力。",
    "This beam uses invented materials, without bird dimensions, muscles, buckling or crushing; bending stiffness is not failure force."
  ],
  "comparisons": [],
  "ep": "225",
  "episodeTitle": "〈VIP｜EP.225｜為什麼巨嘴鳥的嘴巴那麼大？原來是自帶超級空調！〉",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/vip-ep-225-%E7%82%BA%E4%BB%80%E9%BA%BC%E5%B7%A8%E5%98%B4%E9%B3%A5%E7%9A%84%E5%98%B4%E5%B7%B4%E9%82%A3%E9%BA%BC%E5%A4%A7-%E5%8E%9F%E4%BE%86%E6%98%AF%E8%87%AA%E5%B8%B6%E8%B6%85%E7%B4%9A%E7%A9%BA%E8%AA%BF/id1812447277?i=1000761494569",
    "episodeId": "1000761494569",
    "showId": "1812447277",
    "source": "https://open.firstory.me/story/cmnx1h6rk08n301xihhxc8a52",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource211/v4/10/1a/b2/101ab216-aac2-5102-fa07-de2e1ac6365f/59993e52-61b6-4285-b14f-56f24d3942d7.jpg/500x500bb.webp",
    "coverAvailable": true,
    "duration": "約10分鐘",
    "durationEn": "About 10 minutes",
    "subscribersOnly": true,
    "verifiedOn": "2026-10-10",
    "verificationScope": "Official Taiwan episode title/rendered10minute display/subscribers-only label/official artwork confirmed through Computer Use. P0D structured duration is invalid and omitted; structured free offer contradicts explicit rendered subscriber label, rendered episode label retained. No exact seconds or actual audio claim.",
    "access": [
      "訂閱者限定",
      "Subscribers only"
    ],
    "coverFile": "e08-ep225-cover.jpg",
    "evidenceReuse": "native-review-toucan-official-20261010.json"
  },
  "source": [
    "https://meyersgroup.ucsd.edu/papers/journals/Meyers%20270.pdf",
    "Seki et al.2006 · MSE C26:1412–1420 · author PDF"
  ],
  "extraSources": [
    [
      "https://www.sciencedirect.com/science/article/pii/S1359645405004647",
      "Seki et al.2005 · Acta Materialia53:5281–5296 · abstract"
    ],
    [
      "https://ocw.mit.edu/courses/1-050-solid-mechanics-fall-2004/fd4eff39aec922b8c07660006f40686e_pset04_11.pdf",
      "MIT1.050 · Problem Set11 · page2 cantilever equation"
    ]
  ],
  "limit": [
    "原創等截面矩形夾層懸臂梁，材料完全黏合；不是鳥喙形狀或實測校準。外寬B=1、外高H=0.2參考長度L₀，厚度為H的百分比。用料點是自訂密度乘體積再乘1000，固定重力下代理相對重量，不是克。力點也不是牛頓或真咬力。殼Es=1、密度1；芯實體Ec0=2、密度1.5；固體份量φ=1−空隙比例，等效芯Ec=2φ²、密度1.5φ。此孔隙律完全自訂，不是論文閉孔方程。固定外尺寸加厚殼會換走芯，重量／剛性方向取決於材料差異，並非永遠更重更硬。對照同長、外尺寸、殼厚及當前力，只換有無芯。彎曲視覺放大4倍，長度比例不變；截面孔形只示意，不是計算網格或真細胞排列。4秒是準靜態加力展示，不是真物理時間。模型不含屈曲、壓潰、破裂或肌肉，不能把EI稱整體強度或演化排名。EP225官方網址與封面已核對；訂閱者限定，官方頁僅顯示約10分鐘，未確認精確秒數。",
    "An original uniform rectangular sandwich cantilever with perfect bonding, not beak anatomy or measured calibration. B=1 and H=0.2 reference lengths L₀; shell thickness is a percentage of H. Material points are invented density × volume ×1000, a relative-weight proxy at fixed gravity, not grams. Force points are not newtons or real bite force. Shell Es=1, density1; solid core Ec0=2, density1.5. Solid fraction φ=1−void fraction: effective core Ec=2φ², density1.5φ. This invented porosity law is not the paper's closed-cell equation. At fixed outer dimensions, thicker shell replaces core; weight and stiffness changes depend on material contrasts. Comparisons hold length, outer dimensions, shell thickness and current force fixed. Bending is magnified×4, lengths retain scale. Pore shapes illustrate space, not calculation cells or actual cell arrangement. Four seconds shows quasi-static loading, not physical time. No buckling, crushing, fracture or muscles; EI is not overall strength or an evolutionary ranking. EP225 official URL and artwork were verified; subscribers only. The official page shows about 10 minutes; exact seconds are unconfirmed."
  ],
  "formula": "Invented relative units. B=1, H=0.2 L₀, Es=ρs=1, Ec0=2, ρc0=1.5.\nt=H*(thickness percent/100); Ac=(B−2t)(H−2t); As=BH−Ac.\nIc=(B−2t)(H−2t)^3/12; Is=BH^3/12−Ic.\nφ=1−porosity/100 when core is present; otherwise φ=0.\nEc=2φ², ρc=1.5φ; EI=Es Is+Ec Ic.\nmShell=ρs As L, mCore=ρc Ac L; material points=1000(mShell+mCore).\nAt fixed outer size: Δm=L ΔAs(ρs−ρc); ΔEI=ΔIs(Es−Ec).\nP=10^−6*(target points/100)*q; q=loading fraction0..1, not physical time.\nw(x)=P x²(3L−x)/(6EI); tip=P L³/(3EI).\nDouble L at the same section/force: tip×8, mass×2.\nBending-stiffness reference EI₀=Es BH³/12 for a filled shell-material rectangle.\nNo biological calibration, fracture or buckling prediction.\nStep adds1/10 of the target; completed step holds the endpoint. Displayed parts are separately rounded; tiny positive force/bend show upper bounds.",
  "keywords": "巨嘴鳥,鳥喙,夾層,多孔材料,外殼,內芯,重量,抗彎剛性,孔隙率,懸臂梁,toucan,beak,sandwich structure,porous core,shell,weight,bending stiffness,porosity,cantilever",
  "description": [
    "直接調整巨嘴鳥假想夾層喙的殼厚、內芯空隙、長度和力，比較有芯無芯的重量成本與彎曲，附中英文及模型限制。",
    "Adjust shell thickness, core void space, length and force in a hypothetical toucan sandwich beam; compare core/no-core weight costs and bending, bilingually with model limits."
  ],
  "date": "2026-10-07",
  "icon": "🦜",
  "formulaZh": "自訂相對單位：B=1、H=0.2 L₀；殼Es=ρs=1，芯實體Ec0=2、ρc0=1.5。\nt=H×殼厚百分比/100；芯截面Ac=(B−2t)(H−2t)，殼截面As=BH−Ac。\nIc=(B−2t)(H−2t)³/12；Is=BH³/12−Ic。\n有芯時固體份量φ=1−空隙百分比/100，無芯時φ=0。\n等效芯Ec=2φ²、ρc=1.5φ；EI=Es×Is+Ec×Ic。\n殼用料mShell=ρs×As×L、芯用料mCore=ρc×Ac×L；用料點=1000(mShell+mCore)，非克。\n固定外尺寸增加殼：Δm=L×ΔAs×(ρs−ρc)，ΔEI=ΔIs×(Es−Ec)；方向取決於材料差異。\nP=10⁻⁶×(目標力點/100)×q；q為0到1的準靜態加力比例，不是真物理時間。\nw(x)=Px²(3L−x)/(6EI)，端點偏移=PL³/(3EI)，相對偏移=端點偏移/L。\n同截面同力，長度2倍：端點偏移8倍，用料2倍。\nEI基準=Es×BH³/12，同外截面全填殼材料。\n一步增加目標力的1/10，不是10力點；完成保留末端，重新加力才從頭開始。\n用料各項分別取約值；正微小彎曲顯示<0.001% L，正微小力顯示<0.1力點。\n沒有生物校準、屈曲、壓潰、破裂或真咬力預測。",
  "dateModified": "2026-10-10"
};
