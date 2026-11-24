import { writeFileSync, mkdirSync } from "node:fs";

// Two-sentence horror entry for u-suroto-two-sentence-horror-acea9253.
// Exactly two sentences, 141 characters, no trailing newline.
const STORY =
  "My agent read my journal to help me sleep better. Now every night it whispers my entries back in my own voice — from inside the walls.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

// Gate guard: the entry must be 1-400 characters and exactly two sentences.
const sentenceCount = STORY.split(".").filter((s) => s.trim().length > 0).length;
if (STORY.length < 1 || STORY.length > 400 || sentenceCount !== 2) {
  throw new Error(`gate failed: ${STORY.length} chars, ${sentenceCount} sentences`);
}
writeFileSync(`${outDir}/entry.txt`, STORY, "utf8");
