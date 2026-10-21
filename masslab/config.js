window.CONFIG={
  "id": "K04",
  "path": "masslab",
  "status": "complete",
  "topic": "space",
  "icon": "⚖️",
  "date": "2026-10-14",
  "title": [
    "換顆星球，質量會變嗎？",
    "Does mass change on another world?"
  ],
  "question": [
    "同一個包包，月球上的公斤與牛頓會怎麼變？",
    "Same backpack: what changes in kilograms and newtons on the Moon?"
  ],
  "defaults": {
    "mass": 10,
    "body": "earth",
    "customG": 9.8,
    "capacity": 500,
    "instrument": "force"
  },
  "extras": [
    "masslab-model.js",
    "masslab.css",
    "masslab.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "description": [
    "把相同物體換到九個天體，操作質量與重力，對照牛頓測力計、地球刻度秤與當地校準秤。",
    "Move the same object among nine worlds, change mass and gravity, and compare a newton force meter, Earth-calibrated scale and locally calibrated scale."
  ],
  "keywords": "質量,重量,公斤,牛頓,測力計,重力加速度,月球,科學好好聽,mass,weight,kilogram,newton,force meter,gravity,Moon",
  "sources": [
    [
      "https://nssdc.gsfc.nasa.gov/planetary/factsheet/",
      "NASA行星資料表：示例重力",
      "NASA planetary fact sheet: gravity examples"
    ],
    [
      "https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html",
      "NASA表註：赤道有效重力與1bar參考層",
      "NASA notes: equatorial effective gravity and1bar level"
    ],
    [
      "https://www.grc.nasa.gov/WWW/K-12/Enginesim/weight_and_mass.htm",
      "NASA Glenn：W=mg與質量重量",
      "NASA Glenn: W=mg, mass and weight"
    ],
    [
      "https://feed.firstory.me/rss/user/cmdpx4cs200ax01xldg5ta89p",
      "節目官方公開RSS：單集資料（非模型數據）",
      "Official public podcast RSS: episode metadata (not model data)"
    ]
  ],
  "podcast": {
    "ep": "EP.71",
    "title": "〈公開｜重力特輯(1)｜宇宙級吸吸功大師：揭開「重力」的隱形絲線｜EP.71〉",
    "url": "https://open.firstory.fm/story/cmpv2d7hx0b5v01wr05td8kqn",
    "verified": true,
    "urlVerified": true,
    "provider": "Firstory",
    "firstory": "https://open.firstory.fm/story/cmpv2d7hx0b5v01wr05td8kqn",
    "durationSeconds": 659,
    "durationIso": "PT10M59S",
    "durationLabel": [
      "10 分 59 秒",
      "10 min 59 sec"
    ],
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/-c1Ovp-c_fBDtdXh-f2eT.jpg",
    "coverFile": "podcast/ep71.jpg",
    "coverAvailable": true,
    "artworkVerified": true,
    "artworkVisualChecked": true,
    "metadataChecked": "2026-10-14",
    "publishedAt": "Mon, 01 Jun 2026 22:02:08 GMT",
    "evidenceBasis": "2026-10-14 current official RSS and actual Firstory title, displayed 00:10:59, official artwork src; official and local cover pixels matched. Audio and Apple access not tested."
  },
  "mission": [
    "同一包包到月球，變的是哪個？",
    "What changes when the same backpack goes to the Moon?"
  ],
  "options": [
    [
      "重量N變小，質量kg不變",
      "Weight in N decreases; mass in kg stays"
    ],
    [
      "質量kg減少，包包少了東西",
      "Mass decreases; some backpack contents disappear"
    ]
  ],
  "answer": 0,
  "reason": [
    "不增減包包內容，質量不變；重量是質量乘當地重力。地球刻度秤把力除9.8，搬到別處的kg顯示不是正確質量。",
    "Without changing contents, mass stays. Weight is mass times local gravity. An Earth scale divides force by9.8; on another world its kg display is not the correct mass."
  ],
  "formula": [
    "m質量kg；g有效重力m/s²；W=mg牛頓N\n1N=1kg·m/s²，不把kg叫牛頓或公斤重\nEarth表值9.8m/s²，固定地球刻度讀W/9.8kg\n當地校準秤讀W/g，g>0才可除；g0不能由力求質量\n質量標籤為已知輸入，不是g0稱量結果\n理想靜態測力計W=k×伸長，500N量程k2500N/m，2500N量程k12500N/m\n滿量程伸長.2m；超過量程顯示超量程，不把卡住的指針當精確讀數\n上方重量仍是W=mg計算值\nNASA表赤道有效g含自轉，四巨行星1bar參考層，非固體表面\n忽略浮力／運動與儀器誤差；不是落體或太空失重模擬",
    "Mass m in kg; effective gravity g in m/s²; weight W=mg in newtons N\n1N=1kg·m/s²; kg is not a force unit\nEarth teaching table g9.8; fixed Earth scale reads W/9.8kg\nLocally calibrated scale reads W/g only when g>0; g0 cannot infer mass from force\nMass label is a known input, not a zero-gravity measurement\nIdeal static force meter W=k×extension;500N range k2500N/m,2500N range k12500N/m\nFull range extension.2m; over-range is flagged, not an exact saturated needle reading\nTop weight remains the calculated W=mg\nNASA table equatorial effective g includes rotation; four giant planets use1bar reference level, not solid surfaces\nNo buoyancy/motion/instrument error; not free fall or orbital weightlessness"
  ],
  "limit": [
    "W=mg靜態教具；質量標籤是已知輸入，不是真的在所有環境量出的質量。NASA Metric表重力為赤道有效g（含自轉），採一位小數教學表值，地球9.8與月球1.6，不聲稱精確每地值。木土天海在1bar大氣參考層，不是能站的地面；假想固定儀器比較，忽略浮力、極端環境可行性、加速度／自由落體、相對論與儀器誤差。自訂0–50m/s²是假想，g0的重量力為0但質量標籤仍在，當地校準秤不能除0稱量；不說太空沒有重力。地球刻度秤固定除9.8，其他天體kg顯示是誤讀而不是質量改了。理想牛頓測力計500／2500N兩量程、兩不同彈簧常數，伸長以固定比例畫、物體放大。超量程指針到上限且讀值顯超量程，上方計算重量仍保留；圖伸長封頂不是線性物理消失。沒有kgf單位。 本集Firstory官方頁與公開RSS的集名、時長、封面已核；實際音訊與Apple收聽權限未測。",
    "Static W=mg teaching model; mass label is a known input, not a measurement possible in every environment. NASA Metric values are rounded equatorial effective gravity including rotation, Earth9.8/Moon1.6, not exact site values. Jupiter/Saturn/Uranus/Neptune use a1bar atmospheric reference level, not a surface to stand on; instruments are hypothetical fixed comparisons, ignoring buoyancy, environmental feasibility, acceleration/free fall, relativity and errors. Custom g0–50 is hypothetical. At g0 force is0 but the mass label remains; a local scale cannot divide by0 to measure it. This does not mean space has no gravity. Earth-calibrated scale divides by9.8, so its other-world kg display is miscalibration, not changed mass. Ideal force meters have500/2500N capacities and different spring constants; extension diagram uses a fixed scale and enlarged object. Over-range needle stops at the limit and reading says over-range; top calculated weight remains. Clipped drawing does not replace linear physics. No kgf unit.  Primary Firstory title, duration and artwork are checked against its official page/public RSS; actual audio and Apple access are untested."
  ],
  "episodeTitle": "〈公開｜重力特輯(1)｜宇宙級吸吸功大師：揭開「重力」的隱形絲線｜EP.71〉"
};
