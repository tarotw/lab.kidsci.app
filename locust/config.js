window.CONFIG={
  "id": "F11",
  "path": "locust",
  "status": "complete",
  "controller": "locust.js",
  "extras": [
    "locust-model.js",
    "locust.css",
    "locust.js"
  ],
  "title": [
    "蝗蟲的接觸累積工作台",
    "Locust contact and tendency lab"
  ],
  "question": [
    "擠在一起，會立刻全部變群居嗎？",
    "Does crowding cause an instant group-wide change?"
  ],
  "hint": [
    "加個體，再前進幾拍看痕跡。",
    "Add individuals; advance and inspect their traces."
  ],
  "defaults": {
    "count": 12,
    "threshold": 12,
    "contact": 1,
    "batch": 10
  },
  "controls": [
    {
      "key": "count",
      "label": [
        "區內個體數（調密度）",
        "Individuals (density)"
      ],
      "min": 6,
      "max": 60,
      "step": 1,
      "value": 12,
      "unit": "隻 / individuals",
      "units": [
        "隻",
        "individuals"
      ]
    },
    {
      "key": "threshold",
      "label": [
        "痕跡門檻",
        "Trace threshold"
      ],
      "min": 4,
      "max": 30,
      "step": 1,
      "value": 12,
      "unit": "點 / points",
      "units": [
        "點",
        "points"
      ]
    },
    {
      "key": "batch",
      "label": [
        "每次前進",
        "Advance per press"
      ],
      "min": 1,
      "max": 20,
      "step": 1,
      "value": 10,
      "unit": "拍 / beats",
      "units": [
        "拍",
        "beats"
      ]
    }
  ],
  "action": [
    "前進10拍",
    "Advance 10 beats"
  ],
  "mission": [
    "關掉接觸輸入，圈圈會立刻全部回去嗎？",
    "Does switching touch OFF reset every ring immediately?"
  ],
  "options": [
    [
      "不會，累積痕跡與行為刻度還在",
      "No; traces and tendency remain"
    ],
    [
      "會，關了就立即歸零",
      "Yes; OFF immediately clears everything"
    ]
  ],
  "answer": 0,
  "reason": [
    "關掉的是新的接觸輸入，沒有抹掉既有痕跡。痕跡先慢慢散，未跌到門檻下時刻度甚至可能繼續上升；真蝗蟲不是這組拍數的預報。",
    "OFF stops new toy touch input, not existing traces. Traces fade; tendency can initially keep rising while traces remain above threshold. These beats do not predict real locust transitions."
  ],
  "comparisons": [],
  "ep": "248",
  "episodeTitle": "從「孤僻宅男」到「瘋狂暴徒」：蝗蟲變身真相與科技圍剿戰",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/11274411/",
    "Simpson等2001：沙漠蝗蟲後腿刺激研究摘要",
    "Simpson et al.2001: hind-leg stimulation study abstract"
  ],
  "extraSources": [],
  "limit": [
    "機制背景限定沙漠蝗蟲Schistocerca gregaria；原始研究摘要與圖說已讀，全文未讀。後腿接觸可促成行為轉相，但本頁不模擬神經化學濃度、身體變色或跨世代生理。6×3格活動區、固定批號248、0.6格近距離判準、20／8／45拍時間常數、4–30點門檻、0.25／0.75分段、移動速度／避讓／吸引係數全部自訂未校準。點不是血清素、拍不是真小時、格不是真長度，狀態比例不是轉相機率或防治預報。每小步0.1拍，由同步位置取近鄰數作為接觸輸入率，非碰撞事件次數／實測後腿刺激。關閉只關教具接觸通道，真蝗蟲還有其他線索。本模型達門檻後仍逐漸改變刻度，關閉後可能先續升，再慢慢降。身體顏色固定，圈圈是刻度分段，不當魔法變色。改密度保留仍在場ID狀態，新加入或重新加入個體從0開始；縮小時移出的帳不再列入目前群總帳。改門檻保留狀態、在下一步採用；改步長不改歷史。切語言／模式／同值保持實驗；只有明確重設或到120拍重播才歸零。畫面位置等比例、標記圈放大示意；可用ID選取代替小圓點。數值顯示四捨五入。 固定批號保證同一執行環境重跑可重現；浮點運算與接觸門檻可能使不同瀏覽器的長時間細部路徑不同，不承諾跨瀏覽器逐點相同。 顯示小量以小於一個顯示刻度表示，接近但未等於100%的刻度用下界表示；痕跡帳三欄分別四捨五入，不將圓整值列為精確等式。操作通知隨語言更新並保留。",
    "Mechanistic background concerns desert locusts, Schistocerca gregaria. The original abstract/figure captions were read; full text was not. Hind-leg stimulation can promote behavioral gregarization, but this page does not simulate neurochemical concentrations, body-color change or generational physiology. The 6×3-cell arena, fixed sample 248, 0.6-cell proximity rule, 20/8/45-beat time constants, 4–30-point thresholds, 0.25/0.75 category boundaries and all movement/avoidance/attraction coefficients are uncalibrated teaching choices. Points are not serotonin, beats are not hours and cells are not real lengths. State proportions are not transition probabilities or control forecasts. Each 0.1-beat substep uses simultaneous positions to count neighbors as an input rate, not collision-event counts or measured hind-leg stimulation. OFF disables only this toy channel; real locusts have other cues. Tendency changes gradually above threshold and may initially rise after OFF before declining. Fixed body color; rings are toy categories. Density changes retain remaining IDs; new/readded individuals start at 0. Removed accounts are omitted from the current-group total. Threshold changes apply on the next step, preserving state; changing step size preserves history. Language/view/same values keep the experiment; only explicit reset or replay at 120 starts over. Position scaling is uniform; rings are enlarged markers, and the ID selector replaces tapping tiny points. Display values are rounded. The fixed sample is reproducible within one execution environment; floating-point and contact-boundary differences may change long-run details across browsers. Cross-browser pointwise identity is not guaranteed. Small positive values use a display-resolution upper bound; tendencies close to but below 100% use a lower bound. The three trace-account fields are rounded separately and are not displayed as an exact arithmetic equation. Action notices translate while remaining visible."
  ],
  "formulaText": [
    "活動區6×3格（18格²），個體數N，密度N/18。每0.1拍，同時取所有位置：兩點距離≤0.6格為近鄰；每隻近鄰數n，輸入開時率r=n點/拍，關時r=0。m為痕跡點，dm/dt=r−m/20。每小步m1=20r+(m0−20r)exp(−Δt/20)，累積輸入加rΔt，散去=m0+rΔt−m1。g為0..1行為刻度；m≥門檻時dg/dt=(1−g)/8，否則dg/dt=−g/45；在小步內精確分割門檻穿越，刻度不瞬間跳為1。g<0.25散居傾向、0.25≤g<0.75過渡、g≥0.75群居傾向。移動速度0.12+0.1g格/拍；方向慢轉並依1.5(2g−1)加局部近鄰中心方向，低g避讓、高g吸引；向量抵銷以垂直原方向續行，牆邊位置及方向反彈。近鄰／各隻更新都同步，不依ID逐一覆寫位置。前進只到120拍，越界步長取剩下拍數；每秒自動前進10示意拍。對照另從0開始，用同門檻／同固定起點，比6隻、60隻、60隻在30拍後關輸入。帳只加目前仍在場各ID累積輸入與散去：輸入−散去＝痕跡。",
    "Arena 6×3 cells (18 cell²), N individuals, density N/18. Each 0.1-beat substep uses simultaneous positions: distance≤0.6 cells defines neighbors. A neighbor count n gives rate r=n points/beat when ON, 0 when OFF. Trace m obeys dm/dt=r−m/20. Exact substep: m 1=20 r+(m 0−20 r)exp(−dt/20); input adds r dt; decay=m 0+r dt−m 1. Tendency g lies in 0..1. Above threshold, dg/dt=(1−g)/8; otherwise dg/dt=−g/45. Split any within-step threshold crossing exactly; g never jumps to 1. Categories: g<0.25 solitary tendency; 0.25≤g<0.75 transition; g≥0.75 gregarious tendency. Speed 0.12+0.1 g cells/beat; slow turning plus a 1.5(2 g−1) neighbor-center heading term gives avoidance at low g, attraction at high g. Cancelled headings use the perpendicular baseline; positions and headings reflect at walls. Pair counts and updates are simultaneous. Advance stops at 120; oversized steps use only remaining beats. Auto advances 10 toy beats per real second. Comparisons restart from 0 with the same threshold/sample: 6, 60, 60 OFF after 30. Account current IDs only: cumulative input−decay=remaining trace."
  ],
  "description": [
    "調整蝗蟲示意密度、接觸門檻與觀察時間，直接看接觸痕跡與散居／過渡／群居傾向；繁中英文教具，非真實轉相或防治預報。",
    "Change toy locust density, contact threshold and observation time; inspect touch traces and solitary/transitional/gregarious tendencies. Bilingual teaching model, not a real transition or control forecast."
  ],
  "keywords": "蝗蟲,沙漠蝗蟲,接觸,密度,門檻,行為轉相,散居,群居,記憶,locust,desert locust,Schistocerca gregaria,touch,density,threshold,behavioral gregarization,phase transition,memory",
  "date": "2026-10-04",
  "icon": "🦗",
  "formula": "活動區6×3格（18格²），個體數N，密度N/18。每0.1拍，同時取所有位置：兩點距離≤0.6格為近鄰；每隻近鄰數n，輸入開時率r=n點/拍，關時r=0。m為痕跡點，dm/dt=r−m/20。每小步m1=20r+(m0−20r)exp(−Δt/20)，累積輸入加rΔt，散去=m0+rΔt−m1。g為0..1行為刻度；m≥門檻時dg/dt=(1−g)/8，否則dg/dt=−g/45；在小步內精確分割門檻穿越，刻度不瞬間跳為1。g<0.25散居傾向、0.25≤g<0.75過渡、g≥0.75群居傾向。移動速度0.12+0.1g格/拍；方向慢轉並依1.5(2g−1)加局部近鄰中心方向，低g避讓、高g吸引；向量抵銷以垂直原方向續行，牆邊位置及方向反彈。近鄰／各隻更新都同步，不依ID逐一覆寫位置。前進只到120拍，越界步長取剩下拍數；每秒自動前進10示意拍。對照另從0開始，用同門檻／同固定起點，比6隻、60隻、60隻在30拍後關輸入。帳只加目前仍在場各ID累積輸入與散去：輸入−散去＝痕跡。\nArena 6×3 cells (18 cell²), N individuals, density N/18. Each 0.1-beat substep uses simultaneous positions: distance≤0.6 cells defines neighbors. A neighbor count n gives rate r=n points/beat when ON, 0 when OFF. Trace m obeys dm/dt=r−m/20. Exact substep: m 1=20 r+(m 0−20 r)exp(−dt/20); input adds r dt; decay=m 0+r dt−m 1. Tendency g lies in 0..1. Above threshold, dg/dt=(1−g)/8; otherwise dg/dt=−g/45. Split any within-step threshold crossing exactly; g never jumps to 1. Categories: g<0.25 solitary tendency; 0.25≤g<0.75 transition; g≥0.75 gregarious tendency. Speed 0.12+0.1 g cells/beat; slow turning plus a 1.5(2 g−1) neighbor-center heading term gives avoidance at low g, attraction at high g. Cancelled headings use the perpendicular baseline; positions and headings reflect at walls. Pair counts and updates are simultaneous. Advance stops at 120; oversized steps use only remaining beats. Auto advances 10 toy beats per real second. Comparisons restart from 0 with the same threshold/sample: 6, 60, 60 OFF after 30. Account current IDs only: cumulative input−decay=remaining trace.",
  "dateModified": "2026-10-11"
};
