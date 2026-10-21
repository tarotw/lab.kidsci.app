window.CONFIG={
  "id": "X07",
  "path": "headpres",
  "status": "complete",
  "controller": "headpres.js",
  "extras": [
    "headpres-model.js",
    "headpres.css",
    "headpres.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "title": [
    "長頸鹿低頭的壓力",
    "Giraffe head-height pressure"
  ],
  "question": [
    "頭比心臟低時，液柱壓差往哪邊變？",
    "What happens to a liquid-column pressure difference when the head drops?"
  ],
  "hint": [
    "先按「低頭」，看壓差從負變正；再開示意補償。",
    "Lower the head: watch the pressure difference turn positive. Then try toy compensation."
  ],
  "defaults": {
    "height": 15,
    "gain": 75,
    "cap": 12,
    "density": 1050,
    "regulate": 0
  },
  "controls": [],
  "mission": [
    "頭與心臟一樣高，液柱造成的壓差是多少？",
    "At equal head and heart height, what pressure difference does the column create?"
  ],
  "options": [
    [
      "零；真實循環仍有其他壓力因素",
      "Zero; real circulation still has other pressure effects"
    ],
    [
      "所有血壓都變成零",
      "All blood pressure becomes zero"
    ]
  ],
  "answer": 0,
  "reason": [
    "這裡只計高度帶來的變化，不是整個血壓，更不代表血流停止。",
    "This is only the change due to height, not total blood pressure or proof that blood flow stops."
  ],
  "comparisons": [],
  "ep": "211",
  "episodeTitle": "〈EP.211｜演化的摩天大樓：長頸鹿 (Giraffe) 的生理奇蹟與未解之謎〉",
  "podcast": {
    "verified": true,
    "urlVerified": true,
    "provider": "Firstory",
    "url": "https://open.firstory.fm/story/cmmtyclwgj61r01uhhwdp1h0l",
    "source": "https://open.firstory.fm/story/cmmtyclwgj61r01uhhwdp1h0l",
    "title": "〈EP.211｜演化的摩天大樓：長頸鹿 (Giraffe) 的生理奇蹟與未解之謎〉",
    "durationSeconds": 630,
    "duration": "10 分 30 秒",
    "durationEn": "10 min 30 sec",
    "durationIso": "PT10M30S",
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/zU1zEUb-NO_RJ2idBxE-d.jpg",
    "coverAvailable": true,
    "coverFile": "podcast/ep211.jpg",
    "artworkVisualChecked": true,
    "verifiedOn": "2026-10-08",
    "publishedAt": "Mon, 16 Mar 2026 21:08:35 GMT",
    "evidenceBasis": "Current saved publisher RSS + exact full public Firstory episode page + matching artwork bytes and pixels. No Apple ID, entitlement or audio inference."
  },
  "source": [
    "https://openstax.org/books/university-physics-volume-1/pages/14-1-fluids-density-and-pressure",
    "OpenStax：液柱壓力與代表密度",
    "OpenStax: hydrostatic pressure and representative densities"
  ],
  "extraSources": [
    [
      "https://onlinelibrary.wiley.com/doi/full/10.1111/apha.70046",
      "Aalkjær等2025：長頸鹿喝水的血流動力研究",
      "Aalkjær et al. 2025: hemodynamics and drinking in giraffes"
    ]
  ],
  "description": [
    "移動長頸鹿示意圖的頭部，認識高度差與液柱壓差的方向；比較被動液柱與有上限的自訂補償，分清高度效應和完整循環。",
    "Move a schematic giraffe head to explore the sign of hydrostatic pressure differences. Compare a passive column with capped toy compensation, separating height effects from full circulation."
  ],
  "keywords": "長頸鹿,低頭喝水,液柱壓力,靜水壓,高度差,重力,示意調節,giraffe,head lowering,hydrostatic pressure,height difference,gravity,pressure compensation",
  "date": "2026-10-04",
  "icon": "🦒",
  "limit": [
    "h是頭部相對心臟的垂直高度，上方為正。液柱項H=−ρgh只適用均勻密度的靜態液體；這裡分離高度效應，不求解真實循環。血液代表密度1050、水1000 kg/m³作教具參照，不是測量這隻長頸鹿。g固定9.81 m/s²。補償項C把使用者指定份量的H反向抵銷，另受kPa上限限制；這是自訂代數控制器，不是血管阻力、心臟泵、奇蹟網或任何器官的實測模型。補償後R=H+C相對「同高且補償為零的基準」；不能叫作此時頭端與心端的靜水壓差。負值是相對基準減少，不是負絕對壓力。沒有設定基準血壓、血流、血容量、神經回饋、回應時間、靜脈塌陷或腦脊液壓力，不預測昏倒、傷害或正常值。研究發現低頭與喝水過程有多種變化，本例沒有逐一重建。圖的頭心高度按固定比例，連線長度固定；身體／頸部形狀僅示意，不是喝水姿勢或真實解剖。切換液體只為物理比較，不表示血液可改成水。本集EP211資料已核；延伸EP66另作背景參考。",
    "h is vertical head height relative to the heart, positive above. H=−ρgh applies to a uniform static liquid; this page isolates the height contribution rather than solving circulation. Representative densities of 1050 for blood and 1000 kg/m³ for water are teaching references, not measurements of this giraffe. Gravity is fixed at 9.81 m/s². C opposes a chosen fraction of H, capped in kPa. It is an invented algebraic controller, not a measured model of vascular resistance, a heart pump, a rete or any organ. R=H+C is relative to an equal-height baseline with zero correction; it is not the current hydrostatic difference between head and heart. A negative value is a decrease from that baseline, not negative absolute pressure. Baseline blood pressure, flow, blood volume, neural feedback, response time, vein collapse and cerebrospinal pressure are not modeled. No fainting, injury or normal ranges are predicted. Research identifies multiple changes during head lowering and drinking; this toy does not reproduce them. Head-to-heart height uses a fixed scale and connector length, while body/neck outlines are schematic rather than drinking posture or anatomy. Switching liquid is a physics comparison, not replacing blood with water. EP211 metadata is verified; EP66 is a separate background reference."
  ],
  "formula": "h=z_head-z_heart; H=-rho*g*h/1000 kPa; wanted=-H*gain/100; C=clamp(wanted,-cap,+cap); R=H+C. Passive view shows H; compensated view shows R. No absolute blood pressure or flow calculation.",
  "formulaText": [
    "h＝頭部高度−心臟高度（m），上正下負\nρ＝1000或1050 kg/m³；g＝9.81 m/s²\n液柱項 H＝−ρgh÷1000（kPa）\n希望補償＝−H×自訂比例\n實際補償 C＝把希望補償限制在±上限內\n示意結果 R＝H+C（相對同高基準）\n被動模式C不套用；對照始終比較同一高度／密度。\nkPa＝千帕＝1000 Pa；Pa＝每平方公尺所受牛頓力。",
    "h=head height−heart height in metres; positive above\nρ=1000 or 1050 kg/m³; g=9.81 m/s²\nColumn term H=−ρgh/1000 kPa\nWanted correction=−H×chosen fraction\nApplied C=clamp(wanted,−cap,+cap)\nToy result R=H+C relative to equal-height baseline\nPassive mode does not apply C. Comparison always keeps height and density equal.\nkPa=kilopascal=1000 Pa; Pa=newton per square metre."
  ],
  "dateModified": "2026-10-08"
};
