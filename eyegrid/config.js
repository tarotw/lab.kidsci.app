window.CONFIG={
  "id": "C11",
  "path": "eyegrid",
  "status": "complete",
  "title": [
    "昆蟲複眼：拍細還是拍快？",
    "Compound eyes: finer or faster?"
  ],
  "question": [
    "小眼變多，就能補回沒拍到的動作嗎？",
    "Can more tiny eyes recover missed motion?"
  ],
  "hint": [
    "按播放：上面在動，下面卻拍到同位置。增加每排小眼，再把每秒取樣調到16，比較哪個能改變動作。",
    "Play: the top moves, but samples repeat. Add cells per row, then raise samples/second to 16. Which changes the motion?"
  ],
  "controls": [
    {
      "key": "facets",
      "label": [
        "每排示例小眼",
        "Sample cells per row"
      ],
      "min": 4,
      "max": 32,
      "step": 4,
      "value": 8,
      "unit": "個/排 / cells/row"
    },
    {
      "key": "rate",
      "label": [
        "每秒取樣幾張",
        "Samples each second"
      ],
      "min": 2,
      "max": 24,
      "step": 2,
      "value": 2,
      "unit": "張/s / samples/s"
    },
    {
      "key": "freq",
      "label": [
        "物體每秒來回",
        "Object oscillations per second"
      ],
      "min": 0,
      "max": 6,
      "step": 0.5,
      "value": 2,
      "unit": "Hz"
    },
    {
      "key": "width",
      "label": [
        "物體寬度",
        "Object width"
      ],
      "min": 0.5,
      "max": 2,
      "step": 0.5,
      "value": 1,
      "unit": "cm"
    },
    {
      "key": "trail",
      "label": [
        "樣本呈現",
        "Sample display"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 0,
      "unit": "",
      "options": [
        [
          "只看當前樣本",
          "Current sample"
        ],
        [
          "疊最近四張",
          "Blend last four"
        ]
      ]
    }
  ],
  "action": [
    "播放",
    "Play"
  ],
  "mission": [
    "增加小眼數，能消除低時間取樣造成的動作混淆嗎？",
    "Can more cells remove motion confusion caused by slow sampling?"
  ],
  "options": [
    [
      "不能；還要改時間取樣",
      "No: temporal sampling must change too"
    ],
    [
      "能；畫面細就一定拍得快",
      "Yes: finer images must be faster"
    ]
  ],
  "answer": 0,
  "reason": [
    "複眼有許多小眼，但空間細節與時間反應都受光學、受器和訊號處理影響。本頁用兩個獨立控制練習取樣；真果蠅還有眼動與受器動態，不是腦內播放一張方格圖。",
    "Compound eyes contain many ommatidia. Spatial detail and temporal responses involve optics, receptors and processing. This lab practices two independent sampling controls; real fly vision also has eye movements and receptor dynamics, rather than an internal movie of square pixels."
  ],
  "comparisons": [
    {
      "label": [
        "小眼8／32，慢取樣",
        "8 / 32 cells, slow sampling"
      ],
      "key": "facets",
      "a": 8,
      "b": 32,
      "base": {
        "rate": 2,
        "freq": 2
      }
    },
    {
      "label": [
        "每秒2／16張",
        "2 / 16 samples per second"
      ],
      "key": "rate",
      "a": 2,
      "b": 16,
      "base": {
        "facets": 32,
        "freq": 2
      }
    },
    {
      "label": [
        "單張／疊四張",
        "One / four blended samples"
      ],
      "key": "trail",
      "a": 0,
      "b": 1,
      "base": {
        "facets": 32,
        "rate": 16,
        "freq": 2
      }
    }
  ],
  "limit": [
    "這是複眼啟發的空間／時間取樣教具，不是真昆蟲視野、神經模型或閃爍融合頻率測試。固定10×4cm平面視窗分為N欄×8列，N=4–32是每排示例小眼數，並非一隻昆蟲的小眼總数或解剖角度。物體中心x(t)=5+3sin(2πft+π/6)cm，y=2cm，物體高1.5cm、寬0.5–2cm，內有四等寬条紋（亮度0.95/0.25交替），背景亮度0.08。每格以精確矩形交疊面積取平均，為理想平面矩形像素，不模擬透鏡、視角、光子噪音或受器分布。離散時間k/Fs，每秒2–24張；每次取樣凍結一張完整空間格圖，之間保留上一張，無插值。N與Fs獨立：同一Fs的樣本時間與物體中心位置不受N影響。觀察2秒用8秒播放，慢4倍；物理時間、最近樣本時刻與保留時間都標示。逐步每次觀察0.0625秒，不保證每次都有新樣本。增加N、改Fs或切疊圖時保留進度，按新設定從相同起點重新取樣整段參考資料；改物體頻率／寬度則重設觀察。疊圖是最近最多四張格圖，以0.4/0.3/0.2/0.1權重重新正規化平均，僅人工示範拖影，不是昆蟲視覺記憶；可用樣本少於四張時明示張數。匹配低頻fa=f−Fs floor(f/Fs+1/2)，其位置正弦在取樣點與真訊號一致；介面顯示|fa|，不是從圖像估計的速度。f=Fs時每次拍在同位置，0Hz匹配不代表真物體停止。取樣界線Fs=2f有相位歧義，不能當作一般充分條件；Fs>2f僅是單頻中心位置訊號的取樣條件，條紋邊緣的亮度含其他頻率，不保證完整影像精確重建。沒有宣稱所有昆蟲都比人類更清楚或反應更快。 取樣以已保存時刻二分查找，只有時刻不晚於觀察時計的張才可用，不加提前容差。對照新增格圖與各自的最近取樣／保留時間，兩組是同一觀察時刻，不代表最近樣本同時。完成後逐步明示從頭再看62.5毫秒；對照完成階段與8顯示秒時計一致。格圖RGB只是固定示意配色，不是校準亮度。",
    "This compound-eye-inspired spatial/temporal sampling tool is not insect perception, a neuron model or a flicker-fusion test. A fixed 10×4cm plane is divided into N columns and eight rows. N=4–32 is illustrative cells per row, not total anatomical ommatidia or viewing angles. Object center x(t)=5+3sin(2πft+π/6)cm, y=2cm; height is 1.5cm, width 0.5–2cm, with four equal stripes alternating brightness 0.95/0.25 against background 0.08. Exact rectangle-overlap areas give each cell average: ideal flat rectangular pixels, without lenses, viewing angles, photon noise or receptor distribution. Samples occur at k/Fs, 2–24 per second. Each freezes a complete spatial grid and holds it until the next sample, without interpolation. N and Fs are independent: N does not alter sample times or center positions. Two physical seconds play over eight seconds, 4× slow; time, last sample and hold age are explicit. Step advances 0.0625 physical seconds and need not capture a new sample. Changing N, Fs or blending preserves progress and resamples the reference history from the same origin under the new settings; object frequency or width changes restart observation. Blending normalizes weights 0.4/0.3/0.2/0.1 over up to four recent grids: an artificial ghost-trail illustration, not insect visual memory. Fewer than four available frames are counted explicitly. The low-frequency match fa=f−Fs floor(f/Fs+1/2) has the same sinusoidal center samples; |fa| is displayed, not image-estimated speed. At f=Fs each sample repeats a location: a 0Hz match does not mean the actual object stops. Fs=2f has phase ambiguity and is not a general sufficient condition. Fs>2f applies only to the single-frequency center-position signal; stripe-edge brightness has other frequencies, so complete image reconstruction is not guaranteed. No universal claim of sharper or faster insect vision relative to humans is made. Stored capture times are searched with no early tolerance: only samples at or before the observation clock are eligible. Comparison grids show each last capture and hold age at a matched observation time, not necessarily equal capture times. After completion, Step explicitly restarts at62.5ms; a completed demo has8 display seconds. Grid RGB is a fixed illustration, not calibrated brightness."
  ],
  "formula": "Field: 10×4 cm, N columns × 8 rows; dx=10/N cm, dy=0.5cm\nObject: x(t)=5+3*sin(2*pi*f*t+pi/6) cm; y=2cm\nObject width=w, height=1.5cm; four stripe intensities .95,.25,.95,.25\nCell intensity=.08+sum((stripeIntensity−.08)*overlapArea/cellArea)\nSamples: t_k=k/Fs; k=0..2*Fs\nHold the latest stored sample with t_k <= current t; binary search, no early tolerance or interpolation\nLow-frequency match fa=f−Fs*floor(f/Fs+1/2)\nsin(2*pi*f*k/Fs+phase)=sin(2*pi*fa*k/Fs+phase)\nNyquist boundary Fs=2*f: phase ambiguity\nFs>2*f applies to center sine only, not all image details\nBlend up to 4 recent grids: weights .4,.3,.2,.1 normalized\nNo biology-calibrated ommatidia count, flicker-fusion frequency or neural model\n2 model seconds over8 display seconds; Step62.5 model milliseconds. Changing cells/rate/blending resamples the reference at retained time.",
  "source": [
    "https://journals.physiology.org/doi/full/10.1152/jn.1997.77.3.1487",
    "Juusola & French (1997) · Moving-object acuity, indexed abstract"
  ],
  "extraSources": [
    [
      "https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/8708ec068ebdea2c4ee2f38fad39fb83_MITRES_6_007S11_lec16.pdf",
      "Oppenheim · MIT OCW, Lecture 16: Sampling"
    ],
    [
      "https://elifesciences.org/articles/26117v1",
      "Juusola et al. (2017) · Fly hyperacute vision, indexed abstract"
    ]
  ],
  "ep": "175",
  "episodeTitle": "活體坦克：昆蟲的奈米黑科技",
  "date": "2026-10-07",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "icon": "🪰",
  "keywords": "昆蟲複眼,小眼,空間解析度,時間取樣,混疊,馬賽克,拖影,compound eye,ommatidia,spatial resolution,temporal sampling,aliasing,mosaic,motion,科學好好聽,science for kids",
  "description": [
    "獨立調每排示例小眼數與每秒取樣張數，讓條紋物體橫移，比較空間格圖、保留畫面、疊圖拖影與時間樣本。",
    "Adjust illustrative cells per row and samples per second independently. Move a striped object and compare spatial grids, held frames, blended trails and temporal samples."
  ],
  "defaults": {
    "facets": 8,
    "rate": 2,
    "freq": 2,
    "width": 1,
    "trail": 0
  },
  "formulaZh": "視窗10×4 cm；N欄×8列，格寬10/N cm，格高0.5 cm。\n物體中心x(t)=5+3sin(2πft+π/6) cm，y=2 cm。\n寬w，高1.5 cm；四條紋亮度0.95/0.25/0.95/0.25，背景0.08。\n每格亮度＝矩形交疊面積的加權平均。\n取樣時刻t_k=k/Fs，k=0..2Fs；只保留t_k≤觀察時刻的最新張，無插值。\n低頻匹配fa=f−Fs floor(f/Fs+1/2)；樣本中心正弦吻合。\nFs=2f有相位歧義；Fs>2f僅適用單頻中心，不保證全部影像重建。\n人工疊最近最多四張，權重4/3/2/1重新正規化，不是昆蟲記憶。\n2模型秒用8秒播放；逐步62.5模型毫秒。小眼／取樣率／疊圖保留觀察時刻，但重取樣整段參考。"
};
