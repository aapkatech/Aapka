import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

async function run() {
  console.log('Starting background removal with Blob / file URL...');
  const inputPath = path.resolve('public/hero-family.webp');
  const outputPath = path.resolve('public/hero-family-cutout.png');
  
  try {
    const fileUrl = pathToFileURL(inputPath).href;
    console.log('Input URL:', fileUrl);
    const blob = await removeBackground(fileUrl);
    const buffer = Buffer.from(await blob.arrayBuffer());
    fs.writeFileSync(outputPath, buffer);
    console.log(`Success! Saved cutout to ${outputPath} (${buffer.length} bytes)`);
  } catch (err) {
    console.error('Error with fileUrl, trying Blob directly:', err);
    try {
      const fileBuffer = fs.readFileSync(inputPath);
      const inputBlob = new Blob([fileBuffer], { type: 'image/webp' });
      const blob2 = await removeBackground(inputBlob);
      const buffer2 = Buffer.from(await blob2.arrayBuffer());
      fs.writeFileSync(outputPath, buffer2);
      console.log(`Success with Blob! Saved cutout to ${outputPath} (${buffer2.length} bytes)`);
    } catch (err2) {
      console.error('Failed with Blob too:', err2);
      process.exit(1);
    }
  }
}

run();
