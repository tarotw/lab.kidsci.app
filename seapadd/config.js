window.CONFIG={
  "id": "B05",
  "path": "seapadd",
  "status": "complete",
  "title": [
    "海蛇尾巴的推水帳",
    "Sea-snake paddle power"
  ],
  "question": [
    "尾巴擺得更快，肌肉供能就不用增加嗎？",
    "Can the tail beat faster without more muscle power?"
  ],
  "hint": [
    "先改擺動頻率，再把供能設成 0 W；看尾巴與推力。每次從靜止重新試。",
    "Change beat rate, then set muscle power to 0 W. Inspect tail motion and thrust. Each trial starts from rest."
  ],
  "controls": [
    {
      "key": "area",
      "label": [
        "示例尾側面積",
        "Example tail side area"
      ],
      "min": 10,
      "max": 60,
      "step": 10,
      "value": 30,
      "unit": "cm²",
      "options": null
    },
    {
      "key": "amp",
      "label": [
        "尾端左右單邊擺幅",
        "Tail-tip one-sided amplitude"
      ],
      "min": 0,
      "max": 15,
      "step": 1,
      "value": 8,
      "unit": "cm",
      "options": null
    },
    {
      "key": "freq",
      "label": [
        "要求擺動頻率",
        "Requested beat frequency"
      ],
      "min": 0,
      "max": 3,
      "step": 0.5,
      "value": 1,
      "unit": "Hz",
      "options": null
    },
    {
      "key": "power",
      "label": [
        "肌肉供能上限",
        "Muscle power cap"
      ],
      "min": 0,
      "max": 2,
      "step": 0.25,
      "value": 1,
      "unit": "W",
      "options": null
    },
    {
      "key": "drag",
      "label": [
        "身體阻力係數",
        "Body drag coefficient"
      ],
      "min": 1,
      "max": 10,
      "step": 1,
      "value": 5,
      "unit": "N·s²/m²",
      "options": null
    }
  ],
  "mission": [
    "水的阻力能自己變成免費推進能量嗎？",
    "Can water resistance create free propulsion energy?"
  ],
  "options": [
    [
      "肌肉先供能，再把水往後推",
      "Muscles supply energy to push water backward"
    ],
    [
      "阻力越大就免費游得越快",
      "More resistance gives free speed"
    ]
  ],
  "answer": 0,
  "reason": [
    "肌肉要驅動尾巴；供能不足會降低實際頻率。相同供能下，增加身體阻力會減少前進。",
    "Muscles drive the tail; limited power reduces achieved frequency. More body drag at matched power reduces progress."
  ],
  "comparisons": [
    {
      "label": [
        "有供能／零供能",
        "Powered / no power"
      ],
      "key": "power",
      "a": 1,
      "b": 0
    },
    {
      "label": [
        "低阻力／高阻力",
        "Low / high body drag"
      ],
      "key": "drag",
      "a": 1,
      "b": 10
    },
    {
      "label": [
        "小尾／大尾",
        "Small / large tail"
      ],
      "key": "area",
      "a": 10,
      "b": 60
    }
  ],
  "limit": [
    "1 kg 等效物體的平均推力示例，不是真實海蛇性能模型。尾橫向均方根速率 w=√2πfA；供能以 w³ 增加，效率假設0.6，不足時降低實際頻率。平均推力 T=0.25ρSw²max(0,1−v/(2w))，w=0時T=0；身體阻力 kv²。從靜止做6 s固定步長RK4，積分位移、克服身體阻力的功與推力做功。推力做功包含前進動能與阻力耗散，剩餘肌肉功記為尾流／其他損失；不是免費能量。尾部外形、面積、機制係數、肌肉上限與水密度為示例，未擬合海蛇數據；沒有全身推進、呼吸或活動限制。",
    "Average-thrust example for a 1 kg equivalent object, not measured sea-snake performance. RMS transverse tail speed w=√2πfA; required power grows with w³ at assumed efficiency 0.6. Insufficient power lowers achieved frequency. T=0.25ρSw²max(0,1−v/(2w)), with T=0 at w=0; body drag kv². Fixed-step RK4 from rest for 6 s integrates travel, drag dissipation and thrust work. Thrust work becomes forward kinetic energy plus drag dissipation; remaining muscle work is wake/other loss. Shapes, areas, coefficients, power caps and density are illustrative, without fitted animal data, whole-body propulsion or respiratory limits."
  ],
  "formula": "wRequest=√2π*f*amplitude; w=min(wRequest,(2*0.6*Pcap/(1025*S))^(1/3))\nPused=0.5*1025*S*w³/0.6; fActual=w/(√2π*amplitude); fActual=0 at amplitude=0\nT=0.25*1025*S*w²*max(0,1−v/(2w)); T=0 if w=0\nx′=v; v′=(T−k*v²)/1 kg\nMuscle work=Pused*t; thrust work=kinetic energy+drag heat\nMuscle work−thrust work=tail-wake/other loss ≥0\nScreen 2 s represents 6 model s; no actuation starts and stays at rest.",
  "source": [
    "https://besjournals.onlinelibrary.wiley.com/doi/10.1111/j.1365-2435.2007.01359.x",
    "Aubret & Shine (2008) · Tail shape and swimming"
  ],
  "extraSources": [
    [
      "https://link.springer.com/article/10.1186/1810-522X-52-43",
      "Wang et al. (2013) · Orchid Island sea kraits"
    ]
  ],
  "icon": "🐍",
  "ep": "257",
  "episodeTitle": "海蛇的藍色華爾茲：船槳尾巴、跨物種獵殺聯盟與「假頭」騙術大揭密",
  "date": "2026-10-03",
  "action": [
    "觀察一次",
    "Watch once"
  ],
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "defaults": {
    "area": 30,
    "amp": 8,
    "freq": 1,
    "power": 1,
    "drag": 5
  },
  "keywords": "海蛇尾巴的推水帳,Sea-snake paddle power,海蛇,船槳尾,肌肉供能,反作用力,sea snake,paddle tail,muscle power,reaction force,科學好好聽,動物科學,互動科學,science for kids",
  "description": [
    "尾巴擺得更快，肌肉供能就不用增加嗎？ 動手改變條件，觀察機制與假設。",
    "Can the tail beat faster without more muscle power? Change conditions and inspect the mechanism and assumptions."
  ],
  "formulaZh": "尾側面積S＝cm²输入×10⁻⁴m²；單邊擺幅A＝cm输入/100m\n要求橫向均方根速率w要求＝√2πfA\n實際w＝min(w要求,[2×0.6×P上限/(1025S)]^(1/3))\n使用功率P＝0.5×1025S×w³/0.6（W）\n實際頻率f實際＝w/(√2πA)；A＝0時取0\n平均推力T＝0.25×1025S×w²×max(0,1−v/(2w))（N）；w＝0時T＝0\nx′＝v；v′＝(T−kv²)/1kg；由靜止開始\n身體阻力散熱H′＝kv³；推力做功Q′＝Tv\n肌肉已做功＝Pt；前進動能＝0.5×1×v²（J）\nQ＝前進動能＋H；尾流／其他損失＝Pt−Q≥0\n2秒畫面看6模型秒；肌肉上限、效率、推力與阻力係數均自訂\n0供能、0要求頻率或0擺幅，這次從靜止皆不前進",
  "dateModified": "2026-10-08"
};
