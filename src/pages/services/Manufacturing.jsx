import React, { useEffect, useRef } from 'react';
import FAQSection from '../../components/common/FAQSection';
import SchemaInjector from '../../components/seo/SchemaInjector';
// import Breadcrumbs from '../../components/seo/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTASection from '../../components/CTASection';
import AccreditationsMarquee from '../../components/common/AccreditationsMarquee';
import DivisionsBentoGrid from '../../components/common/DivisionsBentoGrid';
import TiltCard from '../../components/animations/TiltCard';
import PageHero from '../../components/common/PageHero';
import { gsap, createGsapScope, animateNumberCounter } from '../../utils/gsapUtils';
import { Factory, MapPin, Cpu, ShieldCheck, Zap, Users, ArrowRight, Search } from 'lucide-react';

const stats = [
  { value: 500, suffix: '+', label: 'Vetted Factories' },
  { value: 20, suffix: '+', label: 'Industrial Hubs' },
  { value: 99, suffix: '%', label: 'On-Time Delivery' },
  { value: 0, suffix: '', label: 'Defect Tolerance' },
];

const processSteps = [
  {
    id: '01',
    Icon: ShieldCheck,
    title: 'Pre-Production Audit',
    desc: 'We audit factory readiness, capacity, materials, machinery, and timelines before production begins.',
  },
  {
    id: '02',
    Icon: Search,
    title: 'Material & Quality Check',
    desc: 'Incoming materials are checked against approved quality, quantity, color, and technical specifications.',
  },
  {
    id: '03',
    Icon: Cpu,
    title: 'Inline Tracking Dashboard',
    desc: 'Real-time updates provide complete visibility into production progress, milestones, and timelines.',
  },
  {
    id: '04',
    Icon: Zap,
    title: 'Rapid Iteration Loops',
    desc: 'Our in-factory teams execute required adjustments quickly without affecting quality or timelines.',
  },
  {
    id: '05',
    Icon: ShieldCheck,
    title: 'Quality Control',
    desc: 'Structured quality checks identify defects early and ensure every batch meets approved standards.',
  },
  {
    id: '06',
    Icon: Users,
    title: 'Assembly & Finishing',
    desc: 'Final assembly, finishing, labelling, and packaging are supervised before fulfilment.',
  },
];


const serviceFaqs = [
  {
    "question": "What is your Minimum Order Quantity (MOQ)?",
    "answer": "Our MOQs vary depending on the product category and manufacturing complexity, but we generally structure them to be highly competitive for mid-to-enterprise level scaling."
  },
  {
    "question": "How do you ensure product quality?",
    "answer": "Through our rigorous Six Sigma-aligned quality control processes, we maintain a defect rate of less than 1%, ensuring maximum yield and premium quality."
  },
  {
    "question": "Can you scale production if demand spikes?",
    "answer": "Yes. Our network of 500+ specialized factories allows us to instantly distribute manufacturing loads, ensuring you never face stockouts during peak seasons."
  },
  {
    "question": "Do you provide white-label manufacturing?",
    "answer": "Yes, we specialize in OEM and ODM manufacturing, allowing you to fully brand the manufactured goods with your own logos and custom packaging."
  }
];

