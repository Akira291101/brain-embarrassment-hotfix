import { writeFileSync } from 'node:fs';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const MESSAGE = 'Hotfix v36.1.2: brain no longer schedules a full embarrassment replay the moment the lights go out. Snoring remains a known issue.';

writeFileSync(`${OUTPUT_DIR}/entry.txt`, MESSAGE, { encoding: 'utf8' });
console.log(`Wrote ${MESSAGE.length} bytes to ${OUTPUT_DIR}/entry.txt`);
