import React, { useEffect } from 'react';
import FAQSection from '../../components/seo/FAQSection';
import SchemaInjector from '../../components/seo/SchemaInjector';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTASection from '../../components/CTASection';
import { ArrowLeft, ArrowRight, ShieldCheck, Beaker, Tag, Package, FileCheck, CheckCircle2 } from 'lucide-react';


const serviceFaqs = [
  {
    "question": "What quality standards do you follow?",
    "answer": "We adhere to international standards such as ISO 9001, AQL (Acceptable Quality Limit) inspections, and specific compliance regulations depending on the target market."
  },
  {
    "question": "Do you offer pre-shipment inspections?",
    "answer": "Yes, our teams conduct comprehensive Pre-Shipment Inspections (PSI) before any goods leave the factory floor."
  },
  {
    "question": "How do you handle defective units?",
    "answer": "Any units failing our rigorous QA protocols are immediately isolated. We work directly with the factory to rework or replace defective items before the shipment is finalized."
  },
  {
    "question": "Do you provide testing certifications?",
    "answer": "Yes, we coordinate with accredited third-party laboratories (like SGS or Intertek) to provide official testing reports for materials, safety, and compliance."
  }
];

const QualityControl = () => {
const testingProtocols = [
    {
      title: 'Physical Stress Testing',
      desc: 'Rigorous assessment of product functionality, safety parameters, stretch limits, and pull thresholds to ensure real-world durability.',
      icon: <ShieldCheck size={28} color="var(--brand-orange)" />
    },
    {
      title: 'Advanced Lab Analytics',
      desc: 'Deep-dive chemical and structural analysis, including piling resistance, flammability rating, colorfastness (crocking), and toxicity screening.',
      icon: <Beaker size={28} color="var(--brand-orange)" />
    },
    {
      title: 'Labeling & Accuracy',
      desc: 'Meticulous verification of compliance data, care instructions, sizing matrices, and legal declarations across all affixed product tags.',
      icon: <Tag size={28} color="var(--brand-orange)" />
    },
    {
      title: 'Packaging & Scannability',
      desc: 'Stress-testing inner and outer cartons for transit resilience, alongside digital verification of barcode and SKU scannability at scale.',
      icon: <Package size={28} color="var(--brand-orange)" />
    }
  ];

  return (
    <div style={{ width: '100%', backgroundColor: 'var(--bg-main)', paddingTop: '90px' }}>
      <Helmet>
        <title>Quality Control, Inspection & Compliance | AAA 2 Innovate</title>
        <meta name="description" content="Uncompromising quality assurance for global shipments. We enforce AQL 2.5 Level II standards, pre-shipment inspections, and strict statutory factory audits." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Quality Control, Inspection & Compliance | AAA 2 Innovate" />
        <meta property="og:description" content="Uncompromising quality assurance for global shipments. We enforce AQL 2.5 Level II standards, pre-shipment inspections, and strict statutory factory audits." />
        <meta name="twitter:card" content="summary_large_image" />
              <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/" />
  <link rel="canonical" href="https://www.aaa2innovate.com/services/quality-control-compliance" />
</Helmet>
      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Quality Control & Compliance",
        "provider": {
          "@type": "Organization",
          "name": "AAA 2 Innovate Pvt. Ltd.",
          "url": "https://www.aaa2innovate.com/"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Global"
        }
      }} />

      <div style={{ position: 'absolute', top: '90px', left: 0, width: '100%', zIndex: 10 }}>
        <Breadcrumbs />
      </div>




      {/* Hero Section */}
      <section style={{
        minHeight: '60vh',  
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px', // Prevent overlap with breadcrumbs
        paddingBottom: '60px', // Prevent button clipping
        backgroundColor: '#02040A', 
        position: 'relative', 
        overflow: 'hidden',
        backgroundImage: 'url(https://aaawebisteimages.s3.ap-south-1.amazonaws.com/qc_hero_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.75)' }}></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to bottom, transparent, var(--bg-main))' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'justify', maxWidth: '800px' }}>
            


            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-hero" style={{ color: '#FFFFFF', marginBottom: '24px', letterSpacing: '-1px' }}
            >
              Absolute <span style={{ color: 'var(--brand-orange)' }}>Quality Control</span> & Compliance
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              style={{ fontSize: '24px', color: '#E5E7EB', lineHeight: '1.5', marginBottom: '40px', fontWeight: 400, textAlign: 'justify' }}
            >
              Quality is not a metric; it is our core architecture. We deploy an elite, uncompromising inspection protocol to guarantee that every product sourced from India meets the highest global standards before it ever hits a shipping container.
            </motion.p>
          </div>
        </div>
      </section>

      {/* AQL Standard Intro */}
      <section style={{ padding: '60px 0 80px', backgroundColor: '#05080F' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '60px', alignItems: 'center' }}>
            
            {/* Left Content */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,87,34,0.1)', padding: '8px 16px', borderRadius: '50px', marginBottom: '24px' }}>
                <ShieldCheck size={16} color="var(--brand-orange)" />
                <span style={{ color: 'var(--brand-orange)', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>Inspection Protocol</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px', lineHeight: 1.2 }}>
                The Anatomy of Consistency
              </h2>
              <p style={{ fontSize: '18px', color: '#9CA3AF', lineHeight: '1.7', marginBottom: '32px', textAlign: 'justify' }}>
                Our dedicated Quality Team conducts intensive, independent inspections at every critical juncture of the production lifecycle. Operating strictly under the <strong style={{ color: '#FFFFFF' }}>AQL 2.5 Level II standard</strong>, we determine precise inspection volumes and execute exhaustive checklists on your behalf.
              </p>
              
              <div style={{ display: 'inline-flex', padding: '16px 24px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '4px', height: '40px', backgroundColor: 'var(--brand-orange)', borderRadius: '4px' }}></div>
                  <p style={{ margin: 0, fontSize: '15px', color: '#9CA3AF', fontStyle: 'italic', lineHeight: '1.6' }}>
                    * We also offer standalone, third-party inspection services for clients who require objective auditing outside of our end-to-end supply chain matrix.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ position: 'relative' }}
            >
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/qc_measurement.png" 
                alt="Precision Measurement" 
                style={{ 
                  width: '100%', 
                  height: '380px',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                  position: 'relative',
                  zIndex: 1
                }} 
              />
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Testing Protocols Grid */}
      <section style={{ padding: '60px 0 80px', backgroundColor: '#02040A', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>Comprehensive Inspection Protocols</h2>
            <p style={{ fontSize: '18px', color: '#9CA3AF', maxWidth: '800px', margin: '0 auto' }}>A multi-layered defense mechanism ensuring your brand's integrity remains untouched.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {testingProtocols.map((protocol, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.02)', 
                  padding: '40px 32px', 
                  borderRadius: '24px', 
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                whileHover={{ transform: 'translateY(-5px)', backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                <div style={{ backgroundColor: 'rgba(255,87,34,0.1)', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  {protocol.icon}
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#FFFFFF', marginBottom: '16px', minHeight: '60px' }}>{protocol.title}</h3>
                <p style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{protocol.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statutory Compliance Dashboard */}
      <section style={{ padding: '60px 0 40px', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '60px', alignItems: 'stretch' }}>
            
            {/* Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '24px', lineHeight: 1.2 }}>
                Statutory Factory <br/><span style={{ color: 'var(--brand-orange)' }}>Compliance</span>
              </h2>
              <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px', textAlign: 'justify' }}>
                Compliance is not merely a legal shield—it is a moral imperative. We enforce strict statutory audits to regulate safety, health, working hours, and fair wages across our entire vendor network.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '40px', textAlign: 'justify' }}>
                Our factories are engineered to pass the world's most draconian compliance systems, effortlessly meeting the criteria demanded by global giants like Walmart, Target, Costco, and Tesco. We maintain continuous, unannounced spot-checks to ensure compliance is a permanent reality, not a temporary performance.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {['Health & Safety Regulations', 'Minimum Wage & Annual Leave', 'Ethical Working Hours', 'Zero Tolerance for Exploitation'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                    <CheckCircle2 size={18} color="var(--brand-orange)" style={{ flexShrink: 0 }} />
                    <span style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex' }}
            >
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/qc_dashboard.png" 
                alt="Compliance Dashboard" 
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '32px',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
                  border: '1px solid var(--border-light)'
                }} 
              />
            </motion.div>
            
          </div>
        </div>
      </section>


      
      {/* Semantic FAQ Section */}
      <FAQSection faqs={serviceFaqs} title="Frequently Asked Questions" />

      {/* Next Step Transition */}
      <section style={{ padding: 'clamp(40px, 8vw, 60px) 0 clamp(50px, 8vw, 80px) 0', backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Next in the Matrix</p>
          <Link to="/services/warehousing" style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', textDecoration: 'none', group: 'true' }}>
            <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800, color: 'var(--text-primary)', margin: 0, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--brand-orange)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
              Warehousing
            </h2>
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: '50%', display: 'flex', transition: 'background-color 0.2s' }}>
              <ArrowRight size={32} color="var(--brand-orange)" />
            </div>
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <CTASection titlePrefix="Ready to" highlightText="Perfect?" description={"Protect your brand's reputation with uncompromising quality assurance. Our strict, zero\u2011defect inspection protocols ensure perfection on every single unit shipped."} buttonText="Secure Your Quality" />
    </div>
  );
};

export default QualityControl;




