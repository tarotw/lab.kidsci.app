window.CONFIG={
  "id": "H06",
  "path": "fishpass",
  "status": "complete",
  "controller": "fishpass.js",
  "extras": [
    "fishpass-model.js",
    "fishpass.css",
    "fishpass.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "title": [
    "櫻花鉤吻鮭的溪流通行證",
    "Salmon stream passes"
  ],
  "question": [
    "換一段設施，鮭魚能到更上游嗎？",
    "Change a crossing: can the salmon reach upstream?"
  ],
  "hint": [
    "先把第3段的攔砂壩換成壩＋魚道，再改水量。",
    "Replace reach 3 with a fishway, then change the flow."
  ],
  "defaults": {
    "flow": 2,
    "start": "A",
    "target": "G",
    "structures": [
      "open",
      "open",
      "dam",
      "open",
      "pipe",
      "open"
    ]
  },
  "controls": [],
  "mission": [
    "有魚道，就一定能通過嗎？",
    "Does a fishway always allow passage?"
  ],
  "options": [
    [
      "不一定，要看水量與適用條件",
      "No; flow and suitable conditions matter"
    ],
    [
      "一定，放上去就能通行",
      "Yes; installing one is enough"
    ]
  ],
  "answer": 0,
  "reason": [
    "本例魚道只在中水量開通。真實魚道還要配合魚種與場址，連通也不代表安全或適合生存。",
    "This toy fishway opens only at medium flow. Real fishways depend on species and site; connectivity does not imply safety or suitable habitat."
  ],
  "comparisons": [],
  "ep": "271",
  "episodeTitle": "穿越冰河的奇蹟：揭開台灣國寶「櫻花鉤吻鮭」的重生秘辛！",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://www.spnp.gov.tw/ch/titlelist/conservation-column/1643",
    "雪霸國家公園：七家灣溪壩體改善工程",
    "Shei-Pa National Park: Qijiawan dam improvement"
  ],
  "extraSources": [
    [
      "https://www.fws.gov/story/what-fish-passage",
      "美國魚類及野生動物署：魚類通行與障礙",
      "USFWS: fish passage and barriers"
    ],
    [
      "https://www.fisheries.noaa.gov/west-coast/endangered-species-conservation/fish-passage-solutions-west-coast-culverts-tidegates-and",
      "NOAA：涵洞的水深、流速與落差",
      "NOAA: culvert depth, velocity and outlet drop"
    ],
    [
      "https://www.tfrin.gov.tw/theme_data.php?id=97&sub_theme=fishery&theme=qa",
      "水產試驗所：陸封型櫻花鉤吻鮭",
      "Taiwan Fisheries Research Institute: landlocked salmon"
    ]
  ],
  "description": [
    "在假想高山溪流網逐段放攔砂壩、魚道與涵洞，調季節水量情境，查看鮭魚可達的溪段與瓶頸；以明示規則認識有向連通。",
    "Place dams, fishways and culverts in a toy mountain-stream network. Change seasonal flow scenarios to find reachable sites and bottlenecks using explicit directed-passage rules."
  ],
  "keywords": "櫻花鉤吻鮭,陸封型,溪流連通,攔砂壩,魚道,涵洞,棲地破碎化,有向圖,Formosan landlocked salmon,stream connectivity,fish passage,fishway,culvert,dam,habitat fragmentation,directed graph",
  "date": "2026-10-04",
  "icon": "🐟",
  "limit": [
    "櫻花鉤吻鮭是陸封型，這個任務只在高山溪流內移動，不要求回海。七點六段是假想溪網，點代表溪段中的位置；沒有真地圖尺度、流量數值或旅行時間。季節水量是四種情境，不是月份預測。通行表全是自訂二元教學規則，不是本魚種實測能力，也不是任何真魚道或涵洞的規格；開放河道在低、中、高皆通只是本例假設，不代表洪水時都能游。斷流時所有連線不通，起點計入只表示還在原處，不保證有水或能活。攔砂壩部分順流方向可通也不代表落下安全。裝魚道表示壩旁增加通路，不表示拆壩；不同魚種未必可用。水量可改通行資格，但沒有求解水深、速度、分流、上游回水或阻壩蓄水。不預測傷亡、繁殖、食物、水溫、泥砂、防洪、工程安全或全部生態成本。青色是從起點可達的位置，不是安全區或棲地面積。全開河道對照保持同起點、目標、水量，並非拆除所有工程的建議。近代攔砂壩造成的阻隔不能當成遠古陸封形成原因。EP271官方單集網址、時長與封面待確認。 斷流提示先改水量，不承諾換設施即可開通。起終點相同明示沒有跨段。未作答提示依目前選段、設施與水量給局部魚道實驗，不把單段通行當全路線可達。",
    "Formosan salmon are landlocked; this task stays within mountain streams and never requires reaching the sea. Seven sites and six reaches form an imaginary network without map scale, discharge values or travel time. Flow levels are seasonal scenarios, not calendar predictions. All binary passage rules are chosen for teaching, not measured abilities of this species or specifications for real fishways or culverts. Open reaches pass at low, medium and high flow only by assumption; floods are not always passable. At zero flow all links close; counting the origin means staying there, not that water or survival is assured. Allowed downstream passage over a dam does not imply safe descent. A fishway adds a route beside a dam; it does not remove the dam or work for all species. The model does not solve depth, speed, branching flow, backwater or storage. Injury, reproduction, food, temperature, sediment, flood control, engineering safety and full ecological costs are omitted. Cyan means reachable sites, not safe habitat or habitat area. The all-open comparison keeps the same origin, target and flow; it is not a recommendation to remove infrastructure. Modern dam fragmentation is not the ancient cause of landlocking. Official EP271 metadata awaits verification. Dry-flow hints change the flow first, without promising that a crossing change opens links. Equal endpoints explicitly mean no reach crossed. Unanswered hints follow the selected reach, crossing and flow for a local fishway test; one open reach does not establish a passable full route."
  ],
  "formula": "For each reach, include downstream/upstream arc only if its chosen flow rule passes. Breadth-first search from origin gives reachable sites, including origin. First closed arc on unique origin-target route is the bottleneck. Flow0 closes every arc.",
  "formulaText": [
    "每段分逆流（往上游）與順流（往下游）兩方向。\n通過＝本例通行表允許該水量和方向。\n從起點沿允許方向擴展，直到沒有新位置。\n可達數包括起點，不是溪流長度或魚的數量。\n每對位置只有一條地理路線；沿起點到目的地找第一條不通方向，就是本路線第一瓶頸。\n全開對照只把六段全改開放河道，水量與起終點不變。",
    "Each reach has upstream and downstream directions.\nAn arc opens only when its direction and flow pass the chosen table.\nSearch from the origin until no new site is found.\nThe count includes the origin; it is not stream length or fish number.\nEach site pair has one geographic route. Its first closed arc is the first bottleneck.\nThe comparison changes all six reaches to open channel, keeping flow, origin and target."
  ],
  "dateModified": "2026-10-12"
};
