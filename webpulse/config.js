window.CONFIG={
  "id": "E06",
  "path": "webpulse",
  "status": "complete",
  "controller": "web.js",
  "extras": [
    "web-model.js",
    "web-view.js",
    "web.css",
    "web.js"
  ],
  "title": [
    "蜘蛛網是振動訊息網",
    "Spider web: a vibration message network"
  ],
  "question": [
    "碰到哪裡？蜘蛛附近能收到什麼？",
    "Where was the tap? What reaches the spider?"
  ],
  "hint": [
    "選一個點敲一下，觀察蜘蛛附近。",
    "Tap a point and watch near the spider."
  ],
  "controls": [
    {
      "key": "tension",
      "label": [
        "網拉多緊？",
        "Web tension"
      ],
      "min": 0,
      "max": 16,
      "step": 0.5,
      "value": 4,
      "unit": "相對值 / relative"
    },
    {
      "key": "damping",
      "label": [
        "振動耗能多快？",
        "Damping"
      ],
      "min": 0,
      "max": 4,
      "step": 0.1,
      "value": 0.4,
      "unit": "相對值 / relative"
    },
    {
      "key": "energy",
      "label": [
        "敲擊能量",
        "Tap energy"
      ],
      "min": 0,
      "max": 100,
      "step": 1,
      "value": 60,
      "unit": "% / %"
    }
  ],
  "defaults": {
    "tension": 4,
    "damping": 0.4,
    "energy": 60,
    "direction": 0,
    "radius": 1
  },
  "action": [
    "敲一下",
    "Tap once"
  ],
  "mission": [
    "只看一個中心訊號，能分辨八個方向嗎？",
    "Can one hub signal distinguish eight directions?"
  ],
  "options": [
    [
      "不能；這個對稱網有歧義",
      "No: this symmetric web is ambiguous"
    ],
    [
      "一定可以",
      "Always"
    ]
  ],
  "answer": 0,
  "reason": [
    "真蜘蛛有多腳感測，真網與波型也比本教具複雜。",
    "Real spiders have multiple leg sensors; real webs and wave types are more complex."
  ],
  "comparisons": [],
  "ep": "261",
  "episodeTitle": "超級建築師：蜘蛛結網的秘密工程與科學奇蹟",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC5046944/",
    "Mortimer et al.2016 · Tuning the instrument · JRS Interface13:20160341"
  ],
  "extraSources": [
    [
      "https://research-information.bris.ac.uk/en/publications/decoding-the-locational-information-in-the-orb-web-vibrations-of-/",
      "Mortimer et al.2019 · Decoding the locational information · institutional abstract"
    ]
  ],
  "limit": [
    "這是未校準、刻意慢放的離面小振動網：8方向、3圈可動節點與中心共25個等質量，8個外圈固定錨、56條等效彈簧；徑向剛度T/長度，環向0.2T/長度，均為自訂相對值。每次單一速度脈衝有相同設定能量；非固定形變施力，不偷改輸入能量。阻尼為節點線性速度阻力；無阻尼時振動不因幅度分散就耗能。固定1/120教具時間步、隱式中點。節點能量是動能加相鄰彈簧分攤，不超過整網初始能量；異常全網超限會縮放q/v並另記數值保護，不冒充阻尼耗能。相對時間、張力、位移、能量點不是秒、毫秒、N、mm或J；曲線門檻0.001教具位移的首次超越，不是精確波前。零張力代表本線性教具無傳遞，不是實際鬆網的大形變運動。只算離面橫向振動，省略縱波、真絲材料差異、蜘蛛質量與神經處理、氣動非線性、破網及獵物持續掙扎。中心曲線對八個方向完全對稱；八個近蜘蛛接收點提供多點觀察，猜題為遠圈方向，不自動判讀或保證可辨。挑戰隱藏外圈反應，揭開不重算；練習換敲點即結束挑戰。真網波速過快，不能說蜘蛛靠教具延遲定位，亦不能靠幅度識別獵物種類。張力／阻尼／能量變動會清除舊訊號，等待新敲擊；切語言、探索／對照與圖層保留。EP261單集metadata尚未確認；延伸EP85已核對官方網址、封面與8:18時長，Logo不是單集封面。",
    "An uncalibrated, deliberately slowed small out-of-plane vibration network: 25 equal movable masses (hub and three rings in eight directions), eight fixed anchors, 56 effective springs. Radial k=T/length; ring k=0.2T/length, invented relative values. A single initial velocity impulse injects equal selected energy, not equal imposed displacement. Nodal linear velocity damping dissipates energy; spreading alone does not. Fixed 1/120 toy-time steps use implicit midpoint. Local energy is kinetic plus shared adjacent spring energy, bounded by initial total energy; an abnormal global overrun scales q/v and records numerical protection separately. Relative time, tension, displacement and energy points are not seconds, milliseconds, N, mm or J. Detection is the first crossing of a fixed0.001 displacement threshold, not an exact wavefront. Zero tension means no coupling in this linear toy, not a real slack web undergoing large motion. Longitudinal waves, real silk differences, spider mass/neural processing, nonlinear aerodynamic drag, failure and continuing prey motion are omitted. The hub is rotationally ambiguous; eight nearby channels give multipoint observations. Challenges guess far-ring direction, without automatic decoding or guaranteed identifiability. Outer reactions are hidden until reveal, which preserves the signals. Choosing a practice site ends the challenge. Real web waves are too fast for the toy delay to represent spider localization; amplitude alone cannot identify prey type. Parameter changes clear signals and await a new tap; language, mode and layers preserve them. EP261/85 metadata is unverified; the logo is not episode artwork."
  ],
  "formula": "Relative, invented units; transverse small-amplitude network, not calibrated biology.\n33 nodes: 25 free, 8 fixed. Mass=1. Radius rings=0.25,0.5,0.75,1.\n32 radial edges k=T/L; 24 ring edges k=0.2T/L. K=anchored graph Laplacian.\nMq\"+gamma Mq'+Kq=0. M=I. Initial q=0; v_source=sqrt(2E0).\nE0=0.005*(energy/100). Display energy points=100000*E.\nh=1/120 toy time. A=M+hC/2+h²K/4.\nA v_next=(M-hC/2-h²K/4)v-hKq; q_next=q+h(v+v_next)/2.\nCholesky solve. E=0.5v^TMv+0.5q^TKq.\nLost += h*gamma*||v_mid||²; Normal E+Lost=E0 (roundoff); residual=E+Lost+Protection-E0. A cap activation requires checking numerical drift.\nLocal energy: each free-free edge split equally; free-fixed potential all assigned to free node.\nIf total E>E0*(1+1e-9): scale q/v by sqrt(E0/E); log excess separately.\nDetection first |q_receiver|>=0.001, fixed step, no interpolation; 6 toy-time observation window.\nSymmetric hub cannot resolve source direction. Eight channels are observations, no hidden-ID classifier.",
  "keywords": "蜘蛛網,振動,張力,阻尼,質點彈簧,能量,訊息,感測,spider web,vibration,tension,damping,mass spring network,energy,sensing,transverse waves",
  "description": [
    "敲不同蜘蛛網節點，調張力與阻尼，觀察中心與八個近蜘蛛接收點的振動、能量及猜方向；雙語空間質點彈簧教具。",
    "Tap different web nodes, adjust tension and damping, and inspect hub/eight-channel vibrations, energy and direction guesses in a bilingual spatial mass-spring toy."
  ],
  "date": "2026-10-07",
  "icon": "🕸️",
  "formulaZh": "自訂相對單位的離面小振動網，不是已校準的真蜘蛛模型。\n33節點：25可動、8固定；質量=1；四圈半徑0.25、0.5、0.75、1。\n32條徑向邊剛度k=T/長度；24條環向邊k=0.2T/長度。\nK為固定錨的網路剛度矩陣；M=I；Mq″+γMq′+Kq=0。\n初始位移q=0；敲點速度v=√(2E₀)。E₀=0.005×能量百分比/100。\n顯示能量點=100000×相對能量；各卡約數不強求顯示合計精確相等。\n固定步h=1/120教具時間；A=M+hC/2+h²K/4。\nA v下一步=(M−hC/2−h²K/4)v−hKq；q下一步=q+h(v+v下一步)/2。\nCholesky求解；E=0.5vᵀMv+0.5qᵀKq。\n阻尼耗能累計=hγ||v中點||²；正常未取整能量帳E+耗散≈E₀。\n每條可動—可動彈簧的位能均分兩節點；可動—固定的全給可動點。\n若全網E>E₀(1+10⁻⁹)，q/v按√(E₀/E)縮放，超額另記數值保護。\n剩餘+耗散+保護−初始為數值殘差；保護啟動仍需追查，不能假裝物理耗能。\n偵測為|接收位移|首次≥0.001；固定步取樣，未插值，不是精確波前。\n觀察上限6教具時間；一步0.25=30數值步。零能量不前進；完成後重敲0.25。\n對稱中心無法分辨敲點方向；八通道供觀察，不以隱藏ID自動分類。",
  "relatedPodcast": {
    "verified": true,
    "title": "〈公開｜聲音小精靈的接力賽：推進擠擠的振動遊戲！｜EP.85〉",
    "url": "https://podcasts.apple.com/tw/podcast/%E5%85%AC%E9%96%8B-%E8%81%B2%E9%9F%B3%E5%B0%8F%E7%B2%BE%E9%9D%88%E7%9A%84%E6%8E%A5%E5%8A%9B%E8%B3%BD-%E6%8E%A8%E9%80%B2%E6%93%A0%E6%93%A0%E7%9A%84%E6%8C%AF%E5%8B%95%E9%81%8A%E6%88%B2-ep-85/id1812447277?i=1000776974113",
    "duration": "8:18",
    "durationIso": "PT8M18S",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/aa/ad/a4/aaada4a6-9de2-a7ea-e8f4-c37328ebfb84/mza_18414544249769363074.jpg/960x960bb.webp",
    "coverFile": "e06-ep85-cover.webp",
    "access": "public",
    "checked": "2026-10-10",
    "evidence": "native-review-webpulse-official85-20261010.json"
  },
  "dateModified": "2026-10-10"
};
