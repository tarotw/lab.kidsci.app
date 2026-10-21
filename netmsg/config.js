window.CONFIG={
  "id": "L07",
  "path": "netmsg",
  "status": "complete",
  "topic": "digital",
  "icon": "✉️",
  "date": "2026-10-17",
  "title": [
    "一條訊息如何穿過網路？",
    "How does a message cross a network?"
  ],
  "question": [
    "封包先後到達不同，訊息還能拼回來嗎？",
    "Can packets arriving out of order still form a message?"
  ],
  "defaults": {
    "open": [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true
    ],
    "slow": 0,
    "delay": 0,
    "lag": 0,
    "loss": false
  },
  "extras": [
    "netmsg-model.js",
    "netmsg.css",
    "netmsg.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "description": [
    "把動物訊息分成四塊，操作八條鏈路、延遲與一次丟失，觀察最短路由、序號重組、確認回條和重傳的時間及資源成本。",
    "Split an animal message into four tiles; change eight links, delay or a single loss, and explore shortest routes, sequence reassembly, acknowledgments and retry costs."
  ],
  "keywords": "封包,網路,路由,序號,重傳,確認回條,最短路徑,科學好好聽,packets,network,routing,sequence numbers,retransmission,acknowledgment,shortest path",
  "sources": [
    [
      "https://www.rfc-editor.org/rfc/rfc9293.html",
      "RFC9293：序號、確認與重傳（實際TCP）",
      "RFC9293: sequence numbers, ACKs and retransmission (actual TCP)"
    ],
    [
      "https://xlinux.nist.gov/dads/HTML/shortestpath.html",
      "NIST：最短路徑與邊權重",
      "NIST: shortest paths and edge weights"
    ]
  ],
  "podcast": {
    "ep": "EP102",
    "title": "網路世界大冒險：照片的分身術與超級電腦",
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "mission": [
    "接收端已拼完整，發送端沒收到確認，會怎樣？",
    "The receiver has all tiles, but the sender has no ACK. What can happen?"
  ],
  "options": [
    [
      "發送端仍會等候或重傳；重複塊不重複拼入",
      "The sender may wait or retry; duplicates are not assembled twice"
    ],
    [
      "接收端完成，就會瞬間通知發送端",
      "Reassembly instantly tells the sender"
    ]
  ],
  "answer": 0,
  "reason": [
    "確認回條也要穿過網路。本機教學協議按序號去重；若持續收不到確認，三次嘗試後放棄，但接收端可能已完整。",
    "ACKs also cross the network. This custom protocol deduplicates by tile ID. After three unacknowledged attempts it gives up, even if the receiver is already complete."
  ],
  "formula": [
    "作者協議：四塊內容為「小貓／正在／看著／星星」。序號1–4是塊ID，不是TCP位元組序號。\n無向六節點、八邊，基準耗時1／1.5／1／1.5／1／1.5／2／2秒（自訂）。選邊可加0–4秒。\n每次離開節點，按已知全图的正耗時最短路由選下一跳；即時全圖可知是教具假設。\n初送時間：第一塊0–6秒自訂源端等待，其餘0.4／0.8／1.2秒。不是鏈路容量佇列；各包可平行。初送時間在開始時固定。\n收件按ID存一次、保留第一次到達次序；有缺塊時不能宣稱完整。每次收件（含重複）發該塊專屬ACK，非TCP累積ACK。\n每次嘗試定時器：2×當時源到接收端最短耗時＋3秒；無路為8秒。最多3次嘗試（自訂），不是TCP RTO算法。\n斷邊立即丟棄該邊正在走的資料或ACK；修好不復活。新耗時只用於之後出發的一跳，已出發的一跳和定時器保留。\n一次丟失示範：塊1首次發送的第一跳結束時丟失，已花一跳資源；收不到ACK後才重傳。\n任何嘗試的有效ACK均可確認該ID。ACK同時到達先於逾時計算；全部確認為成功，全部確認或放棄時終止並凍結，可能仍有未完成副本。\n資源以資料／ACK鏈路出發次数記帳，不是字節、能量、金錢或真網路吞吐。重傳另計為第2／3次嘗試，無路嘗試不消耗鏈路跳數。",
    "Custom protocol: four tiles say “The cat / is / watching / the stars”. IDs1–4 label tiles, not TCP byte sequence numbers.\nSix nodes,eight undirected links: custom base times1/1.5/1/1.5/1/1.5/2/2s. Add0–4s to one link.\nAt each departure, choose the next hop of the positive-time shortest path in a globally known graph (teaching assumption).\nInitial releases: tile1 waits0–6s at source; others0.4/0.8/1.2s. Fixed when started, not a capacity-limited link queue; packets can travel in parallel.\nStore each ID once and record first arrival order; missing tiles prevent completeness. Every receipt,including duplicates,sends an individual ID ACK,not a cumulative TCP ACK.\nEach attempt sets a timeout of2×current shortest source-to-receiver time+3s;8s if unreachable. At most3 attempts,custom rather than TCP RTO.\nA broken link destroys in-flight data/ACK; repair does not revive it. Changed delay applies only to future hop departures; current flights and timers stay fixed.\nSingle-loss example: drop tile1 after its first hop on the first attempt; one hop has been spent. Only missing ACK triggers retry.\nAn ACK from any attempt confirms its ID. Simultaneous ACK precedes timeout. All ACKs mean success; once every ID is ACKed or abandoned,freeze and end,even with copies in flight.\nResources count data/ACK hop departures,not bytes,energy,money or measured network throughput. Retries count attempts2/3; no-route attempts spend no hop."
  ],
  "limit": [
    "本機教學協議，未連真網路、未抓使用者封包。鏈路秒數、平行傳輸、源等待、全圖即時路由、三次上限與定時器是作者約定；没有容量佇列、壅塞控制、握手、IP標頭、位元錯誤或安全加密。實際TCP以位元組序號、累積確認與動態RTO運作，不能將本例看成完整TCP/IP。四塊動物訊息是內容分塊，不是IP碎片模型。修好終止實驗需明按重播；不是自動恢復已放棄的連線。",
    "Local custom teaching protocol,not real networking or packet capture. Link times,parallel traffic,source waiting,globally known routes,three-attempt limit and timers are author choices. No capacity queue,congestion control,handshake,IP headers,bit corruption or encryption. Actual TCP has byte sequences,cumulative ACKs and dynamic RTO; this is not full TCP/IP. Animal tiles model application chunks,not IP fragmentation. After termination,repair requires explicit Replay; an abandoned connection does not resume automatically."
  ]
};
