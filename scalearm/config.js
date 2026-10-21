window.CONFIG={
  "id": "E04",
  "path": "scalearm",
  "status": "complete",
  "controller": "scale.js",
  "extras": [
    "scale-model.js",
    "scale-view.js",
    "scale.css",
    "scale.js"
  ],
  "title": [
    "巨骨舌魚：硬鱗與韌纖維",
    "Arapaima: hard scales, tough fibers"
  ],
  "question": [
    "只有硬，能一直擋住牙齒嗎？",
    "Can hardness alone keep teeth out?"
  ],
  "hint": [
    "先看硬層裂後，青色纖維是否仍牽住。",
    "Watch whether cyan fibers hold after hard-layer cracking."
  ],
  "controls": [
    {
      "key": "material",
      "label": [
        "鱗片材料",
        "Scale material"
      ],
      "min": 0,
      "max": 2,
      "step": 1,
      "value": 2,
      "unit": "",
      "options": [
        [
          "純硬",
          "Hard only"
        ],
        [
          "純軟",
          "Soft only"
        ],
        [
          "複合",
          "Composite"
        ]
      ]
    },
    {
      "key": "poke",
      "label": [
        "局部壓入多少？",
        "Local indentation"
      ],
      "min": 0,
      "max": 100,
      "step": 1,
      "value": 40,
      "unit": "% / %",
      "options": null
    },
    {
      "key": "bend",
      "label": [
        "彎曲多少？",
        "Bending"
      ],
      "min": 0,
      "max": 100,
      "step": 1,
      "value": 40,
      "unit": "% / %",
      "options": null
    },
    {
      "key": "backing",
      "label": [
        "複合鱗的內纖維",
        "Composite inner fibers"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "移除",
          "Removed"
        ],
        [
          "保留",
          "Kept"
        ]
      ]
    },
    {
      "key": "overlap",
      "label": [
        "相鄰鱗片重疊",
        "Adjacent scale overlap"
      ],
      "min": 0,
      "max": 40,
      "step": 5,
      "value": 35,
      "unit": "% / %",
      "options": null
    },
    {
      "key": "site",
      "label": [
        "牙齒位置（固定點）",
        "Tooth site (fixed point)"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "中央",
          "Center"
        ],
        [
          "接縫旁",
          "Near seam"
        ]
      ]
    }
  ],
  "defaults": {
    "material": 2,
    "poke": 40,
    "bend": 40,
    "backing": 1,
    "overlap": 35,
    "site": 1
  },
  "action": [
    "看載入反應",
    "Watch loading"
  ],
  "mission": [
    "複合材料在每種情況都一定最好嗎？",
    "Is a composite always best under every load?"
  ],
  "options": [
    [
      "不一定；看載入與材料量",
      "Not always; check load and amount"
    ],
    [
      "一定；有硬層就不會壞",
      "Always; hard layers cannot fail"
    ]
  ],
  "answer": 0,
  "reason": [
    "巨骨舌魚鱗有較硬的外層與含膠原纖維的內層。研究觀察到它們以不同方式承載與損傷；硬不等於永不破裂。這個教具讓你用同厚度材料比較局部壓入與彎曲：低壓入時硬支路承載大，破裂後纖維可能還牽住；彎曲時純軟材料也可能承載更多。移除內纖維或增加重疊，同時改了材料量，不能偷偷當成同材料量比較。",
    "Arapaima scales have a harder outer region and a collagen-fiber inner region. Research reports different load and damage mechanisms; hardness is not immunity to failure. This toy compares equal-thickness materials in local indentation and bending: the hard path reacts strongly at low indentation; fibers can still hold after cracking. Pure soft material can carry more under some bending conditions. Removing inner fibers or adding overlap also changes the amount of material."
  ],
  "comparisons": [
    {
      "key": "backing",
      "a": 1,
      "b": 0,
      "trial": 0,
      "label": [
        "複合：保留／移除內纖維",
        "Composite: keep / remove backing"
      ]
    },
    {
      "key": "overlap",
      "a": 0,
      "b": 35,
      "trial": 0,
      "base": {
        "poke": 5,
        "site": 1
      },
      "label": [
        "固定牙齒：重疊0／35%",
        "Fixed tooth: overlap 0 / 35%"
      ]
    },
    {
      "key": "poke",
      "a": 5,
      "b": 40,
      "trial": 0,
      "label": [
        "同一複合：壓入5／40%",
        "Same composite: indent 5 / 40%"
      ]
    }
  ],
  "ep": "273",
  "episodeTitle": "亞馬遜河的綠色巨人：巨骨舌魚的防彈神話與重生物語",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277",
    "verificationStatus": "2026-10-10 Apple Taiwan actual show-all internal searches 273 and 274 submitted with Enter explicitly showed no matching results. This does not prove absence; retain unverified official show link, no episode ID/duration/cover invented."
  },
  "source": [
    "https://meyersgroup.ucsd.edu/papers/journals/Meyers%20385.pdf",
    "Yang et al.2014 · Acta Biomaterialia10:3599–3614 · original paper"
  ],
  "extraSources": [
    [
      "https://www2.lbl.gov/ritchie/Library/PDF/2012_Yang_AdvMat_Natural.pdf",
      "Yang et al.2012 · Natural Flexible Dermal Armor · research-team review"
    ],
    [
      "https://ocw.mit.edu/courses/1-050-solid-mechanics-fall-2004/8f0200f4ca3236383a2ef048c7ec4c40_emech9_04.pdf",
      "MIT OCW1.050 · linear composite beam theory · chapter9"
    ]
  ],
  "limit": [
    "來源支持巨骨舌魚硬外層與膠原內層的不同承載／損傷機制，不支持防彈或所有魚鱗相同；研究也有移除硬外層後抗拉強度增加的結果。以下數值皆自行假設，未校準。三種完整材料總厚度1；複合硬0.3、軟0.7，移除內纖維保留硬0.3與空位。局部壓入是兩支路共同位移的固定端教具：硬支路線性承載，位移0.03後整支失效；軟支路以V形纖維幾何及線性拉伸承載，伸長5%後斷。不是連續體接觸、真牙齒形狀、刺穿深度或真鱗片逐層壓縮。三片寬2的相鄰鱗，固定點0／0.9；理想點載入依覆蓋片數等位移相加，不求滑動、摩擦或接觸重分配；多一片增加材料，不代表相同總重量。彎曲只算單片，採線性小形變平截面梁與E加權中性軸；超過假設拉伸／壓縮門檻即移除整層剛度，重算尚存截面且不復原失效。忽略剪切、黏結、含水、應變速率、局部裂紋選路與大形變。SVG形變放大、裂口示意；曲線完整路徑不等於已播放完成，共用放大軸超界裁切。力點、彎矩點、位移、曲率、厚度與2秒不是N、材料量測或真損傷時間；兩種點數不能相互排名，不推耐咬、壽命或永遠最好。EP273／274單集metadata待確認，不冒用未核對封面或時長。 彎曲依實際計算門檻判失效，不提前1e−12曲率移除整層；畫面分擔是約值，未取整分擔才精確合計，不把小於0.001當成0。純硬／純軟初始提示按實際層更新，完成逐步明示從頭重播，SVG語音說明含力點或彎矩點。 保存A/B保留原實驗種類、指定載入與完整結果，切實驗不把牙齒結果換成彎曲；保存卡另標種類與進度。",
    "Sources support distinct load and damage mechanisms in Arapaima hard outer and collagen inner regions, not bullet resistance or identical scales in all fish. The study also reports increased tensile strength after removing the hard outer layer. All toy values are invented and uncalibrated. Full materials have total thickness1; composite hard0.3 and soft0.7. Removing backing leaves hard0.3 and a void. Local indentation is a two-path, common-displacement anchored toy: linear hard-path support fails entirely at displacement0.03; V-shaped fibers carry axial linear tension and tear at5% strain. This is not continuum contact, real tooth geometry, actual puncture depth or through-thickness compression. Three width2 scales cover fixed sites0/0.9. An ideal point load sums covered scales at equal displacement; no slip, friction or contact redistribution is solved. Extra scales add material; they are not an equal-mass comparison. Bending uses one scale and small-deformation linear plane-section theory with an E-weighted neutral axis. An assumed tensile/compressive threshold removes a whole layer, recomputes the surviving section and never heals damage. Shear, bonding, hydration, rate effects, local crack routing and large deformation are omitted. SVG deformation is enlarged and cracks schematic. Curves show the full possible path, not completed playback; a common zoom clips out-of-range values. Force points, moment points, displacement, curvature, thickness and2s are not newtons, measured material values or real damage time. The two point types cannot be ranked against each other; no bite lifetime or always-best prediction. EP273/274 official metadata is unverified. Bending uses computed failure thresholds without premature1e−12curvature removal. Displayed shares are rounded estimates; unrounded shares sum to the reaction and <0.001is not0. Initial pure-material hints follow present layers, completed Step names restart, and SVG reaction aria includes force/moment units. SavedA/B retain their original experiment, requested input and full outcomes across trial switches, with explicit trial/phase labels."
  ],
  "formula": "Invented, uncalibrated teaching laws; not a real puncture solver.\nFull thickness1. Hard-only: hard1. Soft-only: soft1. Composite: hard0.3 / soft0.7.\nAssumed Ehard=12, Esoft=1 (relative). Backing removed => hard0.3 + void.\nLOCAL LOADING: d=u*(poke/100)*0.4. Anchors +/-a, a=1.\nHard effective path Fh=12*th*d for d<0.03; Fh=0 thereafter.\nFiber L=sqrt(a^2+d^2); epsilon=L/a-1; T=ts*epsilon.\nFs=2*T*d/L while epsilon<0.05; Fs=0 thereafter.\nForce points=1000*n*(Fh+Fs). Both paths share prescribed displacement.\nScale centers=-pitch,0,pitch; pitch=2*(1-overlap/100); width2.\nFixed site x=0 or0.9; n counts abs(x-center)<1. Ideal point load; extra coverage adds material.\nBENDING: k=u*(bend/100)*0.16. One scale; overlap/site do not affect bending.\nzbar=sum(E*t*zmid)/sum(E*t), D=sum(E*(t^3/12+t*(zmid-zbar)^2)).\nepsilon(z)=k*(zbar-z); M=D*k. Moment points=10000*M.\nHard tensile strain limit0.001, compressive0.003; soft absolute strain limit0.05.\nEvent-based loading removes whole failed layers and recomputes zbar/D at the same k.\nRemoved layers never heal. With no surviving layers: D=M=0; no neutral axis.\nLayer moment shares=E*I_about_current_neutral*k; sum=M.\nForce points and moment points are different toy units; no energy/strength/lifetime inference.\nBending failure events use exact computed curvature thresholds without1e−12 premature failure\nDisplayed reactions/shares are rounded estimates; do not treat <0.001 as0 or shown decimals as an exact ledger\nStep1/8loading demo; completed Step explicitly restarts, not damage healing\nStart hint follows actual present layers; mainSVG aria reaction includes force/moment toy unit\nSaved comparison pins original trial and full outcomes; switching trial does not relabel local loading as bending",
  "keywords": "巨骨舌魚,魚鱗,膠原,複合材料,穿刺,彎曲,韌性,重疊,防護,arapaima,fish scales,collagen,composite,puncture,indentation,bending,toughness,overlap,protection",
  "description": [
    "用硬層、韌纖維與複合鱗，觀察局部壓入、彎曲、重疊與內層移除如何改變承載；雙語教具，明示假設與失效。",
    "Compare hard, soft and composite scales in local indentation and bending. Explore overlap and backing removal with bilingual, explicitly assumed failure models."
  ],
  "date": "2026-10-10",
  "icon": "🛡️",
  "formulaZh": "自訂、未校準的教具，不是真實穿刺求解器\n完整總厚度1：純硬1、純軟1、複合硬0.3／軟0.7；抽內層留下硬0.3與空位\n假設相對模數：硬Eh＝12、軟Es＝1，均非量測\n局部載入d＝u×(壓入%/100)×0.4；兩端固定±a，a＝1\n硬支路Fh＝12×硬厚度×d；d<0.03才承載，此後失效\n纖維長L＝√(a²+d²)，伸長ε＝L/a−1，張力T＝軟厚度×ε\nFs＝2Td/L；ε<0.05才承載，此後斷裂\n力點＝1000×覆蓋片數n×(Fh＋Fs)；兩支路共位移，不是真刺入深度\n三片寬2，中心−pitch、0、pitch；pitch＝2(1−重疊%/100)\n牙齒固定x＝0或0.9；|x−中心|<1算覆蓋；增加覆蓋也增加材料\n彎曲只算單片，重疊與位置不改彎曲；κ＝u×(彎曲%/100)×0.16\n中性軸z̄＝Σ(E厚度z中心)/Σ(E厚度)\n剛度D＝Σ E[厚度³/12＋厚度(z中心−z̄)²]；應變ε(z)＝κ(z̄−z)\nM＝Dκ；彎矩點＝10000M，和力點不是相同單位\n硬層拉伸限0.001／壓縮限0.003；軟層拉壓限0.05，都是假設\n按實際曲率事件移除整層，再於同曲率重算尚存截面；不提早失效，也不復原損傷\n無尚存層時D＝M＝0，中性軸不存在；各層矩分擔未取整相加為M\n畫面採約值與小正量標示，各層顯示約數之和約等於反應；小於0.001不代表0\n逐步⅛載入演示；完成逐步明示從頭重播，不是材料損傷復原\n兩實驗保存各自進度，切實驗暫停；語言／模式／圖層／猜題／同值保留\n點數、尺寸、時間未校準，不推能量、真強度、壽命或永遠最好\n保存對照另記原實驗種類，切實驗只改主畫面，不換保存卡的力點／彎矩點"
};
