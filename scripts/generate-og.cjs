const sharp = require('sharp');
const fs = require('fs');

const svgBanner = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="60%" stop-color="#090d16" />
      <stop offset="100%" stop-color="#042f2e" />
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)" />

  <circle cx="1050" cy="150" r="300" fill="#0d9488" opacity="0.18" />
  <circle cx="150" cy="500" r="250" fill="#0284c7" opacity="0.15" />

  <text x="80" y="140" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="bold" fill="#2dd4bf" letter-spacing="2">AAPKA • THE HEALTH HUB</text>
  
  <text x="80" y="240" font-family="Georgia, serif" font-size="62" font-weight="bold" fill="#ffffff">India's Healthcare Access Platform</text>
  
  <text x="80" y="315" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#94a3b8">
    Connecting rural &amp; tribal communities to 240+ verified hospitals through 1,270+ Gram Mitras.
  </text>
  
  <text x="80" y="360" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="600" fill="#2dd4bf">
    Hospital Discovery • Emergency Pre-Coordination • Healthcare Navigation
  </text>

  <rect x="80" y="425" width="220" height="95" rx="16" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
  <text x="105" y="470" font-family="Georgia, serif" font-size="36" font-weight="bold" fill="#ffffff">1,270+</text>
  <text x="105" y="500" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="600" fill="#94a3b8">Gram Mitras on Ground</text>

  <rect x="325" y="425" width="220" height="95" rx="16" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
  <text x="350" y="470" font-family="Georgia, serif" font-size="36" font-weight="bold" fill="#ffffff">240+</text>
  <text x="350" y="500" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="600" fill="#94a3b8">Partner Hospitals</text>

  <rect x="570" y="425" width="220" height="95" rx="16" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
  <text x="595" y="470" font-family="Georgia, serif" font-size="36" font-weight="bold" fill="#ffffff">1,040+</text>
  <text x="595" y="500" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="600" fill="#94a3b8">Surgeries Assisted</text>

  <rect x="815" y="425" width="305" height="95" rx="16" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
  <text x="840" y="470" font-family="Georgia, serif" font-size="30" font-weight="bold" fill="#f59e0b">Sankalp Bharat</text>
  <text x="840" y="500" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="600" fill="#94a3b8">₹10 Lakh Innovation Award</text>

  <text x="80" y="585" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="bold" fill="#64748b">https://aapka.co.in • 201 Convention Centre, JNU New Delhi</text>
</svg>
`;

sharp(Buffer.from(svgBanner))
  .png()
  .toFile('public/og-image.png')
  .then(() => console.log('Successfully generated public/og-image.png'))
  .catch(err => console.error(err));
