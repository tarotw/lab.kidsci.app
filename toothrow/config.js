window.CONFIG={
  "id": "X03",
  "path": "toothrow",
  "status": "complete",
  "controller": "toothrow.js",
  "extras": [
    "toothrow-model.js",
    "toothrow.css",
    "toothrow.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "title": [
    "食人魚換牙：保持一排工具",
    "Piranha tooth change"
  ],
  "question": [
    "一次換一顆，還是整側一起換？",
    "One tooth at a time, or a whole side?"
  ],
  "hint": [
    "按下一步，看看舊牙離開後哪一側還齊全。",
    "Press Next and see which side stays complete when old teeth leave."
  ],
  "defaults": {
    "schedule": "group",
    "offset": 6,
    "gap": 2
  },
  "controls": [],
  "mission": [
    "新牙藏在牙床裡，就表示現在能用了嗎？",
    "Can a tooth work while it is still buried?"
  ],
  "options": [
    [
      "還不行，要等它接替原來的牙位",
      "Not yet: it must take its place in the row"
    ],
    [
      "可以，所以一定沒有空窗",
      "Yes, so gaps are impossible"
    ]
  ],
  "answer": 0,
  "reason": [
    "準備中的新牙不算工作牙。錯開兩側可能保留另一側，但排程重疊時也會有缺口；本模型不預測真正咬合能力。",
    "A buried replacement is not counted as working. Staggering may preserve the other side, but gaps can overlap. This model does not predict real biting ability."
  ],
  "comparisons": [],
  "ep": "274",
  "episodeTitle": "揭開亞馬遜致命殺手的真相：食人魚的剪刀利齒與魔戒新物種的奇幻相遇",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://onlinelibrary.wiley.com/doi/10.1111/ede.12306",
    "Kolmann等2019：牙列與成組更替",
    "Kolmann et al. 2019: tooth rows and replacement"
  ],
  "extraSources": [
    [
      "https://onlinelibrary.wiley.com/doi/10.1111/jfb.14634",
      "Stuart等2021：缺牙標本與更替",
      "Stuart et al. 2021: missing teeth and replacement"
    ]
  ],
  "description": [
    "跟蹤紅腹食人魚啟發的示意下顎牙位，用成組與假想單顆排程，比較左右錯開、換牙空窗及每顆新舊牙的身份。步數不是實測時間。",
    "Track tooth identities in a schematic lower jaw inspired by the red-bellied piranha. Compare grouped and hypothetical single-tooth schedules, side offsets and gaps using teaching steps, not measured time."
  ],
  "keywords": "食人魚,紅腹食人魚,換牙,牙列,單側更替,牙齒發育,排程,狀態機,piranha,Pygocentrus nattereri,tooth replacement,unilateral replacement,dentition,scheduling,state machine",
  "date": "2026-10-04",
  "icon": "🦷",
  "limit": [
    "以紅腹食人魚Pygocentrus nattereri為研究例子，只展示下顎左右各4個代表牙位，不是完整解剖牙數、比例或上顎。2019研究討論成組更替與牙齒互鎖；2021研究記錄含此物種的缺牙標本，故不保證永無空窗。成組排程是此原理的簡化；單顆排程為假想對照，不是鯊魚模型，不模擬真實互鎖牙是否能獨立拔換。每牙位A是舊牙、B是接班的新牙；預先藏在牙床內，工作前不計可用。沒有模擬礦化、移動軌跡或生物發育速率。左側第4步開始換，右側錯開0–10步；單顆再依序相差2步；卸牙後空窗0–4步。這些都是任意教學排程，不是魚的日數或測量範圍。只追蹤一次更替，24步結束全部B工作，不暗中循環。4/4只代表畫出的牙位都有工作牙；不計咬力、互鎖承載、切割效率、存活率或整口完整性。兩排程相同空窗時缺牙位×步數總和相同，但完整側數與同時缺牙數不同。可以把左右缺口設為重疊，模型會如實顯示兩側皆有缺，這是假想反例，不是實測兩側同時無牙的證據。每秒播放2個教學步，非生理時間。切排程或參數在同一步重算且暫停，不保留上一排程的歷史；語言、探索／對照、選牙與重按目前排程保存進度。官方EP274及延伸EP184metadata待核，不將不同魚類更替方式合併。",
    "Research example: red-bellied piranha, Pygocentrus nattereri. Four representative lower-jaw slots per side are drawn, not the full anatomical tooth count, scale or upper jaw. The 2019 study describes grouped replacement and interlocking; the 2021 study reports missing-tooth specimens including this species, so gaps are not ruled out. Grouped replacement is simplified; single-tooth replacement is a hypothetical comparison, not a shark model or a claim that real interlocked teeth can be exchanged independently. A and B are the old and replacement identities at each slot. Replacements start buried and do not work until ready. Mineralization, eruption trajectories and biological growth rates are not simulated. Left replacement starts at step 4; the right side is offset by 0–10 steps; individual slots add 2 steps each in the single schedule; gaps last 0–4 steps. All timings are chosen teaching units, not measured days or biological ranges. One replacement is followed to step 24 without automatic looping. A complete 4/4 means only the drawn slots are occupied, not a prediction of bite force, load transfer, cutting efficiency, survival or whole-mouth completeness. Equal gap lengths give both schedules equal missing-slot × step totals, while simultaneous gaps and complete-side counts can differ. Overlapping gaps are a hypothetical counterexample, not evidence that both sides were observed toothless together. Playback advances 2 teaching steps per second. Changing parameters or schedule pauses and recalculates the same step; language, mode, selected slot and reselecting the current schedule preserve progress. EP274/184 metadata is unverified; replacement strategies of different fishes are not merged."
  ],
  "formula": "loss=4+(side==R?offset:0)+(single?2*slotIndex:0); ready=loss+gap; old if t<loss; gap if loss<=t<ready; new if t>=ready. Missing-slot steps across t=0..23 sum to8*gap.",
  "formulaText": [
    "卸牙步=4+右側錯開量+（單顆模式：牙位序號0..3 × 2）。\n新牙就位步=卸牙步+空窗步數。\n時間<卸牙：A工作；卸牙≤時間<就位：缺牙；時間≥就位：B工作。\n每側4個代表牙位都有工作牙時才記為齊全。\n0..24的24個步間：缺牙位×步數總計=8×空窗步數。",
    "Loss step=4+right-side offset+(single schedule: slot index 0..3 ×2).\nReady step=loss+gap.\nt<loss: A works; loss≤t<ready: gap; t≥ready: B works.\nA side is complete only when all 4 representative slots work.\nAcross 24 intervals from 0 to 24: missing-slot steps=8×gap."
  ],
  "dateModified": "2026-10-08"
};
