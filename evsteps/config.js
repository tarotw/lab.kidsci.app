window.CONFIG={
  "id": "L08",
  "path": "evsteps",
  "status": "complete",
  "topic": "digital",
  "icon": "🔎",
  "date": "2026-10-08",
  "title": [
    "科學新聞的證據階梯",
    "Evidence steps for science news"
  ],
  "question": [
    "沒有找到證據，和找到反例，是同一件事嗎？",
    "Is missing evidence the same as a counterexample?"
  ],
  "defaults": {
    "case": 0,
    "claims": [
      2,
      0,
      0,
      0
    ],
    "cards": [
      [
        false,
        false,
        false
      ],
      [
        false,
        false,
        false
      ],
      [
        false,
        false,
        false
      ],
      [
        false,
        false,
        false
      ]
    ],
    "focus": [
      0,
      0,
      0,
      0
    ],
    "design": "observe",
    "effect": 0,
    "light": 4
  },
  "extras": [
    "evsteps-cases.js",
    "evsteps-model.js",
    "evsteps.css",
    "evsteps.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "description": [
    "把原始研究與合成教具的證據卡連到不同主張，練習區分量測、模型、相關、因果、缺證與反例；調光照配對與生成參數觀察混雜。",
    "Connect source-backed evidence cards to scoped claims; distinguish measurements, models, association, causation, gaps and counterexamples, and explore confounding with a disclosed synthetic generator."
  ],
  "keywords": "科學新聞,證據,因果,相關,混雜,模型,反例,食人魚,獵豹,科學好好聽,science news, evidence, causation, correlation, confounding, models, counterexample, piranha, cheetah",
  "sources": [
    [
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC3526859/",
      "Grubich等2012：活魚量測與化石重建",
      "Grubich et al2012: live bites and fossil reconstruction"
    ],
    [
      "https://www.nature.com/articles/nature12295",
      "Wilson等2013：獵豹追蹤（摘要）",
      "Wilson et al2013: cheetah tracking (abstract)"
    ],
    [
      "https://www.itl.nist.gov/div898/handbook/ppc/section1/ppc136.htm",
      "NIST：相關、因果與實驗設計",
      "NIST: association, causation and experimental design"
    ],
    [
      "https://open.firstory.fm/story/cmlkbdman0ed901t94lac1gt9",
      "本集官方資料（非模型數值來源）",
      "Official episode metadata (not model parameters)"
    ]
  ],
  "podcast": {
    "ep": "s31",
    "title": "〈SP.31｜AI科普專輯｜數位防禦術：如何不被 AI 牽著鼻子走？〉",
    "url": "https://open.firstory.fm/story/cmlkbdman0ed901t94lac1gt9",
    "verified": true,
    "urlVerified": true,
    "provider": "Firstory",
    "firstory": "https://open.firstory.fm/story/cmlkbdman0ed901t94lac1gt9",
    "durationSeconds": 961,
    "durationIso": "PT16M1S",
    "durationLabel": [
      "16 分 01 秒",
      "16 min 01 sec"
    ],
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/KeyiWOza2uQwqeXGyo_y8.jpg",
    "coverFile": "podcast/epSP.31.jpg",
    "coverAvailable": true,
    "artworkVisualChecked": true,
    "metadataChecked": "2026-10-08",
    "publishedAt": "Thu, 12 Feb 2026 21:18:15 GMT",
    "evidenceBasis": "Plan s31 normalizes to official SP.31; exact title, current saved publisher RSS, full public Firstory page and matching official artwork pixels. No Apple identity/access or audio inference."
  },
  "mission": [
    "還沒有鋼板穿透試驗，能寫「已證明絕對咬不穿」嗎？",
    "Without a steel penetration test, can we write “proven impossible”?"
  ],
  "options": [
    [
      "不能，先限定已知範圍，再找對應證據",
      "No: bound what is known and seek matching evidence"
    ],
    [
      "能，只要還沒看到證據就是假的",
      "Yes: anything without evidence is false"
    ]
  ],
  "answer": 0,
  "reason": [
    "缺少適用證據、出現直接反例、與不適用範圍，必須分開說。證據類型不是真假分數；有限案例提示不能替代專家閱讀。",
    "Distinguish a relevant evidence gap, a direct counterexample and a scope mismatch. Evidence types are not truth scores; finite lesson prompts cannot replace expert review."
  ],
  "formula": [
    "本頁是已核對的有限案例庫；每案例3種主張、3張證據卡，連線提示明列，不是通用新聞偵測器。\n卡片連到「主張」時，按該句的資料類型、適用範圍或反例說明；不累加分數／可信度／真假機率。\n沒有選卡只表示尚未連結，不表示沒有任何科學證據。缺證不等於證偽；反例須針對主張中的全稱或方法描述。\n植物為作者合成20卡，每組10；observe的亮數A8/B2、matched的亮數A5/B5。點=10+effect×A+light×亮。\n平均差observe=effect+0.6×light；matched=effect。effect0時observe仍可因light不平衡有差。\n配對是確定性教具重生成，不聲稱隨機抽樣或實物因果試驗；全數無噪音／未列混雜，方程已知因果只在模型內。\n來源與修訂日隨案例／證據顯示；真實案例資料不會因植物滑桿改寫。",
    "A finite reviewed lesson library: 3 claims and 3 evidence cards per case, with explicit link prompts; not a general news detector.\nLinks explain evidence type, scope or counterexample for the selected sentence; no additive score, confidence or truth probability.\nNo selected card means no link yet, not no scientific evidence anywhere. Gaps are not falsification; a counterexample must address the claim’s universal scope or stated method.\nSynthetic plant lesson: 20 cards, 10 per group. Bright counts: A 8/B 2 in observe, A 5/B 5 in matched. Points = 10 + effect × A + light × bright.\nMean difference: observe = effect + 0.6 × light; matched = effect. At effect 0, uneven light can still cause an observed difference.\nMatching is deterministic regeneration, not random sampling or a physical causal experiment. No noise or unlisted confounders; specified causes apply only inside the generator.\nEach case/card shows source and review date. Plant sliders never rewrite real-study records."
  ],
  "limit": [
    "四案例與推理連線都是人工核對的教學範圍，不自動判定新聞真偽或替代專家；不存在權威分數、階梯越高越真或缺證即假。活魚、複製牙、化石模型與野外觀察須分清。獵豹只核對公開摘要，未見全文不等於設計不存在。植物生成點不是實物資料、公分、肥料效果或信賴區間；配對重新生成而非隨機試驗。",
    "Four curated cases and manual link explanations, not automated truth judgments or expert replacement. No authority score, ranked truth ladder or “missing evidence means false”. Distinguish live fish, replica tests, fossil models and field observations. Cheetah review covers only the public abstract; unseen full text is not nonexistent design. Generated plant points are not physical data, centimeters, fertilizer efficacy or confidence intervals; matched layouts regenerate deterministically, not as a randomized trial."
  ],
  "episodeTitle": "〈SP.31｜AI科普專輯｜數位防禦術：如何不被 AI 牽著鼻子走？〉"
};
