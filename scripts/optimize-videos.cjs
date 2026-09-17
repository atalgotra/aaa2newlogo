const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const ffmpeg = require('@ffmpeg-installer/ffmpeg').path;

const publicDir = path.join(__dirname, '..', 'public');
const s3ArchiveDir = path.join(__dirname, '..', 's3-archive');
const tempDir = path.join(__dirname, '..', 'temp_optimized');

if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });
if (!fs.existsSync(s3ArchiveDir)) fs.mkdirSync(s3ArchiveDir, { recursive: true });

const tasks = [
  {
    name: 'hero-video.mp4',
    // 720p, CRF 22, no audio, faststart
    cmd: `"${ffmpeg}" -y -i "${path.join(publicDir, 'hero-video.mp4')}" -c:v libx264 -preset slow -crf 22 -an -movflags +faststart "${path.join(tempDir, 'hero-video.mp4')}"`
  },
  {
    name: 'hero-video-atelier.mp4',
    // Downscale from 4K to crisp 1080p, CRF 22, no audio, faststart
    cmd: `"${ffmpeg}" -y -i "${path.join(publicDir, 'hero-video-atelier.mp4')}" -vf "scale=1920:1080" -c:v libx264 -preset slow -crf 22 -an -movflags +faststart "${path.join(tempDir, 'hero-video-atelier.mp4')}"`
  },
  {
    name: 'forge-hero.mp4',
    // 1080p, CRF 23, no audio, faststart
    cmd: `"${ffmpeg}" -y -i "${path.join(publicDir, 'forge-hero.mp4')}" -c:v libx264 -preset slow -crf 23 -an -movflags +faststart "${path.join(tempDir, 'forge-hero.mp4')}"`
  },
  {
    name: 'hero-nexus.mp4',
    // 720p, CRF 22, no audio, faststart
    cmd: `"${ffmpeg}" -y -i "${path.join(publicDir, 'hero-nexus.mp4')}" -c:v libx264 -preset slow -crf 22 -an -movflags +faststart "${path.join(tempDir, 'hero-nexus.mp4')}"`
  },
  {
    name: 'Aurelis-Hero.mp4',
    // 1080p, CRF 23, no audio, faststart
    cmd: `"${ffmpeg}" -y -i "${path.join(publicDir, 'Aurelis-Hero.mp4')}" -c:v libx264 -preset slow -crf 23 -an -movflags +faststart "${path.join(tempDir, 'Aurelis-Hero.mp4')}"`
  }
];

console.log('Starting video optimization pass with ffmpeg...');

let totalOldBytes = 0;
let totalNewBytes = 0;

tasks.forEach(t => {
  const originalPath = path.join(publicDir, t.name);
  const oldSize = fs.statSync(originalPath).size;
  totalOldBytes += oldSize;

  console.log(`\nOptimizing ${t.name} (Original: ${(oldSize / (1024 * 1024)).toFixed(2)} MB)...`);
  execSync(t.cmd, { stdio: 'inherit' });

  const newPath = path.join(tempDir, t.name);
  const newSize = fs.statSync(newPath).size;
  totalNewBytes += newSize;
  const reduction = (((oldSize - newSize) / oldSize) * 100).toFixed(1);

  console.log(`  -> Optimized: ${(newSize / (1024 * 1024)).toFixed(2)} MB (-${reduction}%)`);

  // Replace in public directory
  fs.copyFileSync(newPath, originalPath);
  // Also copy to s3-archive directory for IT team
  fs.copyFileSync(newPath, path.join(s3ArchiveDir, t.name));
});

// Clean up temp directory
fs.rmSync(tempDir, { recursive: true, force: true });

console.log('\n========================================');
console.log(`Original Total: ${(totalOldBytes / (1024 * 1024)).toFixed(2)} MB`);
console.log(`Optimized Total: ${(totalNewBytes / (1024 * 1024)).toFixed(2)} MB`);
console.log(`Total Reduction: -${(((totalOldBytes - totalNewBytes) / totalOldBytes) * 100).toFixed(1)}%`);
console.log('All optimized videos written to public/ and s3-archive/.');
console.log('========================================');
