window.CONFIG={
  "id": "A10",
  "path": "rockbal",
  "title": [
    "雪豹走窄岩：找重心",
    "Snow leopard balance"
  ],
  "question": [
    "身體偏出去，用尾巴能把重心帶回來嗎？",
    "Can the tail bring an offset mass centre back over support?"
  ],
  "hint": [
    "縮窄岩面，再把身體偏右、尾巴偏左；找青色重心投影。",
    "Narrow the rock. Shift body right and tail left; find the cyan mass-centre projection."
  ],
  "controls": [
    {
      "key": "body",
      "label": [
        "身體向右偏移",
        "Body shift to the right"
      ],
      "min": -30,
      "max": 30,
      "step": 2,
      "value": 12,
      "unit": "cm",
      "options": null
    },
    {
      "key": "tail",
      "label": [
        "尾巴重心相對身體",
        "Tail centre relative to body"
      ],
      "min": -60,
      "max": 60,
      "step": 10,
      "value": -60,
      "unit": "cm",
      "options": null
    },
    {
      "key": "width",
      "label": [
        "岩面寬度",
        "Rock width"
      ],
      "min": 4,
      "max": 40,
      "step": 2,
      "value": 12,
      "unit": "cm",
      "options": null
    }
  ],
  "mission": [
    "判斷這個靜態關卡，要看哪個位置？",
    "Which location decides this static balance check?"
  ],
  "options": [
    [
      "整體重心投影",
      "Total mass-centre projection"
    ],
    [
      "只有頭部",
      "The head alone"
    ]
  ],
  "answer": 0,
  "reason": [
    "整體重心是身體與尾巴的質量加權位置；投影需在實際支撐範圍內。",
    "The total centre is mass-weighted across body and tail. Its projection must lie in the actual support interval."
  ],
  "comparisons": [
    {
      "label": [
        "尾巴向左／右",
        "Tail left / right"
      ],
      "key": "tail",
      "a": -60,
      "b": 60,
      "base": {
        "body": 12,
        "width": 12
      }
    },
    {
      "label": [
        "窄／寬岩面",
        "Narrow / wide rock"
      ],
      "key": "width",
      "a": 4,
      "b": 20
    },
    {
      "label": [
        "身體靠中／偏外",
        "Centred / offset body"
      ],
      "key": "body",
      "a": 0,
      "b": 24,
      "base": {
        "tail": 0,
        "width": 12
      }
    }
  ],
  "limit": [
    "身體 40 kg、尾巴 6 kg 是示例。只計橫向加權重心；腳掌支撐最大寬 20 cm，實際範圍取腳寬與岩寬較小值。身體姿態偏移而接地點保持不動；尾巴位置是質心，不是尾端。等效兩邊緣的靜態支撐，不計抓地、坡度、風、步行或跳躍，也不提供野外安全預測。",
    "Illustrative 40 kg body and 6 kg tail; transverse mass-weighted centre only. Foot support is at most 20 cm wide, limited by rock width. Body posture shifts with contacts fixed; tail control locates its centroid, not tip. Two-edge static support, without grip, slope, wind, walking or jumping; no field-safety prediction."
  ],
  "formula": "Body40kg, tail6kg; g=9.81m/s²; teaching assumptions\nBody xb=control cm/100 (m); tail centroid xt=xb+tail offset/100\nTotal centre xc=(40xb+6xt)/46 (m)\nActual half-support h=min(rock width/100,0.20m)/2\nStatic pass: −h≤xc≤h; edge feasible with zero margin\nMargin=h−|xc| (m); negative means projection outside\nWeight W=46×9.81=451.26N\nRequired NL=W(h−xc)/(2h); NR=W−NL\nNL+NR=W; h(NR−NL)=Wxc; force and moment balance\nNegative required reaction: ground cannot pull down; infeasible\nOutside-support gravity moment=W max(0,|xc|−h) (N·m)\nTail control is centroid, not tip; fixed contacts; diagram schematic\nNo friction, wind, slope, walking, jumping or tipping dynamics",
  "source": [
    "https://snowleopard.org/home/learn-about-snow-leopards/",
    "Snow Leopard Trust · Tail and rocky habitat"
  ],
  "icon": "🐆",
  "ep": "233",
  "episodeTitle": "〈VIP｜雪山之鬼：雪豹的極限生存黑科技與驚人基因秘密｜EP.233〉",
  "date": "2026-10-03",
  "action": [
    "觀察一次",
    "Watch once"
  ],
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277?i=1000772783409",
    "verified": true,
    "duration": "約16分鐘",
    "durationEn": "About 16 min",
    "access": [
      "訂閱者限定",
      "Subscribers only"
    ],
    "reviewed": "2026-10-06",
    "officialImage": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource211/v4/9e/23/d1/9e23d1f0-b177-cdef-98e9-acb9a4eb17d4/55102f15-5a80-43ae-b3bb-912eed93e1b0.jpg/250x250bb.webp",
    "subscribersOnly": true
  },
  "defaults": {
    "body": 12,
    "tail": -60,
    "width": 12
  },
  "keywords": "雪豹走窄岩：找重心,Snow leopard balance,雪豹,重心,支撐範圍,centre of mass,static balance,科學好好聽,動物科學,互動科學,science for kids",
  "description": [
    "身體偏出去，用尾巴能把重心帶回來嗎？ 動手改變條件，觀察機制與假設。",
    "Can the tail bring an offset mass centre back over support? Change conditions and inspect the mechanism and assumptions."
  ],
  "formulaZh": "身體40kg、尾巴6kg；g=9.81m/s²；皆為教學假設\n身體位置xb=控制公分÷100（m）；尾質心xt=xb+尾巴偏移÷100\n整體重心 xc=(40xb+6xt)/46（m）\n實際支撐半寬 h=min(岩面寬度÷100,0.20m)/2\n靜態通過：−h≤xc≤h；邊緣可行但餘裕為0\n餘裕=h−|xc|（m）；負值代表投影在外\n總重量W=46×9.81=451.26N\n所需左反力 NL=W(h−xc)/(2h)；右反力 NR=W−NL\nNL+NR=W；h(NR−NL)=Wxc；力與力矩均需平衡\n若所需反力為負，地面不能往下拉：靜態不可能\n支撐外繞邊緣的重力矩=W max(0,|xc|−h)（N·m）\n尾巴位置是質心，不是尾端；固定接地點，圖形示意\n不計摩擦、風、坡度、行走、跳躍或傾倒運動",
  "dateModified": "2026-10-09"
};
