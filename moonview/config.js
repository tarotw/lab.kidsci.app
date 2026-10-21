window.CONFIG={
  "id": "K02",
  "path": "moonview",
  "status": "complete",
  "topic": "space",
  "icon": "🌗",
  "date": "2026-10-14",
  "title": [
    "月相的三點觀察台",
    "Three views of Moon phases"
  ],
  "question": [
    "月球都只亮半邊，為什麼我們看到的亮面會改變？",
    "Half the Moon is lit. Why does its visible bright area change?"
  ],
  "defaults": {
    "phase": 90,
    "tilt": 5,
    "node": 0
  },
  "extras": [
    "moonview-model.js",
    "moonview.css",
    "moonview.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "description": [
    "操作日地月三維光照幾何，對照太空與地球視角、一般月相與交點附近的日月食排列。",
    "Explore Sun–Earth–Moon geometry, space and Earth views, ordinary phases and eclipse alignment near orbital nodes."
  ],
  "keywords": "月相,新月,滿月,上弦月,下弦月,軌道傾角,日食,月食,科學好好聽,Moon phases,new Moon,full Moon,first quarter,last quarter,orbital inclination,solar eclipse,lunar eclipse",
  "sources": [
    [
      "https://science.nasa.gov/moon/moon-phases/",
      "NASA：月相與受光半球",
      "NASA: phases and the sunlit hemisphere"
    ],
    [
      "https://science.nasa.gov/moon/eclipses/",
      "NASA：日月食與傾斜軌道",
      "NASA: eclipses and the tilted orbit"
    ],
    [
      "https://science.nasa.gov/moon/facts/",
      "NASA：月球大小與平均距離",
      "NASA: Moon size and average distance"
    ],
    [
      "https://feed.firstory.me/rss/user/cmdpx4cs200ax01xldg5ta89p",
      "節目官方公開RSS：單集資料（非模型數據）",
      "Official public podcast RSS: episode metadata (not model data)"
    ]
  ],
  "podcast": {
    "ep": "EP.112",
    "title": "〈月亮變變變！為什麼月亮會變臉？｜EP.112〉",
    "url": "https://open.firstory.fm/story/cmulaerr8004x01v8hpw0gkim",
    "verified": true,
    "urlVerified": true,
    "provider": "Firstory",
    "firstory": "https://open.firstory.fm/story/cmulaerr8004x01v8hpw0gkim",
    "durationSeconds": 1508,
    "durationIso": "PT25M8S",
    "durationLabel": [
      "25 分 8 秒",
      "25 min 8 sec"
    ],
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/sAa6Wf5i9D3PftjYWH15B.jpg",
    "coverFile": "podcast/ep112.jpg",
    "coverAvailable": true,
    "artworkVerified": true,
    "artworkVisualChecked": true,
    "metadataChecked": "2026-10-14",
    "publishedAt": "Wed, 30 Sep 2026 22:02:05 GMT",
    "evidenceBasis": "2026-10-14 official public RSS and actual Firstory story DOM confirm title/25:08; official image viewed in browser matches local artwork. Actual audio and Apple access remain untested."
  },
  "mission": [
    "地球陰影線關掉，一般月相會停止改變嗎？",
    "Will ordinary phases stop changing if the Earth-shadow guide is hidden?"
  ],
  "options": [
    [
      "不會，亮面由太陽方向與觀察方向決定",
      "No, the bright area depends on Sun and viewing directions"
    ],
    [
      "會，月相全部都是地球擋光",
      "Yes, every phase is Earth blocking sunlight"
    ]
  ],
  "answer": 0,
  "reason": [
    "月相來自觀看受光半球的角度；地球陰影真正遮住月球是月食。開關只畫示意，不移動地球也不關太陽。",
    "Phases come from our view of the sunlit hemisphere. Earth blocks sunlight during a lunar eclipse. This switch changes a guide, not Earth or the Sun."
  ],
  "formula": [
    "太陽位於+x遠處，平行光；地球在原點\nu繞軌道角，i軌道傾角，Ω交點方向\nr=Rz(Ω)·(cosu, sinu cosi, sinu sini)，單位向量\n從月球看地球v=−r，太陽s=(1,0,0)\n相位角α=acos(s·v)，地球所見月面亮面比例k=(1+cosα)/2=(1−rx)/2\n月球整體受光半球=50%，與地球所見圓盤比例不同\n陰影排列教具：地球半徑1、月半徑.27、距離60\n平行光圓柱投影中心距b=60√(ry²+rz²)\nb<1+.27且rx>0：月影可能交地球；rx<0：地影可能交月球\n忽略太陽視大小、本影錐與半影，不推真日食類型／日期／路徑\n一般月相圓盤不套日月食遮蔽，另讀排列提示",
    "Sun at distant+x with parallel rays; Earth at origin\nOrbit angle u, inclination i, node direction Ω\nr=Rz(Ω)·(cosu, sinu cosi, sinu sini), unit vector\nMoon-to-Earth v=−r, Sun direction s=(1,0,0)\nPhase angle α=acos(s·v); visible bright disk fraction k=(1+cosα)/2=(1−rx)/2\nThe whole Moon has a50% sunlit hemisphere, different from visible disk fraction\nAlignment teaching ratios: Earth radius1, Moon radius.27, distance60\nParallel-ray cylinder center offset b=60√(ry²+rz²)\nb<1+.27 and rx>0: Moon-shadow projection may meet Earth; rx<0: Earth-shadow projection may meet Moon\nNo solar angular size, umbral cones or penumbra: not eclipse type/date/path predictions\nOrdinary phase disk excludes eclipse dimming; read separate alignment guidance"
  ],
  "limit": [
    "球形月球、圓軌道與遠太陽平行光的教具，軌道角不是月齡或日曆；交點方向由孩子調整，不模擬歲差或日地公轉。5°為NASA約值，0–10°可自由實驗。距離60個地球半徑、月半徑.27是接近平均尺度的教學約值；太空圖距離壓縮、天體放大，側圖高低放大，均不是比例地圖。地球視角採地心、黃道北方朝上，不計真地平線／緯度／觀測時刻、地球照或天平動。畫面明亮圓盤是一般月相幾何，不等於真亮度，日月食遮蔽另列。陰影排列用平行光圓柱截面，只證明傾斜可錯開；不計太陽視圓／本影錐／半影，不推真日食類型、地點、日期或遮蔽百分比。地球影子顯示開關只顯示／隱藏線，不改模型或亮面。兩對照只改軌道傾角0與目前值，交點和軌道角同。 本集Firstory官方頁與公開RSS的集名、時長、封面已核；實際音訊與Apple收聽權限未測。",
    "Spherical Moon, circular orbit and distant parallel sunlight. Orbit angle is not Moon age or a calendar; the adjustable node does not model precession or Earth’s solar orbit.5° is NASA’s approximation; experiment from0–10°.Distance60 Earth radii and Moon radius.27 are rounded teaching ratios near mean scales. Space distances compressed, bodies enlarged; side-view height exaggerated, not a scale map. Earth view uses a geocentric observer with ecliptic north up, without a real horizon, latitude/time, earthshine or libration. Bright disk illustrates ordinary phase geometry, not measured brightness; eclipse attenuation is separate. Parallel-ray cylindrical shadow cross-sections demonstrate missed alignment, without solar disk/umbra cones/penumbra; no eclipse type/place/date/coverage forecasts. Earth-shadow switch only hides/shows the guide and preserves the model and bright fraction. Comparison changes only inclination0/current; same node and orbit angle.  Primary Firstory title, duration and artwork are checked against its official page/public RSS; actual audio and Apple access are untested."
  ],
  "episodeTitle": "〈月亮變變變！為什麼月亮會變臉？｜EP.112〉"
};
