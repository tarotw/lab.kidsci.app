window.CONFIG={
  "id": "C01",
  "path": "batecho",
  "title": [
    "蝙蝠回聲測距",
    "Bat echo explorer"
  ],
  "question": [
    "聲音飛出去又回來，要花多久？",
    "How long does a sound round trip take?"
  ],
  "hint": [
    "按「發射聲波」看往返；把障礙移遠，再發射一次。",
    "Send a pulse. Move the obstacle farther away, then send another."
  ],
  "controls": [
    {
      "key": "distance",
      "label": [
        "障礙距離",
        "Obstacle distance"
      ],
      "min": 1,
      "max": 12,
      "step": 0.5,
      "value": 6,
      "unit": "m",
      "options": null
    },
    {
      "key": "temp",
      "label": [
        "空氣溫度",
        "Air temperature"
      ],
      "min": -10,
      "max": 40,
      "step": 1,
      "value": 20,
      "unit": "°C",
      "options": null
    },
    {
      "key": "guess",
      "label": [
        "我猜距離",
        "My distance guess"
      ],
      "min": 1,
      "max": 12,
      "step": 0.5,
      "value": 4,
      "unit": "m",
      "options": null
    }
  ],
  "action": [
    "發射聲波",
    "Send pulse"
  ],
  "mission": [
    "用聲速乘回聲時間後，還要？",
    "After multiplying speed by echo time, you must…"
  ],
  "options": [
    [
      "乘以 2",
      "Multiply by 2"
    ],
    [
      "除以 2",
      "Divide by 2"
    ]
  ],
  "answer": 1,
  "reason": [
    "回聲跑了去程和回程，距離是整段路的一半。",
    "An echo travels out and back. The obstacle is half the total path away."
  ],
  "comparisons": [
    {
      "label": [
        "3／6 公尺",
        "3 / 6 metres"
      ],
      "key": "distance",
      "a": 3,
      "b": 6
    },
    {
      "label": [
        "0／30°C",
        "0 / 30°C"
      ],
      "key": "temp",
      "a": 0,
      "b": 30
    },
    {
      "label": [
        "反例：只算單程",
        "Counterexample: one-way guess"
      ],
      "key": "guess",
      "a": 6,
      "b": 12
    }
  ],
  "limit": [
    "自動播放的回聲間隔放慢40倍；逐步或暫停時，由你決定節奏。700 Hz替代音不是超音波錄音。聲速採乾燥空氣溫度近似、單一靜止障礙，並非所有蝙蝠的完整感官模型。",
    "Automatic playback slows the echo interval 40×; stepping or pausing changes its pacing. The 700 Hz substitute is not recorded ultrasound. Dry-air speed approximation; one stationary obstacle, not a full model for all bats."
  ],
  "formula": "c ≈ 331.3 + 0.606 T (m/s), T in °C\nt = 2d / c; d = ct / 2\nd in metres; t in seconds; readout also shows milliseconds\nDry-air linear approximation, −10 to 40°C in this model.",
  "source": [
    "https://www.nps.gov/subjects/bats/echolocation.htm",
    "US National Park Service · Echolocation"
  ],
  "ep": "205",
  "date": "2026-10-03",
  "episodeTitle": "〈EP.205｜夜空中的「重金屬」搖滾巨星：你以為你懂蝙蝠嗎？〉",
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/ep-205-%E5%A4%9C%E7%A9%BA%E4%B8%AD%E7%9A%84-%E9%87%8D%E9%87%91%E5%B1%AC-%E6%90%96%E6%BB%BE%E5%B7%A8%E6%98%9F-%E4%BD%A0%E4%BB%A5%E7%82%BA%E4%BD%A0%E6%87%82%E8%9D%99%E8%9D%A0%E5%97%8E/id1812447277?i=1000712756094&uo=4",
    "verified": true,
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/dFWv7-TVcdmBfoU7ruA4v.jpg",
    "duration": "17 分 58 秒",
    "appleId": "1000712756094",
    "durationIso": "PT17M58S"
  },
  "defaults": {
    "distance": 6,
    "temp": 20,
    "guess": 4
  },
  "keywords": "蝙蝠回聲測距,Bat echo explorer,科學好好聽,兒童科學,互動實驗,science for kids,interactive experiment,蝙蝠,回聲定位,聲速,往返時間,超音波,距離測量,echolocation,speed of sound,round-trip time,ultrasound,distance measurement",
  "description": [
    "聲音飛出去又回來，要花多久？ 動手調整、比較與解釋，探索動物機制的教學模型。",
    "How long does a sound round trip take? Change conditions, compare results and explain an educational model of animal mechanisms."
  ],
  "formulaZh": "聲速 c ≈ 331.3 + 0.606 T（m/s），T 是攝氏溫度\n回聲往返時間 t = 2d / c；距離 d = ct / 2\n距離 d 用 m，時間 t 用秒 s；畫面另以毫秒 ms 顯示。",
  "dateModified": "2026-10-07"
};
