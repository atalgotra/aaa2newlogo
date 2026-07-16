const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const files = walk('d:/Projects_Core/AAA2/website/src').filter(f => f.match(/\.(jsx?)$/));
let found = false;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // Look for quotes containing .png, .jpg, .jpeg, .mp4
  const matches = content.match(/['"][^'"]+\.(png|jpe?g|mp4)['"]/g);
  if (matches) {
    matches.forEach(m => {
      if (!m.includes('http')) {
        console.log('Local media in', f, ':', m);
        found = true;
      }
    });
  }
});
if (!found) console.log('All clear!');
