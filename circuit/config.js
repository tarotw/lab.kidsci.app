window.CONFIG={
  "id": "I08",
  "path": "circuit",
  "status": "complete",
  "topic": "physics",
  "icon": "💡",
  "title": [
    "串並聯燈泡與電流路線",
    "Bulbs, circuits and current paths"
  ],
  "question": [
    "斷開一盞燈旁的開關，其他燈會怎樣？",
    "Open one lamp’s switch. What happens to the others?"
  ],
  "defaults": {
    "voltage": 3,
    "count": 2,
    "topology": 0,
    "battery": 1,
    "resistances": [
      10,
      10,
      10,
      10,
      10,
      10
    ],
    "closed": [
      1,
      1,
      1,
      1,
      1,
      1
    ]
  },
  "extras": [
    "circuit-model.js",
    "circuit.css",
    "circuit.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "date": "2026-10-14",
  "description": [
    "接上理想低壓電池，切換最多六個電阻教具燈的串聯、並聯與混合接法，觀察開關、電流、電壓與功率帳。",
    "Connect an ideal low-voltage battery and explore series, parallel and mixed layouts of up to six resistor lamps. Track switches, current, voltage and power balance."
  ],
  "keywords": "電路,串聯,並聯,電阻,歐姆定律,克希荷夫定律,電流守恆,電功率,circuit,series,parallel,resistance,Ohm law,Kirchhoff rules,current conservation,electrical power",
  "sources": [
    [
      "https://openstax.org/books/university-physics-volume-2/pages/10-2-resistors-in-series-and-parallel",
      "OpenStax：串聯與並聯電阻",
      "OpenStax: resistors in series and parallel"
    ],
    [
      "https://openstax.org/books/university-physics-volume-2/pages/10-3-kirchhoffs-rules",
      "OpenStax：克希荷夫定律",
      "OpenStax: Kirchhoff’s rules"
    ],
    [
      "https://openstax.org/books/university-physics-volume-2/pages/9-5-electrical-energy-and-power",
      "OpenStax：電能與功率",
      "OpenStax: electrical energy and power"
    ],
    [
      "https://feed.firstory.me/rss/user/cmdpx4cs200ax01xldg5ta89p",
      "節目官方公開RSS：單集資料（非模型數據）",
      "Official public podcast RSS: episode metadata (not model data)"
    ]
  ],
  "podcast": {
    "ep": "EP.89",
    "title": "〈電的魔法探險：電子小精靈的奇幻跑道｜EP.89〉",
    "url": "https://open.firstory.fm/story/cmsbtug6j0wgo01xf3uvc11x1",
    "verified": true,
    "urlVerified": true,
    "provider": "Firstory",
    "firstory": "https://open.firstory.fm/story/cmsbtug6j0wgo01xf3uvc11x1",
    "durationSeconds": 492,
    "durationIso": "PT8M12S",
    "durationLabel": [
      "8 分 12 秒",
      "8 min 12 sec"
    ],
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/arWfV6jHIwlCDGDNVnTb2.jpg",
    "coverFile": "podcast/ep89.jpg",
    "coverAvailable": true,
    "artworkVerified": true,
    "artworkVisualChecked": true,
    "metadataChecked": "2026-10-08",
    "publishedAt": "Wed, 05 Aug 2026 22:01:59 GMT",
    "evidenceBasis": "Current official public RSS plus exact Firstory story title/image; local official artwork pixels inspected. Audio not played, Apple access not tested."
  },
  "mission": [
    "兩盞相同教具燈、電池電壓不變，都接好時由串聯改並聯，每盞功率變幾倍？",
    "Two identical connected lamps at the same battery voltage: how does each lamp’s power change from series to parallel?"
  ],
  "options": [
    [
      "4倍",
      "4×"
    ],
    [
      "2倍",
      "2×"
    ],
    [
      "不變",
      "Unchanged"
    ]
  ],
  "answer": 0,
  "reason": [
    "串聯每盞分到一半電壓；並聯每盞有完整電壓。固定電阻P=V²/R，所以電壓兩倍，功率四倍。這是兩盞相同固定電阻的理想條件。",
    "Each series lamp gets half the voltage; each parallel lamp gets the full voltage. With fixed R, P=V²/R: twice the voltage gives four times the power. This requires two identical ideal fixed-resistance lamps."
  ],
  "limit": [
    "限定1–6個正電阻與三種接法：全串聯、全並聯、相鄰兩盞一組串聯再組間並聯（奇數最後一組一盞）。理想0–6V直流電池、理想導線、閉合開關零電阻、斷開開關無導通；每盞後面各有一個串接的開關，主開關接／斷電池。所有電阻5–50Ω、固定且無溫度依賴，不是真實白熾燈絲或LED，畫面不預測流明、燈泡壽命或安全額定。穩態節點電壓求解，沒有暫態、電容、電感、電池內阻／耗盡、接點火花或短路；最小電阻為正，不允許理想電池被零電阻短接。功率為P=I²R=VI；色光強度用P/(0.5W+P)映射，同一尺度不按目前最大值重標，0W完全熄滅。亮度不是線性光度或真燈泡的量測。箭頭為傳統電流方向，從電池正極沿外部電路到負極；電子漂移方向相反，沒有跑一圈才點亮的動畫。開關圖斷口與電阻燈是不同元件；表中的V是跨電阻燈電壓，不是跨開關電壓。斷路支路中電阻仍存在，浮接部分的絕對電位未定，但無電動勢迴路的穩態電阻電壓差與電流為0；不把浮接節點絕對電位硬定為0。導線／閉合開關以等電位節點合併；電阻網路按連通分量與固定源端電位建立線性導納矩陣，用部分選主元消去求解；孤立無錨點分量電位保持null。只列非電源節點KCL殘差最大值，電源正端輸出I與支路總I另列；供電VI等於各燈I²R功率和。等效電阻只在非零供電電流時以V/I顯示，0V不推斷未知R。切接法、燈數、電壓、電阻、開關與語言／模式即時重新計算，不累計先前能量；隱藏的燈保留電阻與開關設定，燈數變小且選取超界時選回燈1。對照只改串／並接法，保留電池、數量、每盞R和開關；開關斷開時不能套用都閉合的4倍公式。只有「兩盞相同示範」和重設可明確套用預設。純網頁低壓教具，不提供家庭電源接線操作。 本集Firstory官方頁與公開RSS的集名、時長、封面已核；實際音訊與Apple收聽權限未測。",
    "One to six positive resistors in three layouts: all series, all parallel, or adjacent pairs in series with pairs in parallel (a single lamp in the final odd group). An ideal 0–6 V DC source, ideal wires and closed switches; open switches do not conduct. Each resistor lamp has its own series switch, plus a main battery switch. Fixed 5–50 Ω resistances omit temperature dependence; these are neither real incandescent filaments nor LEDs. Lumens, lifetime and safe ratings are not predicted. The steady-state nodal solver omits transients, capacitance, inductance, battery internal resistance/depletion, sparks and shorts. Positive minimum resistances prevent ideal-source shorts. P=I²R=VI. Glow maps to P/(0.5 W+P) on a fixed scale without normalizing to the brightest current lamp; 0 W is dark. It is not measured or linear photometric brightness. Arrows show conventional external current from positive to negative; electron drift reverses this direction. No charge must travel around a loop before a lamp lights. An open switch and a resistor are separate components; table V is across the resistor, not its switch. Floating component absolute potentials are undefined; passive steady-state resistor differences and currents are zero. Wires and closed switches merge equipotential nodes. Connected resistor components form conductance equations with fixed source terminals, solved by pivoted elimination. Unanchored component potentials stay null. Maximum non-source KCL residual, source output, branch-current sum and VI−ΣI²R are reported separately. Equivalent R uses V/I only with nonzero source current; at 0 V it is not inferred. Layout, count, voltage, resistances and switches recalculate present steady state; no past energy ledger is accumulated. Hidden lamps keep their resistance and switch settings; an out-of-range selection returns to lamp 1. Comparison changes only series versus parallel and retains source, count, individual R and switches; an open circuit cannot use the all-connected fourfold rule. Only the explicit two-identical-lamp demo and Reset apply defaults. A web-only low-voltage teaching model without household wiring instructions.  Primary Firstory title, duration and artwork are checked against its official page/public RSS; actual audio and Apple access are untested."
  ],
  "formula": [
    "燈i：Ii=(Va−Vb)/Ri；Pi=Ii²Ri=IiΔVi\n非電源節點：Σ(V節點−V鄰點)/R=0\n供電功率=V電池×I總=ΣPi\n串聯：R等效=ΣRi，I相同\n並聯：1/R等效=Σ1/Ri，V相同\n開關斷開：不合併兩端節點，該導線不導通\n光強示意=Pi/(0.5W+Pi)，0W時0\n1A＝每秒1庫侖電量；1W＝每秒1J能量",
    "Lamp i: Ii=(Va−Vb)/Ri; Pi=Ii²Ri=IiΔVi\nNon-source node: Σ(Vnode−Vneighbor)/R=0\nSource power=Vbattery×Itotal=ΣPi\nSeries: Req=ΣRi, equal current\nParallel: 1/Req=Σ1/Ri, equal voltage\nOpen switch: terminals are not merged; its wire does not conduct\nIllustrative glow=Pi/(0.5 W+Pi), zero at 0 W\n1 A = 1 coulomb per second; 1 W = 1 J per second"
  ],
  "episodeTitle": "〈電的魔法探險：電子小精靈的奇幻跑道｜EP.89〉"
};
