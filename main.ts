// Angry Judge: The Short Rant Contest — entry program.
// Writes one short, funny rant (1 to 400 characters) to /output/entry.txt.
// Node standard library only. Deterministic: fixed text, no randomness,
// no network, no clock. One sentence per line so each line stands alone.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCES: string[] = [
  "I walked in for one bag of rice.",
  "Just one bag.",
  "The self-checkout shrieked UNEXPECTED ITEM IN THE BAGGING AREA like I had smuggled a grand piano through customs.",
  "A bored teenager wandered over, tapped one button, and left without a word.",
  "It trusts a stranger with a keycard more than me, a man holding rice.",
  "I am not a criminal.",
  "I am a customer.",
  "I will never forgive that robot. Neither should you.",
];

const text = SENTENCES.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
