window.CONFIG={
  "id": "B03",
  "path": "riblets",
  "status": "complete",
  "title": [
    "盾鱗靈感：細槽的尺度",
    "Shark-inspired riblet scale"
  ],
  "question": [
    "粗糙面，在任何方向與速度都減阻嗎？",
    "Do rough surfaces reduce drag at every scale and angle?"
  ],
  "hint": [
    "試細槽 300 µm、速度 1 m/s；再把方向轉 30° 或加快水流。",
    "Try grooves at 300 µm and 1 m/s. Rotate 30° or raise water speed."
  ],
  "controls": [
    {
      "key": "surface",
      "label": [
        "示例表面",
        "Example surface"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "光滑",
          "Smooth"
        ],
        [
          "仿生細槽",
          "Riblets"
        ]
      ]
    },
    {
      "key": "spacing",
      "label": [
        "細槽間距",
        "Groove spacing"
      ],
      "min": 0,
      "max": 600,
      "step": 50,
      "value": 300,
      "unit": "µm",
      "options": null
    },
    {
      "key": "speed",
      "label": [
        "水流速度",
        "Water speed"
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
        "槽與水流夾角",
        "Groove yaw to flow"
      ],
      "min": 0,
      "max": 90,
      "step": 15,
      "value": 0,
      "unit": "°",
      "options": null
    }
  ],
  "mission": [
    "把細槽做得越大，就一直更省力嗎？",
    "Do ever-larger grooves always save more effort?"
  ],
  "options": [
    [
      "離開有效尺度可能增加阻力",
      "Outside the useful scale, drag may rise"
    ],
    [
      "越大永遠越好",
      "Larger is always better"
    ]
  ],
  "answer": 0,
  "reason": [
    "人工細槽的尺度和方向會改變阻力；真實盾鱗與變形身體更加複雜，不能直接沿用同一比例。",
    "Engineered riblet scale and yaw affect drag. Real denticles on deforming bodies are more complex and need not share the same ratios."
  ],
  "comparisons": [
    {
      "label": [
        "光滑／細槽",
        "Smooth / grooved"
      ],
      "key": "surface",
      "a": 0,
      "b": 1
    },
    {
      "label": [
        "順向／30°偏轉",
        "Aligned / 30° yaw"
      ],
      "key": "angle",
      "a": 0,
      "b": 30
    },
    {
      "label": [
        "同尺度換水速",
        "Same spacing, new speed"
      ],
      "key": "speed",
      "a": 1,
      "b": 2
    }
  ],
  "limit": [
    "剛性人工細槽的教學趨勢，不是活鯊魚 CFD。相對阻力查表採 s+=0/5/10/15/20/25/30/40/60 對應 1/.97/.94/.92/.94/.98/1.03/1.12/1.30，線性內插；是依研究趨勢設計的示範，非逐點轉錄。0–15°保留減阻，15–30°線性移除減阻優勢，30°以上不再減阻；增阻部分保留。假設 uτ=0.05U、ν=10⁻⁶ m²/s；基準平板面積 0.1 m²、Cf=0.005。流線為示意，無流動時阻力與功率歸零；不把風洞結果當作天然鯊魚皮膚的保證。 主題單集集名、直連與時長已用同集原官方證據及公开RSS核對；實際音訊與Apple權限未測。 EP184 官方單集封面已於2026-10-10核對並整合。",
    "Teaching trend for rigid engineered riblets, not live-shark CFD. Linear interpolation at s+=0/5/10/15/20/25/30/40/60 uses ratios 1/.97/.94/.92/.94/.98/1.03/1.12/1.30; designed from trends, not digitized observations. Benefit stays through 15°, fades to 30°, and vanishes beyond; drag penalties remain. Assumed uτ=0.05U, ν=10⁻⁶ m²/s; baseline area 0.1 m² and Cf=0.005. Streamlines are schematic. No flow gives zero drag and power; wind-tunnel riblets do not guarantee natural shark-skin performance. Primary title, direct link and duration use the same episode’s saved official evidence plus public RSS; audio and Apple access remain untested. Official EP184 episode artwork was verified and integrated on 10 October 2026."
  ],
  "formula": "s+=spacing*uτ/ν; uτ=0.05U; ν=10⁻⁶ m²/s\nr=interpolated teaching table; a=clamp((30−yaw)/15,0,1)\nrelative drag=1+max(r−1,0)−a*max(1−r,0)\nD0=0.5*1025*0.1*0.005*U²; D=D0*relative drag; power=D*U\nCf=2*(uτ/U)²=0.005; baseline wall shear=1025*uτ²; no division is used at U=0",
  "source": [
    "https://ntrs.nasa.gov/api/citations/19880005573/downloads/19880005573.pdf",
    "NASA Langley · Riblets for skin-friction reduction"
  ],
  "extraSources": [
    [
      "https://journals.biologists.com/jeb/article/215/5/785/11221/The-hydrodynamic-function-of-shark-skin-and-two",
      "Oeffner & Lauder (2012) · Real skin and biomimetic foils"
    ],
    [
      "https://docs.aerosim.io/nassu/theory/IBM/skin_friction.html",
      "AeroSim official theory · Cf and friction velocity definitions"
    ]
  ],
  "icon": "🦈",
  "ep": "184",
  "episodeTitle": "〈EP.184｜深海裡的隱形戰機：大白鯊的「第六感」大冒險！〉",
  "date": "2026-10-03",
  "action": [
    "觀察一次",
    "Watch once"
  ],
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/ep-184-%E6%B7%B1%E6%B5%B7%E8%A3%A1%E7%9A%84%E9%9A%B1%E5%BD%A2%E6%88%B0%E6%A9%9F-%E5%A4%A7%E7%99%BD%E9%AF%8A%E7%9A%84-%E7%AC%AC%E5%85%AD%E6%84%9F-%E5%A4%A7%E5%86%92%E9%9A%AA/id1812447277?i=1000708135285&uo=4",
    "episodeId": "1000708135285",
    "source": "https://open.firstory.fm/story/cmdpx4cvd00f201xlfi291v91",
    "duration": "13 分 02 秒",
    "durationEn": "13 min 02 sec",
    "durationIso": "PT13M2S",
    "subscribersOnly": false,
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/e9/25/64/e925648c-a0d9-333c-08b9-db8b478a5167/mza_8535422499678065396.jpg/500x500bb.webp",
    "coverAvailable": true,
    "verifiedOn": "2026-10-06",
    "coverStatus": "Same verified EP184 artwork as C05; observed official page and matching episode ID/title.",
    "reconciled": "2026-10-08",
    "durationSeconds": 782,
    "evidenceBasis": "Saved original official Apple/Firstory or show-card evidence plus 2026-10-08 public RSS title/duration/artwork crosscheck; no new Apple page/audio/entitlement test.",
    "metadataInheritedFrom": "C05",
    "coverVerifiedOn": "2026-10-10"
  },
  "defaults": {
    "surface": 1,
    "spacing": 300,
    "speed": 1,
    "angle": 0
  },
  "keywords": "盾鱗靈感：細槽的尺度,Shark-inspired riblet scale,盾鱗,細槽,減阻,無因次尺度,riblets,drag reduction,wall units,科學好好聽,動物科學,互動科學,science for kids",
  "description": [
    "粗糙面，在任何方向與速度都減阻嗎？ 動手改變條件，觀察機制與假設。",
    "Do rough surfaces reduce drag at every scale and angle? Change conditions and inspect the mechanism and assumptions."
  ],
  "formulaZh": "間距s先由µm換成m：s＝輸入×10⁻⁶\n摩擦速度uτ＝0.05U；運動黏度ν＝10⁻⁶m²/s（示例假設）\n無單位尺度s⁺＝s×uτ/ν\n教學查表s⁺：[0,5,10,15,20,25,30,40,60]\n對應阻力比r：[1,.97,.94,.92,.94,.98,1.03,1.12,1.30]，線性內插\n對齊份額a＝clamp((30−夾角)/15,0,1)\n細槽阻力比R＝1＋max(r−1,0)−a×max(1−r,0)；光滑面R＝1\n基準阻力D₀＝0.5×1025×0.1×0.005×U²（N）\n阻力D＝D₀R；維持功率P＝DU（W）；U＝0則D、P均0\n表格不是原論文逐點數據；角度規則為教具，不能推成真鯊魚皮肤效能\n基準Cf＝2×(uτ/U)²＝0.005；基準壁面剪應力＝1025uτ²\n這是光滑基準的尺度；細槽仍用基準壁面單位比較，U＝0不做除法",
  "dateModified": "2026-10-20"
};
