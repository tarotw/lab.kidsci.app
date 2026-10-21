window.CONFIG={
  "id": "A03",
  "path": "tailspin",
  "title": [
    "獵豹尾巴反向旋轉",
    "Cheetah tail counter-rotation"
  ],
  "question": [
    "尾巴轉了，身體和整體重心會怎麼動？",
    "Turn the tail: what happens to body orientation and total mass centre?"
  ],
  "hint": [
    "把尾巴角度由 0 調到 90°；找青色重心，再改尾巴質量。",
    "Move the tail from 0 to 90°. Find the cyan mass centre, then change tail mass."
  ],
  "controls": [
    {
      "key": "angle",
      "label": [
        "尾巴相對身體擺角",
        "Tail angle relative to body"
      ],
      "min": -120,
      "max": 120,
      "step": 10,
      "value": 0,
      "unit": "°",
      "options": null
    },
    {
      "key": "mass",
      "label": [
        "尾巴示例質量",
        "Example tail mass"
      ],
      "min": 1,
      "max": 6,
      "step": 0.5,
      "value": 3,
      "unit": "kg",
      "options": null
    },
    {
      "key": "length",
      "label": [
        "尾巴示例長度",
        "Example tail length"
      ],
      "min": 0.5,
      "max": 1.5,
      "step": 0.1,
      "value": 1,
      "unit": "m",
      "options": null
    }
  ],
  "action": [
    "觀察一次",
    "Watch once"
  ],
  "mission": [
    "本例沒有外力與外力矩，擺尾能改變什麼？",
    "With no external force or torque in this model, what can tail motion change?"
  ],
  "options": [
    [
      "身體朝向，不能讓整體重心突然轉彎",
      "Body orientation, without suddenly turning the total mass centre"
    ],
    [
      "讓整體重心立即轉向",
      "Turn the total mass centre instantly"
    ]
  ],
  "answer": 0,
  "reason": [
    "尾巴與身體交換角動量；內部運動不會憑空提供改變整體重心路徑的外力。",
    "Tail and body exchange angular momentum. Internal motion cannot create an external force on the total mass centre."
  ],
  "comparisons": [
    {
      "label": [
        "反向擺尾",
        "Reverse the tail"
      ],
      "key": "angle",
      "a": 90,
      "b": -90,
      "base": {
        "mass": 3,
        "length": 1
      }
    },
    {
      "label": [
        "尾巴變重",
        "Increase tail mass"
      ],
      "key": "mass",
      "a": 1,
      "b": 6,
      "base": {
        "angle": 90,
        "length": 1
      }
    },
    {
      "label": [
        "質量分布更遠",
        "Extend mass distribution"
      ],
      "key": "length",
      "a": 0.5,
      "b": 1.5,
      "base": {
        "angle": 90,
        "mass": 3
      }
    }
  ],
  "limit": [
    "孤立平面、忽略重力與空氣力的平面兩剛體模型；身體 40 kg、轉動慣量 10 kg·m²，尾巴均勻桿、鉸鏈距身體中心 0.7 m。全為示例，不是獵豹量測。真實尾巴也有空氣力與接地作用，本模型只隔離慣性角色；馬達需供能。 真實空中重心會受重力；這裡只比較擺尾造成的改變。 圖上角度是累積偏轉；較大擺角時，身體瞬間轉向未必全程與尾巴相反。原研究也評估空氣力，本教具沒有重現其完整模擬。",
    "Isolated planar two-rigid-body model with gravity and aerodynamic forces omitted: 40 kg body, inertia 10 kg·m², uniform tail rod hinged 0.7 m from body centre. Values are illustrative. Real tails also have aerodynamic and contact roles; an actuator must supply energy. Real airborne mass centres are affected by gravity; this isolates the effect of tail motion. Displayed angles are accumulated rotations; at larger relative angles the instantaneous body rotation need not oppose the tail throughout. The cited study includes aerodynamic effects; this toy does not reproduce its full simulation."
  ],
  "formula": "Body mass Mb=40 kg; body inertia Ib=10 kg·m²; hinge offset a=0.7 m\nTail mass Mt (kg); uniform rod length L (m); tail inertia It=MtL²/12\nq = tail angle relative to body (radians in the calculation); θ = body rotation\nReduced mass μ=MbMt/(Mb+Mt); d=(-a-Lcos(q)/2, -Lsin(q)/2)\nI(q)=Ib+It+μ|d|²; K(q)=It+μ cross(d,d′); d′=dd/dq\nConserved total angular momentum: I(q) dθ/dt + K(q) dq/dt = 0\ndθ/dq=-K/I; absolute tail rotation=θ+q\nMb rbody + Mt rtail=0; the cyan mark is the total centre of mass\n401 poses; midpoint integration of θ. A uniform sweep over 2 s supplies the momentum readout.\nSliders preview the final pose; Watch replays from q=0. Gravity and air forces are omitted.",
  "source": [
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC5004610/",
    "Patel et al. (2016) · Quasi-steady state aerodynamics of the cheetah tail"
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
    "angle": 0,
    "mass": 3,
    "length": 1
  },
  "keywords": "獵豹尾巴反向旋轉,動物機制,科學好好聽,互動科學,Cheetah tail counter-rotation,animal biomechanics,interactive science,獵豹,尾巴,角動量守恆,轉動慣量,重心,反向偏轉,cheetah,tail,angular momentum conservation,rotational inertia,centre of mass,counter-rotation",
  "description": [
    "尾巴轉了，身體和整體重心會怎麼動？ 動手調整條件，觀察機制與模型限制。",
    "Turn the tail: what happens to body orientation and total mass centre? Change conditions and inspect the mechanism and model limits."
  ],
  "icon": "🔄",
  "formulaZh": "身體質量 Mb=40 kg；身體轉動慣量 Ib=10 kg·m²；鉸鏈距離 a=0.7 m\n尾巴質量 Mt（kg）；均勻桿長 L（m）；尾巴轉動慣量 It=MtL²/12\nq 是尾巴相對身體的角度（計算用弧度）；θ 是身體偏轉角\n約化質量 μ=MbMt/(Mb+Mt)；d=(-a-Lcos(q)/2, -Lsin(q)/2)\nI(q)=Ib+It+μ|d|²；K(q)=It+μ cross(d,d′)；d′=dd/dq\n總角動量守恆：I(q) dθ/dt + K(q) dq/dt = 0\ndθ/dq=-K/I；尾巴相對地面的角度=θ+q\nMb rbody + Mt rtail=0；青點是身體與尾巴合計的重心\n401個姿態，以中點積分算θ；角動量讀數採2秒均勻擺尾的示例。\n滑桿先顯示最後姿態；按觀察從q=0重播。忽略重力與空氣力。",
  "dateModified": "2026-10-08"
};
