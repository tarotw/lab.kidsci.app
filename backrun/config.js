window.CONFIG={
  "id": "X01",
  "path": "backrun",
  "status": "complete",
  "controller": "backrun.js",
  "extras": [
    "backrun-model.js",
    "backrun.css",
    "backrun.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "title": [
    "獵豹的脊椎與步幅",
    "Cheetah backs and strides"
  ],
  "question": [
    "背部會彎，腳印一定更遠嗎？",
    "Does more back bending always make a longer stride?"
  ],
  "hint": [
    "按逐格，看金圈腳點踩住同一條地線。",
    "Step a frame: watch the gold foot stay on its ground mark."
  ],
  "defaults": {
    "amplitude": 30,
    "frequency": 2
  },
  "controls": [],
  "mission": [
    "把頻率加倍，腳印間距也會加倍嗎？",
    "If frequency doubles, does the footprint spacing double?"
  ],
  "options": [
    [
      "不會，同一幾何的步幅不變",
      "No: the same geometry keeps the stride"
    ],
    [
      "會，每條腿都會變長",
      "Yes: every leg becomes longer"
    ]
  ],
  "answer": 0,
  "reason": [
    "頻率是每秒重複幾次；同一幅度的落腳幾何不變。本教具的平均前進率＝步幅×頻率，不是真實獵豹極速。",
    "Frequency counts cycles per second; footprint geometry stays the same at a given amplitude. This toy’s mean travel rate is stride × frequency, not a real cheetah’s top speed."
  ],
  "comparisons": [],
  "ep": "c5",
  "episodeTitle": "〈VIP.5｜新年悄悄話特輯｜地球極速奧運會：誰才是披著毛皮的法拉利與生物界的戰鬥機？〉",
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/vip-5-%E6%96%B0%E5%B9%B4%E6%82%84%E6%82%84%E8%A9%B1%E7%89%B9%E8%BC%AF-%E5%9C%B0%E7%90%83%E6%A5%B5%E9%80%9F%E5%A5%A7%E9%81%8B%E6%9C%83-%E8%AA%B0%E6%89%8D%E6%98%AF%E6%8A%AB%E8%91%97%E6%AF%9B%E7%9A%AE%E7%9A%84%E6%B3%95%E6%8B%89%E5%88%A9%E8%88%87%E7%94%9F%E7%89%A9%E7%95%8C%E7%9A%84%E6%88%B0%E9%AC%A5%E6%A9%9F/id1812447277?i=1000708141872&uo=4",
    "verified": true,
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/FOZdcGcuKhBwxzKfEjD2X.jpg",
    "duration": "16 分 12 秒",
    "appleId": "1000708141872",
    "reviewed": "2026-10-06",
    "durationEn": "16 min 12 sec",
    "durationIso": "PT16M12S",
    "reconciled": "2026-10-08",
    "durationSeconds": 972,
    "evidenceBasis": "Saved original official Apple/Firstory or show-card evidence plus 2026-10-08 public RSS title/duration/artwork crosscheck; no new Apple page/audio/entitlement test.",
    "metadataInheritedFrom": "A01",
    "coverAvailable": true,
    "artworkVisualChecked": true
  },
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/22723482/",
    "Hudson等2012：獵豹與靈緹步態（摘要）",
    "Hudson et al. 2012: cheetah/greyhound gait (abstract)"
  ],
  "extraSources": [
    [
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC9049215/",
      "2022脊椎模型研究（搜尋摘要與段落）",
      "2022 spinal model study (search abstract and passages)"
    ]
  ],
  "description": [
    "調整脊椎彎曲幅度與步態頻率，逐格追蹤四隻腳的接觸、模型質心和同腳步幅；以固定連桿和關節限位比較固定背與可彎背。",
    "Adjust spine-bending amplitude and gait frequency, track four feet and the toy center of mass frame by frame, and compare fixed and bending backs with fixed-length links and joint limits."
  ],
  "keywords": "獵豹,脊椎,步幅,步頻,旋轉飛奔,步態,連桿,質心,cheetah,spine,stride length,stride frequency,gallop,kinematics,center of mass",
  "date": "2026-10-04",
  "icon": "🐆",
  "limit": [
    "這是自訂二維連桿幾何，不求解地面反力、摩擦、彈性能、肌肉功率或動態平衡；不能推算真速度或把脊椎當唯一速度來源。長度單位是模型格，1格不代表1公尺。兩段背各0.6格；四腿各兩段0.5格，頭尾裝飾及腿不計質量，金點質心僅為兩段均勻等質量背桿的質心。背部總彎角以50°為中心，要求半幅0–80°、實際限於50°，因此總彎角在0–100°；這是教具限位，不是量測獵豹角度。前腳F1、F2在週期0、0.06落地；後腳H1、H2在0.5、0.56落地；各接觸0.2週期。前後各兩腳並非同步，留有兩段騰空。順序與時長是示意排程，不是動作捕捉。身體水平等速，端點高度0.65格，背桿轉動帶動質心上下；不假裝符合重力拋體。每腳落地於當時髖／肩前方0.25格，整段接觸固定世界座標；離地後以平滑曲線移至下一腳印。步幅採讓四腳接觸期間皆不超出±0.25格前後掃幅的共同最大排程值；不是任意加速度獎勵，也不是自然最優步態。幅度和步幅不保證單調，50°以上受限結果相同。頻率0.5–3 Hz只是示例，每Hz＝每秒一完整週期，平均前進率＝步幅×頻率。播放慢4倍，120格＝3週期，每格1/40週期。改幅度或進度會在相同格重算幾何並暫停；腳印變化是換假設，不是跑動中腳滑。只調頻率不改位置。兩種背用同一頻率、相同進度和相同畫面比例，鏡頭跟著固定背參照質心，地面會向左移動。下一腳印為預定位置，不冒充已發生。 主題單集集名、直連與時長已用同集原官方證據及公开RSS核對；實際音訊與Apple權限未測。",
    "A chosen 2D linkage, not a solution for ground forces, friction, elastic energy, muscle power or dynamic balance. It cannot predict real speed or make the spine the only cause of speed. Units are model grid units, not metres. Two trunk links are each 0.6 units; each of four legs has two 0.5-unit links. Head, tail and legs are massless decorations for the COM calculation; the gold COM is for the two equal, uniform trunk rods only. Total back bend is centered at 50 degrees; requested amplitude 0–80 degrees is capped at 50, keeping total bend within 0–100 degrees. These are toy limits, not measured cheetah angles. Forefeet F1/F2 touch down at cycle phases 0/0.06; hindfeet H1/H2 at 0.5/0.56. Each stance lasts 0.2 cycles. The four feet are staggered with two flight gaps; timing is chosen, not motion capture. Horizontal trunk travel is uniform and limb roots stay 0.65 units high; changing rod angles moves trunk COM vertically, without claiming ballistic dynamics. Each foot lands 0.25 units ahead of its root and remains at one world coordinate during stance, then follows a smooth swing to its next print. Stride is the largest common schedule compatible with all four stance sweeps staying within ±0.25 units. It is not a biological optimum or an added speed bonus. Stride need not increase monotonically with amplitude; requests above 50 degrees give identical geometry. Frequency 0.5–3 Hz is a chosen range: one Hz means one complete cycle per second. Mean travel rate equals stride × frequency. Playback is four times slower; 120 frames span three cycles, one frame is 1/40 cycle. Amplitude or frame changes pause and recompute geometry at that frame; changing hypotheses is not in-run foot slipping. Frequency alone preserves positions. Both backs share phase, frequency and drawing scale; the camera follows the fixed-back reference COM, so ground marks move left. The next print is planned, not already made. c5 is the topic; EP63 supplies force background only.  Primary title, direct link and duration use the same episode’s saved official evidence plus public RSS; audio and Apple access remain untested."
  ],
  "formula": "theta=(25−min(amplitude,50)/2*cos(2πu))°; hF=.6*cos(theta), hH=−hF. Stride=min_i[(.5−h_i(touchdown+.2)+h_i(touchdown))/.2]. COM=(u*stride,.65+.3*sin(theta)); mean rate=stride*frequency. Foot stance: x=stride*(cycle+offset)+h(offset)+.25, y=0.",
  "formulaText": [
    "背桿各0.6格；每段腿0.5格，長度固定。\nθ＝25°−實際半幅/2×cos(2πu)；總彎角＝2θ。\n前根x偏移hF＝0.6cosθ；後根hH＝−0.6cosθ。\n各腳允許步幅＝[0.5−h(落地相位+0.2)+h(落地相位)]/0.2。\n共同步幅S＝四腳允許值的最小值。\n每腳腳印在接觸期固定，兩次腳印相差S格。\n質心＝(uS,0.65+0.3sinθ)，只算兩段均勻背桿。\n平均前進率＝S×f；f的Hz＝週期/秒。\n所有角度／尺寸／時序是自訂示例，無動力學求解。",
    "Trunk links: 0.6 units each. Leg links: 0.5 each, fixed length.\nθ = 25° − appliedAmplitude/2 × cos(2πu); total bend = 2θ.\nFore root offset hF = 0.6 cosθ; hind hH = −0.6 cosθ.\nEach stance allows S_i = [0.5 − h(offset+0.2) + h(offset)]/0.2.\nCommon stride S = min(S_i) across four feet.\nA foot stays at one world x during stance; its next print is S units away.\nTrunk COM = (uS, 0.65+0.3 sinθ), counting two uniform rods only.\nMean travel rate = S × f; Hz means cycles per second.\nAll angles, dimensions and timings are chosen; no dynamics solver."
  ],
  "dateModified": "2026-10-08"
};
