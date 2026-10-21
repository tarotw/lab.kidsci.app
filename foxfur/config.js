window.CONFIG={
  "id": "D06",
  "path": "foxfur",
  "title": [
    "北極狐的空氣保溫層",
    "Arctic fox insulation"
  ],
  "question": [
    "毛皮保暖，是自己發熱嗎？",
    "Does insulating fur create heat?"
  ],
  "hint": [
    "加厚乾毛皮看散熱變慢，再把毛弄濕；曲線是 120 分鐘的示例。",
    "Thicken dry fur, then wet it. Compare a 120-minute cooling example."
  ],
  "controls": [
    {
      "key": "thick",
      "label": [
        "毛層厚度",
        "Fur-layer thickness"
      ],
      "min": 1,
      "max": 5,
      "step": 0.5,
      "value": 3,
      "unit": "cm",
      "options": null
    },
    {
      "key": "wet",
      "label": [
        "含水程度（示例）",
        "Wetness (example)"
      ],
      "min": 0,
      "max": 100,
      "step": 10,
      "value": 0,
      "unit": "%",
      "options": null
    },
    {
      "key": "wind",
      "label": [
        "風速",
        "Wind speed"
      ],
      "min": 0,
      "max": 10,
      "step": 1,
      "value": 2,
      "unit": "m/s",
      "options": null
    },
    {
      "key": "air",
      "label": [
        "環境溫度",
        "Ambient temperature"
      ],
      "min": -30,
      "max": 20,
      "step": 5,
      "value": -10,
      "unit": "°C",
      "options": null
    }
  ],
  "action": [
    "觀察機制",
    "Watch"
  ],
  "mission": [
    "沒有持續產熱，保溫良好的物體最後？",
    "Without ongoing heat production, an insulated object eventually…"
  ],
  "options": [
    [
      "接近環境溫度",
      "Approaches ambient temperature"
    ],
    [
      "永遠保持初溫",
      "Keeps its initial temperature forever"
    ]
  ],
  "answer": 0,
  "reason": [
    "空氣層增加熱阻，使冷卻變慢；模型沒有代謝熱，因此仍逐漸接近環境溫度。",
    "Trapped air increases thermal resistance and slows cooling. With no metabolic heat in this model, temperature still approaches ambient."
  ],
  "comparisons": [
    {
      "label": [
        "薄／厚乾毛",
        "Thin / thick dry layer"
      ],
      "key": "thick",
      "a": 1,
      "b": 5
    },
    {
      "label": [
        "乾／濕毛",
        "Dry / wet fur"
      ],
      "key": "wet",
      "a": 0,
      "b": 100
    },
    {
      "label": [
        "無風／強風",
        "Still / windy"
      ],
      "key": "wind",
      "a": 0,
      "b": 10
    }
  ],
  "limit": [
    "1 m² 教學物體初溫 38°C、熱容量 6000 J/K，毛層 k=0.04–0.20 W/(m·K)，表面 h=5+3v W/(m²·K)，都是假設值。含水提高等效 k；忽略代謝、蒸發、日照與毛的微結構。不預測動物存活或低溫安全。 含水到等效導熱率為自訂線性關係，不是實測狐狸濕毛曲線；本教具的風只改表面對流，不模擬風吹進毛層。1m²為固定交換面積，單一均溫熱庫近似，不求皮膚到核心的真分布。120模型分用2畫面秒播放，逐步15模型分；暫停保留目前曲線與游標，完成逐步明示從頭。虛線完整120分為預覽，實線只到目前，分前不偷看下一整分；各保存對照固定完整120分，不隨重播歸零。120分只是觀察上限，物體仍會繼續冷卻；來源支持毛皮保溫，未校準本教具熱容量、導熱率或風公式。 溫度文字以0.1°C四捨五入，避免顯示負零；曲線和運算仍保留完整精度。",
    "A 1 m² object starts at 38°C with capacity 6000 J/K. Fur k=0.04–0.20 W/(m·K) and surface h=5+3v W/(m²·K) are assumptions. Wetness increases effective k; metabolism, evaporation, sun and microstructure omitted. No survival or temperature safety prediction. Wetness-to-effective-conductivity is an assumed linear relation, not a measured wet fox curve. Wind only changes external convection, without flow through the coat. Fixed1m² exchange area and a single uniform store approximate the object, not real skin/core gradients.120model min plays in2display seconds; Step15model min. Pause keeps the current curve/cursor, and completed Step explicitly restarts. Dashed full120min curve is a preview; solid curve stops at current time without future-minute data. Saved comparisons remain at full120min through replay.120min is a view limit, not the end of cooling. Sources support insulation mechanisms without calibrating the example capacity, conductivity or wind law. Temperature text rounds to0.1°C without negative zero; curves and calculations retain full precision."
  ],
  "formula": "Rfur=d/(kA); Rair=1/(hA); Rtotal=Rfur+Rair\nT(t)=Tair+(38−Tair)exp(−t/(Rtotal C))\nNo metabolic heat term\nFixedA=1m²,C=6000J/K,T0=38°C; k=0.04+0.16wet/100; h=5+3wind\nModelminutes multiply60 for seconds; tau=R*C/60 minutes\nQ=(T-Tair)/R in W=J/s; C*dT/dseconds=-Q; lostEnergy=C*(38-T)\nDashed full120min preview; solid only integer records not after now plus exact current analytic point\n2display seconds shows120model minutes; Step15model minutes; completed Step explicitly restarts\nBoth saved comparisons at120model minutes independent of replay; observation limit does not stop cooling",
  "source": [
    "https://npolar.no/en/species/arctic-fox/",
    "Norwegian Polar Institute · Arctic fox"
  ],
  "ep": "195",
  "date": "2026-10-07",
  "episodeTitle": "〈EP.195｜哺乳動物（下）：生存大師的裝備庫與感官世界〉",
  "podcast": {
    "verified": true,
    "urlVerified": true,
    "provider": "Firstory",
    "url": "https://open.firstory.fm/story/cmdpx4cuu00dk01xle9m8flf4",
    "source": "https://open.firstory.fm/story/cmdpx4cuu00dk01xle9m8flf4",
    "title": "〈EP.195｜哺乳動物（下）：生存大師的裝備庫與感官世界〉",
    "durationSeconds": 1071,
    "duration": "17 分 51 秒",
    "durationEn": "17 min 51 sec",
    "durationIso": "PT17M51S",
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/FSRkGqAhhOviNl0Pb7fhg.jpg",
    "coverAvailable": true,
    "coverFile": "podcast/ep195.jpg",
    "artworkVisualChecked": true,
    "verifiedOn": "2026-10-08",
    "publishedAt": "Fri, 13 Feb 2026 21:20:36 GMT",
    "evidenceBasis": "Current saved publisher RSS + exact full public Firstory episode page + matching artwork bytes and pixels. No Apple ID, entitlement or audio inference."
  },
  "defaults": {
    "thick": 3,
    "wet": 0,
    "wind": 2,
    "air": -10
  },
  "keywords": "北極狐,毛皮,空氣保溫層,熱阻,導熱率,對流,含水,冷卻,熱量守恆,科學好好聽,兒童科學,arctic fox,fur insulation,trapped air,thermal resistance,conductivity,convection,wetness,cooling,energy conservation,science for kids,interactive experiment",
  "description": [
    "調整毛層厚度、含水與風速，比較無持續產熱示例物的熱阻與冷卻；虛線預覽120分鐘，實線與游標顯示目前時刻，不推算活狐狸體溫。",
    "Change fur thickness, wetness and wind to compare resistance and cooling of a teaching object without ongoing heating. Dashed curve previews 120 min; solid curve and cursor show current time, without predicting living fox temperatures."
  ],
  "icon": "🦊",
  "extraSources": [
    [
      "https://link.springer.com/article/10.1007/s00300-005-0054-9",
      "Fuglesteg et al. (2006) · Arctic fox seasonal insulation, abstract"
    ]
  ],
  "formulaZh": "固定交換面積A＝1m²；示例物初溫38°C、熱容量C＝6000J/K\n毛層厚度d（m）＝厚度cm/100\n含水w＝0–100%；等效導熱率k＝0.04+0.16w/100 W/(m·K)，自訂假設\n表面對流h＝5+3v W/(m²·K)，v為示例風速m/s\n毛層熱阻Rf＝d/(kA)；表面熱阻Ra＝1/(hA)；R＝Rf+Ra（K/W）\n時間t以秒計；T(t)＝Tair+(38−Tair)exp[−t/(RC)]\n時間常數τ＝RC/60，單位模型分鐘\n散熱Q(t)＝[T(t)−Tair]/R，單位W＝J/s\nC dT/dt＝−Q；未有持續代謝產熱\n累積散失E＝C[38−T(t)]，單位J；1kJ＝1000J\n模型分鐘m需乘60秒，不能漏換單位\n完整虛線＝120分預覽；實線只取不晚於目前的整分資料＋目前解析值\n2畫面秒＝120模型分；每次逐步15模型分\n看完後逐步明示從頭；對照兩組固定120分，重播不重算保存帳\n120分只到觀察上限，無限時間才漸近環境，不預測活狐體溫",
  "dateModified": "2026-10-08"
};
