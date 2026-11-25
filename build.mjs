import * as esbuild from 'esbuild';
import { cpSync, mkdirSync, rmSync } from 'node:fs';

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
  await esbuild.build(options);
}
