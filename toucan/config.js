window.CONFIG={
  "id": "D01",
  "path": "toucan",
  "title": [
    "巨嘴鳥的散熱器",
    "Toucan thermal radiator"
  ],
  "question": [
    "讓血流到大嘴巴，熱會去哪裡？",
    "Where does heat go when blood reaches the bill?"
  ],
  "hint": [
    "先開始觀察，再把血流調低；留意嘴巴溫度與熱流箭頭。",
    "Start, then lower blood flow. Watch bill temperature and heat arrows."
  ],
  "controls": [
    {
      "key": "flow",
      "label": [
        "喙部血流",
        "Bill blood flow"
      ],
      "min": 0,
      "max": 100,
      "step": 10,
      "value": 80,
      "unit": "%",
      "options": null
    },
    {
      "key": "air",
      "label": [
        "環境溫度",
        "Air temperature"
      ],
      "min": 10,
      "max": 45,
      "step": 1,
      "value": 25,
      "unit": "°C",
      "options": null
    },
    {
      "key": "wind",
      "label": [
        "風速",
        "Wind speed"
      ],
      "min": 0,
      "max": 5,
      "step": 0.5,
      "value": 1,
      "unit": "m/s",
      "options": null
    }
  ],
  "action": [
    "開始觀察",
    "Start"
  ],
  "mission": [
    "環境比嘴巴更熱時，風吹過會？",
    "When air is hotter than the bill, convection…"
  ],
  "options": [
    [
      "可能帶熱進來",
      "May bring heat in"
    ],
    [
      "一定降溫",
      "Always cools"
    ]
  ],
  "answer": 0,
  "reason": [
    "熱由高溫處流向低溫處；風會加強交換，方向由溫差決定。",
    "Heat flows from warmer to cooler places. Wind increases exchange; temperature sets its direction."
  ],
  "comparisons": [
    {
      "label": [
        "血流 0／100%",
        "Flow 0 / 100%"
      ],
      "key": "flow",
      "a": 0,
      "b": 100
    },
    {
      "label": [
        "無風／有風",
        "Still / windy"
      ],
      "key": "wind",
      "a": 0,
      "b": 5
    },
    {
      "label": [
        "反例：45°C 熱風",
        "Counterexample: 45°C air"
      ],
      "key": "air",
      "a": 25,
      "b": 45
    }
  ],
  "limit": [
    "托哥巨嘴鳥血流調節概念；兩節點教學模型，固定示例喙面積0.06 m²、2 W代謝與核心對流散熱，未校準真動物體溫或危險時間。血流百分比是示例熱導比例，不是真血流量。尚未加入呼吸等調節，喙不是冷氣壓縮機；假色不是實測熱像。溫度圖固定10–70°C刻度，超過10分鐘時只畫最近600秒。 核心／喙熱流皆由當下溫差決定，可反向。改參數延續目前熱狀態與歷史，示範對照才從共同40／32°C開始算60秒。曲線保存601個已到達的整秒樣本；觀察時刻可在兩整秒之間，600秒視窗左端以連線裁切插值，非新增物理量測。Euler求解步長至多20ms；播放與逐步的子步不同，存在已核對的小數值近似差，不把它當動物差異。 2023年隔熱喙研究未顯示熱中性區因此變寬，其他散熱途徑可補償；本頁不模擬這些調節。 EP225於2026-10-10核對Apple台灣官方單集與封面；頁面標訂閱者限定及10分鐘，本站採約10分鐘、不造精確秒數。實際音訊未測。",
    "Inspired by toco toucan blood-flow regulation. Two-node teaching model with an assumed 0.06 m² bill area, 2 W metabolism and body convection; not calibrated to real body temperature or danger time. Flow percentage scales assumed conductance, not measured blood volume. Other regulation is omitted; the bill is not an air conditioner. False colours are not thermography. The chart keeps a fixed 10–70°C scale and shows the latest 600 s after ten minutes. Both core–bill and bill–air flows follow current temperature differences and may reverse. Parameter changes retain thermal state/history; demos use matched 40/32°C starts and 60 seconds. 601 reached integer-second samples are retained. The viewing clock may lie between them; clipping a 600-second window linearly interpolates its left edge, not a new physical measurement. Euler steps are at most 20 ms; playback and manual stepping use different substeps, with checked small numerical approximation differences that are not animal effects. A 2023 bill-insulation experiment did not show a wider thermoneutral zone from bill heat exchange; other routes can compensate. This page does not simulate those adjustments. The Taiwan official EP225 page and artwork were checked on 2026-10-10. It shows subscribers only and a rounded duration of 10 minutes. This page uses about 10 minutes; exact seconds and actual audio were not verified."
  ],
  "formula": "Qbill = hA(Tbill − Tair), A = 0.06 m²\nh = 5 + 4 × wind [W/(m²·K)]; wind in m/s\nG = 1.2 × flow fraction [W/K]; Qcore→bill = G(Tcore − Tbill) [W]\nQbody→air = 0.08(Tcore − Tair) [W]\n2000 J/K × dTcore/dt = 2 W − Qcore→bill − Qbody→air\n80 J/K × dTbill/dt = Qcore→bill − Qbill\nTime in s; temperatures in °C; 1°C difference = 1 K.\nHistory: reached integer seconds only, 601 stored; current fractional state is separate.\nGraph clip at t−600: linear interpolation of existing joined samples, not measured data.\nEuler steps<=0.02s; displaying 2 decimals is not biological calibration.",
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/19628866/",
    "Tattersall et al., Science (2009)"
  ],
  "ep": "225",
  "date": "2026-10-07",
  "episodeTitle": "〈VIP｜EP.225｜為什麼巨嘴鳥的嘴巴那麼大？原來是自帶超級空調！〉",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/vip-ep-225-%E7%82%BA%E4%BB%80%E9%BA%BC%E5%B7%A8%E5%98%B4%E9%B3%A5%E7%9A%84%E5%98%B4%E5%B7%B4%E9%82%A3%E9%BA%BC%E5%A4%A7-%E5%8E%9F%E4%BE%86%E6%98%AF%E8%87%AA%E5%B8%B6%E8%B6%85%E7%B4%9A%E7%A9%BA%E8%AA%BF/id1812447277?i=1000761494569",
    "episodeId": "1000761494569",
    "showId": "1812447277",
    "source": "https://open.firstory.me/story/cmnx1h6rk08n301xihhxc8a52",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource211/v4/10/1a/b2/101ab216-aac2-5102-fa07-de2e1ac6365f/59993e52-61b6-4285-b14f-56f24d3942d7.jpg/500x500bb.webp",
    "coverAvailable": true,
    "duration": "約10分鐘",
    "durationEn": "About 10 minutes",
    "subscribersOnly": true,
    "verifiedOn": "2026-10-10",
    "verificationScope": "Official Taiwan episode title/rendered10minute display/subscribers-only label/official artwork confirmed through Computer Use. P0D structured duration is invalid and omitted; structured free offer contradicts explicit rendered subscriber label, rendered episode label retained. No exact seconds or actual audio claim.",
    "access": [
      "訂閱者限定",
      "Subscribers only"
    ]
  },
  "defaults": {
    "flow": 80,
    "air": 25,
    "wind": 1
  },
  "keywords": "巨嘴鳥,血流調節,喙散熱,對流,熱流,雙節點熱模型,toucan,bill blood flow,thermal radiator,convection,heat transfer,two-node heat model,科學好好聽,science for kids",
  "description": [
    "調整血流、空氣溫度與風速，觀察巨嘴鳥啟發的雙節點熱模型；熱空氣可讓喙吸熱，血流也能把熱送回核心。示例不預測真體溫。",
    "Adjust blood flow, air temperature and wind in a toucan-inspired two-node heat model. Hot air can heat the bill, and heat can return to the core. The example does not predict real body temperature."
  ],
  "formulaZh": "喙向空氣熱流 Qbill = hA(Tbill − Tair)，固定示例面積 A = 0.06 m²\n示例對流係數 h = 5 + 4 × 風速（W/(m²·K)）；風速用 m/s\n熱導 G = 1.2 × 血流比例（W/K）；核心到喙 Qcore→bill = G(Tcore − Tbill)（W）\n核心向空氣熱流 Qbody→air = 0.08(Tcore − Tair)（W）\n2000 J/K × dTcore/dt = 2 W − Qcore→bill − Qbody→air\n80 J/K × dTbill/dt = Qcore→bill − Qbill\n時間用 s、溫度用 °C；溫差 1°C = 1 K。負熱流表示反方向。\n歷史只保存已到達的整秒，最多601點；目前非整秒狀態另列。\n圖窗左端t−600用已連線樣本作線性裁切插值，不是假裝新增量測。\nEuler子步至多0.02秒；兩位小數不是生物校準。",
  "moreSources": [
    [
      "https://pubmed.ncbi.nlm.nih.gov/36752123/",
      "Chaves, Tattersall & Andrade, J Exp Biol (2023)"
    ]
  ],
  "dateModified": "2026-10-10"
};
