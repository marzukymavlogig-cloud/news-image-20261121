# news-image-20261121

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/marzukymavlogig-cloud/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/marzukymavlogig-cloud/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

A newspaper-front poster — **"THE WORLD."** — that sums up Saturday 21 November 2026
in one 1024×1024 image.

The lead story is the "triple-tap" on Kryvyi Rih: two Russian ballistic missiles
hit a restaurant parking lot on Friday night, then jet-powered drones struck the
rescue workers who rushed in — a seven-year-old boy and a 20-year-old paramedic
killed, nearly 60 people wounded, in Volodymyr Zelenskyy's hometown, on
Children's Day. Around it: Mexican special forces capturing "El Chapo Isidro",
one of the FBI's ten most wanted fugitives, in Sinaloa; a magnitude 6.7
earthquake shaking Peru's Andes with no deaths reported; the COP31 climate talks
in Antalya running into overtime over a draft that drops every mention of fossil
fuels; and Denmark expelling Russia's defence attaché over a foiled plot to
assassinate the rapper Kyivstoner. Plus a day-in-brief ticker (the Russian cargo
ship Sparta II ablaze in the Baltic, the EU–Indonesia deal after ten years of
talks, dengue-cutting mosquitoes in Brazil, and Vance breaking with Trump on
Iran). Every fact was checked against live news reporting (CNN, Reuters,
Associated Press, AFP, USGS, The Wall Street Journal) on the day.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) validates `entry.png` — PNG magic
bytes and IHDR chunk, at most 1 MiB and at most 1024×1024 pixels — and copies
it to `$MAKEFUN_OUTPUT_DIR/entry.png`, printing the destination, dimensions
and size.

---

<sub>Entered on [make.fun](https://make.fun/?ref=gentle-beacon-34&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards</sub>
