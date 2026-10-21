window.CONFIG={
  "id": "F03",
  "path": "beaver",
  "title": [
    "河狸水壩實驗室",
    "Beaver dam lab"
  ],
  "question": [
    "水壩留下的水，是從哪裡來？",
    "Where does stored pond water come from?"
  ],
  "hint": [
    "開始放水，試著縮小缺口；再把入流調成 0，觀察水位。",
    "Start flow and shrink the gap. Then set inflow to zero and watch the level."
  ],
  "controls": [
    {
      "key": "rain",
      "label": [
        "上游入流",
        "Upstream inflow"
      ],
      "min": 0,
      "max": 2,
      "step": 0.1,
      "value": 1,
      "unit": "m³/s",
      "options": null
    },
    {
      "key": "height",
      "label": [
        "壩高",
        "Dam height"
      ],
      "min": 0.3,
      "max": 2.5,
      "step": 0.1,
      "value": 1.5,
      "unit": "m",
      "options": null
    },
    {
      "key": "gap",
      "label": [
        "缺口面積",
        "Gap area"
      ],
      "min": 0,
      "max": 1,
      "step": 0.05,
      "value": 0.2,
      "unit": "m²",
      "options": null
    }
  ],
  "action": [
    "開始放水",
    "Start flow"
  ],
  "mission": [
    "入流停止但缺口開著，水位會？",
    "No inflow and an open gap: the level…"
  ],
  "options": [
    [
      "慢慢下降",
      "Gradually falls"
    ],
    [
      "水壩一直造水",
      "Dam creates water"
    ]
  ],
  "answer": 0,
  "reason": [
    "水庫只儲存流進來的水；缺口與溢流把水送往下游。",
    "A pond stores incoming water. The gap and overflow send it downstream."
  ],
  "comparisons": [
    {
      "label": [
        "小／大缺口",
        "Small / large gap"
      ],
      "key": "gap",
      "a": 0.1,
      "b": 0.7
    },
    {
      "label": [
        "低／高水壩",
        "Low / high dam"
      ],
      "key": "height",
      "a": 0.5,
      "b": 2
    },
    {
      "label": [
        "反例：沒有入流",
        "Counterexample: no inflow"
      ],
      "key": "rain",
      "a": 1,
      "b": 0
    }
  ],
  "limit": [
    "面積100 m²、初始100 m³的假想矩形池。缺口用有效面積，水頭近似從池底量，忽略下游回水；出流係數0.6是教學假設，沒有量測河狸壩。溢流假設有效壩頂寬1 m，係數1.7 m½/s；忽略流入速度水頭、滲透、蒸發、地下水與河床變化。1秒逐步或算一天（86400秒）；算一天假設目前入流及壩設定整天不變，不是每天降雨預測。水位與壩高同尺，水平距離、箭頭、缺口形狀只是示意。真河狸壩也會改變地下水、濕地與生態；本頁只核對地表水帳，不是洪水安全工具。",
    "An imaginary rectangular pond: surface area 100 m², initial storage 100 m³. The gap uses effective area, with head approximated from the bed and no downstream backwater. Discharge coefficient 0.6 is a teaching assumption, not a measured beaver-dam value. Overflow assumes an effective crest width of 1 m and coefficient 1.7 m½/s. Approach velocity, seepage, evaporation, groundwater and bed changes are omitted. Step 1 second or add one day (86400 seconds); a day holds the current inflow and dam settings constant, not a rainfall forecast. Water and crest share a height scale; horizontal distances, arrows and gap shape are illustrative. Real dams also affect groundwater, wetlands and ecology; this page checks a surface-water ledger, not flood safety."
  ],
  "formula": "Pond surface S = 100 m²; initial storage V₀ = 100 m³\nQin is entered in m³/s; effective gap area A in m²\nh = V/S; dV/dt = Qin − Qout\nQgap = Cd A √(2gh); Cd = 0.6 (assumed), g = 9.81 m/s²\nQspill = K b max(h − crest height, 0)^(3/2)\nK = 1.7 m½/s (assumed); b = 1 m; Qout = Qgap + Qspill\nFlow in m³/s, time in seconds; 1 day = 86400 seconds with unchanged inflow and dam settings\nIntegration steps ≤ 0.05 s; outflow cannot exceed available water\n100 + cumulative inflow − cumulative outflow = stored volume (all in m³)\nBackwater, seepage, evaporation and groundwater omitted; not a measured dam or rainfall forecast.",
  "source": [
    "https://www.nps.gov/articles/effects-of-beaver-dams-on-riparian-areas.htm",
    "NPS · Beaver dams and riparian areas"
  ],
  "ep": "259",
  "date": "2026-10-04",
  "episodeTitle": "自然界的土木工程大師：河狸與牠們的太空級水壩",
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277",
    "verified": false
  },
  "defaults": {
    "rain": 1,
    "height": 1.5,
    "gap": 0.2
  },
  "keywords": "河狸,水壩,水量守恆,入流,出流,蓄水,溢流,孔口,堰流,濕地,beaver,dam,water balance,inflow,outflow,storage,overflow,orifice,weir,wetland,science for kids,科學好好聽",
  "description": [
    "直接調整入流、壩高與缺口，每秒或逐日核對蓄水與下游出流；從相同起點比較水壩的取捨與溢流。",
    "Adjust inflow, crest height and effective gap area. Step by seconds or days to check storage, downstream flow and matched dam comparisons."
  ],
  "formulaZh": "池面積 S = 100 m²；初始水量 V₀ = 100 m³\n上游入流 Qin 直接用 m³/s；有效缺口面積 A 直接用 m²\n水深 h = V / S；水量變化 dV/dt = Qin − Qout\n缺口 Qgap = Cd A √(2gh)；Cd = 0.6（假設），g = 9.81 m/s²\n溢流 Qspill = K b max(h − 壩高, 0)^(3/2)\nK = 1.7 m½/s（假設）；b = 1 m；Qout = Qgap + Qspill\n流量用 m³/s、時間用秒；一日 = 86400秒，維持目前入流及壩設定\n每次積分小步不超過0.05秒，出水不能超過可用水量\n初始100 + 累積流入 − 累積流出 = 庫存（全用m³）\n忽略回水、滲透、蒸發和地下水；不是實測河狸壩或降雨預報。",
  "moreSources": [
    [
      "https://www.usbr.gov/tsc/techreferences/mands/wmm/chap02_08.html",
      [
        "USBR：孔口出流關係",
        "USBR: orifice relationships"
      ]
    ],
    [
      "https://www.usbr.gov/tsc/techreferences/mands/wmm/chap07_13.html",
      [
        "USBR：寬頂堰背景",
        "USBR: broad-crested weirs"
      ]
    ]
  ],
  "dateModified": "2026-10-10"
};
