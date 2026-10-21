window.CONFIG={
  "id": "A06",
  "path": "glide",
  "title": [
    "飛鼠滑翔：高度換距離",
    "Flying squirrel glide"
  ],
  "question": [
    "多一點起飛高度，能滑到更遠的樹嗎？",
    "Can extra launch height reach a farther tree?"
  ],
  "hint": [
    "先按觀察，再降低起飛高度；把目標調到同高，看能否到達。",
    "Watch, then lower launch height. Set the target equally high and check reach."
  ],
  "controls": [
    {
      "key": "height",
      "label": [
        "起飛高度",
        "Launch height"
      ],
      "min": 0,
      "max": 25,
      "step": 1,
      "value": 15,
      "unit": "m",
      "options": null
    },
    {
      "key": "dist",
      "label": [
        "目標樹距離",
        "Target-tree distance"
      ],
      "min": 5,
      "max": 60,
      "step": 5,
      "value": 20,
      "unit": "m",
      "options": null
    },
    {
      "key": "ratio",
      "label": [
        "示例滑翔比：水平／下降",
        "Example ratio: forward / drop"
      ],
      "min": 0.5,
      "max": 4,
      "step": 0.5,
      "value": 2,
      "unit": "m/m",
      "options": null
    },
    {
      "key": "target",
      "label": [
        "目標最低高度",
        "Minimum target height"
      ],
      "min": 0,
      "max": 25,
      "step": 1,
      "value": 3,
      "unit": "m",
      "options": null
    }
  ],
  "mission": [
    "無上升氣流的穩定滑翔，能保持起點高度嗎？",
    "Steady gliding without updraft: can it keep launch height?"
  ],
  "options": [
    [
      "會逐漸下降",
      "It descends"
    ],
    [
      "飛膜可以無限升高",
      "The membrane lifts it forever"
    ]
  ],
  "answer": 0,
  "reason": [
    "滑翔比是水平距離／下降高度；重力位能補足阻力耗能，飛膜不會自己供能。",
    "Glide ratio is horizontal travel / height lost. Gravitational energy pays drag losses; a membrane supplies no energy."
  ],
  "comparisons": [
    {
      "label": [
        "起點更高",
        "Higher launch"
      ],
      "key": "height",
      "a": 10,
      "b": 20
    },
    {
      "label": [
        "較平／較陡",
        "Shallow / steep"
      ],
      "key": "ratio",
      "a": 1,
      "b": 3
    },
    {
      "label": [
        "反例：同高目標",
        "Counterexample: same height"
      ],
      "key": "target",
      "a": 3,
      "b": 15,
      "base": {
        "height": 15,
        "dist": 20,
        "ratio": 2
      }
    }
  ],
  "limit": [
    "固定滑翔比的穩態、直線二維模型，無風。0.15 kg、飛膜 0.12 m²、升力係數 0.8 與空氣密度 1.2 kg/m³ 都是示例；CD=CL/滑翔比。預先具有穩態速度，略去起跳加速、轉彎與著陸抬身剎車。速度是到達前模型值，不是安全落地或傷勢預測；真實飛鼠常為非穩態。 滑翔比直接選定，沒有由真實姿態或物種資料估算；樹形示意、飛鼠放大，位置水平與垂直採同一比例。",
    "A steady straight 2D glide at fixed ratio, without wind. Illustrative mass 0.15 kg, membrane 0.12 m², CL=0.8, air density 1.2 kg/m³ and CD=CL/ratio. Assumes steady launch speed; no launch transient, turns or landing flare. Speed is before contact, not safety or injury. Real squirrel glides are often unsteady. Ratio is selected directly, not inferred from measured posture or species data. Trees are schematic, squirrel enlarged; positions share one horizontal/vertical scale."
  ],
  "formula": "G = forward distance / height lost (m/m); γ = atan(1/G). y = h−x/G; range to ground = hG.\nAssumed m = 0.15 kg, g = 9.81 m/s², ρ = 1.2 kg/m³, S = 0.12 m²; CL = 0.8, CD = CL/G.\nSteady V = sqrt(2mg / (ρS sqrt(CL²+CD²))); vx = V cosγ; downward vy = V sinγ. Speed and kinetic energy stay constant.\nReach requires h−distance/G ≥ minimum target height. Stop at the target-tree plane or ground, whichever comes first. Travel time = stopped horizontal distance / vx. Zero height has no flight or pre-contact speed.\nDrag D = ρS CD V²/2; dissipated energy = D × sloping path = mg × height lost (J). Lift and drag balance weight; no safe-landing prediction.",
  "source": [
    "https://journals.biologists.com/jeb/article/210/8/1413/17353/Take-off-and-landing-forces-and-the-evolution-of",
    "JEB (2007) · Flying squirrel take-off and landing"
  ],
  "icon": "🐿️",
  "ep": "227",
  "episodeTitle": "〈VIP｜EP.227｜夜空中的滑翔翼！飛鼠的粉紅螢光與空氣動力學秘密〉",
  "date": "2026-10-06",
  "action": [
    "觀察一次",
    "Watch once"
  ],
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/vip-ep-227-%E5%A4%9C%E7%A9%BA%E4%B8%AD%E7%9A%84%E6%BB%91%E7%BF%94%E7%BF%BC-%E9%A3%9B%E9%BC%A0%E7%9A%84%E7%B2%89%E7%B4%85%E8%9E%A2%E5%85%89%E8%88%87%E7%A9%BA%E6%B0%A3%E5%8B%95%E5%8A%9B%E5%AD%B8%E7%A7%98%E5%AF%86/id1812447277?i=1000762623130",
    "duration": "約 10 分鐘",
    "durationEn": "About 10 min",
    "appleId": "1000762623130",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource221/v4/9a/cc/d9/9accd969-3696-c072-2e8d-36e484b8580f/8dc17fee-be91-406c-a27c-eb0fd133a41e.jpg/500x500bb.webp",
    "subscribersOnly": true,
    "reviewed": "2026-10-06"
  },
  "defaults": {
    "height": 15,
    "dist": 20,
    "ratio": 2,
    "target": 3
  },
  "keywords": "飛鼠滑翔：高度換距離,Flying squirrel glide,飛膜,滑翔比,升力,阻力,glide ratio,lift,drag,科學好好聽,動物科學,互動科學,science for kids",
  "description": [
    "多一點起飛高度，能滑到更遠的樹嗎？ 動手改變條件，觀察機制與假設。",
    "Can extra launch height reach a farther tree? Change conditions and inspect the mechanism and assumptions."
  ],
  "formulaZh": "G＝水平距離／下降高度（m/m）；γ＝atan(1/G)。y＝h−x/G；到地面範圍＝hG。\n質量 m＝0.15 kg，重力 g＝9.81 m/s²，空氣密度 ρ＝1.2 kg/m³，飛膜面積 S＝0.12 m²；CL＝0.8，CD＝CL/G，都是自訂假設。\n穩態速度 V＝sqrt(2mg / (ρS sqrt(CL²＋CD²)))；vx＝V cosγ，向下 vy＝V sinγ。速度固定，動能不變。\n到達判準：h−距離/G ≥ 最低目標高度。停止於目標樹平面或先到地面；實際航程時間＝停止水平距離/vx。0高度沒有航程，不報接觸前速度。\n阻力 D＝ρS CD V²/2；耗能＝D×斜程＝mg×下降高度（J）。升力與阻力合力平衡重力；這不是安全落地預測。",
  "dateModified": "2026-10-08"
};
