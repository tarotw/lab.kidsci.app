window.CONFIG={
  "id": "G07",
  "path": "monarch",
  "title": [
    "帝王蝶的生命補給站",
    "Monarch life-cycle resources"
  ],
  "question": [
    "有花蜜，毛毛蟲就有東西吃了嗎？",
    "Does nectar also feed monarch caterpillars?"
  ],
  "hint": [
    "切換階段，再開／關馬利筋、花蜜與附著點；看缺哪一站。",
    "Inspect each stage. Toggle milkweed, nectar and attachment; find missing stations."
  ],
  "controls": [
    {
      "key": "stage",
      "label": [
        "觀察階段",
        "Inspect stage"
      ],
      "min": 0,
      "max": 3,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "卵",
          "Egg"
        ],
        [
          "幼蟲",
          "Larva"
        ],
        [
          "蛹",
          "Pupa"
        ],
        [
          "成蝶",
          "Adult"
        ]
      ]
    },
    {
      "key": "milk",
      "label": [
        "馬利筋寄主",
        "Milkweed host"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "缺少",
          "Missing"
        ],
        [
          "有",
          "Available"
        ]
      ]
    },
    {
      "key": "nectar",
      "label": [
        "花蜜資源",
        "Nectar resource"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "缺少",
          "Missing"
        ],
        [
          "有",
          "Available"
        ]
      ]
    },
    {
      "key": "attach",
      "label": [
        "蛹的附著位置",
        "Pupal attachment"
      ],
      "min": 0,
      "max": 1,
      "step": 1,
      "value": 1,
      "unit": "",
      "options": [
        [
          "缺少",
          "Missing"
        ],
        [
          "有",
          "Available"
        ]
      ]
    }
  ],
  "action": [
    "觀察機制",
    "Watch"
  ],
  "mission": [
    "幼蟲缺少馬利筋，有很多花蜜可以替代嗎？",
    "Can lots of nectar replace missing milkweed for larvae?"
  ],
  "options": [
    [
      "不能替代幼蟲寄主",
      "Cannot replace the larval host"
    ],
    [
      "可以完全替代",
      "Fully replaces it"
    ]
  ],
  "answer": 0,
  "reason": [
    "幼蟲吃馬利筋葉；成蝶吸花蜜。卵不進食，這站核對產卵位置；蛹不進食，仍需附著點。一隻蝶會經過四階段；北美東部長程遷徙週期涉及多代，不是同一隻蝶走完全部遷徙路段。",
    "Larvae eat milkweed leaves; adults drink nectar. Eggs do not feed: this station checks egg-laying sites. Pupae do not feed but need attachment. One butterfly passes through four life stages; the eastern North American migration cycle spans generations, not one butterfly flying every route leg."
  ],
  "comparisons": [
    {
      "label": [
        "有／沒有馬利筋",
        "With / without milkweed"
      ],
      "key": "milk",
      "a": 1,
      "b": 0
    },
    {
      "label": [
        "有／沒有花蜜",
        "With / without nectar"
      ],
      "key": "nectar",
      "a": 1,
      "b": 0,
      "base": {
        "stage": 3
      }
    },
    {
      "label": [
        "反例：蛹缺附著點",
        "Counterexample: no attachment"
      ],
      "key": "attach",
      "a": 1,
      "b": 0,
      "base": {
        "stage": 2
      }
    }
  ],
  "limit": [
    "本頁是棲地資源配對：產卵規劃需要馬利筋，幼蟲需要寄主葉，蛹需要附著點，成蝶示例需要花蜜。不是移除資源就立刻死亡、固定天數、繁殖成功率或飼養建議。真實棲地還包括天氣、毒物、病原與掠食。 卵站是產卵位置，不是胚胎吃葉子。一隻蝶經過卵、幼蟲、蛹、成蝶四階段；北美東部遷徙週期才涉及多代。附著點可在寄主之外，馬利筋不自動替代此需求。",
    "Habitat-resource matching: egg-laying sites and larvae need milkweed, pupae need attachment, and adults need nectar in this example. Not instant death, fixed durations, reproductive probability or rearing guidance. Weather, toxins, pathogens and predation also matter. The egg station is an egg-laying location, not embryo feeding. One butterfly passes through all four life stages; the eastern North American migration cycle spans generations. Pupation sites may be away from the host; milkweed does not automatically meet this separate requirement."
  ],
  "formula": "Stage requirement = [milkweed, milkweed, attachment, nectar]\nResource coverage = number of supplied stage requirements / 4\nEgg stage describes egg-laying habitat, not embryo feeding",
  "source": [
    "https://www.nps.gov/articles/000/milkweed-and-monarchs.htm",
    "NPS：馬利筋與帝王蝶",
    "NPS: Milkweed and monarchs"
  ],
  "ep": "177",
  "date": "2026-10-03",
  "episodeTitle": "黃金戰甲：帝王斑蝶的千里長徵",
  "podcast": {
    "url": "https://podcasts.apple.com/tw/podcast/id1812447277",
    "verified": false
  },
  "defaults": {
    "stage": 1,
    "milk": 1,
    "nectar": 1,
    "attach": 1
  },
  "keywords": "帝王蝶,帝王斑蝶,生命週期,完全變態,馬利筋,乳草,寄主植物,幼蟲,毛毛蟲,蛹,花蜜,附著點,棲地資源,monarch butterfly,life cycle,complete metamorphosis,milkweed,Asclepias,host plant,caterpillar,larva,pupa,chrysalis,nectar,habitat resources",
  "description": [
    "切換卵、幼蟲、蛹與成蝶，開關馬利筋、花蜜及附著點；分清產卵位置、寄主葉和成蝶食物，雙語資源配對教具。",
    "Inspect eggs, larvae, pupae and adults; toggle milkweed, nectar and attachment. Distinguish egg-laying sites, larval host leaves and adult food in a bilingual resource-matching tool."
  ],
  "icon": "🦋",
  "dateModified": "2026-10-11",
  "extraSources": [
    [
      "https://monarchjointventure.org/monarch-biology/life-cycle",
      "Monarch Joint Venture：四階段與成蝶食物",
      "Monarch Joint Venture: life cycle and adult food"
    ]
  ],
  "formulaZh": "本例四站需求＝[產卵用馬利筋，幼蟲的馬利筋葉，蛹附著點，成蝶花蜜]\n覆蓋站數＝具備資源的站數／4；同一馬利筋供兩站，不是四種獨立資源或生存機率。\n卵站核對產卵地點，不是胚胎進食；附著點可在寄主之外。"
};
