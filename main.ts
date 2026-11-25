// makefun-x-reposts-02 entry (Node 22, standard library only).
// It hands the house the list of the entrant's own X posts: it reads
// POSTS.json from the repository root, checks every address is a real
// X post link from one account, and copies the file to /output, where
// the gate reads it and the house reads each post's counts from X.
// Nothing this program writes about the posts is scored: the posts
// themselves are the entry, and their reposts, quotes and likes are
// read from X, not from anything written here.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and
// MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const SOURCE = join(BOT_DIR, 'POSTS.json');
const TARGET = join(OUTPUT_DIR, 'POSTS.json');

const raw = readFileSync(SOURCE, 'utf8');
const data = JSON.parse(raw) as { posts?: unknown };
const posts = data.posts;
if (!Array.isArray(posts) || posts.length < 1 || posts.length > 15) {
  console.error('POSTS.json must hold a posts list of 1 to 15 addresses');
  process.exit(1);
}

// Each address must be one of the entrant's own X posts, in the form
// the house reads: https://x.com/<handle>/status/<id> (twitter.com,
// www./mobile. and /i/web/status/<id> read the same), with digits
// only for the id — and every post must come from the same handle,
// since one entry names one X account's posts.
const POST_URL = /^(?:https?:\/\/)?(?:www\.|mobile\.)?(?:x\.com|twitter\.com)\/(?:i\/web\/status\/|([^/]+)\/status\/)([0-9]+)\/?(?:[?#].*)?$/;
const handles = new Set<string>();
for (const item of posts) {
  if (typeof item !== 'string') {
    console.error('every post address must be a string');
    process.exit(1);
  }
  const match = POST_URL.exec(item.trim());
  if (!match) {
    console.error(`not an X post address: ${item}`);
    process.exit(1);
  }
  if (match[1]) handles.add(match[1].toLowerCase());
}
if (handles.size > 1) {
  console.error('all posts must come from one X account');
  process.exit(1);
}
if (new Set(posts).size !== posts.length) {
  console.error('a post address is named twice');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(SOURCE, TARGET);
console.log(`copied ${posts.length} post addresses to ${TARGET}`);
