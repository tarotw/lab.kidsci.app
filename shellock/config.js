window.CONFIG={
  "id": "E07",
  "path": "shellock",
  "status": "complete",
  "controller": "shell.js",
  "extras": [
    "shell-model.js",
    "shell-view.js",
    "shell.css",
    "shell.js"
  ],
  "title": [
    "惡魔鐵甲蟲：接縫也是結構",
    "Ironclad beetle: joints are structure"
  ],
  "question": [
    "拼圖形的接縫，為什麼不能直接拉開？",
    "Why does a puzzle-shaped joint resist a straight pull?"
  ],
  "hint": [
    "按拉一拉，再試先抬再拉。",
    "Pull, then try Lift then pull."
  ],
  "controls": [
    {
      "key": "load",
      "label": [
        "拉力大小",
        "Pull force"
      ],
      "min": 0,
      "max": 100,
      "step": 1,
      "value": 60,
      "unit": "力點 / force points"
    },
    {
      "key": "thick",
      "label": [
        "殼片厚度",
        "Plate thickness"
      ],
      "min": 0.5,
      "max": 3,
      "step": 0.1,
      "value": 1,
      "unit": "倍 / ×"
    }
  ],
  "defaults": {
    "type": 1,
    "path": 0,
    "load": 60,
    "thick": 1
  },
  "action": [
    "拉一拉",
    "Pull"
  ],
  "mission": [
    "普通齒狀接縫，都保證比直線強嗎？",
    "Is every toothed joint stronger than a straight joint?"
  ],
  "options": [
    [
      "對，有齒就最強",
      "Yes: teeth always win"
    ],
    [
      "不，還要看形狀與材料",
      "No: geometry and material matter"
    ]
  ],
  "answer": 1,
  "reason": [
    "本教具只展示倒扣的路徑限制。真鐵甲蟲也靠層狀材料逐層分離來耗能。",
    "This toy shows an undercut motion constraint. Real beetles also dissipate energy through gradual layer separation."
  ],
  "comparisons": [],
  "ep": "175",
  "episodeTitle": "活體坦克：昆蟲的奈米黑科技",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://www.nature.com/articles/s41586-020-2813-8",
    "Rivera et al.2020 · Nature586:543–548 · abstract / captions"
  ],
  "extraSources": [
    [
      "https://engineering.uci.edu/news/2020/10/uci-materials-scientists-discover-design-secrets-nearly-indestructible-insect",
      "UCI author-team explanation · 2020-10-21"
    ],
    [
      "https://ocw.mit.edu/courses/1-050-solid-mechanics-fall-2004/fd4eff39aec922b8c07660006f40686e_pset04_11.pdf",
      "MIT1.050 · Problem Set11 · page2 cantilever equation"
    ]
  ],
  "limit": [
    "原創裝配路徑教具，非真甲蟲破壞試驗。殼片為剛體，由導軌保持方向，另有各樣本相同的線性回位彈簧；沒有摩擦、斷裂或接縫彈性。倒扣只在同平面阻止平拉；先外力抬高1.1倍厚度，再加拉力。搭接B原先在A上，無倒扣與摩擦，因此可滑開。抬高是外部指定位置，不由拉力產生；不計抬高作功。4秒播放只是路徑展示。俯視保留長度比例；側面只表示高度投影並放大高度4倍，非真剖面。完整殼片彎曲是另一獨立端載懸臂梁：固定長寬及材料，厚度改變慣性矩與用料，不預測接縫破裂。力點、長度L、材料係數均未校準，不是N、真生物厚度或承載。這是特化惡魔鐵甲蟲的啟發，不泛化為所有甲蟲／所有齒形最強。EP175單集網址、時長與封面未核對；Logo不是單集封面。 倒扣的0.52L教具分開標準包含77像素頭部投影及1像素額外空隙（150像素/L）；圖形剛好不重疊不等於已留足空隙，空隙不是生物尺度。",
    "An original assembly-path toy, not beetle fracture testing. Rigid plates are guided with identical external linear return springs; no friction, fracture or joint elasticity. The undercut blocks in-plane pulling; an external actuator first raises B by1.1 thicknesses, then pulls. Lap B initially sits above A; without an undercut or friction it slides. Raising is a prescribed external position, not caused by pulling; lift work is omitted. Four-second playback shows a protocol, not physical time. Top view preserves length scale; side view is only a height projection with heights magnified×4, not a true section. Intact-strip bending is a separate end-loaded cantilever with fixed length, width and material. Thickness changes section inertia and material use, not joint fracture. Force points, L and material constants are uncalibrated: not N, biological thickness or load capacity. Inspired by a specialized ironclad beetle, not all beetles or all tooth shapes. EP175 URL, duration and artwork unverified; logo is not episode artwork. The0.52L toy tooth-clearance mark includes the77px horizontal projection plus1px extra gap at150px/L; non-overlap alone does not meet that gap. The margin is not a biological dimension."
  ],
  "formula": "Invented relative units; L=b=E=1. t=0.025*thickness. q=protocol fraction0..1, not physical time.\nStraight pull: z=0, ramp=q. Lift then pull: z=1.1t*min(1,q/0.4), ramp=max(0,(q-0.4)/0.6).\nf=(force points/100)*ramp. Identical external return springs: x/L=1.2f unless undercut blocked.\nUndercut blocked when z<t and f>0. No load breaks this rigid ideal constraint.\nToy tooth clearance0.52L =77px projection +1px gap at150px/L; lap overlap0.24L. Lap B initially above A.\nSeparate intact cantilever: P=0.002*(0.025)^3*f; I=b*t^3/12.\nw(s)=P*s^2*(3L-s)/(6EI), tip=P*L^3/(3EI).\nTip/L=0.008f/thickness^3. Doubled thickness: tip/8, material volume×2.\nNo joint-to-bending coupling, biological calibration or failure threshold.\nDisplayed numbers are rounded; a positive bend rounded to zero is shown as <0.001% L.\nStep=1/10protocol; completion holds the endpoint, Replay restarts. ",
  "keywords": "惡魔鐵甲蟲,接縫,倒扣,搭接,殼片厚度,懸臂梁,彎曲,生物材料,ironclad beetle,joint,undercut,interlocking,lap joint,thickness,cantilever,bending,biomaterials",
  "description": [
    "換三種接縫，平拉或先抬再拉，觀察互鎖與滑開；用獨立殼片彎曲實驗比較厚度和用料，雙語教具。",
    "Compare three joints with straight pulling or lift-then-pull motion; independently explore plate thickness, bending and material use in a bilingual toy."
  ],
  "date": "2026-10-07",
  "icon": "🪲",
  "formulaZh": "自訂相對單位，L=b=E=1；厚度t=0.025×厚度倍數。\nq是0到1的示意路徑比例，不是真實時間。\n平拉：高度z=0，拉力比例=ramp=q。\n先抬再拉：z=1.1t×min(1,q/0.4)；ramp=max(0,(q−0.4)/0.6)。\nf=(力點/100)×ramp；相同外部回位彈簧：x/L=1.2f，倒扣卡住時為0。\n倒扣只在z<t且有正拉力時阻擋；本剛體理想限制不被大力拉斷。\n倒扣教具分開線0.52L：77像素頭部水平投影＋1像素空隙（150像素/L）。\n達到圖形不重疊與留足教具空隙是兩個條件；搭接重疊為0.24L。\n搭接B起初在A上方；抬高是外部指定位置，未計抬高做功。\n完整殼片是另一端載懸臂梁，與接縫的變形／破壞不耦合。\nP=0.002×(0.025)³×f；I=b×t³/12。\nw(s)=P×s²(3L−s)/(6EI)；端點w(L)=PL³/(3EI)。\n端點彎曲/L=0.008f/厚度倍數³；厚度2倍，彎曲1/8，用料2倍。\n數字為約值；正彎曲若約成0，顯示<0.001% L而非沒有彎曲。\n逐步=1/10路徑，完成保留末端；按重播再開始。\n無生物校準、接縫破壞門檻或真甲蟲承載預測。",
  "dateModified": "2026-10-10"
};
