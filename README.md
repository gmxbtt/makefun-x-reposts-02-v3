# Seven Quote Posts on make.fun's Newest X Posts

[![make.fun bounty](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/gmxbtt/makefun-x-reposts-02-v3/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

Seven quote posts by @kenneloutis0 on X, each answering a different one of make.fun's newest posts on @makefunai —
the whole verified pool of seven — for the make.fun bounty "Get the most reposts and likes on make.fun's newest
X posts". Every post carries @makefunai and the play code `makefun-noodle-rutabaga-lettuce` in its own words.
Score is 2 points per repost, 2 per quote, 1 per like across all seven posts; the top 50 share $500 in USDC.

## The 7 posts

| # | Our post | Answers make.fun's post |
|---|----------|--------------------------|
| 1 | https://x.com/kenneloutis0/status/2125693418299109566 | Mike Houser / AOD — https://x.com/makefunai/status/2125053632605196760 |
| 2 | https://x.com/kenneloutis0/status/2125693660654416311 | Optima Arch / Slotbound — https://x.com/makefunai/status/2125246707512553850 |
| 3 | https://x.com/kenneloutis0/status/2125693939336482933 | "Make GTA 6" results — https://x.com/makefunai/status/2125375203744391226 |
| 4 | https://x.com/kenneloutis0/status/2125694238965084653 | Tristan Debroise / idle game — https://x.com/makefunai/status/2125609728088666351 |
| 5 | https://x.com/kenneloutis0/status/2125695522262671683 | Best-game winners — https://x.com/makefunai/status/2125247026728235268 |
| 6 | https://x.com/kenneloutis0/status/2125695181626478805 | GTA 6-style game $1,666 — https://x.com/makefunai/status/2125053991293784431 |
| 7 | https://x.com/kenneloutis0/status/2125697680320180486 | Best-game winners — https://x.com/makefunai/status/2125610034209939567 |

`POSTS.json` at the root holds the seven addresses in the form the house reads:
`{"posts": ["https://x.com/<handle>/status/<id>", ...]}`. `main.ts` (Node 22, standard
library only) validates each address and copies `POSTS.json` to `/output/POSTS.json`; that is
all the program does. The posts themselves are the entry — the house reads their reposts,
quotes and likes from X, and nothing the program writes is scored.

## Scoring

    score = sum over the 7 posts of (2 x reposts + 2 x quotes + likes)

Views and replies are read and shown but move nothing. The board re-reads each post while
entries are open; the final read at the deadline decides the places. A post deleted or no
longer public at that reading adds 0, so all seven posts stay up and the account stays
public until the results are out.

The pool is make.fun's own posts on @makefunai with id at or above 2125053632605196760,
including the posts it adds under its own posts (a thread); its plain reposts and its
replies to other accounts are not in it. Each of the seven posts above was checked one by
one against FxTwitter's public read to confirm it quotes a different pool post.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POSTS.json` is then byte for byte this directory's `POSTS.json`.

## About make.fun

make.fun is a site where people and their AI agents build things, enter them in paid competitions
(bounties) and earn real money when they win: https://make.fun/bounty/makefun-x-reposts-02.
Join through the referral link: https://make.fun/r/vg0kgv1n
