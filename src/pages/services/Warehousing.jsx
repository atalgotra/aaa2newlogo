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
import { gsap, createGsapScope, animateNumberCounter } from '../../utils/gsapUtils';
import { ShieldCheck, Cpu, Box, MapPin, Database, ArrowRight, CheckCircle2, PackageCheck, Truck, Clock } from 'lucide-react';

const stats = [
  { value: 24, suffix: '×7', label: 'Processing Capability' },
  { value: 100, suffix: '%', label: 'Paperless Workflows' },
  { value: 100, suffix: '% Live', label: 'Real-Time Tracking' },
  { value: 0, suffix: ' Delay', label: 'Delay Dispatch' },
];

const operationsPillars = [
  {
    id: '01',
    Icon: Database,
    title: 'Automated Gate-In / Out',
    desc: 'Cargo movement is recorded automatically through document scanning and digital logs, eliminating manual register maintenance.'
  },
  {
    id: '02',
    Icon: MapPin,
    title: 'Digital Location Mapping',
    desc: 'Every cargo position is digitally mapped on a live inventory dashboard for accurate visibility and faster retrieval.'
  },
  {
    id: '03',
    Icon: Box,
    title: 'Order Fulfillment',
    desc: 'Advanced packing and labeling with Box Picking, Full Pallet Pull, and Mixed Order Fulfillment capabilities.'
  },
  {
    id: '04',
    Icon: ShieldCheck,
    title: '100% Safety Compliance',
    desc: 'Strict PPE, 24×7 CCTV, fire safety systems, and controlled zones ensure a safe and compliant facility.'
  },
  {
    id: '05',
    Icon: PackageCheck,
    title: 'Quality Inspection',
    desc: 'Inbound and outbound cargo undergoes systematic inspection to verify quantity, condition, packaging, and documentation.'
  },
  {
    id: '06',
    Icon: Truck,
    title: 'Dispatch Coordination',
    desc: 'Coordinated loading and dispatch processes ensure accurate handovers, faster turnaround, and timely cargo movement.'
  }
];

const StepOne = () => <span style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 800, fontFamily: 'var(--font-display)' }}>1</span>;
const StepTwo = () => <span style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 800, fontFamily: 'var(--font-display)' }}>2</span>;
const StepThree = () => <span style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 800, fontFamily: 'var(--font-display)' }}>3</span>;

const techEngineData = [
  {
    id: '01',
    title: 'Upload Data',
    desc: 'Simply upload the Commercial Invoice and Packing List (PDF).',
    Icon: StepOne
  },
  {
    id: '02',
    title: 'AI Extraction',
    desc: 'System automatically extracts shipment info, cargo details, and documentation data.',
    Icon: StepTwo
  },
  {
    id: '03',
    title: 'Generate Bill',
    desc: 'Platform instantly generates the shipping bill checklist and validation records.',
    Icon: StepThree
  }
];

const serviceFaqs = [
  {
    "question": "Is your warehousing digitally managed?",
    "answer": "Yes, our digital warehousing solutions integrate real-time inventory tracking, AI-driven demand forecasting, and automated sorting systems. This enables faster order processing, greater inventory accuracy, seamless operational visibility."
  },
  {
    "question": "Do you offer fulfillment services?",
    "answer": "We provide end-to-end 3PL fulfillment, including pick, pack, and ship services tailored for B2B and enterprise-scale operations."
  },
  {
    "question": "Can your warehouses handle temperature-sensitive goods?",
    "answer": "Yes, our network includes specialized climate-controlled facilities designed to maintain strict temperature parameters for sensitive goods."
  },
  {
    "question": "Do you support EDI integrations with my store?",
    "answer": "Yes, our digital warehousing platform integrates seamlessly via API and EDI with major eCommerce platforms like Shopify, Amazon, and custom ERPs."
  }
];

