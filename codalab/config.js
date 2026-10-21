window.CONFIG={
  "id": "B10",
  "path": "codalab",
  "status": "complete",
  "title": [
    "抹香鯨節奏：五段間隔",
    "Sperm whale rhythm: five gaps"
  ],
  "question": [
    "兩段節奏很像，就知道牠們說什麼嗎？",
    "Do matching rhythms tell us what whales mean?"
  ],
  "hint": [
    "先拉長一段間隔，再改整段速度；切換是否只比相對節奏。",
    "Lengthen one gap, then change whole-sequence speed. Toggle relative rhythm."
  ],
  "controls": [
    {
      "key": "gap1",
      "label": [
        "第1段點擊間隔",
        "Click gap 1"
      ],
      "min": 50,
      "max": 700,
      "step": 50,
      "value": 200,
      "unit": "ms",
      "options": null
    },
    {
      "key": "gap2",
      "label": [
        "第2段點擊間隔",
        "Click gap 2"
      ],
      "min": 50,
      "max": 700,
      "step": 50,
      "value": 200,
      "unit": "ms",
      "options": null
    },
    {
      "key": "gap3",
      "label": [
        "第3段點擊間隔",
        "Click gap 3"
      ],
      "min": 50,
      "max": 700,
      "step": 50,
      "value": 200,
      "unit": "ms",
      "options": null
    },
    {
      "key": "gap4",
      "label": [
        "第4段點擊間隔",
        "Click gap 4"
      ],
      "min": 50,
      "max": 700,
      "step": 50,
      "value": 500,
      "unit": "ms",
      "options": null
    },
    {
      "key": "gap5",
      "label": [
        "第5段點擊間隔",
        "Click gap 5"
      ],
      "min": 50,
      "max": 700,
      "step": 50,
      "value": 200,
      "unit": "ms",
      "options": null
    },
    {
      "key": "tempo",
      "label": [
        "整段播放速率",
        "Whole-sequence speed"
      ],
      "min": 50,
      "max": 200,
      "step": 25,
      "value": 100,
      "unit": "%",
      "options": null
    },
    {
      "key": "norm",
      "label": [
        "比較方式",
        "Comparison"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "保留時間",
          "Keep timing"
        ],
        [
          "只比相對節奏",
          "Relative rhythm"
        ]
      ]
    }
  ],
  "action": [
    "觀察點擊",
    "Watch clicks"
  ],
  "audio": true,
  "mission": [
    "節奏分類成功，就代表翻譯成功嗎？",
    "Does rhythm classification mean translation?"
  ],
  "options": [
    [
      "只能找到結構上的相似",
      "It finds structural similarity"
    ],
    [
      "可以直接翻成句子",
      "It directly translates a sentence"
    ]
  ],
  "answer": 0,
  "reason": [
    "間隔和速度可以比較，但相同相對節奏可能有不同的速度，模式分析也不提供意思。所有例子為本站合成資料。",
    "Intervals and speed can be compared, but the same relative rhythm may have different timing. Pattern analysis gives no meaning. All examples are synthetic."
  ],
  "comparisons": [
    {
      "label": [
        "原速／兩倍速，相對節奏",
        "Original / double speed, relative"
      ],
      "key": "tempo",
      "a": 100,
      "b": 200,
      "base": {
        "norm": 1
      }
    },
    {
      "label": [
        "原速／兩倍速，保留時間",
        "Original / double speed, timing"
      ],
      "key": "tempo",
      "a": 100,
      "b": 200,
      "base": {
        "norm": 0
      }
    },
    {
      "label": [
        "規律／異常第2段",
        "Regular / unusual gap 2"
      ],
      "key": "gap2",
      "a": 200,
      "b": 700
    }
  ],
  "limit": [
    "五段間隔形成六次點擊；所有節奏與聲音為合成，不是真實抹香鯨錄音或論文資料。四個模板A=[200,200,200,200,200]、B=[200,200,200,500,200]、C=[100,100,400,100,100]、D=[400,400,400,400,400] ms。速率倍數將使用者整段間隔等比例縮短；相對模式用各自總時長正規化。動態時間規整以間隔向量、索引差≤1、絕對差累加，再除對齊配對數；以原始整數間隔／速率通分計算成本，避免等比例變速的浮點差改變路徑；同分優先對角，再垂直，再水平。分數=100exp(−距離/尺度)，尺度為保留時間200 ms或相對值0.05，自訂相似度而非機率、研究分類準確率或語意。僅展示到四個模板的最近鄰群；正規化後A與D完全同型，明示並列。不是Project CETI方法重現，不做訊息翻譯。動畫將整段壓為2秒；選擇試聽時按真正的示例間隔生成小音量短音。",
    "Five intervals form six clicks. All patterns and sounds are synthetic, not whale recordings or paper data. Four templates in ms: A=[200,200,200,200,200], B=[200,200,200,500,200], C=[100,100,400,100,100], D=[400,400,400,400,400]. Speed scales all user intervals inversely. Relative mode normalizes each vector by its own total duration. Dynamic time warping sums absolute interval differences with index difference ≤1, then divides by alignment-pair count; costs use common-denominator integer raw gaps/speed, preventing tempo-roundoff from changing alignment; ties prefer diagonal, then vertical, then horizontal. Score=100exp(−distance/scale), using designed scale 200 ms or relative 0.05. This is similarity, not probability, research accuracy or meaning. Only nearest-neighbour groups against four templates are shown; A and D become identical under normalization and ties are explicit. This does not reproduce Project CETI or translate messages. Visual playback compresses the sequence to 2 seconds; optional quiet synthesized clicks use the actual illustrative intervals."
  ],
  "formula": "Raw gaps g_i: 50–700 ms in steps of 50; speed P: 50–200% in steps of 25\nActual gap δ_i = g_i*100/P; five gaps form six clicks\nClick times = [0,δ_1,δ_1+δ_2,...,sum(δ_i)]\nRelative user vector = g_i/sum(g_i), independent of P\nEach template also divides by its own total duration\nTiming integer cost = |g_i*100 − templateGap_j*P|; denominator P\nRelative integer cost = |g_i*templateTotal − templateGap_j*rawTotal|\nRelative denominator = rawTotal*templateTotal\nAllowed |i−j|≤1; add absolute costs and choose minimum-total path\nTies prefer diagonal, then vertical, then horizontal; integer alignment avoids tempo roundoff\nDistance = minimum integer total cost / denominator / alignment-pair count\nScore = 100exp(−distance/scale); scale is 200 ms for timing or 0.05 for relative\nA/D relative vectors both [0.2,0.2,0.2,0.2,0.2]; ties give no meaning\nSwitching analysis retains click progress and the existing synthetic cue\nThe 2 s animation covers the whole illustrative sequence; cue uses actual gaps and is not synced\nDesigned similarity, not probability, research accuracy or meaning",
  "source": [
    "https://www.nature.com/articles/s41467-024-47221-8",
    "Sharma et al. (2024) · Structure in sperm whale codas"
  ],
  "ep": "204",
  "episodeTitle": "〈EP.204｜深海巨獸的溫柔秘密：聽懂抹香鯨的悄悄話〉",
  "date": "2026-10-06",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/ep-204-%E6%B7%B1%E6%B5%B7%E5%B7%A8%E7%8D%B8%E7%9A%84%E6%BA%AB%E6%9F%94%E7%A7%98%E5%AF%86-%E8%81%BD%E6%87%82%E6%8A%B9%E9%A6%99%E9%AF%A8%E7%9A%84%E6%82%84%E6%82%84%E8%A9%B1/id1812447277?i=1000712607572&uo=4",
    "episodeId": "1000712607572",
    "source": "https://open.firstory.fm/story/cmdpx4cut00cy01xlbql4h3t6",
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/m9wsx2C3PwgIiXfY7KYUq.jpg",
    "duration": "13 分 22 秒",
    "durationEn": "13 min 22 sec",
    "durationIso": "PT13M22S",
    "subscribersOnly": false,
    "verifiedOn": "2026-10-06"
  },
  "icon": "🎵",
  "keywords": "抹香鯨,節奏,點擊間隔,正規化,動態時間規整,sperm whale,coda,rhythm,inter-click intervals,normalization,DTW,科學好好聽,science for kids",
  "description": [
    "組合五段間隔、比較合成節奏與變速，找出相似模式；不翻譯鯨魚語意。",
    "Build five gaps, compare synthetic rhythms and change tempo. Find similarity without translating whale meaning."
  ],
  "defaults": {
    "gap1": 200,
    "gap2": 200,
    "gap3": 200,
    "gap4": 500,
    "gap5": 200,
    "tempo": 100,
    "norm": 1
  },
  "formulaZh": "原始間隔gᵢ是50–700ms、步幅50的整數；速度P是50–200%、步幅25\n實際間隔＝原始gᵢ×100/P；五間隔形成六點\n以δᵢ表示實際間隔；點擊時刻＝[0,δ₁,δ₁+δ₂,…,Σδᵢ]\n相對向量＝原始gᵢ/Σ原始間隔，與P無關\n模板也各除以自己的總間隔\n時間模式整數成本＝|原始gᵢ×100−模板gⱼ×P|，公分母P\n相對模式成本＝|原始gᵢ×模板總長−模板gⱼ×原始總長|\n相對公分母＝原始總長×模板總長\n只允許|i−j|≤1；累加絕對差，找最低總成本路徑\n同分依序優先對角／垂直／水平；整數成本不受速度浮點誤差影響\n距離＝最低整數總成本/公分母/配對數\n分數＝100exp(−距離/尺度)，時間尺度200ms、相對尺度0.05\nA／D相對向量皆[0.2,0.2,0.2,0.2,0.2]，可並列\n改比較方式只改分析，保留點擊進度與合成音\n2秒動畫看完整示例ms；可選合成音依真間隔，兩者不同步\n自訂相似度，不是機率、研究分類準確率或語意翻譯",
  "dateModified": "2026-10-09"
};
