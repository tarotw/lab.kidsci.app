window.CONFIG={
  "id": "G04",
  "path": "regrow",
  "status": "complete",
  "controller": "regrow.js",
  "extras": [
    "regrow-model.js",
    "regrow.css",
    "regrow.js"
  ],
  "title": [
    "蠑螈再生的步驟排序",
    "Salamander regeneration: arrange the events"
  ],
  "question": [
    "先放「蓋住傷口」，再看看下一張卡需要誰幫忙。",
    "Place “Cover wound” first; see what the next event needs."
  ],
  "hint": [
    "點一格，再點事件卡；畫面立刻回算到這一格。",
    "Choose a slot, then an event card; inspect that point immediately."
  ],
  "defaults": {
    "immune": true,
    "nerve": true,
    "position": true
  },
  "controls": [],
  "events": [
    {
      "key": "cover",
      "short": [
        "蓋住傷口",
        "Cover wound"
      ],
      "detail": [
        "表皮覆蓋；不等於已長好",
        "Epidermis covers; rebuilding is not complete"
      ]
    },
    {
      "key": "immune",
      "short": [
        "免疫協作",
        "Immune support"
      ],
      "detail": [
        "建立本例早期支持",
        "Set up early support in this example"
      ]
    },
    {
      "key": "cells",
      "short": [
        "細胞聚集",
        "Gather cells"
      ],
      "detail": [
        "不同來源的前驅細胞聚集",
        "Progenitors of different origins gather"
      ]
    },
    {
      "key": "grow",
      "short": [
        "芽體增長",
        "Grow blastema"
      ],
      "detail": [
        "細胞群增長，不是全能化",
        "Grow the cell pool, not universal potency"
      ]
    },
    {
      "key": "map",
      "short": [
        "讀位置圖",
        "Read position"
      ],
      "detail": [
        "利用本例位置資料",
        "Use position information in this example"
      ]
    },
    {
      "key": "tissue",
      "short": [
        "分工重建",
        "Rebuild tissues"
      ],
      "detail": [
        "分工形成組織的示意",
        "A schematic of specialized tissue formation"
      ]
    }
  ],
  "signals": [
    {
      "key": "immune",
      "label": [
        "早期免疫協作",
        "Early immune support"
      ]
    },
    {
      "key": "nerve",
      "label": [
        "神經支持訊息",
        "Nerve support signals"
      ]
    },
    {
      "key": "position",
      "label": [
        "位置資料",
        "Position information"
      ]
    }
  ],
  "mission": [
    "傷口已蓋好，就一定會再生嗎？",
    "Does wound closure guarantee regeneration?"
  ],
  "options": [
    [
      "不一定，還需要多方協作",
      "No; several forms of support are still needed"
    ],
    [
      "一定，只要關上一個傷口",
      "Yes; covering a wound is enough"
    ]
  ],
  "answer": 0,
  "reason": [
    "表皮覆蓋與組織重建不同；早期免疫、神經與位置資料各有作用。這是美西螈概念教具，不是人體治療承諾。",
    "Coverage and tissue rebuilding differ; early immune, nerve and position inputs have distinct roles. This conceptual axolotl tool is not a promise of human treatment."
  ],
  "comparisons": [],
  "ep": "c19",
  "episodeTitle": "水中「不老頑童」的奇幻魔法：美西螈的超強肢體再生與基因解密",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://www.nature.com/articles/s41467-018-07604-0",
    "Leigh等2018：芽體的多種細胞",
    "Leigh et al.2018: diverse blastema cells"
  ],
  "extraSources": [
    [
      "https://pubmed.ncbi.nlm.nih.gov/23690624/",
      "Godwin等2013：早期免疫協作（摘要）",
      "Godwin et al.2013: early immune support (abstract)"
    ],
    [
      "https://publications.mpi-cbg.de/Kragl_2009_1409.pdf",
      "Kragl等2009：細胞來源記憶（作者PDF）",
      "Kragl et al.2009: tissue-origin memory (author PDF)"
    ]
  ],
  "limit": [
    "美西螈局部再生的定性事件卡，非精確生物時鐘、真成功率或人類治療。六格與圖形尺寸是教學編排，不是日數、細胞數或組織比例。真過程可重疊且涉及更多細胞／訊息；本圖只示意選定依賴。傷口覆蓋不保證再生；早期免疫條件與晚期作用不同。三訊息是從起點固定的假想條件，不是單一基因或藥量開關。切訊息／重放舊格會從起點重算目前已讀格，不是中途治療或逆轉已形成的傷害。芽體前驅細胞種類不同且潛能受限，不能把所有細胞說成全能或都帶完整位置資訊。不作動物處置流程；分工重建圖不是功能肢體驗證。切語言／模式保留卡片、目前格與選取。 新開說明或頁面隱藏暫停，恢復頁面不自動續播；換語言／模式恢復原展開面板時保留播放。換介面、收窄畫面或隱藏頁面會取消未放下的卡，已放卡／選取／支持條件保留。依賴圖顯示事件前提，三組固定支持條件另由按鈕與文字呈現。",
    "A qualitative event-card model of local axolotl regeneration, not a biological clock, success rate or human treatment. Six slots and geometry are invented teaching arrangements, not days, cell counts or tissue proportions. Real processes overlap and involve more cells/signals; this graph illustrates selected dependencies. Wound coverage does not ensure regeneration; early immune requirements differ from late roles. Three signals are hypothetical conditions fixed from the start, not single genes or drug doses. Changing a signal or earlier card recomputes the current prefix from the start, not a treatment or reversal of damage. Blastema progenitors have different origins and restricted potentials; not all are pluripotent or carry complete position information. No animal procedures; the rebuilt diagram does not verify a functional limb. Language/view retain cards, read position and selected slot. Opening explanations or hiding the page pauses; becoming visible does not auto-resume. Language/mode restoration of open panels preserves playback. Rebuilding the interface, narrowing it or hiding the page cancels an unfinished drag while keeping placed cards, selection and support conditions. The graph shows event prerequisites; three fixed support conditions appear separately in buttons and text."
  ],
  "formulaText": [
    "自訂質性依賴：蓋傷口與免疫卡無先後要求。聚集需要兩者已成立及神經支持；增長需要聚集及神經；讀位置需要聚集及位置資料；重建需要增長與讀位置均已成立。免疫卡需要早期免疫條件可用。只有依賴／訊息滿足的事件才更新狀態；缺卡、缺條件與重複分開。失敗卡不會在後面自動重試。六格所有卡及訊息始終可操作；改卡或訊息回算同一個已讀前綴。可成功的全排列有四條，並非單一正確時間序列。圖中先後是示意邏輯，不是精確細胞時程。",
    "Invented qualitative graph: cover and immune events have no mutual ordering. Gathering requires both plus nerve support; growth requires gathered cells plus nerves; reading position requires gathered cells plus position data; rebuilding requires both growth and position reading. The immune event needs early immune support. Only events with all dependencies/signals update state; blank, missing conditions and duplicates differ. Failed cards do not retry later. All six slots, event cards and signals stay operable. Changes recompute the same read prefix. Four complete permutations work, not one exact biological timeline. Graph order is a teaching dependency, not precise cellular timing."
  ],
  "description": [
    "自由排放六張再生事件卡，改早期免疫、神經與位置條件，看不同來源細胞的合作與先後依賴；繁中英文的美西螈概念教具。",
    "Arrange six regeneration event cards and vary early immune, nerve and position conditions. Explore cooperation and dependencies in a bilingual conceptual axolotl tool."
  ],
  "keywords": "蠑螈,美西螈,再生,芽體,傷口表皮,前驅細胞,免疫,神經,位置資訊,細胞分工,axolotl,salamander,regeneration,blastema,wound epidermis,progenitor cells,immune support,nerves,positional information,tissue origin",
  "date": "2026-10-04",
  "icon": "🧩",
  "formula": "自訂質性依賴：蓋傷口與免疫卡無先後要求。聚集需要兩者已成立及神經支持；增長需要聚集及神經；讀位置需要聚集及位置資料；重建需要增長與讀位置均已成立。免疫卡需要早期免疫條件可用。只有依賴／訊息滿足的事件才更新狀態；缺卡、缺條件與重複分開。失敗卡不會在後面自動重試。六格所有卡及訊息始終可操作；改卡或訊息回算同一個已讀前綴。可成功的全排列有四條，並非單一正確時間序列。圖中先後是示意邏輯，不是精確細胞時程。\nInvented qualitative graph: cover and immune events have no mutual ordering. Gathering requires both plus nerve support; growth requires gathered cells plus nerves; reading position requires gathered cells plus position data; rebuilding requires both growth and position reading. The immune event needs early immune support. Only events with all dependencies/signals update state; blank, missing conditions and duplicates differ. Failed cards do not retry later. All six slots, event cards and signals stay operable. Changes recompute the same read prefix. Four complete permutations work, not one exact biological timeline. Graph order is a teaching dependency, not precise cellular timing.",
  "dateModified": "2026-10-11"
};
