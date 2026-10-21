window.CONFIG={
  "id": "E09",
  "path": "scales",
  "title": [
    "穿山甲的重疊鱗片",
    "Pangolin scale hinges"
  ],
  "question": [
    "保護得密密的，還能彎嗎？",
    "Can tightly overlapping scales still bend?"
  ],
  "hint": [
    "增加重疊，先向外彎，再向內彎；看缺口或卡住。",
    "Increase overlap. Try outward then inward bending; check gaps or a stop."
  ],
  "controls": [
    {
      "key": "overlap",
      "label": [
        "鱗片重疊比例",
        "Scale overlap"
      ],
      "min": 0,
      "max": 70,
      "step": 10,
      "value": 40,
      "unit": "%",
      "options": null
    },
    {
      "key": "flex",
      "label": [
        "接點間隙調整",
        "Joint clearance setting"
      ],
      "min": 5,
      "max": 100,
      "step": 5,
      "value": 50,
      "unit": "%",
      "options": null
    },
    {
      "key": "bend",
      "label": [
        "要求總彎角",
        "Requested total bend"
      ],
      "min": 0,
      "max": 150,
      "step": 10,
      "value": 80,
      "unit": "°",
      "options": null
    },
    {
      "key": "direction",
      "label": [
        "彎曲方向",
        "Bend direction"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 0,
      "unit": "",
      "options": [
        [
          "向外彎",
          "Outward"
        ],
        [
          "向內彎",
          "Inward"
        ]
      ]
    }
  ],
  "action": [
    "觀察機制",
    "Watch"
  ],
  "mission": [
    "增加重疊，可能帶來什麼取捨？",
    "More overlap can involve what trade-off?"
  ],
  "options": [
    [
      "覆蓋與彎曲空間互相牽制",
      "Coverage trades off with bending room"
    ],
    [
      "一定能無限彎曲",
      "Unlimited bending"
    ]
  ],
  "answer": 0,
  "reason": [
    "鱗片是角蛋白。這組鉸鏈幾何顯示：增加覆蓋，某些彎曲方向會更容易碰到限制。",
    "Scales are keratin. These hinge geometries show that extra coverage can restrict bending in some directions."
  ],
  "comparisons": [
    {
      "label": [
        "少／多重疊",
        "Less / more overlap"
      ],
      "key": "overlap",
      "a": 0,
      "b": 70,
      "base": {
        "bend": 150
      }
    },
    {
      "label": [
        "向外／向內",
        "Outward / inward"
      ],
      "key": "direction",
      "a": 0,
      "b": 1,
      "base": {
        "bend": 150,
        "overlap": 70
      }
    },
    {
      "label": [
        "小／大間隙",
        "Small / large clearance"
      ],
      "key": "flex",
      "a": 5,
      "b": 100,
      "base": {
        "bend": 150,
        "overlap": 70,
        "direction": 1
      }
    }
  ],
  "limit": [
    "一列8片長30mm的剛片、7個等角接點；設定5–100%對應自訂間隙1.2–5mm。不是原論文的多排六角排列：真鱗片可相對滑動與移動，本頁只算一列轉角近似。向內以重疊段兩半的高度跨距限制角度，不偵測SVG裝飾邊緣碰撞；向外用長度投影估缺口，向內缺口未計算。沒有彈性、滑移、摩擦、皮膚、厚度、刺穿或防護評級，不是真捲身上限。SVG片形非尺寸圖，青點為1起點及7接點。所有數值即時更新，沒有動畫／播放時間。原論文第5頁重疊圖及相關正文已讀；研究只支持重疊結構啟發，未校準本式。2026-10-10直接核對Apple官方EP197單集1000710558798、官方封面與約12分鐘；官頁有播放按鈕，未實際播放。精確秒數與實際音訊未確認。",
    "One row of 8 rigid 30 mm tiles and 7 equal-angle joints; 5–100% maps to an invented 1.2–5 mm clearance. This is not the paper's multi-row hexagonal arrangement: real scales can slide and shift, while this toy uses row-angle approximations. Inward rotation limits the vertical span of two half-overlap segments, without detecting decorative SVG-edge contact. Outward length projection estimates gaps; inward gaps are not calculated. No elasticity, slip, friction, skin, thickness, puncture rating or real curl limit. Tile drawings are not dimensioned anatomy; cyan points mark 1 base and 7 joints. Values update live, with no animation time. Original page 5 overlap figure and relevant text were read; the paper inspires overlap structure, without calibrating this formula. On 2026-10-10 the official Apple EP197 page, episode 1000710558798, artwork and about 12 min were checked directly. A Play button is offered; audio was not played. Exact seconds and actual audio remain unconfirmed."
  ],
  "formula": "Invented one-row geometry: 8 rigid tiles, 7 equal joints, L=30 mm.\no=overlap percent/100; pitch=L(1-o); clearance=1+4*flex/100 mm (1.2..5 for allowed settings).\nRequested per-joint angle=bend/7 degrees.\nInward cap=2 asin(min(1,clearance/(L*o))) converted to degrees; at o=0 take 180 deg.\nInward actual=min(requested,cap); outward actual=requested; total=7actual.\nOutward gap=max(0,pitch-L*cos(actual/2)), angles in radians for cos.\nOutward projected coverage=min(1,L*cos(actual/2)/pitch); inward gap is not calculated.\nDecorative SVG edges are not collision boundaries. No calibration, thickness, sliding or failure model.\nLive results have no playback time. Tiny positive gap displays <0.01 mm; saved comparisons retain full settings.",
  "source": [
    "https://www.sciencedirect.com/science/article/pii/S174270611630246X",
    "Wang et al. (2016) · Pangolin armor structure"
  ],
  "ep": "197",
  "date": "2026-10-07",
  "episodeTitle": "〈EP.197｜森林裡的寂寞騎士：解密「穿山甲」的隱形盔甲與身世之謎〉",
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/ep-197-%E6%A3%AE%E6%9E%97%E8%A3%A1%E7%9A%84%E5%AF%82%E5%AF%9E%E9%A8%8E%E5%A3%AB-%E8%A7%A3%E5%AF%86-%E7%A9%BF%E5%B1%B1%E7%94%B2-%E7%9A%84%E9%9A%B1%E5%BD%A2%E7%9B%94%E7%94%B2%E8%88%87%E8%BA%AB%E4%B8%96%E4%B9%8B%E8%AC%8E/id1812447277?i=1000710558798",
    "verified": true,
    "duration": "約12分鐘",
    "durationEn": "About 12 min",
    "coverAvailable": true,
    "coverFile": "e09-ep197-cover.webp",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/dc/01/08/dc01086b-c487-311f-3899-9438cc9683f6/mza_8716592833781612459.jpg/960x960bb.webp",
    "checkedAt": "2026-10-10",
    "officialEvidence": "scales-official197-20261010.txt",
    "accessScope": "Official page offers play for12 minutes without subscriber label; actual audio untested",
    "exactSecondsUnconfirmed": true
  },
  "defaults": {
    "overlap": 40,
    "flex": 50,
    "bend": 80,
    "direction": 0
  },
  "keywords": "穿山甲,鱗片,重疊,角蛋白,鉸鏈,接點,彎曲,投影缺口,幾何限制,柔性盔甲,pangolin,scales,overlap,keratin,hinge,joint,bending,projected gap,geometric constraint,flexible armor",
  "description": [
    "即時調整假想穿山甲鱗片的重疊、間隙、彎角及方向，比較向外投影缺口與向內近似限角，附中英文與科學限制。",
    "Adjust overlap, clearance, requested bend and direction in a hypothetical pangolin scale row; compare outward projected gaps and inward approximate stops with bilingual controls and limits."
  ],
  "icon": "🛡️",
  "extraSources": [
    [
      "https://meyersgroup.ucsd.edu/papers/journals/Meyers%20425.pdf",
      "Wang et al.2016 · author PDF · overlap section / Fig.3"
    ],
    [
      "https://pubmed.ncbi.nlm.nih.gov/27221793/",
      "Original research abstract / DOI10.1016/j.actbio.2016.05.028"
    ]
  ],
  "formulaZh": "自訂一列幾何：8剛片、7等角接點，片長L=30mm。\no=重疊百分比/100；接點距離pitch=L(1−o)。\n自訂間隙c=1+4×間隙設定/100 mm；合法設定5–100%得到1.2–5mm。\n每接點要求角=要求總角/7，單位度。\n向內限角=2×asin(min(1,c/(Lo)))，轉成度；o=0時取180°。\n來自重疊段兩半的高度跨距Lo×sin(角/2)≤c，不是真SVG邊緣碰撞。\n向內實際角=min(要求角,限角)；向外實際角=要求角；總角=7×實際角。\n向外每接點缺口=max(0,pitch−L×cos(實際角/2))；cos計算前把度轉成弧度。\n向外投影覆蓋比=min(1,L×cos(實際角/2)/pitch)，不是皮膚防護率。\n向內缺口沒有計算，不能把內部0占位數字說成完全覆蓋。\n所有讀值即時更新，沒有播放時間；正微缺口顯示<0.01mm。\n保存對照是完整所列參數結果；無真鱗片、滑移、破裂、防護或捲身校準。",
  "dateModified": "2026-10-10",
  "controller": "app.js",
  "extras": [
    "app.js",
    "scales.css"
  ]
};
