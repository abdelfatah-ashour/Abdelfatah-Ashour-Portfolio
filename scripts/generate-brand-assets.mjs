import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import opentype from 'opentype.js';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'public/static/brand');
const fontPath = '/tmp/brand-fonts/JetBrainsMono-SemiBold.ttf';
const bodyFontPath = '/tmp/brand-fonts/JetBrainsMono-Medium.ttf';

const ink = '#16181c';
const mist = '#f3f1ec';
const mistDeep = '#e4e1da';
const gold = '#8b8578';
const goldSoft = '#b5aea0';
const sage = '#2c323a';
const inkMuted = '#5a616c';
const skyMist = '#a8b0bc';

fs.mkdirSync(outDir, { recursive: true });

const font = opentype.parse(fs.readFileSync(fontPath).buffer);
const bodyFont = opentype.parse(fs.readFileSync(bodyFontPath).buffer);

function glyphPath(text, fontSize, activeFont = font) {
  let x = 0;
  const parts = [];
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const char of text) {
    const glyph = activeFont.charToGlyph(char);
    const path = glyph.getPath(x, 0, fontSize);
    const bbox = path.getBoundingBox();
    parts.push(path.toPathData(2));
    minX = Math.min(minX, bbox.x1);
    minY = Math.min(minY, bbox.y1);
    maxX = Math.max(maxX, bbox.x2);
    maxY = Math.max(maxY, bbox.y2);
    const advance = ((glyph.advanceWidth || 0) / activeFont.unitsPerEm) * fontSize;
    x += text === 'AA' ? advance * 0.86 : advance;
  }

  return {
    d: parts.join(' '),
    bbox: { x1: minX, y1: minY, x2: maxX, y2: maxY },
    width: maxX - minX,
    height: maxY - minY,
  };
}

function buildMonogramSvg({ size = 1024, transparent = false } = {}) {
  const k = size / 1024;
  const p = (x, y) => `${+(x * k).toFixed(2)} ${+(y * k).toFixed(2)}`;
  const stroke = +(size * 0.068).toFixed(2);
  const goldStroke = +(size * 0.022).toFixed(2);

  const bg = transparent
    ? ''
    : `<rect width="${size}" height="${size}" fill="${mist}"/>`;

  // Soft round arch — fuller, rounder crown
  const arch = [
    `M ${p(280, 740)}`,
    `C ${p(280, 460)} ${p(380, 260)} ${p(512, 260)}`,
    `C ${p(644, 260)} ${p(744, 460)} ${p(744, 740)}`,
  ].join(' ');

  // Clear brand-gold inner curve (gold + gold-soft tokens)
  const goldArch = [
    `M ${p(340, 700)}`,
    `C ${p(340, 500)} ${p(410, 330)} ${p(512, 330)}`,
    `C ${p(614, 330)} ${p(684, 500)} ${p(684, 700)}`,
  ].join(' ');

  const ks = size * 0.056;
  const kx = size * 0.5 - ks / 2;
  const ky = size * 0.715;
  const keyR = size * 0.012;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none">
  ${bg}
  <defs>
    <linearGradient id="markInk" x1="15%" y1="10%" x2="85%" y2="90%">
      <stop offset="0%" stop-color="${sage}"/>
      <stop offset="50%" stop-color="${ink}"/>
      <stop offset="100%" stop-color="${sage}"/>
    </linearGradient>
    <linearGradient id="goldLine" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="${goldSoft}"/>
      <stop offset="25%" stop-color="${gold}"/>
      <stop offset="50%" stop-color="${goldSoft}"/>
      <stop offset="75%" stop-color="${gold}"/>
      <stop offset="100%" stop-color="${goldSoft}"/>
    </linearGradient>
  </defs>

  <path d="${arch}" fill="none" stroke="url(#markInk)"
    stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="${goldArch}" fill="none" stroke="url(#goldLine)"
    stroke-width="${goldStroke}" stroke-linecap="round"/>

  <rect x="${+kx.toFixed(2)}" y="${+ky.toFixed(2)}"
    width="${+ks.toFixed(2)}" height="${+ks.toFixed(2)}"
    rx="${+keyR.toFixed(2)}" fill="${ink}"/>
</svg>`;
}

function buildOgSvg({ width = 1200, height = 630 } = {}) {
  const markSize = 200;
  const mark = buildMonogramSvg({ size: markSize, transparent: true })
    .replace(/<\?xml[^>]*>/, '')
    .replace(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${markSize}" height="${markSize}" viewBox="0 0 ${markSize} ${markSize}" fill="none">`,
      `<svg x="88" y="${(height - markSize) / 2}" width="${markSize}" height="${markSize}" viewBox="0 0 ${markSize} ${markSize}" fill="none">`,
    );

  const first = glyphPath('Abdelfatah', 44);
  const last = glyphPath('Ashour', 44);
  const role = glyphPath('Frontend Engineer', 22, bodyFont);
  const nameX = 320;
  const nameY = height / 2 - 28;
  const lastY = nameY + 56;
  const roleY = lastY + 48;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${mist}"/>
      <stop offset="48%" stop-color="${mistDeep}"/>
      <stop offset="100%" stop-color="${skyMist}" stop-opacity="0.45"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <circle cx="1100" cy="-20" r="240" fill="${goldSoft}" fill-opacity="0.16"/>
  <circle cx="60" cy="680" r="200" fill="${skyMist}" fill-opacity="0.2"/>
  ${mark}
  <g transform="translate(${nameX} ${nameY - first.bbox.y2})">
    <path d="${first.d}" fill="${ink}"/>
  </g>
  <g transform="translate(${nameX} ${lastY - last.bbox.y2})">
    <path d="${last.d}" fill="${sage}"/>
  </g>
  <rect x="${nameX}" y="${lastY + 14}" width="64" height="1.5" fill="${gold}" fill-opacity="0.75"/>
  <g transform="translate(${nameX} ${roleY - role.bbox.y2})">
    <path d="${role.d}" fill="${inkMuted}"/>
  </g>