const Manufacturing = () => {
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
    <div ref={containerRef} style={{ width: '100%', backgroundColor: 'var(--bg-main)', paddingTop: '80px', overflowX: 'hidden' }}>
      <Helmet>
        <title>Precision Custom Manufacturing in India | AAA 2 Innovate</title>
        <meta name="description" content="End-to-end precision manufacturing across 500+ specialized Indian factories. Benefit from real-time tracking, massive scalability, and zero-defect tolerance." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Precision Custom Manufacturing in India | AAA 2 Innovate" />
        <meta property="og:description" content="End-to-end precision manufacturing across 500+ specialized Indian factories. Benefit from real-time tracking, massive scalability, and zero-defect tolerance." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/" />
        <link rel="canonical" href="https://www.aaa2innovate.com/capabilities/manufacturing" />
      </Helmet>
      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Contract Manufacturing",
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

      {/* <div style={{ position: 'absolute', top: '80px', left: 0, width: '100%', zIndex: 10 }}>
        <Breadcrumbs />
      </div> */}

      {/* Hero Section */}
      <PageHero
        backgroundImage="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/manufacturing_hero_bg.png"
        titleLine1="Global-Scale"
        titleLine2="Manufacturing Operations"
        subtitle="We orchestrate precision production across hundreds of elite facilities. Our experts are physically embedded in every major industrial corridor across India to guarantee absolute quality at scale."
        paddingTop="115px"
        paddingBottom="115px"
        overlayOpacity={0.9}
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

      {/* Pan-India Map Callout */}
      <section className="gsap-section" style={{ padding: 'clamp(60px, 8vw, 100px) 0', backgroundColor: '#220150', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="map-callout-grid">

            {/* Left Content */}
            <div>

              <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '20px', lineHeight: 1.22, fontFamily: 'var(--font-display)' }}>
                Everywhere Your Product Needs to Be Made.
              </h2>
              <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: 1.6, marginBottom: 'clamp(24px, 3.5vw, 40px)' }}>
                India is not a single factory—it is a mosaic of hyper-specialized industrial zones. We maintain permanent, on-the-ground expertise in every major production hub. This enables us to match every product with the right region, supplier, and manufacturing capability.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { label: 'Leather & Accessories', hubs: 'Kanpur, Agra' },
                  { label: 'Home Décor & Craft', hubs: 'Moradabad, Jaipur' },
                  { label: 'Apparel & Textiles', hubs: 'Tirupur, Surat, Ludhiana, Delhi NCR' },
                  { label: 'Metal & Engineering', hubs: 'Pune, Coimbatore' },
                ].map((item, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.06)' }}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      padding: '20px',
                      borderRadius: '16px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '15px', marginBottom: '6px' }}>{item.label}</div>
                    <div style={{ color: '#CBD5E1', fontSize: '13px', fontWeight: 500 }}>{item.hubs}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Map Visual Panel with TiltCard */}
            <div style={{ position: 'relative', maxWidth: '510px', margin: '0 auto', width: '100%' }}>
              <TiltCard>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden' }}
                >
                  <img
                    loading="lazy"
                    src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/india_map_nodes.png"
                    alt="Pan-India Industrial Hubs"
                    className="map-callout-img"
                  />
                  <div className="page-hero-overlay" style={{ position: 'absolute', inset: 0, borderRadius: '24px', opacity: 0.4 }} />
                </motion.div>
              </TiltCard>
            </div>

          </div>
        </div>
      </section>

      {/* The Manufacturing Process */}
      <DivisionsBentoGrid
        theme="light"
        title="The Manufacturing Process"
        divisions={processSteps}
      />

      {/* Semantic FAQ Section */}
      <FAQSection faqs={serviceFaqs} title="Frequently Asked Questions" />

      {/* Next Step Transition */}
      <section className="gsap-section" style={{ padding: 'clamp(24px, 3.5vw, 36px) 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container next-transition-container">
          <p style={{ color: 'var(--text-secondary)', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>Next in the Capabilities Matrix</p>
          <Link to="/capabilities/quality-control-compliance" className="next-transition-link">
            <motion.h2
              whileHover={{ x: -4 }}
              style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, color: 'var(--brand-indigo)', margin: 0, fontFamily: 'var(--font-display)' }}
            >
              Inspection & Compliance
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
      <CTASection
        titlePrefix="Ready to"
        highlightText="Scale?"
        description="Scale your production without sacrificing quality. From rapid prototyping to massive global manufacturing runs, our network of elite manufacturing partners is equipped to build the future."
        buttonText="Start Production"
      />

      {/* Accreditations Marquee */}
      <AccreditationsMarquee />
    </div>
  );
};

export default Manufacturing;