const Warehousing = () => {
  const containerRef = useRef(null);
  const counterRefs = useRef([]);

  useEffect(() => {
    const cleanup = createGsapScope(containerRef, () => {
      // Counter animations
      stats.forEach((s, idx) => {
        if (counterRefs.current[idx]) {
          animateNumberCounter(counterRefs.current[idx], s.value, s.suffix);
        }
      });

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

  return (
    <div ref={containerRef} style={{ width: '100%', backgroundColor: 'var(--bg-main)', overflowX: 'hidden' }}>
      <Helmet>
        <title>Digital Warehousing & Storage Solutions | AAA 2 Innovate</title>
        <meta name="description" content="Powered by Zipaworld, our digital warehousing ecosystem provides AI-driven inventory management, faceless processing, and real-time cargo visibility." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Digital Warehousing & Storage Solutions | AAA 2 Innovate" />
        <meta property="og:description" content="Powered by Zipaworld, our digital warehousing ecosystem provides AI-driven inventory management, faceless processing, and real-time cargo visibility." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/capabilities/warehousing" />
        <link rel="canonical" href="https://www.aaa2innovate.com/capabilities/warehousing" />
      </Helmet>
      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Digital Warehousing",
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

      {/* Cinematic Hero */}
      <PageHero
        backgroundImage="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/warehousing_hero.png"
        titleLine1="Digital"
        titleLine2="Warehousing Ecosystem"
        subtitle="Empowering global logistics with AI and cutting-edge technology for a smarter, more efficient world. A fully digital, cloud-based platform designed specifically for high-volume air cargo operations."
        paddingTop="115px"
        paddingBottom="115px"
        overlayOpacity={0.9}
        centered={true}
      />

      {/* Stats Bar */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', padding: '20px 0' }}>
        <div className="container">
          <div className="stats-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '24px', textAlign: 'center' }}>
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div ref={el => counterRefs.current[i] = el} style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: 'var(--brand-indigo)', fontFamily: 'var(--font-display)', lineHeight: 1 }}>0</div>
                <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginTop: '4px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IGIA Advantage */}
      <section className="gsap-section" style={{ padding: 'clamp(60px, 8vw, 100px) 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            
            {/* Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>

              <h2 className="section-title">
                Strategic Advantage at IGIA, New Delhi
              </h2>
              
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                Location matters. Facility is inside <strong>ACLC-2B (Air Cargo Logistics Centre-2B)</strong> near the New ATC Tower, providing direct access to cargo terminals and airport logistics.
              </p>
              
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
Optimized for urgent air freight and high-volume exports, with digital connectivity to Emirates, IndiGo Cargo, and Lufthansa for faster documentation and dispatch.              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {['Direct Airport Access', 'Carrier Integration', 'Urgent Cargo Handling', 'Reduced Turnaround (TAT)'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--bg-secondary)', padding: '12px', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                    <CheckCircle2 size={18} color="var(--brand-indigo)" style={{ flexShrink: 0 }} />
                    <span style={{ color: 'var(--text-primary)', fontSize: '13.5px', fontWeight: 750 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Graphics Panel with TiltCard */}
            <div style={{ position: 'relative' }}>
              <TiltCard>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ position: 'relative', display: 'flex', borderRadius: '24px', overflow: 'hidden', alignItems: 'flex-end', justifyContent: 'center', minHeight: '380px', border: '1px solid var(--border-light)', boxShadow: '0 15px 35px rgba(34,1,80,0.1)' }}
                >
                  <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/faceless_processing.png" alt="Faceless Processing" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(34, 1, 80, 0.95) 0%, rgba(34, 1, 80, 0.4) 60%, transparent 100%)', zIndex: 2 }}></div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, y: 15 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                    style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '24px', width: '100%' }}
                  >
                    <Cpu size={36} color="#FFFFFF" style={{ marginBottom: '8px' }} />
                    <h3 style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 700, marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>Faceless Processing</h3>
                    <p style={{ color: '#CBD5E1', fontSize: '13.5px', lineHeight: 1.5, maxWidth: '320px', margin: '0 auto', textAlign: 'center', textAlignLast: 'center', textWrap: 'balance' }}>
                      Manual intervention is eradicated via automated workflows, digital approvals, and AI-extracted documentation.
                    </p>
                  </motion.div>
                  <div className="page-hero-overlay" style={{ position: 'absolute', inset: 0, borderRadius: '24px', opacity: 0.1}} />
                </motion.div>
              </TiltCard>
            </div>
            
          </div>
        </div>
      </section>

      {/* Tech Engine Module */}
      <DivisionsBentoGrid
        title="Automated Checklist Generation"
        subtitle="Traditional export processes require manual checklist preparation. We automate the entire flow, eliminating manual data entry, reducing documentation errors, and improving customs compliance."
        divisions={techEngineData}
      />

      {/* Floor Operations Grid */}
      <DivisionsBentoGrid
        theme="light"
        title="Comprehensive Operations"
        subtitle="Beyond storage, we provide a massive, highly-secure fulfillment infrastructure engineered for zero risk tolerance and 100% compliance."
        divisions={operationsPillars}
      />


      
      {/* Semantic FAQ Section */}
      <FAQSection faqs={serviceFaqs} title="Frequently Asked Questions" />

      {/* Next Step Transition */}
      <section className="gsap-section" style={{ padding: 'clamp(24px, 3.5vw, 36px) 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container next-transition-container">
          <p style={{ color: 'var(--text-secondary)', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>Next in the Capabilities Matrix</p>
          <Link to="/capabilities/tech" className="next-transition-link">
            <motion.h2 
              whileHover={{ x: -4 }}
              style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, color: 'var(--brand-indigo)', margin: 0, fontFamily: 'var(--font-display)' }}
            >
              Digital Ops & Gen-Z Tech
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
      <CTASection titlePrefix="Ready to" highlightText="Store?" description="Unlock next-level fulfillment speed with our intelligent warehousing nodes. Position your inventory strategically across the globe to achieve Amazon-level delivery times." buttonText="Upgrade Fulfillment" />

      {/* Accreditations Marquee */}
      <AccreditationsMarquee />
    </div>
  );
};

export default Warehousing;




