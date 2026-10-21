window.CONFIG={
  "id": "B02",
  "path": "sharkup",
  "status": "complete",
  "title": [
    "鯊魚的三種垂直力",
    "Shark vertical-force lab"
  ],
  "question": [
    "停游之後，浮力也會消失嗎？",
    "Does buoyancy disappear when swimming stops?"
  ],
  "hint": [
    "把游速調成 0，看浮力箭頭；再改油比例、游速和鰭角。",
    "Set speed to zero and find buoyancy. Then change oil fraction, speed and fin angle."
  ],
  "controls": [
    {
      "key": "oil",
      "label": [
        "示例體積中的油比例",
        "Oil fraction of example volume"
      ],
      "min": 0,
      "max": 35,
      "step": 5,
      "value": 10,
      "unit": "%",
      "options": null
    },
    {
      "key": "speed",
      "label": [
        "固定水平游速",
        "Fixed horizontal speed"
      ],
      "min": 0,
      "max": 2,
      "step": 0.25,
      "value": 1,
      "unit": "m/s",
      "options": null
    },
    {
      "key": "angle",
      "label": [
        "示例升力元件角度",
        "Example lifting-surface angle"
      ],
      "min": -15,
      "max": 15,
      "step": 5,
      "value": 10,
      "unit": "°",
      "options": null
    }
  ],
  "mission": [
    "水平游速是零時，浮力？",
    "At zero horizontal speed, buoyancy…"
  ],
  "options": [
    [
      "仍由排水體積決定",
      "Still depends on displaced volume"
    ],
    [
      "完全消失",
      "Disappears"
    ]
  ],
  "answer": 0,
  "reason": [
    "排水浮力不需要游動；不同鯊魚的密度、棲地與呼吸方式不同，不能說全部停游就會死。",
    "Displacement buoyancy needs no swimming. Shark density, habitat and breathing differ; stopping is not fatal for every species."
  ],
  "comparisons": [
    {
      "label": [
        "游動／停止",
        "Swimming / stopped"
      ],
      "key": "speed",
      "a": 1,
      "b": 0
    },
    {
      "label": [
        "油比例改變密度",
        "Oil changes density"
      ],
      "key": "oil",
      "a": 0,
      "b": 25,
      "base": {
        "speed": 0
      }
    },
    {
      "label": [
        "向上／向下升力",
        "Upward / downward lift"
      ],
      "key": "angle",
      "a": 10,
      "b": -10
    }
  ],
  "limit": [
    "不可壓縮二成分物體，體積 0.020 m³；油／組織／海水密度為 860／1080／1025 kg/m³。比例是全示例體積中的油，不是真實肝臟百分比。固定水平速度，升力元件面積 0.025 m²、CL=0.04×角度（度）、垂直阻力 20 N·s/m，加水慣性 10 kg；從深度 25 m 靜止觀察 4 s。水平速度由外部維持，並非免費游泳；沒有海床、壓縮、呼吸、完整鰭／身體流場或物種校準。",
    "An incompressible two-component object, volume 0.020 m³; oil/tissue/seawater densities 860/1080/1025 kg/m³. Oil is a fraction of the whole example volume, not measured liver percentage. Fixed horizontal speed; lifting area 0.025 m², CL=0.04×angle in degrees, vertical damping 20 N·s/m and added water inertia 10 kg. Released at 25 m depth for 4 s. External effort maintains horizontal speed. No seabed, compression, breathing, full fin/body flow or species calibration."
  ],
  "formula": "ρbody=(1−f)*1080+f*860; m=ρbody*0.020\nB=1025g*0.020; W=mg; L=0.5*1025*0.025*U²*(0.04α)\n(m+10)v′=B+L−W−20v; v(0)=0\nz(t)=(B+L−W)/20*[t−τ*(1−exp(−t/τ))]; τ=(m+10)/20\ndepth=25−z; buoyancy remains at U=0",
  "source": [
    "https://journals.biologists.com/jeb/article/219/5/615/16608/Does-the-physiology-of-chondrichthyan-fishes",
    "JEB (2016) · Liver lipids and buoyancy"
  ],
  "extraSources": [
    [
      "https://pure.hw.ac.uk/ws/portalfiles/portal/33586534/jeb.222943.full.pdf",
      "Priede et al. (2020) · Liver oil compressibility"
    ]
  ],
  "icon": "🦈",
  "ep": "182",
  "episodeTitle": "〈EP.182｜水下法拉利：揭開魚類演化與流體力學的超能力祕密〉",
  "date": "2026-10-03",
  "action": [
    "觀察一次",
    "Watch once"
  ],
  "podcast": {
    "verified": true,
    "urlVerified": true,
    "provider": "Firstory",
    "url": "https://open.firstory.fm/story/cmk8bu12n0ivc01te3aqc3tzv",
    "source": "https://open.firstory.fm/story/cmk8bu12n0ivc01te3aqc3tzv",
    "title": "〈EP.182｜水下法拉利：揭開魚類演化與流體力學的超能力祕密〉",
    "durationSeconds": 787,
    "duration": "13 分 07 秒",
    "durationEn": "13 min 07 sec",
    "durationIso": "PT13M7S",
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/LOW9EB1iPRBLtyEbLS8KK.jpg",
    "coverAvailable": true,
    "coverFile": "podcast/ep182.jpg",
    "artworkVisualChecked": true,
    "verifiedOn": "2026-10-08",
    "publishedAt": "Sat, 10 Jan 2026 10:45:37 GMT",
    "evidenceBasis": "Current saved publisher RSS + exact full public Firstory episode page + matching artwork bytes and pixels. No Apple ID, entitlement or audio inference."
  },
  "defaults": {
    "oil": 10,
    "speed": 1,
    "angle": 10
  },
  "keywords": "鯊魚的三種垂直力,Shark vertical-force lab,鯊魚,浮力,油脂,升力,shark buoyancy,liver oil,lift,科學好好聽,動物科學,互動科學,science for kids",
  "description": [
    "停游之後，浮力也會消失嗎？ 動手改變條件，觀察機制與假設。",
    "Does buoyancy disappear when swimming stops? Change conditions and inspect the mechanism and assumptions."
  ],
  "formulaZh": "f＝全示例體積中的油份額（0..1），不是真實肝臟百分比\n體积V＝0.020m³；ρ體＝(1−f)×1080＋f×860（kg/m³）\n質量m＝ρ體V；g＝9.81m/s²；ρ海水＝1025kg/m³\n浮力B＝ρ海水gV；重量W＝mg（N）\n升力L＝0.5×ρ海水×0.025×U²×(0.04α)（N），α以度計\n向上為正：(m＋10)v′＝B＋L−W−20v；v(0)＝0\n時間常數τ＝(m＋10)/20（s）\nv(t)＝(B＋L−W)/20×[1−exp(−t/τ)]\nz(t)＝(B＋L−W)/20×[t−τ×(1−exp(−t/τ))]（m）\n深度＝25−z；垂直阻力＝−20v（N）\nU＝0時只有升力為0，浮力仍在；三種力箭頭使用同一比例\n水平速度由外部維持；只看4模型秒，沒有呼吸或海床模型",
  "dateModified": "2026-10-08"
};
