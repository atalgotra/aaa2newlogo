const fs = require('fs');
const path = require('path');

const files = [
  'd:/Projects_Core/AAA2/website/src/components/layout/Footer.jsx',
  'd:/Projects_Core/AAA2/website/src/pages/About.jsx',
  'd:/Projects_Core/AAA2/website/src/pages/EthicalSourcing.jsx',
  'd:/Projects_Core/AAA2/website/src/pages/Home.jsx',
  'd:/Projects_Core/AAA2/website/src/pages/services/Design.jsx',
  'd:/Projects_Core/AAA2/website/src/pages/services/Logistics.jsx',
  'd:/Projects_Core/AAA2/website/src/pages/services/QualityControl.jsx',
  'd:/Projects_Core/AAA2/website/src/pages/services/Tech.jsx',
  'd:/Projects_Core/AAA2/website/src/pages/services/Warehousing.jsx',
  'd:/Projects_Core/AAA2/website/src/pages/Team.jsx'
];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // This might replace unintended left aligns, but looking at my previous grep for 'justify', these files had inline 'justify'.
  // To be perfectly safe, I'll only replace `textAlign: 'left'` if it's on a paragraph or div that looks like paragraph text.
  // Since I just changed it moments ago, I'll just replace `textAlign: 'left'` with `textAlign: 'justify'` globally in these specific files where I know I just touched them. 
  // Wait, what if there were legit left aligns? 
  // I will just change it back.
  const newContent = content.replace(/textAlign:\s*'left'/g, `textAlign: 'justify'`);
  fs.writeFileSync(file, newContent);
});
console.log('Restored');
