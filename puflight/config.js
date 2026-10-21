window.CONFIG={
  "id": "H04",
  "path": "puflight",
  "status": "complete",
  "controller": "puflight.js",
  "extras": [
    "puflight-model.js",
    "puflight.css",
    "puflight.js"
  ],
  "title": [
    "海鸚的夜航燈光圖",
    "Puffin night lights"
  ],
  "question": [
    "關掉港口燈，路徑會往哪裡變？",
    "Where do paths turn when harbor lights go out?"
  ],
  "hint": [
    "先關港口燈，看同一組24條路徑怎麼變；再試把燈光遮向港內。",
    "Turn harbor lights off and compare the same 24 paths. Then try shielding light toward town."
  ],
  "defaults": {
    "light": 1,
    "beam": "all",
    "sea": 1,
    "seed": 17,
    "step": 12
  },
  "controls": [],
  "mission": [
    "燈關掉、海面線索也關掉，會保證往海飛嗎？",
    "With lights and the sea cue both off, must paths lead to sea?"
  ],
  "options": [
    [
      "不會；本模型只剩隨機方向",
      "No; only random directions remain in this model"
    ],
    [
      "會；模型自動知道安全方向",
      "Yes; the model automatically knows the safe direction"
    ]
  ],
  "answer": 0,
  "reason": [
    "線索都沒有時，只剩自訂的隨機方向。本圖的海側／港側只是位置分類，不是安全或死亡預測。",
    "With both cues absent, only a chosen random component remains. Sea-side and harbor-side are location bins, not safety or mortality forecasts."
  ],
  "comparisons": [],
  "ep": "267",
  "episodeTitle": "海洋中的小丑工程師：海鸚的潛水神技與生存大挑戰",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://www.sciencedirect.com/science/article/pii/S0003347224002707",
    "Brown等（2024）海鸚幼鳥燈光研究：摘要",
    "Brown et al. (2024), puffling light experiments: abstract"
  ],
  "extraSources": [
    [
      "https://www.trentu.ca/news/story/25/11/20/young-atlantic-puffins-need-darkness-but-are-attracted-to-light",
      "Trent研究團隊的實驗說明（2025）",
      "Trent research team’s account (2025)"
    ]
  ],
  "description": [
    "切換港口燈、遮光方向與海面線索，比較24條可重播的海鸚幼鳥示意路徑。固定亂數方便比較；方向權重是自訂假設，不預測真實傷亡。",
    "Toggle harbor lights, shielding direction and a sea cue to compare 24 reproducible puffling paths. A fixed seed supports comparison; chosen weights do not predict real harm."
  ],
  "keywords": "海鸚,幼鳥,人工光,光害,遮光,方向線索,海鳥,保育,隨機模型,Atlantic puffin,puffling,artificial light,light pollution,shielding,seabirds,directional cues,seeded simulation",
  "date": "2026-10-04",
  "icon": "🌙",
  "limit": [
    "研究支持大西洋海鸚幼鳥可能被人工光吸引；不能推成所有鳥種、成鳥或所有夜晚的反應。原論文只讀到搜尋服務提供的摘要，全文直連403；另實讀作者所屬Trent大學研究報導。不把報導中的擱淺數當機率，也不把月光導航當已證實機制。圖為俯視假想地圖，沒有真實地點、距離、時間、速度或死亡推算。每條從同一教具巢位出發，12步每步14圖單位；24條只是24次抽樣。左側x<220、右側x>380是自訂位置界線，不是抵達海洋／受困事件。海面線索代表假設的向海方向提示，開啟權重2；不是人工海面照明，也不是已驗證的感官機制。可見港燈權重4，其他隨機方向權重1，皆未校準。每步按權重抽取一種方向，再加±45°散開；隨機方向可朝任何角度。遮光為平面90°光束的幾何示意，不計反射、散射、高度、天氣、地形或真實燈具；向港內可讓本圖出發區看不到燈，不能當實地保證。切條件保留種子及查看步數，每路每步固定消耗兩個亂數。相同種子及條件可重播；換種子是另組教具抽樣，不是真實另一夜。未比較光色，不聲稱某種LED能解決問題；不提供捕捉或救援操作。官方EP267單集metadata待確認。 90°扇形使用方向分量判定並包含45°邊界，避免浮點正規化排除邊線。此地圖合法路徑仍不會抵達港燈位置；燈座點屬扇形頂點。對照分別標示設定相同、此步路徑相同，或僅三區數量相同；第0步必須先走一步才有路徑差異可看。",
    "Research supports attraction to artificial light in Atlantic puffin fledglings, not a universal response across species, ages or nights. The paper was read through its search-index abstract (direct full text returned 403); the authors’ Trent University account was read directly. Stranding counts are not used as probabilities; moon navigation is not asserted. This is a top-down toy map with no real site, distance, time, speed or mortality forecast. Each of 24 sample paths starts at one toy nest and takes 12 steps of 14 drawing units. x<220 and x>380 are chosen location bins, not arrival or stranding events. The sea cue is a hypothetical direction signal, not added sea lighting or a validated sensory mechanism. Chosen weights are 2 for the sea cue, 4 for a visible harbor lamp and 1 for other random directions. Each step samples a cue, then adds a ±45° spread; random directions cover all angles. Shielding is a planar 90° beam illustration without reflection, scattering, height, weather, terrain or real fixture performance. A town-facing beam hides the lamp from the starting region in this map, not a field guarantee. Settings preserve the seed and displayed step; every path-step consumes two random numbers. Identical settings and seed replay identically; a new seed is a toy sample, not another real night. No spectrum comparison or LED remedy is claimed. No capture or rescue procedure is provided. Official EP267 metadata awaits verification. The90-degree sector compares direction components and includes45-degree boundaries, avoiding floating-point normalization errors at the edge. Legal paths in this map cannot reach the lamp; its position is the sector vertex. Comparisons distinguish identical settings, identical displayed-step paths, and equal bin counts alone. Step0 requires stepping before any path difference can be observed."
  ],
  "formula": "24 paths × 12 steps, 14 drawing units/step. Weights: sea=2×cue; light=4×visible; random=1. Sample cue proportional to weights. Sea angle=π±π/4; light angle=toward lamp±π/4; random angle=0..2π. Seeded LCG, two draws per path-step. Location bins x<220, x>380; neither is a survival outcome.",
  "formulaText": [
    "24條路，每條12步；每步14圖單位。\n向海權重＝2×海面線索；港燈＝4×燈可見；隨機＝1。\n每步照權重抽一類方向，海／燈方向再散開±45°。\n光束：全向，或以朝巢／朝港內為中心的90°扇形。\n相同種子產生相同亂數序列，每條每步固定兩次抽樣。\n左x<220＝海側、右x>380＝港側，其餘＝中間。\n步數和座標沒有實際時間／距離；分類不是存活率。",
    "24 paths, 12 steps each, 14 drawing units per step.\nWeights: sea = 2 × cue; lamp = 4 × visible; random = 1.\nSample a direction type by its weight; sea/lamp headings spread ±45°.\nBeam: all directions, or a 90° sector toward nest/town.\nA seed fixes the random sequence; two draws per path-step.\nx<220 = sea-side; x>380 = harbor-side; otherwise middle.\nSteps and coordinates have no real time/distance units; bins are not survival."
  ],
  "dateModified": "2026-10-12"
};
