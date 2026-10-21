window.CONFIG={
  "id": "I06",
  "path": "heatpath",
  "status": "complete",
  "topic": "physics",
  "icon": "♨️",
  "title": [
    "熱傳遞三種路徑",
    "Three paths for heat"
  ],
  "question": [
    "拆橋、抽走氣體、隔開輻射，哪條路還能傳熱？",
    "Remove a bridge, gas or radiation coupling: which heat path remains?"
  ],
  "defaults": {
    "initialA": 80,
    "initialB": 20,
    "bridge": 1,
    "air": 1,
    "radiation": 1
  },
  "extras": [
    "heatpath-model.js",
    "heatpath.css",
    "heatpath.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "date": "2026-10-14",
  "description": [
    "直接接拆金屬橋、換循環氣體或真空、隔開輻射交換；看兩個物體的溫度、帶符號熱流與分通道能量帳。",
    "Connect a metal bridge, change circulating gas or vacuum, and isolate radiation exchange. Check two-body temperatures, signed heat rates and a channel-by-channel energy ledger."
  ],
  "keywords": "熱傳導,熱對流,熱輻射,熱容量,能量守恆,真空,熱流,heat conduction,convection,radiation,heat capacity,energy conservation,vacuum,heat transfer",
  "sources": [
    [
      "https://openstax.org/books/university-physics-volume-2/pages/1-6-mechanisms-of-heat-transfer",
      "OpenStax：傳導、對流與輻射",
      "OpenStax: mechanisms of heat transfer"
    ],
    [
      "https://podcasts.apple.com/tw/podcast/%E5%85%AC%E9%96%8B-%E7%86%B1%E8%83%BD%E5%A4%A7%E5%86%92%E9%9A%AA-%E7%86%B1%E8%88%87%E6%BA%AB%E5%BA%A6%E7%9A%84%E7%A5%9E%E7%A5%95%E5%B7%AE%E5%88%A5-ep-88/id1812447277?i=1000778994178",
      "Apple Podcasts：先前連結參考（本輪時長以Firstory公開RSS為準）",
      "Apple Podcasts: prior link reference (current duration follows Firstory public RSS)"
    ],
    [
      "https://feed.firstory.me/rss/user/cmdpx4cs200ax01xldg5ta89p",
      "節目官方公開RSS：單集資料（非模型數據）",
      "Official public podcast RSS: episode metadata (not model data)"
    ]
  ],
  "podcast": {
    "ep": "EP.88",
    "title": "〈熱能大冒險：熱與溫度的神祕差別｜EP.88〉",
    "url": "https://open.firstory.fm/story/cmryokos806oc01yxfley8y1l",
    "verified": true,
    "urlVerified": true,
    "artworkVerified": true,
    "metadataChecked": "2026-10-08",
    "provider": "Firstory",
    "firstory": "https://open.firstory.fm/story/cmryokos806oc01yxfley8y1l",
    "durationSeconds": 640,
    "durationIso": "PT10M40S",
    "durationLabel": [
      "10 分 40 秒",
      "10 min 40 sec"
    ],
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/mgwkMBVA9V5DtKMM3wJFN.jpg",
    "coverFile": "podcast/ep88.jpg",
    "coverAvailable": true,
    "artworkVisualChecked": true,
    "publishedAt": "Wed, 29 Jul 2026 22:02:09 GMT",
    "evidenceBasis": "Current official public RSS plus exact Firstory story title/image; local official artwork pixels inspected. Audio not played, Apple access not tested.",
    "priorAppleReference": {
      "ep": "EP.88",
      "title": "〈公開｜熱能大冒險：熱與溫度的神祕差別｜EP.88〉",
      "url": "https://podcasts.apple.com/tw/podcast/%E5%85%AC%E9%96%8B-%E7%86%B1%E8%83%BD%E5%A4%A7%E5%86%92%E9%9A%AA-%E7%86%B1%E8%88%87%E6%BA%AB%E5%BA%A6%E7%9A%84%E7%A5%9E%E7%A5%95%E5%B7%AE%E5%88%A5-ep-88/id1812447277?i=1000778994178",
      "verified": false,
      "episodeId": "1000778994178",
      "urlVerified": true,
      "artworkVerified": false,
      "metadataChecked": "2026-10-08",
      "durationDisplayMinutes": 11
    }
  },
  "mission": [
    "沒有金屬橋、氣體抽走，輻射交換仍開著；兩物體不同溫，還會傳熱嗎？",
    "No metal bridge or gas, but radiation exchange is open. With unequal temperatures, can heat still transfer?"
  ],
  "options": [
    [
      "會，輻射不需要氣體",
      "Yes; radiation needs no gas"
    ],
    [
      "不會，真空關閉所有熱路",
      "No; vacuum closes every path"
    ]
  ],
  "answer": 0,
  "reason": [
    "真空關閉本頁的氣體搬運通道；輻射是電磁波交換，不需要介質。若金屬橋還在，固體傳導也仍可發生。兩物體同溫則各通道淨熱流為0。",
    "Vacuum disables the modeled gas transport. Radiation is electromagnetic exchange without a medium. A remaining solid bridge can also conduct. At equal temperatures, every net heat rate is zero."
  ],
  "limit": [
    "封閉、絕熱的兩個均溫節點A/B，各固定熱容量200J/°C；僅兩節點之間的三條理想路徑，沒有對外散熱、相變或材料溫度梯度。金屬橋熱導G=.5W/°C、循環氣體有效G=0/.1/.4W/°C均為自訂教學係數，不是材料量測。氣體通道代表外力驅動的密閉循環換熱，忽略氣體儲熱及泵機功加熱；不稱自然對流，不把熱說成自己流動；未另算氣體傳導。真空只使氣體通道G=0，橋仍可導熱。輻射採兩個理想黑體面完全相互耦合，有效面積.02m²，P=σA(TAK⁴−TBK⁴)，σ=5.670374419e−8 W/(m²K⁴)，攝氏先加273.15轉K。隔開按鈕是把兩節點的有效輻射耦合設0的理想開關，不是實際遮板熱模型，不計遮片儲熱、殘餘反射、多重反射或對環境輻射；不能說真實板擋住就使所有輻射消失。能量正號A→B，負號B→A；累計各路Q可保留先前開啟時的值，即使現在關閉。以通道Q為狀態，TA=TA0−ΣQ/C、TB=TB0+ΣQ/C；RK4步長≤1秒，600秒觀察結束不是宣稱已完全平衡。播放60倍速、圖中箭頭僅示淨熱流方向，不示分子軌跡或大小比例；假色依0–100°C固定色尺，不是可見光發光。切路徑保留時間與能量帳，改起始溫度才重開；對照從目前兩溫度重新投影60秒，有橋／無橋兩條固定條件，不是上方歷史帳，兩者氣體／輻射相同。 本集Firstory官方頁與公開RSS的集名、時長、封面已核；實際音訊與Apple收聽權限未測。",
    "Two uniform-temperature nodes A/B form an insulated closed teaching system, each with fixed heat capacity 200 J/°C. Only three ideal inter-node paths are included; external losses, phase changes and internal temperature gradients are omitted. Bridge conductance .5 W/°C and circulating-gas effective conductances 0/.1/.4 W/°C are invented teaching coefficients. Gas transport represents an externally driven closed circulation loop; gas storage and pump-work heating are neglected. This is not a natural-convection model; heat does not move independently of matter. Gas conduction is not separately modeled. Vacuum disables the gas path only; a solid bridge can still conduct. Radiation uses two ideal black surfaces with complete mutual coupling and effective area .02 m²: P=σA(TAK⁴−TBK⁴), σ=5.670374419e−8 W/(m²K⁴). Celsius values are converted to kelvins by adding 273.15. Isolation sets effective radiative coupling between the nodes to zero; it is an ideal switch, not a physical shield model with shield storage, residual or multiple reflections, or environmental exchange. A real screen does not eliminate all radiation. Positive heat transfer is A→B; negative is B→A. Each cumulative channel Q retains past transfers when its present path is off. States are channel energies; TA=TA0−ΣQ/C and TB=TB0+ΣQ/C, integrated by RK4 with steps no longer than 1 s. The 600 s observation end does not claim complete equilibrium. Playback is 60×. Arrows show net heat direction only; fixed 0–100°C false colors are not visible glowing. Path changes preserve time and energy; initial-temperature edits restart. Comparison projects 60 s from the current temperatures under fixed bridge/no-bridge conditions with identical gas and radiation choices, separately from the main history.  Primary Firstory title, duration and artwork are checked against its official page/public RSS; actual audio and Apple access are untested."
  ],
  "formula": [
    "正號A→B；C＝200J/°C\nP橋＝G橋(TA−TB)，G橋＝0或.5W/°C\nP氣體＝G氣體(TA−TB)，G氣體＝0/.1/.4W/°C\nP輻射＝開關×σ×.02×[(TA+273.15)⁴−(TB+273.15)⁴]\n每路Q＝∫P dt；Q總＝Q橋+Q氣體+Q輻射\nTA＝TA0−Q總/C；TB＝TB0+Q總/C\nΔEA＝−Q總，ΔEB＝+Q總；ΔEA+ΔEB＝0\nW＝J/s；K＝°C+273.15；200J改變1°C",
    "Positive: A→B; C=200 J/°C\nBridge P=Gbridge(TA−TB), Gbridge=0 or .5 W/°C\nGas P=Ggas(TA−TB), Ggas=0/.1/.4 W/°C\nRadiation P=switch×σ×.02×[(TA+273.15)⁴−(TB+273.15)⁴]\nEach Q=∫P dt; total Q=bridge Q+gas Q+radiation Q\nTA=TA0−Q/C; TB=TB0+Q/C\nΔEA=−Q; ΔEB=+Q; ΔEA+ΔEB=0\nW=J/s; K=°C+273.15; 200 J changes a node by 1°C"
  ],
  "episodeTitle": "〈熱能大冒險：熱與溫度的神祕差別｜EP.88〉"
};
