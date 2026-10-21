window.CONFIG={
  "id": "C09",
  "path": "kiwitip",
  "status": "complete",
  "title": [
    "奇異鳥：喙尖探探看",
    "Kiwi: probe with the bill tip"
  ],
  "question": [
    "看不到地下，還能找到線索嗎？",
    "Can a hidden source still give a clue?"
  ],
  "hint": [
    "先移動喙尖，看三點震動怎麼變，再揭開位置核對。關閉震動或嗅覺，比較兩條線索。",
    "Move the tip and compare three vibration readings; reveal to check. Switch touch and smell separately."
  ],
  "controls": [
    {
      "key": "worm",
      "label": [
        "移動蟲的示例位置",
        "Move the illustrative worm"
      ],
      "min": 0,
      "max": 2,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "位置A",
          "Position A"
        ],
        [
          "位置B",
          "Position B"
        ],
        [
          "位置C",
          "Position C"
        ]
      ]
    },
    {
      "key": "x",
      "label": [
        "喙尖左右位置",
        "Tip horizontal position"
      ],
      "min": 0.5,
      "max": 9.5,
      "step": 0.25,
      "value": 2.5,
      "unit": "cm"
    },
    {
      "key": "y",
      "label": [
        "喙尖入土深度",
        "Tip depth"
      ],
      "min": 0.5,
      "max": 5.5,
      "step": 0.25,
      "value": 2.5,
      "unit": "cm"
    },
    {
      "key": "atten",
      "label": [
        "土壤震動衰減",
        "Soil vibration attenuation"
      ],
      "min": 0.2,
      "max": 1.2,
      "step": 0.2,
      "value": 0.4,
      "unit": "1/cm"
    },
    {
      "key": "touch",
      "label": [
        "震動通道",
        "Vibration channel"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "關閉",
          "Off"
        ],
        [
          "開啟",
          "On"
        ]
      ]
    },
    {
      "key": "smell",
      "label": [
        "嗅覺通道",
        "Smell channel"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "關閉",
          "Off"
        ],
        [
          "開啟",
          "On"
        ]
      ]
    },
    {
      "key": "reveal",
      "label": [
        "核對位置",
        "Check position"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 0,
      "unit": "",
      "options": [
        [
          "藏起來",
          "Hide"
        ],
        [
          "揭開核對",
          "Reveal"
        ]
      ]
    }
  ],
  "action": [
    "觀察取樣",
    "Inspect samples"
  ],
  "mission": [
    "兩條線索都關閉時，還能由讀數精準找蟲嗎？",
    "With both channels off, can readings locate the worm precisely?"
  ],
  "options": [
    [
      "不能；需要線索或揭開核對",
      "No: a cue or an explicit reveal is needed"
    ],
    [
      "能；喙尖會自動指向蟲",
      "Yes: the tip automatically points to it"
    ]
  ],
  "answer": 0,
  "reason": [
    "奇異鳥喙尖的感覺小窩含機械感受器，可取得土壤傳來的振動線索；北島褐奇異鳥覓食也使用嗅覺。這兩種感官不等同看穿地面，單點讀數也不唯一決定位置。",
    "Bill-tip sensory pits contain mechanoreceptors that provide substrate-vibration cues. North Island brown kiwi also use smell when foraging. Neither sense sees through soil, and one scalar reading does not uniquely determine a source."
  ],
  "comparisons": [
    {
      "label": [
        "弱／強震動衰減",
        "Weak / strong attenuation"
      ],
      "key": "atten",
      "a": 0.2,
      "b": 1.2,
      "base": {}
    },
    {
      "label": [
        "震動開／關",
        "Touch on / off"
      ],
      "key": "touch",
      "a": 1,
      "b": 0,
      "base": {
        "smell": 0
      }
    },
    {
      "label": [
        "嗅覺開／關",
        "Smell on / off"
      ],
      "key": "smell",
      "a": 1,
      "b": 0,
      "base": {
        "touch": 0
      }
    }
  ],
  "limit": [
    "這是二維均勻土壤的自訂徑向振幅教具，不是土壤彈性波、受器神經或真實定位演算法。蟲的三個固定示例座標A=(3,4)、B=(6,3.5)、C=(8,2) cm，移動位置不是隨機盲測。喙尖三個示例取樣點為(x−0.2,y)、(x,y)、(x+0.2,y)，不是解剖受器間距。振動峰值A(d)=100 exp(−αd)/(1+d/1cm)，相對單位；α為0.2–1.2 cm⁻¹，每增加1cm的吸收因子為exp(−α)，另有自訂幾何衰減。固定30Hz正弦、101個1ms取樣、三點同相，是100ms訊號預覽，不解傳播速度或相位。每點另加固定種子42的均勻噪音±0.5相對單位，非量測噪音。關閉震動通道使其讀數與波形全部0，來源仍存在。示例感測距離解A(d)=1，閾值自訂且不是奇異鳥靈敏度；只用來比較衰減，沒有把閾值交給自動搜尋器。嗅覺獨立取喙尖中心的O(d)=100/[1+(d/4cm)²]，相對單位、不受震動衰減滑桿影響；它不是氣味輸運方程，不含土壤濕度或嗅覺生理。兩通道分別開關，不將不同量綱相加或混成勝率。畫面三條震動曲線固定±101相對刻度，嗅覺柱固定0–100，不以自動縮放誇大微弱訊號。孩子自己移動喙尖、比較局部訊號，再明確揭開核對喙尖中心到蟲中心的幾何距離；這不是感官估計的定位誤差或捕捉成功率。藏起來時不顯示蟲輪廓、距離、場線、指向箭頭或自動精準定位，揭開只改可見性；兩通道都關閉仍可由人明確揭開看答案，但不是由感官讀數定位。手機用相鄰滑桿與數值輸入，桌機可拖喙尖；觸控保留原生垂直捲頁。 三個基準振幅A是未加噪音的模型值，不是101點含噪音曲線的離散最大值；不可把兩者誤作同一個量。這是即時訊號預覽，沒有時間播放器；保存卡保留所列條件，揭開只改位置核對的可見性。",
    "This custom radial-amplitude teaching model assumes 2D uniform soil. It does not solve elastic waves, receptor neurons or a real localization algorithm. Fixed illustrative source positions are A=(3,4), B=(6,3.5), C=(8,2) cm; switching them is not a randomized blind test. Three sample points are (x−0.2,y), (x,y), (x+0.2,y), not measured receptor spacing. Vibration peak A(d)=100 exp(−αd)/(1+d/1cm), relative units; α=0.2–1.2 cm⁻¹. Absorption over another centimetre is exp(−α), with a separate designed geometric loss. A fixed 30Hz sinusoid has 101 one-millisecond samples over 100ms, all points in phase: a signal preview without propagation speed or phase solving. Each sample adds seed-42 uniform noise ±0.5 relative units, not measured noise. Switching touch off makes all its readings and curves zero while the source remains. Illustrative sensing distance solves A(d)=1 at a designed threshold, not kiwi sensitivity; no automatic search controller uses it. The independent smell cue at the central tip is O(d)=100/[1+(d/4cm)²], relative units unaffected by the vibration attenuation slider. It is not an odor transport equation or a soil-moisture or physiological model. The two channels switch independently; unlike quantities are not added or made into success rates. Three vibration traces use fixed ±101 scales, and smell uses 0–100, without rescaling weak signals. Children move the tip and compare local readings, then explicitly reveal the geometric distance from tip center to source center. This is a manual check, not a sensory localization error or capture prediction. Hiding removes source outlines, distances, field lines, direction arrows and precise automatic localization; reveal changes visibility only. With both senses off, humans can still explicitly reveal the answer, but this is not localization from sensory data. Phones use adjacent sliders or numeric fields; desktop users can drag the tip. Native vertical touch scrolling is retained. Three baseline amplitudes A are noiseless model values, not maxima of the101-point noisy sampled traces; these are different quantities. This is a live signal preview without a time player. Saved cards retain listed conditions; Reveal changes only visibility of the manual position check."
  ],
  "formula": "d=hypot(x−sourceX,y−sourceY) cm\nA(d)=100*exp(−alpha*d)/(1+d/1cm), relative amplitude\nThree sample x offsets: −0.2,0,+0.2 cm\nu_j(t)=A_j*sin(2*pi*30*t)+Uniform(−0.5,+0.5), seed 42\n101 samples t=0..0.100 s, 1 ms apart; all in phase\nTouch off: A_j=0 and u_j=0\nIllustrative range: solve A(d)=1; not kiwi calibration\nO(d)=100/(1+(d/4cm)^2), independent relative odor cue\nSmell off: O=0\nReveal: show true source and tip-to-source geometric distance\nNo source-bearing pointer, automatic localization or combined score\nBaseline amplitudes are not sampled noisy trace maxima\nReveal retains data and saved comparisons\nLive sampling;100ms signal preview, no playback time",
  "source": [
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC3828210/",
    "Cunningham et al. (2013) · Bill-tip anatomy and remote touch"
  ],
  "extraSources": [
    [
      "https://mro.massey.ac.nz/items/6b43095c-9663-4e87-b645-f943fb892974",
      "Cunningham (2010) · Massey thesis abstract, kiwi foraging"
    ]
  ],
  "ep": "226",
  "episodeTitle": "〈VIP｜動物母親專輯(1)｜最不像鳥的鳥！奇異鳥的生存黑科技與巨蛋之謎｜EP.226〉",
  "date": "2026-10-06",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/vip-%E5%8B%95%E7%89%A9%E6%AF%8D%E8%A6%AA%E5%B0%88%E8%BC%AF-1-%E6%9C%80%E4%B8%8D%E5%83%8F%E9%B3%A5%E7%9A%84%E9%B3%A5-%E5%A5%87%E7%95%B0%E9%B3%A5%E7%9A%84%E7%94%9F%E5%AD%98%E9%BB%91%E7%A7%91%E6%8A%80%E8%88%87%E5%B7%A8%E8%9B%8B%E4%B9%8B%E8%AC%8E-ep-226/id1812447277?i=1000762246663",
    "episodeId": "1000762246663",
    "showId": "1812447277",
    "source": "https://open.firstory.me/story/cmo5tcdur018a01vgc41zg1zn",
    "duration": "約11分鐘",
    "durationEn": "About 11 minutes",
    "subscribersOnly": true,
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource221/v4/d2/dd/e0/d2dde066-aaaf-7725-9878-4de472a8a0b1/baad089a-68cf-405c-b1c9-9907ed6275d1.jpg/500x500bb.webp",
    "coverAvailable": true,
    "verifiedOn": "2026-10-10",
    "coverVerifiedOn": "2026-10-10",
    "coverStatus": "Official Taiwan Apple episode artwork loaded, inspected and downloaded through Computer Use. Original WebP preserved; JPEG format conversion only.",
    "durationStatus": "Official11minutes; exact seconds unavailable, do not invent or use Apple P0D."
  },
  "icon": "🥝",
  "keywords": "奇異鳥,喙尖感覺器,地下震動,遠距觸覺,嗅覺,土壤衰減,kiwi,bill-tip organ,remote touch,substrate vibration,olfaction,attenuation,科學好好聽,science for kids",
  "description": [
    "移動奇異鳥喙尖示例探針，比較三點震動與獨立嗅覺線索；調土壤衰減，再明確揭開位置核對，觀察感測的限制。",
    "Move an illustrative kiwi bill-tip probe, compare three vibration signals and a separate smell cue, then change soil attenuation and reveal the source to check the limits of sensing."
  ],
  "defaults": {
    "worm": 1,
    "x": 2.5,
    "y": 2.5,
    "atten": 0.4,
    "touch": 1,
    "smell": 1,
    "reveal": 0
  },
  "formulaZh": "來源A=(3,4)、B=(6,3.5)、C=(8,2) cm；固定教具，非隨機盲測\nd＝√[(x−sx)²＋(y−sy)²] cm\nA(d)＝100 exp(−αd)/(1＋d/1cm)，相對基準振幅\n三點位於(x−0.2,y)、(x,y)、(x＋0.2,y) cm\nu_j(t)＝A_j sin(2π×30t)＋均勻噪音±0.5，種子42\n101個取樣：0–100ms，每1ms；三點同相，不解傳播\n基準A不是含噪音離散曲線的最大值\n震動關閉：A與u都0；來源仍在\n示例範圍解A(d)=1；α越大範圍越小，不是真鳥靈敏度\nO(d)＝100/[1＋(d/4cm)²]，獨立相對嗅覺值，不是質量濃度\n嗅覺關閉：O=0；不影響震動\n揭開只是人核對來源與喙尖距離，保留數據與保存對照\n固定震動±101、嗅覺0–100刻度，無自動增強\n即時取樣；100ms只是訊號預覽，沒有播放時刻\n單一值不唯一定位，兩感官不合成得分／成功率",
  "dateModified": "2026-10-10"
};
