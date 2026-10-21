window.CONFIG={
  "id": "A07",
  "path": "hopbank",
  "title": [
    "袋鼠的六跳能量帳",
    "Kangaroo six-hop energy"
  ],
  "question": [
    "不補能量，下一跳會跟上一跳一樣高嗎？",
    "Without added energy, will each hop be equally high?"
  ],
  "hint": [
    "按觀察看六跳；先把回收率調成 0%，再加每跳補能。",
    "Watch six hops. Set recovery to 0%, then add work per hop."
  ],
  "controls": [
    {
      "key": "compress",
      "label": [
        "第一次等效壓縮",
        "Initial equivalent compression"
      ],
      "min": 2,
      "max": 15,
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
        "每跳回收率",
        "Energy recovery per hop"
      ],
      "min": 0,
      "max": 100,
      "step": 10,
      "value": 80,
      "unit": "%",
      "options": null
    },
    {
      "key": "refill",
      "label": [
        "每跳外加補能",
        "Added work per hop"
      ],
      "min": 0,
      "max": 150,
      "step": 10,
      "value": 0,
      "unit": "J",
      "options": null
    }
  ],
  "mission": [
    "有損耗、零補能時，連續跳躍會？",
    "With losses and no added work, repeated hops…"
  ],
  "options": [
    [
      "逐次變低",
      "Become lower"
    ],
    [
      "越跳越高",
      "Become higher"
    ]
  ],
  "answer": 0,
  "reason": [
    "彈性儲能可以回收，但損失仍須補回；這個固定步態帳本不推算耗氧與最高速度。",
    "Elastic energy can return, but losses require replacement. This fixed-gait ledger does not predict oxygen use or top speed."
  ],
  "comparisons": [
    {
      "label": [
        "有／無回收",
        "With / without recovery"
      ],
      "key": "recover",
      "a": 80,
      "b": 0
    },
    {
      "label": [
        "不補／補足初次損失",
        "No / initial-loss refill"
      ],
      "key": "refill",
      "a": 0,
      "b": 10,
      "base": {
        "compress": 10,
        "stiff": 10,
        "recover": 80
      }
    },
    {
      "label": [
        "初次壓縮加倍",
        "Double initial compression"
      ],
      "key": "compress",
      "a": 4,
      "b": 8
    }
  ],
  "limit": [
    "20 kg 等效質點、線性彈簧，落地動能先全轉為儲能；每次回彈留下所選比例並增加外加功，再以 E/(mg) 計跳高。六跳採指定接地／騰空順序，動畫時間不是接觸力解。忽略重心基準以下的重力功與姿態，不是袋鼠測量、生理極限或耗氧推算；真實肌腱被拉伸。",
    "A 20 kg equivalent mass and linear spring. Incoming landing energy stores elastically; each release retains the selected fraction plus added work, giving height E/(mg). Six prescribed contact/flight phases; animation timing is not a contact-force solution. Gravity work below the reference and posture are omitted. Not measured kangaroo physiology or oxygen prediction; real tendons stretch."
  ],
  "formula": "x0 = compression cm / 100 m; k = stiffness kN/m × 1000 N/m; equivalent m = 20 kg, g = 9.81 m/s².\nInitial E0 = integral kx dx from 0 to x0 = k x0² / 2 (J). η = recovery / 100; W = added mechanical work per release (J).\nRelease n: loss = (1−η)E[n−1]; E[n] = ηE[n−1] + W; predicted apex = E[n]/(mg) m.\nLedger: E0 + nW = E[n] + cumulative loss. Cumulative work/loss are budgets through the current release, not instantaneous animation energies.\nMaintain initial E0 with W = (1−η)E0. Example: 10 cm, 10 kN/m, 80% recovery gives E0 = 50 J; 10 J each release maintains 50 J (25.5 cm).\n100% recovery and zero work is an ideal lossless case. Zero recovery and zero work exhaust hopping energy on release 1; subsequent releases are zero-energy ledgers. Real tendons stretch; the compressed equivalent spring is not tendon anatomy or a contact-force solution.",
  "source": [
    "https://journals.biologists.com/jeb/article/221/12/jeb161661/33807/Why-do-mammals-hop-Understanding-the-ecology",
    "McGowan & Collins (2018) · Hopping biomechanics"
  ],
  "icon": "🦘",
  "ep": "208",
  "episodeTitle": "〈EP.208｜演化論的肌肉與魔法：解密「袋鼠」不可思議的生存工藝〉",
  "date": "2026-10-06",
  "action": [
    "觀察一次",
    "Watch once"
  ],
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/ep-208-%E6%BC%94%E5%8C%96%E8%AB%96%E7%9A%84%E8%82%8C%E8%82%89%E8%88%87%E9%AD%94%E6%B3%95-%E8%A7%A3%E5%AF%86-%E8%A2%8B%E9%BC%A0-%E4%B8%8D%E5%8F%AF%E6%80%9D%E8%AD%B0%E7%9A%84%E7%94%9F%E5%AD%98%E5%B7%A5%E8%97%9D/id1812447277?i=1000754102986",
    "duration": "約 18 分鐘",
    "durationEn": "About 18 min",
    "appleId": "1000754102986",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/62/a3/78/62a378ed-c3b5-bb64-2164-2d980461071d/mza_7866055195508036093.jpg/500x500bb.webp",
    "subscribersOnly": false,
    "reviewed": "2026-10-06"
  },
  "defaults": {
    "compress": 8,
    "stiff": 10,
    "recover": 80,
    "refill": 0
  },
  "keywords": "袋鼠的六跳能量帳,Kangaroo six-hop energy,袋鼠,肌腱,跳躍能量,elastic energy,hopping,科學好好聽,動物科學,互動科學,science for kids",
  "description": [
    "不補能量，下一跳會跟上一跳一樣高嗎？ 動手改變條件，觀察機制與假設。",
    "Without added energy, will each hop be equally high? Change conditions and inspect the mechanism and assumptions."
  ],
  "formulaZh": "初始壓縮 x0＝cm/100 m；硬度 k＝kN/m×1000 N/m；等效質量 m＝20 kg，g＝9.81 m/s²。\n初始儲能 E0＝∫0至x0 kx dx＝k x0²/2（J）。η＝回收率/100，W＝每次外加機械功（J）。\n第n次回彈：損失＝(1−η)E[n−1]；E[n]＝ηE[n−1]＋W；預計最高高度＝E[n]/(mg) m。\n帳本：E0＋nW＝E[n]＋累積損失。累積補能／損失顯示到目前這次回彈結束的預算，不是動畫此刻能量。\n維持原初E0需W＝(1−η)E0。例：壓10cm、硬10kN/m、回收80%，E0＝50J，每次補10J才維持50J（25.5cm）。\nη＝100%、W＝0是無損耗理想對照；η＝0%、W＝0第一回彈後已無跳躍能量，後續只是零能量帳。肌腱真實受拉伸；此等效壓縮彈簧不是肌腱外形或接觸力解。"
};
