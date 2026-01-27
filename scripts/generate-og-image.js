const sharp = require('sharp');
const path = require('path');

async function generateOGImage() {
  const width = 1200;
  const height = 630;

  // Brand colors
  const primaryBlue = '#0990db';
  const darkBlue = '#23233b';

  // Create gradient background with overlay for logo
  const svgBackground = `
    <svg width="${width}" height="${height}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${darkBlue};stop-opacity:1" />
          <stop offset="50%" style="stop-color:#1a2a4a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:${primaryBlue};stop-opacity:0.8" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>

      <!-- Decorative elements -->
      <circle cx="1100" cy="100" r="150" fill="${primaryBlue}" opacity="0.2"/>
      <circle cx="100" cy="530" r="120" fill="${primaryBlue}" opacity="0.15"/>

      <!-- Tagline -->
      <text x="600" y="480"
            font-family="Inter, system-ui, -apple-system, sans-serif"
            font-size="42"
            font-weight="500"
            fill="white"
            text-anchor="middle"
            opacity="0.95">
        Dam puls industriei
      </text>

      <!-- Subtitle -->
      <text x="600" y="540"
            font-family="Inter, system-ui, -apple-system, sans-serif"
            font-size="26"
            fill="white"
            text-anchor="middle"
            opacity="0.8">
        Distribuitor Echipamente Industriale Romania
      </text>
    </svg>
  `;

  // Load and resize logo
  const logoPath = path.join(__dirname, '../public/logo-header.png');
  const logo = await sharp(logoPath)
    .resize(500, null, { fit: 'inside' })
    .toBuffer();

  const logoMetadata = await sharp(logo).metadata();
  const logoX = Math.round((width - logoMetadata.width) / 2);
  const logoY = 120;

  // Composite background with logo
  await sharp(Buffer.from(svgBackground))
    .composite([
      {
        input: logo,
        top: logoY,
        left: logoX,
      }
    ])
    .jpeg({ quality: 85 })
    .toFile(path.join(__dirname, '../public/og-image.jpg'));

  console.log('OG image generated successfully: public/og-image.jpg');

  // Get file size
  const fs = require('fs');
  const stats = fs.statSync(path.join(__dirname, '../public/og-image.jpg'));
  console.log(`File size: ${(stats.size / 1024).toFixed(1)} KB`);
}

generateOGImage().catch(console.error);
