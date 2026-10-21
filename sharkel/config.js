window.CONFIG={
  "id": "C05",
  "path": "sharkel",
  "status": "complete",
  "title": [
    "鯊魚鼻子的電場線索",
    "Shark snout: electrical clues"
  ],
  "question": [
    "轉動電源，鼻子的正負訊號會改變嗎？",
    "Do snout voltage signs change when the source turns?"
  ],
  "hint": [
    "先轉電源方向，看鼻部四點讀數；再加噪音，或把電流降到0。最後揭曉來源核對。",
    "Turn the source and inspect four snout readings. Add noise or reduce current to zero; reveal the source to check."
  ],
  "controls": [
    {
      "key": "angle",
      "label": [
        "電源方向",
        "Source angle"
      ],
      "min": 0,
      "max": 360,
      "step": 15,
      "value": 0,
      "unit": "°",
      "options": null
    },
    {
      "key": "current",
      "label": [
        "示例電流",
        "Example current"
      ],
      "min": 0,
      "max": 10,
      "step": 1,
      "value": 4,
      "unit": "µA",
      "options": null
    },
    {
      "key": "sx",
      "label": [
        "電源左右位置",
        "Source horizontal position"
      ],
      "min": 3.5,
      "max": 8.5,
      "step": 0.5,
      "value": 6,
      "unit": "cm",
      "options": null
    },
    {
      "key": "sy",
      "label": [
        "電源上下位置",
        "Source vertical position"
      ],
      "min": 1,
      "max": 5,
      "step": 0.5,
      "value": 3,
      "unit": "cm",
      "options": null
    },
    {
      "key": "noise",
      "label": [
        "讀數噪音範圍",
        "Reading noise bound"
      ],
      "min": 0,
      "max": 0.1,
      "step": 0.02,
      "value": 0,
      "unit": "µV",
      "options": null
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
          "藏在沙下",
          "Hidden in sand"
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
    "當電流是0，只剩噪音，還能靠電訊號固定指向來源嗎？",
    "With zero current and only noise, can electrical readings reliably point to the source?"
  ],
  "options": [
    [
      "不能，沒有來源電場線索",
      "No: there is no source field clue"
    ],
    [
      "能，鼻子永遠知道位置",
      "Yes: the snout always knows"
    ]
  ],
  "answer": 0,
  "reason": [
    "鯊魚的羅倫氏壺腹能接收微弱電刺激；本頁以四個示例取樣點看電差與局部梯度。電場方向不等於獵物方位；找到來源需要更多位置與線索，不模擬真實神經解碼。",
    "Ampullae of Lorenzini detect weak electrical stimuli. Four illustrative points show voltages and a local gradient. Field direction is not the same as prey bearing; localization needs more positions and cues. Real neural decoding is not simulated."
  ],
  "comparisons": [
    {
      "label": [
        "方向0／180度",
        "Angle 0 / 180 degrees"
      ],
      "key": "angle",
      "a": 0,
      "b": 180,
      "base": {
        "noise": 0
      }
    },
    {
      "label": [
        "同方向，來源近／遠",
        "Same direction: near / far source"
      ],
      "key": "sx",
      "a": 4,
      "b": 8,
      "base": {
        "sy": 3,
        "angle": 0,
        "noise": 0
      }
    },
    {
      "label": [
        "噪音0／0.1微伏特",
        "Noise 0 / 0.1 microvolt"
      ],
      "key": "noise",
      "a": 0,
      "b": 0.1,
      "base": {}
    }
  ],
  "limit": [
    "10×6 cm平面是無限均勻三維導電介質的切面，電位用I/(4πσ)(1/r+−1/r−)，不是薄片二維log勢。σ固定4 S/m、人工電流0–10 µA、兩極相距0.8 cm；半徑ε=0.25 cm平滑近源，數值是教學值、未校準真獵物或鯊魚。鼻部四點B=(1.6,3)、F=(2.4,3)、L=(2,3.4)、R=(2,2.6) cm，各電差相對示例身體點(1.2,3)；不是實際壺腹陣列。各差值加固定種子42、均勻[-noise,+noise] µV獨立讀數噪音，參數相同可重現；不是生物噪音頻譜。1 µV是百萬分之一伏特、1 µA是百萬分之一安培。局部電場近似Ex=−(F−B)/0.8 cm、Ey=−(L−R)/0.8 cm，單位µV/cm；有限差分不是單點真梯度。每軸噪音差界為2noise/0.8，向量界為√2倍；讀數向量長度不超過此界時隱藏方向箭頭。這個確定性界不是統計信心或鯊魚靈敏度。電流0時即使有讀數噪音，也不顯示來源方向或場線；不靠預先知道的來源位置畫寶藏指針。非零箭頭只指取樣局部電場方向，不是獵物指向、辨識率或神經輸出。揭曉只改來源與場線可見性，不改任何讀數。電差柱以±0.5 µV截斷，文字保留完整值；場線方向是正源到負匯的示意，長度不代表強弱，形狀放大。未建模沙水導電界面、氣味、心跳聲納、量子感測或覓食路徑；不能把研究物種結果泛化到所有鯊魚。 超過向量噪音界只排除「取樣向量全由噪音造成」，不能保證精確方向；未超界也不代表真電場不存在。顯示門檻另加10⁻¹²µV/cm浮點容差，非生物敏感度。畫面座標每cm為橫38／縱30SVG單位，箭頭先按該比例換算，再用固定43單位長度，箭頭長度不表示場強；它是取樣向量圖示，不是箭頭所在圖格的精確場值。四點即時讀數沒有傳播時計。原研究物種與行為不能直接推成大白鯊的靈敏度或追蹤路徑。 數字顯示三位小數，但方向門檻用完整值；數字取整後相同仍可能顯示箭頭，此時讀數說明標明四捨五入。",
    "The 10×6 cm plane is a slice of an infinite homogeneous 3D conducting medium, with potential I/(4πσ)(1/r+−1/r−), not a 2D-sheet log potential. Fixed σ=4 S/m, artificial current 0–10 µA, pole spacing 0.8 cm; ε=0.25 cm smooths near-source singularities. Teaching values are not calibrated prey or shark measurements. Four snout points B=(1.6,3), F=(2.4,3), L=(2,3.4), R=(2,2.6) cm are referenced to an illustrative body point (1.2,3), not actual ampullary arrays. Each voltage difference receives independent seed-42 uniform [-noise,+noise] µV reading noise. Identical settings reproduce readings; this is not a biological noise spectrum. One µV is one millionth of a volt; one µA is one millionth of an ampere. Local field approximation Ex=−(F−B)/0.8 cm, Ey=−(L−R)/0.8 cm in µV/cm uses finite differences, not an exact point gradient. Noise differences have per-axis bound 2noise/0.8 and vector bound √2 times this. Direction arrows are hidden when the measured vector magnitude does not exceed that bound. This deterministic bound is not statistical confidence or shark sensitivity. Zero current hides the field arrow and streamlines even with reading noise; no prey pointer is drawn from known source coordinates. Nonzero arrows show the sampled local field, not prey bearing, recognition accuracy or neural output. Reveal changes source/streamline visibility only, never readings. Voltage bars clip at ±0.5 µV while text retains full values; streamlines illustrate source-to-sink direction, not strength, and shapes are enlarged. Sand/water interfaces, smell, heartbeat sonar, quantum sensing and hunting paths are omitted. Research species results cannot be generalized to all sharks. Exceeding the vector-noise bound rules out a vector caused entirely by noise; precise direction is not guaranteed. Below bound does not prove zero source field. A further1e-12µV/cm floating tolerance is not biological sensitivity. Plot scale is38 horizontal/30 vertical SVG units per cm; the arrow uses those scales, then a fixed43-unit length unrelated to field magnitude. It is an icon of the sampled vector, not the exact field at its plotted origin. Readings sample instantly, without a propagation clock. Study species and behavior do not establish white-shark sensitivity or hunting paths. Numbers display three decimals but the gate uses full values. Rounded-equal numbers can accompany a visible arrow; the metric explicitly flags that rounding."
  ],
  "formula": "I=current_microamps*1e-6 A; sigma=4 S/m; separation=0.008 m; epsilon=0.0025 m\nphi=I/(4*pi*sigma)*(1/r_plus_soft−1/r_minus_soft) V\nDeltaV_i=1e6*(phi(P_i)−phi(bodyReference))+Uniform(−noise,+noise) µV, seed42\nPoints B=(1.6,3),F=(2.4,3),L=(2,3.4),R=(2,2.6) cm\nReference=(1.2,3) cm\nEx=−(DeltaV_F−DeltaV_B)/0.8; Ey=−(DeltaV_L−DeltaV_R)/0.8 µV/cm\nVector noise bound=sqrt(2)*2*noise/0.8\nArrow only if current>0 and measured field magnitude>bound+1e-12 microvolts/cm\nCurrent=0 => true voltages=0, no source arrow or streamlines\nAngle+180 degrees => clean voltages reverse signs\nField direction is not prey bearing\nExceeding bound rules out noise alone in the sampled vector; it does not guarantee exact direction.\nBelow bound does not imply the actual source field is zero.\nDisplay arrow maps vector to plot scales: vx=38Ex, vy=−30Ey; displayed length43SVG units, unrelated to field strength.\nInstantaneous sampling, not an arrival delay. Reveal retains readings and saved comparisons.\nGate uses unrounded values; readouts show3 decimals and flag rounded equality.",
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/5114029/",
    "Kalmijn (1971) · The electric sense of sharks and rays"
  ],
  "extraSources": [
    [
      "https://www1.pbrc.hawaii.edu/~danh/Neurodiversity/Spring%202010/Session12-ElasmobranchElectroreception%5BTim%5D/Kalmijn%201971.pdf",
      "Original Kalmijn (1971) paper · university copy"
    ],
    [
      "https://pubmed.ncbi.nlm.nih.gov/7134985/",
      "Kalmijn (1982) · Electric field detection"
    ],
    [
      "https://pubmed.ncbi.nlm.nih.gov/12409487/",
      "Kajiura & Holland (2002) · Juvenile shark electroreception"
    ],
    [
      "https://galileoandeinstein.phys.virginia.edu/Elec_Mag/16_7420/Stonybrook/EM%20merged.pdf",
      "Likharev · Classical Electrodynamics §4.3"
    ]
  ],
  "ep": "184",
  "episodeTitle": "〈EP.184｜深海裡的隱形戰機：大白鯊的「第六感」大冒險！〉",
  "date": "2026-10-06",
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
    "coverStatus": "Official Apple Podcasts page artwork viewed in Computer Use and downloaded from its observed currentSrc; JPEG format conversion only.",
    "coverVerifiedOn": "2026-10-09"
  },
  "icon": "🦈",
  "keywords": "鯊魚,羅倫氏壺腹,電感受,電流偶極,局部電差,電位梯度,取樣噪音,導電率,shark,ampullae of Lorenzini,electroreception,current dipole,local voltage,voltage gradient,noise bound,conductivity,科學好好聽,science for kids",
  "description": [
    "移動、旋轉人工電流偶極，比較鼻部四點電差和局部估計；調噪音或關電，檢查讀數能否排除純噪音，箭頭不是獵物指針。",
    "Move and turn an artificial current dipole. Compare four snout voltages and a sampled local estimate; adjust noise or turn current off. The arrow is not prey bearing or a guarantee of precise direction."
  ],
  "defaults": {
    "angle": 0,
    "current": 4,
    "sx": 6,
    "sy": 3,
    "noise": 0,
    "reveal": 0
  },
  "formulaZh": "示例電流I＝輸入µA×10⁻⁶ A；σ＝4 S/m\n兩極間距0.008m；平滑ε＝0.0025m\nφ＝I/(4πσ)×(1/r正−1/r負) V；r＝√(到各極距離²+ε²)\n均勻三維介質的二維切面，非薄片log勢\nB(1.6,3)、F(2.4,3)、L(2,3.4)、R(2,2.6)cm；參考點(1.2,3)cm\n各讀數＝10⁶[φ(各點)−φ(參考)]＋均勻噪音µV，種子42\nEx＝−(F−B)/0.8；Ey＝−(L−R)/0.8，單位µV/cm\n取樣訊號長度＝√(Ex²+Ey²)；向量噪音界＝√2×2noise/0.8\n電流>0且長度>界+10⁻¹²µV/cm才顯示局部估計箭頭\n超界只排除純噪音，不保證方向精確；未超界不表示真電場不存在\n顯示箭頭vx＝38Ex、vy＝−30Ey，依座標比例換算後固定43SVG單位；長度不表強度\n電流0：來源電差0，即使有噪音也無來源箭頭或場線\n無噪音下加180°：電差與局部估計反號；噪音存在不保證全部反號\n即時感測無動畫時間；揭曉保留讀數和對照；沒有獵物轉向指令\n門檻用未取整值；讀數三位小數，取整相同仍超界時明示四捨五入",
  "dateModified": "2026-10-09"
};
