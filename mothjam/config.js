window.CONFIG={
  "id": "C02",
  "path": "mothjam",
  "status": "complete",
  "title": [
    "蝙蝠與蛾：回聲被打亂",
    "Bat and moth: confusing echoes"
  ],
  "question": [
    "聽到一聲響，就一定是自己的回聲嗎？",
    "Is every click an echo of your own call?"
  ],
  "hint": [
    "先按「掃描訊號」，看金色回聲與青色蛾聲；移動蛾聲時機，再看紅色偵測線。",
    "Scan: gold is the echo, cyan the moth click. Move the moth timing and watch the red detection line."
  ],
  "controls": [
    {
      "key": "echo",
      "label": [
        "回聲來回時間",
        "Echo round-trip time"
      ],
      "min": 3,
      "max": 15,
      "step": 0.5,
      "value": 8,
      "unit": "ms",
      "options": null
    },
    {
      "key": "noise",
      "label": [
        "背景噪音振幅",
        "Background noise amplitude"
      ],
      "min": 0,
      "max": 1,
      "step": 0.1,
      "value": 0.2,
      "unit": "相對值 / relative",
      "options": null
    },
    {
      "key": "moth",
      "label": [
        "蛾聲抵達時間",
        "Moth click arrival"
      ],
      "min": 2,
      "max": 18,
      "step": 0.5,
      "value": 7,
      "unit": "ms",
      "options": null
    },
    {
      "key": "hypothesis",
      "label": [
        "可選假說",
        "Hypothesis label"
      ],
      "min": 0,
      "max": 2,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "無蛾聲",
          "No click"
        ],
        [
          "訊號干擾",
          "Interference"
        ],
        [
          "警告／驚嚇",
          "Warning / startle"
        ]
      ]
    }
  ],
  "action": [
    "掃描訊號",
    "Scan signal"
  ],
  "audio": true,
  "mission": [
    "某些蛾能干擾測距，是否所有蛾聲都讓獵物隱形？",
    "Does every moth click make prey invisible?"
  ],
  "options": [
    [
      "不能；物種與防禦機制不同",
      "No: species and mechanisms differ"
    ],
    [
      "一定，所有蛾都一樣",
      "Yes: all moths do the same"
    ]
  ],
  "answer": 0,
  "reason": [
    "研究支持部分燈蛾能干擾蝙蝠聲納；另有警告、驚嚇等作用。本頁只看合成訊號如何誤導簡單偵測器，不把它當成蝙蝠完整聽覺或捕食成功率。",
    "Some tiger moths can jam bat sonar; other clicks may warn or startle. This lab tests a simple detector with synthetic signals, not a complete bat hearing system or capture probability."
  ],
  "comparisons": [
    {
      "label": [
        "噪音0／1",
        "Noise 0 / 1"
      ],
      "key": "noise",
      "a": 0,
      "b": 1,
      "base": {
        "hypothesis": 0
      }
    },
    {
      "label": [
        "蛾聲7／10毫秒",
        "Moth click 7 / 10 ms"
      ],
      "key": "moth",
      "a": 7,
      "b": 10,
      "base": {
        "noise": 0,
        "echo": 8,
        "hypothesis": 1
      }
    },
    {
      "label": [
        "無聲／干擾",
        "No click / interference"
      ],
      "key": "hypothesis",
      "a": 0,
      "b": 1,
      "base": {
        "noise": 0,
        "echo": 8,
        "moth": 7
      }
    }
  ],
  "limit": [
    "固定種子42，128份合成噪音樣本，每份0–20 ms、取樣0.025 ms。回聲為振幅1、標準差0.15 ms的正高斯脈衝；蛾聲振幅0.9、標準差0.08 ms，單次示例點擊。背景為均勻[-振幅,+振幅]相對噪音。偵測器從1 ms起找第一次訊號≥0.6，並加上已知乾淨回聲的前緣偏移0.15√(-2ln0.6) ms；不是蝙蝠神經模型。距離=343 m/s×來回時間/2；誤差以公分呈現。偏離真時間超過0.2 ms為本頁自訂錯判；未偵測另計，平均絕對誤差僅對有偵測樣本算。噪音更大在預設對照會提高整批錯判，但單份噪音、每個參數都不能保證單調。訊號是合成脈衝，不是錄音或真超音波；視覺掃描2秒，可聽替代音時間放慢50倍、振幅低。警告／驚嚇只標示另一假說：蛾聲仍畫出，但此理想辨別器忽略它，不推算蝙蝠是否停止追逐。研究中部分燈蛾可能干擾測距；不宣稱完全遮蔽、所有蛾都會干擾、飛行軌跡或精確生物錯誤率。 2011年所引用實驗支持測距精度受擾，未支持把點擊當幻影目標或完全遮蔽。本站「較早點擊先跨門檻」是人工偵測器的例子，不重現該實驗或證明其生理機制。兩秒掃描是100倍慢看20ms窗；試聽是50倍慢、約一秒，兩者不同步。數據始終列完整128份，不隨掃描累計。 上排與下排使用各自固定的相對振幅尺；下排灰／紫線共用−1到3，同尺度、不自動加強對比，紅橫線仍代表門檻0.6。",
    "Seed 42; 128 synthetic noise trials, 0–20 ms sampled every 0.025 ms. Echo: amplitude 1, Gaussian sigma 0.15 ms. One illustrative moth click: amplitude 0.9, sigma 0.08 ms. Background uniform [-amplitude,+amplitude] relative noise. From 1 ms, the detector finds the first signal ≥0.6, then adds the known clean echo leading-edge offset 0.15√(-2ln0.6) ms. This is not bat neurophysiology. Range=343 m/s×round-trip time/2; errors in cm. Errors over 0.2 ms are designed wrong detections; misses are separate. Mean absolute error includes detected trials only. More noise increases batch errors in the default comparison, but individual trials or arbitrary settings need not vary monotonically. Pulses are synthetic, not recordings or real ultrasound. Visual scan lasts two seconds; quiet audible substitute slows timing 50-fold. Warning/startle is a separate hypothesis label: clicks remain drawn but an ideal discriminator ignores them; pursuit is not predicted. Some tiger moths can disrupt ranging; complete masking, all-moth jamming, flight trajectories and precise biological error rates are not claimed. The cited 2011 experiment supported ranging interference, not phantom targets or full masking. Earlier clicks triggering this threshold are an artificial-detector example, not a replication or proof of its physiology. The 2 s scan shows the 20 ms window at 100× slow speed; the 50× cue lasts about 1 s and is not synchronized. Values always cover 128 full trials, not a growing scan ledger. The input and received rows use separate fixed relative-amplitude scales. Gray and purple share the lower −1 to 3 scale, without automatic contrast boosts; the red horizontal line still represents threshold 0.6."
  ],
  "formula": "Echo(t)=exp(-0.5((t−echoTime)/0.15 ms)²)\nClick(t)=0.9 exp(-0.5((t−mothTime)/0.08 ms)²)\nRecorded=Echo+Click+Uniform(−noise,+noise)\nInterference detector includes Click; other labels omit it\nFirst crossing ≥0.6 from 1 ms; corrected t = crossing+0.15√(−2ln0.6) ms\nRange_cm=343×t_ms/20; error_cm=343×|t_detect−t_true|/20\nWrong if |timing error|>0.2 ms; 128 trials, seed 42+j×7919\nMean error excludes misses, reported separately\nSynthetic teaching detector; no biological prediction\nScan 20 ms in 2 screen seconds: 100× slower; Step 2.5 ms\nCue 20 ms in 1 audio second: 50× slower, 700 Hz carrier, not ultrasonic audio\nThreshold toy may trigger on a click; not proof of the studied bat mechanism\nAll 128 trials remain complete during replay; noise effects need not be monotonic for every setting\\nLower row: fixed relative amplitude −1 to 3; gray/purple share it, threshold0.6; input row uses its own fixed scale",
  "source": [
    "https://pubmed.ncbi.nlm.nih.gov/21697434/",
    "Corcoran et al. (2011) · How do tiger moths jam bat sonar?"
  ],
  "extraSources": [
    [
      "https://pubmed.ncbi.nlm.nih.gov/19608920/",
      "Corcoran et al. (2009) · Tiger moth jams bat sonar"
    ]
  ],
  "ep": "205",
  "episodeTitle": "〈EP.205｜夜空中的「重金屬」搖滾巨星：你以為你懂蝙蝠嗎？〉",
  "date": "2026-10-06",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/ep-205-%E5%A4%9C%E7%A9%BA%E4%B8%AD%E7%9A%84-%E9%87%8D%E9%87%91%E5%B1%AC-%E6%90%96%E6%BB%BE%E5%B7%A8%E6%98%9F-%E4%BD%A0%E4%BB%A5%E7%82%BA%E4%BD%A0%E6%87%82%E8%9D%99%E8%9D%A0%E5%97%8E/id1812447277?i=1000712756094&uo=4",
    "episodeId": "1000712756094",
    "source": "https://open.firstory.fm/story/cmdpx4cut00cw01xl34o1dbc8",
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/dFWv7-TVcdmBfoU7ruA4v.jpg",
    "duration": "17 分 58 秒",
    "durationEn": "17 min 58 sec",
    "durationIso": "PT17M58S",
    "subscribersOnly": false,
    "verifiedOn": "2026-10-06"
  },
  "icon": "🦇",
  "keywords": "蝙蝠,燈蛾,回聲定位,聲納干擾,訊號偵測,背景噪音,bat,tiger moth,echolocation,sonar jamming,signal detection,noise,科學好好聽,science for kids",
  "description": [
    "移動合成回聲與蛾聲、增加噪音，觀察門檻偵測與128次抽樣誤差；區分訊號干擾、警告與驚嚇假說。",
    "Move synthetic echoes and moth clicks, add noise, and compare threshold detection across 128 trials; distinguish interference from warning and startle hypotheses."
  ],
  "defaults": {
    "echo": 8,
    "noise": 0.2,
    "moth": 7,
    "hypothesis": 1
  },
  "formulaZh": "回聲E(t)＝exp(−0.5((t−回聲時刻)/0.15ms)²)\n蛾聲C(t)＝0.9exp(−0.5((t−蛾聲時刻)/0.08ms)²)\n收到＝E＋C＋均勻噪音（−振幅到＋振幅）；無蛾聲時C＝0\n干擾教具用E＋C＋噪音；另兩標籤的偵測器不採C\n從1ms起找第一次≥0.6；補回乾淨回聲前緣偏移\n偏移＝0.15√(−2ln0.6) ms；校正時刻＝跨門檻時刻＋偏移\n距離cm＝343×來回時間ms/20（包含除以2與單位換算）\n距離誤差cm＝343×|校正時刻−真時刻|/20\n時間誤差>0.2ms為教具錯判；未偵測另列\n平均誤差只算有偵測的樣本；128份、固定種子42+j×7919\n2螢幕秒掃20ms，慢100倍；逐步2.5ms\n1秒可聽替代音呈現20ms，慢50倍；700Hz載波，非超音波\n數據為完整128份，重播不變；所有參數不保證噪音越大誤差越大\n較早點擊觸發門檻只是教具，不證明真蝙蝠誤認蛾聲\\n下排固定振幅尺−1到3；灰／紫同尺，門檻0.6；上排另用固定振幅尺",
  "dateModified": "2026-10-09"
};
