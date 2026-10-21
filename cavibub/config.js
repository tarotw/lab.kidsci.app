window.CONFIG={
  "id": "E02",
  "path": "cavibub",
  "status": "complete",
  "title": [
    "螳螂蝦的空化泡",
    "Mantis shrimp cavitation"
  ],
  "question": [
    "槌速相同，水壓更高還會起泡嗎？",
    "At the same strike speed, will higher water pressure allow a bubble?"
  ],
  "hint": [
    "先按出拳看起泡→塌陷；把水壓調到300，再用相同速度比較。",
    "Strike to watch formation→collapse. Set pressure to300 and compare at the same speed."
  ],
  "controls": [
    {
      "key": "speed",
      "label": [
        "槌速：每秒前進幾公尺",
        "Strike speed: metres each second"
      ],
      "min": 0,
      "max": 30,
      "step": 1,
      "value": 26,
      "unit": "m/s",
      "options": null
    },
    {
      "key": "ambient",
      "label": [
        "背景絕對水壓",
        "Background absolute pressure"
      ],
      "min": 100,
      "max": 300,
      "step": 10,
      "value": 100,
      "unit": "kPa",
      "options": null
    }
  ],
  "defaults": {
    "speed": 26,
    "ambient": 100
  },
  "action": [
    "出拳看泡",
    "Strike & watch"
  ],
  "mission": [
    "相同槌速，提高背景水壓會怎樣？",
    "At the same speed, what does higher background pressure change?"
  ],
  "options": [
    [
      "要更快才跨過教具起泡門檻",
      "A higher speed is needed to cross the toy threshold"
    ],
    [
      "水壓越高，一定越容易起泡",
      "Higher pressure always makes bubbles easier"
    ]
  ],
  "answer": 0,
  "reason": [
    "快速流動可使局部液壓降低，蒸氣泡形成後，壓力回升使泡塌陷。真螳螂蝦的流場與碰撞複雜，這裡只用自訂壓降看門檻與先後順序；塌陷不表示創造新的能量或必定擊殺。",
    "Fast flow can lower local liquid pressure. A vapor bubble forms and collapses as pressure recovers. Real shrimp flow and contact are complex: our invented pressure drop shows only a threshold and sequence. Collapse creates no new energy and does not guarantee a kill."
  ],
  "comparisons": [
    {
      "key": "speed",
      "a": 10,
      "b": 26,
      "label": [
        "槌速10／26m/s",
        "Speed10 /26m/s"
      ]
    },
    {
      "key": "ambient",
      "a": 100,
      "b": 300,
      "label": [
        "水壓100／300kPa",
        "Pressure100 /300kPa"
      ]
    },
    {
      "key": "speed",
      "a": 0,
      "b": 26,
      "label": [
        "不出拳／26m/s",
        "No strike /26m/s"
      ]
    }
  ],
  "ep": "244",
  "episodeTitle": "〈海底最強生化戰士：雀尾螳螂蝦的爆破神拳與奇幻視覺｜EP.244〉",
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/%E6%B5%B7%E5%BA%95%E6%9C%80%E5%BC%B7%E7%94%9F%E5%8C%96%E6%88%B0%E5%A3%AB-%E9%9B%80%E5%B0%BE%E8%9E%B3%E8%9E%82%E8%9D%A6%E7%9A%84%E7%88%86%E7%A0%B4%E7%A5%9E%E6%8B%B3%E8%88%87%E5%A5%87%E5%B9%BB%E8%A6%96%E8%A6%BA-ep-244/id1812447277?i=1000785303067",
    "verified": true,
    "appleId": "1000785303067",
    "episodeId": "1000785303067",
    "source": "https://open.firstory.fm/story/cmt5uziue0p1801tb7y0qeyy1",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource211/v4/0d/53/89/0d538997-6173-9e16-8439-f5473b994e61/d14308be-342c-43d2-beb9-11397be3cb1e.jpg/960x960bb.webp",
    "coverFile": "podcast/ep244.jpg",
    "coverAvailable": true,
    "duration": "21:21",
    "durationEn": "21:21",
    "durationIso": "PT21M21S",
    "access": [
      "訂閱者限定",
      "Subscribers only"
    ],
    "subscribersOnly": true,
    "reviewed": "2026-10-10",
    "verifiedOn": "2026-10-10",
    "accessBasis": "Actual native Taiwan Apple show full-list search244 -> unique episode/title/SubscribersOnly/rounded21min; linked Firstory exact21:21/JoinUnlock. Account/audio untested.",
    "coverStatus": "Actual public Apple960WebP acquired and pixels match linked Firstory; JPEG encoding for existing cover.jpg path, no content edits.",
    "artworkVisualChecked": true,
    "verificationStatus": "2026-10-10 actual Apple/Firstory EP244 shared-topic evidence in native-review-shrimp-apple/firstory-20261010.json; no duplicated external search."
  },
  "source": [
    "https://journals.biologists.com/jeb/article/208/19/3655/15838/Extreme-impact-and-cavitation-forces-of-a",
    "Patek & Caldwell2005 · Impact and cavitation (original paper)"
  ],
  "extraSources": [
    [
      "https://ib.berkeley.edu/labs/patek/Publications/PatekandCaldwell2005JEB.pdf",
      "Berkeley author-hosted paper · DOI10.1242/jeb.01831"
    ]
  ],
  "limit": [
    "原研究支持螳螂蝦槌擊與泡塌陷分別產生作用、局部低壓形成蒸氣泡；本頁不是該研究的力峰重播。背景是絕對壓力，kPa＝千帕；水密度1000kg/m³、蒸氣壓3kPa與壓降係數0.4是教具固定假設，未校準海水溫度／物種。速度壓降只是概念式，忽略真流場、反彈與核化細節；嚴格超過門檻才示範起泡，等於門檻不出泡。未空化的壓力試算可能失效，實際畫出的概念液壓最低夾在3kPa，不畫負絕對壓力。泡徑、槌臂與波圈都是放大示意，沒有求真半徑、射流、音壓、光、熱或殺傷。背景壓力回升的時間形狀自訂；2秒只演一輪無單位0–1階段，不是真毫秒或各設定的實際擊打時間。無能量或壓縮流體求解，不能由泡圈大小推出功或新增能量。可完全靜音完成。來源只讀出版者摘要、引言與圖1文字圖說，未聲稱全文／全部圖影像已讀。 不起泡時只顯示降壓、回升與本輪結束，沒有泡潰縮；零速維持準備。2畫面秒、逐步⅛概念階段，完成重啟明示；同值、語言模式、猜題及層檢視保留進度與來源公式。",
    "The original research supports distinct limb-impact and bubble-collapse effects and vapor formation at low local pressure; this is not a replay of its measured force peaks. Pressure is absolute; kPa means kilopascals. Water density1000kg/m³, vapor pressure3kPa and drop coefficient0.4 are fixed toy assumptions, uncalibrated to seawater temperature or species. The speed/drop expression omits real flow, rebound and nucleation. Strictly exceeding the threshold shows formation; equality does not. The noncavitating trial pressure can become invalid; the plotted conceptual liquid pressure is floored at3kPa, never negative absolute pressure. Bubble radius, limb and wave rings are enlarged schematics, not calculated radius, jets, sound pressure, light, heat or damage. Recovery timing is invented. Two seconds trace one dimensionless0–1 cycle, not real milliseconds or matched physical strike durations. No energy or compressible-flow solver: ring size does not imply work or extra energy. All tasks work silently. Only the publisher summary, introduction and figure1 text caption were read, not the whole article or all figure images. Non-forming cycles label drop/recovery/end with no collapse; zero speed stays Ready.2display seconds/Step1/8concept phase, explicit completed restart; no-op/language/mode/quiz/layer inspection preserves progress and sources/formula."
  ],
  "formula": "Toy water density rho=1000kg/m³, drop coefficient C=0.4, vapor floor Pv=3kPa\nPotential speed drop D=C×rho×v²/2/1000=0.2v² kPa\nThreshold vt=sqrt((B−Pv)/0.2) m/s\nFormation iff D > B−Pv (numerical tolerance1e−9kPa); equality:no bubble\nDimensionless phase u=0..1; two seconds per illustrative cycle\nDrop envelope a(u):0 before0.15; linear to1 at0.40; held to0.55; linear recovery to0 at0.75\nConcept pressure P(u)=max(Pv,B−D×a(u))\nFormation phase un=0.15+0.25(B−Pv)/D; toy impact marker at0.25\nBubble grows after un to0.55, shrinks to0 at0.80, then schematic wave fades by0.95\nNo bubble or wave when formation condition fails; v=0:no limb motion or pressure drop\nNo measured bubble radius, real time, force or energy is inferred.\n2display seconds=one concept cycle, Step1/8; completed Step explicitly restarts; demo time/phase agree\nNo-bubble stages indicate drop/recovery/end without collapse; zero speed stays Ready\nSame/clamped/invalid input, language/mode/quiz/layer changes preserve settings, progress and source/formula state",
  "keywords": "螳螂蝦,空化,空蝕,蒸氣泡,液體壓力,背景壓力,泡塌陷,門檻,mantis shrimp,cavitation,vapor bubble,liquid pressure,background pressure,bubble collapse,threshold",
  "description": [
    "調槌速與背景水壓，看螳螂蝦空化概念教具中的低壓、生泡、回升與塌陷；雙語Canvas與明示假設。",
    "Adjust strike speed and background pressure in a bilingual mantis-shrimp cavitation toy. Observe low pressure, vapor formation, recovery and collapse with explicit assumptions."
  ],
  "date": "2026-10-07",
  "icon": "🫧",
  "formulaZh": "教具水密度ρ＝1000kg/m³；壓降係數C＝0.4、蒸氣壓下限Pv＝3kPa，皆固定假設\n潛在壓降D＝Cρv²/2/1000＝0.2v² kPa；門檻vt＝√((B−Pv)/0.2) m/s\n嚴格D>B−Pv才起泡（數值容差1e−9kPa）；等於門檻不出泡\nu＝0..1概念階段；一輪用2畫面秒，非真實擊打時間\n壓降包絡a(u)：0..0.15為0；線性升到0.40的1；保持至0.55；線性回到0.75的0\n概念局部絕對壓力P(u)＝max(Pv,B−Da(u))；不畫負絕對壓力\n起泡階段un＝0.15+0.25(B−Pv)/D；槌臂教具撞擊標記0.25\n起泡後放大示意半徑增至0.55，回升時縮小至0.80，波圈隨後到0.95消失\n不起泡無泡、無潰縮波圈；非零槌速仍降壓／回升，零槌速無移動、無壓降\n半徑、槌臂、波圈都是尺寸示意，不計真實泡半徑、時間、力、能量、聲壓或殺傷\n逐步⅛概念階段；完成逐步明示從頭重啟，示範時計與階段一致\n同值／夾限同值／空值／非有限值、語言／模式／猜題／層檢視保留設定、進度和來源公式",
  "dateModified": "2026-10-10"
};
