window.CONFIG={
  "id": "I03",
  "path": "hydjack",
  "status": "complete",
  "topic": "physics",
  "icon": "🔧",
  "title": [
    "液壓千斤頂的能量帳",
    "Hydraulic lift: the energy account"
  ],
  "question": [
    "省下力氣時，手是不是要走更遠？",
    "When you save force, must your hand travel farther?"
  ],
  "defaults": {
    "input": 10,
    "output": 40,
    "travel": 0
  },
  "extras": [
    "hydjack-model.js",
    "hydjack.css",
    "hydjack.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "date": "2026-10-14",
  "description": [
    "改變兩端活塞面積、直接下壓，抬起同一個5公斤重物。比較壓力、力、位移、搬動液體體積與輸入輸出功。",
    "Change both piston areas and press to lift the same 5 kg load. Compare pressure, force, travel, transferred fluid volume and input/output work."
  ],
  "keywords": "液壓千斤頂,帕斯卡原理,活塞,壓力,體積守恆,機械利益,功,能量守恆,hydraulic jack,hydraulic lift,Pascal principle,piston,pressure,volume conservation,mechanical advantage,work,energy",
  "sources": [
    [
      "https://openstax.org/books/university-physics-volume-1/pages/14-3-pascals-principle-and-hydraulics",
      "OpenStax：帕斯卡原理與液壓",
      "OpenStax: Pascal’s principle and hydraulics"
    ],
    [
      "https://feed.firstory.me/rss/user/cmdpx4cs200ax01xldg5ta89p",
      "節目官方公開RSS：單集資料（非模型數據）",
      "Official public podcast RSS: episode metadata (not model data)"
    ]
  ],
  "podcast": {
    "ep": "EP.66",
    "title": "〈公開｜力學特輯(4)｜大力士的秘密武器：滑輪與液壓的神奇力量｜EP.66〉",
    "url": "https://open.firstory.fm/story/cmpceawpr00r801p6evhl3ohb",
    "verified": true,
    "urlVerified": true,
    "provider": "Firstory",
    "firstory": "https://open.firstory.fm/story/cmpceawpr00r801p6evhl3ohb",
    "durationSeconds": 783,
    "durationIso": "PT13M3S",
    "durationLabel": [
      "13 分 3 秒",
      "13 min 3 sec"
    ],
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/BCGLR-hRTLM3nOcoj77af.jpg",
    "coverFile": "podcast/ep66.jpg",
    "coverAvailable": true,
    "artworkVerified": true,
    "artworkVisualChecked": true,
    "metadataChecked": "2026-10-08",
    "publishedAt": "Wed, 20 May 2026 22:02:16 GMT",
    "evidenceBasis": "Current official public RSS plus exact Firstory story title/image; local official artwork pixels inspected. Audio not played, Apple access not tested."
  },
  "mission": [
    "右邊面積是左邊4倍，手壓下10cm，重物升高多少？",
    "With 4× the output area, how far does the load rise when you press 10 cm?"
  ],
  "options": [
    [
      "升高2.5cm",
      "It rises 2.5 cm"
    ],
    [
      "升高40cm",
      "It rises 40 cm"
    ]
  ],
  "answer": 0,
  "reason": [
    "兩端搬動同一體積的液體。輸出面積4倍，移動距離變成1/4；輸出力雖是手施力的4倍，功沒有變多。",
    "Both ends move the same fluid volume. Four times the output area means one-quarter of the travel. Force is multiplied by four, while work stays equal."
  ],
  "limit": [
    "準靜態、密閉不可壓縮液體的連通雙活塞教具，沒有漏損、摩擦、活塞重量、液體自重或慣性；不是可反覆泵壓的真千斤頂，不模擬單向閥、材料強度與安全負荷。重物固定5kg，g=9.81m/s²。輸入面積10–40cm²、輸出20–80cm²；輸入行程0–10cm，輸出最多20cm。兩個矩形活塞前後深度都4cm，SVG剖面寬度為面積/4cm，水平與垂直長度均8px/cm，不以直徑代替面積。管路形狀為示意；箱子與施力箭頭不按力的大小比例。理想模型忽略液體自重，因此兩端相對大氣的壓力P相同；帕斯卡原理本身只說壓力變化傳遞，真實不同高度液體有靜液壓差，不能泛化成全處絕對壓力相同。施力是緩慢抬起或托住此負載所需的平衡力，行程零時仍需要力；功只計同一配置從灰虛線起點抬到目前位置，改面積重新計算、不累計重配裝置的能量。回起點會同時放低重物，沒有暗加閥門鎖住它。對照直接抬同一負載到相同高度。 本集Firstory官方頁與公開RSS的集名、時長、封面已核；實際音訊與Apple收聽權限未測。",
    "A quasi-static pair of connected pistons contains sealed incompressible fluid. Leakage, friction, piston weight, fluid weight and inertia are neglected. This is one reversible stroke, not a pump jack with check valves; material strength and safe working loads are not modeled. The load is fixed at 5 kg; g=9.81 m/s². Input area spans 10–40 cm², output 20–80 cm², and input travel 0–10 cm, giving at most 20 cm output travel. Both rectangular pistons have a 4 cm front-to-back depth; section width is area/4 cm. Horizontal and vertical lengths share 8 px/cm. Pipe shape is schematic; the crate and force arrows do not scale with force. Neglecting fluid weight makes gauge pressure equal at both pistons in this model. Pascal’s principle transmits pressure changes; real height differences produce hydrostatic pressure differences. The displayed effort balances the load during slow lifting or holding, including at zero travel. Work covers a lift from the dashed start at the current configuration; area changes recalculate it and do not account for reconfiguring the apparatus. Returning to the start also lowers the load. Direct lifting uses the same load and final height.  Primary Firstory title, duration and artwork are checked against its official page/public RSS; actual audio and Apple access are untested."
  ],
  "formula": [
    "A入、A出以m²計；1cm²＝0.0001m²\n輸出力F出＝mg＝5×9.81＝49.05N\n忽略液體自重：P＝F入/A入＝F出/A出\nF入＝F出×A入/A出\nA入×Δx入＝A出×Δx出（體積守恆）\nW入＝F入×Δx入＝F出×Δx出＝W出\n1mL＝1cm³；1kPa＝1000Pa；1J＝1N×1m",
    "Areas use m²; 1 cm²=0.0001 m²\nOutput force=mg=5×9.81=49.05 N\nNeglecting fluid weight: P=Fin/Ain=Fout/Aout\nFin=Fout×Ain/Aout\nAin×Δxin=Aout×Δxout (volume conservation)\nWin=Fin×Δxin=Fout×Δxout=Wout\n1 mL=1 cm³; 1 kPa=1000 Pa; 1 J=1 N×1 m"
  ],
  "episodeTitle": "〈公開｜力學特輯(4)｜大力士的秘密武器：滑輪與液壓的神奇力量｜EP.66〉"
};
