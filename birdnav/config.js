window.CONFIG={
  "id": "C12",
  "path": "birdnav",
  "status": "complete",
  "title": [
    "候鳥羅盤：線索一起看",
    "Bird compass: combine the cues"
  ],
  "question": [
    "關掉磁場，另外的線索還能指路嗎？",
    "Can other cues guide the bird when the magnetic cue is off?"
  ],
  "hint": [
    "先飛100公尺，再把磁場份量調到0，重飛比較。接著轉動太陽線索；份量0是關閉，三條都關時沒有方向。",
    "Fly 100m, then set magnetic weight to 0 and fly again. Rotate the sun cue next. Weight 0 means off; all off gives no direction."
  ],
  "controls": [
    {
      "key": "mag",
      "label": [
        "磁場份量（0＝關）",
        "Magnetic weight (0=off)"
      ],
      "min": 0,
      "max": 3,
      "step": 1,
      "value": 1,
      "unit": "份 / parts"
    },
    {
      "key": "magerr",
      "label": [
        "磁場方向偏差",
        "Magnetic cue offset"
      ],
      "min": -180,
      "max": 180,
      "step": 15,
      "value": 45,
      "unit": "°"
    },
    {
      "key": "sun",
      "label": [
        "太陽份量（0＝關）",
        "Sun weight (0=off)"
      ],
      "min": 0,
      "max": 3,
      "step": 1,
      "value": 1,
      "unit": "份 / parts"
    },
    {
      "key": "sunerr",
      "label": [
        "太陽方向偏差",
        "Sun cue offset"
      ],
      "min": -180,
      "max": 180,
      "step": 15,
      "value": 0,
      "unit": "°"
    },
    {
      "key": "land",
      "label": [
        "地標份量（0＝關）",
        "Landmark weight (0=off)"
      ],
      "min": 0,
      "max": 3,
      "step": 1,
      "value": 1,
      "unit": "份 / parts"
    },
    {
      "key": "landerr",
      "label": [
        "地標方向偏差",
        "Landmark cue offset"
      ],
      "min": -180,
      "max": 180,
      "step": 15,
      "value": 0,
      "unit": "°"
    }
  ],
  "action": [
    "飛100公尺",
    "Fly 100m"
  ],
  "mission": [
    "三條線索都關閉，示例鳥會怎麼做？",
    "What does the model bird do with all three cues off?"
  ],
  "options": [
    [
      "沒有方向，留在起點",
      "No direction: stays at the start"
    ],
    [
      "自動找到回巢路線",
      "Automatically finds a route home"
    ]
  ],
  "answer": 0,
  "reason": [
    "磁場、天體與熟悉地標可以提供不同線索，作用因物種與情境而異。這裡先給定已知的回巢基準，再混合三個方向；份量是人工設定，不是量測的鳥腦權重，也不是知道巢座標的GPS。",
    "Magnetic, celestial and familiar-landmark cues can differ in role across species and situations. We provide a known homeward reference, then combine three directions. Weights are teaching settings, not measured neural weights or GPS knowledge of nest coordinates."
  ],
  "comparisons": [
    {
      "label": [
        "偏差磁場關／開",
        "Biased magnetic cue off / on"
      ],
      "key": "mag",
      "a": 0,
      "b": 1,
      "base": {
        "magerr": 45,
        "sun": 1,
        "land": 1,
        "sunerr": 0,
        "landerr": 0
      }
    },
    {
      "label": [
        "加一條太陽線索",
        "Add a sun cue"
      ],
      "key": "sun",
      "a": 0,
      "b": 1,
      "base": {
        "mag": 1,
        "magerr": 90,
        "land": 0,
        "sunerr": 0
      }
    },
    {
      "label": [
        "抵銷時加入地標",
        "Add a landmark to cancelled cues"
      ],
      "key": "land",
      "a": 0,
      "b": 1,
      "base": {
        "mag": 1,
        "magerr": 90,
        "sun": 1,
        "sunerr": -90,
        "landerr": 0
      }
    }
  ],
  "limit": [
    "角度向量加權的教具，不模擬磁受器、神經處理、太陽時鐘校準或所有鳥類的固定線索階層。研究例子包含Catharus鶇、Savannah sparrows和熟悉地區家鴿；家鴿地標結果不泛化為所有候鳥。教學地圖事先給回巢基準正東（0°），起點(0,0)m、示例巢(100,0)m；假設基準來自學習或地圖，不讓磁羅盤本身知道巢座標。每條線索方向是基準加偏差−180°至180°，＋往北轉、−往南轉。三種份量w=0–3；0關閉，1–3是人工相對份量，不是生物可靠度量測。合向量V=Σw(cosθ,sinθ)，方向atan2(Vy,Vx)，一致性|V|/Σw無單位，只描述向量一致程度，不是信心、成功率或正確率。全關或|V|/Σw≤1e−10（浮點抵銷容差）時無方向，不呼叫atan2(0,0)當正東；鳥留起點，不畫合成方向或飛行路徑。有效方向固定不變，不在飛行中偷看巢重新導航；有效組都走100m直線，動畫用5秒示意，不是真鳥速度、遷徙距離或飛行時間。逐步前進5m；參數變更重設路程，換語言／模式或重按目前模式保留進度。圖形使用同一比例，右羅盤為方向圖；同方向箭頭重疊，以顏色／線型及各份量文字辨認。顯示目前路程、橫向偏移和到示例巢的幾何距離；距離不是感官定位算法。到100m只表示走完示例路程，不能稱遷徙成功。A/B有效組同走100m；無方向組明示停0m，不把不同實際路程說成相同終點時刻。未模擬風、地球曲率、星空、地標記憶或校準歷史；量子或磁鐵礦不宣稱是所有物種已確定的磁感受機制。 保存卡列各組完整結局，不隨主地圖重播改寫；有效組100m、無方向組0m且未起飛，不能稱相同實際終點時計。主地圖仍顯示目前路程。完成後逐步明示從頭走5m；同值數字提交保留路程與保存卡。數值四捨五入的−0.0以0.0顯示，不改真正向量／路徑。Åkesson研究Prunella modularis、Acrocephalus schoenobaenus與Erithacus rubecula的指定線索衝突，該情境沒有支持羅盤重新校準，不能說有線索衝突就一定重新校準。 EP219於2026-10-10核對Apple台灣官方標題、公開標示、14分鐘顯示與相同封面；14:06沿用2026-10-07Apple美國官方結構化資料，本輪台灣頁未提供精確秒數。實際音訊未測。",
    "An angle-vector teaching tool, not a magnetic-receptor, neural, sun-clock calibration or universal avian cue-hierarchy model. Research examples include Catharus thrushes, Savannah sparrows and pigeons on familiar terrain; pigeon-landmark findings are not generalized to all migrants. The map supplies a known eastward home reference (0°): start (0,0)m, toy nest (100,0)m. Learning or a map supplies this reference; a magnetic compass does not itself reveal nest coordinates. Each cue direction is the reference plus an offset of −180° to180°; positive turns north, negative turns south. Each weight w=0–3: zero is off, 1–3 are artificial relative parts, not measured reliability. V=Σw(cosθ,sinθ); heading=atan2(Vy,Vx). Coherence |V|/Σw is dimensionless vector agreement, not confidence, success probability or accuracy. With all off or |V|/Σw≤1e−10 (floating-point cancellation tolerance), heading is undefined: do not treat atan2(0,0) as east. The bird stays at the start with no resultant arrow or flight path. A valid heading remains fixed without looking at the nest to steer; all valid trials follow a100m straight path over a five-second illustrative animation, not real bird speed, migration distance or flight time. Step advances5m. Parameter changes restart the path; language/mode switches and repeated current-mode presses retain progress. The map has one common scale; the separate compass depicts direction. Aligned arrows overlap, identified by color, dash pattern and cue-weight labels. Traveled distance, cross-track displacement and current geometric distance to the toy nest are explicit, not a sensory localization algorithm. Completing100m means finishing the example route, not migration success. Valid A/B groups both travel100m; undefined groups explicitly stop at0m rather than implying matched endpoint travel or time. No wind, Earth curvature, stars, landmark memory or calibration history. Quantum or magnetite mechanisms are not presented as settled for all species. Cards retain each full endpoint during main-map replay: valid100m, undefined0m without takeoff, not equal actual finish times. The map still shows current travel. Step explicitly restarts by5m after completion. Same-value numeric submissions preserve travel/cards. Rounded negative zero displays as positive zero without changing vectors/paths. Åkesson tested dunnocks, sedge warblers and European robins; those cue-conflict results did not support recalibration in the tested conditions, so conflict does not universally imply recalibration. EP219 Taiwan official title, public heading, 14-minute display and matching artwork verified on 2026-10-10. Exact14:06 retains the dated2026-10-07 Apple US structured data; the current Taiwan page does not expose exact seconds. Actual audio untested."
  ],
  "formula": "Known home reference: east =0deg; start=(0,0)m, toy nest=(100,0)m\nVx=sum(w_j*cos(offset_j)); Vy=sum(w_j*sin(offset_j))\nW=sum(w_j); coherence=hypot(Vx,Vy)/W if W>0, else0\nUndefined if W=0 or coherence<=1e-10\nOtherwise heading=atan2(Vy,Vx); do not average angles arithmetically\nAt traveled distance s: x=s*cos(heading), y=s*sin(heading)\nCross-track=y; nest distance=hypot(100-x,y)\nValid trials: s=0..100m; undefined: s=0m\nIllustrative animation:5s; Step:5m; no real bird speed or GPS\nCoherence is not probability or biological confidence\nCards retain full endpoints: valid100m / undefined0m, independent of replay.\nNegative zero is normalized only after display rounding; underlying vectors and paths unchanged.",
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/15087541/",
    "Cochran et al. (2004) · Free-flying thrush cue calibration, abstract"
  ],
  "extraSources": [
    [
      "https://pubmed.ncbi.nlm.nih.gov/17452634/",
      "Biro et al. (2007) · Pigeon compass & landmarks, indexed abstract"
    ],
    [
      "https://pubmed.ncbi.nlm.nih.gov/25505150/",
      "Åkesson et al. (2015) · Cue-conflict experiments, indexed abstract"
    ],
    [
      "https://pubmed.ncbi.nlm.nih.gov/16902138/",
      "Muheim et al. (2006) · Savannah sparrow polarized-cue calibration, abstract"
    ]
  ],
  "ep": "219",
  "episodeTitle": "〈公開｜EP.219｜動物的神奇第六感：誰是導航王與超強記憶大師？〉",
  "date": "2026-10-07",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/%E5%85%AC%E9%96%8B-ep-219-%E5%8B%95%E7%89%A9%E7%9A%84%E7%A5%9E%E5%A5%87%E7%AC%AC%E5%85%AD%E6%84%9F-%E8%AA%B0%E6%98%AF%E5%B0%8E%E8%88%AA%E7%8E%8B%E8%88%87%E8%B6%85%E5%BC%B7%E8%A8%98%E6%86%B6%E5%A4%A7%E5%B8%AB/id1812447277?i=1000759124493",
    "episodeId": "1000759124493",
    "source": "https://open.firstory.fm/story/cmnftzs990w8k01z388sz8848",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/67/9b/9b/679b9b5a-9c94-4a43-f0e3-29856a0721bf/mza_14454045675102048113.jpg/1200x1200bf.webp",
    "coverAvailable": true,
    "duration": "14 分 6 秒",
    "durationEn": "14 min 6 sec",
    "durationIso": "PT14M6S",
    "subscribersOnly": false,
    "verifiedOn": "2026-10-07",
    "verificationScope": "Official Taiwan EP219 opened through Computer Use: title/public heading/14minute display and same exact artwork source identity confirmed. Prior Apple US dated2026-10-07 schemaPT14M6S retained for exact14:06; fresh Taiwan rendered page exposes no exact seconds/schema. Actual audio untested; Firstory not retried.",
    "showId": "1812447277",
    "taiwanVerifiedOn": "2026-10-10"
  },
  "icon": "🐦",
  "keywords": "候鳥導航,鳥類羅盤,磁場,太陽羅盤,地標,線索衝突,方向向量,migratory birds,bird compass,magnetic field,sun compass,landmarks,cue conflict,vector weighting,科學好好聽,science for kids",
  "description": [
    "獨立開關與調整磁場、太陽、地標線索，混合方向並讓示例鳥走相同路程；全關或抵銷時留在起點。",
    "Adjust magnetic, sun and landmark cues independently, combine directions and fly a matched toy route. All-off or cancelled cues leave the bird at the start."
  ],
  "defaults": {
    "mag": 1,
    "magerr": 45,
    "sun": 1,
    "sunerr": 0,
    "land": 1,
    "landerr": 0
  },
  "formulaZh": "已知回巢基準＝正東0°；起點(0,0)m，示例巢(100,0)m。\nVx＝Σw cos偏差，Vy＝Σw sin偏差；W＝Σw。\n一致性＝hypot(Vx,Vy)/W；W=0時內部採0。\n全關或一致性≤1e−10數值抵銷容差時，方向不定義。\n否則方向＝atan2(Vy,Vx)，不能直接平均角度。\n已走s公尺：x=s cos方向、y=s sin方向；橫偏=y。\n離巢幾何距離＝hypot(100−x,y)；不是感官定位。\n有效組走0..100 m，無方向組停0 m；一致性不是機率／信心。\n播放5顯示秒、逐步5 m；完成後從頭逐步。\n保存卡為各組完整100 m或0 m，不隨主地圖重播變成途中讀數。\n四捨五入後的−0.0顯示0.0，只改文案，不改向量或路徑。",
  "dateModified": "2026-10-10"
};
