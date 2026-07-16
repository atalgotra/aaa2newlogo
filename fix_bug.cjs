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
walk(dir).forEach(f => {
  let c = fs.readFileSync(f, 'utf-8');
  if (c.includes('mindisplay')) {
    fs.writeFileSync(f, c.replace(/mindisplay/g, 'display'));
    console.log('Fixed', f);
  }
});