</svg>`;
}

async function writePngFromSvg(svg, file, size) {
  const pipeline = sharp(Buffer.from(svg)).png({ compressionLevel: 9 });
  if (size) pipeline.resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } });
  await pipeline.toFile(path.join(outDir, file));
}

async function main() {
  const masterSvg = buildMonogramSvg({ size: 1024, transparent: false });
  const transparentSvg = buildMonogramSvg({ size: 1024, transparent: true });
  const ogSvg = buildOgSvg();

  fs.writeFileSync(path.join(outDir, 'logo.svg'), masterSvg);
  fs.writeFileSync(path.join(outDir, 'logo-mark.svg'), transparentSvg);

  await writePngFromSvg(masterSvg, 'logo.png');
  await writePngFromSvg(transparentSvg, 'logo-mark.png');

  const faviconSizes = [
    ['favicon-16x16.png', 16],
    ['favicon-32x32.png', 32],
    ['apple-touch-icon.png', 180],
    ['android-chrome-192x192.png', 192],
    ['android-chrome-512x512.png', 512],
    ['icon-192x192.png', 192],
    ['icon-256x256.png', 256],
    ['icon-384x384.png', 384],
    ['icon-512x512.png', 512],
  ];

  for (const [file, size] of faviconSizes) {
    await writePngFromSvg(masterSvg, file, size);
  }

  const ico16 = await sharp(Buffer.from(buildMonogramSvg({ size: 1024 })))
    .resize(16, 16)
    .png()
    .toBuffer();
  const ico32 = await sharp(Buffer.from(buildMonogramSvg({ size: 1024 })))
    .resize(32, 32)
    .png()
    .toBuffer();
  const ico48 = await sharp(Buffer.from(buildMonogramSvg({ size: 1024 })))
    .resize(48, 48)
    .png()
    .toBuffer();
  const ico = await pngToIco([ico16, ico32, ico48]);
  fs.writeFileSync(path.join(outDir, 'favicon.ico'), ico);

  await sharp(Buffer.from(ogSvg))
    .png({ compressionLevel: 9 })
    .toFile(path.join(outDir, 'og.png'));

  await sharp(Buffer.from(ogSvg))
    .png({ compressionLevel: 9 })
    .toFile(path.join(outDir, 'banner.png'));

  await sharp(Buffer.from(ogSvg))
    .png({ compressionLevel: 9 })
    .toFile(path.join(outDir, 'twitter.png'));

  const manifest = {
    name: 'Abdelfatah Ashour',
    short_name: 'Abdelfatah',
    description: 'Frontend Engineer portfolio',
    icons: [
      {
        src: '/static/brand/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/static/brand/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#f3f1ec',
    background_color: '#f3f1ec',
    display: 'standalone',
    start_url: '/',
  };
  fs.writeFileSync(
    path.join(outDir, 'site.webmanifest'),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );

  console.log('Brand assets written to', outDir);
  console.log(fs.readdirSync(outDir).sort().join('\n'));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
