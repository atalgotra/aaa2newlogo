import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, 'src', 'pages');

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      // Check if og:image already exists
      if (!content.includes('og:image')) {
        // Find <Helmet> block and insert it before the closing </Helmet>
        const helmetCloseRegex = /<\/Helmet>/;
        if (helmetCloseRegex.test(content)) {
          const imageMeta = `        <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />\n        <meta property="og:url" content="https://www.aaa2innovate.com/" />\n`;
          content = content.replace(helmetCloseRegex, `${imageMeta}</Helmet>`);
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Updated ${file}`);
        }
      }
    }
  }
}

processDirectory(pagesDir);
console.log('Done');
