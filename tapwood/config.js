window.CONFIG={
  "id": "C08",
  "path": "tapwood",
  "status": "complete",
  "title": [
    "指猴：敲敲木頭",
    "Aye-aye: tap the wood"
  ],
  "question": [
    "哪一段敲起來不一樣？",
    "Which tap point responds differently?"
  ],
  "hint": [
    "先敲三種木段、比波形。換「找藏點」，移動敲擊位置，再揭開核對；靜音也能玩。",
    "Tap the three samples; compare curves. Try Hidden log, move the tap point, then reveal. Sound is optional."
  ],
  "controls": [
    {
      "key": "sample",
      "label": [
        "選木段／找藏點",
        "Sample / hidden log"
      ],
      "min": 0,
      "max": 3,
      "step": 1,
      "value": 0,
      "unit": "",
      "options": [
        [
          "實心",
          "Solid"
        ],
        [
          "薄壁",
          "Thin wall"
        ],
        [
          "空腔",
          "Cavity"
        ],
        [
          "找藏點",
          "Hidden log"
        ]
      ]
    },
    {
      "key": "spot",
      "label": [
        "敲擊位置",
        "Tap point"
      ],
      "min": 1,
      "max": 5,
      "step": 1,
      "value": 3,
      "unit": "號 / number"
    },
    {
      "key": "impulse",
      "label": [
        "敲擊衝量",
        "Tap impulse"
      ],
      "min": 0,
      "max": 6,
      "step": 1,
      "value": 2,
      "unit": "mN·s"
    },
    {
      "key": "damp",
      "label": [
        "衰減強度倍率",
        "Damping multiplier"
      ],
      "min": 0.5,
      "max": 3,
      "step": 0.5,
      "value": 1,
      "unit": "×"
    },
    {
      "key": "reveal",
      "label": [
        "剖面",
        "Cross-section"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 0,
      "unit": "",
      "options": [
        [
          "蓋住藏點",
          "Cover hidden log"
        ],
        [
          "揭開核對",
          "Reveal"
        ]
      ]
    }
  ],
  "action": [
    "敲一下",
    "Tap"
  ],
  "audio": true,
  "mission": [
    "空腔一定代表裡面有蟲嗎？",
    "Does a cavity always contain an insect?"
  ],
  "options": [
    [
      "不一定；只發現結構線索",
      "No: only a structural clue"
    ],
    [
      "一定，敲擊等同看穿蟲子",
      "Yes: tapping sees the insect"
    ]
  ],
  "answer": 0,
  "reason": [
    "指猴以細長中指敲探木材。原始研究中，空腔填入膠或吸音泡棉仍可引發挖掘，表面下的結構界面也能成為線索；不必是空氣腔回響，也不能只靠敲擊就保證有蟲。",
    "Aye-ayes tap wood with an elongated middle finger. Original experiments found excavation even with gelatin or acoustic foam filling a cavity; a subsurface interface can be a cue. Air-cavity reverberation is not required, and tapping alone does not guarantee an insect."
  ],
  "comparisons": [
    {
      "label": [
        "實心／薄壁",
        "Solid / thin wall"
      ],
      "key": "sample",
      "a": 0,
      "b": 1,
      "base": {}
    },
    {
      "label": [
        "薄壁／空腔",
        "Thin wall / cavity"
      ],
      "key": "sample",
      "a": 1,
      "b": 2,
      "base": {}
    },
    {
      "label": [
        "衝量2／4",
        "Impulse 2 / 4"
      ],
      "key": "impulse",
      "a": 2,
      "b": 4,
      "base": {
        "sample": 2
      }
    }
  ],
  "limit": [
    "每個木段只用一個線性質量—彈簧—阻尼振子，不是三維木材或空氣腔聲學求解。示例(m kg,k N/m,ζ₀)：實心(0.020,120000,0.12)、薄壁(0.010,22500,0.05)、空腔(0.010,40000,0.025)；參數是為比較自訂，未校準木材物種、壁厚、空腔大小或真指猴聽覺，不主張所有薄壁／空腔都有這種音高順序。ζ=ζ₀×衰減倍率，0.0125–0.36全為欠阻尼；c=2ζ√(km)。衝量J=0–0.006 N·s，1 mN·s是千分之一牛頓秒；初始x=0,v=J/m，E₀=J²/(2m)。x(t)=J/(mωd)exp(−ζωnt)sin(ωdt)，ωn=√(k/m)，ωd=ωn√(1−ζ²)。畫布完整波形預覽前30ms、固定±450µm，1µm是百萬分之一公尺；按敲擊用2秒播放這30ms，慢約67倍，不改物理頻率。觀察結束不表示振動瞬間停止。衰減時間τ=1/(ζωn)指包絡降至初值1/e約37%，不是停振時間。右下頻譜是完整無限時間衝量響應|J/(k−mω²+i cω)|，不是30ms截窗FFT；各曲線按自身解析峰值正規化到0–1，只比頻率形狀，不比響度或能量。J=0時波形、頻譜與能量為0；結構特徵頻率仍存在。已知木段五個敲點用同一振子，位置不改讀數；找藏點固定五段[實心,薄壁,實心,空腔,實心]，只選位置讀局部響應，沒有識別算法偷看位置、勝率或真蟲。揭開只改剖面可見性、不重設觀察或讀數。薄壁是反例線索，不等同空腔。合成音預設關閉，試聽三次相隔0.35秒、每次0.12秒的位移示例；樣本60×x(t)，尾5ms淡出、非聲壓或動物錄音。相同設定聲波可重現，音訊不校準揚聲器或聽覺。靜音仍有波形、頻譜、數字與剖面；沒有估計回聲往返距離，不直接等同蝙蝠主動聲納。 波形振動頻率fd不等於完整響應頻譜的峰值頻率，阻尼較強時兩者差異更明顯；頻譜不是聲壓或聽覺音高推算。合成音使用原模型時間，不跟黃線67倍慢放同步；停止試聽不停止圖形，圖形暫停也不停止獨立試聽。揭開剖面保留合成音與保存對照；確實更換木段／位置／衝量／衰減則停止舊音並重新比較。 零衝量沒有觀察到獨特頻譜峰，所列頻率只代表未激發的結構特徵。",
    "Each sample is one linear mass–spring–damper oscillator, not a 3D wood or air-cavity acoustic solver. Illustrative (m kg,k N/m,ζ₀): solid (0.020,120000,0.12), thin wall (0.010,22500,0.05), cavity (0.010,40000,0.025). These custom comparison parameters are not calibrated to wood species, wall thickness, cavity size or aye-aye hearing; their pitch ordering is not universal. ζ=ζ₀×damping multiplier, 0.0125–0.36, always underdamped; c=2ζ√(km). Impulse J=0–0.006 N·s; one mN·s is a thousandth of a newton-second. Initial x=0,v=J/m,E₀=J²/(2m). x(t)=J/(mωd)exp(−ζωnt)sin(ωdt), ωn=√(k/m), ωd=ωn√(1−ζ²). Canvas previews the first 30ms at fixed ±450µm; one µm is a millionth of a metre. Tap plays these 30ms over two seconds, about 67× slow, without changing physical frequency. The observation window ending is not an abrupt end to vibration. τ=1/(ζωn) is the envelope time to 1/e, about 37%, not a stopping time. The lower-right spectrum is the complete infinite-time impulse response magnitude |J/(k−mω²+i cω)|, not a 30ms-window FFT. Each curve is normalized by its own analytical peak to 0–1 for frequency shape, not loudness or energy. Zero impulse gives zero waveform, spectrum and energy; structural characteristic frequencies remain defined. All five positions on a known sample use the same oscillator. The hidden log fixes five segments [solid,thin wall,solid,cavity,solid]; selected position yields a local response without a hidden-position classifier, success rate or real insect. Reveal changes section visibility only, preserving readings and observation progress. Thin wall is a contrasting structural clue, not a cavity. Sound starts off. Optional playback synthesizes three 0.12-second displacement cues 0.35 seconds apart, samples 60×x(t) with a final 5ms fade, not calibrated pressure or animal recordings. Identical settings reproduce the signal; speakers and hearing are not calibrated. Muted use retains curves, spectrum, numbers and cross-section. No echo round-trip distance is calculated; this is not equated directly with bat active sonar. Waveform oscillation frequency fd differs from the full-response spectral peak, especially with stronger damping; spectra do not predict pressure or perceived pitch. Audio uses original model time and is independent of the roughly67× slowed cursor. Stopping audio does not stop the visual, and pausing the visual does not stop the independent cue. Reveal preserves audio and saved comparisons; an actual sample/position/impulse/damping change stops the old cue and starts a new comparison. At zero impulse there is no distinct observed spectral peak; the listed frequency is only an unexcited structural characteristic."
  ],
  "formula": "Presets (m kg, k N/m, zeta0): solid (.020,120000,.12); thin wall (.010,22500,.05); cavity (.010,40000,.025)\nzeta=zeta0*dampingMultiplier; c=2*zeta*sqrt(k*m)\nJ=impulse_mNs/1000 N·s; x(0)=0; v(0)=J/m\nwn=sqrt(k/m); wd=wn*sqrt(1−zeta²); fd=wd/(2*pi) Hz\nx(t)=J/(m*wd)*exp(−zeta*wn*t)*sin(wd*t) metres\nE0=J²/(2*m); E(t)=m*v(t)²/2+k*x(t)²/2\ndE/dt=−c*v²; no energy creation\nEnvelope time tau=1/(zeta*wn)\nSpectrum |X(f)|=J/sqrt((k−m*(2*pi*f)²)²+(c*2*pi*f)²) m·s\nPeak f=wn*sqrt(1−2*zeta²)/(2*pi)\nSpectrum displayed relative to its own peak, not absolute loudness\nFixed hidden log: [solid,thin wall,solid,cavity,solid]\nReveal changes visibility only; identical settings reproduce response\nfd differs from the spectral peak frequency\nReveal retains readings, saved comparisons, progress and synthetic cue\nSaved full parameters:30ms preview;2s visual window,3.75ms per Step\nThree0.12s audio cues at0.35s spacing, independent of slowed cursor\nSame values retain state; Step after done restarts at3.75ms\nAt J=0 no distinct observed spectral peak;fd is an unexcited structural characteristic",
  "source": [
    "https://scholars.duke.edu/publication/651143",
    "Erickson et al. (1998) · Percussive foraging stimuli"
  ],
  "extraSources": [
    [
      "https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/ef731c1b91d77a6db003f6c27e300d25_MIT8_03SCF16_Textbook.pdf",
      "Georgi · The Physics of Waves, §2.1 (MIT OCW)"
    ]
  ],
  "ep": "234",
  "episodeTitle": "〈VIP｜暗夜精靈的魔指傳說：指猴的敲擊回聲定位與第六根手指之謎｜EP.234〉",
  "date": "2026-10-06",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/vip-%E6%9A%97%E5%A4%9C%E7%B2%BE%E9%9D%88%E7%9A%84%E9%AD%94%E6%8C%87%E5%82%B3%E8%AA%AA-%E6%8C%87%E7%8C%B4%E7%9A%84%E6%95%B2%E6%93%8A%E5%9B%9E%E8%81%B2%E5%AE%9A%E4%BD%8D%E8%88%87%E7%AC%AC%E5%85%AD%E6%A0%B9%E6%89%8B%E6%8C%87%E4%B9%8B%E8%AC%8E-ep-234/id1812447277?i=1000773586737",
    "episodeId": "1000773586737",
    "showId": "1812447277",
    "source": "https://open.firstory.me/story/cmqnh8bpr00s301xc8kwsdq66",
    "duration": "約11分鐘",
    "durationEn": "About 11 minutes",
    "subscribersOnly": true,
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource211/v4/07/df/b7/07dfb74d-b18d-7e9a-8d08-6976691d34af/c4830c06-1c00-4aae-8ca5-17345f675150.jpg/500x500bb.webp",
    "coverAvailable": true,
    "verifiedOn": "2026-10-10",
    "coverVerifiedOn": "2026-10-10",
    "coverStatus": "Official Apple artwork loaded, inspected and downloaded through Computer Use. Original retained; JPEG format conversion only.",
    "durationStatus": "Official visible11minutes; exact seconds unavailable, omit unhelpful AppleP0D duration."
  },
  "icon": "🪵",
  "keywords": "指猴,敲擊探測,木材振動,空腔,欠阻尼振子,衰減,頻譜,aye-aye,tap-scanning,percussive foraging,wood vibration,cavity,damped oscillator,spectrum,科學好好聽,science for kids",
  "description": [
    "敲實心、薄壁與空腔木段，比較衰減波形和頻譜；移動藏點木段的敲擊位置，靜音用數字與曲線找線索，再揭開剖面。",
    "Tap solid, thin-wall and cavity samples. Compare decay curves and spectra, then scan a hidden log using curves and numbers with sound optional; reveal its cross-section to check."
  ],
  "defaults": {
    "sample": 0,
    "spot": 3,
    "impulse": 2,
    "damp": 1,
    "reveal": 0
  },
  "formulaZh": "示例(m kg,k N/m,ζ₀)：實心(.020,120000,.12)、薄壁(.010,22500,.05)、空腔(.010,40000,.025)\nζ＝ζ₀×衰減倍率；c＝2ζ√(km)，全為欠阻尼\nJ＝衝量(mN·s)/1000 N·s；x(0)＝0，v(0)＝J/m\nωn＝√(k/m)，ωd＝ωn√(1−ζ²)，波形頻率fd＝ωd/(2π) Hz\nx(t)＝J/(mωd)×exp(−ζωnt)×sin(ωdt)，單位m\nE₀＝J²/(2m)；E(t)＝mv²/2＋kx²/2；dE/dt＝−cv²\n包絡衰減τ＝1/(ζωn)，到約37%，不是停振時間\n完整無限時間頻譜|X(f)|＝J/√[(k−m(2πf)²)²＋(c2πf)²]，單位m·s\n頻譜峰值fpeak＝ωn√(1−2ζ²)/(2π)，不同於fd\n各自頻譜按解析峰值正規化；J＝0整條為0，不能比響度\n固定藏點[實心,薄壁,實心,空腔,實心]，局部取樣非識別算法\n揭開只改可見性，不改讀數／保存對照／進度／合成音\n保存卡保留全參數，波形預覽30ms；2秒示意，逐步3.75ms\n合成音三次間隔0.35s，每次0.12s；不是67倍慢放的游標聲音\n重按同值保留；最後逐步可從起點再看3.75ms\nJ＝0沒有觀察到獨特頻譜峰；fd只為未激發的結構特徵",
  "dateModified": "2026-10-10"
};
