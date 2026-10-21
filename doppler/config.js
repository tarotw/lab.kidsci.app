window.CONFIG={
  "id": "I05",
  "path": "doppler",
  "status": "complete",
  "topic": "physics",
  "icon": "🔊",
  "title": [
    "移動聲源的多普勒波圈",
    "Moving sound: Doppler circles"
  ],
  "question": [
    "聲源不改音高，為什麼聽到的波峰間隔會改變？",
    "Why do arrival intervals change when a source keeps the same pitch?"
  ],
  "defaults": {
    "speed": 0.4,
    "x": 1.5,
    "y": 1
  },
  "extras": [
    "doppler-model.js",
    "doppler.css",
    "doppler.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "date": "2026-10-14",
  "description": [
    "調聲源速度與固定聽者位置，看九圈慢放聲波逐一抵達。核對接收間隔與示例合成音高，靜音也能完成實驗。",
    "Change source speed and a fixed listener position. Count nine slow wavefront arrivals, check their intervals and compare synthesized pitches with a complete silent path."
  ],
  "keywords": "多普勒效應,聲波,波峰,接收間隔,音高,頻率,聲源,均勻介質,Doppler effect,sound waves,wavefronts,arrival interval,pitch,frequency,moving source,uniform medium",
  "sources": [
    [
      "https://openstax.org/books/university-physics-volume-1/pages/17-7-the-doppler-effect",
      "OpenStax：多普勒效應",
      "OpenStax: the Doppler effect"
    ],
    [
      "https://feed.firstory.me/rss/user/cmdpx4cs200ax01xldg5ta89p",
      "節目官方公開RSS：單集資料（非模型數據）",
      "Official public podcast RSS: episode metadata (not model data)"
    ]
  ],
  "podcast": {
    "ep": "EP.86",
    "title": "〈公開｜聲音變變變：救護車的變音術與樂器的唱歌方法｜EP.86〉",
    "url": "https://open.firstory.fm/story/cmrt2cpig0dzz01uldpgw7btm",
    "verified": true,
    "urlVerified": true,
    "provider": "Firstory",
    "firstory": "https://open.firstory.fm/story/cmrt2cpig0dzz01uldpgw7btm",
    "durationSeconds": 526,
    "durationIso": "PT8M46S",
    "durationLabel": [
      "8 分 46 秒",
      "8 min 46 sec"
    ],
    "cover": "https://image.firstory-cdn.me/Image/cmdpx4cs200ax01xldg5ta89p/mfq12MBE-fsVeiPQrv5c4.jpg",
    "coverFile": "podcast/ep86.jpg",
    "coverAvailable": true,
    "artworkVerified": true,
    "artworkVisualChecked": true,
    "metadataChecked": "2026-10-08",
    "publishedAt": "Wed, 22 Jul 2026 22:02:04 GMT",
    "evidenceBasis": "Current official public RSS plus exact Firstory story title/image; local official artwork pixels inspected. Audio not played, Apple access not tested."
  },
  "mission": [
    "聲源靜止時，換聽者位置會改變兩圈之間的抵達間隔嗎？",
    "With a stationary source, does moving the fixed listener change the interval between arrivals?"
  ],
  "options": [
    [
      "不變，都是1模型秒",
      "No; each interval is 1 model second"
    ],
    [
      "越遠，間隔越長",
      "Farther means longer intervals"
    ]
  ],
  "answer": 0,
  "reason": [
    "位置改變會改變第一圈抵達的等待時間，但靜止源在均勻介質中每圈走相同距離，接收間隔仍等於發出間隔。",
    "Distance changes the wait for the first arrival. With a stationary source in a uniform medium, each wave travels the same distance, so successive arrival intervals equal emission intervals."
  ],
  "limit": [
    "二維均勻、靜止、無風介質中的幾何波前，聲源沿水平向右等速，聽者在每一趟內固定；不含超音速、反射、衰減、干涉或聲壓。座標1格＝聲波1模型秒走的距離；若聲速取343m/s，即343m。聲源速度0–0.6倍聲速，並非真救護車速度資料。每1模型秒放一圈共9圈（0–8秒），14秒止；聲源發完仍移動，所有合法位置的9圈均能在14秒內抵達。畫布60px/格兩方向同尺度，範圍外波圈裁切但帳本保留。這些慢放圈的發出頻率為1圈/模型秒，不是440Hz。接收時間t到＝t發＋發出位置至聽者的距離/c。最近兩個已抵達波圈的間隔Δt給出有限間隔倍數1秒/Δt；合成比較音為440Hz與440×倍數Hz，僅示範音高關係，不是這九個脈衝的錄音，也不是連續通過音軌或精確瞬時頻率。側邊聽者的倍數會隨發出位置改變，不能只套前方／後方一維公式，也不能以目前聲源位置判斷延遲抵達的聲音。預設靜音，只有手動解除靜音並點音高按鈕才有短合成音；距離不調音量。改參數明示重開此趟，切語言／模式及重選目前示例保留時間；暫停、重播、改參數與頁面隱藏停止舊音。 本集Firstory官方頁與公開RSS的集名、時長、封面已核；實際音訊與Apple收聽權限未測。",
    "Geometric wavefronts in a 2D uniform stationary medium without wind. The source moves right at constant speed; the listener stays fixed during each run. Supersonic motion, reflections, attenuation, interference and sound pressure are omitted. One coordinate unit is the distance sound travels in one model second (343 m if c=343 m/s). Source speed spans 0–0.6 times sound speed, not measured ambulance speeds. Nine fronts are emitted at model times 0–8 s; observation ends at 14 s, after all nine arrivals for every allowed setting. The source continues moving after emission ends. Both axes use 60 px per unit; clipped fronts still count in the ledger. These slow fronts are emitted at 1 per model second, not 440 Hz. Arrival time equals emission time plus distance from the emission point to the listener divided by c. The last two received fronts provide a finite-interval factor 1 s/Δt. Short synthesized comparison tones use 440 Hz and 440 times that factor, illustrating pitch relationships rather than recordings of these nine pulses, a continuous pass-by soundtrack or an exact instantaneous frequency. Off-axis factors vary with emission position; the 1D forward/backward formula and the current source position cannot replace delayed arrival geometry. Muted by default; manually unmute and press a tone button to hear a short synthesis. Distance does not change loudness. Parameter changes explicitly restart the run; language, mode and reselecting the current example preserve time. Pause, replay, parameter changes and hiding the page stop old audio.  Primary Firstory title, duration and artwork are checked against its official page/public RSS; actual audio and Apple access are untested."
  ],
  "formula": [
    "模型c＝1格/模型秒；T＝1模型秒\n第n圈t發＝nT，n＝0…8\nx發＝−3＋(v源/c)t發\nt到＝t發＋sqrt[(x聽−x發)²＋y聽²]/c\nΔt＝相鄰兩圈的t到差\n有限間隔倍數＝T/Δt\n示例音高＝440×T/Δt Hz\n直線正前方（未穿越）：倍數＝1/(1−v源/c)\n直線正後方：倍數＝1/(1＋v源/c)\n側邊依發出點距離逐圈計算，不套固定倍數",
    "Model c=1 unit/model second; T=1 model second\nEmission time=nT, n=0…8\nEmission x=−3+(source speed/c)×emission time\nArrival=emission+sqrt[(listener x−emission x)²+listener y²]/c\nΔt=successive arrival-time difference\nFinite-interval factor=T/Δt\nIllustration pitch=440×T/Δt Hz\nDirectly ahead before passing: factor=1/(1−vsource/c)\nDirectly behind: factor=1/(1+vsource/c)\nOff-axis listeners use each emission distance, not a constant factor"
  ],
  "episodeTitle": "〈公開｜聲音變變變：救護車的變音術與樂器的唱歌方法｜EP.86〉"
};
