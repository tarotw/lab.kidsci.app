window.CONFIG={
  "id": "K01",
  "path": "seasons",
  "status": "complete",
  "topic": "space",
  "icon": "☀️",
  "date": "2026-10-14",
  "title": [
    "四季不是離太陽遠近",
    "Seasons are not about distance"
  ],
  "question": [
    "日地距離相同，南北兩邊為什麼不是一起過夏天？",
    "At the same Sun distance, why do north and south have opposite seasons?"
  ],
  "defaults": {
    "tilt": 23.5,
    "latitude": 25,
    "phase": 90,
    "hour": 12
  },
  "extras": [
    "seasons-model.js",
    "seasons.css",
    "seasons.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "description": [
    "固定圓軌道日地距離，調地軸、緯度、公轉位置與真太陽時，探索白晝長短和水平照明，含極晝極夜。",
    "Keep a constant circular-orbit distance and adjust axial tilt, latitude, orbital phase and solar time to explore daylight and horizontal illumination, including polar conditions."
  ],
  "keywords": "四季,地軸傾斜,緯度,晝長,日照角度,極晝,極夜,春分,夏至,太陽輻照,seasons,axial tilt,latitude,daylight,solar elevation,polar day,polar night,equinox,solstice,irradiance",
  "sources": [
    [
      "https://www.weather.gov/fgz/Seasons",
      "NWS：軸傾與四季、折射與春秋分",
      "NWS: axial tilt, seasons and equinox refraction"
    ],
    [
      "https://www.gml.noaa.gov/grad/solcalc/glossary.html",
      "NOAA GML：天頂角與水平投影",
      "NOAA GML: zenith angle and horizontal projection"
    ],
    [
      "https://gml.noaa.gov/grad/solcalc/solareqns.PDF",
      "NOAA：球面太陽高度公式",
      "NOAA: spherical solar-position equations"
    ],
    [
      "https://science.gsfc.nasa.gov/earth/climate/researchareas/159/",
      "NASA：太陽輻照與大氣削弱",
      "NASA: solar irradiance and atmospheric attenuation"
    ]
  ],
  "podcast": {
    "ep": "c7",
    "title": "被撞歪的地球：永晝、永夜與馴鹿的藍色眼睛",
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277",
    "verified": false
  },
  "mission": [
    "距離固定，讓傾角變0°，還會出現原本的日照季節循環嗎？",
    "At fixed distance, with zero tilt, does the same illumination cycle remain?"
  ],
  "options": [
    [
      "不會，同緯度的幾何日照不隨公轉變",
      "No, same-latitude geometry stays constant"
    ],
    [
      "會，靠近太陽就一定變夏天",
      "Yes, getting closer always makes summer"
    ]
  ],
  "answer": 0,
  "reason": [
    "此頁圓軌道距離固定。傾角0時太陽赤緯一直0，同緯度的晝長與水平日照不隨公轉位置改變。真氣候還有海陸、大氣和時間延遲，不能由這頁算氣溫。",
    "Distance is constant in this circular orbit. Zero tilt keeps solar declination zero, so the same latitude has constant geometric daylight and illumination. Real climate also involves oceans, land, atmosphere and delays; this page does not calculate air temperature."
  ],
  "formula": [
    "圓軌道1AU，自轉24h；太陽常數固定1361W/m²\nφ緯度、ε傾角、λ公轉角，δ=asin(sinε sinλ)\nλ0/90/180/270對應北春分/夏至/秋分/冬至，非公曆日期\n真太陽時h=(hour−12)×15°，sin高度=a+b cosh\na=sinφsinδ，b=cosφcosδ\n普通日H=acos(−a/b)，白晝24H/π小時\na+b≤0為無正高度時段；a−b≥0為全日白晝\n極點a=b=0另列整日地平線，不套12h或tan極點\n水平投影=max(0,sin高度)，功率=1361×投影W/m²\n日平均=1361/π×(aH+b sinH)，每日MJ/m²=平均×.0864\nW每秒焦耳、MJ百萬焦耳，未經大氣削弱、非氣溫",
    "Circular orbit1 AU, rotation24 h; fixed solar constant1361 W/m²\nLatitude φ, tilt ε, phase λ: δ=asin(sinε sinλ)\nλ0/90/180/270: northern spring/summer/autumn/winter; not calendar dates\nSolar hour angle h=(hour−12)×15°; sin elevation=a+b cosh\na=sinφsinδ; b=cosφcosδ\nOrdinary day H=acos(−a/b); daylight24H/π hours\na+b≤0: no positive elevation; a−b≥0: full daylight\nAt poles a=b=0 is a separate all-day-horizon case, not12 h or tan(pole)\nHorizontal projection=max(0,sin elevation); power1361×projection W/m²\nDaily mean1361/π×(aH+b sinH); daily MJ/m²=mean×.0864\nW=joules each second; MJ=million joules; before atmospheric attenuation, not temperature"
  ],
  "limit": [
    "球形地球、圓軌道1AU、固定地軸空間方向與24h自轉的幾何教具，不是真日期或城市氣溫預測。忽略軌道離心率、歲差、折射／日輪、地形、雲、吸收反射與熱慣性。角度0是北春分，90北夏至，180北秋分，270北冬至；南反向，不按公曆精確日期。傾角可任選0–45°，23.5是教學近似；緯度正北負南。時刻為真太陽時而非時區鐘，日出中心高度0，實際日出包含折射／日輪會不同。極點春秋分或零傾角時中心整天在地平線、無高於地平線時段與正水平直接照明，不能說整天太陽消失。照明是未經大氣削弱的水平面幾何輻照，1361W/m²固定參考，不是地面實測。每日MJ/m²為全天積分，不拿單位面積光或曲線換算氣溫。赤道12h固定仍可有能量雙峰；不要說每個緯度夏至都照最多。透視軌道與地軸方向可見，天體大小與距離不同比例；右側小板僅當地水平入射，光線符號不計光子。Canvas失效仍有文字與SVG。公轉播放每秒30°，只展示一圈；改公轉滑桿跳位置，播放已走角另計、不是經過天數。語言／模式、改傾角／緯度／時刻保留現在公轉與播放角帳；重開從春分。南北對照為±同絕對緯度，零緯度應同；年度零傾角曲線同緯度。c7／EP108官方metadata待核，僅節目首頁與Logo。",
    "Spherical Earth, circular1 AU orbit, fixed inertial axis and24 h rotation; not calendar ephemerides or a city temperature forecast. No eccentricity, precession, refraction/disk size, terrain, clouds, absorption/reflection or thermal inertia. Phase0/90/180/270 labels northern spring/summer/autumn/winter, opposite in south, not precise calendar dates. Tilt0–45° is adjustable;23.5° is a teaching approximation. Latitude positive north, negative south. Time is true solar time, not a timezone clock. Sunrise uses center elevation0; real sunrise differs through refraction and disk size. At exact poles in equinox/zero tilt the center lies on the horizon all day, with no above-horizon interval or positive direct horizontal illumination; the Sun is not absent all day. Horizontal irradiance is before atmospheric attenuation, using fixed1361 W/m², not measured surface sunlight. Daily MJ/m² integrates the whole day, not air temperature. Equatorial daylight stays12 h but energy can have two yearly peaks; not every latitude receives most at a solstice. Perspective orbit and inertial axis are visible; bodies and distance use different scales. The local horizontal patch illustrates incidence; rays are not photon counts. Canvas fallback retains text and SVG. Playback30°/second shows one circuit. Manual orbital edits jump phase; played angular travel is separate, not elapsed days. Language/mode and tilt/latitude/time edits preserve orbital phase and playback travel; new circuit starts spring. North/south comparisons use equal absolute latitudes, identical at zero; the zero-tilt annual line uses the same latitude. c7/EP108 metadata await verification; homepage/Logo only."
  ]
};
