window.CONFIG={
  "id": "L05",
  "path": "bitmail",
  "status": "complete",
  "topic": "digital",
  "icon": "📨",
  "date": "2026-10-17",
  "title": [
    "用二進位給動物發訊息",
    "Binary animal messages"
  ],
  "question": [
    "翻四個開關、送出動物卡：一個檢查位能抓到哪些錯誤？",
    "Flip four switches and send an animal card: which errors can one check bit detect?"
  ],
  "defaults": {
    "draft": 5,
    "senderBook": 0,
    "receiverBook": 0,
    "parity": "even",
    "frame": null,
    "errors": 0
  },
  "extras": [
    "bitmail-model.js",
    "bitmail.css",
    "bitmail.js"
  ],
  "description": [
    "用四個0/1開關與自訂16動物碼表編碼，選奇偶校驗，再翻動收到的位元；比較單位錯誤、雙位漏檢與碼表錯配。",
    "Encode 16 animals with four binary switches and custom codebooks. Choose even or odd parity and flip received bits to explore single errors, undetected double errors and codebook mismatch."
  ],
  "keywords": "二進位,位元,動物編碼,奇偶校驗,錯誤偵測,碼表,科學好好聽,binary,bits,animal encoding,parity,error detection,codebook",
  "sources": [
    [
      "https://www.csfieldguide.org.nz/en/chapters/data-representation/numbers/",
      "Canterbury：二進位與四位16組",
      "Canterbury: binary and 16 four-bit patterns"
    ],
    [
      "https://www.csfieldguide.org.nz/en/chapters/coding-error-control/the-parity-magic-trick/",
      "Canterbury：單一校驗位的限制",
      "Canterbury: limits of one parity bit"
    ]
  ],
  "podcast": {
    "ep": "EP100",
    "title": "數位世界的秘密密碼：只有0與1的魔法！",
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "mission": [
    "單一校驗位顯示通過，就代表動物卡一定正確？",
    "Does a passed single parity check guarantee the right animal?"
  ],
  "options": [
    [
      "不保證：兩位變動或不同碼表都可能通過",
      "No: two changed bits or different codebooks may pass"
    ],
    [
      "保證，而且能自動找出並修好每個錯位",
      "Yes: it locates and fixes every wrong bit"
    ]
  ],
  "answer": 0,
  "reason": [
    "單一校驗只看1的奇偶；不定位錯位，也不檢查碼表約定。對照原件是教具人工核對，不是校驗器偷看原資料。",
    "One parity bit checks only whether the count of 1s is even or odd. It cannot locate a bad bit or verify the codebook. Comparing the original is a teaching check, not information used by the parity checker."
  ],
  "formula": [
    "四資料位由左到右為8、4、2、1，編號=8b₀+4b₁+2b₂+b₃；固定四位共16組。\n碼表A：動物序號=編號；B：動物序號=(編號+1) mod16。作者約定，非Unicode或ASCII。\n偶校驗P=四位1數 mod2；奇校驗P=1−(四位1數 mod2)。0個1為偶。\n收到四位或五位；校驗只看收到全包1總數的奇偶，不看原包。\n不同位的淨翻轉數為奇：檢查不符；為偶：可漏檢。兩次翻同一位會復原，不是兩位錯誤。\n單P不能定位或自動糾正。加P總5位，仍只有4位編動物；無P總4位。\n按傳送複製草稿，之後改草稿／新校驗選項不改舊包；再次傳送才套用。\n本機角色扮演，不連網；碼表及校驗約定先共同知道，無傳送header／時序／封包遺失模型。",
    "Four data bits have weights 8, 4, 2, 1. Number = 8b₀ + 4b₁ + 2b₂ + b₃; 16 patterns.\nBook A: animal ID = number; book B: animal ID = (number + 1) mod 16. Custom, not Unicode/ASCII.\nEven P = count of 1s mod 2; odd P = 1 − (count of 1s mod 2). Zero 1s is even.\nThe receiver checks only the parity of received bits, without consulting the original.\nAn odd number of net changed bits fails; even changes may pass. Flipping one position twice restores it.\nOne parity bit cannot locate or correct errors. Five transmitted bits still carry four animal data bits; no parity uses four.\nSend snapshots the draft; later draft/parity edits keep the old packet. Resend applies them.\nLocal role-play, no network. Codebook/check rule is pre-agreed; no header, timing or lost-packet model."
  ],
  "limit": [
    "自訂動物表與教學格式，不是真Unicode、網路協定或加密；本機即時複製不是網路速度。校驗規則依發送時約定，碼表可以故意不一致；表B只是循環移一格，不改動物生物分類。單P不能定位／糾正，通過不保證內容；此教具人工知道原件的比較不是接收器證據。無亂序、遺失、插入刪除、機率或可靠率模型；來源的二維行列定位未實作。",
    "Custom animal tables and teaching format, not Unicode, a network protocol or encryption. Immediate local copying is not network speed. Check rule is pre-agreed at send; books can deliberately differ. Book B shifts entries without changing biological classification. One parity bit cannot locate/correct; a pass is no guarantee. Teaching comparison with the known original is not receiver evidence. No loss, reordering, insertion/deletion, probability or reliability model; source 2D row/column correction is not implemented."
  ]
};
