window.CONFIG={
  "id": "F10",
  "path": "fishsort",
  "status": "complete",
  "controller": "fishsort.js",
  "extras": [
    "fishsort-model.js",
    "fishsort.css",
    "fishsort.js"
  ],
  "title": [
    "小丑魚的條紋分類工作台",
    "Clownfish classification workbench"
  ],
  "question": [
    "同樣三條白紋，就一定是同一種？",
    "Do three white bars mean the same species?"
  ],
  "hint": [
    "先加例外，看規則在哪裡錯分。",
    "Add counterexamples; inspect the rule’s mistakes."
  ],
  "defaults": {
    "dataset": 0,
    "feature": 0,
    "primary": "O",
    "ten": "P"
  },
  "controls": [],
  "cards": [
    {
      "id": 1,
      "species": "O",
      "bars": 3,
      "spines": 11,
      "group": 0
    },
    {
      "id": 2,
      "species": "O",
      "bars": 3,
      "spines": 11,
      "group": 0
    },
    {
      "id": 3,
      "species": "O",
      "bars": 3,
      "spines": 11,
      "group": 0
    },
    {
      "id": 4,
      "species": "P",
      "bars": 3,
      "spines": 10,
      "group": 1
    },
    {
      "id": 5,
      "species": "P",
      "bars": 3,
      "spines": 9,
      "group": 1
    },
    {
      "id": 6,
      "species": "P",
      "bars": 3,
      "spines": 10,
      "group": 1
    },
    {
      "id": 7,
      "species": "O",
      "bars": 3,
      "spines": 10,
      "group": 2
    },
    {
      "id": 8,
      "species": "P",
      "bars": 3,
      "spines": 10,
      "group": 2
    }
  ],
  "action": [
    "下一張",
    "Next card"
  ],
  "mission": [
    "三條白紋足夠分清這兩種嗎？",
    "Can three white bars separate these two species?"
  ],
  "options": [
    [
      "不夠；多看特徵也可能仍重疊",
      "No; even more features may overlap"
    ],
    [
      "足夠；三條就一定是O",
      "Yes; three bars always mean O"
    ]
  ],
  "answer": 0,
  "reason": [
    "這兩種都可有三條白紋。硬棘9／11能改善指定卡，10棘仍重疊；保留待確認也是合理結果，不能把示例當所有魚的鑑定保證。",
    "Both species can have three bars. Spine counts 9/11 improve specific cards;10 still overlaps. Pending is a reasonable outcome, not a failure; toy cards give no universal identification guarantee."
  ],
  "comparisons": [],
  "ep": "255",
  "episodeTitle": "海洋中的毒堡壘與隱形斗篷：揭開小丑魚與海葵的終極生存密碼",
  "podcast": {
    "verified": false,
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277"
  },
  "source": [
    "https://fishesofaustralia.net.au/home/species/1275",
    "Museums Victoria：A.ocellaris物種頁",
    "Museums Victoria: A.ocellaris species account"
  ],
  "extraSources": [
    [
      "https://repository.library.noaa.gov/view/noaa/10369/noaa_10369_DS1.pdf",
      "NOAA 2016：形態整理，印刷頁3–4",
      "NOAA 2016: morphology, printed pp. 3–4"
    ]
  ],
  "limit": [
    "僅兩種文獻形態範圍內的合成示意卡：O＝Amphiprion ocellaris、P＝Amphiprion percula；不是實拍、實體魚採樣、族群頻率或AI。兩者均可有3條白紋，O背鰭硬棘10–11、P9–10，10重疊，不能宣稱第二特徵完美鑑定。每張硬棘值由作者從範圍選取，組數與加入次序為教學設計。魚輪廓、顏色與硬棘放大畫法示意，不作其他形態／親緣／發育推論，不包含所有小丑魚。預測只讀條紋／硬棘；真標註只作核對，不能偷讀來分類。示例正確／錯分／待確認以全部當組卡為分母，不是真辨識準確率。更換資料組保留規則，加入時選所選新增組的首卡：6張選卡4、8張選卡7（含直接3→8）；重選目前組、語言／模式保留卡與規則。 對照卡顯示實際規則：條紋映射用目前O／P／待確認設定，即使主畫面已開硬棘；目前10棘規則用10棘選擇，即使主畫面關硬棘；保守對照固定10棘待確認。提示選另一參考標註只作人為核對，不是預測器偷讀標註。",
    "Only synthetic illustrated cards within published ranges for two species: O=Amphiprion ocellaris, P=Amphiprion percula. Not photographs, specimen samples, population frequencies or AI. Both can have 3 white bars; O has 10–11 dorsal spines and P 9–10, overlapping at 10. A second feature is no perfect identification guarantee. Each spine count is author-selected within those ranges; group sizes/order are teaching choices. Body shape, color and enlarged spine diagram are schematic; no other morphology, ancestry or developmental inference, and not all clownfish. Prediction reads only bars/spines; reference labels are used only for evaluation. Correct/wrong/pending counts use all current cards, not real identification accuracy. Group changes retain rules; adding selects the first card of the selected added group: 6 selects card4, 8 selects card7 (including a direct3→8 jump). Reselecting the same group, language and view keep card/rules. Each comparison states its actual mapping. Bars-only uses the current O/P/pending choice even if main-card spines are ON; current-10-policy uses the 10-spine choice even if main-card spines are OFF; conservative comparison always keeps 10 pending. Guidance to another reference label is a human evaluation step, not label leakage into prediction."
  ],
  "formulaText": [
    "只看條紋：若3條，輸出孩子選的O、P或待確認；其他條數待確認。加硬棘：仍先要求3條；9棘→P，11棘→O，10棘→選定規則（預設P，可改O或待確認），其他棘數待確認。規則不查真標籤。當組卡數3／6／8；混淆表真標註為列、預測O／P／待確認為欄。正確＋錯分＋待確認＝當組卡數；待確認不算正確或錯分。對照三種規則同卡組：條紋映射、加硬棘且套用目前10棘選擇、範圍保守判法（10棘待確認）。",
    "Bars-only: if 3 bars, output the chosen O/P/pending; otherwise pending. With spines: still require 3 bars;9→P,11→O,10→chosen policy (default P, adjustable to O/pending); other counts pending. Rules never read reference labels. Current group has 3/6/8 cards. Confusion matrix rows=reference O/P, columns=predicted O/P/pending. Correct+wrong+pending=all current cards; pending is neither correct nor wrong. Compare three rules on the same group: bars mapping; spines with current 10-spine policy; conservative range rule with 10 pending."
  ],
  "formula": "只看條紋：若3條，輸出孩子選的O、P或待確認；其他條數待確認。加硬棘：仍先要求3條；9棘→P，11棘→O，10棘→選定規則（預設P，可改O或待確認），其他棘數待確認。規則不查真標籤。當組卡數3／6／8；混淆表真標註為列、預測O／P／待確認為欄。正確＋錯分＋待確認＝當組卡數；待確認不算正確或錯分。對照三種規則同卡組：條紋映射、加硬棘且套用目前10棘選擇、範圍保守判法（10棘待確認）。\nBars-only: if 3 bars, output the chosen O/P/pending; otherwise pending. With spines: still require 3 bars;9→P,11→O,10→chosen policy (default P, adjustable to O/pending); other counts pending. Rules never read reference labels. Current group has 3/6/8 cards. Confusion matrix rows=reference O/P, columns=predicted O/P/pending. Correct+wrong+pending=all current cards; pending is neither correct nor wrong. Compare three rules on the same group: bars mapping; spines with current 10-spine policy; conservative range rule with 10 pending.",
  "description": [
    "用文獻範圍內的小丑魚示意卡，改條紋與背鰭硬棘分類規則，加入例外、看錯分與混淆表，保留待確認；繁中英文教具。",
    "Use illustrated clownfish cards within published trait ranges; change bar/spine rules, add counterexamples, inspect a confusion matrix and retain uncertain cases; bilingual teaching model."
  ],
  "keywords": "小丑魚,條紋,分類,背鰭硬棘,例外,混淆表,待確認,公子小丑,clownfish,white bars,classification,dorsal spines,counterexample,confusion matrix,uncertainty,Amphiprion ocellaris,Amphiprion percula",
  "date": "2026-10-04",
  "icon": "🐠",
  "dateModified": "2026-10-11"
};
