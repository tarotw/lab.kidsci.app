window.CONFIG={
  "id": "B12",
  "path": "filter",
  "status": "complete",
  "title": [
    "鯨鯊濾食：水與食物分流",
    "Whale shark: water and food separate"
  ],
  "question": [
    "吸進更多水，就一定沒有成本嗎？",
    "Does taking in more water have no cost?"
  ],
  "hint": [
    "按「觀察粒子」，看金色捕獲、青色通過；再加大流量看成本。",
    "Watch particles: gold retained, cyan passed. Raise flow and compare the cost."
  ],
  "controls": [
    {
      "key": "flow",
      "label": [
        "水流量",
        "Water flow"
      ],
      "min": 1,
      "max": 5,
      "step": 1,
      "value": 2,
      "unit": "L/s",
      "options": null
    },
    {
      "key": "size",
      "label": [
        "食物粒徑",
        "Food particle size"
      ],
      "min": 0.2,
      "max": 5,
      "step": 0.2,
      "value": 1,
      "unit": "mm",
      "options": null
    },
    {
      "key": "density",
      "label": [
        "食物濃度",
        "Particle concentration"
      ],
      "min": 0,
      "max": 25,
      "step": 5,
      "value": 10,
      "unit": "個/L / particles/L",
      "options": null
    },
    {
      "key": "pad",
      "label": [
        "合成濾墊配置",
        "Synthetic pad layout"
      ],
      "min": 0,
      "max": 2,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "A 易通水",
          "A Flow"
        ],
        [
          "B 多攔留",
          "B Retain"
        ],
        [
          "C 高攔留",
          "C Retain+"
        ]
      ]
    }
  ],
  "action": [
    "觀察粒子",
    "Watch particles"
  ],
  "mission": [
    "流量加倍，食物與水流成本都只加倍嗎？",
    "Does doubling flow double both food and flow cost?"
  ],
  "options": [
    [
      "不一定；這裡成本增加更快",
      "No: cost rises faster here"
    ],
    [
      "一定，兩者永遠同比例",
      "Yes: both always scale equally"
    ]
  ],
  "answer": 0,
  "reason": [
    "水通過濾食結構，部分粒子被送向可攝取的路線。真實鯨鯊涉及流體與濾墊，不能當成完美網篩；本頁用合成捕獲率比較粒子收支與水流成本。",
    "Water passes the feeding structure while some particles follow a retained-food route. Real whale sharks involve flow and filtering pads, not a perfect sieve. Synthetic capture rates here compare particle accounting and flow cost."
  ],
  "comparisons": [
    {
      "label": [
        "流量2／4公升每秒",
        "Flow 2 / 4 litres per second"
      ],
      "key": "flow",
      "a": 2,
      "b": 4
    },
    {
      "label": [
        "粒徑0.2／2毫米",
        "Size 0.2 / 2 mm"
      ],
      "key": "size",
      "a": 0.2,
      "b": 2
    },
    {
      "label": [
        "配置A／C",
        "Layout A / C"
      ],
      "key": "pad",
      "a": 0,
      "b": 2
    }
  ],
  "limit": [
    "10秒示例水樣；粒子數N=濃度×流量×10秒。合成捕獲表的粒徑節點為0.2、0.5、1、2、5 mm，配置A機率[0.10,0.20,0.40,0.60,0.70]、B=[0.20,0.35,0.60,0.75,0.85]、C=[0.30,0.50,0.70,0.85,0.95]，節點間線性內插，不按網孔大小硬切。每顆以固定種子42產生抽樣值，低於捕獲率則捕獲，否則通過；所有粒子都在帳本，不會憑空消失。畫布最多顯示80個均勻抽選的代表粒子，數字是整份水樣結果；標記大小與路徑放大且為示意，動畫2秒，不代表真實流速或即時累計。流量q採m³/s，示例壓差ΔP=Kq²，K=2×10⁶×配置阻力倍率[1,2,4] Pa·s²/m⁶，水流功率P=ΔPq；十秒能量=10P。這是小型教學流道，不是整條真鯨鯊的流量、解剖、耗能或捕食率。捕獲機率和阻力均未校準量測，不是營養吸收率。未建模堵塞、粒子慣性、完整交叉流流場或吞嚥；不把攔留微塑膠等同安全。",
    "Ten-second illustrative water sample; N=concentration×flow×10 seconds. Particle-size nodes 0.2,0.5,1,2,5 mm have synthetic probabilities A=[0.10,0.20,0.40,0.60,0.70], B=[0.20,0.35,0.60,0.75,0.85], C=[0.30,0.50,0.70,0.85,0.95], linearly interpolated, not a hard mesh threshold. Each particle uses a fixed seed-42 draw and is retained below the probability, otherwise passed. Every particle is accounted for. Canvas shows up to 80 evenly sampled representative particles; numbers describe the whole sample. Markers and paths are enlarged schematic cues; two-second animation is not real speed or instantaneous totals. With q in m³/s, illustrative pressure drop ΔP=Kq², K=2×10⁶×layout multipliers [1,2,4] Pa·s²/m⁶; water power P=ΔPq and ten-second energy=10P. This is a small teaching channel, not whole-shark flow, anatomy, energy use or feeding rate. Capture probabilities and resistance are not calibrated measurements or nutrient absorption. Clogging, inertia, full cross-flow hydrodynamics and swallowing are omitted. Retaining microplastics does not imply safety."
  ],
  "formula": "V=Q (L/s) × 10 s, in litres\nN=concentration (particles/L) × V; account for every particle\nSize nodes (mm)=[0.2,0.5,1,2,5]\nA probabilities=[0.10,0.20,0.40,0.60,0.70]\nB probabilities=[0.20,0.35,0.60,0.75,0.85]\nC probabilities=[0.30,0.50,0.70,0.85,0.95]\nLinear interpolation; seed 42; retain when U_i<probability\nN=retained+passed (whole-sample totals, not animation accumulation)\nq=Q/1000 m³/s; K=2e6×[1,2,4] Pa·s²/m⁶\nΔP=Kq² Pa; P=ΔPq W; ten-second cost E=10P J\nSame layout, double Q: pressure ×4, power ×8, water and input particles ×2\nCapture chance stays fixed; discrete captured counts need not double exactly\nUp to 80 evenly selected representative markers, not full counts or exact proportions\n2 s only shows route progress; Step=1/8 path, not instantaneous particle/energy totals",
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/20817493/",
    "Motta et al. (2010) · Whale shark feeding anatomy and cross-flow"
  ],
  "ep": "260",
  "episodeTitle": "繁星鯊奇遇記：海洋溫柔巨人的超能力與星空密碼",
  "date": "2026-10-06",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "icon": "🦈",
  "keywords": "鯨鯊,濾食,濾墊,浮游生物,粒子收支,水流成本,whale shark,filter feeding,filter pads,plankton,particle conservation,cross-flow,科學好好聽,science for kids",
  "description": [
    "調整流量、粒徑與合成濾墊，觀察Canvas粒子分流及整份水樣收支，比較捕獲與水流成本。",
    "Adjust flow, particle size and synthetic pads. Watch Canvas particle routes, account for the whole sample, and compare retention with water-flow cost."
  ],
  "defaults": {
    "flow": 2,
    "size": 1,
    "density": 10,
    "pad": 1
  },
  "formulaZh": "水量V＝流量Q（L/s）×10秒，單位公升\n粒子數N＝濃度（個/L）×V；全數計帳\n粒徑節點mm＝[0.2,0.5,1,2,5]\nA捕獲率＝[0.10,0.20,0.40,0.60,0.70]\nB捕獲率＝[0.20,0.35,0.60,0.75,0.85]\nC捕獲率＝[0.30,0.50,0.70,0.85,0.95]\n節點間線性內插；固定種子42；U_i<捕獲率則攔留\nN＝攔留＋通過（整份水樣，不隨動畫累加）\nq＝Q/1000 m³/s；K＝2×10⁶×[1,2,4] Pa·s²/m⁶\n壓差ΔP＝Kq² Pa；功率P＝ΔPq W；10秒成本E＝10P J\n同配置流量加倍：壓差×4，功率×8，水量與粒子輸入×2\n捕獲率不變；離散捕獲數不必精確加倍\n最多80個均勻選出的代表標記，並非完整數量或比例\n2秒只畫分流路程；逐步1/8路程，非瞬時粒子或能量帳",
  "dateModified": "2026-10-09"
};
