import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://www.aaa2innovate.com';

// Define all preferred canonical/indexable routes
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
  '/contact'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf-8');
  console.log('✅ sitemap.xml generated successfully in public/ directory.');
};

generateSitemap();
