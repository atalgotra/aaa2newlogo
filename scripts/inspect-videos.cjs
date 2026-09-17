const { execSync } = require('child_process');
const path = require('path');
const ffmpeg = require('@ffmpeg-installer/ffmpeg').path;

const files = [
  'hero-video.mp4',
  'hero-video-atelier.mp4',
  'forge-hero.mp4',
  'hero-nexus.mp4',
  'Aurelis-Hero.mp4'
];

files.forEach(f => {
  const filePath = path.join(__dirname, '..', 'public', f);
  try {
    execSync(`"${ffmpeg}" -i "${filePath}"`, { stdio: 'pipe' });
  } catch (err) {
    const out = (err.stderr || err.stdout || '').toString();
    console.log(`\n=== ${f} ===`);
    const duration = out.match(/Duration: [^,]+/);
    if (duration) console.log(' ', duration[0]);
    const streams = out.match(/Stream #0:.*$/gm) || [];
    streams.forEach(s => console.log(' ', s));
  }
});
