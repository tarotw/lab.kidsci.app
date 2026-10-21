window.CONFIG={
  "id": "H05",
  "path": "seedride",
  "status": "complete",
  "controller": "seedride.js",
  "extras": [
    "seedride-model.js",
    "seedride.css",
    "seedride.js"
  ],
  "title": [
    "犀鳥的種子運送地圖",
    "Hornbill seed journeys"
  ],
  "question": [
    "離開果樹的種子，落到了哪裡？",
    "Where do seeds land after leaving the fruit tree?"
  ],
  "hint": [
    "先拉大活動範圍，看種子能否越過缺口；再改延遲，看看落點是否更遠。",
    "Increase the movement range to cross the gap. Then change the delay: do seeds land farther away?"
  ],
  "defaults": {
    "tree": "A",
    "range": 320,
    "gap": 80,
    "delay": 50,
    "time": 120
  },
  "controls": [],
  "mission": [
    "留在鳥體內越久，就一定落得更遠嗎？",
    "Does a longer delay always carry a seed farther?"
  ],
  "options": [
    [
      "不一定；鳥可能繞回原來的地方",
      "No; the bird may loop back toward its starting point"
    ],
    [
      "一定；時間會直接變成更遠距離",
      "Yes; more time always means more distance"
    ]
  ],
  "answer": 0,
  "reason": [
    "本例路線會繞回果樹；落點取決於排出時的位置，不能只把時間乘上速度。距離、路線與延遲都是示例；落地不是發芽或成樹。",
    "This route loops back to the fruit tree. Deposition depends on position at release, not just time multiplied by speed. The route, distances and delays are examples; deposition is not germination or establishment."
  ],
  "comparisons": [],
  "ep": "224",
  "episodeTitle": "〈VIP｜EP.224｜雨林中的重裝轟炸機：大犀鳥的雙嘴之謎與愛情監獄〉",
  "podcast": {
    "verified": true,
    "urlVerified": true,
    "provider": "Apple Podcasts / Firstory",
    "url": "https://podcasts.apple.com/tw/podcast/vip-ep-224-%E9%9B%A8%E6%9E%97%E4%B8%AD%E7%9A%84%E9%87%8D%E8%A3%9D%E8%BD%9F%E7%82%B8%E6%A9%9F-%E5%A4%A7%E7%8A%80%E9%B3%A5%E7%9A%84%E9%9B%99%E5%98%B4%E4%B9%8B%E8%AC%8E%E8%88%87%E6%84%9B%E6%83%85%E7%9B%A3%E7%8D%84/id1812447277?i=1000761494134",
    "episodeId": "1000761494134",
    "showId": "1812447277",
    "source": "https://open.firstory.fm/story/cmnx1bzc00ekj01yl66oz70s5",
    "title": "〈VIP｜EP.224｜雨林中的重裝轟炸機：大犀鳥的雙嘴之謎與愛情監獄〉",
    "durationSeconds": 861,
    "duration": "14分21秒",
    "durationEn": "14 min 21 sec",
    "durationIso": "PT14M21S",
    "subscribersOnly": true,
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource221/v4/65/b3/46/65b34693-136b-5381-8d4e-f5db795d9061/3c553286-126e-4761-9bc0-3ff8f2333412.jpg/500x500bb.webp",
    "coverAvailable": true,
    "coverFile": "podcast/ep224-apple-20261012.webp",
    "coverFormat": "webp",
    "artworkVisualChecked": true,
    "verifiedOn": "2026-10-12",
    "coverVerifiedOn": "2026-10-12",
    "evidenceBasis": "Actual Apple show search224 and exact episode page/official displayed artwork; linked Firstory exact00:14:21, same Apple episode ID, membership lock observed. No actual audio/subscription test."
  },
  "source": [
    "https://zenodo.org/records/5012380",
    "Naniwadekar等（2019）亞洲犀鳥研究與資料說明",
    "Naniwadekar et al. (2019), Asian hornbill study and data description"
  ],
  "extraSources": [
    [
      "https://images.assettype.com/ncfindia/2019-11/4aaf8617-4a96-4645-a261-02b558c7d331/2019_Naniwadekar_etal_seed_dispersal_hornbills_Acta_Oecologica.pdf",
      "作者機構提供的論文PDF：移動、停留與落點",
      "Author-hosted paper PDF: movement, retention and deposition"
    ]
  ],
  "description": [
    "選擇果樹、活動範圍、林地缺口與種子停留延遲，觀察犀鳥示例路線上的32粒種子落點；與原地掉落比較，區分散播和成樹。",
    "Choose a fruit tree, movement range, forest gap and retention delay to follow 32 seeds along a toy hornbill route. Compare local fall with transport, separating dispersal from establishment."
  ],
  "keywords": "犀鳥,種子散播,果樹,雨林,棲地破碎化,林地連通,停留時間,大犀鳥,hornbill,seed dispersal,fruit tree,forest fragmentation,connectivity,gut passage,retention time,seed deposition",
  "date": "2026-10-04",
  "icon": "🌳",
  "limit": [
    "本圖是未校準教具，不是真實大犀鳥個體或地點預報。研究把移動與種子停留時間合併估計散播，並指出季節、個體與鳥種間有差異。本圖800×480公尺是假想平面；三棵果樹同種、只位置不同。32粒示例種子在0分鐘同時吃入，完整保留直到各自排出；不分反芻或排便，也不模擬消化損傷。固定亂數224為每粒決定延遲＝滑桿中心±18分鐘，取樣不會隨切條件重抽。鳥用同一條往返曲線，120分鐘回到母樹；活動範圍是離母樹的最大直線距離，不是飛行總里程或真實家域。曲線與速度皆自訂，零範圍表示留在母樹。林地缺口在地圖中央，只改落點篩選，不阻止本例鳥穿越，也不代表真鳥一定跨過開闊地。綠色代表此假想植物通過林地篩選，缺口不通過；沒有把任何種子變成樹，也沒有模擬發芽率、捕食、土壤、授粉或世代基因流。原地對照假定同32粒在0分鐘掉在母樹，沒有消化延遲；比較時會標示搬運中粒數，不只看已落數。對側林地是母樹另一邊的x=400分區，有缺口時才是兩片分離林地；篩選通過數不是森林恢復率。最遠距離與平均值只計已落地的種子，尚無落點則留空。延遲增加未必更遠，因路線會返回。EP224官方單集與封面已核對，14分21秒，官方標示訂閱者限定。 未作答提示依零範圍、未完整查看、目前延遲50／100或其他值給可操作的下一步；完成後比較的是同32粒全落點，非不同樣本數。改配置重算另一假設，單獨推進時鐘不移動已落種子。",
    "An unfitted teaching model, not a forecast for real great hornbills or a real site. Research combines movement with retention times and reports variation across individuals, seasons and species. The 800×480 m map is imaginary; all three fruit trees represent one hypothetical species at different locations. A batch of 32 seeds is swallowed at minute 0 and retained intact until individual release. Regurgitation and defecation are not distinguished; digestive damage is omitted. Fixed seed 224 assigns delays around the chosen center ±18 minutes, without resampling when settings change. A chosen out-and-back curve returns to the parent at 120 minutes. Range is maximum straight-line distance from the parent, not total flight length or measured home range. The curve and speeds are chosen; zero range stays at the tree. A central forest gap changes only the habitat screen, not this bird’s path. Real birds need not cross open areas this way. Green means passing the hypothetical plant’s forest screen; gaps fail. No seed becomes a tree; germination, predators, soil, pollination and genetic flow across generations are omitted. Local fall places all 32 seeds at the parent at time 0, without retention; in-transit counts are shown for a fair account. Opposite-side forest is across x=400 from the parent; only a nonzero gap separates patches. Passing the screen is not forest recovery. Mean and maximum distance use deposited seeds only and remain blank before deposition. Longer delays need not mean farther dispersal on a returning route. Official EP224 identity and artwork verified: 14 min 21 sec, marked subscriber-only. Unanswered challenge hints follow zero range, incomplete viewing and current 50/100/other delay values. Completing the view compares all 32 deposited seeds rather than different sample counts. Settings recompute another scenario; advancing only the clock does not move deposits."
  ],
  "formula": "x(t)=x0+sign×R×sin(πt/120); y(t)=y0+0.2R×sin(2πt/120). release_i=D+18(2u_i−1), fixed LCG seed224. 32=in transit+forest+gap. Gap: abs(x−400)<G/2 for G>0; otherwise forest. Local fall:32 at source at t0.",
  "formulaText": [
    "假想地圖單位：公尺；示例時鐘：分鐘。\nx(t)=x₀±R sin(πt/120)\ny(t)=y₀+0.2R sin(2πt/120)\n左方果樹往右，右方果樹往左，120分鐘返回。\n每粒排出時間=D+18(2u−1)，u由固定224亂數決定。\n排出後位置固定為該時刻的鳥位置。\n32=搬運中＋林地落點＋缺口落點\n缺口內：|x−400|<G/2；邊界算林地。\n原地對照：32粒在0分鐘掉在母樹，距離0。\n只記落點，不自動發芽、授粉或成樹。",
    "Toy map: meters; example clock: minutes.\nx(t)=x₀±R sin(πt/120)\ny(t)=y₀+0.2R sin(2πt/120)\nLeft trees go right; the right tree goes left; return at 120 min.\nRelease time=D+18(2u−1), u from a fixed seed224 sequence.\nDeposited seeds stay at the bird position at release.\n32=in transit+forest deposits+gap deposits\nGap interior: |x−400|<G/2; boundaries count as forest.\nLocal fall:32 at the parent at minute0, distance0.\nNo automatic germination, pollination or establishment."
  ],
  "dateModified": "2026-10-12"
};
