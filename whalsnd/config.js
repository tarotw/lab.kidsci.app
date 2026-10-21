window.CONFIG={
  "id": "B09",
  "path": "whalsnd",
  "status": "complete",
  "title": [
    "鯨魚聲音：距離與噪聲",
    "Whale sound: distance and noise"
  ],
  "question": [
    "聲音還在，為什麼更難分辨？",
    "Why can a sound remain but become harder to distinguish?"
  ],
  "hint": [
    "把距離從1改成2 km，再增加船噪；看訊號／噪聲。",
    "Change 1 to 2 km, then raise ship noise. Watch signal / noise."
  ],
  "controls": [
    {
      "key": "distance",
      "label": [
        "聲源到接收點",
        "Source to receiver"
      ],
      "min": 0.1,
      "max": 20,
      "step": 0.1,
      "value": 1,
      "unit": "km",
      "options": null
    },
    {
      "key": "freq",
      "label": [
        "示例聲音頻率",
        "Example signal frequency"
      ],
      "min": 0.5,
      "max": 5,
      "step": 0.5,
      "value": 0.5,
      "unit": "kHz",
      "options": null
    },
    {
      "key": "noise",
      "label": [
        "同頻帶背景噪聲",
        "Background in the same band"
      ],
      "min": 70,
      "max": 130,
      "step": 5,
      "value": 100,
      "unit": "dB",
      "options": null
    },
    {
      "key": "absorb",
      "label": [
        "吸收公式倍率",
        "Absorption-model multiplier"
      ],
      "min": 0,
      "max": 200,
      "step": 25,
      "value": 100,
      "unit": "%",
      "options": null
    }
  ],
  "action": [
    "觀察傳播",
    "Send sound"
  ],
  "audio": true,
  "mission": [
    "只看訊號大小，就知道能不能聽懂嗎？",
    "Does signal level alone tell us whether it is understood?"
  ],
  "options": [
    [
      "還要比較同頻帶噪聲與接收能力",
      "Noise in the same band and the receiver matter"
    ],
    [
      "只要聲波存在，就一定聽懂",
      "Any present wave is understood"
    ]
  ],
  "answer": 0,
  "reason": [
    "噪聲增加會降低訊噪比，即使訊號仍然存在。此例不預測鯨魚聽覺閾值或訊息理解。",
    "Added noise lowers signal-to-noise ratio even while the signal remains. This example predicts neither whale hearing thresholds nor meaning."
  ],
  "comparisons": [
    {
      "label": [
        "1／2公里，無吸收",
        "1 / 2 km, no absorption"
      ],
      "key": "distance",
      "a": 1,
      "b": 2,
      "base": {
        "absorb": 0
      }
    },
    {
      "label": [
        "低／高噪聲",
        "Low / high noise"
      ],
      "key": "noise",
      "a": 80,
      "b": 120
    },
    {
      "label": [
        "低／高頻吸收",
        "Low / high frequency"
      ],
      "key": "freq",
      "a": 0.5,
      "b": 5
    }
  ],
  "limit": [
    "均勻無邊界水域的點聲源球面擴散加Thorp經驗吸收；頻率0.5–5 kHz只是公式示範帶，不當作本集藍鯨歌聲的典型頻帶，忽略海面、海床、聲速剖面、聲道、方向性及回聲。源級自訂170 dB re 1 µPa at 1 m，各頻率相同；噪聲為同一分析頻帶內的接收聲壓級，不是每Hz頻譜密度或船舶源級。接收級=源級−擴散損失−吸收損失；所有聲壓級參考均為水下1 µPa，不與空氣dB比較。吸收倍率供反例，100%才使用列出的Thorp近似。聲速固定1500 m/s；觀察動畫將旅行時間縮放到2秒。試聽為小音量合成正弦＋噪聲、頻率映射到300–499 Hz且訊噪比夾在±30 dB，並非鯨錄音、實際水下音量或等價聽覺測試。預設靜音，核心不需要聲音。",
    "Point-source spherical spreading plus empirical Thorp absorption in homogeneous unbounded water, 0.5–5 kHz as a demonstration band, not a typical blue-whale song band. Surface, bottom, sound-speed profile, ducts, directionality and echoes are omitted. Designed source level 170 dB re 1 µPa at 1 m, constant across frequencies. Noise is received pressure level integrated over the same analysis band, not per-Hz spectral density or ship source level. Received level = source − spreading − absorption. All pressure levels use underwater 1 µPa reference; no air-dB comparison. The multiplier supports counterexamples; 100% uses the stated Thorp approximation. Fixed sound speed 1500 m/s; visual travel is scaled to 2 seconds. Optional low-volume sine plus noise maps pitch to 300–499 Hz and clamps cue SNR to ±30 dB; not whale recordings, underwater loudness or an equivalent hearing test. Muted by default; all tasks work silently."
  ],
  "formula": "f in kHz; r in m; reference r₀=1 m\nα=0.11f²/(1+f²)+44f²/(4100+f²)+2.75e−4*f²+0.003 dB/km\nαUsed=α*multiplier/100\nTLspread=20log10(r/1 m); TLabs=αUsed*(r−1)/1000\nRL=170−TLspread−TLabs dB re 1 µPa\nSNRdB=RL−NL; pressureRMS ratio=10^(SNRdB/20)\ntravelTime=r/1500 s; wavelength=1500/(1000*f) m\nNL is received level in the same band, not per-Hz spectral density\n0 dB difference = equal RMS; no understanding threshold\nThe 2 s diagram covers the one-way model time, not real playback time\nSynthetic cue maps pitch to 300–499 Hz and clamps SNR to ±30 dB\nNot whale audio, underwater loudness or an equivalent hearing test",
  "source": [
    "https://dosits.org/science/advanced-topics/cylindrical-vs-spherical-spreading/",
    "DOSITS · Spherical spreading"
  ],
  "extraSources": [
    [
      "https://doi.org/10.3390/s17112465",
      "Cheon & Cho (2017) · Underwater acoustic channel, equations 1–3"
    ]
  ],
  "ep": "203",
  "episodeTitle": "〈EP.203｜藍色巨獸與深海輓歌：解密地球終極生命體的生與死〉",
  "date": "2026-10-03",
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/ep-203-%E8%97%8D%E8%89%B2%E5%B7%A8%E7%8D%B8%E8%88%87%E6%B7%B1%E6%B5%B7%E8%BC%93%E6%AD%8C-%E8%A7%A3%E5%AF%86%E5%9C%B0%E7%90%83%E7%B5%82%E6%A5%B5%E7%94%9F%E5%91%BD%E9%AB%94%E7%9A%84%E7%94%9F%E8%88%87%E6%AD%BB/id1812447277?i=1000712089721&uo=4",
    "verified": true,
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/m3ihPmYs10Vs6FrR7d0PE.jpg",
    "duration": "11 分 54 秒",
    "appleId": "1000712089721",
    "durationEn": "11 min 54 sec",
    "durationIso": "PT11M54S",
    "verifiedOn": "2026-10-06",
    "source": "https://open.firstory.fm/story/cmdpx4cut00d201xl18mqglw5",
    "subscribersOnly": false
  },
  "icon": "〰️",
  "keywords": "鯨魚,水下聲音,球面擴散,吸收,噪聲,訊噪比,whale sound,spherical spreading,absorption,SNR,科學好好聽,science for kids",
  "description": [
    "動手調距離、頻率與噪聲，探索球面擴散與訊噪比；預設靜音也能完成。",
    "Change distance, frequency and noise to explore spherical spreading and SNR. All tasks work muted."
  ],
  "defaults": {
    "distance": 1,
    "freq": 0.5,
    "noise": 100,
    "absorb": 100
  },
  "formulaZh": "頻率f以kHz，距離r以m；參考距離1m\nα＝0.11f²/(1+f²)＋44f²/(4100+f²)＋2.75×10⁻⁴f²＋0.003（dB/km）\n使用α＝公式α×吸收倍率/100\n球面擴散損失＝20log₁₀(r/1m) dB\n吸收損失＝使用α(dB/km)×[(r−1m)換成km的距離]\n接收級RL＝170−擴散損失−吸收損失（dB re1µPa）\n噪聲NL是相同頻帶的接收聲壓級，非每Hz頻譜密度\n訊噪差＝RL−NL；聲壓RMS比＝10^[(RL−NL)/20]\n0dB差＝RMS相等；不判定是否聽懂\n單程旅行秒＝r/(1500m/s)；波長＝1500/(1000f) m\n2秒示意播放上述單程秒數，非真實播放時長\n可選合成音將頻率映到300–499Hz、訊噪差夾在±30dB\n合成音既不是鯨錄音，也不是水下音量或等價聽覺測驗",
  "dateModified": "2026-10-09"
};
