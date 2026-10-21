window.CONFIG={
  "id": "D05",
  "path": "huddle",
  "status": "complete",
  "title": [
    "企鵝抱團：換誰站外面？",
    "Penguin huddle: whose turn outside?"
  ],
  "question": [
    "換個位置，能把散掉的熱變回來嗎？",
    "Can changing places bring lost heat back?"
  ],
  "hint": [
    "先按逐步看1分鐘，選另一隻比較；再開換班，看滿19分鐘的差距。",
    "Step one minute and inspect another bird. Then rotate and view all19 minutes."
  ],
  "controls": [
    {
      "key": "layout",
      "label": [
        "套用19隻起點排列",
        "Apply 19-bird starting arrangement"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 0,
      "unit": "",
      "options": [
        [
          "緊密起點",
          "Compact start"
        ],
        [
          "外圈起點",
          "Ring start"
        ]
      ]
    },
    {
      "key": "rotate",
      "label": [
        "每分鐘示例換班",
        "Example rotation each minute"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 0,
      "unit": "",
      "options": [
        [
          "不換",
          "Stay"
        ],
        [
          "換班",
          "Rotate"
        ]
      ]
    },
    {
      "key": "wind",
      "label": [
        "示例風速",
        "Example wind speed"
      ],
      "min": 0,
      "max": 10,
      "step": 2,
      "value": 4,
      "unit": "m/s"
    },
    {
      "key": "direction",
      "label": [
        "風吹往（0°＝右）",
        "Wind travels toward (0°=right)"
      ],
      "min": 0,
      "max": 360,
      "step": 60,
      "value": 0,
      "unit": "°"
    },
    {
      "key": "bird",
      "label": [
        "選一隻看／移位置",
        "Choose a bird to inspect / move"
      ],
      "min": 1,
      "max": 19,
      "step": 1,
      "value": 1,
      "unit": "號 / ID"
    }
  ],
  "action": [
    "看19分鐘",
    "View 19 min"
  ],
  "mission": [
    "同一組位置開換班，總散熱會？",
    "With the same positions, rotation makes total heat loss…"
  ],
  "options": [
    [
      "仍相同；改的是各隻分配",
      "Stay equal; its distribution changes"
    ],
    [
      "變0；抱團會製造熱",
      "Become zero; huddling creates heat"
    ]
  ],
  "answer": 0,
  "reason": [
    "固定點位與環境時，換班把不同位置的熱損分給不同個體，沒有消除群體散熱。熱由每隻的代謝提供；19分鐘完整示例周期能平均分配，但不是自然行為預測。",
    "At fixed positions and conditions, rotation shares position-dependent losses among identities without eliminating group loss. Metabolism supplies heat; a full19-minute toy cycle shares it evenly, without predicting natural behavior."
  ],
  "comparisons": [
    {
      "label": [
        "不換／每分鐘換班",
        "Stay / rotate each minute"
      ],
      "key": "rotate",
      "a": 0,
      "b": 1,
      "base": {
        "layout": 0,
        "wind": 4,
        "direction": 0,
        "bird": 1
      }
    },
    {
      "label": [
        "緊密／外圈",
        "Compact / outer ring"
      ],
      "key": "layout",
      "a": 0,
      "b": 1,
      "base": {
        "rotate": 0,
        "wind": 4,
        "direction": 0,
        "bird": 1
      }
    },
    {
      "label": [
        "無風／8m/s",
        "No wind / 8m/s"
      ],
      "key": "wind",
      "a": 0,
      "b": 8,
      "base": {
        "layout": 0,
        "rotate": 0,
        "direction": 0,
        "bird": 1
      }
    }
  ],
  "limit": [
    "19隻相同大小的六角鄰接教具，非真實企鵝體溫／群體行為／流場預測。可在半徑3格的37個點位，逐隻移到空的相鄰位置；不能越界或重疊。緊密預設佔半徑2格的19點，外圈預設佔半徑3格的18邊界點加中心1點。每個點位有6側面，相邻有鳥的面遮蔽，其他面算外露；0外露仍有共同熱損，不是零散熱。自訂身體−空氣溫差30K固定，基礎共同熱導0.2W/K，各外露面0.025W/K；風速v=0–10m/s只是示例風輸入，每個迎風外露面額外熱導0.01v×max(0,−n·u) W/K，n為面朝外法線，u為風前進方向。Q_i=30[0.2+Σ外露面(0.025+0.01v×max(0,−n·u))] W，不是CFD，忽略上方風、真毛皮熱阻、太陽、輻射、蒸發及調節；係數均未生物校準。每隻自訂代謝功率8W，熱源不因抱團或換班增加。累積熱損E_i=∫Q_i dt，外露量X_i=∫外露面數 dt，以面·分計：一面露1分鐘=1面·分，非皮膚面積。群體熱量差=19×8×t−ΣE_i，可正可負，不換算真體溫。固定點位下換班只重新分配相同熱損；不消除總散熱，也未計移動耗能。示例每60s把個體編號安排到下一個點位；排序固定且19次走遍19位。身份立即重新排班，不是鳥穿越鄰居，也非自然界按表公平輪流。看滿19分鐘時每隻經過每個點位1分鐘，累積熱損相同；未滿周期不能保證差距消失或一直下降。圖中位置跳變是排班展示。19分鐘用19秒播放，快60倍；逐步1分鐘。選鳥、換語言、換模式不重設進度；更改環境／排列或成功移位置由0重看，移動時採當下每隻所在位置作新起點。所有鳥數與個體ID保持，拒絕移動不重設。熱損差以max(E_i)−min(E_i)表示，非實際溫差；全體數據另列。2026-10-10核對EP228官方單集ID、封面、訂閱者限定與約11分鐘；精確秒數與實際音訊未測。 分鐘邊界只取不晚於當前時間的排班資料，不以容差提前換位。完成畫面時間固定19秒，示範也保存19秒／19模型分；看完後逐步按鈕明示「從頭逐步1分」。空值／非法值與相同環境數值保留自訂排列與進度，明確套用相同編號的預設則可還原；換語言／模式保留來源、公式與全19隻熱帳展開。",
    "A 19-bird hex-neighbor teaching model, not real penguin temperature, behavior or fluid prediction. Move each bird to a vacant adjacent position within a radius3 grid of37 sites; no overlap or out-of-bounds moves. Compact fills the19 radius2 sites; outer ring uses18 radius3 boundary sites plus the center. Each site has6 sides; occupied neighbors shelter shared sides. Zero exposed sides still have common heat loss. Fixed assumed body minus air gap30K, common conductance0.2W/K and0.025W/K per exposed side; illustrative wind v0–10m/s adds0.01v*max(0,-n dot u) W/K to each exposed side, where n is its outward normal and u the wind travel direction. Qi=30*[0.2+sum_exposed(0.025+0.01v*max(0,-n dot u))] W. This is not CFD and omits wind over the top, measured feather resistance, sun, radiation, evaporation and regulation; all coefficients are uncalibrated. Artificial metabolism8W per bird supplies heat without extra heat created by grouping or rotation. Ei=integral Qi dt; Xi=integral exposed-side count dt in side-minutes: one side exposed for one minute=one side-minute, not skin area. Group heat change=19*8*t-sum Ei, signed, without real body-temperature conversion. At fixed sites rotation redistributes the same total loss, without eliminating it or modeling movement effort. Every60s illustrative scheduling moves identities to the next ordered site;19 rounds visit all19 sites. Identity reassignment is instantaneous, not passage through neighbors or a biological promise of scheduled fairness. After19min each identity has spent one minute at every site and losses match. Partial cycles need not eliminate or monotonically reduce differences. Positions jump to show scheduling.19min plays in19s,60x faster; Step1min. Selecting a bird, language or mode preserves progress. Environment/layout changes or successful moves restart at0; moving uses current identity locations as the new starting arrangement. Bird count and identity persist; refused moves preserve progress. Heat-loss spread=max Ei-min Ei, not actual temperature difference; all bird values are listed. The official Taiwan EP228 ID, artwork, subscriber label and rounded11-minute display were verified on2026-10-10; exact seconds and actual audio remain untested. Minute sampling selects only scheduled data no later than the current time, without an early-rotation epsilon. Completion and demos keep19display seconds/19model minutes; completed Step says Restart and advances1model minute from0. Blank/invalid/same condition inputs retain custom positions and progress; explicitly applying the named preset restores the starting arrangement. Language/mode retain opened sources, formulas and all19bird ledgers."
  ],
  "formula": "19 identical birds; hex grid radius3,37 possible sites\nEach occupied adjacent site shelters one side\nAssumed Delta=30K; common conductance0.2W/K\nPer exposed side: 0.025+0.01*v*max(0,-normal dot windDirection) W/K\nQi=Delta*(common conductance+sum exposed conductance) [W]\nMetabolic input=8W per bird; group=152W\nEi=integral Qi dt [J]; Xi=integral exposed-side count dt/60 [side-min]\nGroup thermal change=152*t-sum(Ei), signed\nEvery60s optional identity permutation; fixed geometry and total Q\nFull19min cycle visits all19 sites once; partial cycles not guaranteed equal\n19min over19screen seconds (60x); Step1min\nNo movement cost, true body temperature or natural behavior prediction\nSample only the latest scheduled timestamp not after the current time; no early rotation epsilon\nCompletion clamps to19 display seconds; Step after completion explicitly restarts1model minute\nSame/blank/invalid inputs retain state; applying the named preset restores custom positions\nLanguage/mode retain expanded sources/formulas and all19bird ledgers",
  "source": [
    "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0020260",
    "Zitterbart et al. (2011) · Coordinated huddle movements"
  ],
  "extraSources": [
    [
      "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0050277",
      "Waters, Blanchette & Kim (2012) · Mathematical huddle model"
    ]
  ],
  "ep": "228",
  "episodeTitle": "〈VIP｜EP.228｜穿著燕尾服的戰術大師：企鵝的生存黑科技與暗黑兵法〉",
  "date": "2026-10-07",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/vip-ep-228-%E7%A9%BF%E8%91%97%E7%87%95%E5%B0%BE%E6%9C%8D%E7%9A%84%E6%88%B0%E8%A1%93%E5%A4%A7%E5%B8%AB-%E4%BC%81%E9%B5%9D%E7%9A%84%E7%94%9F%E5%AD%98%E9%BB%91%E7%A7%91%E6%8A%80%E8%88%87%E6%9A%97%E9%BB%91%E5%85%B5%E6%B3%95/id1812447277?i=1000763399630",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource221/v4/01/49/93/014993b9-2f84-b4ef-b2ea-c0767a822927/1be1ae3e-9661-456f-bd1e-6eb5d62ac312.jpg/960x960bb.webp",
    "coverAvailable": true,
    "appleId": "1000763399630",
    "showId": "1812447277",
    "duration": "約11分鐘",
    "durationEn": "About 11 minutes",
    "subscribersOnly": true,
    "access": [
      "訂閱者限定",
      "Subscribers only"
    ],
    "reviewed": "2026-10-10",
    "firstory": "https://open.firstory.me/story/cmocq9mo50uz201wy3rbpa9pr",
    "verificationScope": "Taiwan EP228 discovery reused from D04 current official observations. D05 four-size/bilingual official cover, rounded11-minute/subscriber display and actual CTA separately verified2026-10-10; exact seconds/audio untested."
  },
  "icon": "🐧",
  "keywords": "企鵝抱團,帝王企鵝,外緣暴露,輪換,熱損失,代謝,鄰接圖,能量守恆,penguin huddle,emperor penguin,exposure,rotation,heat loss,metabolism,neighbor graph,energy balance,科學好好聽,science for kids",
  "description": [
    "安排19隻企鵝的位置、風向與示例換班，比較個體累積暴露與群體熱帳；抱團不是熱源。",
    "Arrange19 penguins, wind and illustrative rotation. Compare individual exposure and the group heat ledger; grouping creates no heat."
  ],
  "defaults": {
    "layout": 0,
    "rotate": 0,
    "wind": 4,
    "direction": 0,
    "bird": 1
  },
  "formulaZh": "19隻固定ID；半徑3格六角網，37個可用點\n每點6個相鄰方向；相鄰有鳥的側面遮蔽，否則外露\n示例溫差Δ＝30K；每隻共同熱導0.2W/K\n每外露面熱導＝0.025+0.01v×max(0,−n·u) W/K\nv為示例風速（m/s），n為向外面法線，u為風吹往的單位向量\n每隻此刻散熱Qi＝Δ×(共同熱導＋各外露面熱導之和)，單位W＝J/s\n每隻代謝輸入8W；全體19×8＝152W\n各ID累積熱損Ei＝∫Qi dt，單位J；1kJ＝1000J\n累積外露Xi＝∫外露面數 dt/60，單位面·分\n群體熱量差＝152t−ΣEi，可正可負；不換算真體溫\n不換位：各ID一直在原位置；換班：每60模型秒重新指定下一個點位\n只取時間不晚於現在的排班資料，分鐘之前不提前換位\n固定位置與環境，換班不改群體總熱流\n19分鐘完整周期：每ID各點位待1分鐘，熱損相同；未完整不保證差距下降\n19模型分鐘＝19畫面秒（快60倍）；逐步前進1模型分鐘\n看完後「從頭逐步1分」明示重來，或按再做一次\n成功移位採每ID當下位置作新起點，從0開始；占用／越界保留實驗\n自訂排列明確套用相同編號預設亦可還原；同值／空值／非法值不清掉自訂\n無自然排班、真流場、移動耗能或生物校準",
  "dateModified": "2026-10-10"
};
