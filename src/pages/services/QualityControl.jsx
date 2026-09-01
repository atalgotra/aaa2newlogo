import React, { useEffect, useRef } from 'react';
import FAQSection from '../../components/common/FAQSection';
import SchemaInjector from '../../components/seo/SchemaInjector';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTASection from '../../components/common/CTASection';
import AccreditationsMarquee from '../../components/common/AccreditationsMarquee';
import DivisionsBentoGrid from '../../components/common/DivisionsBentoGrid';
import TiltCard from '../../components/animations/TiltCard';
import PageHero from '../../components/common/PageHero';
import { gsap, createGsapScope } from '../../utils/gsapUtils';
import { ShieldCheck, Beaker, Tag, Package, ArrowRight, CheckCircle2, Ruler, ScanBarcode } from 'lucide-react';


const serviceFaqs = [
  {
    "question": "What quality standards do you follow?",
    "answer": "We adhere to international standards such as ISO 9001, Acceptable Quality Limit (AQL) inspections, and specific compliance regulations depending on the target market."
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
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = createGsapScope(containerRef, () => {
      const sections = gsap.utils.toArray('.gsap-section');
      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    });
    return cleanup;
  }, []);

const testingProtocols = [
  {
    id: '01',
    title: 'Physical Stress Testing',
    desc: 'Rigorous testing of functionality, safety, stretch limits, pull thresholds, and real-world durability.',
    Icon: ShieldCheck
  },
  {
    id: '02',
    title: 'Advanced Lab Analytics',
    desc: 'Laboratory analysis covering pilling resistance, flammability, colorfastness, material composition, and toxicity.',
    Icon: Beaker
  },
  {
    id: '03',
    title: 'Dimensional Accuracy',
    desc: 'Detailed verification of product measurements, sizing, proportions, tolerances, and construction specifications.',
    Icon: Ruler
  },
  {
    id: '04',
    title: 'Labeling & Compliance',
    desc: 'Meticulous checks of labels, care instructions, sizing details, legal declarations, and regulatory requirements.',
    Icon: Tag
  },
  {
    id: '05',
    title: 'Packaging Integrity',
    desc: 'Testing inner and outer packaging for strength, protection, stacking performance, and transit resilience.',
    Icon: Package
  },
  {
    id: '06',
    title: 'Barcode & SKU Verification',
    desc: 'Digital verification of barcodes, SKUs, product information, and scannability to ensure error-free fulfillment.',
    Icon: ScanBarcode
  }
];

  return (
    <div ref={containerRef} style={{ width: '100%', backgroundColor: 'var(--bg-main)', overflowX: 'hidden' }}>
      <Helmet>
        <title>Quality Control, Inspection & Compliance | AAA 2 Innovate</title>
        <meta name="description" content="Uncompromising quality assurance for global shipments. We enforce AQL 2.5 Level II standards, pre-shipment inspections, and strict statutory factory audits." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Quality Control, Inspection & Compliance | AAA 2 Innovate" />
        <meta property="og:description" content="Uncompromising quality assurance for global shipments. We enforce AQL 2.5 Level II standards, pre-shipment inspections, and strict statutory factory audits." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/" />
        <link rel="canonical" href="https://www.aaa2innovate.com/capabilities/quality-control-compliance" />
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

      {/* Hero Section */}
      <PageHero
        backgroundImage="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/qc_hero_bg.png"
        titleLine1="Quality Inspection &"
        titleLine2="Compliance"
        subtitle="Quality is not a metric; it is our core architecture. We deploy an elite, uncompromising inspection protocol to guarantee that every product sourced from India meets the highest global standards before it ever hits a shipping container."
        paddingTop="115px"
        paddingBottom="90px"
        overlayOpacity={0.9}
      />

      {/* AQL Standard Intro */}
      <section className="gsap-section" style={{ padding: 'clamp(60px, 8vw, 100px) 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'start' }}>
            
            {/* Left Content */}
            <div>
              <h2 className="section-title">
                The Anatomy of Consistency
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '32px' }}>
                Our dedicated Quality Team conducts intensive, independent inspections at every critical juncture of the production lifecycle. <br/><br/> Operating strictly under the <strong style={{ color: 'var(--brand-indigo)' }}>AQL 2.5 Level II standard</strong>, we determine precise inspection volumes and execute exhaustive checklists on your behalf.
              </p>
              
              <div style={{ display: 'inline-flex', padding: '16px 24px', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'stretch' }}>
                  <div style={{ width: '4px', backgroundColor: 'var(--brand-indigo)', borderRadius: '4px', flexShrink: 0 }}></div>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: '1.6' }}>
                    We also offer standalone, third-party inspection services for clients who require objective auditing outside of our end-to-end supply chain matrix.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image with TiltCard */}
            <div style={{ position: 'relative', width: '100%' }}>
              <TiltCard style={{ width: '100%' }}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="media-showcase-card"
                  style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', cursor: 'pointer' }}
                >
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    loading="lazy" 
                    src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/qc_measurement.png" 
                    alt="Precision Measurement" 
                    style={{ 
                      width: '100%', 
                      height: '380px',
                      objectFit: 'cover',
                      display: 'block'
                    }} 
                  />
                  <div className="media-showcase-overlay">
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>
                      Precision Verification
                    </h3>
                    <p style={{ fontSize: '13px', color: '#CBD5E1', margin: 0, lineHeight: 1.4 }}>
                      Operating strictly under international AQL 2.5 Level II standards to ensure flawless zero-defect batches.
                    </p>
                  </div>
                  <div className="page-hero-overlay" style={{ position: 'absolute', inset: 0, borderRadius: '24px', opacity: 0.3}} />
                </motion.div>
              </TiltCard>
            </div>
            
          </div>
        </div>
      </section>

      {/* Testing Protocols Grid */}
      <DivisionsBentoGrid
        title="Comprehensive Inspection Protocols"
        divisions={testingProtocols}
      />

      {/* Statutory Compliance Dashboard */}
      <section className="gsap-section" style={{ padding: 'clamp(60px, 8vw, 100px) 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            
            {/* Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
              <h2 className="section-title">
                Statutory Factory Compliance
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
                We enforce strict statutory audits regulating safety, health, working hours, and fair wages across our entire vendor network. Our factories consistently pass compliance audits demanded by global retail leaders, backed by continuous, unannounced spot-checks to ensure permanent compliance.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '16px' }}>
                {['Health & Safety Regulations', 'Minimum Wage & Annual Leave', 'Ethical Working Hours', 'Zero Tolerance for Exploitation'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: 'var(--bg-main)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                    <CheckCircle2 size={18} color="var(--brand-indigo)" style={{ flexShrink: 0 }} />
                    <span style={{ color: 'var(--text-primary)', fontSize: '13.5px', fontWeight: 700 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Panel with TiltCard */}
            <div style={{ position: 'relative', width: '100%' }}>
              <TiltCard style={{ width: '100%' }}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="media-showcase-card"
                  style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', cursor: 'pointer', width: '100%' }}
                >
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    loading="lazy" 
                    src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/qc_dashboard.png" 
                    alt="Compliance Dashboard" 
                    style={{ 
                      width: '100%', 
                      height: '360px',
                      objectFit: 'cover',
                      display: 'block'
                    }} 
                  />
                  <div className="media-showcase-overlay">
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>
                      Audit &amp; Ethical Governance
                    </h3>
                    <p style={{ fontSize: '13px', color: '#CBD5E1', margin: 0, lineHeight: 1.4 }}>
                      Continuous, unannounced spot-checks and full transparency across statutory worker health and fair wage mandates.
                    </p>
                  </div>
                  <div className="page-hero-overlay" style={{ position: 'absolute', inset: 0, borderRadius: '24px', opacity: 0.4}} />
                </motion.div>
              </TiltCard>
            </div>
            
          </div>
        </div>
      </section>


      
      {/* Semantic FAQ Section */}
      <FAQSection faqs={serviceFaqs} title="Frequently Asked Questions" />

      {/* Next Step Transition */}
      <section className="gsap-section" style={{ padding: 'clamp(24px, 3.5vw, 36px) 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container next-transition-container">
          <p style={{ color: 'var(--text-secondary)', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>Next in the Capabilities Matrix</p>
          <Link to="/capabilities/warehousing" className="next-transition-link">
            <motion.h2 
              whileHover={{ x: -4 }}
              style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, color: 'var(--brand-indigo)', margin: 0, fontFamily: 'var(--font-display)' }}
            >
              Warehousing
            </motion.h2>
            <motion.div 
              className="next-transition-arrow"
              whileHover={{ scale: 1.1, rotate: 90 }}
            >
              <ArrowRight size={20} color="var(--brand-indigo)" />
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <CTASection titlePrefix="Ready to" highlightText="Perfect?" description={"Protect your brand's reputation with uncompromising quality assurance. Our strict, zero\u2011defect inspection protocols ensure perfection on every single unit shipped."} buttonText="Secure Your Quality" />

      {/* Accreditations Marquee */}
      <AccreditationsMarquee />
    </div>
  );
};

export default QualityControl;




