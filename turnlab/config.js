window.CONFIG={
  "id": "A02",
  "path": "turnlab",
  "title": [
    "獵豹急轉彎",
    "Cheetah cornering"
  ],
  "question": [
    "同一個彎道，為什麼放慢就能轉過去？",
    "Why can slowing down make the same turn possible?"
  ],
  "hint": [
    "先按觀察，看青色路線；把速度降到 8 m/s，再比較。",
    "Watch the cyan path. Reduce speed to 8 m/s and compare."
  ],
  "controls": [
    {
      "key": "speed",
      "label": [
        "進彎速度",
        "Entry speed"
      ],
      "min": 2,
      "max": 25,
      "step": 1,
      "value": 16,
      "unit": "m/s",
      "options": null
    },
    {
      "key": "radius",
      "label": [
        "彎道半徑",
        "Turn radius"
      ],
      "min": 5,
      "max": 30,
      "step": 1,
      "value": 12,
      "unit": "m",
      "options": null
    },
    {
      "key": "grip",
      "label": [
        "地面抓地係數（假設）",
        "Grip coefficient (assumed)"
      ],
      "min": 0.1,
      "max": 1.2,
      "step": 0.1,
      "value": 0.8,
      "unit": "",
      "options": null
    }
  ],
  "action": [
    "觀察一次",
    "Watch once"
  ],
  "mission": [
    "速度加倍，這個彎需要多少側向力？",
    "Double speed: how does required lateral force change?"
  ],
  "options": [
    [
      "變成四倍",
      "Four times"
    ],
    [
      "變成兩倍",
      "Two times"
    ]
  ],
  "answer": 0,
  "reason": [
    "同一半徑下，側向力和速度平方成正比；放慢能降低抓地需求。",
    "At fixed radius, lateral force scales with speed squared. Slowing reduces grip demand."
  ],
  "comparisons": [
    {
      "label": [
        "速度加倍",
        "Double speed"
      ],
      "key": "speed",
      "a": 8,
      "b": 16,
      "base": {
        "radius": 12,
        "grip": 0.8
      }
    },
    {
      "label": [
        "彎道變寬",
        "Widen the turn"
      ],
      "key": "radius",
      "a": 5,
      "b": 25,
      "base": {
        "speed": 12,
        "grip": 0.8
      }
    },
    {
      "label": [
        "提高抓地上限",
        "Increase grip"
      ],
      "key": "grip",
      "a": 0.2,
      "b": 1,
      "base": {
        "speed": 10,
        "radius": 12
      }
    }
  ],
  "limit": [
    "50 kg 平面質點，速度固定，側向加速度取 min(v²/R, μg)。低於需求時形成更寬的彎，不把完整狩獵、側傾、煞車過程或成功率納入。µ 為教學假設。",
    "A 50 kg planar point mass at constant speed with lateral acceleration min(v²/R, μg). Limited grip produces a wider arc. No full hunt, lean, braking trajectory or success probability; μ is assumed."
  ],
  "formula": "Required lateral force F = mv²/R; grip limit = μmg\nMass m = 50 kg; speed v in m/s; radius R in m; assumed grip μ; g = 9.81 m/s²\nActual acceleration = min(v²/R, μg); actual radius = v² / actual acceleration\nObserve both paths for T = πR/(2v) seconds (the intended quarter turn)\nRK4 fixed step ≤ 1/240 s; the dot plays the whole interval in 2 s of screen time.",
  "source": [
    "https://www.nature.com/articles/nature12295",
    "Wilson et al. (2013) · Wild cheetah locomotion"
  ],
  "ep": "c5",
  "date": "2026-10-06",
  "episodeTitle": "〈VIP.5｜新年悄悄話特輯｜地球極速奧運會：誰才是披著毛皮的法拉利與生物界的戰鬥機？〉",
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/vip-5-%E6%96%B0%E5%B9%B4%E6%82%84%E6%82%84%E8%A9%B1%E7%89%B9%E8%BC%AF-%E5%9C%B0%E7%90%83%E6%A5%B5%E9%80%9F%E5%A5%A7%E9%81%8B%E6%9C%83-%E8%AA%B0%E6%89%8D%E6%98%AF%E6%8A%AB%E8%91%97%E6%AF%9B%E7%9A%AE%E7%9A%84%E6%B3%95%E6%8B%89%E5%88%A9%E8%88%87%E7%94%9F%E7%89%A9%E7%95%8C%E7%9A%84%E6%88%B0%E9%AC%A5%E6%A9%9F/id1812447277?i=1000708141872&uo=4",
    "verified": true,
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/FOZdcGcuKhBwxzKfEjD2X.jpg",
    "duration": "16 分 12 秒",
    "appleId": "1000708141872",
    "reviewed": "2026-10-06",
    "durationEn": "16 min 12 sec",
    "durationIso": "PT16M12S"
  },
  "defaults": {
    "speed": 16,
    "radius": 12,
    "grip": 0.8
  },
  "keywords": "獵豹急轉彎,動物機制,科學好好聽,互動科學,Cheetah cornering,animal biomechanics,interactive science,獵豹,急轉彎,向心力,速度平方,彎道半徑,摩擦,抓地上限,cheetah,cornering,centripetal force,speed squared,turn radius,friction,grip limit",
  "description": [
    "同一個彎道，為什麼放慢就能轉過去？ 動手調整條件，觀察機制與模型限制。",
    "Why can slowing down make the same turn possible? Change conditions and inspect the mechanism and model limits."
  ],
  "icon": "↪️",
  "formulaZh": "所需側向力 F = mv²/R；抓地上限 = μmg\n質量 m = 50 kg；速度 v 單位 m/s；半徑 R 單位 m；μ 為假設抓地係數；g = 9.81 m/s²\n實際側向加速度 = min(v²/R, μg)；實際半徑 = v² / 實際加速度\n金色彎道與青色路線都觀察 T = πR/(2v) 秒（原定四分之一圈）\nRK4 固定步長 ≤ 1/240 秒；白點用螢幕 2 秒播放整段。",
  "extraSources": [
    [
      "https://openstax.org/books/physics/pages/6-2-uniform-circular-motion",
      "OpenStax Physics 6.2 · Uniform circular motion / 等速圓周運動"
    ]
  ]
};
