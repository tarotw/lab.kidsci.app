window.CONFIG={
  "id": "E03",
  "path": "twistply",
  "status": "complete",
  "controller": "ply.js",
  "extras": [
    "ply-view.js",
    "ply.css",
    "ply.js"
  ],
  "title": [
    "螳螂蝦的旋轉纖維層",
    "Mantis shrimp: rotating fiber layers"
  ],
  "question": [
    "同樣點數，轉向最多就一定最好嗎？",
    "With the same budget, is more turning always better?"
  ],
  "hint": [
    "先按「看裂面展開」，看金線怎麼轉，再換排列。",
    "Tap Watch crack to see the gold front turn, then change arrangement."
  ],
  "controls": [
    {
      "key": "arrangement",
      "label": [
        "纖維排列",
        "Fiber arrangement"
      ],
      "min": 0,
      "max": 2,
      "step": 1,
      "value": 2,
      "unit": "",
      "options": [
        [
          "同向",
          "Aligned"
        ],
        [
          "交叉",
          "Crossed"
        ],
        [
          "逐層旋轉",
          "Helicoidal"
        ]
      ]
    },
    {
      "key": "budget",
      "label": [
        "投入多少教具點數？",
        "Input budget"
      ],
      "min": 0,
      "max": 100,
      "step": 1,
      "value": 30,
      "unit": "點 / pts",
      "options": null
    },
    {
      "key": "cost",
      "label": [
        "每片新裂面成本",
        "Cost per new surface tile"
      ],
      "min": 1,
      "max": 10,
      "step": 1,
      "value": 5,
      "unit": "點/片 / pts/tile",
      "options": null
    },
    {
      "key": "width",
      "label": [
        "裂紋前緣寬度",
        "Crack-front width"
      ],
      "min": 40,
      "max": 120,
      "step": 10,
      "value": 80,
      "unit": "格 / cells",
      "options": null
    },
    {
      "key": "offset",
      "label": [
        "起裂位置：左／右",
        "Start position: left / right"
      ],
      "min": -20,
      "max": 20,
      "step": 1,
      "value": 0,
      "unit": "格 / cells",
      "options": null
    }
  ],
  "defaults": {
    "arrangement": 2,
    "budget": 30,
    "cost": 5,
    "width": 80,
    "offset": 0
  },
  "action": [
    "看裂面展開",
    "Watch crack"
  ],
  "mission": [
    "金線轉得多，就能斷言材料永遠最強嗎？",
    "Does more turning prove an always-strongest material?"
  ],
  "options": [
    [
      "不能；還要看成本與真實條件",
      "No; cost and real conditions matter"
    ],
    [
      "能，轉越多一定越強",
      "Yes; more turning always means stronger"
    ]
  ],
  "answer": 0,
  "reason": [
    "研究中的槌端內部有旋轉排列的幾丁質纖維，裂紋可沿纖維間旋轉並形成更多破裂表面。這裡是指定幾何的教具：同向、90°交叉與每層20°旋轉都依各自方向表展開；交叉也可能花更多點數。調低每面成本，旋轉裂紋仍可走得更遠。幾何、材料與載荷要一起看，不能只憑排列名字排名。",
    "The club interior contains helicoidally arranged chitin fibers; cracks can twist between them and form more fracture surface. This toy prescribes geometry: aligned, alternating 90° crossed and 20° per-gap helicoidal directions. Crossed geometry may also cost more points. Lower surface cost can let a rotating crack travel farther. Geometry, material and loading all matter; names alone cannot rank strength."
  ],
  "comparisons": [
    {
      "key": "cost",
      "a": 8,
      "b": 1,
      "label": [
        "同一旋轉層：成本8／1",
        "Same helix: cost 8 / 1"
      ]
    },
    {
      "key": "budget",
      "a": 0,
      "b": 30,
      "label": [
        "同一裂面：投入0／30",
        "Same surface: input 0 / 30"
      ]
    },
    {
      "key": "width",
      "a": 40,
      "b": 120,
      "label": [
        "同一材料：窄／寬裂面",
        "Same material: narrow / wide"
      ]
    }
  ],
  "ep": "244",
  "episodeTitle": "〈海底最強生化戰士：雀尾螳螂蝦的爆破神拳與奇幻視覺｜EP.244〉",
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/%E6%B5%B7%E5%BA%95%E6%9C%80%E5%BC%B7%E7%94%9F%E5%8C%96%E6%88%B0%E5%A3%AB-%E9%9B%80%E5%B0%BE%E8%9E%B3%E8%9E%82%E8%9D%A6%E7%9A%84%E7%88%86%E7%A0%B4%E7%A5%9E%E6%8B%B3%E8%88%87%E5%A5%87%E5%B9%BB%E8%A6%96%E8%A6%BA-ep-244/id1812447277?i=1000785303067",
    "verified": true,
    "appleId": "1000785303067",
    "episodeId": "1000785303067",
    "source": "https://open.firstory.fm/story/cmt5uziue0p1801tb7y0qeyy1",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource211/v4/0d/53/89/0d538997-6173-9e16-8439-f5473b994e61/d14308be-342c-43d2-beb9-11397be3cb1e.jpg/960x960bb.webp",
    "coverFile": "podcast/ep244.jpg",
    "coverAvailable": true,
    "duration": "21:21",
    "durationEn": "21:21",
    "durationIso": "PT21M21S",
    "access": [
      "訂閱者限定",
      "Subscribers only"
    ],
    "subscribersOnly": true,
    "reviewed": "2026-10-10",
    "verifiedOn": "2026-10-10",
    "accessBasis": "Actual native Taiwan Apple show full-list search244 -> unique episode/title/SubscribersOnly/rounded21min; linked Firstory exact21:21/JoinUnlock. Account/audio untested.",
    "coverStatus": "Actual public Apple960WebP acquired and pixels match linked Firstory; JPEG encoding for existing cover.jpg path, no content edits.",
    "artworkVisualChecked": true,
    "verificationStatus": "2026-10-10 actual Apple/Firstory EP244 shared-topic evidence in native-review-shrimp-apple/firstory-20261010.json; no duplicated external search."
  },
  "source": [
    "https://www.science.org/doi/10.1126/science.1218764",
    "Weaver et al.2012 · Science336:1275–1280 · original paper"
  ],
  "extraSources": [
    [
      "https://www.researchgate.net/publication/225280684_The_Stomatopod_Dactyl_Club_A_Formidable_Damage-Tolerant_Biological_Hammer",
      "Ali Miserez author-uploaded original paper · structural and crack-mechanism text"
    ],
    [
      "https://pure.gonzaga.edu/p/en/research-outputs/ldabd7jkhpzg-14787cac-750d-4a56-81d9-b5d65bab1370",
      "Gonzaga institutional record · original research abstract"
    ]
  ],
  "limit": [
    "Weaver等2012研究支持槌端週期區旋轉纖維、纖維間旋轉裂紋與增加破裂表面的耗能機制；不是螳螂蝦全身外殼的統一構造。作者上傳的原研究正文只讀層組織、裂紋機制及界面段落；未讀完整補充資料或原圖像素，出版者頁面受存取限制。此頁自行指定9層、8個層距、每距20教具格；同向0°、交叉0/90°、旋轉每距20°，不是物種量測。裂紋前緣被指定跟隨方向表；螺旋帶面積由幾何積分算出，成本按單面破裂面積一致計一次，未求解有限元素、載荷、剛度、穿層或真實選路。1片＝80×20＝1600格²，格、點數與2秒演示皆非真尺寸、焦耳或裂紋時間。只有付款後的裂面畫金色；預算用完可停在半層，0投入不前進。均質教具內平移起點不改成本。交叉幾何可能比漸轉花更多點，弱成本反例不表示真弱界面永遠有害。真實裂紋還受材料、載荷與層間黏結影響，不從圖或點數推算真強度、耐撞次數或永遠最好。 顯示點數約數協調到0.01點，兩邊合計仍等於投入，內部支出不先取整；不因接近就提前宣布耗盡或到底。完成逐層明示從頂層重啟；同向播放只說裂面展開，不說必轉向；成本最低時改給不同的投入100點作下一動作。",
    "Weaver et al.2012 supports helicoidal fibers in the club periodic region, twisting cracks between fibers and increased fracture-surface dissipation, not a uniform structure throughout the animal shell. Only the author-uploaded structural, crack-mechanism and interface passages were read, not all supplements or figure pixels; the publisher page was access-restricted. Nine layers, eight gaps, 20 toy cells per gap, aligned0°, crossed0/90° and 20° per-gap helicoidal directions are invented, not species measurements. The front is prescribed to follow these directions; ribbon area is geometrically integrated and charged once with a consistent single-surface convention. No finite elements, loading, stiffness, penetration or real path selection are solved. One tile =80×20=1600 cells². Cells, points and the two-second demonstration are not real dimensions, joules or crack time. Only paid surface is gold; an exhausted budget can stop partway, and zero input never advances. Translation in the uniform toy changes no cost. Crossed geometry may cost more than gradual rotation; the low-cost example does not imply that a real weak interface is always harmful. Real cracks also depend on material, load and bonding. Diagrams and points do not predict actual strength, impact lifetime or an always-best material. Display points are coordinated0.01pt approximations, still summing to input; internal costs remain unrounded. Budget/bottom are not announced early. Completed Step explicitly restarts; aligned playback says unfolding, not turning; at minimum cost a blocked hint offers different input100."
  ],
  "formula": "Prescribed geometry, not a fracture solver. 9 layers / 8 gaps; h=20 toy cells.\nFront angles: aligned 0; crossed alternating 0 and pi/2; helicoidal j*pi/9.\nr(s,t)=(offset+s*cos(theta0+delta*t),s*sin(theta0+delta*t),h*t)\ns=-W/2..W/2, t=0..1. A=integral sqrt(h²+s²*delta²) ds.\nFor d=abs(delta)>0, a=W/2:\nA=a*sqrt(h²+(a*d)²)+(h²/d)*asinh(a*d/h); for d=0: A=W*h.\nOne reference tile =80*20=1600 toy cells². Cost=gamma*A/1600 points.\nSame geometry and single-surface cost convention for all arrangements.\nAdvance until requested phase or budget exhaustion, including partial gaps.\nInput = spent + remaining. No input -> no advance.\nSingle-surface geometry/cost does not predict actual strength or real crack routing.\nModel/event labels use strict budget/end boundaries without future-event epsilon\nInternal amounts remain unrounded; displayed ledger uses coordinated0.01pt rounding so shown spent+left=shown input\nStep=1gap; completed Step explicitly restarts; no-op/language/mode/quiz/layers/source/formula preserve state\nRunning guide describes unfolding, including aligned fibers; minimum-cost blocked hint chooses a different achievable input100",
  "keywords": "螳螂蝦,幾丁質,旋轉疊層,盔甲,裂紋,破裂面積,耗能,材料韌性,mantis shrimp,chitin,helicoidal,Bouligand,crack front,fracture surface,energy budget,toughness",
  "description": [
    "比較同向、交叉與旋轉纖維層，放入裂紋並逐層觀察前緣、裂面與教具點數收支；繁中英文、明示假設、不宣稱永遠最強。",
    "Compare aligned, crossed and helicoidal fiber layers. Place a crack and inspect its front, surface and toy energy ledger in Chinese or English, with explicit assumptions and no always-best claim."
  ],
  "date": "2026-10-07",
  "icon": "🌀",
  "formulaZh": "這是指定幾何教具，不是斷裂求解器；9層／8層距，每距h＝20教具格\n前緣方向：同向0；交叉在0與π/2交替；漸轉第j層為jπ/9（每層20°）\n裂面r(s,t)＝(起點+s cos(θ0+δt), s sin(θ0+δt), ht)\ns＝−W/2..W/2；t＝0..1，面積A＝∫√(h²+s²δ²) ds\n令d＝|δ|、a＝W/2：d>0時A＝a√(h²+(ad)²)+(h²/d)asinh(ad/h)；d＝0時A＝Wh\n1片參考裂面＝80×20＝1600格²；每距成本＝γA/1600教具點\n三種排列用同一單面裂面成本慣例；只變方向表，不額外獎勵旋轉排列\n前進至指定概念階段或實際預算終點；可能停在半層，零預算不前進\n投入＝已花＋剩餘；內部不先四捨五入；畫面約數協調到0.01點，左右合計仍等於投入\n到預算／到底事件嚴格判斷，不因接近就提早宣布完成；逐層每次看一層距\n完成逐層明示從頂層重啟；2畫面秒不是裂紋真實時間\n語言／模式／圖層／猜題／同值／空值／非有限值保留；明確改值或放入裂紋才重算\n單面幾何／點數不能預測真實強度或真實裂紋選路",
  "dateModified": "2026-10-10"
};
