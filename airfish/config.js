window.CONFIG={
  "id": "B11",
  "path": "airfish",
  "status": "complete",
  "title": [
    "巨骨舌魚的兩條補氧路",
    "Arapaima: two oxygen routes"
  ],
  "question": [
    "水裡有氧，為什麼還要浮出來呼吸？",
    "Why surface to breathe when water contains oxygen?"
  ],
  "hint": [
    "先封住水面，看儲量下降；再打開、加快浮出頻率。",
    "Block the surface and watch stores fall. Reopen it and surface more often."
  ],
  "controls": [
    {
      "key": "water",
      "label": [
        "水中氧相對量",
        "Relative water oxygen"
      ],
      "min": 0,
      "max": 100,
      "step": 10,
      "value": 20,
      "unit": "%",
      "options": null
    },
    {
      "key": "activity",
      "label": [
        "游動耗氧倍率",
        "Activity demand multiplier"
      ],
      "min": 1,
      "max": 4,
      "step": 1,
      "value": 1,
      "unit": "×",
      "options": null
    },
    {
      "key": "interval",
      "label": [
        "每隔多久浮出",
        "Surfacing interval"
      ],
      "min": 30,
      "max": 180,
      "step": 30,
      "value": 60,
      "unit": "s",
      "options": null
    },
    {
      "key": "surface",
      "label": [
        "水面通道",
        "Surface access"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "封閉",
          "Blocked"
        ],
        [
          "可抵達",
          "Accessible"
        ]
      ]
    }
  ],
  "action": [
    "觀察補氧",
    "Watch oxygen"
  ],
  "mission": [
    "把水中氧調到最高，就可以永遠封住水面嗎？",
    "Can high water oxygen replace surface access forever?"
  ],
  "options": [
    [
      "不能，這是需要空氣呼吸的魚",
      "No: this fish needs air breathing"
    ],
    [
      "能，鰓一定足夠供氧",
      "Yes: gills always provide enough"
    ]
  ],
  "answer": 0,
  "reason": [
    "發育後的巨骨舌魚依賴空氣呼吸；血管豐富的魚鰾改造為空氣呼吸器官，並不是哺乳類肺。鰓仍有其他功能。幼魚與成魚的呼吸不同；此頁只教兩通道收支。",
    "Developed Arapaima relies on air breathing. Its vascular swim bladder becomes an air-breathing organ, not a mammalian lung. Gills retain other functions. Young and adult fish differ; this page teaches a two-route ledger."
  ],
  "comparisons": [
    {
      "label": [
        "可抵達／封閉水面",
        "Accessible / blocked surface"
      ],
      "key": "surface",
      "a": 1,
      "b": 0
    },
    {
      "label": [
        "低／高水中氧",
        "Low / high water oxygen"
      ],
      "key": "water",
      "a": 20,
      "b": 100,
      "base": {
        "activity": 2,
        "interval": 120
      }
    },
    {
      "label": [
        "常／少浮出",
        "Frequent / rare surfacing"
      ],
      "key": "interval",
      "a": 30,
      "b": 180,
      "base": {
        "activity": 2
      }
    }
  ],
  "limit": [
    "教學雙通道帳本：氧氣點是自訂示意單位，不是毫升、血氧或存活指標。初始60點、上限100點；鰓補氧率為8×水中相對氧/100點/分鐘，耗氧為12×活動倍率點/分鐘；因模型對象為依賴空氣呼吸的發育後巨骨舌魚，即使水中氧最高，設定的鰓通道仍不足以獨立供氧。抵達水面每次加入30點，按指定間隔發生，超出容量不留存且另記帳。水面封閉時沒有空氣補氧，不把設定的上浮動作視為成功呼吸。最長示例10分鐘；若在下一呼吸事件前耗盡，立即停算；若補氧與零儲量同時發生，先補30點再判斷耗盡（教具事件順序，不代表生理能力），不預測死亡或安全時間，不能用於飼養。皮膚、溫度、二氧化碳、血流與游動上浮成本未建模。雙通道比例依設定與時間變化，未套固定60%或論文的比例、頻率。SVG魚鰾剖面與血管為示意，非比例解剖圖。10分鐘示例壓為10秒動畫，逐步每次顯示15秒的示例進度。",
    "Teaching ledger with two routes: oxygen units are illustrative, not millilitres, blood oxygen or survival indicators. Initial store 60, capacity 100; gill input is 8×relative water oxygen/100 units per minute, demand 12×activity units per minute. For developed, air-dependent Arapaima, gill capacity is deliberately insufficient alone even at maximum water oxygen. Each accessible surface visit adds 30 units at the chosen interval; surplus is not retained and is tracked separately. A blocked surface provides no aerial input, even when a visit was scheduled. The example runs up to ten minutes and stops when depletion precedes the next visit; a visit exactly coinciding with zero store adds its 30 units before the depletion check (a teaching-event convention, not a physiological claim). This predicts neither death nor safe time and is not a care guide. Skin, temperature, CO2, blood flow and surfacing costs are omitted. Source shares vary with settings and time; no fixed 60% or paper breathing rates are used. Swim bladder and vessels are schematic, not anatomical scale. Ten example minutes are compressed into ten animation seconds; each step advances fifteen example seconds."
  ],
  "formula": "Gill input G=8×waterPercent/100 oxygen units/min\nDemand D=12×activity oxygen units/min; D>G\nBetween breaths: S(t+Δt)=S(t)+(G−D)Δt; Δt in minutes\nSurface accessible: add 30 units every interval seconds\nSpill=max(0,S_before+30−100); S_after=min(100,S_before+30)\nBlocked surface: no air input\nLedger: 60 + cumulative_gill + cumulative_air − used − spill = store\nStop if zero store occurs before the next visit; at an exact tie, add air first\nStop by ten model minutes; not a survival prediction\n1 screen second = 60 model seconds; Step = 15 model seconds\nRead current time using the past 3 s sample + continuous loss, never a future pulse",
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/33819380/",
    "Frommel et al. (2021) · Arapaima gills and air-breathing organ"
  ],
  "extraSources": [
    [
      "https://doi.org/10.1242/jeb.243672",
      "Aaskov et al. (2022) · Separate gas-exchange routes"
    ],
    [
      "https://pure.au.dk/ws/portalfiles/portal/367540381/Arapaima_gigas_maintains_gas_exchange_separation_in_severe_aquatic_hypoxia_but_does_not_suffer_branchial_oxygen_loss.pdf",
      "Aarhus University · Aaskov et al. (2022), published article"
    ]
  ],
  "ep": "273",
  "episodeTitle": "亞馬遜河的綠色巨人：巨骨舌魚的防彈神話與重生物語",
  "date": "2026-10-06",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "icon": "🐟",
  "keywords": "巨骨舌魚,空氣呼吸,魚鰾,鰓,低氧,氧氣收支,Arapaima,pirarucu,air breathing,swim bladder,gills,hypoxia,oxygen budget,科學好好聽,science for kids",
  "description": [
    "改變水中氧、游動耗氧與浮出頻率，觀察鰓與空氣呼吸器官的兩通道示意收支；不推算真魚存活。",
    "Change water oxygen, activity and surfacing interval. Explore a two-route oxygen ledger for gills and an air-breathing organ, without survival prediction."
  ],
  "defaults": {
    "water": 20,
    "activity": 1,
    "interval": 60,
    "surface": 1
  },
  "formulaZh": "鰓補氧 G＝8×水中相對氧百分比/100 點/分鐘\n耗氧 D＝12×活動倍率 點/分鐘；D>G\n兩次呼吸間：S(t+Δt)＝S(t)+(G−D)Δt；Δt以分鐘計\n水面可抵達：每隔指定秒數補30點；封閉：空氣補氧0\n未留存＝max(0,補氧前儲量+30−100)\n補氧後儲量＝min(100,補氧前儲量+30)\n收支：60＋累計鰓補氧＋累計空氣補氧−消耗−未留存＝儲量\n下一呼吸事件前耗盡就停；完全同時則先補空氣氧（教具約定）\n最長10模型分鐘；非存活預測\n1螢幕秒＝60模型秒；逐步＝15模型秒\n當前值用過去3秒取樣＋連續消耗計算，不提前加入下次呼吸",
  "dateModified": "2026-10-09"
};
