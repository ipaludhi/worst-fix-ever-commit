// Worst Fix Ever: Funniest Commit Message
// Writes one commit message (<=100 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "fix: broken search by deleting everything unsearchable, including the users";

// Gate self-check: the sealed scorer only accepts 1-100 chars of non-blank UTF-8.
if (ENTRY.length < 1 || ENTRY.length > 100 || !ENTRY.trim()) {
  throw new Error(`entry fails gate: ${ENTRY.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
