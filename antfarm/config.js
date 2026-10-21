window.CONFIG={
  "id": "F07",
  "path": "antfarm",
  "status": "complete",
  "controller": "antfarm.js",
  "extras": [
    "antfarm-model.js",
    "antfarm.css",
    "antfarm.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "title": [
    "切葉蟻的真菌農場",
    "Leafcutter fungus farm"
  ],
  "question": [
    "只搬葉，食物就會一直增加嗎？",
    "Do more leaves always mean more food?"
  ],
  "hint": [
    "先按下一輪，看三種工作與庫存。",
    "Press +1 round; inspect work and stocks."
  ],
  "defaults": {
    "leaf": 4,
    "tend": 4,
    "clean": 4,
    "seed": 237
  },
  "controls": [
    {
      "key": "leaf",
      "label": [
        "搬葉工蟻",
        "Carrying ants"
      ],
      "min": 0,
      "max": 12,
      "step": 1,
      "value": 4,
      "unit": "隻 / ants"
    },
    {
      "key": "tend",
      "label": [
        "照顧工蟻",
        "Tending ants"
      ],
      "min": 0,
      "max": 12,
      "step": 1,
      "value": 4,
      "unit": "隻 / ants"
    },
    {
      "key": "clean",
      "label": [
        "清理工蟻",
        "Cleaning ants"
      ],
      "min": 0,
      "max": 12,
      "step": 1,
      "value": 4,
      "unit": "隻 / ants"
    },
    {
      "key": "seed",
      "label": [
        "感染輸入批號",
        "Input sample ID"
      ],
      "min": 1,
      "max": 999,
      "step": 1,
      "value": 237,
      "unit": "號 / ID"
    }
  ],
  "action": [
    "下一輪",
    "Next round"
  ],
  "mission": [
    "只把12隻都派去搬葉，為什麼食物沒增加？",
    "Why does food fail to grow with all 12 carrying leaves?"
  ],
  "options": [
    [
      "原料不等於食物，還要照顧菌園",
      "Raw leaves need a tended garden"
    ],
    [
      "葉片直接變成螞蟻食物",
      "Leaves directly become ant food"
    ]
  ],
  "answer": 0,
  "reason": [
    "葉片提供培養真菌的原料；搬葉、照顧和清理都有限。試只搬葉，葉庫存上升而產量0；這是教學分工反例，不是最佳真實蟻群配方。",
    "Leaves are substrate for cultivated fungi. Carrying, tending and cleaning are limited. With only carriers, leaves rise but output is 0. This is a toy counterexample, not an optimal real colony recipe."
  ],
  "comparisons": [],
  "ep": "237",
  "episodeTitle": "雨林裡的生存遊戲：潛入亞馬遜的神祕水陸世界",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/11375087/",
    "Currie & Stuart2001 · Garden grooming and weeding (abstract)"
  ],
  "extraSources": [
    [
      "https://profiles.si.edu/display/sro_90757",
      "Scott et al.2010 · Fungus garden substrate and nutrients (institutional abstract)"
    ]
  ],
  "limit": [
    "12工蟻、20個抽象回合的原創教學規則，不是實測產量、抗菌療效、真實族群存活或最佳分工。葉片是菌園原料，真菌提供重要食物；工蟻也可取其他營養，不把所有蟻種一概而論。Currie與Stuart2001的PubMed摘要已讀：梳理與移除感染基質是防衛行為，專一寄生菌未必能被清除；本遊戲清理能減少感染點，不代表真菌全無抗性或真菌病可保證消滅。Scott2010作者機構摘要支持植物原料被菌園微生物轉成營養，不用其實驗數字校準。搬葉、照顧、清理固定加起來12；滑桿加人逐隻從其他較大組借，減人逐隻給其他較小組，同額時順序搬葉→照顧→清理。改分工／批號回第0輪；切語言、模式或相同值保留進度。三種點數葉／健康／食物不是同一物理單位，不加總作質量或能量守恆；感染點是另一個自訂負擔指數。葉初20、健康80/100、感染10/100、食物12。搬葉每工蟻每輪2葉點；照顧處理最多每工蟻2葉點。健康依舊感染衰減並被照顧提升，有0..100界限；當輪生產使用新健康與新感染。每輪輸入2..4感染點，固定LCG批號；隨機輸入數值逐輪明示，與分工無關，兩組對照同序列。清理每工蟻減至多4感染點，不能負值。需求固定2食物點，不足明示不扣成負庫存；不據此預測真死亡。未建模成熟延遲、不同葉營養、工蟻大小、蟻種、氣候、藥物或微生物網絡。SVG高度與工蟻圖形為示意，三條尺各固定0..500葉點、0..100健康點、0..200食物點。回合不是日，0.6秒僅揭示節奏。EP237官方單集網址、封面、時長未核實，明示只連首頁。 產量公式的「1食物點／葉點」是自訂換算容量；processed−output只可作未達食物容量的數值差，不是丟掉的葉質量。顯示值已圓整；正小量可標<0.1或<0.01，收支顯示用近似等號，原未圓整數值收支保持閉合。",
    "Original toy rules:12 workers,20 abstract rounds, not measured yields, antibiotic efficacy, real survival or optimal team ratios. Leaves are fungal substrate; fungi are an important food source. Workers can obtain other nutrients; species vary. Currie/Stuart2001 PubMed abstract read: grooming/weeding defend gardens, but a specialized parasite was not eliminated. Removing toy infection points is not a guarantee of disease eradication. Scott2010 institutional abstract supports plant substrate becoming nutrients; no measurement calibration. Teams always total12. Adding borrows one at a time from the largest other team; reducing gives to the smallest. Ties follow carry,tend,clean order. Task/sample changes reset to round0; language/mode/same values preserve progress. Leaf,health and food points are distinct invented units; summing them is not mass/energy conservation. Infection is a separate burden index. Initially leaf20,health80/100,infection10/100,food12. Each carrier brings2leafpt; each tender processes up to2leafpt per round. Health uses previous infection and care, clamped0..100; output uses updated health and infection. A fixed LCG sample produces2..4infectionpt per round, shown explicitly and independent of allocation. Comparisons share the sequence. Each cleaner removes up to4infectionpt, never negative. Fixed demand2foodpt; unmet demand is shown without negative food, not a death forecast. Maturation delays, nutrition, worker sizes, species, climate, drugs and microbial networks omitted. SVG shapes are schematic; fixed bar scales0..500leafpt,0..100healthpt,0..200foodpt. Rounds are not days;0.6s is reveal cadence only. EP237 metadata unverified; explicit podcast-home fallback. The output rule assumes an invented capacity of 1 food point per leaf point processed. The numeric processed−output gap is unrealized food-point capacity, not discarded leaf mass. Display values are rounded; positive small amounts may be shown as <0.1 or <0.01. Displayed food equations use an approximate equality; the unrounded separate budgets close."
  ],
  "formulaZh": "所有係數自訂；輪不是天。工蟻搬葉a＋照顧b＋清理c=12。\n葉L0=20；健康H0=80；感染I0=10；食物F0=12，各點單位不同。\n固定32位LCG: seed←(1664525seed+1013904223) mod2^32；輸入z=2+floor(3seed/2^32)。\n本輪搬入=2a；處理u=min(L舊+2a,2b)；L新=L舊+2a−u。\nH新=clamp(H舊+2b−3−0.12I舊,0,100)。\n感染曝露=min(100,I舊+z)；清理r=min(曝露,4c)；I新=曝露−r。\n食物產量y=u×（1食物點／葉點）×H新/100×(1−I新/100)。\n1食物點／葉點是自訂教具容量，非葉質量轉換率；點數不可當質量／能量相加。\n食用v=min(2,F舊+y)；F新=F舊+y−v；不足=2−v。\n每組每輪貢獻都列出；相同批號與設定可重現。",
  "formula": "All coefficients invented; rounds are not days. Carry a+tend b+clean c=12workers.\nInitially L=20leafpt,H=80healthpt,I=10infectionpt,F=12foodpt: distinct units.\n32bit LCG: seed=(1664525seed+1013904223) mod2^32; input z=2+floor(3seed/2^32).\nCarry=2a; processed u=min(Lold+2a,2b); Lnew=Lold+2a−u.\nHnew=clamp(Hold+2b−3−.12Iold,0,100).\nExposed=min(100,Iold+z); removed=min(exposed,4c); Inew=exposed−removed.\nOutput y=u*(1 food point/leaf point)*(Hnew/100)*(1−Inew/100).\nThe 1 food point/leaf point capacity is invented, not a leaf mass yield or mass/energy conservation.\nUsed v=min(2,Fold+y); Fnew=Fold+y−v; shortage=2−v.\nContributions are shown per team and round. Same sample/settings repeat.",
  "keywords": "切葉蟻,真菌農場,分工,互利共生,菌園,感染,清理,食物庫存,瓶頸,leafcutter ant,fungus farming,division of labor,mutualism,garden,infection,grooming,food stock,bottleneck",
  "description": [
    "分配12隻搬葉、照顧與清理工蟻，逐輪核對菌園、原料與食物，找出只搬葉的瓶頸；繁中英文教學示例。",
    "Allocate 12 carrying, tending and cleaning workers. Inspect garden, leaf and food stocks each round to discover bottlenecks in this bilingual teaching toy."
  ],
  "date": "2026-10-04",
  "icon": "🐜",
  "dateModified": "2026-10-11"
};
