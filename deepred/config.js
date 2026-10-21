window.CONFIG={
  "id": "E12",
  "path": "deepred",
  "status": "complete",
  "controller": "deep.js",
  "extras": [
    "deep-model.js",
    "deep-view.js",
    "deep.css",
    "deep.js"
  ],
  "title": [
    "深海紅色隱身：顏色需要光",
    "Deep-sea red: color needs light"
  ],
  "question": [
    "同一個紅物體，在深處照紅燈還會很暗嗎？",
    "Same red object: can a nearby red light reveal it at depth?"
  ],
  "hint": [
    "先開近處紅燈，再改深度；紅燈不用從海面走下來。",
    "Turn on Local red, then change depth. The lamp starts nearby."
  ],
  "controls": [
    {
      "key": "depth",
      "label": [
        "物體深度",
        "Object depth"
      ],
      "min": 0,
      "max": 1000,
      "step": 10,
      "value": 300,
      "unit": "m / m"
    },
    {
      "key": "water",
      "label": [
        "吸收倍率（示例）",
        "Toy absorption factor"
      ],
      "min": 0,
      "max": 3,
      "step": 0.1,
      "value": 1,
      "unit": "× / ×"
    },
    {
      "key": "range",
      "label": [
        "燈／眼與物體距離",
        "Lamp / eye distance"
      ],
      "min": 0,
      "max": 20,
      "step": 0.5,
      "value": 2,
      "unit": "m / m"
    },
    {
      "key": "intensity",
      "label": [
        "兩源強度",
        "Both source strengths"
      ],
      "min": 0,
      "max": 100,
      "step": 1,
      "value": 100,
      "unit": "% / %"
    }
  ],
  "defaults": {
    "depth": 300,
    "water": 1,
    "range": 2,
    "intensity": 100,
    "surface": 1,
    "lamp": 0
  },
  "action": [
    "近紅燈",
    "Local red"
  ],
  "mission": [
    "紅色在深海就一定看不見嗎？",
    "Must red always be invisible in the deep sea?"
  ],
  "options": [
    [
      "一定，紅色就是隱形",
      "Yes: red is always invisible"
    ],
    [
      "不一定，要看光源、光路和背景",
      "No: light, paths and background matter"
    ]
  ],
  "answer": 1,
  "reason": [
    "近處紅燈不必穿過整段海面深度，能讓同一紅物體再次反射紅光；距離、吸收與背景也會改變結果。本站不是動物辨認門檻。",
    "A nearby red lamp skips the surface-to-depth path and can restore red reflection. Distance, absorption and background also matter; this is not an animal-detection threshold."
  ],
  "comparisons": [],
  "ep": "268",
  "episodeTitle": "深海裡的巨大幽靈：神祕巨獸「冥河水母」",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://oceanexplorer.noaa.gov/ocean-fact/red-color/",
    "NOAA Ocean Exploration · Red deep-sea animals"
  ],
  "extraSources": [
    [
      "https://oceanservice.noaa.gov/facts/light_travel.html",
      "NOAA Ocean Service · Light and depth"
    ],
    [
      "https://goldbook.iupac.org/terms/view/B00626",
      "IUPAC Gold Book2025 · Beer–Lambert law"
    ]
  ],
  "limit": [
    "紅色不透明教具借水母輪廓示意，不是實測冥河水母的反射、透明度或生物色。三個RGB代表帶，非完整真光譜。自訂吸收係數k(R/G/B)=0.100/0.025/0.010每公尺乘倍率0–3；0代表理想無吸收，不是真海水。海面白源每帶0.5×強度，走深度z；近燈同強度每開啟帶0.5，走r；全部反射再走r到與燈同處的觀察者。近燈總路徑2r，不是2z。海面與近燈能疊加，未開源為0。教具反射率(0.75,0.02,0.02)，灰參考背景面(0.05,0.05,0.05)，同位置同光路。背景是實驗面，不是真水體散射。吸收按exp(−kl)；平行固定面積光束，省略幾何擴散、散射、自發光、反射方向分布、真材光譜、相機噪聲與白平衡、視覺適應和物種視覺。亮度Y為線性RGB加權，非光度實測；固定曝光sRGB，不各次拉亮。ΔY是絕對亮度差；(Y物−Y背景)/(Y物＋Y背景)是有符號相對對比，兩者全0時未定義，不當辨認成功率。來源點以全強海面白源總量100為基準；水與不透明教具吸收帳閉合，不推體溫。人工揭輪廓不改光量、不當發光。EP268 metadata待確認，Logo非單集封面；EP82只作光學背景。 正微光點與相對對比另標示幅度上限，8位元黑色不代表數值為零。",
    "An opaque red teaching object uses a jellyfish outline, not measured Stygiomedusa reflectance, transparency or color. Three representative RGB bands, not a full real spectrum. Invented absorption k(R/G/B)=0.100/0.025/0.010 per meter times factor0–3; zero means ideal no absorption, not real seawater. Surface white starts at0.5 per band times intensity and travels depth z; a local lamp starts at0.5 per active band and travels r. Every reflected component then travels r to an observer beside the lamp. Local round trip is2r, not2z. Sources add; disabled sources are zero. Object reflectance(0.75,0.02,0.02), gray background panel(0.05,0.05,0.05) at matched position and paths. The panel is not water scattering. exp(−kl) attenuation assumes fixed-area parallel beams; geometric spreading, scattering, bioluminescence, directional reflection, real spectra, camera noise/white balance, adaptation and species vision are omitted. Y is weighted linear RGB, not measured photometry. Fixed-exposure sRGB; no per-case brightening. ΔY is absolute luminance difference; signed relative contrast=(Yobject−Ybackground)/(Yobject+Ybackground), undefined when both zero and never a detection success rate. Source points use full-strength surface white total=100; water and opaque-object absorption ledgers close, without temperature estimates. Human-added outlines do not change light or emit it. EP268 metadata awaits verification; logo is not episode artwork. EP82 is optical background only. Tiny positive light points and signed contrast retain magnitude upper bounds; black8bit RGB does not imply numerically zero light."
  ],
  "formula": "Three-band absorption toy; all coefficients and reflectances invented.\nk=[0.100,0.025,0.010]m^-1*waterFactor; rhoObject=[0.75,0.02,0.02]; rhoPanel=[0.05,0.05,0.05].\nPower per active source band=0.5*intensity/100. Surface=white or off; local=off/white/red/blue.\nAmbientAtObject=A0*exp(-k*z); LocalAtObject=L0*exp(-k*r).\nIncoming=AmbientAtObject+LocalAtObject.\nObservedObject=Incoming*rhoObject*exp(-k*r); panel replaces rhoObject with rhoPanel.\nLocal round trip exp(-2*k*r); ambient route exp(-k*(z+r)).\nSource=first water absorption+object absorption+return water absorption+observed.\nPoints=100*sum(3 bands)/1.5, full-strength surface white reference.\nY=.2126R+.7152G+.0722B in linear RGB; deltaY=Yobject-Ypanel.\nSigned contrast=deltaY/(Yobject+Ypanel); null when denominator is zero.\nFixed exposure then sRGB transfer. No visibility threshold or camera normalization.\nLambert: dI/dl=-kI gives I=I0 exp(-kl). k is Napier per-meter coefficient, not decadic molar epsilon.\nDepth curve: surface-only return for a hypothetical perfect reflector at current r; fixed0..0.5 scale.",
  "keywords": "深海,紅色動物,冥河水母,光吸收,比爾朗伯定律,照明,背景對比,顏色,deep sea,red animals,Stygiomedusa,light absorption,Beer Lambert law,illumination,background contrast,color",
  "description": [
    "改深度、示例吸收與近處探照燈，觀察紅教具、灰背景面及光量帳；固定曝光雙語SVG，分清深度與往返路徑。",
    "Change depth, toy absorption and local lamps to explore a red object, gray reference panel and light ledger in a fixed-exposure bilingual SVG model."
  ],
  "date": "2026-10-03",
  "icon": "🔴",
  "dateModified": "2026-10-10",
  "formulaZh": "三代表色帶吸收教具；所有係數與反射率自訂。\nk(R/G/B)＝[0.100,0.025,0.010]每公尺×吸收倍率；教具反射率＝[0.75,0.02,0.02]；背景面＝[0.05,0.05,0.05]。\n每個開啟的來源色帶光量＝0.5×強度/100。海面白光可關；近燈可關／白／紅／藍。\n到教具的海面光＝起始光×exp(−k×深度z)。\n到教具的近燈光＝起始光×exp(−k×距離r)。\n入射＝兩源加總；到眼前＝入射×教具反射率×exp(−kr)。\n背景只換背景反射率，位置與光路相同。\n近燈總路徑2r；海面光總路徑z＋r。\n來源＝第一段水吸收＋教具吸收＋回程水吸收＋到眼前。\n光點＝100×三帶光量加總/1.5；100光點基準為全強海面白光。\nY＝0.2126R＋0.7152G＋0.0722B（線性RGB）；ΔY＝教具Y−背景Y。\n有符號相對對比＝ΔY/(教具Y＋背景Y)；分母為0時未定義，不是辨認成功率。\n固定曝光再套sRGB轉移並取8位元整數；正光量仍可能顯示黑，數值保留微量上限提示。\ndI/dl＝−kI，解為I＝I0 exp(−kl)；k是每公尺自然指數係數，不是十進制莫耳吸光係數。\n深度曲線只含海面光在當前r經假想全反射面回來的量，尺度固定0–0.5，近燈另算。"
};
