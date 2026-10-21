window.CONFIG={
  "id": "C04",
  "path": "platbill",
  "status": "complete",
  "title": [
    "鴨嘴獸：閉眼找食物",
    "Platypus: finding food with eyes shut"
  ],
  "question": [
    "看不見，嘴巴還能收到什麼線索？",
    "What can the bill sense without seeing?"
  ],
  "hint": [
    "移動嘴巴，看左／右電差與水流訊號；再打開「揭曉來源」核對。桌機也能拖嘴巴。",
    "Move the bill and compare left/right electrical and flow cues. Reveal the source to check; desktop users can drag the bill."
  ],
  "controls": [
    {
      "key": "x",
      "label": [
        "嘴巴左右位置",
        "Bill horizontal position"
      ],
      "min": 1,
      "max": 8,
      "step": 0.25,
      "value": 2,
      "unit": "cm",
      "options": null
    },
    {
      "key": "y",
      "label": [
        "嘴巴上下位置",
        "Bill vertical position"
      ],
      "min": 1,
      "max": 5,
      "step": 0.25,
      "value": 3,
      "unit": "cm",
      "options": null
    },
    {
      "key": "power",
      "label": [
        "示例電源",
        "Example electrical source"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "關閉",
          "Off"
        ],
        [
          "開啟",
          "On"
        ]
      ]
    },
    {
      "key": "reveal",
      "label": [
        "視覺線索",
        "Visual clue"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 0,
      "unit": "",
      "options": [
        [
          "藏在泥下",
          "Hidden in mud"
        ],
        [
          "揭曉來源",
          "Reveal source"
        ]
      ]
    }
  ],
  "action": [
    "感測",
    "Sense"
  ],
  "mission": [
    "把示例電源關掉，水流擾動也會一起消失嗎？",
    "Does switching off the example current remove the flow cue too?"
  ],
  "options": [
    [
      "不會，兩條通道分開",
      "No: the channels are separate"
    ],
    [
      "會，兩者是同一個東西",
      "Yes: they are the same signal"
    ]
  ],
  "answer": 0,
  "reason": [
    "鴨嘴獸喙有電感受與機械感受。本頁把人工電流來源與人工水流擾動分開，讓孩子檢查兩條線索；電感受不是磁感應。",
    "Platypus bills have electrical and mechanical senses. This lab separates an artificial current source from an artificial flow disturbance so children can inspect both cues. Electroreception is not magnetoreception."
  ],
  "comparisons": [
    {
      "label": [
        "同一位置，電源關／開",
        "Same location: current off / on"
      ],
      "key": "power",
      "a": 0,
      "b": 1,
      "base": {}
    },
    {
      "label": [
        "沿相同方向，嘴巴近／遠",
        "Same direction: near / far bill"
      ],
      "key": "x",
      "a": 4,
      "b": 1,
      "base": {
        "y": 3,
        "power": 1
      }
    },
    {
      "label": [
        "只改視覺：隱藏／揭曉",
        "Only vision: hidden / revealed"
      ],
      "key": "reveal",
      "a": 0,
      "b": 1,
      "base": {}
    }
  ],
  "limit": [
    "嘴巴在10×6 cm示例平面移動；人工獵物電偶極中心固定(6,3) cm、方向90°、兩極相距0.8 cm。無限均勻三維導電介質的電流源／匯勢φ=I/(4πσ)(1/r+−1/r−)，只畫二維切面；不是二維薄片的log勢。示例I=1 µA、σ=0.1 S/m，距離以公尺計算；用ε=0.25 cm將各r改為√(距離²+ε²)避免近源奇點，這是自訂平滑、不是精確解剖或導電邊界解。左／右喙點為(x+0.4,y±0.4) cm，各電差相對示例身體參考點(x−0.4,y) cm；不是實際受體排列或神經編碼。1 µV是百萬分之一伏特。機械訊號=10/[1+(距離/2 cm)²]相對值，左右各取樣，獨立於電源；不模擬完整水流、泥層、機械波時延或獵物肌肉電流。電源關閉只是關人工電通道，仍讓人工水流來源運作，不是讓活獵物停止生理用電。揭曉只顯示來源與Canvas電場流線，不改感測值；流線是切面場的示意，不是魚或真水流軌跡。正負電差代表極性，不能把數字正負當成來源在左或右；單一位置不能唯一定位。圖中電差柱以±10 µV截斷，文字保留完整值，形狀放大。遠近示範只沿相同固定方向比較，不能跨方向說距離是唯一因素；不套用研究靈敏度、感測範圍或覓食成功率。 所有讀數即時取樣，沒有動畫或來回時延。喙圖為水平朝向的教具，不是真實解剖受體配置。較遠電差仍可能較大，例如嘴巴(5.75,2.5)cm距中心0.559cm、34.58µV，(5.25,2)cm距1.25cm、77.93µV；方向與參考點電位都影響差值，計畫的遠近敘述只採固定方向示範。",
    "The bill moves in a 10×6 cm illustrative plane. Artificial prey dipole: centre (6,3) cm, angle 90°, pole separation 0.8 cm. An infinite homogeneous 3D conducting medium uses current-source/sink potential φ=I/(4πσ)(1/r+−1/r−); a 2D slice is drawn, not the log potential of a 2D sheet. Example I=1 µA and σ=0.1 S/m; distances in metres. Replacing r with √(distance²+ε²), ε=0.25 cm, smooths source singularities; this is a designed approximation, not anatomy or an exact boundary solution. Left/right bill points (x+0.4,y±0.4) cm are measured relative to an illustrative body point (x−0.4,y) cm, not actual receptor arrays or neural decoding. One µV is one millionth of a volt. Each mechanical cue=10/[1+(distance/2 cm)²] relative units, independent of current. Full flow, mud, mechanical-wave delays and muscle currents are omitted. Switching current off leaves the independent artificial flow source running; it does not turn off a living animal physiology. Reveal changes only source/Canvas field visibility, never sensing values. Streamlines illustrate the field slice, not prey or real water paths. Voltage signs mean polarity, not source left/right; one location cannot uniquely locate prey. Electrical bars clip at ±10 µV while text retains full values; shapes are enlarged. Near/far comparisons hold direction fixed; distance is not the only factor across directions. Research sensitivity, sensing range and feeding success are not predicted. Readouts sample immediately, with no animation or arrival delay. The horizontally oriented bill is a toy, not anatomical receptor placement. Farther can still produce a larger voltage: bill(5.75,2.5)cm lies0.559cm from the centre,34.58µV; bill(5.25,2)cm lies1.25cm away,77.93µV. Direction and body-reference potential affect differences; the plan distance statement is used only in a fixed-direction demo."
  ],
  "formula": "I=1e-6 A; sigma=0.1 S/m; separation=0.008 m; epsilon=0.0025 m\nphi(P)=I/(4*pi*sigma)*(1/sqrt(|P-P+|²+epsilon²)−1/sqrt(|P-P−|²+epsilon²)) V\nE(P)=−grad(phi); finite regularized source, 3D-medium 2D slice\nLeft/right=(x+0.4,y±0.4) cm; reference=(x−0.4,y) cm\nDeltaV=1e6*(phi(sensor)−phi(reference)) microvolts\nMechanical=10/[1+(distance_cm/2)²], relative\nElectrical off => DeltaV=0; mechanical unchanged\nReveal never changes either channel\nProduction field ex/ey are microvolts/cm;1 microvolt=1e-6 V.\nBars clip at±10 microvolts; numerical text is complete.\nNear/far demo:y=3cm, x=4/1cm, direction fixed. Across directions distance alone need not order voltages.",
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/3418529/",
    "Gregory et al. (1988) · Receptors in the bill of the platypus"
  ],
  "extraSources": [
    [
      "https://pubmed.ncbi.nlm.nih.gov/3945317/",
      "Scheich et al. (1986) · Electroreception and electrolocation"
    ],
    [
      "https://galileoandeinstein.phys.virginia.edu/Elec_Mag/16_7420/Stonybrook/EM%20merged.pdf",
      "Likharev · Classical Electrodynamics, §4.3, equation 4.32"
    ]
  ],
  "ep": "196",
  "episodeTitle": "〈EP.196｜鴨嘴獸：演化史上最不可思議的拼裝奇蹟〉",
  "date": "2026-10-06",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/ep-196-%E9%B4%A8%E5%98%B4%E7%8D%B8-%E6%BC%94%E5%8C%96%E5%8F%B2%E4%B8%8A%E6%9C%80%E4%B8%8D%E5%8F%AF%E6%80%9D%E8%AD%B0%E7%9A%84%E6%8B%BC%E8%A3%9D%E5%A5%87%E8%B9%9F/id1812447277?i=1000710424526&uo=4",
    "episodeId": "1000710424526",
    "source": "https://open.firstory.fm/story/cmdpx4cut00di01xl35605mab",
    "duration": "10 分 06 秒",
    "durationEn": "10 min 06 sec",
    "durationIso": "PT10M6S",
    "subscribersOnly": false,
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/08/bc/29/08bc293a-b379-3255-9309-22f7e9f4c23b/mza_3359230293954463530.jpg/500x500bb.webp",
    "coverAvailable": true,
    "verifiedOn": "2026-10-06",
    "coverStatus": "Official Apple Podcasts page artwork viewed in Computer Use and downloaded from its observed currentSrc; JPEG format conversion only.",
    "coverVerifiedOn": "2026-10-09"
  },
  "icon": "🦆",
  "keywords": "鴨嘴獸,電感受,機械感受,電流偶極,喙,感測器,局部電差,導電率,水流線索,platypus,electroreception,mechanoreception,current dipole,bill,sensory cues,local voltage,conductivity,flow cues,科學好好聽,science for kids",
  "description": [
    "移動鴨嘴獸喙的示例感測器，比較左右電差與機械水流線索；關閉人工電源或揭曉泥下來源，認識兩條感覺通道。",
    "Move illustrative bill sensors and compare electrical and mechanical cues. Switch an artificial current off or reveal its hidden source to explore two sensory channels."
  ],
  "defaults": {
    "x": 2,
    "y": 3,
    "power": 1,
    "reveal": 0
  },
  "formulaZh": "示例電流I＝1µA＝百萬分之一安培；導電率σ＝0.1 S/m\n兩極中心(6,3)cm，正極y＝3.4cm、負極y＝2.6cm\n距離換公尺；平滑ε＝0.0025m\nφ(P)＝I/(4πσ)×[1/√(|P−P+|²+ε²)−1/√(|P−P−|²+ε²)] V\n此為均勻三維介質的二維切面；不是二維薄片log勢\n電場E＝−gradφ；程式ex/ey用µV/cm，非轉向指令\n左右點(x+0.4,y±0.4)cm；身體參考點(x−0.4,y)cm\n電差＝[φ(感測點)−φ(參考點)]×10⁶ µV；1µV＝百萬分之一伏特\n機械訊號＝10/[1+(到來源距離cm/2)²]，相對值\n關電：電差為0，機械線索不變；揭曉：兩通道皆不變\n電差柱截在±10µV，文字數字完整\n近／遠示範沿固定y＝3、x＝4／1cm；不能跨方向只用距離排序電差",
  "dateModified": "2026-10-09"
};
