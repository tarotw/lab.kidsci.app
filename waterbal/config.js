window.CONFIG={
  "id": "D12",
  "path": "waterbal",
  "status": "complete",
  "title": [
    "沙漠袋鼠鼠的水帳",
    "Kangaroo rat water ledger"
  ],
  "question": [
    "不喝水時，水收入從哪裡來？",
    "Where does water come from without a drink?"
  ],
  "hint": [
    "先切白天／夜間，看流失水路；再調尿濃縮，收入有增加嗎？",
    "Switch day / night and watch water loss. Then concentrate urine: does input increase?"
  ],
  "defaults": {
    "food": 4,
    "night": 1,
    "conc": 3,
    "drink": 0
  },
  "action": [
    "走一遍水帳",
    "Trace the water ledger"
  ],
  "mission": [
    "提高尿濃縮時，水帳怎麼變？",
    "What changes when urine becomes more concentrated?"
  ],
  "options": [
    [
      "相同廢物少用水排出，收入不變",
      "Same waste uses less water; input stays"
    ],
    [
      "腎臟製造新的水收入",
      "Kidneys create new water input"
    ]
  ],
  "answer": 0,
  "reason": [
    "袋鼠鼠可從食物原有水及營養氧化取得水，也靠夜間活動與減少散失省水。尿濃縮節省排出相同廢物所需的水；不會造水，也不保證任何情況都不用喝水。",
    "Kangaroo rats obtain water already in food and from nutrient oxidation, and reduce losses through nocturnal activity and conservation. Concentration uses less water to carry the same waste; it creates no water and does not guarantee that drinking is never needed."
  ],
  "comparisons": [
    {
      "key": "night",
      "a": 0,
      "b": 1,
      "label": [
        "同量活動：白天／夜間",
        "Same activity: day / night"
      ]
    },
    {
      "key": "conc",
      "a": 1,
      "b": 4,
      "label": [
        "濃縮設定：1／4倍",
        "Concentration: 1 / 4×"
      ]
    },
    {
      "key": "food",
      "a": 0,
      "b": 4,
      "label": [
        "這餐：0／4教具份",
        "This meal: 0 / 4 toy portions"
      ]
    }
  ],
  "ep": "236",
  "episodeTitle": "〈VIP｜沙漠晝夜與不喝水的奇蹟：從南極到火星的極限挑戰｜EP.236〉",
  "podcast": {
    "verified": true,
    "url": "https://podcasts.apple.com/tw/podcast/vip-%E6%B2%99%E6%BC%A0%E6%99%9D%E5%A4%9C%E8%88%87%E4%B8%8D%E5%96%9D%E6%B0%B4%E7%9A%84%E5%A5%87%E8%B9%9F-%E5%BE%9E%E5%8D%97%E6%A5%B5%E5%88%B0%E7%81%AB%E6%98%9F%E7%9A%84%E6%A5%B5%E9%99%90%E6%8C%91%E6%88%B0-ep-236/id1812447277?i=1000775523120",
    "episodeId": "1000775523120",
    "source": "https://open.firstory.fm/story/cmr7ud86905k601v5hma6hsxn",
    "duration": "19:31",
    "durationEn": "19:31",
    "durationIso": "PT19M31S",
    "coverAvailable": true,
    "coverFile": "podcast/ep236.jpg",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/PodcastSource221/v4/83/00/01/830001ee-decf-84a1-4a22-824635b7dd4d/3a01d594-8e54-43da-a2ed-c98e57c6b1ab.jpg/960x960bb.webp",
    "verifiedOn": "2026-10-10",
    "subscribersOnly": true,
    "accessBasis": "Actual native Taiwan Apple show full-list search236 -> unique episode,title,SubscribersOnly,rounded20min; official EpisodeWebsite -> Firstory exact19:31/JoinUnlock. No audio/account claim.",
    "coverStatus": "Apple960WebP directly acquired, visual pixels match linked Firstory; JPEG encoding for existing cover.jpg path, no content edits.",
    "artworkVisualChecked": true,
    "urlVerified": true
  },
  "source": [
    "https://www.nps.gov/whsa/learn/nature/kangaroo-rats.htm",
    "NPS White Sands · Kangaroo rats"
  ],
  "extraSources": [
    [
      "https://www.journals.uchicago.edu/doi/10.1086/physzool.67.6.30163907",
      "Nagy & Gruchacz1994 · Seasonal water/energy budget (abstract)"
    ]
  ],
  "date": "2026-10-10",
  "icon": "🐭",
  "keywords": "袋鼠鼠,水收支,代謝水,夜行性,沙漠,尿濃縮,種子,水分守恆,kangaroo rat,water balance,metabolic water,nocturnal,desert,urine concentration,seeds,water conservation",
  "description": [
    "調整袋鼠鼠教具的食物、日夜、飲水與尿濃縮，看24小時多通道水帳；完整雙語，明示合成參數與守恆。",
    "Adjust a kangaroo-rat toy meal, day/night, drinking and urine concentration. Explore a bilingual 24-hour water ledger with synthetic assumptions and explicit conservation."
  ],
  "controls": [
    {
      "key": "night",
      "label": [
        "活動時段（相同6小時）",
        "Active period (same 6 hours)"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "白天",
          "Day"
        ],
        [
          "夜間",
          "Night"
        ]
      ]
    },
    {
      "key": "food",
      "label": [
        "種子餐：教具份數",
        "Seed meal: toy portions"
      ],
      "min": 0,
      "max": 8,
      "step": 1,
      "value": 4,
      "unit": "份 / portions",
      "options": null
    },
    {
      "key": "conc",
      "label": [
        "尿濃縮：合成倍率",
        "Urine: toy concentration"
      ],
      "min": 1,
      "max": 4,
      "step": 1,
      "value": 3,
      "unit": "倍 / ×",
      "options": null
    },
    {
      "key": "drink",
      "label": [
        "另外喝水",
        "Additional drinking"
      ],
      "min": 0,
      "max": 4,
      "step": 0.5,
      "value": 0,
      "unit": "mL",
      "options": null
    }
  ],
  "limit": [
    "這是合成24小時水帳，所有mL、6小時活動、時間安排與濃縮倍率均為教具假設，未校準真袋鼠鼠，非餵養或腎功能測試。每份合成種子餐含0.2mL原有水，該餐營養氧化另產0.6mL水且需要氧；0餐只把這餐的兩路收入歸0，不代表真動物的儲能代謝停止。飲食與飲水在6個活動小時平均入帳；尿／糞與其他蒸發按全天分攤。尿的示例相同廢物負荷為0.6＋0.16×份數，濃縮只除以倍率，非真溶質測量；尿水永不0。日夜維持相同活動量，只改設定中的呼吸／蒸發負擔。圖中負差額是需從原有體內水補的缺口，不是負庫存、死亡或無限可用儲水；本模型未設初始庫存，無法預測能撑多久。正差額是體內增加帳，不代表無限儲存。2秒動畫只是24個教具時格，不是生理速度。NPS支持機制；1994原研究僅讀免費摘要，食物也可因吸濕與季節飲食含更多原有水，不能把全部收入叫代謝水。 補缺口與增加兩路只列全天淨差，不是各時段最低初始存水；逐時累計可能先負後正，沒有初始庫存，不能由全天盈餘說無需原有水。2畫面秒走24教具時格，逐步3格、完成重啟及示範時計同步；同值／夾限同值／語言模式／猜題／來源公式保留，1份英文單數。官方台灣Apple節目內搜尋到EP.236唯一單集1000775523120，再由官方單集網頁核對Firstory精確19:31、完整集名與官方封面。兩頁均顯示訂閱者限定；未測帳戶權益或真音訊。",
    "This synthetic 24-hour ledger uses invented mL rates, six active hours, timing and concentration factors. It is uncalibrated, not feeding advice or a kidney test. Each toy seed portion contains0.2mL water and its nutrient oxidation produces another0.6mL requiring oxygen. Zero meal removes only these meal-derived inputs, not real metabolism of stored reserves. Food and drinking enter evenly over six active hours; urine, fecal water and other evaporation are distributed across the day. Toy waste load0.6+0.16×portions is divided by concentration; it is not measured solute and urine water never vanishes. Day/night keeps activity amount equal and changes only assumed respiratory/evaporative burden. Negative change is the gap to be supplied from existing body water, not negative inventory, death or an unlimited reserve. No initial store is specified, so survival time is not predicted. Positive change is an accounting increase, not unlimited storage. The2s animation traces24 toy time slots, not physiology speed. NPS supports mechanisms; only the1994 study’s free abstract was read. Food may gain moisture in caches and seasonal diets vary; all input is not metabolic water. Draw/gain routes show only the full-day net gap/surplus, not minimum initial storage for every prefix. Hourly cumulative changes can turn negative then positive; no initial store is specified, so positive day net does not imply no existing water required.2display seconds trace24toy slots, Step3slots/namedrestart/demo clocks match. No-op/capped/language/mode/quiz/source/formula/layer inspection keep state;1food portion uses singular English. Official Taiwan Apple show search found unique EP.236 ID1000775523120. Its linked Firstory page confirms exact19:31, full title and matching official artwork. Both pages require membership; actual entitlement/audio are untested."
  ],
  "formula": "Synthetic units: mL; food F=0..8 toy portions, drink D=0..4mL\nFood water=0.2F; meal-derived metabolic water=0.6F (oxidation requires oxygen)\nSix active hours: day08..13 or night20..23,00..01; remaining18h at rest\nRespiration=0.6 +6×(day0.18 or night0.08)\nOther evaporation=day0.6 or night0.3\nSame toy waste load W=0.6+0.16F; urine water=W/C, C=1..4\nFecal water=0.08F\nI=D+0.2F+0.6F; O=respiration+evaporation+urine+feces\n24 hourly rows: meal and drink /6 in active slots; outputs /24 except active breathing /6\nDelta body water=I−O; I+max(−Delta,0)=O+max(Delta,0)\nNo initial body inventory; a deficit is a required draw, not a negative store.\nSankey stroke width=6px per mL, identical for all branches; zero branch has zero width.\nFull-day totals shown at every animation frame;2s animation is not physiology.\nThe draw/gain routes represent only full-day net deficit/surplus, not minimum initial storage for every prefix\nHourly prefixes may be negative even when full-day net positive; no initial inventory/survival forecast\n2display seconds/24toy hourly slots, Step3slots, completion restart/demo clocks match\nNo-op/cappedinvalid/language/mode/quiz/source/formula/layer choices preserve state; food1 uses singular portion",
  "formulaZh": "合成24小時水帳；mL、活動6h、濃縮倍率均未校準，非餵養／腎功能測試\n食物F＝0..8教具份；飲水D＝0..4mL；濃縮C＝1..4倍\n食物原有水＝0.2F；本餐營養氧化水＝0.6F（需要氧，不是原有水）\n白天08..13，或夜間20..23／00..01，各活動6h、其他18h休息\n呼吸＝0.6＋6×（白天0.18或夜間0.08）；其他蒸發＝白天0.6或夜間0.3\n相同廢物負荷W＝0.6＋0.16F；尿水＝W/C，仍>0；糞水＝0.08F\n全天收入I＝D＋0.2F＋0.6F；流失O＝呼吸＋蒸發＋尿＋糞\n全天淨變化Δ＝I−O；淨缺口補水＝max(−Δ,0)，淨增加＝max(Δ,0)\nI＋淨缺口補水＝O＋淨增加；這是全天淨差，非時段最低初始存水\n24小時逐列：收入在活動格/6，尿／糞／蒸發/24；呼吸基礎0.6/24加活動負擔\n逐列累計可先負後正；沒有初始庫存、不預測存活或負體內水量\n每路6px/mL相同比例，0路0寬；所有數字與水路是完整全天帳\n2畫面秒走24教具時格；逐步3格，完成明示重啟，非生理速度\n同值／夾限同值／空值／非有限值、語言／模式／猜題保留進度／卡／來源公式\n四層與重選只換強調及說明；提示按實際食物／日夜／濃縮給可行下一值"
};
