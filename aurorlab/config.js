window.CONFIG={
  "id": "K08",
  "path": "aurorlab",
  "status": "complete",
  "topic": "space",
  "icon": "🌌",
  "date": "2026-10-14",
  "title": [
    "極光的磁力線旅程",
    "Aurora: a magnetic journey"
  ],
  "question": [
    "粒子轉著彎，為什麼天空會發光？",
    "Particles turn: why does the sky glow?"
  ],
  "defaults": {
    "B": 3,
    "speed": 1.2,
    "pitch": 45,
    "charge": -1,
    "field": 1,
    "time": 0,
    "gas": "ogreen",
    "gasOn": true
  },
  "extras": [
    "aurorlab-model.js",
    "aurorlab.css",
    "aurorlab.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "description": [
    "調磁場、電荷與起跑方向，觀察勻磁場螺旋與不變的速率；再看氣體碰撞和氧、氮代表色。",
    "Change field, charge and launch direction; observe uniform-field helices at unchanged speed, then a gas-collision illustration and oxygen/nitrogen colours."
  ],
  "keywords": "極光,磁場,電荷,螺旋,氧,氮,洛侖茲力,科學好好聽,aurora,magnetic field,charge,helix,oxygen,nitrogen,Lorentz force",
  "sources": [
    [
      "https://spaceplace.nasa.gov/aurora/en/",
      "NASA兒童：極光與氣體顏色",
      "NASA for kids: auroras and gas colours"
    ],
    [
      "https://science.nasa.gov/sun/auroras/",
      "NASA：碰撞發光與不同能階",
      "NASA: collisional light and energy levels"
    ],
    [
      "https://pwg.gsfc.nasa.gov/Education/wtrap2.html",
      "NASA典藏：磁力與粒子運動",
      "NASA archive: magnetic force and motion"
    ],
    [
      "https://openstax.org/books/university-physics-volume-2/pages/11-3-motion-of-a-charged-particle-in-a-magnetic-field",
      "OpenStax：勻磁場圓周與螺旋",
      "OpenStax: circles and helices in a uniform field"
    ],
    [
      "https://feed.firstory.me/rss/user/cmdpx4cs200ax01xldg5ta89p",
      "節目官方公開RSS：單集資料（非模型數據）",
      "Official public podcast RSS: episode metadata (not model data)"
    ]
  ],
  "podcast": {
    "ep": "EP104",
    "title": "〈太陽系專輯｜太陽的壞脾氣：雀斑、噴嚏與極光之舞｜EP.104〉",
    "url": "https://open.firstory.fm/story/cmtztpng4001z01tbelxph0z2",
    "verified": true,
    "urlVerified": true,
    "provider": "Firstory",
    "firstory": "https://open.firstory.fm/story/cmtztpng4001z01tbelxph0z2",
    "durationSeconds": 913,
    "durationIso": "PT15M13S",
    "durationLabel": [
      "15 分 13 秒",
      "15 min 13 sec"
    ],
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/lIJ4wdJGulbHonCZXhC_X.jpg",
    "coverFile": "podcast/ep104.jpg",
    "coverAvailable": true,
    "artworkVerified": true,
    "artworkVisualChecked": true,
    "metadataChecked": "2026-10-14",
    "publishedAt": "Wed, 16 Sep 2026 22:02:07 GMT",
    "evidenceBasis": "Current official public RSS plus exact Firstory story title/image; local official artwork pixels inspected. Audio not played, Apple access not tested.",
    "artworkVisualCheckedAt": "2026-10-14"
  },
  "mission": [
    "只有勻磁場，粒子會越跑越快嗎？",
    "Does a uniform magnetic field alone make a particle faster?"
  ],
  "options": [
    [
      "不會；磁力只改變方向",
      "No; magnetic force changes direction"
    ],
    [
      "會；轉得越多越快",
      "Yes; more turns mean faster motion"
    ]
  ],
  "answer": 0,
  "reason": [
    "磁力垂直速度，沒有做功。真正極光粒子的加速另有電場等機制，此頁不模擬。",
    "Magnetic force is perpendicular to velocity and does no work. Real auroral acceleration involves other processes such as electric fields, not modelled here."
  ],
  "formula": [
    "自訂距離u、時間拍，m=1，q=±1同質量，B=±強度。不是電子與質子真實質量比較。\n傾角α由xy平面朝+z量：v⊥=v cosα，vz=v sinα。\nω=qBz，dv/dt=q(v×B)，vx=v⊥cosωt，vy=−v⊥sinωt。\nx=v⊥sinωt/ω，y=v⊥(cosωt−1)/ω，z=vzt；B0取直線極限。\nr=v⊥/|B|；有橫向運動才有圈周期2π/|B|。磁力功率F·v=0。\n氣體教具板在z4u，抵達t=4/vz；觀察最多8拍。到板保留碰撞前數據，不計碰撞後速度。\n動畫1拍/秒。氣體顏色手選代表標籤，非依速率預測光譜。\n地球圖為獨立背景，偶極形狀r=L sin²θ示意，不是上方模型的磁層計算。",
    "Custom distance u and time beat; m=1, q=±1 equal mass, B=±strength. Not actual electron/proton masses.\nLaunch angle α above xy toward+z: v⊥=v cosα, vz=v sinα.\nω=qBz; dv/dt=q(v×B); vx=v⊥cosωt, vy=−v⊥sinωt.\nx=v⊥sinωt/ω; y=v⊥(cosωt−1)/ω; z=vzt; B0 uses the straight-line limit.\nr=v⊥/|B|; circle period2π/|B| only when transverse motion exists. Magnetic power F·v=0.\nTeaching gas plate z4u; arrival4/vz, observation at most8beats. Hold pre-collision data at arrival, no post-collision velocity calculation.\nAnimation1beat/s. Gas colours are selected representative labels, not spectra predicted from speed.\nSeparate Earth background uses dipole-shaped r=L sin²θ, not a magnetosphere calculation from the experiment."
  ],
  "limit": [
    "勻磁場、無電場與真空飛行，固定相同自訂質量；忽略相對論、輻射、磁鏡與磁層重連。u、拍、B及能量均自訂，不能換算真粒子或地球場。正負電荷同起速、同質量；不是電子／質子實測比較。觀察於8拍或z4u板先到者停止，保留碰撞前速度，非粒子真的停住。板為人為碰撞教具，不是上層大氣高度；移除氣體只取消發光示意，仍在同觀察面保留數據。手選氧綠／氧紅／氮藍紫代表標籤，不推算能階、亮度或可見性；真顏色亦受高度與能階影響。B0直線抵達板不代表無地磁時的地球極光。地球磁力線背景與上方勻磁場分開；非完整磁層或極光預報。粒子符號放大，两電荷共用尺度，每個投影有1u尺。 本集Firstory官方頁與公開RSS的集名、時長、封面已核；實際音訊與Apple收聽權限未測。",
    "Uniform field, no electric field, vacuum flight, equal custom masses; no relativity, radiation, magnetic mirrors or reconnection. u, beats, B and energy are custom, not actual particles/Earth field. Opposite charges share mass and launch speed, not measured electron/proton comparison. Stop observation at8beats or z4u plate, whichever first; retain pre-collision velocity, not physically stop the particle. Plate is an artificial collision aid, not atmospheric altitude; removing gas cancels light illustration but retains the same observation plane. Oxygen green/red and nitrogen blue/purple are selected representative labels, not calculated levels, brightness or visibility; actual colours depend on altitude and energy levels. Straight B0 arrival does not predict Earth auroras without a field. Earth field-line background is separate from the uniform-field model, no complete magnetosphere/forecast. Particle symbols enlarged, both charges use the same scale, each projection has a1u ruler.  Primary Firstory title, duration and artwork are checked against its official page/public RSS; actual audio and Apple access are untested."
  ],
  "episodeTitle": "〈太陽系專輯｜太陽的壞脾氣：雀斑、噴嚏與極光之舞｜EP.104〉",
  "relatedPodcast": {
    "ep": "EP64",
    "title": "〈公開｜力學特輯(2)｜隱形的吸引力法則：解開磁鐵與地球磁場的驚人謎團〉",
    "link": "https://open.firstory.fm/story/cmp2f0r150exi01xm21pudjh7",
    "duration": "572",
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/Mzgz4GJBrPj3W2fbXOu7p.jpg",
    "durationSeconds": 572,
    "durationLabel": [
      "9分32秒",
      "9 min 32 sec"
    ],
    "metadataChecked": "2026-10-14",
    "verified": true,
    "episodeMapping": "Exact local listensci/64/metadata.md title matches official RSS and Firstory h1; official title omits number.",
    "artworkVisualChecked": false
  }
};
