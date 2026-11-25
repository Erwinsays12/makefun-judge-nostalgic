// makefun-judge-nostalgic — entry for
// "Make the AI Judge Feel Nostalgic: A Childhood Memory"
// (u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
//
// The program writes a single sentence, at most 280 characters, recalling
// a childhood memory to /output/entry.txt. The text is a fixed, original
// sentence: deterministic, no clock, no network, no randomness, so both
// grading runs produce byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

// One sentence. Concrete place (the back steps), time (August evenings),
// sensation (rice steaming through the screen door), one small honest
// detail (grandmother's off-key humming while shelling peas), and a warm
// ache that lingers (the narrator still listens for it).
const SENTENCE =
  "On August evenings my grandmother shelled peas on the back steps while rice steamed through the screen door, and I still listen for her off-key humming every time a pot boils.";

// The gate requires 1 to 280 characters; fail loudly instead of writing
// an invalid entry.
if (SENTENCE.length < 1 || SENTENCE.length > 280) {
  throw new Error(`entry is ${SENTENCE.length} characters, must be 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
