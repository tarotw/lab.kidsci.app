window.CONFIG={
  "id": "C03",
  "path": "croceye",
  "title": [
    "鱷魚的兩道進光控制",
    "Crocodile light gates"
  ],
  "question": [
    "瞳孔和保護膜，怎麼改變進光量？",
    "How do pupil size and a protective membrane affect incoming light?"
  ],
  "hint": [
    "先把瞳孔面積加倍，再放下瞬膜；看右邊亮度條。",
    "Double pupil area, then lower the shield. Watch the brightness bar."
  ],
  "controls": [
    {
      "key": "area",
      "label": [
        "瞳孔面積",
        "Pupil area"
      ],
      "min": 1,
      "max": 20,
      "step": 1,
      "value": 5,
      "unit": "mm²",
      "options": null
    },
    {
      "key": "light",
      "label": [
        "入射光強（相對值）",
        "Incident light (relative)"
      ],
      "min": 0,
      "max": 100,
      "step": 5,
      "value": 50,
      "unit": "%",
      "options": null
    },
    {
      "key": "shield",
      "label": [
        "瞬膜眼罩",
        "Nictitating shield"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 0,
      "unit": "",
      "options": [
        [
          "收起",
          "Raised"
        ],
        [
          "放下",
          "Lowered"
        ]
      ]
    },
    {
      "key": "trans",
      "label": [
        "示例瞬膜透光率",
        "Example shield transmission"
      ],
      "min": 10,
      "max": 100,
      "step": 5,
      "value": 70,
      "unit": "%",
      "options": null
    }
  ],
  "action": [
    "觀察機制",
    "Watch"
  ],
  "mission": [
    "有入射光、瞬膜條件不變，瞳孔面積加倍時？",
    "With incident light and the same membrane setting, what happens when pupil area doubles?"
  ],
  "options": [
    [
      "進光量加倍",
      "Twice the light enters"
    ],
    [
      "眼罩製造光",
      "The shield creates light"
    ]
  ],
  "answer": 0,
  "reason": [
    "光強大於0、透光率相同時，面積加倍就讓進光量加倍。光強0時仍是0；膜只讓一部分光通過，保護作用不等於減光量。",
    "With nonzero light and unchanged transmission, doubling area doubles flux. At zero incident light it stays zero. Transmission and mechanical protection are separate properties."
  ],
  "comparisons": [
    {
      "label": [
        "面積5／10 mm²",
        "Area5 /10 mm²"
      ],
      "key": "area",
      "a": 5,
      "b": 10
    },
    {
      "label": [
        "收起／放下眼罩",
        "Shield up / down"
      ],
      "key": "shield",
      "a": 0,
      "b": 1
    },
    {
      "label": [
        "反例：沒有光",
        "Counterexample: no light"
      ],
      "key": "light",
      "a": 50,
      "b": 0
    }
  ],
  "limit": [
    "均勻入射光的開口教具：面積1–20mm²、光強0–100%、膜示例透光10–100%，均未校準真鱷魚。相對通過量Φ=A×光強/100×T；Φ不是瓦特、流明、lux或生物視力。固定參照20mm²／光強100%／膜收起的Φ₀=20，右圖和讀數列100Φ/Φ₀%，不是自動拉亮。膜收起T=1，透光率滑桿保留但無作用；膜放下T=設定/100。當設定100%時，放下／收起光量相同；零光強時兩者均0。光量不能衡量保護功能。圓形等效面積不是鱷魚真實瞳孔形狀；直徑2√(A/π)是教具值，SVG每模型mm用22單位放大。左圖為正面層次示意，非剖面；青色半透明覆層只標膜的位置，其固定顏色不代表實測透光率。右圖為光量編碼，不模擬鱷魚視野、景物清晰度或水下成像；忽略散射、光譜、入射角、視網膜適應與反光層。四個光點為入射示意，數目不隨光量計數；2秒動畫不是真光速。所有控制即時可用，改設定保留動畫階段；沒有生物瞬膜動作速度或眼睛診斷。",
    "Uniform incident-light aperture toy: area1–20mm², light0–100% and assumed membrane transmission10–100% are uncalibrated. Relative throughput Φ=A×light/100×T is not watts, lumens, lux or eyesight. Fixed reference20mm²/light100%/raised membrane gives Φ₀=20; display and readouts show100Φ/Φ₀%, without automatic brightening. Raised T=1: transmission setting remains stored but inactive. Lowered T=setting/100. At100% assumed transmission, raised/lowered flux is equal; at zero light both are zero. Flux is not protection effectiveness. An equal-area circle is not the real pupil shape;2√(A/π) is a toy diameter, enlarged22 SVG units per model millimetre. Left is a front-view layering diagram, not a cross-section; its fixed cyan overlay marks membrane position, not measured transmission. Right encodes flux, not crocodile perception, clarity or underwater imaging. Scattering, spectrum, incidence angle, retinal adaptation and tapetum are omitted. Four input markers are not photon counts;2s is not actual light speed. Controls work immediately and keep animation phase. No biological blink speed or eye diagnosis is predicted."
  ],
  "formula": "Φ=A_mm²×(incident light%/100)×T\nRaised membrane:T=1; lowered:T=chosen transmission%/100\nΦ is illustrative throughput, not W/lumen/lux\nFixed reference Φ₀=20 (area20mm²/light100%/raised)\nDisplayed fraction=Φ/20; percent=100Φ/20\nEqual-area circle: diameter=2√(A/π)mm\nDoubling area doubles flux and raises diameter by√2\nZero input light gives zero flux;100% transmission has no flux penalty\nFour markers and2s are illustrative, not photon counts or light speed",
  "source": [
    "https://www.dcceew.gov.au/sites/default/files/env/pages/dc11235d-8b3b-43f7-b991-8429f477a1d4/files/40-fauna-2a-crocodylia-morphology.pdf",
    "Grigg & Gans (1993) · Crocodylia morphology, Australian government"
  ],
  "ep": "190",
  "date": "2026-10-06",
  "episodeTitle": "〈EP.190｜岸邊的重裝甲戰士！揭開鱷魚一億年的生存神技〉",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/ep-190-%E5%B2%B8%E9%82%8A%E7%9A%84%E9%87%8D%E8%A3%9D%E7%94%B2%E6%88%B0%E5%A3%AB-%E6%8F%AD%E9%96%8B%E9%B1%B7%E9%AD%9A%E4%B8%80%E5%84%84%E5%B9%B4%E7%9A%84%E7%94%9F%E5%AD%98%E7%A5%9E%E6%8A%80/id1812447277?i=1000709576513&uo=4",
    "episodeId": "1000709576513",
    "source": "https://open.firstory.fm/story/cmdpx4cuu00du01xl056p3562",
    "duration": "13 分 20 秒",
    "durationEn": "13 min 20 sec",
    "durationIso": "PT13M20S",
    "subscribersOnly": false,
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/b0/9f/27/b09f2780-7a3d-98b6-0a9d-db925773b4a5/mza_4640014512484570942.jpg/250x250bb.webp",
    "coverAvailable": true,
    "verifiedOn": "2026-10-06",
    "coverStatus": "Actual official Apple episode artwork observed and downloaded; original250x250 WebP bytes retained.",
    "coverFormat": "webp",
    "coverFile": "podcast/ep190.webp",
    "coverVerifiedOn": "2026-10-20"
  },
  "defaults": {
    "area": 5,
    "light": 50,
    "shield": 0,
    "trans": 70
  },
  "keywords": "鱷魚,瞳孔面積,瞬膜,第三眼瞼,透光率,進光量,等效圓,眼睛保護,crocodile,crocodylian,pupil area,nictitating membrane,third eyelid,transmission,light throughput,equivalent circle,eye protection,科學好好聽,science for kids",
  "description": [
    "調整瞳孔等效面積、入射光與瞬膜示例透光率，以固定參照百分比比較進光量；光量示意不是真鱷魚視野。",
    "Adjust equivalent pupil area, incident light and assumed membrane transmission. Compare flux against a fixed reference; the display is not crocodile vision."
  ],
  "icon": "🐊",
  "formulaZh": "相對通過量Φ＝開口面積mm²×（入射光百分比/100）×T\n膜收起：T＝1；放下：T＝選定透光百分比/100\nΦ為教具通過量，非W／流明／lux／視力\n固定參照Φ₀＝20：面積20mm²、光強100%、膜收起\n顯示比例＝Φ/20；百分比＝100Φ/20\n等效圓直徑＝2√(面積/π)mm；1mm²是邊長1mm的小方格面積\n面積加倍：光量加倍，直徑只乘√2\n光強0則光量0；透光100%則放下膜不減光\n四個光點及2秒為示意，非光子計數或真光速",
  "extraSources": [
    [
      "https://www.iucncsg.org/pages/The-Crocodilian-Body.html",
      "IUCN Crocodile Specialist Group · Eyes and eyelids"
    ]
  ],
  "dateModified": "2026-10-20"
};
