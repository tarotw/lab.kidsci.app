window.CONFIG={
  "id": "K03",
  "path": "mercbeat",
  "status": "complete",
  "topic": "space",
  "icon": "☿",
  "date": "2026-10-14",
  "title": [
    "水星的三比二節拍",
    "Mercury’s three-to-two beat"
  ],
  "question": [
    "繞太陽兩圈，為什麼才過一個水星太陽日？",
    "Why do two orbits make one Mercury solar day?"
  ],
  "defaults": {
    "time": 0,
    "ecc": 0,
    "ratio": 1.5,
    "longitude": 0
  },
  "extras": [
    "mercbeat-model.js",
    "mercbeat.css",
    "mercbeat.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "description": [
    "用共享時鐘數水星兩次公轉、三次自轉，追蹤表面太陽方向；從圓軌道加入克卜勒橢圓軌道，分清恆星日、太陽日與短暫反向。",
    "Count two orbits and three rotations with a shared clock, track surface sunlight, then add a Kepler ellipse to distinguish sidereal and solar days and brief solar reversal."
  ],
  "keywords": "水星,三比二共振,自轉,公轉,恆星日,太陽日,克卜勒橢圓,科學好好聽,Mercury,3:2 resonance,rotation,orbit,sidereal day,solar day,Kepler ellipse",
  "sources": [
    [
      "https://science.nasa.gov/image-article/apod-2000-february-13-southwest-mercury/",
      "NASA：兩次公轉、三次自轉與太陽短暫反向",
      "NASA: three rotations per two orbits and brief solar reversal"
    ],
    [
      "https://science.nasa.gov/mercury/facts/",
      "NASA水星：88天、176天與近日點太陽運動",
      "NASA Mercury:88 days,176 days and solar motion near perihelion"
    ],
    [
      "https://feed.firstory.me/rss/user/cmdpx4cs200ax01xldg5ta89p",
      "節目官方公開RSS：單集資料（非模型數據）",
      "Official public podcast RSS: episode metadata (not model data)"
    ]
  ],
  "podcast": {
    "ep": "EP.107",
    "title": "〈太陽系專輯｜水星與金星：冰火煉獄與酸雨女王｜EP.107〉",
    "url": "https://open.firstory.fm/story/cmtfikiy7024n01xv82u3605o",
    "verified": true,
    "urlVerified": true,
    "provider": "Firstory",
    "firstory": "https://open.firstory.fm/story/cmtfikiy7024n01xv82u3605o",
    "durationSeconds": 958,
    "durationIso": "PT15M58S",
    "durationLabel": [
      "15 分 58 秒",
      "15 min 58 sec"
    ],
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/VOLbUdmxjtlM1lFfK-IJF.jpg",
    "coverFile": "podcast/ep107.jpg",
    "coverAvailable": true,
    "artworkVerified": true,
    "artworkVisualChecked": true,
    "metadataChecked": "2026-10-14",
    "publishedAt": "Sun, 30 Aug 2026 22:02:07 GMT",
    "evidenceBasis": "2026-10-14 current official RSS plus exact Firstory story title, displayed 00:15:58 and cover URL; official page pixels and local cover visually matched. Audio not played, Apple access not tested."
  },
  "mission": [
    "三比二水星，兩圈公轉時轉了幾圈？",
    "In3:2 rotation, how many spins occur in two orbits?"
  ],
  "options": [
    [
      "三圈自轉，一個太陽日",
      "Three spins, one solar day"
    ],
    [
      "兩圈自轉，一年就是一天",
      "Two spins, a year is a day"
    ]
  ],
  "answer": 0,
  "reason": [
    "恆星方向作基準是三圈自轉；太陽方向還隨公轉轉兩圈，所以相對太陽的淨角帳只有一圈。太陽日176地球天，恆星日約58.67天是本教具88天／1.5的近似。",
    "A fixed stellar reference counts three spins. The Sun direction also turns through two orbital circuits, leaving one net circuit relative to the Sun. Solar day176 Earth days; sidereal58.67 days is this teaching model’s88/1.5 approximation."
  ],
  "formula": [
    "T公轉=88地球天（教學約值），q每公轉自轉圈數\nM=2πt/T，E−e sinE=M（每圈解克卜勒方程）\nx/a=cosE−e，y/a=√(1−e²) sinE，r/a=1−e cosE\nf=atan2(y,x)，公轉真角連續累加\n自轉角θ=q×2πt/T，標記初始朝向太陽\n當地太陽角=f−θ−經度，赤道高度=asin(cos當地角)\n自轉−公轉角帳=(θ−f)/2π，可短暫倒退\nf點速率=(2π/T)√(1−e²)/(r/a)²\n角帳速率=θ點−f點；負值為太陽相對常態反向\n恆星日=T/q；平均太陽圈週期=T/(q−1)，q1無完整太陽角圈\nq1圓軌道太陽固定；橢圓可往返但不繞滿一圈\nq1.5兩年三自轉，176天一太陽日\n無軸傾／天平動／太陽視圓，e.2為示意近似",
    "Orbital period T=88 Earth days (rounded teaching value); q spins per orbit\nM=2πt/T; solve E−e sinE=M within each circuit\nx/a=cosE−e; y/a=√(1−e²)sinE; r/a=1−e cosE\nf=atan2(y,x), unwrapped true anomaly\nSpin θ=q×2πt/T; initial marker faces Sun\nLocal Sun angle=f−θ−longitude; equatorial elevation=asin(cos local angle)\nSpin-minus-orbit angular ledger=(θ−f)/2π, can briefly reverse\nf rate=(2π/T)√(1−e²)/(r/a)²\nLedger rate=spin rate−orbital angular rate; negative means Sun reverses from usual direction\nSidereal day=T/q; mean complete Sun-angle circuit T/(q−1); q1 has no complete circuit\nAt q1 a circular orbit gives fixed Sun; an ellipse oscillates without a full circuit\nq1.5 gives three spins in two years, solar day176 Earth days\nNo obliquity/libration/solar disk; e.2 is an illustrative approximation"
  ],
  "limit": [
    "88地球天公轉與固定3:2自轉的教學近似，不是精確星曆或任務。基礎先圓軌道；e可0–.3，.2為接近水星偏心的示意值，未校準真近日／遠日距離，r/a用半長軸倍數。橢圓以克卜勒方程非勻速前進、固定平均自轉，能示範近日點太陽角短暫反向；不加入太陽視圓、折射、真地形、軸傾或自轉天平動，不預測某地重複日出。恆星日88/1.5=58.67是約值，NASA以約59天描述；不能假稱精確58.67。1:1和2:1是假想對照而非水星現況。太陽圖是赤道零軸傾方向，地平線下亦畫出以觀察，非人站地面可看見。公轉圈數按平均角／時間，自轉以固定恆星方向；淨太陽角帳非單調完成日數。1:1無完整太陽角圈，橢圓往返仍有變化，不能說沒有日照變化。時間拖動與改設定保留同時刻但重算幾何；重開才歸零。NASA歷史APOD僅用3:2及太陽視運動敘述，舊任務未當現況。 本集Firstory官方頁與公開RSS的集名、時長、封面已核；實際音訊與Apple收聽權限未測。",
    "Rounded88-day orbit with fixed3:2 spin is a teaching approximation, not ephemerides or a mission. Start circular; adjustable e0–.3 with.2 an illustrative value near Mercury’s eccentricity, not calibrated perihelion/aphelion distances. r/a uses semimajor-axis units. The Kepler ellipse has varying orbital angular speed and constant mean spin, illustrating brief Sun-angle reversal near perihelion. No solar disk, refraction, terrain, obliquity or spin libration; no prediction of repeated sunrise at a real site.88/1.5=58.67-day sidereal rotation is rounded, not an exact measurement; NASA says about59 days.1:1 and2:1 are hypothetical comparisons. Local view is a zero-obliquity equatorial direction diagram, showing the Sun even below the horizon, not a visible sky. Orbital circuits use mean angle/time, spin a stellar reference; net Sun angular ledger is not a monotonic day count.1:1 has no complete Sun-angle circuit, but elliptic oscillation still changes illumination. Time/parameter edits preserve the same time and recompute geometry; explicit restart returns0. The archival NASA APOD source supports 3:2 and apparent solar motion; historical mission status is not treated as current.  Primary Firstory title, duration and artwork are checked against its official page/public RSS; actual audio and Apple access are untested."
  ],
  "episodeTitle": "〈太陽系專輯｜水星與金星：冰火煉獄與酸雨女王｜EP.107〉"
};
