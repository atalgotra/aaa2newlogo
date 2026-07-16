const fs = require('fs');
const path = require('path');

const services = [
  { file: 'Sourcing.jsx', serviceType: 'Global Product Sourcing', urlSuffix: 'sourcing' },
  { file: 'Manufacturing.jsx', serviceType: 'Contract Manufacturing', urlSuffix: 'manufacturing' },
  { file: 'QualityControl.jsx', serviceType: 'Quality Control & Compliance', urlSuffix: 'quality-control-compliance' },
  { file: 'Warehousing.jsx', serviceType: 'Digital Warehousing', urlSuffix: 'warehousing' },
  { file: 'Logistics.jsx', serviceType: 'Global Logistics', urlSuffix: 'logistics' },
  { file: 'Design.jsx', serviceType: 'Product Design & Development', urlSuffix: 'design' }
];

services.forEach(s => {
  const p = path.join(__dirname, 'src/pages/services', s.file);
  let content = fs.readFileSync(p, 'utf-8');

  // Add imports if not present
  if (!content.includes('SchemaInjector')) {
    content = content.replace(/(import .*?;\n\n?)/, `$1import SchemaInjector from '../../components/seo/SchemaInjector';\nimport Breadcrumbs from '../../components/seo/Breadcrumbs';\n`);
  }

  // Add canonical tags to Helmet if missing
  if (!content.includes('rel="canonical"')) {
    content = content.replace(/(<\/Helmet>)/, `  <link rel="canonical" href="https://www.aaa2innovate.com/services/${s.urlSuffix}" />\n$1`);
  }

  // Add SchemaInjector and Breadcrumbs after </Helmet>
  if (!content.includes('<SchemaInjector')) {
    const schemaCode = `\n      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "${s.serviceType}",
        "provider": {
          "@type": "Organization",
          "name": "AAA 2 Innovate Pvt. Ltd.",
          "url": "https://www.aaa2innovate.com/"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Global"
        }
      }} />\n\n      <div style={{ position: 'absolute', top: '90px', left: 0, width: '100%', zIndex: 10 }}>\n        <Breadcrumbs />\n      </div>\n`;
    
    content = content.replace(/(<\/Helmet>)/, `$1${schemaCode}`);
  }

  fs.writeFileSync(p, content, 'utf-8');
  console.log('Updated', s.file);
});
