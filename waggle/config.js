window.CONFIG={
  "id": "F12",
  "path": "waggle",
  "status": "complete",
  "controller": "waggle.js",
  "extras": [
    "waggle-model.js",
    "waggle.css",
    "waggle.js"
  ],
  "title": [
    "蜜蜂的搖擺舞解碼器",
    "Decode the honeybee waggle dance"
  ],
  "question": [
    "舞角和搖多久，能告訴同伴花在哪裡？",
    "How do angle and waggle time point to flowers?"
  ],
  "hint": [
    "先播放舞蹈，再試著找花。",
    "Play the dance, then try locating the flower."
  ],
  "defaults": {
    "flower": 45,
    "sun": 90,
    "distance": 600,
    "calibration": 0
  },
  "controls": [
    {
      "key": "flower",
      "label": [
        "花的方位（北為0°）",
        "Flower heading (north = 0°)"
      ],
      "min": -180,
      "max": 180,
      "step": 1,
      "value": 45,
      "units": [
        "度",
        "degrees"
      ],
      "unit": "度 / degrees"
    },
    {
      "key": "sun",
      "label": [
        "太陽方位（北為0°）",
        "Sun heading (north = 0°)"
      ],
      "min": 0,
      "max": 359,
      "step": 1,
      "value": 90,
      "units": [
        "度",
        "degrees"
      ],
      "unit": "度 / degrees"
    },
    {
      "key": "distance",
      "label": [
        "花離蜂巢的示意距離",
        "Toy flower distance from hive"
      ],
      "min": 200,
      "max": 1000,
      "step": 10,
      "value": 600,
      "units": [
        "公尺",
        "m"
      ],
      "unit": "公尺 / m"
    }
  ],
  "action": [
    "前進一格",
    "Next frame"
  ],
  "mission": [
    "花不動，太陽轉了，舞角會怎樣？",
    "The flower stays; the sun turns. What happens to the dance angle?"
  ],
  "options": [
    [
      "舞角改變，花仍在原位",
      "The angle changes; the flower stays"
    ],
    [
      "花必須跟著轉，舞角不變",
      "The flower turns; the angle stays"
    ]
  ],
  "answer": 0,
  "reason": [
    "舞角說的是花相對於太陽的方向。共同參照改了，角度碼跟著變；不是花搬家。",
    "The dance encodes the flower direction relative to the sun. A changed reference changes the code, not the flower location."
  ],
  "comparisons": [],
  "ep": "219",
  "episodeTitle": "〈公開｜EP.219｜動物的神奇第六感：誰是導航王與超強記憶大師？〉",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/us/podcast/%E5%85%AC%E9%96%8B-ep-219-%E5%8B%95%E7%89%A9%E7%9A%84%E7%A5%9E%E5%A5%87%E7%AC%AC%E5%85%AD%E6%84%9F-%E8%AA%B0%E6%98%AF%E5%B0%8E%E8%88%AA%E7%8E%8B%E8%88%87%E8%B6%85%E5%BC%B7%E8%A8%98%E6%86%B6%E5%A4%A7%E5%B8%AB/id1812447277?i=1000759124493",
    "episodeId": "1000759124493",
    "duration": "約14分鐘",
    "durationEn": "About 14 minutes",
    "subscribersOnly": false,
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/67/9b/9b/679b9b5a-9c94-4a43-f0e3-29856a0721bf/mza_14454045675102048113.jpg/1200x1200ECA.PESS01-60.jpg?imgShow=Podcasts211/v4/41/3f/f0/413ff073-a7c5-b6a0-8286-3f3dbf061111/mza_1220969070254895353.jpeg",
    "coverAvailable": true,
    "verifiedOn": "2026-10-07",
    "coverStatus": "Official Apple US episode metadata/artwork retrieved200 and1200x1200pixels inspected. Title labels public; no actual audio or Taiwan storefront entitlement proof. Exact duration seconds unknown."
  },
  "source": [
    "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0093495",
    "Couvillon等2014：搖擺舞的解碼方法與校準限制",
    "Couvillon et al. 2014: dance decoding and calibration limits"
  ],
  "extraSources": [],
  "limit": [
    "限定垂直蜂巢上的西方蜜蜂Apis mellifera示意，非所有蜂種／巢面。本頁花位與太陽是自訂假想地圖，不是真臺灣座標或即時天文。地圖北上、東右；蜂巢圖的「上」代表太陽方向，兩圖參照不同，不能把蜂巢上方當地圖北。搖擺段方向相對太陽，時長用自訂示例表A/B轉距離：t=0.3+k·d秒，k=0.0008／0.0016秒/公尺，未擬合真族群資料。不是全蜜蜂固定秒公里換算。返程0.8秒、8Hz擺動、路徑、身體與花大小都示意；返程不編碼同一距離，週期不是飛行時間。播放約4倍慢放；讀數為示例原時長。改條件保留週期位置但暫停，顯示秒數依新週期換算，不是累計歷史時間。切語言／模式／看花／揭開／核對保留參數、猜點、週期與猜題；明確重設回預設，完成後重播只重算週期。猜點可點地圖、拖把手或按方向；先嘗試移100公尺，邊界限制在1000m圓內。花設定最少200m；猜在蜂巢無方向。幾何誤差與100m接近標準為教具，不是真招募準確率；真舞程有變異，還有氣味／地標等線索，不能用本頁精確點位聲稱真動物每次準確抵達。 顯示搖擺／週期總時長至0.001秒，配合10公尺設定格；進行中的時鐘仍圓整，小量和未完成百分比用上下界。核對誤差接近但超過100公尺時明示超過，不以圓整值判斷。花位方向鍵先嘗試移100公尺，再吸附整數度／10公尺並限制200–1000公尺；不是實際每次恰移100公尺。猜點方向鍵在圓形邊界內最多移100公尺。",
    "Example for Apis mellifera on a vertical comb, not all bees or nest surfaces. Flower and sun settings define a fictional map, not Taiwanese coordinates or live astronomy. Map north is up and east is right; UP on the comb represents the sun, not map north. Waggle direction is relative to the sun. Toy lookup tables A/B use t = 0.3 + k d seconds, k = 0.0008/0.0016 seconds per meter; these are not fitted biological calibrations or universal seconds-to-kilometers rules. The 0.8-second return, 8Hz wobble, paths and marker sizes are illustrative; return time does not encode the same distance, and a cycle is not flight time. Playback is about 4 times slower; readouts show original toy duration. Setting changes pause and retain cycle position; displayed seconds follow the new cycle, not accumulated history. Language/view/visibility/check changes retain settings, guess, cycle and quiz. Explicit reset restores defaults; replay after completion restarts only the cycle. Guess by clicking, dragging or arrows (attempting100m per key), within a 1000m circle. Flower distance starts at 200m; a hive-origin guess has no bearing. Geometric error and the 100m close threshold are teaching aids, not recruitment accuracy. Real dances vary and recruits also use cues such as odor and landmarks; exact toy points do not guarantee exact real arrival. Waggle/cycle totals display0.001s precision matching the10m setting grid; the live clock remains rounded, with bounds for small values and unfinished percentages. Error just above100m is explicitly marked above the threshold; the close test uses the unrounded error. Flower arrows attempt100m, then snap to integer-degree/10m steps within200–1000m; actual displacement need not be exactly100m. Guess arrows move up to100m within the circular boundary."
  ],
  "formulaText": [
    "地圖x東正、y北正；方位b自北順時針。花x=d·sin b、y=d·cos b。太陽方位s；舞角θ=wrap到[−180°,180°)(b−s)。解碼方位wrap到[0°,360°)(s+θ)，同一180°與−180°指向南。兩張自訂表t=0.3+k·d秒；A k=0.0008、B k=0.0016秒/公尺；反解d=(t−0.3)/k。每週期有兩段搖擺與交替返程：cycle=2(t+0.8)秒。搖擺沿上方參照旋轉θ；x擺動4 sin(2π·8·time) sin(πu)、y=60−120u；返程x=±170u(1−u)、y=−60+120u，均為圖的示意座標。位置旋轉矩陣R(θ)。progress為0..1週期位置，每次前進下一個1/12位置；自動約4倍慢放。猜點(xg,yg)誤差hypot(xg−x,yg−y)公尺；(0,0)沒有定義方位。地圖1000m固定尺度，不因距離改畫面比例。",
    "Map x is east and y is north; bearing b is clockwise from north. Flower x = d sin(b), y = d cos(b). Sun bearing s; dance angle theta = wrap[-180,180)(b-s). Decode bearing = wrap[0,360)(s+theta); +180 and -180 both point south. Two toy tables: t = 0.3 + k d seconds; A k=0.0008, B k=0.0016 seconds/meter; inverse d=(t-0.3)/k. Each cycle has two waggle runs and alternating returns: cycle=2(t+0.8) seconds. Drawing waggle: x=4 sin(2 pi 8 time) sin(pi u), y=60-120u; return x=+/-170u(1-u), y=-60+120u, all illustrative drawing coordinates. Rotate positions by R(theta). Progress is cycle position 0..1; Step goes to the next 1/12 position. Auto is about 4 times slower. Guess error=hypot(xg-x,yg-y) meters; (0,0) has no bearing. Fixed 1000m map scale; distance changes never rescale the diagram."
  ],
  "description": [
    "改花的位置與太陽方向，播放蜂巢搖擺舞，再拖猜測的花回地圖；繁中英文互動教具，以自訂時長對照表理解共同參照，不是真蜜蜂精準導航預報。",
    "Set a flower and sun direction, watch a comb dance, then drag your guessed flower onto the map. A bilingual teaching tool with toy duration tables and shared references, not an exact honeybee navigation forecast."
  ],
  "keywords": "蜜蜂,西方蜜蜂,搖擺舞,蜂巢,太陽,共同參照,方向,角度,距離,解碼,honeybee,Apis mellifera,waggle dance,vertical comb,sun,reference frame,bearing,angle,distance,decoding",
  "date": "2026-10-04",
  "icon": "🐝",
  "formula": "地圖x東正、y北正；方位b自北順時針。花x=d·sin b、y=d·cos b。太陽方位s；舞角θ=wrap到[−180°,180°)(b−s)。解碼方位wrap到[0°,360°)(s+θ)，同一180°與−180°指向南。兩張自訂表t=0.3+k·d秒；A k=0.0008、B k=0.0016秒/公尺；反解d=(t−0.3)/k。每週期有兩段搖擺與交替返程：cycle=2(t+0.8)秒。搖擺沿上方參照旋轉θ；x擺動4 sin(2π·8·time) sin(πu)、y=60−120u；返程x=±170u(1−u)、y=−60+120u，均為圖的示意座標。位置旋轉矩陣R(θ)。progress為0..1週期位置，每次前進下一個1/12位置；自動約4倍慢放。猜點(xg,yg)誤差hypot(xg−x,yg−y)公尺；(0,0)沒有定義方位。地圖1000m固定尺度，不因距離改畫面比例。\nMap x is east and y is north; bearing b is clockwise from north. Flower x = d sin(b), y = d cos(b). Sun bearing s; dance angle theta = wrap[-180,180)(b-s). Decode bearing = wrap[0,360)(s+theta); +180 and -180 both point south. Two toy tables: t = 0.3 + k d seconds; A k=0.0008, B k=0.0016 seconds/meter; inverse d=(t-0.3)/k. Each cycle has two waggle runs and alternating returns: cycle=2(t+0.8) seconds. Drawing waggle: x=4 sin(2 pi 8 time) sin(pi u), y=60-120u; return x=+/-170u(1-u), y=-60+120u, all illustrative drawing coordinates. Rotate positions by R(theta). Progress is cycle position 0..1; Step goes to the next 1/12 position. Auto is about 4 times slower. Guess error=hypot(xg-x,yg-y) meters; (0,0) has no bearing. Fixed 1000m map scale; distance changes never rescale the diagram.",
  "dateModified": "2026-10-11"
};
