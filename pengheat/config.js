window.CONFIG={
  "id": "D04",
  "path": "pengheat",
  "title": [
    "企鵝腳的逆流熱交換",
    "Penguin countercurrent lab"
  ],
  "question": [
    "兩條血管反向流，能把熱帶回去嗎？",
    "Can opposite flows return heat toward the body?"
  ],
  "hint": [
    "先按同向流，再按逆向流；比較冷管出口，看白點朝哪邊走。",
    "Select Parallel, then Countercurrent. Compare the cold outlet and watch dot directions."
  ],
  "controls": [
    {
      "key": "mode",
      "label": [
        "管線安排",
        "Flow arrangement"
      ],
      "min": 0,
      "max": 2,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "同向流",
          "Parallel"
        ],
        [
          "逆向流",
          "Countercurrent"
        ],
        [
          "隔開",
          "Separated"
        ]
      ]
    },
    {
      "key": "flow",
      "label": [
        "兩側相同熱容量流率",
        "Equal heat-capacity flow"
      ],
      "min": 0.5,
      "max": 4,
      "step": 0.5,
      "value": 1,
      "unit": "W/K",
      "options": null
    },
    {
      "key": "couple",
      "label": [
        "兩管總熱導",
        "Total exchange conductance"
      ],
      "min": 0,
      "max": 16,
      "step": 1,
      "value": 8,
      "unit": "W/K",
      "options": null
    }
  ],
  "action": [
    "看流向",
    "Watch flow"
  ],
  "mission": [
    "其他條件相同，逆流通常能？",
    "Matched conditions: countercurrent flow generally…"
  ],
  "options": [
    [
      "帶回更多熱",
      "Return more heat"
    ],
    [
      "製造額外熱",
      "Create extra heat"
    ]
  ],
  "answer": 0,
  "reason": [
    "熱從較熱的一段流向較冷的一段；逆流使交換沿管線延續，但不製造能量。",
    "Heat moves from hotter to colder cells. Counterflow sustains exchange along the tube without creating energy."
  ],
  "comparisons": [
    {
      "label": [
        "同向／逆向",
        "Parallel / countercurrent"
      ],
      "key": "mode",
      "a": 0,
      "b": 1
    },
    {
      "label": [
        "弱／強熱交換",
        "Weak / strong exchange"
      ],
      "key": "couple",
      "a": 1,
      "b": 12
    },
    {
      "label": [
        "反例：隔開管線",
        "Counterexample: separated"
      ],
      "key": "mode",
      "a": 1,
      "b": 2
    }
  ],
  "limit": [
    "8 段有限體積、每段每管熱容量 2 J/K；暖入口 40°C、冷入口 5°C 固定，兩側流率相同。計算 120 秒後近穩態，不是企鵝實測血管尺寸或身體冷卻模型；動畫僅示意流向。 初始暖管各40°C、冷管各5°C；每0.02秒同步前進，共6000步。120秒接近穩態但不是精確穩態或理想連續交換器公式。畫面白點的2秒／逐步⅛程只示意流向，溫度與熱流不隨白點累積。隔開模式用同向流作零交換對照；同向流是人工安排，非真企鵝回程。熱容量流率W/K＝每1K溫差每秒帶走的熱量，不是血液體積流量。來源支持保熱機制，不校準40／5°C、2J/K或熱導。 2026-10-10實際核對Apple台灣EP228單集頁、封面、訂閱者限定與約11分鐘；不使用P0D或通用免費schema推定時長／權益。音訊未測。",
    "Eight finite-volume cells, each tube-cell 2 J/K; fixed inlets 40°C and 5°C and equal capacity rates. Results after 120 s approach steady state. Not measured penguin vessels or whole-body cooling; animation shows flow direction. Initially each warm cell is 40°C and each cool cell 5°C; 6000 synchronous Euler steps at 0.02 s. The 120 s result is near, not exactly at, steady state and differs from an ideal continuous exchanger. The 2 s dot path and eighth-path steps only illustrate direction; temperatures and heat are not accumulated by animation. Separated flow is a zero-exchange parallel control. Parallel flow is artificial, not an actual penguin return. Capacity rate W/K is heat per second per kelvin, not blood volume flow. Sources support heat conservation mechanisms, without calibrating inlets, cell capacity or conductance. The Taiwan Apple EP228 page, artwork, subscriber label and rounded 11-minute display were verified on 2026-10-10. P0D and generic free-offer schema are rejected as duration/access evidence. Actual audio untested."
  ],
  "formula": "2 dTh[i]/dt = F(Th[upstream]−Th[i]) − U/8(Th[i]−Tc[i])\n2 dTc[i]/dt = F(Tc[upstream]−Tc[i]) + U/8(Th[i]−Tc[i])\nOpposite cold upstream for counterflow; U=0 when separated\nEnergy ledger includes both inlet/outlet fluxes\nInitial cells: warm 40°C, cool 5°C; synchronous Euler dt=0.02 s, 6000 steps\nCold outlet: left cell0 for counterflow, right cell7 otherwise; warm outlet right cell7\nHeat gained by cold flow = F*(coldOut-5°C) in W=J/s\nRecovered fraction=(coldOut-5)/(40-5), not survival probability\nE=2*sum(Th+Tc), E0=720J relative to a0°C bookkeeping reference\nNet input=sum(dt*F*(40+5-hotOut-coldOut)); residual=E-E0-net\n2 display seconds/eighth-path steps only show direction; all numerical results stay at120 model seconds",
  "source": [
    "https://legacy.bas.ac.uk/about_antarctica/wildlife/birds/penguins/index.php",
    "British Antarctic Survey · Penguin adaptations"
  ],
  "ep": "228",
  "date": "2026-10-07",
  "episodeTitle": "〈VIP｜EP.228｜穿著燕尾服的戰術大師：企鵝的生存黑科技與暗黑兵法〉",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/vip-ep-228-%E7%A9%BF%E8%91%97%E7%87%95%E5%B0%BE%E6%9C%8D%E7%9A%84%E6%88%B0%E8%A1%93%E5%A4%A7%E5%B8%AB-%E4%BC%81%E9%B5%9D%E7%9A%84%E7%94%9F%E5%AD%98%E9%BB%91%E7%A7%91%E6%8A%80%E8%88%87%E6%9A%97%E9%BB%91%E5%85%B5%E6%B3%95/id1812447277?i=1000763399630",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource221/v4/01/49/93/014993b9-2f84-b4ef-b2ea-c0767a822927/1be1ae3e-9661-456f-bd1e-6eb5d62ac312.jpg/960x960bb.webp",
    "coverAvailable": true,
    "appleId": "1000763399630",
    "showId": "1812447277",
    "duration": "約11分鐘",
    "durationEn": "About 11 minutes",
    "subscribersOnly": true,
    "access": [
      "訂閱者限定",
      "Subscribers only"
    ],
    "reviewed": "2026-10-10",
    "firstory": "https://open.firstory.me/story/cmocq9mo50uz201wy3rbpa9pr",
    "verificationScope": "Actual Taiwan Apple show search228 and EP228 detail title, artwork, 11-minute rounded display and subscriber label. P0D duration and generic free offer rejected. No seconds invented; actual audio untested."
  },
  "defaults": {
    "mode": 1,
    "flow": 1,
    "couple": 8
  },
  "keywords": "企鵝,逆流熱交換,血管,熱容量流率,熱導,熱量守恆,同向流,有限體積,企鵝腳,科學好好聽,兒童科學,penguin,countercurrent heat exchange,blood vessels,heat-capacity rate,thermal conductance,energy conservation,parallel flow,finite volume,science for kids,interactive experiment",
  "description": [
    "切換同向、逆向與隔開管線，比較企鵝血管熱交換的八段教具模型；固定40°C與5°C入口，顯示120秒結果，流向動畫不推算真體溫。",
    "Compare parallel, countercurrent and separated flows in an eight-cell teaching model of penguin vessel heat exchange. Fixed 40°C and 5°C inlets; results at 120 s, with schematic flow rather than predicted animal temperatures."
  ],
  "icon": "🐧",
  "formulaZh": "兩管各8段；每段每管熱容量C＝2J/K\n暖入口40°C、冷入口5°C；初始暖40°C、冷5°C\nF＝兩管相同熱容量流率（W/K）；U＝兩管總熱導（W/K）\n每對段熱導u＝U/8；隔開時u＝0\nC dTh[i]/dt＝F(暖上游−Th[i])−u(Th[i]−Tc[i])\nC dTc[i]/dt＝F(冷上游−Tc[i])+u(Th[i]−Tc[i])\n暖流向右；同向冷流向右、入口在左；逆向冷流向左、入口在右\n步長dt＝0.02s；6000步＝120s；每步兩管同步更新\n冷出口：逆向取左端第0段，其餘取右端第7段；暖出口取右端第7段\n冷管獲得熱流＝F(冷出口−5°C)，單位W＝J/s\n回收比＝(冷出口−5°C)/(40°C−5°C)，不是動物存活率\n庫存E＝CΣ(Th+Tc)；起點E0＝720J（以0°C為帳本基準）\n淨入能量＝Σ dt×F(40°C+5°C−暖出口−冷出口)\n帳本誤差＝E−E0−淨入能量；各對段交換項相消\n2秒畫面／逐步⅛程只示意流向，數值固定為120s結果\n8段有限體積教具，未校準血管尺寸、真血速或體溫",
  "dateModified": "2026-10-10"
};
