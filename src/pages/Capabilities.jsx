import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ShieldCheck, Factory, Box, Cpu, Code, Globe, CheckCircle2,
  Truck, Package
} from 'lucide-react';
import SchemaInjector from '../components/seo/SchemaInjector';
import FAQSection from '../components/common/FAQSection';
import TiltCard from '../components/animations/TiltCard';
import TextReveal from '../components/animations/TextReveal';
import PageHero from '../components/common/PageHero';
import AccreditationsMarquee from '../components/common/AccreditationsMarquee';
import DivisionsBentoGrid from '../components/common/DivisionsBentoGrid';
import { gsap, createGsapScope } from '../utils/gsapUtils';

const capabilitiesGridData = [
  {
    id: '01',
    title: 'Sourcing',
    desc: 'We locate, vet, and integrate the perfect manufacturing partners across India\'s most specialized markets.',
    Icon: Globe,
    path: '/capabilities/sourcing'
  },
  {
    id: '02',
    title: 'Design & PD',
    desc: 'Translating raw concepts into market-ready prototypes with precision product development.',
    Icon: Box,
    path: '/capabilities/design'
  },
  {
    id: '03',
    title: 'Manufacturing',
    desc: 'Executing full-scale production runs with unparalleled efficiency and massive raw material capacity.',
    Icon: Factory,
    path: '/capabilities/manufacturing'
  },
  {
    id: '04',
    title: 'Inspection & Compliance',
    desc: 'Rigorous, data-driven inspection protocols combined with comprehensive factory compliance to ensure ethical labor practices.',
    Icon: ShieldCheck,
    path: '/capabilities/quality-control-compliance'
  },
  {
    id: '05',
    title: 'Warehousing',
    desc: 'Secure, state-of-the-art storage and highly efficient fulfillment hubs positioned for immediate global dispatch.',
    Icon: Package,
    path: '/capabilities/warehousing'
  },
  {
    id: '06',
    title: 'Global Logistics',
    desc: 'We don\'t just manufacture your product; we ensure it reaches any port on earth with speed and priority clearance.',
    Icon: Truck,
    path: '/capabilities/logistics'
  },
  {
    id: '07',
    title: 'Digital Ops & Gen-Z Tech',
    desc: 'We deploy our elite Gen-Z IT engineers to build the bespoke software, dashboards, and AI integrations necessary to modernize your enterprise operations. Seamless supply chain visibility meets algorithmic efficiency.',
    Icon: Code,
    path: '/capabilities/tech',
    style: { gridColumn: '1 / -1', padding: '36px 30px' },
  }
];

