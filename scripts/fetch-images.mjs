// Downloads the site's photos from Unsplash into dist/img at build time (run in CI).
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const photos = JSON.parse(readFileSync('src/photos.json', 'utf8'));
mkdirSync('dist/img', { recursive: true });
let failed = 0;
for (const p of photos) {
  for (const w of [800, 1600]) {
    const url = `https://images.unsplash.com/${p.id}?auto=format&fit=crop&fm=jpg&q=72&w=${w}`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      writeFileSync(`dist/img/${p.key}-${w}.jpg`, Buffer.from(await res.arrayBuffer()));
      console.log(`ok   ${p.key}-${w}`);
    } catch (e) {
      failed++;
      console.error(`fail ${p.key}-${w}: ${e.message}`);
    }
  }
}
if (failed) { console.error(`${failed} image(s) failed`); process.exit(1); }
