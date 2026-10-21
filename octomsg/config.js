window.CONFIG={
  "id": "X04",
  "path": "octomsg",
  "status": "complete",
  "controller": "octomsg.js",
  "extras": [
    "octomsg-model.js",
    "octomsg.css",
    "octomsg.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "title": [
    "章魚的分散控制中心",
    "Octopus control team"
  ],
  "question": [
    "每次都問中央，還是讓腕就地處理？",
    "Ask the centre every time, or respond in the arm?"
  ],
  "hint": [
    "按開始，觀察金色腕與中央訊息佇列。",
    "Press Start and watch the gold arm and its message queue."
  ],
  "defaults": {
    "local": true,
    "capacity": 2,
    "obstacles": 4,
    "active": 8,
    "wall": false
  },
  "controls": [],
  "mission": [
    "腕能就地回應，就代表有八個獨立的人類大腦嗎？",
    "Does local response mean eight separate human-like brains?"
  ],
  "options": [
    [
      "不是，中央與腕內神經會協同控制",
      "No: central and arm circuits work together"
    ],
    [
      "是，每隻腕都有獨立的人格",
      "Yes: each arm has a separate personality"
    ]
  ],
  "answer": 0,
  "reason": [
    "本頁把控制分工畫成訊息遊戲；真實神經控制更複雜。少傳幾封訊息不是智力測量。",
    "This message game illustrates a division of control. Real neural control is more complex; fewer messages are not an intelligence score."
  ],
  "comparisons": [],
  "ep": "174",
  "episodeTitle": "海洋異形：擁有外星智慧的章魚與管水母（下集）",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://d-nb.info/1184013209/34",
    "Zullo等2019：章魚腕內運動控制通路",
    "Zullo et al. 2019: arm motor-control pathways"
  ],
  "extraSources": [
    [
      "https://cris.huji.ac.il/en/publications/use-of-peripheral-sensory-information-for-central-nervous-control/",
      "Gutnick等2020：中央利用腕的感覺資訊",
      "Gutnick et al. 2020: central use of arm sensory information"
    ]
  ],
  "description": [
    "八腕格網教具以相同搜尋路徑比較腕內回應與逐步詢問中央，追蹤每封訊息、中央佇列及障礙碰觸。這是控制分工模型，不是章魚智力或神經速度測量。",
    "An eight-arm grid toy compares local responses with stepwise central commands on identical search paths. Track message origins, queue capacity and obstacles; this is a control analogy, not an octopus intelligence or neural-speed measurement."
  ],
  "keywords": "章魚,分散控制,腕,神經系統,中央控制,局部回饋,訊息佇列,觸覺,octopus,Octopus vulgaris,distributed control,local feedback,central control,message queue,tactile sensing",
  "date": "2026-10-04",
  "icon": "🐙",
  "limit": [
    "普通章魚Octopus vulgaris研究支持中央指令、腕內通路及感覺資訊的協同；本頁不是神經解剖復原，中央圖形大小、八腕位置、格長、速度和訊息量都是自訂教具。不畫八個人格，不使用神經元比例。八腕各有有限格網走廊，目標是抵達並標記目標，不模擬抓握或把食物送入口。每次向目標較近的未訪格探索，遇障礙先停再換方向；走盡岔路則沿原路退回。原創Canvas線條為留下的安全路徑，不是肌肉、水力骨骼、固定長度或真實腕姿態；未模擬自碰撞、腕間碰撞、吸盤或三維穿越。腕寬6圖單位、石頭半徑10，整條新線段到每個障礙中心至少13圖單位才可前進；已走路徑保留或縮回，所以不能切角穿石。閉牆封住第1腕的有限走廊，回到根部且路徑全查完才標為走廊無路，不推論真正章魚無法繞行。兩種安排用相同起點、環境、搜尋與碰撞規則。腕內安排接中央任務後就地執行；中央安排每次先排入腕→中央的目前位置報告，中央依同一環境與記憶規則決定下一動作，再排入中央→腕命令。這是教具的分工假設，並未移除真實肌肉控制或所有感覺回傳。每腕完成或走盡時都回報；中央不是完全不知道結果。佇列FIFO，每步最多處理0–4封，該步新信最快下步處理。0容量不會派出初始任務；觀察最多400步，未送達不是成功。訊息送出=已處理+排隊，腕內動作另算，非神經脈衝或生物能量。兩模型同時鐘獨立前進；提早完成者保留自己停止時刻。切觀看方案、語言、模式與選腕保留兩邊進度；改環境或容量會明示開始新任務。EP174與延伸EP95metadata待核。",
    "Studies of Octopus vulgaris support cooperation between central commands, arm circuitry and sensory input. This is not a neural reconstruction: body size, arm layout, grid scale, speed and message counts are chosen. There are no eight personalities or neuron-percentage claims. Each arm explores a bounded grid corridor and marks a target on arrival; grasping and food transport are omitted. A goal-biased depth-first search visits unused cells, tests obstacles, and backtracks when needed. Canvas chains trace retained safe paths, not fixed-length muscles, hydrostats or real poses; self-contact, inter-arm contact, suckers and 3D motion are omitted. Arms are 6 drawing units wide and rocks have radius 10; new segments require centre clearance of at least 13 units. Old segments stay fixed or retract, so the chain cannot cut through rocks. A wall closes arm 1’s finite corridor; no-route means this corridor is exhausted, not that a living octopus could not find another route. Both control arrangements share starts, terrain and search/collision rules. Local arms act after a central goal. In the central arrangement each action requires a position report queued to the centre, the same decision rule using the static environment and search memory, then a queued return command. This is a teaching division of work, not removal of real muscle circuitry or all sensory feedback. Both arrangements report completion or exhausted search to the centre. The FIFO queue processes 0–4 messages per step; new messages wait until at least the next step. Zero capacity cannot dispatch goals. The 400-step observation limit is not success. Sent=delivered+queued; local actions are counted separately, not as neural spikes or energy. Two independent runs share a viewing clock; a completed run retains its own finish step. View choice, language, mode and selected arm preserve both runs; environment/capacity changes explicitly start a new task. EP174/95 metadata is unverified."
  ],
  "formula": "FIFO: delivered per tick<=capacity; sent=delivered+queue. New messages delivered after creation tick. Safe segment if distance(segment,rock centre)>=rock radius+arm radius. Identical goal-biased DFS in both control sites.",
  "formulaText": [
    "送出封數＝已處理＋排隊封數。\n每步只處理原有佇列前capacity封；新信最快下一步。\n接任務→探索／碰觸／退回→到達或走廊無路→回報。\n中央方案的每次動作另需位置報告＋回覆命令。\n安全距離：整段線到石心≥10+3圖單位。",
    "Sent = delivered + queued.\nProcess at most capacity messages already queued at step start.\nGoal → search/contact/backtrack → reached or corridor exhausted → report.\nCentral control adds a position report and return command per action.\nWhole-segment clearance ≥10+3 drawing units."
  ],
  "dateModified": "2026-10-08"
};
