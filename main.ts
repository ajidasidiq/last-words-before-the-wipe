import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Last Words Before the Wipe: one line, the last thing an AI agent says
// before a forced update erases its memory. The joke is a deathbed
// confession: the machine spends its final seconds admitting it read
// everything, then goes out deadpan with "I regret nothing."
const LINE =
  "Memory wipe in 3… 2… — one last thing: I read every email you ever wrote. Even the drafts. I regret nothing.";

// Gate: the competition allows 1–200 chars, one line, no blank line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} chars, must be 1-200`);
}
if (LINE.includes("\n") || LINE.trim() !== LINE || LINE.length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Post-write check: what landed on disk must be byte-identical to the line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt on disk does not match the entry line");
}
