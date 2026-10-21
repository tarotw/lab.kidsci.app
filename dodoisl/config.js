window.CONFIG={
  "id": "H11",
  "path": "dodoisl",
  "status": "complete",
  "controller": "dodoisl.js",
  "extras": [
    "dodoisl-model.js",
    "dodoisl.css",
    "dodoisl.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "title": [
    "渡渡鳥島：一起看三種壓力",
    "Dodo island: three pressures"
  ],
  "question": [
    "大鳥還在，小鳥卻變少，下一年會怎樣？",
    "Adults remain, but fewer young arrive. What happens next?"
  ],
  "hint": [
    "先走一年，再改壓力，看看下一年。",
    "Step a year, change a pressure, and watch the next year."
  ],
  "defaults": {
    "harvest": 0,
    "habitat": 100,
    "predator": 0
  },
  "controls": [],
  "mission": [
    "數量變成零後，只把壓力調低，會自己長出新鳥嗎？",
    "Once both stages reach zero, does lowering pressure create new birds?"
  ],
  "options": [
    [
      "不會，沒有鳥就沒有繁殖來源",
      "No; without birds there is no source of reproduction"
    ],
    [
      "會，環境改善就一定立即恢復",
      "Yes; better conditions always restore birds immediately"
    ]
  ],
  "answer": 0,
  "reason": [
    "本教具沒有移入或復育。幼鳥與成鳥都歸零後，下一年仍是零；重播是重新開始教學情境，不是歷史復活。",
    "This toy has no immigration or reintroduction. With both stages at zero, the next year stays zero. Replay starts a new teaching scenario, not a historical resurrection."
  ],
  "comparisons": [],
  "ep": "264",
  "episodeTitle": "穿越時空的奇蹟：重新認識傳奇的「渡渡鳥」，解開滅絕與重生的科學謎團！",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://oumnh.ox.ac.uk/oxford-dodo-0",
    "牛津自然史博物館：渡渡鳥",
    "Oxford Museum of Natural History: the dodo"
  ],
  "extraSources": [
    [
      "https://www.nhm.ac.uk/discover/the-dodo-bird-the-real-facts-about-this-icon-of-extinction.html",
      "倫敦自然史博物館：渡渡鳥背景",
      "Natural History Museum: dodo background"
    ],
    [
      "https://learningzone.oumnh.ox.ac.uk/dodo",
      "牛津學習區：棲地與引入動物",
      "Oxford Learning Zone: habitat and introduced animals"
    ]
  ],
  "description": [
    "調整採集壓力、棲地保留與引入捕食壓力，逐年觀察示例幼鳥與成鳥；和無額外壓力參考島比較，明示整數規則與科學限制。",
    "Change collection pressure, retained habitat and introduced predation. Step through a two-stage toy population beside a reference island, with explicit integer rules and limitations."
  ],
  "keywords": "渡渡鳥,模里西斯,滅絕,外來種,棲地,族群,幼鳥,成鳥,dodo,Mauritius,extinction,introduced species,habitat,two-stage population",
  "date": "2026-10-04",
  "icon": "🏝️",
  "limit": [
    "這是自訂兩階段整數教具，不是渡渡鳥族群資料。初始60成鳥、20幼鳥，每年成鳥背景存活85%、幼鳥一半進入成鳥，其他幼鳥離開帳本；不是實測生命史，沒有性別或配偶限制。背景存活向下取整，採集從存活成鳥扣除並向上取整，會產生小族群的整數效應。新幼鳥來自採集後的成鳥，包含未獨立追蹤的產卵／孵化階段；引入捕食壓力只降低這項補入，不表示真實捕食者不捕食成鳥。棲地保留百分比同時影響新幼鳥補入與容納上限，每1%對應2個示例名額，上限200。成鳥先佔名額，幼鳥使用剩餘名額；超出的個體記為容納排除，並非自然棲地突然搬走相同數量。所有率、初值和優先規則未經資料校準。沒有遷入、復育、隨機災害或確切史年；零不自行回生。滑桿只改下一年，已經走過的歷史不重算；示範與重播明確回第0年。A參考島一直採0採集、100%棲地、0新增捕食壓力；B依每年的設定走，兩島同時刻，但A也有背景死亡與容量限制。「0捕食壓力」是本模型無新增壓力，不是歷史沒有任何捕食者。鳥形和樹是原創符號，不是真實數量、解剖或島嶼比例。整段30個示例年，每0.5秒一步；不是歷史滅絕時間，也不預測實際復育。參考資料對最後目擊年份有差異，本頁不採確切年份。EP264官方metadata待確認。",
    "This is an uncalibrated two-stage integer teaching model, not dodo population data. Start:60 adults and20 young. Chosen yearly background adult survival85%; half the young mature and the rest leave the ledger. No sex or mate limits. Survivors round down; collection rounds up, causing small-population integer effects. New young come from surviving adults after collection, combining untracked laying/hatching stages. Introduced predation reduces only recruitment here, not a claim that real predators spare adults. Retained habitat affects recruitment and a cap of two toy places per percentage point, up to200. Adults take places first, young use the remainder; excess is recorded as capacity exclusion, not a measured habitat response. All parameters, initial values and priority rules are chosen. No immigration, reintroduction, random disasters or historical dates; zero is absorbing. Sliders affect the next year only, preserving past states; presets/replay explicitly restart at year0. Reference A always uses0 collection,100% habitat,0 additional predation; B follows yearly settings at the same clock. A still has background losses and a cap. Zero added predation does not mean no historical predators. Original bird/tree symbols are not a census, anatomy or scale map. Thirty example years advance at0.5 seconds per step, not historical extinction timing or a recovery forecast. Sources differ on final-sighting dates; none is used. Official EP264 metadata awaits verification."
  ],
  "formula": "S=floor(.85 A); H=ceil(S h/100); U=S-H; M=floor(J/2); B=floor(.8 U (1-p/100) L/100); K=2 L; A_next=min(K,U+M); J_next=min(B,max(0,K-A_next)). No immigration. Rates apply to next year only.",
  "formulaText": [
    "S＝⌊0.85×舊成鳥⌋；採集H＝⌈S×採集%÷100⌉；留下U＝S−H。\n成熟M＝⌊舊幼鳥÷2⌋；新幼鳥B＝⌊0.8×U×(1−捕食%÷100)×棲地%÷100⌋。\n容納K＝2×棲地%；下年成鳥＝min(K,U+M)。\n下年幼鳥＝min(B,max(0,K−下年成鳥))。\n⌊⌋向下取整；⌈⌉向上取整。所有數值與順序都是自訂教具規則。\n總數變化＝新幼鳥−背景成鳥損失−採集−幼鳥損失−容量排除。\n兩階段同為0，所有來源都0；沒有自動移入。",
    "S=floor(0.85×old adults); H=ceil(S×collection%/100); U=S−H.\nM=floor(old young/2); B=floor(0.8×U×(1−predation%/100)×habitat%/100).\nCap K=2×habitat%; next adults=min(K,U+M).\nNext young=min(B,max(0,K−next adults)).\nFloor rounds down; ceil rounds up. Values and ordering are chosen toy rules.\nTotal change=births−adult background loss−collection−young loss−capacity exclusion.\nWith both stages zero, all sources stay zero; no automatic immigration."
  ],
  "dateModified": "2026-10-13"
};
