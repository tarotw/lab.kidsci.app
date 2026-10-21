window.CONFIG={
  "id": "E11",
  "path": "wingcol",
  "status": "complete",
  "controller": "wing.js",
  "extras": [
    "hue-data.js",
    "wing-model.js",
    "wing-view.js",
    "wing.css",
    "wing.js"
  ],
  "title": [
    "蝴蝶翅膀的角度變色",
    "Butterfly wings: color and angle"
  ],
  "question": [
    "翅片不換材料，只轉一個角度，反射峰會去哪裡？",
    "Same wing material, new angle: where does its reflection peak go?"
  ],
  "hint": [
    "先轉翅片，看峰往短波移動；再換紅光。",
    "Tilt the wing, watch the peak shift shorter, then try red light."
  ],
  "controls": [
    {
      "key": "angle",
      "label": [
        "旋轉翅片",
        "Wing tilt"
      ],
      "min": -65,
      "max": 65,
      "step": 1,
      "value": 0,
      "unit": "° / °"
    },
    {
      "key": "spacing",
      "label": [
        "完整層週期 d",
        "Full layer period d"
      ],
      "min": 120,
      "max": 260,
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
    "angle": 0,
    "spacing": 170,
    "intensity": 100,
    "lamp": 0,
    "structure": 1
  },
  "action": [
    "轉＋5°",
    "Tilt +5°"
  ],
  "mission": [
    "反射峰移到紫外線，就代表整片翅膀一定全黑嗎？",
    "If the peak moves into UV, must the entire wing be black?"
  ],
  "options": [
    [
      "一定，所有反射都消失",
      "Yes: all reflection disappears"
    ],
    [
      "不一定，還有帶邊與其他反射",
      "No: band edges and other reflection may remain"
    ]
  ],
  "answer": 1,
  "reason": [
    "峰不是全部反射。此例保留自訂背景反射，帶邊也可能仍在可見窗；真翅還有其他結構、色素與散射。",
    "A peak is not all reflection. This toy keeps background reflection and may retain a visible band edge; real wings also have other structures, pigments and scattering."
  ],
  "comparisons": [],
  "ep": "238",
  "episodeTitle": "〈VIP｜雲端上的空中城市：探索亞馬遜樹冠層｜EP.238〉",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/vip-%E9%9B%B2%E7%AB%AF%E4%B8%8A%E7%9A%84%E7%A9%BA%E4%B8%AD%E5%9F%8E%E5%B8%82-%E6%8E%A2%E7%B4%A2%E4%BA%9E%E9%A6%AC%E9%81%9C%E6%A8%B9%E5%86%A0%E5%B1%A4-ep-238/id1812447277?i=1000777538198",
    "duration": "約12分鐘 · 訂閱者限定",
    "durationEn": "About 12 min · Subscribers only",
    "coverAvailable": true,
    "coverFile": "e11-ep238-cover.webp",
    "coverURL": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource211/v4/a4/a6/49/a4a649f4-e986-8059-aa38-46567b1536be/b47f4eb2-58dc-4e4a-846d-563407907ca4.jpg/960x960bb.webp",
    "checked": "2026-10-10"
  },
  "source": [
    "https://link.springer.com/article/10.1007/s00359-016-1084-1",
    "Giraldo & Stavenga2016 · Morpho wing scales"
  ],
  "extraSources": [
    [
      "https://link.springer.com/article/10.1007/s00359-026-01817-1",
      "Sosa Espinosa et al.2026 · Directional Morpho reflection"
    ],
    [
      "https://openstax.org/books/university-physics-volume-3/pages/3-4-interference-in-thin-films",
      "OpenStax University Physics3 §3.4 · Interference principles"
    ],
    [
      "https://cie.co.at/datatable/cie-1931-colour-matching-functions-2-degree-observer",
      "CIE2019 · XYZ2° · DOI10.25039/CIE.DS.xvudnb9b"
    ],
    [
      "https://www.cie.co.at/datatable/cie-standard-illuminant-d65",
      "CIE2019 · D65 · DOI10.25039/CIE.DS.hjfjmt59"
    ],
    [
      "https://www.w3.org/TR/css-color-4/#color-conversion-code",
      "W3C CSS Color4 · sRGB conversion"
    ]
  ],
  "limit": [
    "選有結構色的Morpho局部翅鱗作啟發，不泛化所有蝴蝶。研究顯示下層薄膜、上層疊片及方向性都可能重要；本例不重建真翅。d=120–260nm是完整重複週期，不是單一薄膜厚度；假想有效折射率1.4固定，由Snell角和相鄰等價平面的相位條件推導一階峰λB=2nd cosθt。不是單層膜半整數干涉公式。自訂選擇性三角帶半寬35nm、峰0.70加背景0.04；關微結構只去掉選擇性帶，不代表實物去鱗。R固定0.04背景是教具設定，不是無鱗翅量測。旋轉量α相對起始水平翅片，入射角|α|相對法線；圖中探測器跟著鏡向反射，固定眼睛可能收不到相同光。未算偏振、Fresnel角幅、多階峰、色素、繞射、曲率或真實多重散射。白光用CIE D65可見部分；三色燈為峰值相同的自訂±20nm三角帶，總光量不同。380–780nm是教具可見窗約定。固定曝光XYZ轉sRGB，超色域裁切，不各次拉亮。光點以全強白光總量100為基準；未反射可透過或吸收，不全叫熱。層圖固定放大，非實際解剖。EP238於2026-10-10直接查看官方頁，唯一單集1000777538198、約12分鐘、訂閱者限定及官方封面已核對；精確秒數與實際音訊未測；c3及EP82為延伸背景。 本次弱正光點顯示<0.1，8位元黑色不當零反射；近380nm的UV峰明示<380，可見判斷用未取整值，圖中數字取約值。",
    "Inspired by a structurally colored local Morpho scale, not all butterflies. Thin lower laminae, upper stacks and directional reflection can matter; this is not wing reconstruction. d=120–260nm is a complete repeat period, not single-film thickness. Invented constant effective index1.4 and Snell refraction give a first-order peak λB=2nd cosθt between equivalent periodic planes, not a single-film half-order formula. A toy triangular selective band has35nm half-width and0.70 peak, plus0.04 background. Switching structure off removes only that selective band, not a real descaling experiment. Flat0.04 is invented, not a measured unscaled wing. Tilt α is relative to the initial horizontal wing; incidence |α| is relative to its normal. The detector tracks specular reflection; fixed eyes may miss it. Polarization, Fresnel angle amplitudes, higher peaks, pigments, diffraction, curvature and real multiple scattering are omitted. White uses visible CIE D65; invented±20nm colored bands have equal peaks but different total light. The380–780nm visible window is a teaching convention. Fixed-exposure XYZ-to-sRGB clips out-of-gamut channels without per-case brightening. Light points use full white total=100; unreturned light can transmit or absorb, not all heat. Layers are enlarged, not actual anatomy. EP238 directly checked on 2026-10-10: unique episode1000777538198, about12min, subscribers only and official artwork. Exact seconds and actual audio untested. c3 and EP82 are background extensions. Tiny positive light points display<0.1; black8bit RGB does not mean zero reflection. A UV peak rounded near380nm is marked<380; classification uses unrounded values and plotted labels are approximate."
  ],
  "formula": "First-order periodic-plane approximation, not a single-film reconstruction.\nd = full repeat period120..260nm; invented n_eff=1.4.\nalpha = wing tilt−65..65deg; external incidence=abs(alpha).\nsin(theta_t)=sin(alpha)/n; lambda_B=2*n*d*cos(theta_t).\nAdjacent equivalent planes: path difference2*n*d*cos(theta_t)=lambda_B (first order).\nR(lambda)=0.04+structure*0.70*max(0,1−abs(lambda−lambda_B)/35).\nstructure=0 removes selective band, retaining toy background0.04. No unique peak then.\nLampWhite=visible D65/max_visible_D65; colored lamps are triangles±20nm at630/530/450nm.\nS=lamp*intensity/100; reflected=S*R; unreturned=S−reflected.\nlight points=100*integrated spectrum/integrated full white.\nXYZ=sum(reflected*CMF)/sum(full_white*ybar), fixed for all cases.\nClip linear RGB0..1 then apply sRGB transfer.\nIncoming(0,1); normal(sin(alpha),−cos(alpha)); reflected(sin(2alpha),−cos(2alpha)).\nDetector follows reflected vector. Layers use fixed enlarged scale.\nNo biological calibration, TMM or Fresnel angular amplitude.",
  "keywords": "蝴蝶,大藍閃蝶,翅鱗,結構色,多層干涉,反射峰,觀察角度,層週期,光譜,butterfly,Morpho,wing scales,structural color,multilayer interference,reflection peak,viewing angle,layer period,spectrum",
  "description": [
    "旋轉示意翅片、調整完整層週期與光源，觀察反射峰、角度曲線及有無微結構對照；雙語Canvas互動教具，明示近似。",
    "Tilt a toy wing, change its full layer period and light to inspect reflection peaks, angle curves and structure-on/off comparisons in a bilingual Canvas model."
  ],
  "date": "2026-10-03",
  "icon": "🦋",
  "dateModified": "2026-10-10",
  "formulaZh": "完整週期等價平面的一階近似，不是真翅薄膜重建。\nd＝完整重複週期120–260nm；假想有效折射率n＝1.4。\nα＝翅片旋轉−65至65°；相對法線的外部入射角＝|α|。\nsin(折射角θt)＝sin(α)/n；反射峰λB＝2nd cosθt。\n相鄰等價面相位路徑差2nd cosθt＝λB（一階）；不是單層薄膜半整數公式。\n反射率R(λ)＝0.04＋週期開關×0.70×max(0,1−|λ−λB|/35)。\n關週期只去掉選擇性帶，仍保留自訂0.04背景；沒有唯一週期峰。\n白光＝可見D65／其可見最大值；彩色燈是630／530／450nm為中心的±20nm三角帶。\n入射S＝燈光×強度/100；反射＝S×R；未反射＝S−反射，可透過或吸收。\n光點＝100×光譜加總／滿強度白光加總；不是焦耳。\nXYZ＝Σ反射光×色度函數／Σ滿強度白光×ȳ；所有條件固定同一基準。\n線性RGB裁至0–1，再套sRGB轉移曲線並取8位元整數；微弱正反射仍可能取整為黑。\n入射向量(0,1)；法線(sinα,−cosα)；反射向量(sin2α,−cos2α)。\n探測器跟著反射向量；層面固定放大，截面與翅片對齊。\n未做生物校準、轉移矩陣TMM或Fresnel角幅計算。"
};
