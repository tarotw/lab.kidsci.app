window.CONFIG={
  "id": "L03",
  "path": "seedlab",
  "status": "complete",
  "topic": "biology",
  "icon": "🌱",
  "date": "2026-10-14",
  "title": [
    "種子發芽的條件實驗",
    "Seed germination experiments"
  ],
  "question": [
    "水夠了，沒有氧也會發芽嗎？一次改一項，跟對照比看看。",
    "Enough water but no oxygen: will seeds sprout? Change one condition and compare."
  ],
  "defaults": {
    "water": 80,
    "oxygen": 0,
    "temp": 22,
    "time": 0,
    "sample": 42,
    "profile": "ready",
    "change": "oxygen"
  },
  "extras": [
    "seedlab-model.js",
    "seedlab.css",
    "seedlab.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "description": [
    "用固定12個假想種子調水、氧與溫度，逐日核對胚根、芽與休眠；同樣本只改一項，保留對照。",
    "Adjust water, oxygen and temperature for 12 fixed hypothetical seeds; check roots, shoots and dormancy day by day with a matched one-condition control."
  ],
  "keywords": "種子,發芽,水分,氧氣,溫度,休眠,對照實驗,科學好好聽,seed,germination,water,oxygen,temperature,dormancy,controlled experiment",
  "sources": [
    [
      "https://extension.psu.edu/seed-and-seedling-biology",
      "Penn State：種子與幼苗生物學",
      "Penn State: seed and seedling biology"
    ],
    [
      "https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/starting-seeds-indoors",
      "UMN：室內播種與各物種需求",
      "UMN: indoor seed starting and species requirements"
    ]
  ],
  "podcast": {
    "ep": "EP167",
    "title": "生存的智慧：植物的時間膠囊與奇特戰略（下集）",
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "mission": [
    "沒有發芽，就能判定種子已死嗎？",
    "Does no germination prove that a seed is dead?"
  ],
  "options": [
    [
      "不能；條件、休眠與活性都要核對",
      "No; conditions, dormancy and viability need checking"
    ],
    [
      "能；14天沒發芽就是死種子",
      "Yes; no sprout in 14 days means a dead seed"
    ]
  ],
  "answer": 0,
  "reason": [
    "未發芽有不同原因。這裡已知的教具狀態不能用來診斷真種子；14日只是觀察窗。",
    "Failure has different causes. Known teaching states do not diagnose real seeds; 14 days is only an observation window."
  ],
  "formula": [
    "自訂假想種子，持續固定條件14日，不是真物種模型。\nf水=clamp((W−20)/50,0,1)，f氧=clamp(O/60,0,1)。\nf溫=clamp(min((T−8)/14,(36−T)/14),0,1)，峰值22°C。\nr=min(f水,f氧,f溫)，累積有利日=time×r。\n樣本編號1–99固定LCG生成12個門檻3–8有利日；其中最低3個標記為選定休眠／無活性。\n可發芽者累積≥門檻胚根出，≥門檻+2芽出；濕潤且經1日先顯吸水示意。\n休眠／無活性標記不發芽；這個教具沒有解除休眠方法。\nB與A同編號、狀態、日數，只把所選一項改成水80／氧80／22°C。\n百分比只數本盤12個，非預測成功率；可能發芽日超過14就不在窗內。",
    "Custom hypothetical seeds; constant supplied conditions for 14 days, no species model.\nfWater=clamp((W−20)/50,0,1); fOxygen=clamp(O/60,0,1).\nfTemp=clamp(min((T−8)/14,(36−T)/14),0,1), peak 22°C.\nr=min(fWater,fOxygen,fTemp); favourable days=time×r.\nSample ID1–99 fixes LCG12 thresholds3–8 favourable days; lowest3 marked if dormant/nonviable profile selected.\nEligible: exposure≥threshold gives root; ≥threshold+2 gives shoot; moist after1day shows schematic uptake.\nDormant/nonviable flags stay blocked, no dormancy-breaking method.\nB shares sample, state, time; only selected condition becomes water80, oxygen80 or22°C.\nPercentage counts this12-seed tray, no success prediction; event days beyond14 lie outside the window."
  ],
  "limit": [
    "指定假想種子教具，不是真實物種發芽率或育苗建議。水／氧刻度不是含水率或氧濃度；8／22／36°C、門檻3–8有利日、芽出加2日皆自訂。溫度超界只停止進度，不模擬死亡；水分持續供應，水氧獨立，水多不自動減氧。休眠為內在阻擋且本實驗不解除；無活性者不能加水救回。樣本編號重建12個門檻及3標記，不是真隨機抽樣或置信區間。未發芽不能靠外觀診斷原因；狀態在教具中已知。胚根先出再芽示意，非長度／形態實測；光假設不限制此假想發芽，後續光合未模擬。更換條件從0日重做，不是已發芽種子倒回。14日是觀察窗，不代表永不發芽。EP167 metadata待核。",
    "Specified hypothetical seed aid, no species germination rate or growing advice. Water/oxygen scales are not moisture or oxygen concentration; 8/22/36°C, 3–8 favourable-day thresholds and +2day shoots custom. Temperature outside the range stops progress, no death model. Moisture continuously supplied; water and oxygen independent, no automatic oxygen loss at high water. Internal dormancy stays blocked; nonviable seeds cannot be rescued with water. Sample ID rebuilds12 thresholds and3 flags, no statistical sampling/confidence interval. Appearance alone cannot diagnose failure; states known in this aid. Root then shoot schematic, no measured length/morphology. Light assumed non-limiting for this hypothetical germination; later photosynthesis omitted. Changing conditions restarts day0, no reversal of germinated seeds. 14days observation window, no never-germinate claim. EP167 metadata unverified."
  ]
};
