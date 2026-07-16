const fs = require('fs');
const path = require('path');

const dir = 'd:/Projects_Core/AAA2/website/src/pages';

function walk(directory) {
  let results = [];
  const list = fs.readdirSync(directory);
  list.forEach(file => {
    file = path.join(directory, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
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
  
  const regex = /(<section[^>]*style={{)([^}]+)(}})/i;
  const match = content.match(regex);
  if (match) {
    let stylesStr = match[2];
    if (/height:\s*['"][^'"]+['"]/i.test(stylesStr) || /minHeight:\s*['"][^'"]+['"]/i.test(stylesStr)) {
        let newStyles = stylesStr
            .replace(/height:\s*['"][^'"]+['"],?\s*/gi, '')
            .replace(/minHeight:\s*['"][^'"]+['"],?\s*/gi, '');
            
        newStyles = "height: '60vh', minHeight: '500px', " + newStyles;
        
        content = content.replace(match[0], `${match[1]}${newStyles}${match[3]}`);
        changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(f, content);
    console.log('Updated section in', f);
  }
  
  // Also fix Products.jsx which uses a div for the AccordionHero
  if (f.includes('Products.jsx')) {
    let pContent = fs.readFileSync(f, 'utf-8');
    if (pContent.includes("height: '70vh', minHeight: '600px'")) {
        pContent = pContent.replace("height: '70vh', minHeight: '600px'", "height: '60vh', minHeight: '500px'");
        fs.writeFileSync(f, pContent);
        console.log('Updated AccordionHero div in', f);
    }
  }
});
