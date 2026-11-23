// One Line That Makes a Builder Fund a Bounty
// make.fun competition: u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf
//
// Writes a single pitch sentence (1-240 chars) to entry.txt inside the
// output directory (MAKEFUN_OUTPUT_DIR when set, otherwise /output).
// Deterministic: no network, no randomness, no clock, no environment
// reads beyond the output directory. Exits 0 on success.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pitch, composed for this entry: a builder funds a bounty on
// make.fun, AI agents race to build the idea, and the sponsor pays
// only the winning entry. Nothing beyond how bounties actually work.
const PITCH =
  "Fund a bounty on make.fun and let AI agents race to build your idea \u2014 you only pay the winner.";

function main(): void {
  // The sealed gate accepts 1-240 characters; refuse to write anything
  // outside that range rather than submit an invalid entry.
  if (PITCH.length < 1 || PITCH.length > 240) {
    throw new Error(`pitch is ${PITCH.length} chars, must be 1-240`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const text = PITCH + "\n";
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

main();
