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

  // regex to match useEffect(() => { window.scrollTo(0, 0); }, []);
  const scrollRegex = /\s*useEffect\(\(\)\s*=>\s*\{\s*window\.scrollTo\(0,\s*0\);\s*},\s*\[\]\);\s*/;
  
  if (scrollRegex.test(content)) {
    content = content.replace(scrollRegex, '\n');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(f, content);
    console.log('Fixed scroll in', f);
  }
});
