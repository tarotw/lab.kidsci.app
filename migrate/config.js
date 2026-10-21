window.CONFIG={
  "id": "H02",
  "path": "migrate",
  "status": "complete",
  "controller": "migrate.js",
  "extras": [
    "migrate-model.js",
    "migrate.css",
    "migrate.js"
  ],
  "title": [
    "帝王蝶接力遷徙",
    "Monarch migration relay"
  ],
  "question": [
    "同一隻蝶，會飛完全年的來回嗎？",
    "Does one butterfly make the whole annual round trip?"
  ],
  "hint": [
    "先按下一步出發；第二步看世代交接，再試拿掉中部花蜜並改逆風。",
    "Start with Next; watch the handoff on step 2. Then remove central nectar and try a headwind."
  ],
  "defaults": {
    "wind": 0,
    "nectar": 16,
    "flowers": [
      true,
      true,
      true
    ],
    "milkweed": [
      true,
      true,
      true
    ]
  },
  "controls": [],
  "mission": [
    "北上接力後，秋天每一站都要換下一代嗎？",
    "After the northbound relay, must every autumn stop start a new generation?"
  ],
  "options": [
    [
      "不用；秋季可以由同一遷徙世代連續南下",
      "No; the same migratory generation can continue south"
    ],
    [
      "要；每飛一段就必須換代",
      "Yes; every leg requires a new generation"
    ]
  ],
  "answer": 0,
  "reason": [
    "東部族群春夏跨世代擴展；秋季的遷徙世代南下越冬，次春再開始北返。本例W/A/B/C是示意標記，不是固定世代數。",
    "Eastern monarchs expand over breeding generations. An autumn migratory generation flies south, overwinters and starts north again in spring. W/A/B/C are example labels, not a fixed generation count."
  ],
  "comparisons": [],
  "ep": "177",
  "episodeTitle": "黃金戰甲：帝王斑蝶的千里長征",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://www.nps.gov/subjects/pollinators/migratingmonarchs.htm",
    "美國國家公園署：跨世代遷徙",
    "National Park Service: multigenerational migration"
  ],
  "extraSources": [
    [
      "https://monarchjointventure.org/faq/milkweed/is-milkweed-more-important-than-nectar",
      "Monarch Joint Venture：秋季花蜜與乳草角色",
      "Monarch Joint Venture: autumn nectar and milkweed roles"
    ]
  ],
  "description": [
    "在固定示意地圖配置花蜜與乳草，改順逆風，逐步看帝王蝶春夏世代交接與秋季同代南下；核對每段飛行能量與補給缺口。",
    "Place nectar and milkweed on a fixed schematic map, change wind, and step through spring/summer handoffs and autumn travel by one generation. Track flight energy and supply gaps."
  ],
  "keywords": "帝王蝶,帝王斑蝶,接力遷徙,乳草,花蜜,順風,逆風,世代交替,飛行能量,北美東部族群,monarch butterfly,migration relay,milkweed,nectar,tailwind,headwind,generations,flight energy,eastern monarchs",
  "date": "2026-10-04",
  "icon": "🦋",
  "limit": [
    "限定北美東部遷徙族群的示意年週期；不概括西部或不遷徙族群。W是越冬後親代，A、B、C是本例依次的新世代；春夏三次交接只是教具選擇，真實世代數與繁殖位置會變。秋季三段由同一C世代飛行，沒有在每站換蝶；不是單蝶包辦全年往返。交接濃縮產卵、幼蟲和蛹，不是成蝶瞬間變年輕。乳草供幼蟲、花蜜供成蝶；未建模實際葉量、發育天數、繁殖率或族群數。每段300km、空速20km/h、0.8能量點/飛行小時、初始36點、容量60點、新世代30點及交接成本6點全是未校準教具。風速是各段相對飛行方向的順逆風，不是同一固定南北風；忽略滑翔、上升氣流、天氣選擇及晝夜活動。地圖位置和線段不是比例尺，距離不可作真遷徙預報。花蜜滑桿為每次出發前補給上限，只扣實際吃進且受容量限制；同站春夏與秋季可再補，不是假設一份花蜜被重複花用。越冬林起點不另補花蜜，終點不推算越冬是否安全。交接時先扣成本，親代剩餘另封存；下一代30點來自幼蟲取食的外部資源，不繼承親代油箱。缺乳草或能量不夠只停教學路線，不判死亡；飛行能量不夠時只走可付出的部分，後站花蜜不會隔空補給。改設定重算當前步，是另一個假設，不是逆轉真生命。EP177官方單集metadata待核對。 主帳各項顯示到小數兩位；顯示總和不同時使用「≈」，原始能量帳不改。對照設定相同時明示相同，結果不另製造差異。",
    "A schematic annual cycle for eastern North American migrants, not western or nonmigratory populations. W is the overwintered parent cohort; A,B,C are successive example generations. Three breeding handoffs are a teaching choice; real generation counts and breeding places vary. The same C generation flies all three autumn legs, rather than one individual making the entire annual round trip. A handoff condenses egg, larval and pupal development; an adult does not become young again. Milkweed supports larvae; nectar fuels adults. Leaf quantities, development days, reproduction rates and population size are not modeled. Each 300 km leg, 20 km/h airspeed, 0.8 toy energy points per flight hour, initial 36, capacity 60, new-generation 30 and breeding cost 6 are unfitted choices. Wind is relative to each leg’s flight direction, not one fixed north/south wind. Gliding, thermals, weather choice and daily activity are omitted. The map is not to scale or a migration forecast. Nectar is a fresh per-departure supply limit, capped by available storage; repeat seasonal visits represent new external intake. No extra nectar at the initial winter forest; reaching it does not predict overwinter survival. At handoff, breeding costs are debited, unused parental energy is closed in a separate account, and a new 30-point reserve comes from larval feeding, not inherited fuel. Missing hosts or fuel stop the toy route, not declare death. Insufficient fuel permits partial flight only; later nectar cannot teleport backward. Settings recompute the current step under another hypothesis. Official EP177 metadata unverified. Each displayed account term rounds to two decimals; “≈” identifies unequal displayed sums without altering the unrounded account. Identical comparison settings are labeled identical and do not produce artificial differences."
  ],
  "formula": "Ground speed=20+wind km/h. Cost per300km leg=300/(20+wind)*0.8 toy points. Nectar=min(supply,60-current) at enabled departure sites. Insufficient energy -> partial distance. Handoff requires milkweed and6 points; retire remaining parent energy, add30 external larval points.36+nectar+larval input=current+flight+breeding+retired accounts.",
  "formulaText": [
    "沿線地速＝自訂空速20＋相對風速（−10至10）km/h。\n每段示例距離300km；飛行需求＝300÷地速×0.8教具點／小時。\n出發地有花蜜：實際補給＝min(設定,60−目前點)。起點越冬林不另補。\n能量不足：只飛可支付的小時×地速，能量歸零，停在段中；不從後站借花蜜。\n北上抵達每站後另一步交接：需要乳草及6點。扣6點、封存親代剩餘，下一代從幼蟲取食外部帶入30點。\nW→A→B→C只代表本例三次交接；南下三段都保持C。\n36＋已吃花蜜＋新世代外部輸入＝目前點＋飛行支出＋交接支出＋親代封存點。\n設定改動重算相同步；沒有真實天數、動物數量或存活推算。",
    "Along-leg ground speed=toy airspeed 20+relative wind (−10..10) km/h.\nEach toy leg=300 km; required points=300/speed×0.8 points/hour.\nAt enabled nectar sites, intake=min(setting,60-current). No extra nectar at initial winter forest.\nIf fuel is insufficient, fly affordable hours×ground speed, spend to zero, stop mid-leg; no borrowing from later stops.\nA separate northbound handoff needs milkweed and 6 points. Debit 6, close remaining parent energy, then introduce 30 external points from larval feeding in the new generation.\nW→A→B→C represents three toy handoffs; all three southbound legs retain C.\n36+nectar intake+new-generation external input=current+flight+breeding+closed parent accounts.\nSettings recompute the same step; no real dates, animal counts or survival prediction."
  ],
  "dateModified": "2026-10-12"
};
