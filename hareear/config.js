window.CONFIG={
  "id": "D03",
  "path": "hareear",
  "status": "complete",
  "title": [
    "傑克兔大耳：散熱也有代價",
    "Jackrabbit ears: cooling has a cost"
  ],
  "question": [
    "耳朵大一點，冷暖環境都更好嗎？",
    "Are larger ears better in both cold and hot conditions?"
  ],
  "hint": [
    "先把溫差調30，看大耳送走多少熱；再調血流25比較。",
    "Set gap to 30. Compare ear heat, then set blood to 25."
  ],
  "controls": [
    {
      "key": "diff",
      "label": [
        "身體比空氣暖幾度？",
        "Body minus air temperature"
      ],
      "min": -10,
      "max": 35,
      "step": 5,
      "value": 10,
      "unit": "°C"
    },
    {
      "key": "flow",
      "label": [
        "血流熱路（0＝關）",
        "Blood heat route (0=off)"
      ],
      "min": 0,
      "max": 100,
      "step": 25,
      "value": 100,
      "unit": "%"
    },
    {
      "key": "area",
      "label": [
        "B兔雙耳有效總面積",
        "B: total effective ear area"
      ],
      "min": 200,
      "max": 600,
      "step": 100,
      "value": 400,
      "unit": "cm²"
    },
    {
      "key": "evap",
      "label": [
        "獨立呼吸蒸發水量",
        "Independent respiratory evaporation"
      ],
      "min": 0,
      "max": 100,
      "step": 25,
      "value": 0,
      "unit": "mg/min"
    }
  ],
  "action": [
    "即時比較",
    "Live comparison"
  ],
  "mission": [
    "其他條件不變，只把B兔耳朵加大，呼吸蒸發水量會？",
    "With other settings fixed, larger B ears make respiratory water…"
  ],
  "options": [
    [
      "不變；水量是另一條路",
      "Stay the same: it is a separate route"
    ],
    [
      "自動增加一倍",
      "Automatically double"
    ]
  ],
  "answer": 0,
  "reason": [
    "耳朵與乾空氣交換熱，不等於失水。呼吸蒸發另有用水與帶走熱的帳；大耳在冷空氣中也可能增加需要補回的熱。",
    "Dry ear heat exchange is not water loss. Respiratory evaporation has a separate water and heat ledger; larger ears in cold air can also increase heat that needs replacing."
  ],
  "comparisons": [
    {
      "label": [
        "溫差10／30°C",
        "Temperature gap 10 / 30°C"
      ],
      "key": "diff",
      "a": 10,
      "b": 30,
      "base": {
        "flow": 100,
        "area": 400,
        "evap": 0
      }
    },
    {
      "label": [
        "血路關／開",
        "Blood route off / on"
      ],
      "key": "flow",
      "a": 0,
      "b": 100,
      "base": {
        "diff": 10,
        "area": 400,
        "evap": 0
      }
    },
    {
      "label": [
        "呼吸蒸發0／100",
        "Evaporation 0 / 100 mg/min"
      ],
      "key": "evap",
      "a": 0,
      "b": 100,
      "base": {
        "diff": 10,
        "flow": 100,
        "area": 400
      }
    }
  ],
  "limit": [
    "乾燥、遮陰的穩定熱路教具，未與真兔量測校準。A兔雙耳總有效換熱面積固定200cm²，B可調200–600cm²，包含所有參與交換的耳表面，不是真實解剖面積。圖中耳朵依面積平方根等比縮放，兩兔身體相同；B=200時明示同大。Δ=身體−空氣溫度；正值向外、負值吸熱。兩兔共用同一總血路熱導G=0.3×血流/100 W/K，百分比不是ml/min；h=10 W/(m²K)為固定自訂對流係數。H=hA，耳面相對空氣溫差=GΔ/(G+H)，Q=GHΔ/(G+H)，穩定時血路與耳對流熱流相等。G=0時穩定耳面等於空氣，Q=0；此題不含初始耳面存熱。較大耳朵增加交換，但血路限制使它不一定與面積成正比。固定身體與空氣溫差由外部條件維持，不預測真體溫、生存或代謝。另設呼吸蒸發水量0–100mg/min，兩兔相同且與耳面積／血路無關。潛熱採約2.4MJ/kg（NIST水表40°C約2406kJ/kg的圓整示例），蒸發功率=0.04×水量W；10分鐘蒸發水=10×水量mg，體積用1g≈1mL近似。這是已蒸發水的量，不是呼吸次數，也不是汗或耳朵漏水，不由耳朵大小推算。維持此假想熱帳需補熱=max(Q+蒸發功率,0)；若為負，明示仍有吸熱=max(−Q−蒸發功率,0)，不是已解決過熱。只核對這兩條路，忽略全身其他交換、輻射、太陽、風、濕度、活動與生理調節；固定蒸發量即使不符合實際環境也只是獨立條件，不表示兔總能做到。大耳可幫助散熱，也可在冷環境增加保暖熱成本；不能把所有大耳的功能、演化原因或聽力歸為本模型。即時比較無播放時間；10分鐘僅換算獨立蒸發水量。熱流條固定−7至7W，不暗自放大；負值向左吸熱、正值向右散熱。A/B示範各自仍含短／長耳兩兔，只改指定一個條件。2026-10-10已從Apple台灣官方集數搜尋與單集頁核對EP235連結、封面、訂閱者限定及約10分鐘；不使用P0D或通用免費schema推定時長／權益，音訊未測。 同值、空值、非法值輸入保留已保存對照；語言／模式保留來源與公式展開。對照卡的條件A/B各自包含兔A/B，不是把兩隻兔當兩個設定。穩定熱帳沒有等待到某時刻；十分鐘只換算呼吸水，不模擬累積體溫。",
    "A dry, shaded steady thermal-route teaching model, not calibrated to rabbits. Rabbit A has fixed total effective ear exchange area200cm²; B200–600cm² includes all exchanging ear surfaces, not measured anatomy. Ears scale by the square root of area, with equal bodies; B200 is labeled equal-size. Delta=body minus air temperature; positive means outward heat, negative heat gain. Both share total blood conductance G=0.3*blood setting/100 W/K; percent is not ml/min. Fixed artificial h=10 W/(m²K); H=hA. Ear minus air=G*delta/(G+H); Q=G*H*delta/(G+H). Steady blood and ear convection heat flows match. At G0 the steady ear equals air and Q0, without initial stored ear heat. Blood resistance limits area scaling. External reservoirs maintain the temperature difference; this does not predict real body temperature, survival or metabolism. Separately set respiratory evaporation0–100mg/min equally for both rabbits, independent of ear area or blood route. Approximate latent heat2.4MJ/kg rounds the NIST water table value around2406kJ/kg at40°C. Evaporation power=0.04*rate W; ten-minute evaporated water=10*rate mg, using1g≈1mL for volume. This is evaporated water, not breathing frequency, sweat or water leaking from ears; ear size does not set it. Heat to replace through these routes=max(Q+evaporation power,0); remaining heat gain=max(-Q-evaporation power,0) is shown, not treated as solved overheating. Other body exchange, radiation, sun, wind, humidity, activity and physiological regulation are omitted. A fixed evaporation rate is an independent condition, not a promise it is achievable in any environment. Large ears can remove heat or raise cold-condition heat costs, without explaining all ear functions, evolution or hearing. Live comparison has no playback time; ten minutes only converts separate evaporation water. Heat bars use fixed−7..7W, negative left inward and positive right outward. Each A/B demo contains both ear sizes and changes one specified condition. On 2026-10-10 the official Taiwan Apple show search and EP235 page confirmed its link, cover, subscriber access and rounded 10-minute duration. P0D and generic free-offer schema are not duration/access evidence; actual audio untested. Same/blank/invalid input retains saved comparisons; language/mode retains opened sources/formulas. Condition A/B cards each contain Rabbit A/B. Steady balances have no waiting time; ten minutes only converts respiratory water, without integrated body temperature."
  ],
  "formula": "Ashort=200cm²; Along=200–600cm²; A[m²]=A[cm²]*1e-4\nG=0.3*(blood setting/100) W/K; h=10 W/(m²K); H=h*A\nDelta=Tbody−Tair [°C or K difference]\nTear−Tair=G*Delta/(G+H)\nQblood=G*(Delta−(Tear−Tair)); Qear=H*(Tear−Tair)\nQ=G*H*Delta/(G+H) [W], signed\nRespiratory evaporation m=0–100mg/min, independent\nLatent heat≈2.4MJ/kg; evaporation P=2.4e6*m*1e-6/60=0.04*m W\nWater in10min=10*m mg≈0.01*m mL (1g≈1mL)\nNet outward heat=Q+P; replacement=max(Q+P,0); remaining gain=max(-(Q+P),0)\nFixed heat-bar scale−7..7W; live steady comparison, no time integration\nAssumed constants, not rabbit calibration or whole-body heat budget",
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/982027/",
    "Hill & Veghte (1976) · Jackrabbit pinna thermoregulation, abstract"
  ],
  "extraSources": [
    [
      "https://pubmed.ncbi.nlm.nih.gov/5134209/",
      "Wathen, Mitchell & Porter (1971) · Ear convection, indexed abstract"
    ],
    [
      "https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nistir5078.pdf",
      "NISTIR5078 · Water vaporization enthalpy, table1 p4"
    ]
  ],
  "ep": "235",
  "episodeTitle": "〈VIP｜沙漠裡的綠色巨人：索諾蘭的生存奇蹟｜EP.235〉",
  "date": "2026-10-07",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/vip-%E6%B2%99%E6%BC%A0%E8%A3%A1%E7%9A%84%E7%B6%A0%E8%89%B2%E5%B7%A8%E4%BA%BA-%E7%B4%A2%E8%AB%BE%E8%98%AD%E7%9A%84%E7%94%9F%E5%AD%98%E5%A5%87%E8%B9%9F-ep-235/id1812447277?i=1000774559488",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource211/v4/3c/d1/e4/3cd1e460-cc83-c5a0-7343-e1124a3052db/ad7f3596-b6d0-4ffe-a675-aa74bcdfba40.jpg/960x960bb.webp",
    "coverAvailable": true,
    "appleId": "1000774559488",
    "showId": "1812447277",
    "duration": "約10分鐘",
    "durationEn": "About 10 minutes",
    "subscribersOnly": true,
    "access": [
      "訂閱者限定",
      "Subscribers only"
    ],
    "reviewed": "2026-10-10",
    "firstory": "https://open.firstory.me/story/cmqxms1fu035w01x4eiu3b42f",
    "verificationScope": "Actual Taiwan official show search235 and episode page: title, episode ID, artwork, rounded10-minute duration and subscriber label. Reject P0D and generic free offer schema. No exact seconds or actual audio verified."
  },
  "icon": "🐇",
  "keywords": "傑克兔,大耳朵,沙漠,散熱,保暖,血流,對流,呼吸蒸發,水分,熱阻,jackrabbit,large ears,desert,thermoregulation,blood flow,convection,respiratory evaporation,water,thermal resistance,科學好好聽,science for kids",
  "description": [
    "比較長短耳兔的乾燥熱交換與冷環境補熱成本，獨立調呼吸蒸發用水；熱空氣可反向送熱。",
    "Compare dry heat exchange and cold-condition replacement costs for two ear sizes. Respiratory evaporation uses separate water; hot air can reverse heat flow."
  ],
  "defaults": {
    "diff": 10,
    "flow": 100,
    "area": 400,
    "evap": 0
  },
  "formulaZh": "兔A有效總耳面積200cm²；兔B200–600cm²\n面積換算：A(m²)＝A(cm²)×0.0001\n血路熱導G＝0.3×血流設定/100（W/K）\n固定對流h＝10W/(m²·K)；耳對流熱導H＝hA（W/K）\n溫差Δ＝身體−空氣（°C溫差＝K溫差）\n耳面−空氣＝GΔ/(G+H)\n血路熱流＝G[Δ−(耳面−空氣)]；耳外熱流＝H(耳面−空氣)\n穩定串聯熱流Q＝GHΔ/(G+H)（W）；負值向內吸熱\n呼吸蒸發水率m＝0–100mg/min，獨立於耳面積與血路\n假設潛熱約2.4MJ/kg；蒸發功率P＝2.4×10⁶×m×10⁻⁶/60＝0.04m W\n10分鐘水量＝10m mg≈0.01m mL（1g≈1mL）\n兩路淨向外熱流＝Q+P\n需補熱＝max(Q+P,0)；仍有吸熱＝max[−(Q+P),0]\n1W＝每秒1J；固定耳熱流尺−7..7W\n條件A/B各包含兔A/B；無播放或累積體溫，10分鐘只換算呼吸水\n常數為教學假設，未校準真兔／全身熱帳",
  "dateModified": "2026-10-10"
};
