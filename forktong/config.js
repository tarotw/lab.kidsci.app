window.CONFIG={
  "id": "C06",
  "path": "forktong",
  "status": "complete",
  "title": [
    "蛇的分叉舌：左右聞聞看",
    "Forked tongue: left & right"
  ],
  "question": [
    "左邊氣味多一點，示例蛇會怎麼走？",
    "More odor on the left: which way?"
  ],
  "hint": [
    "先改氣味上下位置，看左／右讀數；按「看搜尋」觀察路徑。再把風向轉180°，或把取樣間距調成0。",
    "Move odor up/down; compare left/right. Watch search, then try opposite wind or zero spacing."
  ],
  "controls": [
    {
      "key": "sy",
      "label": [
        "氣味上下位置",
        "Odor vertical position"
      ],
      "min": 1,
      "max": 5,
      "step": 0.25,
      "value": 3.75,
      "unit": "cm"
    },
    {
      "key": "wind",
      "label": [
        "風吹往的方向",
        "Wind travels toward"
      ],
      "min": 0,
      "max": 360,
      "step": 15,
      "value": 180,
      "unit": "°"
    },
    {
      "key": "sep",
      "label": [
        "左右取樣間距",
        "Left–right sample spacing"
      ],
      "min": 0,
      "max": 2,
      "step": 0.25,
      "value": 1,
      "unit": "cm"
    },
    {
      "key": "sx",
      "label": [
        "氣味左右位置",
        "Odor horizontal position"
      ],
      "min": 3.5,
      "max": 8.5,
      "step": 0.5,
      "value": 6,
      "unit": "cm"
    },
    {
      "key": "diffuse",
      "label": [
        "氣味散開程度",
        "Odor spreading"
      ],
      "min": 0.05,
      "max": 0.5,
      "step": 0.05,
      "value": 0.15,
      "unit": "cm²/s"
    }
  ],
  "action": [
    "看搜尋",
    "Watch search"
  ],
  "mission": [
    "左右讀數一樣時，有理由只靠這一對讀數轉左嗎？",
    "When both readings are equal, does this pair alone justify a left turn?"
  ],
  "options": [
    [
      "沒有；此例維持原方向",
      "No: this model keeps its heading"
    ],
    [
      "有；一定要轉左",
      "Yes: always turn left"
    ]
  ],
  "answer": 0,
  "reason": [
    "分叉舌能在兩個位置採集化學線索，再由犁鼻系統處理。本頁用數學差值教局部比較；研究對真蛇是否用左右邊界偵測有不同結果，不能把這條自訂規則當成所有蛇的神經反應。",
    "Forked tongues collect chemical cues at two locations for vomeronasal processing. This lab teaches local comparison with a mathematical difference. Studies differ on edge detection in real snakes; this custom rule is not a universal neural mechanism."
  ],
  "comparisons": [
    {
      "label": [
        "來源上偏／下偏",
        "Source above / below"
      ],
      "key": "sy",
      "a": 3.75,
      "b": 2.25,
      "base": {}
    },
    {
      "label": [
        "風吹左／風吹右",
        "Wind toward left / right"
      ],
      "key": "wind",
      "a": 180,
      "b": 0,
      "base": {
        "sy": 3
      }
    },
    {
      "label": [
        "間距0／1公分",
        "Spacing 0 / 1 centimetre"
      ],
      "key": "sep",
      "a": 0,
      "b": 1,
      "base": {}
    }
  ],
  "limit": [
    "10×6 cm是虛擬平面，非真蛇身體尺度；舌、頭與粒子放大。示例風速u固定1 cm/s，σ₀=0.25 cm，K=0.05–0.50 cm²/s，氣味以相對0–100單位表示，沒有校準質量濃度。風向角0°往右、90°往上；不是氣象來向。將位置轉成順風距離d與橫風距離z，d<0採0（忽略逆風擴散），d≥0時σ²=σ₀²+2Kd/u，C=100σ₀/σ exp(-z²/(2σ²))。這是穩態二維輸送／橫向擴散的有限寬高斯邊界示例；不是三維地面煙囪公式、真實湍流或地面費洛蒙軌跡。任一順風切面∫C dz固定，不任意新增氣味。初始頭中心(2,3)cm、朝右；舌取樣中心在頭前0.4 cm、左右±sep/2，L是蛇自身左側。取樣差s=(L−R)/(L+R)，總和小於0.02相對單位就停，不能把場圖或來源座標交給控制器。每步先轉θ←θ+0.2s弧度，再前進0.08 cm；s接近0時不任意轉向。最多60步，任一樣本≥90停止並只稱「高濃度線索」，不稱找到獵物；越出模型範圍或失去線索也停。動畫最多2秒只是播放步序，沒有預測真蛇速度或時間。兩組對照可在不同步提前停，各自標示步數與原因；不可把不同終點當同時行為。沒有記憶、掃描、風向感測或真實犁鼻器神經解碼；無線索時不偷看來源位置導引。Canvas色場與48個示意粒子只顯示穩態氣味帶，點數不是分子或質量；粒子路線不是湍流求解。 Schwenk1994提出化學邊界偵測假說；Parker等2008對Crotalus oreganus的單側犁鼻神經處理未改變七項追蹤參數，該實驗未支持此假說。這不否定化學感受或所有物種的兩點採集，但不能把本站氣相規則說成已證實的真蛇導航。數值實際在d<−10⁻¹²cm採0，容差內取d=0；這是浮點邊界容差。差值分數|s|<10⁻¹²時不轉，不要求顯示取整後完全相等。畫面只列已完成整數步；逐步一次一個搜尋步，每步0.08cm為教具路程。提前停同步時計與步序，保存卡永遠保留各自完整結局。圖格每cm橫38、縱30SVG單位，頭部與風向按同一比例轉換；蛇形放大、箭頭長度不是風速或生物比例。",
    "The virtual 10×6 cm plane is not a real snake body scale; tongue, head and particles are enlarged. Fixed illustrative wind u=1 cm/s, σ₀=0.25 cm, K=0.05–0.50 cm²/s, odor in relative units 0–100, not calibrated mass concentration. Wind 0° travels right, 90° upward, unlike meteorological wind-from angles. Rotate positions into downwind d and crosswind z. C=0 for d<0 (upwind diffusion omitted); otherwise σ²=σ₀²+2Kd/u and C=100σ₀/σ exp(-z²/(2σ²)). This is a steady 2D advection/crosswind-diffusion example with a finite-width Gaussian boundary, not a 3D ground-stack formula, turbulent odor field or substrate pheromone trail. Each downwind cross-section has the same integrated concentration. Initial head centre (2,3) cm faces right; samples are 0.4 cm ahead and ±sep/2 sideways. L means the snake’s own left. Local steering s=(L−R)/(L+R); total below 0.02 relative units stops the controller. The controller never receives the source coordinates or field image. Each step first turns by 0.2s radians, then advances 0.08 cm; a near-zero difference never chooses an arbitrary side. At most 60 steps; any reading ≥90 stops as a high-concentration cue, without claiming prey was found. Leaving model bounds or losing cues also stops. Up-to-two-second animation plays step order, not real snake speed or time. Comparisons may stop at different steps, explicitly labeled; different endpoints are not simultaneous behavior. Memory, scanning, wind sensing and real vomeronasal neural decoding are omitted. No cue means no hidden source-guidance. Canvas colors and 48 illustrative particles show a steady odor band; counts are not molecules or mass, and paths do not solve turbulence. Schwenk1994 proposed chemical edge detection. Parker et al.2008 found no change in seven trailing measures after unilateral vomeronasal denervation in Crotalus oreganus, and that experiment did not support the hypothesis. This does not reject chemoreception or bilateral collection across all species, but the airborne toy rule is not established snake navigation. Numerically d<−1e-12cm gives0; inside tolerance d is clamped to0. Turning is suppressed for|s|<1e-12, not only rounded-equal samples. Display shows completed integer steps; Step advances one search move,0.08cm of toy path. Early stops synchronize playback clock/step order; saved cards retain their full endpoints. Plot scales38 horizontal/30 vertical SVG units per cm also transform head and wind orientation. Snake shape is enlarged and arrow length is not wind speed or anatomical scale."
  ],
  "formula": "u=1 cm/s; sigma0=0.25 cm; wind angle is direction of travel\nd=(x−sx)cos(wind)+(y−sy)sin(wind)\nz=−(x−sx)sin(wind)+(y−sy)cos(wind)\nIf d<0: C=0 (upwind diffusion omitted)\nIf d>=0: sigma²=sigma0²+2K*d/u\nC=100*sigma0/sigma*exp(−z²/(2sigma²)) relative units\nIntegral across z = 100*sigma0*sqrt(2*pi), independent of d\nL/R at nose±sep/2; nose=head+0.4cm forward\ns=(L−R)/(L+R); turn=0.2*s radians; step=0.08cm\nEqual readings => turn=0; no random left/right\nStop: total<0.02, any reading>=90, bounds reached, or 60 steps\nController uses samples only; no source bearing\nAnimation<=2s is step playback, not physical time\nFloating upwind boundary:d<−1e-12cm=>0; otherwise max(d,0).\nIf|s|<1e-12, suppress turning; at any stop turn=0.\nPlayback index=floor(clamp(phase,0,1)*60+1e-9), clamped to each last step.\nStep advances one move; stored comparisons always show each full endpoint.\nHead/wind display transforms horizontal38/vertical30SVG units per cm.",
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/17744784/",
    "Schwenk (1994) · Why snakes have forked tongues"
  ],
  "extraSources": [
    [
      "https://personalpages.manchester.ac.uk/staff/paul.connolly/teaching/practicals/gaussian_plume_modelling.html",
      "University of Manchester · Advection, diffusion and Gaussian plumes"
    ],
    [
      "https://pubmed.ncbi.nlm.nih.gov/18298279/",
      "Parker, Young & Kardong (2008) · Rattlesnake experimental test did not support prey-trail edge detection"
    ]
  ],
  "ep": "189",
  "episodeTitle": "〈EP.189｜鋼鐵防護衣！揭開爬行動物的身體奧祕〉",
  "date": "2026-10-06",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/ep-189-%E9%8B%BC%E9%90%B5%E9%98%B2%E8%AD%B7%E8%A1%A3-%E6%8F%AD%E9%96%8B%E7%88%AC%E8%A1%8C%E5%8B%95%E7%89%A9%E7%9A%84%E8%BA%AB%E9%AB%94%E5%A5%A7%E7%A5%95/id1812447277?i=1000709422171&uo=4",
    "episodeId": "1000709422171",
    "source": "https://open.firstory.fm/story/cmdpx4cuu00dw01xl51uhg5pn",
    "duration": "19 分 10 秒",
    "durationEn": "19 min 10 sec",
    "durationIso": "PT19M10S",
    "subscribersOnly": false,
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/24/04/bb/2404bbd5-6146-0341-2059-1dbab3643274/mza_4007150628401793329.jpg/500x500bb.webp",
    "coverAvailable": true,
    "verifiedOn": "2026-10-06",
    "coverStatus": "Official Apple page artwork loaded and inspected through Computer Use; original WebP retained, JPEG format conversion only. Initial 1x1 placeholder excluded.",
    "coverVerifiedOn": "2026-10-10"
  },
  "icon": "🐍",
  "keywords": "蛇,分叉舌,犁鼻器,化學感受,左右取樣,氣味羽流,高斯濃度,邊界偵測假說,輸送擴散,snake,forked tongue,vomeronasal organ,chemoreception,bilateral sampling,Gaussian plume,edge detection hypothesis,advection diffusion,科學好好聽,science for kids",
  "description": [
    "移動氣味源、轉動風向與調整舌尖取樣間距，用左右濃度差觀察自訂搜尋路徑；沒有線索就停止，不保證找到獵物。",
    "Move an odor source, turn wind and adjust sample spacing. Compare concentrations and follow an illustrative search; lost cues stop it without guaranteed prey localization."
  ],
  "defaults": {
    "sy": 3.75,
    "wind": 180,
    "sep": 1,
    "sx": 6,
    "diffuse": 0.15
  },
  "formulaZh": "示例風速u＝1cm/s；初始帶寬σ₀＝0.25cm；風向是吹往方向\nd＝(x−sx)cos風向＋(y−sy)sin風向；z＝−(x−sx)sin風向＋(y−sy)cos風向\nd<−10⁻¹²cm：C＝0，省略逆風擴散；否則d取max(d,0)\nσ²＝σ₀²＋2Kd/u；C＝100σ₀/σ×exp(−z²/(2σ²))，相對值\n橫風積分∫C dz＝100σ₀√(2π)，不因散開新增氣味\n初始頭(2,3)cm朝右；取樣中心在前0.4cm，左右間距sep\n差值s＝(L−R)/(L＋R)，小於0.02總訊號停；|s|<10⁻¹²不轉\n每次先轉0.2s弧度，再走0.08cm；L為蛇自己左側\n停止優先序：線索不足、高濃度≥90、60步預算、模型邊界\n停止樣本轉向0；高濃度不等於找到或抓到獵物\n只用當地左右數值，不把來源座標交給轉向器\n2秒只播放最多60步，非真蛇時間；顯示已完成整數步\n逐步一次1步；提前停同步時計，保存卡保留各自完整結局\n座標橫38／縱30SVG單位/cm，頭部和風箭頭同樣換算",
  "dateModified": "2026-10-10"
};
