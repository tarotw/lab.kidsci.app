window.CONFIG={
  "id": "X05",
  "path": "sunwarm",
  "status": "complete",
  "controller": "sunwarm.js",
  "extras": [
    "sunwarm-model.js",
    "sunwarm.css",
    "sunwarm.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "title": [
    "翻車魚的深潛與回溫",
    "Sunfish: dive and rewarm"
  ],
  "question": [
    "同樣的深潛時間，大魚和小魚一樣快變冷嗎？",
    "Same dive time: do large and small fish cool equally fast?"
  ],
  "hint": [
    "按播放，看兩條魚先進深水，再回表層。",
    "Press Play: both fish enter deep water, then return to the surface."
  ],
  "defaults": {
    "deep": 20,
    "surface": 15,
    "cold": 10,
    "warm": 22,
    "mass": 200,
    "exchange": 150
  },
  "controls": [],
  "mission": [
    "回到表層就一定會變暖嗎？",
    "Does returning to the surface always warm the fish?"
  ],
  "options": [
    [
      "不一定，要看表層水與魚的溫差",
      "No: it depends on the water–fish temperature difference"
    ],
    [
      "一定，表層永遠能讓魚升溫",
      "Yes: the surface always warms fish"
    ]
  ],
  "answer": 0,
  "reason": [
    "熱往較冷的一邊傳；本頁沒有額外日照熱源。表層水不比魚暖時，回表層不會使魚升溫；h=0也不換熱。",
    "Heat flows toward the colder side; this model has no added sunlight. Surfacing does not warm a fish when the water is not warmer than the fish; h=0 also gives no heat exchange."
  ],
  "comparisons": [],
  "ep": "c20",
  "episodeTitle": "〈公開｜海洋中的呆萌巨獸：翻車魚的奇特構造、日光浴之謎與驚人的跨赤道旅行｜P.20〉",
  "podcast": {
    "verified": true,
    "urlVerified": true,
    "provider": "Firstory",
    "url": "https://open.firstory.fm/story/cmrsk94ac01sc01ulgbnc18v0",
    "source": "https://open.firstory.fm/story/cmrsk94ac01sc01ulgbnc18v0",
    "officialEpisodeCode": "P.20",
    "planEpisode": "c20",
    "publicVersion": true,
    "publisherMarksPublic": true,
    "durationSeconds": 1320,
    "durationIso": "PT22M0S",
    "durationLabel": [
      "22 分 00 秒",
      "22 min 00 sec"
    ],
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/2a6mzFHTDdrYS58gXkzbP.jpg",
    "coverAvailable": true,
    "coverFile": "podcast/public20.jpg",
    "artworkVisualChecked": true,
    "verifiedOn": "2026-10-08",
    "publishedAt": "Mon, 20 Jul 2026 01:44:43 GMT",
    "evidenceBasis": "Explicit official public P.20, same exact source c20 topic title, matching cover composition, saved original local MP3 duration1320.437551s vs official RSS1320s. Public edition metadata verified; identical recording/entitlement/playback not inferred; local M4a differs in length.",
    "related": {
      "title": "〈熱能大冒險：熱與溫度的神祕差別｜EP.88〉",
      "url": "https://open.firstory.fm/story/cmryokos806oc01yxfley8y1l",
      "durationSeconds": 640,
      "durationIso": "PT10M40S",
      "durationLabel": [
        "10 分 40 秒",
        "10 min 40 sec"
      ],
      "evidenceBasis": "Current official public RSS plus exact Firstory story title/image; local official artwork pixels inspected. Audio not played, Apple access not tested."
    },
    "title": "〈公開｜海洋中的呆萌巨獸：翻車魚的奇特構造、日光浴之謎與驚人的跨赤道旅行｜P.20〉",
    "duration": "22 分 00 秒",
    "durationEn": "22 min 00 sec"
  },
  "source": [
    "https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/1365-2656.12346",
    "Nakamura等2015：深水覓食後回到暖水",
    "Nakamura et al. 2015: deep feeding and surface rewarming"
  ],
  "extraSources": [],
  "description": [
    "安排兩層水中的停留時間，改水溫、示意魚體型及換熱強弱，用同一時間表比較溫度與熱量帳。參數自訂，不預測真實翻車魚核心體溫或安全潛水時間。",
    "Schedule time in two water layers and compare two toy fish under identical conditions. Change water temperatures, body mass and heat exchange; values are chosen and do not predict real core temperature or safe dive limits."
  ],
  "keywords": "翻車魚,深潛,回溫,熱容量,溫差,熱量,體型,覓食,ocean sunfish,Mola mola,thermal recovery,lumped heat capacity,heat transfer,foraging",
  "date": "2026-10-04",
  "icon": "🐟",
  "limit": [
    "2015年研究記錄深水覓食後回暖，支持暖水回溫是浮面的一種功能，不能概括所有浮面或所有翻車魚。本文用集中熱容量作定性教具，不重製研究個體。A固定100 kg、h=150 W/(m²·°C)；B可改50–400 kg與h=0–400。假設同形狀、面積A=(m/100)^(2/3) m²、比熱3500 J/(kg·°C)，兩魚初始18°C；全部數值自訂未校準。h在兩層相同，未加入研究中的生理調節、代謝熱、日照、體內溫差或熱延遲。水溫可倒置；表層不保證較暖。先深水再表層反覆循環，兩段各5–30分鐘，總觀察120分鐘；層間移動時間省略，圖的位置只代表所在水層，非公尺或游速。到邊界時溫度連續，畫面切為接下來一分鐘所在層；120分鐘停止並保留最後一分鐘水層。播放每0.2秒前進1模型分鐘，快300倍。覓食機會只計深水停留分鐘，假設食物機會在深水，沒有捕獲率、食物熱量、代謝或安全閾值，不尋找真正最優策略。兩魚用同一排程與初溫；只改B質量／h時，A數值完全相同。質量增大時同形面積也按2/3次方增大，圖身長按1/3次方縮放；魚圖僅示意，不是解剖復原。正熱量為水傳入魚，負為魚傳出；吸熱−散熱=mc(T−18)。所有參數變更會重設至0分鐘；語言／模式保留時間。規劃主題c20連已核官方公開P.20版本（22:00），EP88另作熱與溫度背景（10:40）；不是本模型參數來源。音訊尚未實際播放，不宣稱本機不同格式音檔與公開錄音完全相同。",
    "A 2015 study recorded deep feeding and subsequent warming; warm-water recovery is one function of surfacing, not an explanation of every surface behaviour or all sunfish. This lumped thermal toy does not reproduce study animals. A is fixed at 100 kg and h=150 W/(m²·°C); B has chosen mass 50–400 kg and h 0–400. Similar shapes give area=(m/100)^(2/3) m²; specific heat is 3500 J/(kg·°C), with both starting at 18°C. All constants are uncalibrated. Exchange h stays the same in both layers; physiological regulation, metabolism, sunlight, internal gradients and thermal lag are omitted. Water layers may be inverted. A repeated deep-then-surface schedule uses 5–30 minutes per part over 120 minutes. Travel time is omitted and drawing position indicates layer, not depth or speed. Temperature stays continuous at switches; the display names the next minute’s layer, except at 120 when it retains the last interval. Playback advances one model minute every 0.2 s (300×). Foraging opportunity counts deep-layer minutes only, assuming opportunities there; no capture rate, food energy, metabolism or safety threshold is inferred. This is not an optimal real diving strategy. Both fish share the schedule and initial temperature; changing only B leaves A unchanged. Area scales with mass^(2/3), drawing length with mass^(1/3), under the chosen similar-shape assumption. Fish shapes are not anatomical reconstructions. Heat gain minus heat loss equals mc(T−18); positive heat enters the fish. Parameter changes restart at 0; language/mode preserve time. Plan topic c20 links to the verified official public P.20 edition (22:00), with EP88 as heat/temperature background (10:40), not as model parameters. Audio was not played; no identical-recording claim is made for different local formats."
  ],
  "formula": "dT/dt = hA(Twater-T)/(mc); exact interval Tnew=Twater+(Told-Twater)exp[-hAΔt/(mc)]; Q=mc(Tnew-Told). A=(m/100)^(2/3) m²; c=3500 J/(kg°C).",
  "formulaText": [
    "每分鐘精確解：T新＝水溫＋(T舊−水溫)×exp[−hA×60/(mc)]。\n本分鐘熱量Q＝mc(T新−T舊)，正值傳入魚。\n累積吸熱−累積散熱＝mc(T目前−18°C)。\nA＝(m/100)^(2/3) m²；c＝3500 J/(kg·°C)。\nh＝0不換熱；沒有日照或代謝熱源。",
    "Exact minute: Tnew=water+(Told−water)×exp[−hA×60/(mc)].\nHeat Q=mc(Tnew−Told); positive means heat enters.\nTotal gain−total loss=mc(Tnow−18°C).\nArea=(m/100)^(2/3) m²; c=3500 J/(kg·°C).\nh=0 gives no exchange; no solar or metabolic heat source."
  ],
  "dateModified": "2026-10-08"
};
