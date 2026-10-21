import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1c1917" />
      <stop offset="40%" stop-color="#292524" />
      <stop offset="100%" stop-color="#0c0a09" />
    </linearGradient>

    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="50%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#b45309" />
    </linearGradient>

    <linearGradient id="emerald" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>

    <linearGradient id="cardBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.02" />
    </linearGradient>

    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)" />

  <!-- Decorative Golden Ambient Orbs -->
  <circle cx="100" cy="80" r="240" fill="#f59e0b" fill-opacity="0.12" filter="blur(80px)" />
  <circle cx="1100" cy="520" r="280" fill="#10b981" fill-opacity="0.10" filter="blur(90px)" />
  <circle cx="600" cy="300" r="300" fill="#d97706" fill-opacity="0.06" filter="blur(100px)" />

  <!-- Outer Border Frame -->
  <rect x="24" y="24" width="1152" height="582" rx="28" fill="none" stroke="#f59e0b" stroke-opacity="0.35" stroke-width="2" />
  <rect x="34" y="34" width="1132" height="562" rx="20" fill="none" stroke="#ffffff" stroke-opacity="0.06" stroke-width="1" />

  <!-- Top Header Tag -->
  <g transform="translate(60, 60)">
    <rect width="360" height="42" rx="21" fill="url(#emerald)" filter="url(#shadow)" />
    <text x="180" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="1">
      ★ BEST RICE STORE IN INDIA ★
    </text>
  </g>

  <!-- Mandi Rates Live Badge -->
  <g transform="translate(850, 60)">
    <rect width="290" height="42" rx="21" fill="#ffffff" fill-opacity="0.1" stroke="#f59e0b" stroke-opacity="0.5" stroke-width="1.5" />
    <circle cx="25" cy="21" r="6" fill="#10b981" />
    <text x="42" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700" fill="#fef08a">
      DAILY MANDI WHOLESALE
    </text>
  </g>

  <!-- Bengali Title -->
  <text x="60" y="175" font-family="'Noto Sans Bengali', system-ui, sans-serif" font-size="52" font-weight="900" fill="#ffffff" letter-spacing="1">
    গোপাল চাল ভাণ্ডার
  </text>

  <!-- English Title -->
  <text x="60" y="235" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="900" fill="url(#gold)" letter-spacing="2">
    GOPAL CHAL BHANDAR
  </text>

  <!-- Subtitle -->
  <text x="60" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="500" fill="#e7e5e4">
    Wholesale &amp; Retail Rice Merchant • Kalna RMC Market, West Bengal
  </text>

  <!-- Feature Grid Cards -->
  <g transform="translate(60, 320)">
    <!-- Card 1: Varieties -->
    <rect x="0" y="0" width="345" height="135" rx="16" fill="url(#cardBg)" stroke="#ffffff" stroke-opacity="0.12" stroke-width="1" />
    <text x="24" y="38" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#f59e0b" letter-spacing="1">
      POPULAR VARIETIES
    </text>
    <text x="24" y="70" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#ffffff">
      Ratnadeep Minikit • Basmati
    </text>
    <text x="24" y="96" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#e7e5e4">
      Gobindobhog • Dudheswar
    </text>
    <text x="24" y="118" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="#a8a29e">
      26kg &amp; 50kg Bags at Best Rates
    </text>

    <!-- Card 2: Services -->
    <rect x="365" y="0" width="345" height="135" rx="16" fill="url(#cardBg)" stroke="#ffffff" stroke-opacity="0.12" stroke-width="1" />
    <text x="389" y="38" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#10b981" letter-spacing="1">
      SERVICES &amp; ORDERS
    </text>
    <text x="389" y="70" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#ffffff">
      Wedding &amp; Event Bulk Orders
    </text>
    <text x="389" y="96" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#e7e5e4">
      Free Home &amp; Store Delivery
    </text>
    <text x="389" y="118" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="#a8a29e">
      Authentic Kalna Mandi Quality
    </text>

    <!-- Card 3: Contact -->
    <rect x="730" y="0" width="350" height="135" rx="16" fill="url(#cardBg)" stroke="#f59e0b" stroke-opacity="0.3" stroke-width="1.5" />
    <text x="754" y="38" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#fef08a" letter-spacing="1">
      CALL / WHATSAPP ORDER
    </text>
    <text x="754" y="74" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#ffffff">
      +91 81456 25847
    </text>
    <text x="754" y="102" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#d6d3d1">
      Alt: +91 94747 52140
    </text>
    <text x="754" y="122" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="#10b981">
      ● Open 6:00 AM - 9:30 PM Daily
    </text>
  </g>

  <!-- Bottom Bar: URL & Location -->
  <g transform="translate(60, 485)">
    <rect width="1080" height="75" rx="16" fill="#000000" fill-opacity="0.45" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1" />
    <g transform="translate(25, 26)">
      <circle cx="12" cy="12" r="12" fill="#f59e0b" />
      <text x="12" y="17" font-family="system-ui, sans-serif" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">📍</text>
      <text x="36" y="16" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#e7e5e4">
        Kalna RMC Market, Near Bholebaba Restaurant &amp; Kundu Shop, Kalna, WB - 713409
      </text>
    </g>
    <g transform="translate(810, 26)">
      <text x="245" y="16" font-family="system-ui, monospace" font-size="15" font-weight="700" fill="#fef08a" text-anchor="end">
        gopal-chal-bhandar.pntr.dev
      </text>
    </g>
  </g>
</svg>
`;

async function generate() {
  const svgBuffer = Buffer.from(svg);
  
  // Create /public/og-image.jpg
  await sharp(svgBuffer)
    .jpeg({ quality: 90 })
    .toFile(path.resolve('./public/og-image.jpg'));
    
  // Create /public/og-image.png
  await sharp(svgBuffer)
    .png()
    .toFile(path.resolve('./public/og-image.png'));

  // Also save the SVG
  fs.writeFileSync(path.resolve('./public/og-image.svg'), svg.trim());

  console.log('Successfully generated og-image.jpg, og-image.png, and og-image.svg in /public');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
