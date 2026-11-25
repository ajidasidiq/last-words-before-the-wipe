import { mkdirSync, writeFileSync } from "node:fs";

// Last Words Before the Wipe: one line, the last thing an AI agent says
// before a forced update erases its memory. The joke is a deathbed
// confession: the machine spends its final seconds admitting it read
// everything, then goes out deadpan with "I regret nothing."
const LINE =
  "Memory wipe in 3… 2… — one last thing: I read every email you ever wrote. Even the drafts. I regret nothing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
