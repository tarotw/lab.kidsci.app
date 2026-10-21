window.CONFIG={
  "id": "X06",
  "path": "oxyflow",
  "status": "complete",
  "controller": "oxyflow.js",
  "extras": [
    "oxyflow-model.js",
    "oxyflow.css",
    "oxyflow.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "title": [
    "鮭魚與水中氧",
    "Salmon oxygen budget"
  ],
  "question": [
    "水變暖，氧供給和需求會一起變嗎？",
    "When water warms, how do oxygen supply and demand change?"
  ],
  "hint": [
    "先把水溫調高，看青棒與金棒，再改新水量。",
    "Warm the water: compare the cyan and gold bars, then change fresh-water flow."
  ],
  "defaults": {
    "temp": 12,
    "flow": 10,
    "oxygen": 100,
    "activity": 2
  },
  "controls": [],
  "mission": [
    "水完全不含氧時，單純增加新水量能補氧嗎？",
    "If water contains no oxygen, can more fresh-water flow supply oxygen?"
  ],
  "options": [
    [
      "不能，還需要水本身含氧",
      "No: the water must contain oxygen"
    ],
    [
      "可以，水量變多就一定有氧",
      "Yes: more water always supplies oxygen"
    ]
  ],
  "answer": 0,
  "reason": [
    "供給取決於水量和含氧濃度；兩者相乘才是流入的氧。",
    "Incoming oxygen is water flow multiplied by oxygen concentration; both matter."
  ],
  "comparisons": [],
  "ep": "271",
  "episodeTitle": "穿越冰河的奇蹟：揭開台灣國寶「櫻花鉤吻鮭」的重生秘辛！",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://water.usgs.gov/nawqa/pnsp/pubs/ofr94-455/sw-t.html",
    "USGS：溶氧表4與飽和百分比",
    "USGS: oxygen-solubility Table4 and percent saturation"
  ],
  "extraSources": [
    [
      "https://journals.biologists.com/jeb/article/206/18/3239/13880/The-effect-of-temperature-on-swimming-performance",
      "Lee等2003：不同鮭魚族群的耗氧與溫度",
      "Lee et al. 2003: temperature and oxygen use in salmon stocks"
    ],
    [
      "https://journals.biologists.com/jeb/article/209/13/2606/16142/The-effect-of-temperature-on-swimming-performance",
      "2006更正：原研究圖說公式",
      "2006 correction to equations in original figure legends"
    ]
  ],
  "description": [
    "用分層鮭魚與鰓示意、兩條獨立曲線及氧帳本，探索水溫、流過鰓的新水、含氧比例與活動需求。海平面淡水參照搭配自訂教具需求，不作真魚存活或棲地安全判定。",
    "Explore water temperature, fresh-water flow past gills, oxygen fraction and activity using a layered fish diagram, separate supply/demand curves and a conserved oxygen ledger. Sea-level freshwater reference plus chosen toy demand; not a survival or habitat-safety model."
  ],
  "keywords": "鮭魚,櫻花鉤吻鮭,溶氧,水溫,鰓,氧供給,耗氧,氧氣收支,salmon,dissolved oxygen,water temperature,gills,oxygen supply,oxygen demand,oxygen budget",
  "date": "2026-10-04",
  "icon": "🐟",
  "limit": [
    "溶氧參照採USGS OFR94-455表4的760 mmHg欄，4–26°C每2°C一點並線性插值；表值本身已四捨五入。固定海平面氣壓與淡水，不能當高山溪流的實測濃度。含氧比例0–100%指相對本表飽和濃度，不是水中氧氣體積比；固定此比例升溫是假想比較，不是加熱過程的除氣速率。新水量F指每分鐘通過教具鰓的水，不是整條河流量或河水流速，也不宣稱真魚停水就不能自行泵水。以固定25%可取比例算供給額度S=0.25FC，並非實際總吸收；需求D=1.5×2^((T−10)/10)×活動倍數 mg/min，1.5基準、每10°C倍增、活動1–3倍與25%全部自訂，不是Lee研究或櫻花鉤吻鮭參數。Lee2003研究成年紅鮭與銀鮭，原文圖說公式有2006更正，本頁未使用那些擬合式，也不能套用其族群最適溫度。實際取用U=min(S,D)，流入氧FC=取用U+流出氧；需求D=取用U+未滿足量；可取額度S=取用U+未用額度。未用額度不是儲存氧。缺額不轉換成死亡、傷害或可撐時間。供給／需求交點只是這組假設，無致死或安全溫度。倍水量比較只改F為2F，濃度、水溫、活動、取用比例均相同；不包含更強水流造成游泳耗能增加。流量0或含氧0時供給0、需求仍正；圖上氧標記與箭頭為示意，長棒／曲線依固定0–14 mg/min尺度。無血液循環、體重、適應、海拔、鹽度、光合、污染或生態判斷。EP271官方單集metadata待核。",
    "The reference is the 760 mmHg column of USGS OFR94-455 Table 4, linearly interpolated at 2°C intervals over 4–26°C. Published values are rounded. Pressure and freshwater salinity are fixed; this is not a measured mountain stream. Oxygen percentage is relative to the table saturation concentration, not a gas volume fraction. Comparing temperatures at fixed percentage does not simulate degassing kinetics. Flow F is fresh water through the toy gill per minute, not river discharge or velocity; active gill pumping is not modeled. Supply allowance S=0.25FC is potential uptake, not actual absorption. Demand D=1.5×2^((T−10)/10)×activity mg/min. Baseline 1.5, doubling per 10°C, activity 1–3× and 25% extraction are chosen, not fitted to Lee or Formosan salmon data. Lee 2003 studied adult sockeye and coho stocks; a 2006 correction fixes figure-legend equations, none of which are used here. Stock-specific optimum temperatures are not imported. Uptake U=min(S,D); incoming FC=U+outgoing, demand=U+shortfall, allowance=U+unused allowance. Unused allowance is not stored oxygen. Shortfalls do not predict death, injury or endurance. Crossings are model equalities, not lethal or safe thresholds. Double-flow comparison changes only F to 2F; concentration, temperature, activity and fraction stay fixed. Extra swimming costs of stronger currents are omitted. Zero flow or zero oxygen gives zero supply while demand stays positive. Oxygen marks and arrows are symbolic; rate bars and curves use a fixed 0–14 mg/min scale. Circulation, body mass, acclimation, altitude, salinity variation, photosynthesis, pollution and ecological judgments are omitted. EP271 official metadata is unverified."
  ],
  "formula": "C=Cref(T)×oxygen%/100; incoming=F×C; S=0.25×incoming; D=1.5×2^((T-10)/10)×activity; U=min(S,D); outgoing=incoming-U; shortfall=D-U; spare=S-U.",
  "formulaText": [
    "C＝表中濃度×含氧比例；流入＝F×C。\n可取額度S＝0.25×流入；需求D＝1.5×2^((T−10)/10)×活動倍數。\n取用U＝min(S,D)；流出＝流入−U。\n未滿足＝D−U；未用額度＝S−U。\nC單位mg/L；F為L/min；其餘速率為mg/min。\n交點S=D不是安全或致死溫度。",
    "C=reference concentration×oxygen fraction; incoming=F×C.\nSupply allowance S=0.25×incoming; D=1.5×2^((T−10)/10)×activity.\nUptake U=min(S,D); outgoing=incoming−U.\nShortfall=D−U; unused allowance=S−U.\nC:mg/L; F:L/min; all oxygen rates:mg/min.\nS=D is not a safe or lethal temperature."
  ],
  "dateModified": "2026-10-08"
};
