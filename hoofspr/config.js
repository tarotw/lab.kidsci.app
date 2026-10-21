window.CONFIG={
  "id": "A04",
  "path": "hoofspr",
  "title": [
    "馬腿的回收彈簧",
    "Horse tendon spring"
  ],
  "question": [
    "彈回來的能量，和一開始存的一樣多嗎？",
    "Is all stored energy returned by the spring?"
  ],
  "hint": [
    "先調壓縮量，看能量增加；按觀察，再把回收率降到 20%。",
    "Change compression to store energy. Watch, then reduce recovery to 20%."
  ],
  "controls": [
    {
      "key": "compress",
      "label": [
        "等效彈簧初始壓縮",
        "Initial equivalent compression"
      ],
      "min": 1,
      "max": 12,
      "step": 1,
      "value": 8,
      "unit": "cm",
      "options": null
    },
    {
      "key": "stiff",
      "label": [
        "等效彈簧硬度",
        "Equivalent spring stiffness"
      ],
      "min": 2,
      "max": 20,
      "step": 1,
      "value": 10,
      "unit": "kN/m",
      "options": null
    },
    {
      "key": "recover",
      "label": [
        "第一回彈能量回收率",
        "First-release energy recovery"
      ],
      "min": 5,
      "max": 100,
      "step": 5,
      "value": 80,
      "unit": "%",
      "options": null
    }
  ],
  "action": [
    "觀察一次",
    "Watch once"
  ],
  "mission": [
    "降低回收率，下一步要補的能量會怎樣？",
    "Lower recovery: what happens to energy needed for the next step?"
  ],
  "options": [
    [
      "需補的能量增加",
      "More energy must be supplied"
    ],
    [
      "不需要補任何能量",
      "No energy refill needed"
    ]
  ],
  "answer": 0,
  "reason": [
    "彈簧只是暫存能量；耗散成熱的部分，要由肌肉等外加功補回，才有同樣的下一步。",
    "A spring stores energy temporarily. Dissipation must be replaced by muscle or other external work to repeat the same step."
  ],
  "comparisons": [
    {
      "label": [
        "壓縮量加倍",
        "Double compression"
      ],
      "key": "compress",
      "a": 4,
      "b": 8,
      "base": {
        "stiff": 10,
        "recover": 80
      }
    },
    {
      "label": [
        "降低回收率",
        "Reduce recovery"
      ],
      "key": "recover",
      "a": 80,
      "b": 20,
      "base": {
        "stiff": 10,
        "compress": 8
      }
    },
    {
      "label": [
        "加硬彈簧",
        "Stiffen the spring"
      ],
      "key": "stiff",
      "a": 5,
      "b": 15,
      "base": {
        "compress": 8,
        "recover": 80
      }
    }
  ],
  "limit": [
    "10 kg 等效質點、線性彈簧與黏滯阻尼，從壓縮位置靜止釋放，觀察至首次回到未壓縮長度。回收率用來求阻尼；忽略重力與完整步態，不是馬腿實測或耗氧預測。肌腱實際被拉長，本圖以壓縮彈簧作類比。 圖中的5–100%是等效彈簧第一次回到原長時的動能／初始儲能，不是整隻馬的機械功或代謝節省率。下一步補能是恢復相同初始儲能的帳本，未模擬再壓縮過程。",
    "A 10 kg equivalent mass, linear spring and viscous damper released from rest until first reaching the neutral length. Recovery sets damping. Gravity and full gait are omitted; not horse measurements or oxygen prediction. Real tendons stretch; the compressed spring is an analogy. The 5–100% control is kinetic energy at first neutral return / initial spring energy, not whole-horse mechanical or metabolic savings. Refill is the work ledger needed to restore initial storage; recompression is not simulated."
  ],
  "formula": "m=10 kg (assumed equivalent mass); x0=compression cm/100 m; k=stiffness kN/m×1000 N/m.\nInitially x=x0, v=0; E0=½kx0² J. Gravity omitted; m x″+c x′+kx=0.\nη=recovery/100=kinetic energy at the first x=0 / E0; not whole-horse energy savings.\nω=√(k/m) rad/s; 0≤ζ<1; ωd=ω√(1−ζ²); c=2ζ√(km) N·s/m.\nt*=acos(−ζ)/ωd s. Solve η=exp(−2ζωt*) for ζ; η=1 gives ζ=c=0.\nx(t)=x0 exp(−ζωt)[cos(ωdt)+ζω/ωd sin(ωdt)]; v=dx/dt.\nElastic=½kx²; kinetic=½mv²; accumulated heat=∫0ᵗ c v²dt=E0−elastic−kinetic.\nAll three sum to E0. At first neutral return: recovered=ηE0; refill=(1−η)E0 J. Refill is a next-cycle ledger; recompression is not animated.\n201 poses; 2 s of screen time plays 0 to t*. Compressed spring is a stretched-tendon analogy. Right plot rescales its y axis to 0..E0 J each time; graph height alone cannot compare different stored energies.",
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/9787779/",
    "Biewener (1998) · Muscle-tendon stresses and elastic energy storage during locomotion in the horse"
  ],
  "ep": "s33",
  "date": "2026-10-06",
  "episodeTitle": "〈SP.33｜春節馬年特輯｜中指神功馬老師：從五根腳趾到單蹄狂奔的演化大冒險〉",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/sp-33-%E6%98%A5%E7%AF%80%E9%A6%AC%E5%B9%B4%E7%89%B9%E8%BC%AF-%E4%B8%AD%E6%8C%87%E7%A5%9E%E5%8A%9F%E9%A6%AC%E8%80%81%E5%B8%AB-%E5%BE%9E%E4%BA%94%E6%A0%B9%E8%85%B3%E8%B6%BE%E5%88%B0%E5%96%AE%E8%B9%84%E7%8B%82%E5%A5%94%E7%9A%84%E6%BC%94%E5%8C%96%E5%A4%A7%E5%86%92%E9%9A%AA/id1812447277?i=1000750373156",
    "duration": "10 分 14 秒",
    "durationEn": "10 min 14 sec",
    "durationIso": "PT10M14S",
    "appleId": "1000750373156",
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/bK_igZfVPGTpSrPzLra2O.jpg",
    "reviewed": "2026-10-06"
  },
  "defaults": {
    "compress": 8,
    "stiff": 10,
    "recover": 80
  },
  "keywords": "馬腿的回收彈簧,動物機制,科學好好聽,互動科學,Horse tendon spring,animal biomechanics,interactive science,肌腱,懸韌帶,彈性位能,阻尼,能量守恆,tendon,suspensory ligament,elastic energy,damping,energy conservation",
  "description": [
    "彈回來的能量，和一開始存的一樣多嗎？ 動手調整條件，觀察機制與模型限制。",
    "Is all stored energy returned by the spring? Change conditions and inspect the mechanism and model limits."
  ],
  "icon": "🐎",
  "formulaEn": "m=10 kg (assumed equivalent mass); x0=compression cm/100 m; k=stiffness kN/m×1000 N/m.\nInitially x=x0, v=0; E0=½kx0² J. Gravity omitted; m x″+c x′+kx=0.\nη=recovery/100=kinetic energy at the first x=0 / E0; not whole-horse energy savings.\nω=√(k/m) rad/s; 0≤ζ<1; ωd=ω√(1−ζ²); c=2ζ√(km) N·s/m.\nt*=acos(−ζ)/ωd s. Solve η=exp(−2ζωt*) for ζ; η=1 gives ζ=c=0.\nx(t)=x0 exp(−ζωt)[cos(ωdt)+ζω/ωd sin(ωdt)]; v=dx/dt.\nElastic=½kx²; kinetic=½mv²; accumulated heat=∫0ᵗ c v²dt=E0−elastic−kinetic.\nAll three sum to E0. At first neutral return: recovered=ηE0; refill=(1−η)E0 J. Refill is a next-cycle ledger; recompression is not animated.\n201 poses; 2 s of screen time plays 0 to t*. Compressed spring is a stretched-tendon analogy. Right plot rescales its y axis to 0..E0 J each time; graph height alone cannot compare different stored energies.",
  "formulaZh": "m=10 kg（等效假設）；x0=壓縮量cm/100 m；k=硬度kN/m×1000 N/m。\n初始x=x0、v=0，E0=½kx0² J；忽略重力。m x″+c x′+kx=0。\nη=回收率/100=首次x=0時的動能/E0；0<η≤1，並非真馬全身節能率。\nω=√(k/m) rad/s；0≤ζ<1，ωd=ω√(1−ζ²)，c=2ζ√(km) N·s/m。\nt*=acos(−ζ)/ωd s；用η=exp(−2ζωt*)反求ζ。η=1時ζ=c=0。\nx(t)=x0 exp(−ζωt)[cos(ωdt)+ζω/ωd sin(ωdt)]，v=dx/dt。\n彈性位能=½kx²；動能=½mv²；累積熱=∫0ᵗ c v²dt=E0−位能−動能。\n三項相加=E0；首次回到原長時回收ηE0，補能=(1−η)E0 J。補能是下一步帳本，未播放再壓縮。\n201個姿態，螢幕2秒播放0到t*。圖形彈簧是肌腱拉長／回彈的類比；右圖每次y軸0到E0 J，不同儲能圖的高度不能直接相比。",
  "dateModified": "2026-10-20"
};