const Capabilities = () => {
  const containerRef = useRef(null);
  const [showPhysicalScale, setShowPhysicalScale] = useState(true);
  const [showZeroRisk, setShowZeroRisk] = useState(true);

  const physicalTimerRef = useRef(null);
  const zeroRiskTimerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowPhysicalScale(true);
        setShowZeroRisk(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const triggerPhysicalScale = (autoDismiss = true) => {
    if (window.innerWidth > 768) {
      setShowPhysicalScale(true);
      return;
    }
    if (physicalTimerRef.current) clearTimeout(physicalTimerRef.current);
    setShowPhysicalScale(true);
    if (autoDismiss) {
      physicalTimerRef.current = setTimeout(() => {
        setShowPhysicalScale(false);
      }, 3500);
    }
  };

  const togglePhysicalScale = () => {
    if (window.innerWidth > 768) return;
    if (showPhysicalScale) {
      if (physicalTimerRef.current) clearTimeout(physicalTimerRef.current);
      setShowPhysicalScale(false);
    } else {
      triggerPhysicalScale(true);
    }
  };

  const triggerZeroRisk = (autoDismiss = true) => {
    if (window.innerWidth > 768) {
      setShowZeroRisk(true);
      return;
    }
    if (zeroRiskTimerRef.current) clearTimeout(zeroRiskTimerRef.current);
    setShowZeroRisk(true);
    if (autoDismiss) {
      zeroRiskTimerRef.current = setTimeout(() => {
        setShowZeroRisk(false);
      }, 3500);
    }
  };

  const toggleZeroRisk = () => {
    if (window.innerWidth > 768) return;
    if (showZeroRisk) {
      if (zeroRiskTimerRef.current) clearTimeout(zeroRiskTimerRef.current);
      setShowZeroRisk(false);
    } else {
      triggerZeroRisk(true);
    }
  };

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
              start: 'top 85%',
              once: true
            }
          }
        );
      });
    });
    return () => {
      cleanup();
      if (physicalTimerRef.current) clearTimeout(physicalTimerRef.current);
      if (zeroRiskTimerRef.current) clearTimeout(zeroRiskTimerRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', backgroundColor: 'var(--bg-main)', overflowX: 'hidden' }}>
      <Helmet>
        <title>Our Capabilities | Custom Sourcing &amp; IT Solutions | AAA 2 Innovate</title>
        <meta name="description" content="Explore AAA 2 Innovate's world-class B2B capabilities: Ethical Sourcing, Custom Manufacturing, Quality Control, Digital Warehousing, Global Logistics, and Elite Software Engineering." />
        <link rel="canonical" href="https://www.aaa2innovate.com/capabilities" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Capabilities | Custom Sourcing &amp; IT Solutions | AAA 2 Innovate" />
        <meta property="og:description" content="Explore AAA 2 Innovate's world-class B2B capabilities: Sourcing, Custom Manufacturing, Quality Control, Digital Warehousing, Global Logistics, and Elite Software Engineering." />
        <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/capabilities" />
      </Helmet>

      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Supply Chain Sourcing &amp; IT Engineering",
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


      {/* ─── 1. Cinematic Hero Section ─── */}
      <PageHero
        backgroundImage="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/services-hero.png"
        titleLine1="Our Core"
        titleLine2="B2B Capabilities."
        subtitle="We blend physical manufacturing in India with elite tech engineering to scale your enterprise globally."
        paddingTop="130px"
        paddingBottom="130px"
        overlayOpacity={0.9}
      />

      {/* ─── 2. Why Source in India Section ─── */}
      <section className="gsap-section" style={{ padding: 'clamp(40px, 5vw, 60px) 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'stretch' }}>
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="section-title-flex">
                <TextReveal text="Sourcing &amp;" elementType="span" />
                <span style={{ color: 'var(--brand-indigo)' }}>
                  <TextReveal text="Infrastructure" elementType="span" delay={0.15} />
                </span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                Organizations are no longer keeping all their eggs in one basket. Whether you've had imperfect experiences in past or you're simply looking to diversify. <br/> <br/>India has surged as the premier global destination for both physical manufacturing and elite digital engineering.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  "Highly competitive manufacturing and IT costs to stay ahead of the global market.",
                  "Access to a massive range of raw materials alongside top-tier algorithmic problem solving.",
                  "A unique design heritage spanning specialized markets and massive volumes.",
                ].map((point, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ marginTop: '2px', flexShrink: 0 }}>
                      <CheckCircle2 size={18} color="var(--brand-indigo)" />
                    </div>
                    <p style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600, lineHeight: '1.5', margin: 0 }}>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              onViewportEnter={() => triggerPhysicalScale(true)}
              transition={{ duration: 0.7 }}
              style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <TiltCard style={{ height: '100%', flex: 1 }}>
                <div
                  onClick={togglePhysicalScale}
                  style={{ position: 'relative', padding: '16px', height: '100%', maxHeight: '380px', boxSizing: 'border-box', cursor: 'pointer' }}
                >
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(34, 1, 80, 0.03)', borderRadius: '24px' }}></div>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: '0 25px 45px rgba(34, 1, 80, 0.16)' }}
                    transition={{ duration: 0.3 }}
                    className="media-showcase-card"
                    style={{ position: 'relative', zIndex: 2, borderRadius: '20px', cursor: 'pointer', height: '100%', maxHeight: '350px', overflow: 'hidden' }}
                  >
                    <motion.img
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      loading="lazy"
                      src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/services-physical.png"
                      alt="Manufacturing in India"
                      style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </motion.div>
                  <AnimatePresence>
                    {showPhysicalScale && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 15 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        style={{ position: 'absolute', bottom: '30px', right: '30px', zIndex: 3, backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '14px', boxShadow: '0 15px 35px rgba(34,1,80,0.12)', maxWidth: '240px', border: '1px solid var(--border-light)', userSelect: 'none' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                          <Factory size={20} color="var(--brand-indigo)" />
                          <span style={{ fontWeight: 800, fontSize: '14.5px', color: 'var(--brand-indigo)', fontFamily: 'var(--font-heading)' }}>Physical Scale</span>
                        </div>
                        <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>Vast networks of audited industrial and artisanal mills.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </TiltCard>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── 3. The Execution Process Section ─── */}
      <section className="gsap-section" style={{ padding: 'clamp(40px, 5vw, 60px) 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            
            {/* Left Image Group */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              onViewportEnter={() => triggerZeroRisk(true)}
              transition={{ duration: 0.7 }}
              style={{ order: window.innerWidth > 768 ? 1 : 2 }}
            >
              <TiltCard>
                <div
                  onClick={toggleZeroRisk}
                  style={{ position: 'relative', padding: '16px', cursor: 'pointer' }}
                >
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(34, 1, 80, 0.03)', borderRadius: '24px' }}></div>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: '0 25px 45px rgba(34, 1, 80, 0.16)' }}
                    transition={{ duration: 0.3 }}
                    className="media-showcase-card"
                    style={{ position: 'relative', zIndex: 2, borderRadius: '20px', cursor: 'pointer', overflow: 'hidden' }}
                  >
                    <motion.img
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      loading="lazy"
                      src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/services-digital.png"
                      alt="Digital Sourcing &amp; Engineering Operations"
                      style={{ width: '100%', display: 'block', height: '100%', objectFit: 'cover' }}
                    />
                    <div className="page-hero-overlay" style={{ borderRadius: '20px', opacity: 0.4 }} />
                  </motion.div>
                  <AnimatePresence>
                    {showZeroRisk && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 15 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        style={{ position: 'absolute', bottom: '30px', right: '30px', zIndex: 3, backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '14px', boxShadow: '0 15px 35px rgba(34,1,80,0.12)', maxWidth: '240px', border: '1px solid var(--border-light)', userSelect: 'none' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                          <Cpu size={20} color="var(--brand-indigo)" />
                          <span style={{ fontWeight: 800, fontSize: '14.5px', color: 'var(--brand-indigo)', fontFamily: 'var(--font-heading)' }}>Zero Risk</span>
                        </div>
                        <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>We never recommend unknown factories or unvetted tech stacks.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </TiltCard>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{ order: window.innerWidth > 768 ? 2 : 1 }}
            >
              <h2 className="section-title">
                Curated Execution Process
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                In order to source the right factory and materials for your physical goods, or to deploy the perfect digital architecture, we start with a highly detailed brief. There is too much at risk to leave execution to chance. We work exclusively with a curated selection of factories and elite developers whose strengths and weaknesses we know intimately.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  "We ensure the factory or tech team has the precise skills to build what you need.",
                  "We strictly enforce fair working conditions and sustainable production processes.",
                  "Once verified, we source materials from specialized markets or develop unique digital components specifically for you."
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ marginTop: '2px', backgroundColor: 'rgba(34, 1, 80, 0.06)', borderRadius: '50%', padding: '4px', flexShrink: 0 }}>
                      <ChevronRight size={14} color="var(--brand-indigo)" strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '14.5px', color: 'var(--text-primary)', lineHeight: '1.5', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── 4. Services Bento Matrix Section ─── */}
      <DivisionsBentoGrid
        title="Our Capabilities Matrix"
        subtitle="A world-class hybrid of physical supply chain mastery and elite software development."
        divisions={capabilitiesGridData}
      />

      {/* ─── 5. FAQ Section ─── */}
      <FAQSection
        title="Service FAQs"
        subtitle="Common questions about our end-to-end supply chain capabilities."
        faqs={[
          {
            question: "Do you offer partial supply chain services, or only end-to-end?",
            answer: "We offer both. While our core strength lies in managing the entire lifecycle from conceptualization to global delivery, we also provide modular services. You can engage us specifically for tech solutions, quality control, or logistics."
          },
          {
            question: "How do you handle quality control?",
            answer: "We deploy independent, multi-stage quality control protocols. This includes pre-production inspections, in-line audits, and final pre-shipment inspections to guarantee an AQL (Acceptable Quality Limit) that matches global standards."
          },
          {
            question: "Can you manage B2B and B2C logistics simultaneously?",
            answer: "Absolutely. Our smart warehousing and logistics network is equipped for high-volume B2B freight forwarding as well as granular, direct-to-consumer B2C fulfillment."
          },
          {
            question: "What industries and product categories do you specialize in?",
            answer: "We specialize in apparel, home textiles, fashion accessories, and general consumer goods on the physical manufacturing side, alongside custom SaaS platform engineering, CRM/ERP integrations, and logistics tracking systems on the digital side."
          }
        ]}
      />

      {/* ─── 6. Accreditations Marquee ─── */}
      <AccreditationsMarquee />

    </div>
  );
};

export default Capabilities;
