import * as esbuild from 'esbuild';
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';

const serve = process.argv.includes('--serve');
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
cpSync('public', 'dist', { recursive: true });

const options = {
  entryPoints: ['src/main.tsx'],
  bundle: true,
  minify: !serve,
  sourcemap: serve,
  format: 'esm',
  target: ['es2020'],
  outdir: 'dist/assets',
  entryNames: serve ? '[name]' : '[name]-[hash]',
  metafile: true,
  loader: { '.css': 'css' },
  define: { 'process.env.NODE_ENV': serve ? '"development"' : '"production"' },
  logLevel: 'info',
};

if (serve) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  const { port } = await ctx.serve({ servedir: 'dist', port: 5173 });
  console.log(`MallO site on http://localhost:${port}`);
} else {
  // Hashed file names, so browsers always fetch the newest version after a deploy.
  const result = await esbuild.build(options);
  const out = Object.keys(result.metafile.outputs).map((f) => f.replace(/^dist\//, ''));
  const js = out.find((f) => f.endsWith('.js'));
  const css = out.find((f) => f.endsWith('.css'));
  const html = readFileSync('dist/index.html', 'utf8').replace('assets/main.js', js).replace('assets/main.css', css);
  writeFileSync('dist/index.html', html);
}
