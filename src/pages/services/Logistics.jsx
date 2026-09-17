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
import { Plane, Ship, Train, Truck, Zap, ArrowRight, CheckCircle2, Warehouse, Network } from 'lucide-react';

const stats = [
  { value: 120, suffix: '+', label: 'Global Ports' },
  { value: 24, suffix: '/7', label: 'Operations & Sales' },
  { value: 10, suffix: ' Min', label: 'Quote Response' },
  { value: 100, suffix: '%', label: 'Automated Docs' },
];

const modalPillars = [
  {
    id: '01',
    title: 'Air Freight',
    desc: 'Fast, priority routing and dedicated capacity for time-critical and high-value cargo.',
    Icon: Plane
  },
  {
    id: '02',
    title: 'Ocean Freight',
    desc: 'Cost-efficient global shipping with optimized routes and reliable container capacity.',
    Icon: Ship
  },
  {
    id: '03',
    title: 'Rail Freight',
    desc: 'Reliable and predictable inland transit for cost-effective bulk cargo movement.',
    Icon: Train
  },
  {
    id: '04',
    title: 'Road & Surface',
    desc: 'Fully tracked first and last-mile transportation for seamless door-to-door delivery.',
    Icon: Truck
  },
  {
    id: '05',
    title: 'Warehousing',
    desc: 'Strategically located storage and fulfillment facilities for efficient inventory management.',
    Icon: Warehouse
  },
  {
    id: '06',
    title: 'Multimodal Logistics',
    desc: 'Integrated transport solutions combining multiple modes for flexible, efficient cargo movement.',
    Icon: Network
  }
];


const serviceFaqs = [
  {
    "question": "Do you handle international freight?",
    "answer": "Yes, through our partnership with Zipaworld, we provide complete digital freight forwarding, including air, ocean, and inland transportation."
  },
  {
    "question": "Can I track my shipments in real-time?",
    "answer": "Absolutely. Our platform provides end-to-end visibility, allowing you to track your cargo from the factory floor to final delivery."
  },
  {
    "question": "How do you handle customs clearance?",
    "answer": "Our dedicated logistics team manages all export/import documentation, compliance checks, and customs brokerage to prevent any border delays."
  },
  {
    "question": "What is your approach to last-mile delivery?",
    "answer": "We integrate with leading domestic carriers and utilize our smart routing algorithms to ensure cost-effective and rapid last-mile distribution to your warehouses or B2B clients."
  }
];

const Logistics = () => {
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
        <title>Global B2B Logistics & Freight Forwarding | AAA 2 Innovate</title>
        <meta name="description" content="Command your global supply chain with our fully automated logistics infrastructure, powered by Zipaworld. Real-time quoting, route optimization, and digital documentation." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Global B2B Logistics & Freight Forwarding | AAA 2 Innovate" />
        <meta property="og:description" content="Command your global supply chain with our fully automated logistics infrastructure, powered by Zipaworld. Real-time quoting, route optimization, and digital documentation." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/capabilities/logistics" />
        <link rel="canonical" href="https://www.aaa2innovate.com/capabilities/logistics" />
      </Helmet>
      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Global Logistics",
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
        backgroundImage="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/logistics_hero.png"
        titleLine1="Global Freight"
        titleLine2="& Logistics Ecosystem"
        subtitle="Production is only half the battle. We control the physical movement of goods across the globe with zero latency, total transparency, and algorithmic precision."
        paddingTop="135px"
        paddingBottom="135px"
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

      {/* Zipaworld Engine Integration */}
      <section className="gsap-section" style={{ padding: 'clamp(60px, 8vw, 100px) 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            
            {/* Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
              <h2 className="section-title">
                Powered by the Logistics E-Mall of India
              </h2>
              
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
              Our logistics infrastructure is powered by <strong>Zipaworld Innovation Pvt. Ltd.</strong>, our proprietary technology backbone for global transit operations.              </p>
              
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '40px' }}>
                  We automate logistics through <strong>real-time quoting, route optimization, and digital documentation</strong>, backed by round-the-clock operations and sales support for fast, reliable cargo solutions.              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {['Automated Documentation', 'Instant Quoting', 'Live Track & Trace', '24/7 Operations Center'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                    <Zap size={18} color="var(--brand-indigo)" style={{ flexShrink: 0 }} />
                    <span style={{ color: 'var(--text-primary)', fontSize: '13.5px', fontWeight: 750 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Panel with TiltCard */}
            <div style={{ position: 'relative' }}>
              <TiltCard>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ position: 'relative', display: 'flex', borderRadius: '24px', overflow: 'hidden', alignItems: 'flex-end', justifyContent: 'center', minHeight: '380px', height: '420px', border: '1px solid var(--border-light)', boxShadow: '0 15px 35px rgba(34,1,80,0.1)' }}
                >
                  <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/zipaworld_engine.png" 
                    alt="Zipaworld Automated Dashboard" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} 
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '65%', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.35) 60%, transparent 100%)', zIndex: 2 }}></div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, y: 15 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                    style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '24px', width: '100%' }}
                  >
                    <Network size={36} color="#FFFFFF" style={{ marginBottom: '8px' }} />
                    <h3 style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 700, marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>Smart Transit Engine</h3>
                    <p style={{ color: '#CBD5E1', fontSize: '13.5px', lineHeight: 1.5, maxWidth: '320px', margin: '0 auto', textAlign: 'center', textAlignLast: 'center', textWrap: 'balance' }}>
                      End-to-end cargo automation with instant rate discovery, intelligent multi-modal routing, and real-time live tracking.
                    </p>
                  </motion.div>
                  <div className="page-hero-overlay" style={{ position: 'absolute', inset: 0, borderRadius: '24px', opacity: 0.1 }} />
                </motion.div>
              </TiltCard>
            </div>
            
          </div>
        </div>
      </section>

      {/* Multi-Modal Dominance Grid */}
      <DivisionsBentoGrid
        title="Multi-Modal Dominance"
        subtitle="We dictate terms across the earth, ocean, and sky. Seamless intermodal transitions orchestrated through a single unified dashboard."
        divisions={modalPillars}
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
      <CTASection titlePrefix="Ready to" highlightText="Optimize?" description="Stop leaking revenue through inefficient routing. We engineer robust, AI-powered logistics networks to ensure your supply chain operates at maximum velocity and minimal cost." buttonText="Optimize My Supply Chain" />

      {/* Accreditations Marquee */}
      <AccreditationsMarquee />
    </div>
  );
};

export default Logistics;




