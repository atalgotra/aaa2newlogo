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
  let content = fs.readFileSync(f, 'utf-8');
  let changed = false;

  // Add loading="lazy" to <img ... > if not present
  // Need to be careful not to match <img loading="lazy" 
  
  // Regex to match <img but skip if it has loading=
  content = content.replace(/<img\s+(?![^>]*loading=)([^>]+)>/gi, (match, attrs) => {
    changed = true;
    return `<img loading="lazy" ${attrs}>`;
  });

  if (changed) {
    fs.writeFileSync(f, content);
    console.log('Fixed images in', f);
  }
});
