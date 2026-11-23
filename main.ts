import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "Hotfix v36.1.2: brain no longer schedules a full embarrassment replay the moment the lights go out. Snoring remains a known issue.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${line}\n`, "utf8");
