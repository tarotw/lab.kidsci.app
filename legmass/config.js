window.CONFIG={
  "id": "A05",
  "path": "legmass",
  "title": [
    "馬腳的配重實驗",
    "Horse limb mass lab"
  ],
  "question": [
    "同樣重的配重，放在腳端會更難擺嗎？",
    "Same added mass: is it harder to swing at the foot?"
  ],
  "hint": [
    "把金色配重移到腳端，再把擺腿頻率加倍；看力矩。",
    "Move the gold mass to the foot, then double swing frequency. Watch torque."
  ],
  "controls": [
    {
      "key": "weight",
      "label": [
        "配重距腿根",
        "Ballast distance from hip"
      ],
      "min": 10,
      "max": 80,
      "step": 10,
      "value": 20,
      "unit": "cm",
      "options": null
    },
    {
      "key": "freq",
      "label": [
        "擺腿頻率",
        "Swing frequency"
      ],
      "min": 0.5,
      "max": 3,
      "step": 0.5,
      "value": 1,
      "unit": "Hz",
      "options": null
    },
    {
      "key": "toes",
      "label": [
        "示例接觸趾數",
        "Example contacting toes"
      ],
      "min": 0,
      "max": 2,
      "step": 1,
      "value": 0,
      "unit": "",
      "options": [
        [
          "1 趾",
          "1 toe"
        ],
        [
          "3 趾",
          "3 toes"
        ],
        [
          "4 趾",
          "4 toes"
        ]
      ]
    }
  ],
  "mission": [
    "配重總質量不變，移向腳端會？",
    "Same ballast mass moved distally…"
  ],
  "options": [
    [
      "增加轉動慣量",
      "Increases rotational inertia"
    ],
    [
      "一定證明單趾最好",
      "Proves a single toe is always best"
    ]
  ],
  "answer": 0,
  "reason": [
    "遠離關節的質量以距離平方增加慣量；趾數的演化也涉及承重、骨頭形狀與環境。",
    "Distal mass increases inertia with squared distance. Toe evolution also involves load, bone geometry and environment."
  ],
  "comparisons": [
    {
      "label": [
        "配重靠近／遠離",
        "Near / far ballast"
      ],
      "key": "weight",
      "a": 10,
      "b": 80
    },
    {
      "label": [
        "頻率加倍",
        "Double frequency"
      ],
      "key": "freq",
      "a": 1,
      "b": 2
    },
    {
      "label": [
        "接觸面取捨",
        "Contact-area trade-off"
      ],
      "key": "toes",
      "a": 0,
      "b": 2
    }
  ],
  "limit": [
    "兩段各 0.4 m、5 kg 的直腿繞腿根剛性擺動，外加 2 kg 質點配重；總質量始終 12 kg，振幅 20°。只計慣性力矩，不含重力、肌肉或膝關節彎曲。每趾接觸 10 cm² 僅為等面積示例，不能按趾數推算真實馬蹄面積或演化優劣。 趾數與配重位置是兩個獨立操作，沒有把趾的質量隱藏增減。只看配重增加的2r²項跟距離平方成正比，不把整條腿的慣量也說成完全成正比。",
    "A rigid straight leg made of two 0.4 m, 5 kg rods plus 2 kg ballast; total mass stays 12 kg and amplitude is 20°. Inertial torque only, without gravity, muscles or knee flexion. Each toe has an illustrative 10 cm² contact, not measured hoof area or an evolutionary ranking. Toe count and ballast location are independent; no hidden toe-mass change. Only the added ballast term2r² is proportional to squared distance, not total limb inertia."
  ],
  "formula": "Two uniform straight rods: each L=0.4 m and mass=5 kg, rigidly aligned; plus 2 kg point ballast. Total mass=12 kg.\nr=ballast cm/100 m; upper rod I=5×0.4²/3; lower rod I=5×(0.6²+0.4²/12).\nTotal I=2.133333…+2r² kg·m². The lower rod centre is 0.6 m from the hip; it is not the ballast position.\nf in Hz means f swings each second; ω=2πf rad/s; θmax=20π/180 rad.\nθ(t)=θmax sin(ωt); α(t)=−θmaxω² sin(ωt); τ(t)=Iα(t).\nPeak inertial torque=Iθmaxω² N·m. Doubling f quadruples the peak. Moving ballast changes only 2r², not all of I in proportion to r².\nInertial torque only: no gravity, muscle, knee flexion or real gait. Watch plays2 s; each Step advances1/(8f) s (one eighth-cycle).\n1/3/4 toes with10 cm² each give10/30/40 cm²; total mass remains12 kg. Illustrative area trade-off, not measured hoof area or proof of evolutionary superiority.",
  "source": [
    "https://dash.harvard.edu/entities/publication/73120379-2eaf-6bd4-e053-0100007fdf3b",
    "McHorse et al. (2017) · Evolutionary digit reduction"
  ],
  "icon": "🐴",
  "ep": "s32",
  "episodeTitle": "〈SP.32｜春節馬年特輯｜貓咪變駿馬：馬兒祖先的「斷趾」求生大冒險！〉",
  "date": "2026-10-06",
  "action": [
    "觀察一次",
    "Watch once"
  ],
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/sp-32-%E6%98%A5%E7%AF%80%E9%A6%AC%E5%B9%B4%E7%89%B9%E8%BC%AF-%E8%B2%93%E5%92%AA%E8%AE%8A%E9%A7%BF%E9%A6%AC-%E9%A6%AC%E5%85%92%E7%A5%96%E5%85%88%E7%9A%84-%E6%96%B7%E8%B6%BE-%E6%B1%82%E7%94%9F%E5%A4%A7%E5%86%92%E9%9A%AA/id1812447277?i=1000750218355",
    "duration": "10 分 39 秒",
    "durationEn": "10 min 39 sec",
    "durationIso": "PT10M39S",
    "appleId": "1000750218355",
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/KBOJqS77Rr49Ek0O-EtFJ.jpg",
    "reviewed": "2026-10-06"
  },
  "defaults": {
    "weight": 20,
    "freq": 1,
    "toes": 0
  },
  "keywords": "馬腳的配重實驗,Horse limb mass lab,轉動慣量,馬蹄,配重,rotational inertia,limb mass,科學好好聽,動物科學,互動科學,science for kids",
  "description": [
    "同樣重的配重，放在腳端會更難擺嗎？ 動手改變條件，觀察機制與假設。",
    "Same added mass: is it harder to swing at the foot? Change conditions and inspect the mechanism and assumptions."
  ],
  "formulaEn": "Two uniform straight rods: each L=0.4 m and mass=5 kg, rigidly aligned; plus 2 kg point ballast. Total mass=12 kg.\nr=ballast cm/100 m; upper rod I=5×0.4²/3; lower rod I=5×(0.6²+0.4²/12).\nTotal I=2.133333…+2r² kg·m². The lower rod centre is 0.6 m from the hip; it is not the ballast position.\nf in Hz means f swings each second; ω=2πf rad/s; θmax=20π/180 rad.\nθ(t)=θmax sin(ωt); α(t)=−θmaxω² sin(ωt); τ(t)=Iα(t).\nPeak inertial torque=Iθmaxω² N·m. Doubling f quadruples the peak. Moving ballast changes only 2r², not all of I in proportion to r².\nInertial torque only: no gravity, muscle, knee flexion or real gait. Watch plays2 s; each Step advances1/(8f) s (one eighth-cycle).\n1/3/4 toes with10 cm² each give10/30/40 cm²; total mass remains12 kg. Illustrative area trade-off, not measured hoof area or proof of evolutionary superiority.",
  "formulaZh": "兩根均勻直桿各L=0.4 m、m=5 kg，關節固定成一直線；另加2 kg質點配重，總12 kg。\nr=配重cm/100 m；上桿I=5×0.4²/3，下桿I=5×(0.6²+0.4²/12)。\nI總=2.133333…+2r² kg·m²。下桿的0.6 m是其重心距腿根，不是配重位置。\nf為Hz，每秒擺動f次；ω=2πf rad/s，θmax=20π/180 rad。\nθ(t)=θmax sin(ωt)，α(t)=−θmaxω² sin(ωt)，τ(t)=Iα(t)。\n峰值慣性力矩=Iθmaxω² N·m。頻率加倍，峰值四倍；移配重只改2r²，不能把全部I說成跟r²成正比。\n只計慣性力矩，沒有重力、肌肉、膝彎曲或真步態。觀察播放2 s，逐步每次增加1/(8f) s（八分之一週期）。\n1／3／4趾各固定10 cm²，總接觸面10／30／40 cm²；總質量仍12 kg。這是面積取捨示例，不是馬蹄量測或演化優劣證明。",
  "dateModified": "2026-10-20"
};
