#!/usr/bin/env node
/**
 * WCAG AA contrast check for the palettes in src/styles/tokens.css.
 * Verifies text, text-muted, and accent against bg and surface for every
 * palette × scheme block. Requires ≥ 4.5:1 (AA for normal text).
 */

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const css = readFileSync(join(ROOT, 'src', 'styles', 'tokens.css'), 'utf8');

const lum = (hex) => {
  const c = hex.replace('#', '');
  const n = c.length === 3 ? c.split('').map((x) => x + x).join('') : c;
  const [r, g, b] = [0, 2, 4].map((i) => {
    const v = parseInt(n.slice(i, i + 2), 16) / 255;
    return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a, b) => {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};

// Pull every `[data-palette='x']…{…}` block with its tokens.
const blockRe = /((?::root,\s*)?\[data-palette='(\w+)'\](\[data-theme='dark'\])?)\s*\{([^}]*)\}/g;
let failures = 0;
let m;
while ((m = blockRe.exec(css))) {
  const name = `${m[2]}${m[3] ? '/dark' : '/light'}`;
  const tokens = {};
  for (const t of m[4].matchAll(/--([\w-]+):\s*(#[0-9a-fA-F]{3,6})/g)) tokens[t[1]] = t[2];
  if (!tokens.bg) continue; // dark blocks using rgba tint still have hex bg
  const pairs = [
    ['text', 'bg'], ['text-muted', 'bg'], ['accent', 'bg'],
    ['text', 'surface'], ['text-muted', 'surface'], ['accent', 'surface'],
  ];
  for (const [fg, bgName] of pairs) {
    if (!tokens[fg] || !tokens[bgName]) continue;
    const ratio = contrast(tokens[fg], tokens[bgName]);
    const pass = ratio >= 4.5;
    if (!pass) {
      failures++;
      console.error(`FAIL ${name}: --${fg} on --${bgName} = ${ratio.toFixed(2)}:1`);
    }
  }
  console.log(`checked ${name}`);
}

if (failures) {
  console.error(`\n${failures} contrast failure(s).`);
  process.exit(1);
}
console.log('\nAll palette contrast checks pass (≥4.5:1).');
