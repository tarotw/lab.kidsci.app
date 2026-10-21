window.CONFIG={
  "id": "K07",
  "path": "areabeat",
  "status": "complete",
  "topic": "space",
  "icon": "🪐",
  "date": "2026-10-14",
  "title": [
    "橢圓軌道的等面積節拍",
    "Equal-area beats on an ellipse"
  ],
  "question": [
    "近太陽跑快一點，相同時間真的掃過相同面積嗎？",
    "Faster near the Sun: do equal times really sweep equal areas?"
  ],
  "defaults": {
    "ecc": 0.6,
    "time": 0,
    "parts": 12
  },
  "extras": [
    "areabeat-model.js",
    "areabeat.css",
    "areabeat.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "description": [
    "調偏心率，對照開普勒軌道與等路徑速度教具；同時看到焦點、等時間點、兩段面積與多邊形數值誤差。",
    "Change eccentricity and compare Kepler motion with a constant path-speed teaching model, including focus, equal-time dots, two swept areas and polygon errors."
  ],
  "keywords": "開普勒,等面積,橢圓軌道,偏心率,焦點,公轉,科學好好聽,Kepler,equal areas,elliptical orbit,eccentricity,focus,orbital motion",
  "sources": [
    [
      "https://science.nasa.gov/solar-system/orbits-and-keplers-laws/",
      "NASA：焦點與等面積定律",
      "NASA: focus and equal-area law"
    ],
    [
      "https://pwg.gsfc.nasa.gov/stargaze/Skepl2nd.htm",
      "NASA典藏：平均近點角與面積",
      "NASA archive: mean anomaly and area"
    ],
    [
      "https://pwg.gsfc.nasa.gov/stargaze/Skepl1st.htm",
      "NASA典藏：橢圓焦點幾何",
      "NASA archive: ellipse focus geometry"
    ],
    [
      "https://pwg.gsfc.nasa.gov/stargaze/Smotion.htm",
      "NASA典藏：開普勒方程",
      "NASA archive: Kepler equation"
    ]
  ],
  "podcast": {
    "ep": "s14",
    "title": "燃燒的紅色戰神：從「西鄉星」傳說到火星殖民夢",
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "mission": [
    "橢圓軌道太陽應該放在哪裡？",
    "Where does the Sun belong on an elliptical orbit?"
  ],
  "options": [
    [
      "一個焦點；圓形時才與中心重合",
      "At one focus; only a circle puts it at the centre"
    ],
    [
      "永遠放在橢圓中心",
      "Always at the ellipse centre"
    ]
  ],
  "answer": 0,
  "reason": [
    "左邊固定中心引力以太陽為焦點，近太陽較快，等時間等面積。右邊人工保持路徑速度，面積一般不相等。",
    "Left: the Sun is the force centre and a focus, faster nearby with equal areas in equal times. Right: constant path speed is imposed, so areas generally differ."
  ],
  "formula": [
    "自訂距離單位u；半長軸a1u；周期T12拍，非真實星球或日曆\ne0..0.8，b=√(1−e²)，太陽焦點(0,0)，另一焦點(−2e,0)，中心(−e,0)\nM=2πt/T，解E−e sinE=M；位置x=cosE−e，y=b sinE\n速率由dx/dt、dy/dt計；中心引力參數μ=(2π/T)²\n焦點扇形解析面積A=ab/2×[E1−E0−e(sinE1−sinE0)]\n左邊等時間Δt=T/N，每段面積πab/N\n右邊人工以相同路徑速率L/T：反查弧長∫√(sin²E+b²cos²E)dE，不是E勻速\n右邊不是此太陽引力的自由運動\nSVG扇形用256條弦近似，外部列解析／多邊形值與相對誤差，容差0.01%\n所有等時間段預先可見；兩色為目前段和隔半圈的段，不是兩顆星球\n動畫1實秒走1模型拍；天體符號放大，橢圓與焦點比例保持",
    "Custom distance unit u, semi-major axis a1u, period T12 beats; not an actual world/calendar\ne0..0.8; b=√(1−e²); solar focus(0,0), other focus(−2e,0), centre(−e,0)\nM=2πt/T; solve E−e sinE=M; x=cosE−e, y=b sinE\nSpeed from dx/dt,dy/dt; gravity parameter μ=(2π/T)²\nExact focal sector A=ab/2×[E1−E0−e(sinE1−sinE0)]\nLeft equal time Δt=T/N gives areaπab/N\nRight imposes path speed L/T by inverse arc length ∫√(sin²E+b²cos²E)dE, not uniform E\nRight is not free motion under this solar gravity\nSVG sectors use256 chords; exact/polygon values and relative errors shown; tolerance0.01%\nAll equal-time segments previewed; colours identify current and half-orbit-separated segment, not two worlds\nAnimation1 beat per real second; bodies enlarged, ellipse and focus proportions retained"
  ],
  "limit": [
    "固定中心引力、試驗粒子橢圓示例；不計多行星擾動或太陽反作用，不代表真火星軌道。半長軸1u、周期12拍均自訂，u是1份距離，拍是1份時間；沒有km/年。偏心率改變保留同一時間，等時間份數只改展示取樣。右邊等速為人工帶動路徑教具，弧長反查，不是E角均速，也不是自由引力軌道。幾何扇形由焦點到弧邊界，以256弦近似；明示0.01%數值相對容差，並非宇宙量測精度。兩色整段預覽不等於已走過，行星白點才是目前時刻；速度數據另有u/拍。天體放大而焦點位置與橢圓比例不變，e0焦點／中心重合。s14/c25單集metadata待官方核對。",
    "Fixed central-gravity test-particle ellipse; no other planets or solar reaction, not an actual Mars orbit. Semi-major axis1u and period12 beats are custom; u is one distance unit and beat one time unit, no km/year. Eccentricity changes preserve time; partition count only changes display sampling. Right is artificially driven constant path speed via inverse arc length, not uniform eccentric angle or free gravity motion. Focal sectors approximate arc boundaries with256 chords;0.01% relative numerical tolerance, not astronomical measurement precision. Both colours preview full segments, not elapsed motion; white planet dot indicates current time, speeds separately in u/beat. Bodies enlarged; ellipse/focus proportions retained; e0 focus and centre coincide. s14/c25 episode metadata unverified."
  ]
};
