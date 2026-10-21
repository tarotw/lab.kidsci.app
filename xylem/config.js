window.CONFIG={
  "id": "L02",
  "path": "xylem",
  "status": "complete",
  "topic": "biology",
  "icon": "🌳",
  "date": "2026-10-14",
  "title": [
    "樹的水柱為什麼會斷？",
    "Why does a tree’s water column break?"
  ],
  "question": [
    "葉子拉水，氣泡會怎樣改變水路？",
    "Leaves pull water: how do bubbles change the path?"
  ],
  "defaults": {
    "evap": 60,
    "water": 80,
    "height": 40,
    "threshold": 2.5,
    "brokenA": false,
    "brokenB": false
  },
  "extras": [
    "xylem-model.js",
    "xylem.css",
    "xylem.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "description": [
    "調蒸散拉動、土壤供水與樹高，區分總水勢和負壓；在兩條木質部教具水路加入氣泡，比較連通與補水。",
    "Change evaporative pull, soil supply and height; distinguish total water potential from negative pressure, then add bubbles to two teaching xylem paths and compare connectivity and flow."
  ],
  "keywords": "木質部,水勢,蒸散,凝聚張力,氣穴,栓塞,植物運水,科學好好聽,xylem,water potential,transpiration,cohesion tension,cavitation,embolism,plant water transport",
  "sources": [
    [
      "https://openstax.org/books/biology-2e/pages/30-5-transport-of-water-and-solutes-in-plants",
      "OpenStax：水勢與凝聚張力",
      "OpenStax: potential and cohesion–tension"
    ],
    [
      "https://openstax.org/books/university-physics-volume-1/pages/14-1-fluids-density-and-pressure",
      "OpenStax物理：靜水壓與高度",
      "OpenStax physics: hydrostatic pressure and height"
    ]
  ],
  "podcast": {
    "ep": "EP169",
    "title": "植物界的摩天大樓挑戰：一滴水如何爬上頂層？",
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "mission": [
    "高樹拉水，主要靠什麼連起水柱？",
    "What mainly connects the column pulled up a tall tree?"
  ],
  "options": [
    [
      "葉片蒸散拉動，水的凝聚與附著維持水柱",
      "Evaporative pull, with cohesion and adhesion maintaining the column"
    ],
    [
      "只靠大氣壓把水推上百米",
      "Atmospheric pressure alone pushes water a hundred metres"
    ]
  ],
  "answer": 0,
  "reason": [
    "蒸散降低葉端水勢，張力傳入相連的水柱。關閉蒸散可減少額外拉動，但水柱仍承受重力與土壤條件，不表示木質部壓力必然變零。",
    "Transpiration lowers leaf-end potential and transmits tension through connected water. Closing it reduces extra pull; gravity and soil conditions remain, so xylem pressure need not become zero."
  ],
  "formula": [
    "土壤刻度S0–100自訂，Ψ土=−0.05−2.45(1−S/100)² MPa；不是土壤含水率實測換算。\n蒸散拉動刻度E0–100，總水勢差ΔΨ=1.8E/100MPa，非實測蒸散率。\n兩條同阻力平行水路，R根=.08，單管R=.04+.003H，單位MPa/(mL/min)，均教學假設。\n連通n=0,1,2；n>0時Q=ΔΨ/(R根+R管/n)，每管q=Q/n。\nΨ根=Ψ土−R根Q；連通管Ψ(z)=Ψ根−R管q z/H。\n忽略木質部溶質與基質項，P(z)=Ψ(z)−ρgz/10⁶MPa。\nρ1000kg/m³，g9.81m/s²，重力項+0.00981zMPa，壓力隨高度下降。\n葉端P=Ψ土−ΔΨ−0.00981H；這是固定邊界教具，不是植物診斷。\n氣泡由使用者設在.65H；斷管下段無流、保持靜水梯度，上段未知，不延續整柱公式。\nn0時Q0、葉壓未知；保留的是要求的邊界，不是假造實際壓力。\n門檻1–4MPa自訂，|P葉|/門檻是情境比，不是機率；越線不自動斷管。\n對照兩管完整，同蒸散邊界、土壤與高度；閉蒸散ΔΨ0仍可能P葉<0。",
    "Custom soil scaleS0–100: Ψsoil=−0.05−2.45(1−S/100)² MPa, not a measured moisture conversion.\nCustom evaporative-pull scaleE0–100: total potential differenceΔΨ=1.8E/100MPa, not measured transpiration rate.\nTwo equal parallel paths, Rroot=.08, Rpath=.04+.003H inMPa/(mL/min), teaching assumptions.\nConnectedn0/1/2; ifn>0,Q=ΔΨ/(Rroot+Rpath/n), eachq=Q/n.\nΨroot=Ψsoil−RrootQ; connected Ψ(z)=Ψroot−Rpathq z/H.\nNeglect xylem solute/matric terms: P(z)=Ψ(z)−ρgz/10⁶MPa.\nρ1000kg/m³,g9.81m/s²; gravitational term+0.00981zMPa, pressure falls with height.\nLeafP=Ψsoil−ΔΨ−0.00981H, imposed-boundary teaching model, no diagnosis.\nUser places a bubble at.65H; blocked lower segment has no flow and hydrostatic gradient; upper segment unknown, no whole-column continuation.\nn0 givesQ0 and unknown leaf pressure; requested boundary is not actual pressure.\nThreshold1–4MPa custom;|Pleaf|/threshold scenario ratio, not probability; crossing does not auto-break a path.\nIntact comparison shares leaf boundary,soil,height. Closing transpiration givesΔΨ0 but leafP may remain negative."
  ],
  "limit": [
    "瞬時穩態純水雙管阻力教具，兩管與根阻力、土壤映射、蒸散拉力與門檻均自訂；不代表樹種測量、真含水率／蒸散率、栓塞機率或診斷。土壤Ψ不是土壤壓力；木質部忽略溶質與基質，才以P＋重力項表示總水勢。ρ與g為近似常數，重力係數由ρg換算，未採生物來源疑似十倍誤植值。不模擬氣孔回饋、儲水、根壓、毛細上升高度、修復栓塞或暫態。在固定ΔΨ邊界下乾土使壓力更負，未另造土壤減流係數；破管降連通與總補水，不能混用固定流量結論。氣泡位置.65H為人為示意，不預測真破點；斷管下段無流，上段壓力未知。兩管全斷不報葉端實際壓力；要求邊界另列。關閉蒸散仍保留重力與土壤負壓，非水柱立即掉落或全部壓力零。樹高只依數字標尺，剖面固定畫框，不為物理同比例。EP169／66 metadata待官方核對。",
    "Instant steady pure-water two-path resistance aid; paths/root resistance,soil mapping,pull and threshold custom, no species measurements/moisture/rate/embolism probability/diagnosis. SoilΨ is not soil pressure; xylem solute/matric terms neglected before expressing total potential asP+gravity. Approximateρ,g; gravity conversion fromρg, not the suspect tenfold value in the biology source. No stomatal feedback,storage,root pressure,capillary-rise height,embolism repair or transients. At fixedΔΨ,dry soil makes pressure more negative with no invented soil flow factor; blocked paths reduce connectivity and total supply, not a fixed-flow comparison. Bubble at.65H artificial, no actual break-location prediction; lower segment has no flow, upper pressure unknown. Fully disconnected paths give no actual leaf pressure; requested boundary separate. Closing transpiration retains gravity/soil negative pressure, no immediate falling column/all pressure zero. Height is numeric; cross-section frame fixed, not a physical scale. EP169/66 metadata unverified."
  ],
  "relatedPodcast": {
    "ep": "EP66",
    "title": "〈公開｜力學特輯(4)｜大力士的秘密武器：滑輪與液壓的神奇力量｜EP.66〉",
    "link": "https://open.firstory.fm/story/cmpceawpr00r801p6evhl3ohb",
    "duration": "783",
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/BCGLR-hRTLM3nOcoj77af.jpg",
    "durationSeconds": 783,
    "durationLabel": [
      "13分3秒",
      "13 min 3 sec"
    ],
    "verified": true,
    "metadataChecked": "2026-10-14",
    "artworkVisualChecked": false
  }
};
