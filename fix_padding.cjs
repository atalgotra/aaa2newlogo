const fs = require('fs');
const path = require('path');

const dir = 'd:/Projects_Core/AAA2/website/src/pages';
function walk(directory) {
  let results = [];
  const list = fs.readdirSync(directory);
  list.forEach(file => {
    file = path.join(directory, file);
    if (fs.statSync(file).isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(dir);

files.forEach(f => {
  if (f.includes('Home.jsx')) return;

  let content = fs.readFileSync(f, 'utf-8');
  let changed = false;

  const rootDivRegex = /(return\s*\(\s*<div\s+[^>]*?style={{)([^}]+)(}})/;
  const matchDiv = content.match(rootDivRegex);
  if (matchDiv) {
    let styles = matchDiv[2];
    if (!/paddingTop:\s*['"]90px['"]/i.test(styles)) {
      styles = styles.replace(/paddingTop:\s*['"][^'"]+['"],?\s*/gi, '');
      styles = "paddingTop: '90px', " + styles;
      content = content.replace(matchDiv[0], `${matchDiv[1]}${styles}${matchDiv[3]}`);
      changed = true;
    }
  }

  const heroRegex = /(<section[^>]*style={{)([^}]+)(}})/i;
  const matchHero = content.match(heroRegex);
  if (matchHero) {
    let styles = matchHero[2];
    if (/paddingTop:\s*['"][^'"]+['"]/i.test(styles)) {
      styles = styles.replace(/paddingTop:\s*['"][^'"]+['"],?\s*/gi, '');
      content = content.replace(matchHero[0], `${matchHero[1]}${styles}${matchHero[3]}`);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(f, content);
    console.log('Fixed', f);
  }
});
