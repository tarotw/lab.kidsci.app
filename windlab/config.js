window.CONFIG={
  "id": "I04",
  "path": "windlab",
  "status": "complete",
  "topic": "physics",
  "icon": "🪽",
  "title": [
    "翼形與攻角的小風洞",
    "Wing angle: a little wind tunnel"
  ],
  "question": [
    "把機翼抬得更高，升力就一直變大嗎？",
    "Does a steeper wing always produce more lift?"
  ],
  "defaults": {
    "wind": 10,
    "angle": 10,
    "area": 0.5
  },
  "extras": [
    "windlab-model.js",
    "windlab.css",
    "windlab.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "date": "2026-10-14",
  "description": [
    "調風速、攻角與翼面積，觀察固定機翼的升力和阻力。用明示的教學係數表比較示例失速前後，不把示意流線當成CFD。",
    "Change wind speed, angle of attack and wing area. Compare lift and drag using an explicit teaching coefficient table, including an example stall; schematic flow lines are not CFD."
  ],
  "keywords": "攻角,升力,阻力,失速,風洞,翼面積,流線,angle of attack,lift,drag,stall,wind tunnel,wing area,streamlines",
  "sources": [
    [
      "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/lift-equation/",
      "NASA Glenn：升力方程",
      "NASA Glenn: lift equation"
    ],
    [
      "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/drag-equation/",
      "NASA Glenn：阻力方程與參考面積",
      "NASA Glenn: drag equation and reference area"
    ],
    [
      "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/inclination-effects-on-drag/",
      "NASA Glenn：攻角與流動分離",
      "NASA Glenn: inclination and flow separation"
    ],
    [
      "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/bernoulli-and-newton/",
      "NASA Glenn：壓力、氣流轉向與錯誤等時說法",
      "NASA Glenn: pressure, flow turning and the equal-time fallacy"
    ],
    [
      "https://feed.firstory.me/rss/user/cmdpx4cs200ax01xldg5ta89p",
      "節目官方公開RSS：單集資料（非模型數據）",
      "Official public podcast RSS: episode metadata (not model data)"
    ]
  ],
  "podcast": {
    "ep": "EP.73",
    "title": "〈公開｜重力特輯(3)｜飛天英雄大揭密：為什麼飛機能在天上飛？｜EP.73〉",
    "url": "https://open.firstory.fm/story/cmq393x4u08kh010pawxpdvl8",
    "verified": true,
    "urlVerified": true,
    "provider": "Firstory",
    "firstory": "https://open.firstory.fm/story/cmq393x4u08kh010pawxpdvl8",
    "durationSeconds": 545,
    "durationIso": "PT9M5S",
    "durationLabel": [
      "9 分 5 秒",
      "9 min 5 sec"
    ],
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/LEM_G2uJuIE2M4fIVXuqK.jpg",
    "coverFile": "podcast/ep73.jpg",
    "coverAvailable": true,
    "artworkVerified": true,
    "artworkVisualChecked": true,
    "metadataChecked": "2026-10-08",
    "publishedAt": "Sun, 07 Jun 2026 22:02:15 GMT",
    "evidenceBasis": "Current official public RSS plus exact Firstory story title/image; local official artwork pixels inspected. Audio not played, Apple access not tested."
  },
  "mission": [
    "同攻角、同面積，風速從10變20m/s，力變幾倍？",
    "At the same angle and area, what happens when wind rises from 10 to 20 m/s?"
  ],
  "options": [
    [
      "升力與阻力都是4倍",
      "Both lift and drag become 4×"
    ],
    [
      "升力與阻力都是2倍",
      "Both become 2×"
    ]
  ],
  "answer": 0,
  "reason": [
    "這個模型的係數保持不變，兩個力都和風速平方成正比。風速2倍，平方是4倍；零升力角度的升力仍為0。",
    "With fixed coefficients, both forces scale with wind speed squared: 2² = 4. At zero lift angle, lift remains zero."
  ],
  "limit": [
    "這是固定機翼的力實驗，不模擬整架飛機、重量平衡、飛行高度或安全速度。風由左往右吹，阻力向右，升力垂直風向；負升力向下。空氣密度固定取1.2kg/m³為教學約數；兩個力都使用相同俯視翼面積S（非投影正面積）。對稱示意翼形的係數完全自訂，不是NASA量測、不代表特定翼型。|攻角|0/5/10/15/20/25°的CL大小為0/.4/.8/1.2/.9/.7，CD為.02/.035/.06/.10/.22/.35，點間線性插值；負角CL反號、CD相同。超過15°標示例分離，是真實失速的教學趨勢，不是實機臨界角；失速不等於升力瞬間為零。忽略雷諾數、馬赫數、非定常與有限翼尖效應；不把增加面積後係數不變泛化為真實相似試驗。幾何取固定展弦比6，弦長sqrt(S/6)、翼展sqrt(6S)，側視翼段按同尺度500px/m，厚度為弦長12%的原創示意，不是測試翼型。流線由避開翼段的幾何線及分離側虛線構成，不是流場計算；不推導局部速度、壓力、氣團抵達時刻或守恆流量。零風速不畫流線／力箭頭／分離；箭頭只示力方向，不按大小比例。對照卡以當前相同風速與面積，和同升力方向的±15°示例峰值比較。語言、模式、重選同角度保留設定。 本集Firstory官方頁與公開RSS的集名、時長、封面已核；實際音訊與Apple收聽權限未測。",
    "This fixed-wing force experiment does not model aircraft weight balance, flight altitude or safe speeds. Wind runs left to right, so drag is rightward and lift is perpendicular; negative lift is downward. Air density is a fixed teaching approximation of 1.2 kg/m³. Both forces use the same planform wing area S. All coefficients are invented teaching values, not NASA measurements or a tested airfoil. At absolute angles 0/5/10/15/20/25°, |CL| is 0/.4/.8/1.2/.9/.7 and CD is .02/.035/.06/.10/.22/.35, with linear interpolation. Negative angles reverse CL and keep CD. Beyond 15° illustrates separation, not a real critical angle; stall need not remove all lift. Reynolds number, Mach number, unsteady effects and finite-wing tips are omitted. Coefficients are held fixed when changing area, not a claim about real similarity tests. Geometry keeps aspect ratio 6: chord sqrt(S/6), span sqrt(6S). The original symmetric section is 12% thick and uses 500 px/m; it is not a tested profile. Flow lines are geometric guides avoiding the section, with dashed lines on the separation side. They are not CFD and do not predict local speed, pressure, transit times or conserved flow rate. Zero wind clears flow lines, force arrows and separation. Arrows show direction only. Comparison uses the current wind and area versus the same-sign ±15° teaching peak. Language, mode and reselecting angles preserve settings.  Primary Firstory title, duration and artwork are checked against its official page/public RSS; actual audio and Apple access are untested."
  ],
  "formula": [
    "q＝1/2 ρv²；ρ＝1.2kg/m³（本頁固定約數）\n升力L＝qSCL；阻力D＝qSCD\nv以m/s，S以m²，力以N（牛頓）\nCL、CD無單位，由自訂表線性插值\n同角度與面積，v變2倍，力變4倍\nS為俯視翼面積；1m²＝1m×1m\n負L向下；D沿風向（本頁向右）",
    "q=½ρv²; ρ=1.2 kg/m³ (fixed approximation)\nLift L=qSCL; drag D=qSCD\nv uses m/s, S uses m², forces use N\nCL and CD are dimensionless, interpolated from the teaching table\nSame angle and area: doubling v quadruples force\nS is planform area; 1 m²=1 m×1 m\nNegative L points down; D follows the wind (right here)"
  ],
  "episodeTitle": "〈公開｜重力特輯(3)｜飛天英雄大揭密：為什麼飛機能在天上飛？｜EP.73〉"
};
