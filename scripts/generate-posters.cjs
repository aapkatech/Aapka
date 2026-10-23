const sharp = require('sharp');
const path = require('path');

const posters = [
  {
    filename: 'ramesh-kumar-cataract.webp',
    name: 'Ramesh Kumar',
    location: 'Gaya, Bihar',
    treatment: 'Cataract Surgery • Ayushman Bharat',
    saving: 'Saved ₹18,500',
    quote: '"Aapka escorted me directly to the partner hospital with zero paperwork hassle."'
  },
  {
    filename: 'sunita-devi-maternal.webp',
    name: 'Sunita Devi',
    location: 'Sitapur, Uttar Pradesh',
    treatment: 'Emergency Maternity Care',
    saving: 'Immediate 2 AM Response',
    quote: '"Our village Gram Mitra Sarita arranged transport and admission in 20 minutes."'
  },
  {
    filename: 'rajeshwar-yadav-cardiac.webp',
    name: 'Rajeshwar Yadav',
    location: 'Rewa, Madhya Pradesh',
    treatment: 'Cardiac Stenting Procedure',
    saving: 'Saved ₹68,000 (42% Lower)',
    quote: '"Pre-negotiated hospital tariff saved our family farmland from being mortgaged."'
  }
];

async function generate() {
  for (const item of posters) {
    const svg = `
    <svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f172a" />
          <stop offset="60%" stop-color="#1e293b" />
          <stop offset="100%" stop-color="#042f2e" />
        </linearGradient>
      </defs>
      
      <rect width="1280" height="720" fill="url(#bgGrad)" />
      
      <!-- Decorative circles -->
      <circle cx="1150" cy="180" r="280" fill="#0d9488" opacity="0.22" />
      <circle cx="120" cy="600" r="220" fill="#0284c7" opacity="0.18" />

      <!-- Top Badge -->
      <rect x="80" y="70" width="220" height="38" rx="8" fill="#134e4a" stroke="#2dd4bf" stroke-width="1.5" />
      <text x="100" y="94" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#5eead4" letter-spacing="1">PATIENT STORY</text>

      <!-- Center Play Icon Placeholder -->
      <circle cx="640" cy="330" r="54" fill="#0f766e" opacity="0.85" />
      <polygon points="632,310 658,330 632,350" fill="#ffffff" />

      <!-- Name & Location -->
      <text x="80" y="470" font-family="Georgia, serif" font-size="46" font-weight="bold" fill="#ffffff">${item.name}</text>
      <text x="80" y="515" font-family="Arial, sans-serif" font-size="22" font-weight="600" fill="#2dd4bf">${item.location} • ${item.treatment}</text>

      <!-- Quote -->
      <text x="80" y="575" font-family="Georgia, serif" font-size="22" font-style="italic" fill="#cbd5e1">${item.quote}</text>

      <!-- Bottom Tag -->
      <rect x="80" y="620" width="260" height="42" rx="8" fill="#047857" />
      <text x="100" y="647" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">${item.saving}</text>
      <text x="360" y="647" font-family="Arial, sans-serif" font-size="15" fill="#94a3b8">SP Rural India Services • Verified Ground Case</text>
    </svg>
    `;

    const outPath = path.join(__dirname, '../public/video-posters', item.filename);
    await sharp(Buffer.from(svg)).webp({ quality: 90 }).toFile(outPath);
    console.log(`Generated: ${outPath}`);
  }
}

generate().catch(console.error);
