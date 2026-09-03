import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const PORT = 5199;

const routes = [
  '/',
  '/capabilities',
  '/capabilities/sourcing',
  '/capabilities/design',
  '/capabilities/manufacturing',
  '/capabilities/quality-control-compliance',
  '/capabilities/logistics',
  '/capabilities/warehousing',
  '/capabilities/tech',
  '/products',
  '/ethical-sourcing',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
];

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.ico': 'image/x-icon',
};

// 1. Start a local static HTTP server serving the dist directory with in-memory template fallback
function createStaticServer(templateHtml) {
  return http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    let filePath = path.join(DIST_DIR, reqPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(filePath).pipe(res);
    } else {
      // In-memory clean SPA fallback
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(templateHtml);
    }
  });
}

async function runPrerender() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ dist directory not found! Run "vite build" first.');
    process.exit(1);
  }

  const rawTemplate = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf8');

  console.log('\n🚀 Starting Headless Build-Time Prerendering for SEO...\n');

  const server = createStaticServer(rawTemplate);
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`📡 Local preview server listening on http://localhost:${PORT}`);

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    console.log(`🌐 Chromium launched. Prerendering ${routes.length} canonical routes...\n`);

    for (const route of routes) {
      const page = await browser.newPage();
      
      // Set realistic desktop viewport
      await page.setViewport({ width: 1440, height: 900 });

      // Disable external video streaming during prerender to speed up build
      await page.setRequestInterception(true);
      page.on('request', (req) => {
        const resourceType = req.resourceType();
        if (resourceType === 'media') {
          req.abort();
        } else {
          req.continue();
        }
      });

      const url = `http://localhost:${PORT}${route}`;
      process.stdout.write(`   ⏳ Prerendering: ${route.padEnd(45, ' ')}`);

      try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
      } catch {
        // Fallback if timeout happens
      }

      // Wait a moment for dynamic chunks and Helmet to settle
      await page.evaluate(() => new Promise((r) => setTimeout(r, 350)));

      // Extract full rendered HTML
      let html = await page.content();

      // Write output file
      let outDir;
      let outFile;

      if (route === '/') {
        outDir = DIST_DIR;
        outFile = path.join(DIST_DIR, 'index.html');
      } else {
        outDir = path.join(DIST_DIR, route.replace(/^\//, ''));
        outFile = path.join(outDir, 'index.html');
      }

      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(outFile, html, 'utf8');

      await page.close();
      console.log('✅ Done');
    }

    console.log('\n✨ All routes successfully prerendered into static HTML files in dist/!\n');
  } catch (err) {
    console.error('❌ Error during prerendering:', err);
  } finally {
    if (browser) await browser.close();
    server.close();
  }
}

runPrerender();
