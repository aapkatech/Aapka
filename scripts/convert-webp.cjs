const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      await convertDir(full);
    } else if (f.endsWith('.png') && !f.endsWith('.webp')) {
      const out = full.replace(/\.png$/, '.webp');
      try {
        await sharp(full).webp({ quality: 85 }).toFile(out);
        console.log(`Converted ${f} to webp`);
      } catch (err) {
        console.error(`Error converting ${f}:`, err.message);
      }
    }
  }
}

convertDir('public').then(() => console.log('All images converted to WebP'));
