const fs = require('fs');
const path = require('path');

const faqs = {
  'Sourcing.jsx': [
    { question: 'What is your product sourcing process in India?', answer: 'Our sourcing process begins with identifying your product requirements, matching them with vetted Indian manufacturers, conducting strict quality control protocols, and managing the end-to-end supply chain until final delivery.' },
    { question: 'How do you ensure ethical sourcing?', answer: 'We strictly partner with factories that comply with international labor laws, ethical standards, and environmental regulations. We conduct routine site visits and compliance audits.' },
    { question: 'Do you handle the export documentation?', answer: 'Yes, we manage all export documentation, customs clearance, and freight forwarding to ensure a seamless door-to-door delivery experience.' }
  ],
  'Manufacturing.jsx': [
    { question: 'What industries do you manufacture for?', answer: 'We specialize in apparel, designer bags, fine imitation jewelry, and wellness products. We also handle custom white-label and private label manufacturing for global brands.' },
    { question: 'Can you handle large scale production runs?', answer: 'Absolutely. We manage contract manufacturing facilities equipped to handle both small batch pilot runs and massive, high-volume production with strict turnaround times.' },
    { question: 'What is your defect rate?', answer: 'Through our rigorous Six Sigma-aligned quality control processes, we maintain a defect rate of less than 1%, ensuring maximum yield and premium quality.' }
  ],
  'QualityControl.jsx': [
    { question: 'What quality standards do you follow?', answer: 'We adhere to international standards such as ISO 9001, AQL (Acceptable Quality Limit) inspections, and specific compliance regulations depending on the target market.' },
    { question: 'Do you offer pre-shipment inspections?', answer: 'Yes, our teams conduct comprehensive Pre-Shipment Inspections (PSI) before any goods leave the factory floor.' }
  ],
  'Warehousing.jsx': [
    { question: 'Is your warehousing digitally managed?', answer: 'Yes, our digital warehousing solutions integrate real-time inventory tracking, AI-driven demand forecasting, and automated sorting systems.' },
    { question: 'Do you offer fulfillment services?', answer: 'We provide end-to-end 3PL fulfillment, including pick, pack, and ship services tailored for B2B and enterprise-scale operations.' }
  ],
  'Logistics.jsx': [
    { question: 'Which freight forwarders do you use?', answer: 'We leverage our proprietary logistics engine and partner networks to optimize air, sea, and land freight routes globally.' },
    { question: 'Can I track my shipments in real time?', answer: 'Yes, our digital logistics dashboard provides real-time visibility, automated alerts, and ETA predictions for your entire supply chain.' }
  ],
  'Design.jsx': [
    { question: 'Do you help with product design and prototyping?', answer: 'Yes, our design team translates your concepts into tech packs, 3D renders, and physical prototypes before moving to mass production.' },
    { question: 'Who owns the intellectual property?', answer: 'You retain full ownership of all designs, blueprints, and intellectual property. We operate under strict Non-Disclosure Agreements (NDAs).' }
  ],
  'Tech.jsx': [
    { question: 'What tech stacks do you specialize in?', answer: 'Our Gen-Z engineering team specializes in React, Node.js, Python, AWS, Azure, and mobile-first frameworks to build scalable enterprise applications.' },
    { question: 'Do you offer dedicated development teams?', answer: 'Yes, we can provide dedicated squads of engineers, PMs, and designers to act as an extension of your in-house IT department.' }
  ]
};

Object.keys(faqs).forEach(file => {
  const p = path.join(__dirname, 'src/pages/services', file);
  if (!fs.existsSync(p)) return;
  
  let content = fs.readFileSync(p, 'utf-8');
  
  if (!content.includes('FAQSection')) {
    // Import FAQSection
    content = content.replace(/(import .*?;\n\n?)/, `$1import FAQSection from '../../components/seo/FAQSection';\n`);
    
    // Create constant
    const faqData = `\nconst serviceFaqs = ${JSON.stringify(faqs[file], null, 2)};\n\n`;
    content = content.replace(/(const [A-Z][a-zA-Z0-9_]* = \(\) => {)/, `${faqData}$1`);

    // Inject FAQSection before Footer CTA
    const faqComponent = `\n      {/* Semantic FAQ Section */}\n      <FAQSection faqs={serviceFaqs} title="Frequently Asked Questions" />\n\n      {/* Footer CTA */}`;
    content = content.replace(/{(\/\* Footer CTA \*\/)}/, faqComponent);
    
    fs.writeFileSync(p, content, 'utf-8');
    console.log('Added FAQ to', file);
  }
});
