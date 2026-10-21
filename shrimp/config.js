window.CONFIG={
  "id": "E01",
  "path": "shrimp",
  "title": [
    "螳螂蝦的彈簧拳",
    "Mantis shrimp spring punch"
  ],
  "question": [
    "慢慢存能量，怎麼快速出拳？",
    "How can stored energy make a fast strike?"
  ],
  "hint": [
    "拉高蓄能位移，再按釋放；比較峰值功率與標出的釋放時間。",
    "Increase compression and release. Compare peak power and the labelled release times."
  ],
  "controls": [
    {
      "key": "x",
      "label": [
        "蓄能位移",
        "Compression"
      ],
      "min": 0,
      "max": 20,
      "step": 1,
      "value": 12,
      "unit": "mm",
      "options": null
    },
    {
      "key": "k",
      "label": [
        "彈簧硬度",
        "Spring stiffness"
      ],
      "min": 200,
      "max": 1400,
      "step": 100,
      "value": 800,
      "unit": "N/m",
      "options": null
    },
    {
      "key": "damp",
      "label": [
        "阻尼",
        "Damping"
      ],
      "min": 0,
      "max": 0.5,
      "step": 0.05,
      "value": 0.1,
      "unit": "N·s/m",
      "options": null
    }
  ],
  "action": [
    "釋放",
    "Release"
  ],
  "mission": [
    "彈簧拳的能量是從哪裡來？",
    "Where does spring energy come from?"
  ],
  "options": [
    [
      "彈簧憑空製造",
      "Created by the spring"
    ],
    [
      "肌肉先做功存入",
      "Stored muscle work"
    ]
  ],
  "answer": 1,
  "reason": [
    "彈簧把先前做的功集中釋放；功率變高不表示能量變多。",
    "A spring releases earlier work quickly. Greater power does not mean more energy."
  ],
  "comparisons": [
    {
      "label": [
        "位移 6／12 mm",
        "Compression 6 / 12 mm"
      ],
      "key": "x",
      "a": 6,
      "b": 12
    },
    {
      "label": [
        "低／高阻尼",
        "Low / high damping"
      ],
      "key": "damp",
      "a": 0.05,
      "b": 0.4
    },
    {
      "label": [
        "反例：零蓄能",
        "Counterexample: no charge"
      ],
      "key": "x",
      "a": 12,
      "b": 0
    }
  ],
  "limit": [
    "螳螂蝦啟發的單自由度彈簧教具；等效質量4 g、剛度與阻尼都是教學假設，未校準真動物。螺旋彈簧与槌臂不是解剖圖。儲能分成末端動能與獨立累積的阻尼耗能；瞬時動能功率可為負，代表動能減少。假想直接驅動把相同末端動能用0.5秒釋放，並非實測肌肉曲線。到位移首次回0停止，不計撞擊、回彈、空化或擊殺力。2畫面秒慢放毫秒釋放，完整能量帳各階段不變；完成逐步保留末端，按再做一次才重播。零蓄能無動作；換語言、模式、猜題与同值不重設。能量顯示0.01mJ是教具計算精度，非動物測量精度。作者NTU實驗室2018發表說明支持雙層鞍狀儲能与材料配置方向；沒有取得新的研究全文、圖像或實測參數。官方EP.244單集1000785303067完整集名、封面與21:21已由台灣Apple及官方連結Firstory核對，兩頁均需訂閱；未驗證帳戶權益或播放音訊。",
    "A one-degree-of-freedom toy inspired by mantis shrimp. Effective mass4g, stiffness and damping are assumed, not animal calibration. The coil and arm are not anatomy. Stored energy becomes terminal kinetic energy and independently accumulated damping loss; negative instantaneous kinetic power means kinetic energy decreases. A hypothetical direct drive releases the same terminal energy over0.5s, not a measured muscle curve. Stop at the first zero compression; impact, rebound, cavitation and killing force are omitted.2display seconds slow down the millisecond release; full energy ledgers stay fixed. Completed Step retains the endpoint; Again replays. Zero charge gives no movement; language/mode/quiz/no-op keep state.0.01mJ is toy computational display precision, not measurement accuracy. Author NTU lab2018publication text supports bilayer saddle storage/material roles; no new full paper, images or calibrated parameters were acquired. Taiwan Apple and linked official Firstory confirm EP244 ID1000785303067, full title, matching artwork and21:21. Both require membership; actual entitlement and audio are untested."
  ],
  "formula": "E = ½kx²; m x″ + c x′ + kx = 0\nk: stiffness; x: compression; m: mass; c: damping coefficient\nx′: velocity; x″: acceleration. Energy in J; power in W.\nStored E = kinetic E + damping loss + residual E\nHypothetical direct-drive triangular pulse has the same final kinetic energy\nP = d(kinetic E)/dt = −kx x′ − c(x′)²\nNegative P means kinetic energy decreases.\nDamping loss = integral of c(x′)² dt, up to the first zero compression.\nDisplayduration=2s for any positive charge; modelrelease milliseconds depend on k/m/c\nStep=1/8release, completed Step staysatend; Again restarts. Zerocharge: time/phase0,no movement\nFullenergy/terminalkinetic/loss values at everyphase; source/formula openness kept on language/mode/quiz\nEnergy display:2decimal mJ, not calibratedanimal measurement accuracy",
  "source": [
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC6204534/",
    "Mantis shrimp saddle mechanics (2018)"
  ],
  "ep": "244",
  "date": "2026-10-07",
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
    "artworkVisualChecked": true
  },
  "defaults": {
    "x": 12,
    "k": 800,
    "damp": 0.1
  },
  "keywords": "螳螂蝦,彈簧卡榫,蓄能,彈性位能,阻尼,功率放大,動能,mantis shrimp,spring latch,elastic energy,damping,power amplification,kinetic energy,science for kids,科學好好聽",
  "description": [
    "調整螳螂蝦啟發的彈簧位移、剛度與阻尼，逐步觀察儲能釋放，核對動能、耗能及相同有效能量的功率比較。",
    "Adjust compression, stiffness and damping in a mantis-shrimp-inspired spring. Step through release, check kinetic energy and damping loss, and compare power at equal useful energy."
  ],
  "formulaZh": "初始彈簧能 E = ½kx²；運動方程 m x″ + c x′ + kx = 0\nk 是剛度，x 是位移，m 是質量，c 是阻尼係數\n儲能 = 動能 + 阻尼耗能 + 剩餘彈簧能\n直接驅動的三角形脈衝，使用相同的有效能量\n瞬時動能變化功率 P = d(動能)/dt\n能量用 J，功率用 W；x′ 是速度，x″ 是加速度。\nP = −kx x′ − c(x′)²；負值表示動能下降。\n損耗獨立累積 ∫c(x′)²dt；到位移首次回到0為止。\n正蓄能一律以2畫面秒播放，模型釋放毫秒由剛度／質量／阻尼決定\n逐步前進1/8釋放；完成逐步保留末端，按再做一次重新蓄能\n零蓄能：畫面時間／進度0，無動作；對照卡仍列各自完整結局\n完整儲能／末端動能／阻尼耗能各階段不變，來源／公式展開隨語言模式／猜題保留\n能量顯示兩位mJ，避免小正動能／耗能被一位小數寫成0.0",
  "moreSources": [
    [
      "https://personal.ntu.edu.sg/ali.miserez/News.html",
      "Author lab · 2018 saddle spring study"
    ]
  ],
  "dateModified": "2026-10-10"
};
