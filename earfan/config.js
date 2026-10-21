window.CONFIG={
  "id": "D02",
  "path": "earfan",
  "status": "complete",
  "title": [
    "大象搧耳：熱往哪裡走？",
    "Elephant ears: where does heat go?"
  ],
  "question": [
    "搧得更快，一定能帶走更多熱嗎？",
    "Does faster flapping always remove more heat?"
  ],
  "hint": [
    "先看10分鐘，再把搧動調到0比較。把氣溫改成45°C，看熱箭頭會不會反向；血流0是關閉核心到耳的熱路。",
    "View 10 minutes, then set flapping to 0 and compare. Set air to 45°C and watch for reversed heat arrows. Blood 0 closes the core–ear thermal route."
  ],
  "controls": [
    {
      "key": "freq",
      "label": [
        "搧動頻率（0＝不搧）",
        "Flapping frequency (0=still)"
      ],
      "min": 0,
      "max": 2,
      "step": 0.25,
      "value": 1,
      "unit": "Hz"
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
        "總有效耳面積",
        "Total effective ear area"
      ],
      "min": 0.5,
      "max": 2.5,
      "step": 0.5,
      "value": 1,
      "unit": "m²"
    },
    {
      "key": "air",
      "label": [
        "空氣溫度",
        "Air temperature"
      ],
      "min": 10,
      "max": 45,
      "step": 1,
      "value": 25,
      "unit": "°C"
    }
  ],
  "action": [
    "看10分鐘",
    "View 10 min"
  ],
  "mission": [
    "空氣比耳面更熱時，加快搧耳一定散熱嗎？",
    "If air is warmer than the ear, does faster flapping always cool it?"
  ],
  "options": [
    [
      "不一定；熱可從空氣進入耳",
      "No: heat can enter the ear from air"
    ],
    [
      "一定；搧動只有好處沒有成本",
      "Yes: flapping has only benefits and no cost"
    ]
  ],
  "answer": 0,
  "reason": [
    "血流提供核心與耳面的熱路，耳面再與空氣交換熱。方向由溫差決定，搧動增加交換速度也消耗能量；這個乾燥示例不含蒸發降溫或其他調節。",
    "Blood provides a thermal route between core and ear, and the ear exchanges heat with air. Temperature difference determines direction. Flapping increases exchange and costs energy; this dry example excludes evaporative cooling and other regulation."
  ],
  "comparisons": [
    {
      "label": [
        "常溫：不搧／搧動",
        "Cool air: still / flap"
      ],
      "key": "freq",
      "a": 0,
      "b": 1,
      "base": {
        "air": 25,
        "flow": 100,
        "area": 1
      }
    },
    {
      "label": [
        "熱空氣：不搧／搧動",
        "Hot air: still / flap"
      ],
      "key": "freq",
      "a": 0,
      "b": 1,
      "base": {
        "air": 45,
        "flow": 100,
        "area": 1
      }
    },
    {
      "label": [
        "血流熱路關／開",
        "Blood heat route off / on"
      ],
      "key": "flow",
      "a": 0,
      "b": 100,
      "base": {
        "air": 25,
        "freq": 1,
        "area": 1
      }
    }
  ],
  "limit": [
    "乾燥、遮陰的雙熱庫教具，未與真大象量測校準。主畫面只顯示熱流與相對起點的能量，不預測真體溫。假想初始核心38°C、耳面30°C，固定空氣10–45°C；這些是數值起點。A=0.5–2.5m²是雙耳總有效換熱面積，不是單耳實測尺寸；C核心=200000J/K、C耳=2000A J/K，均為自訂熱容量。血流0–100%只代表等效熱導G=30×血流/100 W/K，非ml/min；0關閉此熱路徑。搧動f=0–2Hz，對流h=5+8√f W/(m²K)，5為自然對流示例，0Hz仍交換熱。P=2Af² W是自訂搧動供能成本，並保守假設全部成為核心熱；不是量測肌肉效率或真實功率。Q血=G(T核心−T耳)，Q外=hA(T耳−T空氣)；正Q血為核心向耳、正Q外向空氣，負值反向。兩熱庫以固定步長1s RK4計算600s：C核心dT/dt=P−Q血、C耳dT/dt=Q血−Q外。同時積分向空氣淨交換能量、搧動供能和血路淨交換；總熱量變化=P累計−Q外累計，正負都有物理意義，不夾成只散熱。核心ΔE=C核心(T核心−38)，負值為這條示例熱路徑的核心熱減少，不是全身冷卻預測。血流0時耳仍與空氣交換，核心僅收到搧動成本。忽略基礎代謝、其他器官、輻射、蒸發、日照、風和生理調節，不能判斷真大象能否維持體溫。熱帳10分鐘用6秒播放，快100倍，逐步25秒；圖中耳動用畫面時間示意，與加速熱帳不同步，外型、血管與箭頭放大不代表解剖或實測流速。設定變更重設相同起點；語言／模式切換保留當前進度。A/B同起點、同600s，只改一項；曲線固定−1000至1000W，探索時耳淨向外青色、搧動成本金虛線；對照時青色B／粉虛線A熱流同時刻，成本見A/B數據，固定比例不放大差異。EP217於2026-10-10實點收聽到Apple台灣官方，核對公開標題、12分鐘顯示與相符封面；11:58及既有Firstory官方封面沿用2026-10-06／07已保存證據。本輪台灣頁沒有精確秒數，實際音訊未測。 曲線每5秒連線，當前狀態按相鄰1秒RK4存樣線性插值，不是新物理量測；全部8100合法設定已獨立解析核對，插值溫度差在本次檢查最大約0.001432°C，顯示小數不代表生物校準。同值／空值輸入保留實驗；真正改條件才重設，已完成逐步明示從頭25秒，保存卡仍留600秒。",
    "A dry, shaded two-reservoir teaching model, not calibrated to elephants. The main view shows heat flows and energy changes from the initial state, not real body-temperature predictions. Assumed initial core38°C and ear30°C with fixed air 10–45°C are numerical initial conditions. A=0.5–2.5m² is total effective exchange area for both ears, not measured single-ear size. Core capacity200000J/K and ear capacity2000A J/K are artificial. Blood setting0–100% scales conductance G=30*setting/100 W/K, not ml/min; zero closes this thermal route. Flapping f=0–2Hz sets illustrative convection h=5+8sqrt(f) W/(m²K); the baseline5 permits natural convection at0Hz. Artificial effort power P=2Af² W is conservatively assumed to become core heat entirely, not a measured muscle efficiency or power. Qblood=G(Tcore−Tear); Qout=hA(Tear−Tair). Positive means core-to-ear and ear-to-air respectively; negative reverses. Fixed1s RK4 integrates600s: Ccore*dTcore/dt=P−Qblood; Cear*dTear/dt=Qblood−Qout, including cumulative air exchange, effort input and blood-route exchange. Total thermal change=effort−air exchange, preserving negative values. CoreΔE=Ccore*(Tcore−38): negative means less heat in this reservoir through this route, not whole-animal cooling. At zero blood conductance the ear still exchanges heat with air while the core receives effort heat only. Basal metabolism, other organs, radiation, evaporation, sunlight, wind and physiological regulation are omitted; no ability to maintain real temperature is predicted. Ten illustrative minutes play over six seconds,100× faster; Step25s. Ear motion uses screen time and is not synchronized to the accelerated heat ledger. Enlarged shape, vessels and arrows are not anatomy or measured flow speed. Setting changes restart matched initial conditions; language/mode changes preserve progress. A/B share initial conditions and600s, changing one variable. Fixed plot−1000..1000W: exploration shows cyan outward ear heat and dashed gold effort; comparison shows cyan B and dashed pink A heat at matched times, with costs in A/B results, without rescaling to amplify differences. EP217 was opened through the actual CTA on the Taiwan official Apple page on 2026-10-10: public title, rounded 12-minute display and matching artwork confirmed. Exact 11:58 and the existing official Firstory cover retain the saved evidence dated 2026-10-06/07. The current Taiwan page exposes no exact seconds; actual audio untested. Curves join 5 s samples; current state linearly interpolates neighbouring 1 s RK4 records, not a new physical measurement. All 8100 legal settings were independently checked; maximum checked interpolated temperature error was about 0.001432°C, not biological calibration. Same/blank input retains the experiment; actual changes restart. Completed Step explicitly restarts 25 s; cards retain 600 s."
  ],
  "formula": "Assumed Tcore(0)=38°C; Tear(0)=30°C; fixed Tair\nA: total effective area, m²; f: flapping Hz\nCcore=200000 J/K; Cear=2000*A J/K\nG=30*(blood setting/100) W/K\nh=[5+8*sqrt(f/(1Hz))] W/(m² K)\nP=2W*(A/(1m²))*(f/(1Hz))²\nQblood=G*(Tcore−Tear); Qout=h*A*(Tear−Tair)\nCcore*dTcore/dt=P−Qblood\nCear*dTear/dt=Qblood−Qout\nCore energy change=Ccore*(Tcore−38)\nTotal thermal change=effort energy−net outward air energy\nFixed1s RK4; observation600s; screen6s (100× faster); Step25s\nEar movement is schematic and not synchronized to accelerated heat time\nAll constants are teaching assumptions, not elephant calibration\nDisplayed states: linear interpolation of neighbouring 1 s samples; curve joins5s samples.\nNegative heat flows reverse the named route.1mW=0.001W;1kJ=1000J.\nStep after600s explicitly restarts from the initial state; saved cards stay 600 s.",
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/1351443/",
    "Phillips & Heath (1992) · Elephant pinna heat exchange, indexed abstract"
  ],
  "extraSources": [
    [
      "https://pubs.usgs.gov/publication/1007634",
      "Buss & Estes (1971) · Elephant ear movements, indexed abstract"
    ]
  ],
  "ep": "217",
  "episodeTitle": "〈公開｜EP.217｜陸地巨獸的溫柔與智慧：揭開非洲象的演化奇蹟〉",
  "date": "2026-10-07",
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/%E5%85%AC%E9%96%8B-ep-217-%E9%99%B8%E5%9C%B0%E5%B7%A8%E7%8D%B8%E7%9A%84%E6%BA%AB%E6%9F%94%E8%88%87%E6%99%BA%E6%85%A7-%E6%8F%AD%E9%96%8B%E9%9D%9E%E6%B4%B2%E8%B1%A1%E7%9A%84%E6%BC%94%E5%8C%96%E5%A5%87%E8%B9%9F/id1812447277?i=1000758301068",
    "verified": true,
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/3vfpkQujh1SqbgApHEetc.jpg",
    "duration": "11 分 58 秒",
    "appleId": "1000758301068",
    "reviewed": "2026-10-06",
    "firstory": "https://open.firstory.fm/story/cmnbtegge0a1t01y39r6edkne",
    "durationEn": "11 min 58 sec",
    "durationIso": "PT11M58S",
    "coverAvailable": true,
    "access": [
      "公開單集",
      "Public episode"
    ],
    "reconciled": "2026-10-07",
    "evidenceBasis": "Saved official Apple/Firstory metadata; no new page/audio this round.",
    "taiwanVerifiedOn": "2026-10-10",
    "verificationScope": "Current Taiwan official title/public heading/12-minute display and visually matching official artwork confirmed via actual CTA. Current page has no exact duration schema; exact11:58 and Firstory cover retain dated official evidence2026-10-06/07. Actual audio untested."
  },
  "icon": "🐘",
  "keywords": "大象搧耳,耳朵散熱,血流,對流,溫差,能量守恆,熱流,elephant ears,ear flapping,blood flow,convection,temperature difference,energy balance,heat flow,科學好好聽,science for kids",
  "description": [
    "改變耳面積、血流與搧動，觀察雙熱庫的熱交換與搧動成本；熱空氣可使熱流反向，不預測真體溫。",
    "Change ear area, blood route and flapping to explore a two-reservoir heat ledger and effort costs. Hot air can reverse heat flow; real body temperatures are not predicted."
  ],
  "defaults": {
    "freq": 1,
    "flow": 100,
    "area": 1,
    "air": 25
  },
  "formulaZh": "假想起點：核心38°C、耳面30°C；空氣溫度固定\nA＝雙耳總有效面積（m²）；f＝搧動頻率（Hz＝每秒次數）\n核心熱容量200000J/K；耳熱容量2000×A J/K\n血路熱導G＝30×血流設定/100（W/K）\n對流h＝[5+8√(f/1Hz)] W/(m²·K)\n供能P＝2W×(A/1m²)×(f/1Hz)²\n核心到耳熱流Q血＝G(T核心−T耳)\n耳到空氣熱流Q外＝hA(T耳−T空氣)\n核心熱容量×dT核心/dt＝P−Q血\n耳熱容量×dT耳/dt＝Q血−Q外\n核心熱量差＝200000×(T核心−38)（J）\n兩熱庫總變化＝累計搧動供能−向空氣淨交換能量\n1秒固定步長RK4，觀察600秒；6螢幕秒播完，快100倍\n非整秒狀態以相鄰1秒存樣線性插值；曲線每5秒連線\n負熱流表示反方向；1mW＝0.001W，1kJ＝1000J\n完成後逐步明示從頭25秒；保存卡保留各組600秒\n耳動是示意，與加速熱帳不同步；常數均為教學假設，未校準真象",
  "dateModified": "2026-10-10"
};
