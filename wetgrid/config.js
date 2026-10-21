window.CONFIG={
  "id": "H10",
  "path": "wetgrid",
  "status": "complete",
  "controller": "wetgrid.js",
  "extras": [
    "wetgrid-model.js",
    "wetgrid.css",
    "wetgrid.js"
  ],
  "title": [
    "河麂的濕地拼圖",
    "Water deer wetland puzzle"
  ],
  "question": [
    "同樣18格濕地，放在哪裡也有差嗎？",
    "Does the arrangement of 18 wetland tiles matter?"
  ],
  "hint": [
    "先按分散，再補一格；看食物是否連得上。",
    "Try scattered tiles, then add a tile. Can the deer reach food?"
  ],
  "defaults": {},
  "controls": [],
  "mission": [
    "同樣多的濕地，就一定能走到同樣多的食物嗎？",
    "Does equal wetland area guarantee equal access to food?"
  ],
  "options": [
    [
      "不一定，配置、道路與遮蔽也有差",
      "No; layout, roads and cover can matter"
    ],
    [
      "一定，只要總格數一樣",
      "Yes, as long as the tile count matches"
    ]
  ],
  "answer": 0,
  "reason": [
    "面積相同，分開的區塊也可能走不到。這裡只能沿相鄰濕地格移動，封路會切斷邊；這些是教具規則，不是真實族群預報。",
    "Equal area can still form disconnected patches. This toy permits movement only between adjacent wetland tiles, with closed roads blocking edges. These rules are not population forecasts."
  ],
  "comparisons": [],
  "ep": "270",
  "episodeTitle": "沼澤中的隱形劍客：帶你尋找台灣曾經的「吸血鬼鹿」——獐",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://bds.org.uk/information-advice/about-deer/deer-species/chinese-water-deer/",
    "BDS：獐的辨識與棲地",
    "BDS: water deer identification and habitat"
  ],
  "extraSources": [
    [
      "https://bds.org.uk/information-advice/about-deer/deer-species/muntjac-deer/",
      "BDS：山羌的辨識",
      "BDS: Reeves’ muntjac identification"
    ],
    [
      "https://pubmed.ncbi.nlm.nih.gov/36803729/",
      "鹽城濕地獐的季節性棲地選擇（摘要）",
      "Seasonal habitat selection in Yancheng water deer (abstract)"
    ]
  ],
  "description": [
    "擺放濕地、道路通道與遮蔽物，用相同18格比較連通性、可達食物與最短格數；保存一張圖對照修改，明示道路與擾動規則。",
    "Place wetlands, road crossings and cover. Compare equal18-tile layouts by connectivity, reachable food and shortest steps; save a map for comparison with explicit road and disturbance rules."
  ],
  "keywords": "河麂,獐,濕地,棲地破碎化,生態廊道,連通性,山羌,water deer,Hydropotes inermis,wetland,habitat fragmentation,connectivity,shortest path,habitat cover",
  "date": "2026-10-04",
  "icon": "🌾",
  "limit": [
    "本頁的河麂又稱獐，Hydropotes inermis，沒有鹿角；與山羌Muntiacus reevesi不同，公山羌有小角。本圖不是台灣歷史分布證據或真實地圖。6×5格每格1個自訂面積單位，沒有公頃、個體數、存活率或保育分數。格子代表選入教具的濕地棲地，不是每格都泡在深水裡；限制只走濕地不代表真獐不能穿過乾地。固定起點A5與三處食物F1/F3/F5，不估食物熱量與承載量。只許上下左右相鄰格、不斜走；BFS求最少移動次數，多條同長路只畫其中一條。道路放在格右邊的邊界線，不占面積、不移除濕地；線寬純示意。紅封路不通，黃色指定通道可通；沒有車速、碰撞率、工程設計或真實通道安全保證。擾動開啟時，緊鄰任一道路／通道線且無遮蔽的濕地格排除；加遮蔽只移除這個假設，不能穿越紅封路，也不代表真植被消除噪音或風險。乾格不能加遮蔽，移除濕地同步清除遮蔽；路線仍保留。F欄外側沒有本地圖相鄰格，不能加右邊道路。相連可達含起點；起點若不合規則，顯示0與無路。兩個示範都18格，載入會清除道路遮蔽、關擾動；儲存A保留獨立副本，B是目前圖，換語言／模式不改圖。連通塊數按可進入格與道路計算，不等於自然棲地族群數。參考只支持生物背景，規則全自訂未由追蹤資料校準。EP270官方metadata待確認。",
    "Water deer (Hydropotes inermis) lack antlers and differ from Reeves’ muntjac (Muntiacus reevesi), whose males have small antlers. This is not a real map or evidence of historic Taiwan distribution. The6×5 board assigns one chosen area unit per tile, not hectares, abundance, survival or a conservation score. Wetland habitat does not mean deep water. Restricting movement to wet tiles is a toy rule, not a claim that deer cannot cross dry ground. StartA5 and foodF1/F3/F5 are fixed; no food energy or carrying capacity. Four-neighbor movement only; BFS gives fewest steps, drawing one of possibly many equal paths. Roads occupy right-edge lines, not tile area; line width is illustrative. Red blocks crossing; designated yellow passages allow it, without traffic, collision or engineering/safety predictions. With disturbance on, wet tiles next to either road type are excluded unless covered. Cover removes only this chosen exclusion, cannot pass a red barrier and does not imply vegetation eliminates noise or risk. Dry tiles cannot gain cover; removing wetland clears cover but keeps road lines. ColumnF has no right-hand neighbor in this board. Reachability includes the start, or is zero when the start is ineligible. Both presets have18 wet tiles and clear roads/cover/disturbance when loaded. SavedA is an independent copy, B is current, and language/mode preserve both. Connected components are not animal populations. Sources support background only; rules are uncalibrated. Official EP270 metadata awaits verification."
  ],
  "formula": "eligible=wet AND NOT(disturbance AND adjacentRoad AND NOT cover); edge=orthogonal neighbors AND both eligible AND road!=closed; components by flood-fill; BFS from24 to foods5/17/29. Each grid edge=1 step, no physical length.",
  "formulaText": [
    "可進入＝濕地，且不屬於「開擾動＋路邊＋沒遮蔽」。\n上下左右兩格都可進入，且邊界不是紅封路，才連邊。\n黃色通道可跨越，但不自動替兩側補濕地／遮蔽。\n從A5做廣度優先搜尋；每跨一條邊＝1步，不是公尺。\n可達格含A5；可達食物只數F1/F3/F5中能到的點。\n全部可進入格分成相連區塊，起點之外的孤島另算。\n保存A是副本；切語言與模式不重設任何圖。",
    "Eligible=wet AND NOT(disturbance AND next to road AND uncovered).\nJoin orthogonal eligible neighbors unless their edge is a red road.\nYellow passage opens its edge; it does not add wetlands or cover.\nBreadth-first search fromA5; each crossed edge=1 step, not meters.\nReachable tiles includeA5; count reachable food atF1/F3/F5 only.\nComponents partition all eligible tiles, including islands away from the start.\nSavedA is a copy; language and mode do not reset maps."
  ],
  "dateModified": "2026-10-13"
};
