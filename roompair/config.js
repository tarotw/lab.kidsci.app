window.CONFIG={
  "id": "F08",
  "path": "roompair",
  "status": "complete",
  "controller": "roompair.js",
  "extras": [
    "roompair-model.js",
    "roompair.css",
    "roompair.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "title": [
    "蝦虎魚與槍蝦：一起比較安全？",
    "Goby and shrimp: safer together?"
  ],
  "question": [
    "斷開觸角，誰會晚點躲？",
    "Who retreats later when contact breaks?"
  ],
  "hint": [
    "按下一拍，看魚蝦交換警報。",
    "Press +1 beat; watch the warning."
  ],
  "defaults": {
    "vision": 6,
    "dig": 70,
    "pressure": 80,
    "pair": 1,
    "link": 1
  },
  "controls": [
    {
      "key": "vision",
      "label": [
        "魚能看幾格？",
        "Goby vision range"
      ],
      "min": 0,
      "max": 8,
      "step": 1,
      "value": 6,
      "unit": "格 / units"
    },
    {
      "key": "dig",
      "label": [
        "蝦的挖洞能力",
        "Shrimp digging ability"
      ],
      "min": 0,
      "max": 100,
      "step": 1,
      "value": 70,
      "unit": "教具格 / toy units"
    },
    {
      "key": "pressure",
      "label": [
        "這場威脅強度",
        "Encounter pressure"
      ],
      "min": 0,
      "max": 100,
      "step": 1,
      "value": 80,
      "unit": "教具格 / toy units"
    }
  ],
  "mission": [
    "洞還在，觸角斷開後為什麼不同？",
    "Why do results change if the burrow remains but contact breaks?"
  ],
  "options": [
    [
      "蝦少了魚的早期警報",
      "Shrimp loses the goby’s early warning"
    ],
    [
      "蝦洞立刻消失",
      "The shrimp burrow vanishes"
    ]
  ],
  "answer": 0,
  "reason": [
    "斷開只停魚→蝦訊息，共用洞保留。若魚比蝦先察覺，蝦會少了早期警報；魚視野0或1格、沒有威脅時，不會因此更晚。風險與覓食收益依條件而變。",
    "Breaking contact stops only the goby→shrimp message, retaining the shared burrow. It removes earlier warning when the goby detects before the shrimp; vision 0 or 1 unit, or no threat, gives no such delay. Risk and foraging gain depend on the settings."
  ],
  "comparisons": [],
  "ep": "220",
  "episodeTitle": "〈VIP｜EP.220｜動物界的微觀社會學：誰是最佳室友與超級奶爸？〉",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277?i=1000761396057",
    "episodeId": "1000761396057",
    "duration": "約16分鐘",
    "durationEn": "About 16 minutes",
    "subscribersOnly": true,
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource211/v4/e5/78/32/e578329e-4f02-ff7c-7683-6f1308df941d/e9c7c762-3994-4dfc-82bc-9d4051883e4b.png/1200x1200ECA.PESS01-60.jpg?imgShow=Podcasts211/v4/41/3f/f0/413ff073-a7c5-b6a0-8286-3f3dbf061111/mza_1220969070254895353.jpeg",
    "coverAvailable": true,
    "verifiedOn": "2026-10-07",
    "coverStatus": "Official Apple episode og:image retrieved, JPEG inspected, author/copy byte-identical; exact duration seconds unconfirmed."
  },
  "source": [
    "https://australian.museum/learn/animals/fishes/what-is-a-shrimpgoby/",
    "澳洲博物館：蝦虎魚與觸角警報",
    "Australian Museum: shrimpgoby warning contact"
  ],
  "extraSources": [
    [
      "https://doi.org/10.1111/jzo.12673",
      "Burns等2019：警戒與活動觀察摘要",
      "Burns et al.2019: vigilance/activity abstract"
    ]
  ],
  "limit": [
    "指定蝦虎魚與Alpheus槍蝦合作的機制教具，不說所有種類都共居；原研究Ctenogobiops feroculus／Alpheus djeddensis觀察摘要支持警戒與活動相關，不作因果或數值校準。10拍非真秒，距離格、掩蔽格、分數皆自訂，無捕食機率、死亡或真能量求解。蝦兩拍建立洞；各自生活魚仍有15/100假想其他掩蔽，不會挖蝦洞。合作共享洞不表示魚挖洞。觸角只是單向魚→蝦警報；不模擬化學訊息、個性、學習或真正配對生態。斷開仍共享洞，不能把其結果歸為沒有洞。改條件從0拍重看，語言／模式保留。 顯示分數已圓整；非零小量標<0.01，微負結餘另標負值，不能當精確0。極小浮點誤差在1e−12以下顯0，無改原帳本計算。",
    "Mechanism toy for specific shrimp-associated gobies and Alpheus, not all gobies or shrimps. The Ctenogobiops feroculus / Alpheus djeddensis observational abstract supports correlations in vigilance/activity, not causality or score calibration. Ten beats are not seconds; distance, cover and all scores are invented. No capture probability, death or real-energy solution. Shrimp builds over two beats; an apart goby has assumed 15/100 other cover, without excavating a shrimp burrow. Shared cover is not goby digging. Contact carries a one-way goby→shrimp warning; chemical cues, personalities, learning and real pairing ecology omitted. Broken contact retains shared cover. Condition changes restart beat 0; language/view keep progress. Scores are rounded; nonzero small amounts use <0.01, and tiny negative net scores are identified as negative. Floating-point noise below 1e−12 displays 0; raw ledgers are unchanged."
  ],
  "formulaText": [
    "0拍準備；1、2拍蝦各付挖洞格/50分，洞品質q=(挖洞格/100)min(1,拍/2)。魚各自掩蔽0.15，合作0.15+0.85q；蝦掩蔽q。3–7拍威脅距離8、6、4、2、1格，其他拍無威脅；威脅格0不出現掠食者。魚距離≤視野格察覺並持續找掩蔽，蝦收到接通警報或距離≤1才察覺；威脅離開後恢復。每威脅拍基本風險B=(威脅格/100)(9−距離)/2，未察覺為B，找掩蔽為B(1−掩蔽)，可能仍>0。1–9拍魚未躲時各自收益2分、合作收益1分且看守成本0.5分；蝦未挖洞／未躲時收益2分。10拍只呈總帳，不新加收益。結餘=各方累計收益−工作成本−風險分，允許負，不是存活率；早退縮少覓食已反映在收益，不另扣重複食物成本。",
    "Beat 0 ready; shrimp pays digging/50 pt on beats 1 and 2. q=(digging/100)min(1,beat/2); goby cover .15 apart or .15+.85q shared; shrimp cover q. Threat distances on beats 3–7 are 8,6,4,2,1 units; other beats peaceful. Pressure 0 gives no predator. Goby detects within vision; shrimp via connected warning or its own 1-unit vision. Cover-seeking persists until threat leaves. Base risk per threat beat B=(pressure/100)(9−distance)/2; undetected risk B; cover-seeking B(1−cover), possibly >0. On beats 1–9, an outside goby gains 2 pt apart or 1 pt shared with .5 pt vigilance cost; shrimp gains 2 pt unless digging or seeking cover. Beat 10 shows totals without adding gains. Net=gain−work−risk, may be negative; not survival. Reduced foraging is already in gain, not deducted again."
  ],
  "formula": "0拍準備；1、2拍蝦各付挖洞格/50分，洞品質q=(挖洞格/100)min(1,拍/2)。魚各自掩蔽0.15，合作0.15+0.85q；蝦掩蔽q。3–7拍威脅距離8、6、4、2、1格，其他拍無威脅；威脅格0不出現掠食者。魚距離≤視野格察覺並持續找掩蔽，蝦收到接通警報或距離≤1才察覺；威脅離開後恢復。每威脅拍基本風險B=(威脅格/100)(9−距離)/2，未察覺為B，找掩蔽為B(1−掩蔽)，可能仍>0。1–9拍魚未躲時各自收益2分、合作收益1分且看守成本0.5分；蝦未挖洞／未躲時收益2分。10拍只呈總帳，不新加收益。結餘=各方累計收益−工作成本−風險分，允許負，不是存活率；早退縮少覓食已反映在收益，不另扣重複食物成本。\nBeat0 ready; shrimp pays digging/50 pt on beats1 and2. q=(digging/100)min(1,beat/2); goby cover .15 apart or .15+.85q shared; shrimp cover q. Threat distances on beats3–7 are8,6,4,2,1 units; other beats peaceful. Pressure0 gives no predator. Goby detects within vision; shrimp via connected warning or its own1-unit vision. Cover-seeking persists until threat leaves. Base risk per threat beat B=(pressure/100)(9−distance)/2; undetected risk B; cover-seeking B(1−cover), possibly>0. On beats1–9, an outside goby gains2 pt apart or1 pt shared with .5 pt vigilance cost; shrimp gains2 pt unless digging or seeking cover. Beat10 shows totals without adding gains. Net=gain−work−risk, may be negative; not survival. Reduced foraging is already in gain, not deducted again.",
  "description": [
    "切換各自生活、合作與觸角訊息，改視野、挖洞、威脅，觀察魚蝦狀態與各自收益成本及示例風險；繁中英文教具。",
    "Switch apart/shared living and antenna contact; change vision, digging and pressure to inspect separate role states, gains, costs and toy risk scores; bilingual teaching model."
  ],
  "keywords": "蝦虎魚,槍蝦,互利共生,觸角,警報,挖洞,警戒,成本,收益,風險,goby,pistol shrimp,Alpheus,mutualism,antenna,warning,burrow,vigilance,cost,benefit,risk",
  "date": "2026-10-04",
  "icon": "🦐",
  "dateModified": "2026-10-11"
};
