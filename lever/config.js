window.CONFIG={
  "id": "I01",
  "path": "lever",
  "status": "complete",
  "topic": "physics",
  "icon": "⚖️",
  "title": [
    "槓桿的力與距離",
    "Lever: force for distance"
  ],
  "question": [
    "比較同一個重物：手更省力時，要走更長的路嗎？",
    "For the same load, does less effort require a longer movement?"
  ],
  "defaults": {
    "pivot": 120,
    "load": 180,
    "mass": 2,
    "angle": 0
  },
  "extras": [
    "lever-model.js",
    "lever.css",
    "lever.js",
    "number-entry.css",
    "number-entry.js"
  ],
  "date": "2026-10-08",
  "description": [
    "移動支點與重物，壓下槓桿左端，直接比較施力、垂直位移與功。探索理想槓桿省力但不增加能量的原因。",
    "Move the pivot and load, then lower the left end. Compare effort, vertical displacement and work to discover why an ideal lever saves force without creating energy."
  ],
  "keywords": "槓桿,支點,力臂,阿基米德,機械利益,功,能量守恆,lever,fulcrum,lever arm,Archimedes,mechanical advantage,work,energy conservation",
  "sources": [
    [
      "https://openstax.org/books/college-physics/pages/9-5-simple-machines",
      "OpenStax：簡單機械、力矩與機械利益",
      "OpenStax: simple machines, torque and mechanical advantage"
    ]
  ],
  "podcast": {
    "ep": "VIP.22",
    "title": "阿基米德主題",
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277",
    "verified": false
  },
  "mission": [
    "手只需要重物一半的力，手會移動多遠？",
    "If the effort is half the load force, how far does the hand move?"
  ],
  "options": [
    [
      "手移動重物的兩倍距離",
      "Twice as far as the load"
    ],
    [
      "手和重物移動一樣遠",
      "The same distance as the load"
    ]
  ],
  "answer": 0,
  "reason": [
    "在這個理想槓桿裡，力減半，沿力方向的位移就加倍；輸入功等於輸出功。",
    "In this ideal lever, halving effort doubles displacement along the force. Input and output work match."
  ],
  "limit": [
    "理想剛性直桿長2m，忽略桿重、摩擦和變形；左端施力向下、右側重物向下，支點給桿向上的支持力。準靜態抬升用平衡所需的力，不計加速、碰撞或真實承載安全。g=9.81m/s²。支點距左端40–160cm，重物沿桿位置至少在支點右方20cm且不超過200cm；兩滑桿的可調上下限隨另一位置更新，不悄悄移動另一項。角度0–10°從水平開始，位移取精確正弦；兩個垂直力的垂直力臂都含cosθ，所以施力比仍等於兩段桿長之比。這不是把弧長當垂直位移。功只計同一設定從水平抬到目前角度，改支點／重量／位置會重新計算，不累計搬動支點或配置重物的能量。對照直接抬同一重物到相同高度，不將不同抬升高度的功拿來比較。箭頭只示力的方向，不按力大小比例；桿上位置與位移採固定比例，重物圖示大小固定。桌機可拖三個圓點與用方向鍵，手機保留原生垂直捲動並用相鄰滑桿。支點不穿越重物，因此只涵蓋第一類槓桿，不泛化全部工具。VIP.22與EP65官方metadata待核。",
    "A rigid ideal 2 m beam ignores beam weight, friction and deformation. Effort acts downward at the left, the load acts downward on the right, and the pivot supports the beam upward. The quasi-static force balances torque; acceleration, collision and real load safety are not modeled. g=9.81 m/s². The pivot is 40–160 cm from the left end. The load is at least 20 cm to its right and no farther than 200 cm. Slider bounds update with the other position without moving it silently. Motion spans 0–10° from horizontal using exact sine displacement. Both vertical forces have perpendicular moment arms containing cosθ, which cancels from their ratio. Arc length is not substituted for vertical displacement. Work describes only a lift from horizontal for the current setting; changing geometry or mass recalculates it, without accumulating work of repositioning the pivot or load. Direct lifting is compared at the same mass and height. Force arrows show direction, not magnitude; beam geometry and displacement share a fixed scale, while the load icon size stays fixed. Desktop users can drag three points or use arrow keys; mobile users keep native vertical scrolling and nearby sliders. The pivot never crosses the load, so only first-class levers are included. Official VIP.22 and EP65 metadata await verification."
  ],
  "formula": [
    "a＝左端到支點，b＝支點到重物（m）\n重力W＝mg；需要施力F＝W×b/a\n垂直力臂：a cosθ及b cosθ\n手下移a sinθ；重物上移b sinθ\n輸入功＝F×手下移＝W×重物上移＝輸出功\n支點支持力＝F+W；支點不動，所做的功為0\nN＝牛頓（力）；J＝焦耳＝N×m（功）",
    "a=effort-to-pivot; b=pivot-to-load (m)\nWeight W=mg; required effort F=W×b/a\nPerpendicular moment arms: a cosθ and b cosθ\nHand descends a sinθ; load rises b sinθ\nInput work=F×hand descent=W×load rise=output work\nPivot reaction=F+W; a fixed pivot does zero work\nN=newton (force); J=joule=N×m (work)"
  ]
};
