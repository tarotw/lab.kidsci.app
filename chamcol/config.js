window.CONFIG={
  "id": "E10",
  "path": "chamcol",
  "status": "complete",
  "controller": "hue.js",
  "extras": [
    "hue-data.js",
    "hue-model.js",
    "hue-view.js",
    "hue.css",
    "hue.js"
  ],
  "title": [
    "變色龍的結構色調音盤",
    "Chameleon: tune structural color"
  ],
  "question": [
    "晶體間距一樣，換照明還會看到一樣的顏色嗎？",
    "With the same crystal spacing, does new lighting give the same color?"
  ],
  "hint": [
    "先拉晶體間距，看色塊和反射峰；再換紅光。",
    "Drag crystal spacing, watch the patch and peak, then try red light."
  ],
  "controls": [
    {
      "key": "spacing",
      "label": [
        "晶體中心間距",
        "Crystal center spacing"
      ],
      "min": 100,
      "max": 300,
      "step": 1,
      "value": 170,
      "unit": "nm / nm"
    },
    {
      "key": "intensity",
      "label": [
        "照明強度",
        "Light intensity"
      ],
      "min": 0,
      "max": 100,
      "step": 1,
      "value": 100,
      "unit": "% / %"
    }
  ],
  "defaults": {
    "spacing": 170,
    "intensity": 100,
    "lamp": 0,
    "pigment": 0
  },
  "action": [
    "間距＋5",
    "Spacing +5"
  ],
  "mission": [
    "看皮膚顏色，就能知道變色龍的心情嗎？",
    "Can skin color alone tell you a chameleon's mood?"
  ],
  "options": [
    [
      "可以，每個顏色是一種心情",
      "Yes: each color is one mood"
    ],
    [
      "不行，還要看照明、色素與情境",
      "No: lighting, pigments and context also matter"
    ]
  ],
  "answer": 1,
  "reason": [
    "相同間距換照明也改變觀察色；真變色龍還有色素、生理與物種差異，不能拿本站色塊讀心。",
    "Lighting changes the observed color at unchanged spacing. Real chameleons also involve pigments, physiology and species differences; this patch cannot read moods."
  ],
  "comparisons": [],
  "ep": "189",
  "episodeTitle": "〈EP.189｜鋼鐵防護衣！揭開爬行動物的身體奧祕〉",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/ep-189-%E9%8B%BC%E9%90%B5%E9%98%B2%E8%AD%B7%E8%A1%A3-%E6%8F%AD%E9%96%8B%E7%88%AC%E8%A1%8C%E5%8B%95%E7%89%A9%E7%9A%84%E8%BA%AB%E9%AB%94%E5%A5%A7%E7%A5%95/id1812447277?i=1000709422171",
    "duration": "約19分鐘",
    "durationEn": "About 19 minutes",
    "coverAvailable": true,
    "coverFile": "e10-ep189-cover.webp",
    "coverURL": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/24/04/bb/2404bbd5-6146-0341-2059-1dbab3643274/mza_4007150628401793329.jpg/960x960bb.webp",
    "checked": "2026-10-10"
  },
  "source": [
    "https://www.nature.com/articles/ncomms7368",
    "Teyssier et al.2015 · Nature Communications6:6368"
  ],
  "extraSources": [
    [
      "https://cie.co.at/datatable/cie-1931-colour-matching-functions-2-degree-observer",
      "CIE2019 · XYZ2° observer · DOI10.25039/CIE.DS.xvudnb9b"
    ],
    [
      "https://www.cie.co.at/datatable/cie-standard-illuminant-d65",
      "CIE2019 · D65 · DOI10.25039/CIE.DS.hjfjmt59"
    ],
    [
      "https://www.w3.org/TR/css-color-4/#color-conversion-code",
      "W3C CSS Color4 · sRGB conversion sample"
    ],
    [
      "https://www.unige.ch/medias/en/2015/cdp150310-en",
      "UNIGE2015 · Original research-team explanation"
    ]
  ],
  "limit": [
    "豹紋變色龍表層晶體間距研究的啟發，非真皮膚重建。中心距s=100–300nm；示意晶體直徑80nm固定，不是研究量測大小。λ₀=3s與半寬35nm、峰0.8的三角反射帶完全自訂，不冒稱Bragg定律或FCC能帶重現。示意黃濾片一次透過率0.15→1，在450–550nm線性上升，往返乘兩次；不是實測色素。白光採CIE D65可見部分；三色燈是自訂±20nm三角帶，峰值強度相同但總光量不同。每波段反射S×R，未反射S−S×R包含吸收或透過，不全部叫熱。可見窗380–780nm是教具約定，不是每個人的硬視覺邊界。色塊採CIE XYZ積分轉sRGB、固定曝光，超色域通道裁切；不逐次歸一變亮，不是精確真動物色或醫療色覺測試。深層晶體近紅外反射與體溫是其他機制；此例不模擬。顏色不是心情讀取器。EP189官方Apple及Firstory標題／單集已核對，Apple約19分鐘，不填未確認秒數；2026-10-10直接查看官方單集並核對封面與19分鐘顯示；未見訂閱限制，精確秒數與實際音訊未測。極弱正光量以上限顯示；8位元色塊可能取整為黑。",
    "Inspired by superficial crystal-spacing research in panther chameleons, not skin reconstruction. Center spacing s=100–300nm; fixed80nm toy crystals are not measured anatomy. Peak λ₀=3s and a triangular band with35nm half-width and0.8 maximum are invented, not Bragg's law or FCC band-gap reproduction. A toy yellow filter has one-pass transmission0.15→1 rising linearly over450–550nm; the round trip multiplies twice, not measured pigment. White uses the visible part of CIE D65. Colored lamps are invented±20nm triangular bands with equal peak intensity but different total light. Reflected light is S×R; unreturned S−S×R includes absorption or transmission, not all heat. The380–780nm visible window is a teaching convention, not every person's hard visual limit. CIE XYZ-to-sRGB uses fixed exposure and channel clipping for out-of-gamut colors; no per-case brightening. Not exact animal color or a vision test. Deep-layer near-infrared reflection and body temperature are separate mechanisms omitted here. Color is not a mood reader. EP189 title and episode checked on official Apple/Firstory pages; The official episode page and artwork were directly checked on 2026-10-10; Apple displays 19 minutes and offers Play without an observed subscriber label. Exact seconds and actual audio remain untested. Tiny positive light amounts use upper bounds; 8-bit rounding may still make the patch black."
  ],
  "formula": "Toy approximation. s=center spacing100..300nm; λ₀=3s (invented scale rule).\nRstructure(λ)=0.8 max(0,1−|λ−λ₀|/35).\nYellow filter optional: T=0.15+0.85 clamp((λ−450)/100,0,1); Reffective=Rstructure T².\nSwhite=visible D65 / its visible maximum × intensity/100.\nScolor=max(0,1−|λ−lampPeak|/20) × intensity/100.\nReflected=S Reffective; unreturned=S−reflected.\nLight points=100×integrated spectrum / full-intensity white integrated spectrum.\nXYZ=Σ reflected(λ)[x̄,ȳ,z̄] / Σ D65visible(λ)ȳ; 1nm steps.\nFixed normalization for all cases. CIE window masked outside380..780nm.\nLinear RGB=XYZ-to-sRGB matrix; clip to0..1 then sRGB transfer curve.\nNo FCC photonic-band calculation or biological calibration.",
  "keywords": "變色龍,豹紋變色龍,結構色,晶體間距,反射光譜,色素,照明,可見光,chameleon,panther chameleon,structural color,crystal spacing,reflection spectrum,pigments,illumination,visible light",
  "description": [
    "拖動示意晶體間距、換照明與黃濾片，觀察結構反射峰、皮膚色塊和光量帳；雙語互動教具，明示科學近似。",
    "Change toy crystal spacing, lighting and a yellow filter to explore reflection peaks, a skin patch and light ledgers in a bilingual model with explicit limits."
  ],
  "date": "2026-10-03",
  "icon": "🦎",
  "formulaZh": "教學近似，未以真皮膚校準。s＝晶體中心間距100–300nm；反射峰λ₀＝3s（自訂尺度）。\n結構反射率R結構(λ)＝0.8 max(0,1−|λ−λ₀|/35)。\n示意黃濾片一次透過率T＝0.15＋0.85 clamp((λ−450)/100,0,1)；往返有效反射率＝R結構×T²。\n白光S＝可見D65／其可見最大值×強度/100。\n彩色光S＝max(0,1−|λ−光源峰|/20)×強度/100。\n反射光＝S×有效反射率；未反射光＝S−反射光，含吸收或透過。\n光點＝100×光譜加總／滿強度白光加總；不是焦耳。\nXYZ＝Σ反射光(λ)[x̄,ȳ,z̄]／Σ可見D65(λ)ȳ；每1nm取樣。\n所有條件共用固定白光基準；色度／白光窗之外380–780nm遮為0。\n線性RGB＝XYZ轉sRGB矩陣；各通道裁至0–1，再套sRGB轉移曲線並取8位元整數。\n微弱正反射不等於零；螢幕取整後仍可能顯示黑。\n沒有計算FCC光子能帶或校準物種。",
  "dateModified": "2026-10-10"
};
