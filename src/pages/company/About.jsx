import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Target, Users, ShieldCheck, Cpu, Lightbulb, Globe, Server, Cloud,
  MapPin
} from 'lucide-react';
import SchemaInjector from '../../components/seo/SchemaInjector';
// import Breadcrumbs from '../../components/seo/Breadcrumbs';
import TiltCard from '../../components/animations/TiltCard';
import AccreditationsMarquee from '../../components/common/AccreditationsMarquee';
import DivisionsBentoGrid from '../../components/common/DivisionsBentoGrid';
import PageHero from '../../components/common/PageHero';
import { gsap, createGsapScope, animateNumberCounter } from '../../utils/gsapUtils';

const divisionsData = [
  {
    id: '01',
    title: 'Product Engineering',
    desc: 'Analyzing technical specs to engineer products that resonate, blending material mastery with CAD & 3D prototyping.',
    Icon: Lightbulb
  },
  {
    id: '02',
    title: 'Global Procurement',
    desc: 'Direct high-speed conduit to global manufacturing, managing vendor tiers for maximum leverage and production speed.',
    Icon: Globe
  },
  {
    id: '03',
    title: 'Digital Operations',
    desc: 'Eliminating data silos by integrating custom ERP systems to automate live data flow between offices and factory floors.',
    Icon: Server
  },
  {
    id: '04',
    title: 'Quality Assurance',
    desc: 'Rigorous AQL inspection protocols and certified international lab testing to ensure 100% defective-free delivery.',
    Icon: ShieldCheck
  },
  {
    id: '05',
    title: 'Global Logistics',
    desc: 'Powered by sister concern Zipaworld Innovation to orchestrate seamless ocean, air freight, and customs.',
    Icon: Cloud
  },
  {
    id: '06',
    title: 'Gen-Z Tech & AI',
    desc: 'Dedicated software engineering teams developing custom web apps, predictive sourcing AI, and operational workflows.',
    Icon: Cpu
  }
];

const About = () => {
  const containerRef = useRef(null);
  const counterRef1 = useRef(null);
  const counterRef2 = useRef(null);
  const counterRef3 = useRef(null);

  useEffect(() => {
    const cleanup = createGsapScope(containerRef, () => {
      // Counter animations
      if (counterRef1.current) animateNumberCounter(counterRef1.current, 15, '+');
      if (counterRef2.current) animateNumberCounter(counterRef2.current, 50, '+');
      if (counterRef3.current) animateNumberCounter(counterRef3.current, 100, '%');

      // Section Reveals
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

    return () => cleanup();
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', backgroundColor: 'var(--bg-main)', paddingTop: '80px', overflowX: 'hidden' }}>
      <Helmet>
        <title>About Us | Global Sourcing &amp; Tech Engineering | AAA 2 Innovate</title>
        <meta name="description" content="Learn about AAA 2 Innovate, a dynamic global enterprise bridging world-class product sourcing in India with elite Gen-Z IT software engineering." />
        <link rel="canonical" href="https://www.aaa2innovate.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us | Global Sourcing &amp; Tech Engineering | AAA 2 Innovate" />
        <meta property="og:description" content="Learn about AAA 2 Innovate, bridging world-class product sourcing in India with elite Gen-Z IT software engineering." />
        <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/about" />
      </Helmet>

      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About AAA 2 Innovate",
        "description": "Learn about AAA 2 Innovate, a dynamic enterprise connecting global product sourcing with elite IT engineering.",
        "url": "https://www.aaa2innovate.com/about",
        "publisher": {
          "@type": "Organization",
          "name": "AAA 2 Innovate Pvt. Ltd."
        }
      }} />

      {/* Breadcrumbs */}
      {/* <div style={{ position: 'absolute', top: '80px', left: 0, width: '100%', zIndex: 10 }}>
        <Breadcrumbs />
      </div> */}

      {/* 1. Cinematic Hero Section */}
      <PageHero
        backgroundImage="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/about/about_hero.png"
        titleLine1="Engineering the Future of"
        titleLine2="Global Commerce."
        subtitle="Where elite technological innovation meets world-class physical sourcing and audited manufacturing."
        paddingBottom="150px"
      />

      {/* 2. Our DNA Section */}
      <section style={{ padding: 'clamp(40px, 5vw, 60px) 0', backgroundColor: 'var(--bg-main)' }} className="gsap-section">
        <div className="container">
          <div className="about-grid">

            {/* Left: Text Content with Framer Motion */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >

              <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: 'var(--brand-indigo)', lineHeight: 1.22, marginBottom: '12px', letterSpacing: '-0.01em' }}>
                Powered by Gen-Z Agility &amp; Industry Mastery
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
                <p style={{ margin: 0 }}>
                  <strong>AAA 2 Innovate</strong> is driven by a razor-sharp workforce where <strong>90% of our talent consists of top engineering and sourcing specialists</strong> who approach traditional manufacturing and global supply chains with a digital-first, automated mindset.
                </p>
                <p style={{ margin: 0 }}>
                  By fusing cutting-edge software engineering with decades of vetted Indian manufacturing networks, we have built a dual-powerhouse enterprise designed to scale your operations effortlessly.
                </p>
              </div>

              <div className="about-bio-cta">
                <motion.a
                  href="#divisions"
                  className="btn-primary"
                  style={{ padding: '8px 18px', fontSize: '12.5px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(34, 1, 80, 0.3)' }}
                  whileTap={{ scale: 0.96 }}
                >
                  Explore 6 Core Divisions
                </motion.a>
              </div>
            </motion.div>

            {/* Right: Visual Showcase Card with Hover Zoom */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <TiltCard>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 25px 45px rgba(34, 1, 80, 0.16)' }}
                  transition={{ duration: 0.3 }}
                  className="media-showcase-card"
                  style={{ maxHeight: '340px', aspectRatio: '16/11', maxWidth: '460px', margin: '0 auto', cursor: 'pointer' }}
                >
                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    loading="lazy"
                    src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/about/about_vision.png"
                    alt="Digital Convergence at AAA 2 Innovate"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div className="media-showcase-overlay">
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>
                      Digital Convergence
                    </h3>
                    <p style={{ fontSize: '13px', color: '#CBD5E1', margin: 0, lineHeight: 1.4 }}>
                      Bridging on-ground Indian manufacturing with modern cloud architecture.
                    </p>
                  </div>
                </motion.div>
              </TiltCard>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. By the Numbers (Compact Enterprise Statistics) */}
      <section
        className="gsap-section"
        style={{
          padding: 'clamp(36px, 4.5vw, 50px) 0',
          backgroundColor: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '30px' }}
          >
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: 'var(--brand-indigo)', marginBottom: '8px' }}>
              Proven Scale &amp; Global Footprint
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', maxWidth: '640px', margin: '0 auto', lineHeight: 1.5 }}>
              A robust operational framework delivering measurable impact across international markets.
            </p>
          </motion.div>

          <div className="stats-grid-3">
            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="stat-card"
            >
              <div ref={counterRef1} className="stat-number">
                15+
              </div>
              <h3 className="stat-title">
                Countries Served
              </h3>
              <p className="stat-desc">
                End-to-end sourcing and software solutions across North America, Europe, and APAC.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="stat-card"
            >
              <div ref={counterRef2} className="stat-number">
                50+
              </div>
              <h3 className="stat-title">
                Manufacturing Partners
              </h3>
              <p className="stat-desc">
                A fully audited network of Indian industrial factories, mills, and artisan hubs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="stat-card"
            >
              <div ref={counterRef3} className="stat-number">
                100%
              </div>
              <h3 className="stat-title">
                Statutory Compliance
              </h3>
              <p className="stat-desc">
                Strict adherence to SA8000, ISO 14001, GOTS, and ethical labor certifications.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Leadership Section (The Architect) */}
      <section
        className="gsap-section"
        style={{
          padding: 'clamp(40px, 5vw, 60px) 0',
          backgroundColor: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="container">
          <div className="about-grid">

            {/* Left: Bio Text with Motion */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="pill-badge pill-badge-light">
                Founder &amp; Strategic Vision
              </div>

              <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: 'var(--brand-indigo)', lineHeight: 1.22, marginBottom: '14px', letterSpacing: '-0.01em' }}>
                Leadership at AAA 2 Innovate
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6 }}>
                <p style={{ margin: 0 }}>
                  <strong>Dr. Ambrish Kumar</strong> is the visionary Founder behind AAA 2 Innovate. With decades of international trade and supply chain mastery, he serves as the principal strategist driving our mission to modernize global commerce.
                </p>
                <p style={{ margin: 0 }}>
                  His uncompromising focus on certified quality, agile freight corridors, and compliance empowers global enterprises to execute complex supply operations seamlessly.
                </p>
              </div>
            </motion.div>

            {/* Right: Modern Founder Image Card with Motion */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <TiltCard>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 25px 45px rgba(34, 1, 80, 0.16)' }}
                  transition={{ duration: 0.3 }}
                  className="media-showcase-card"
                  style={{ backgroundColor: '#FFFFFF', maxWidth: '400px', margin: '0 auto', cursor: 'pointer' }}
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    loading="lazy"
                    src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/founder_modern.png"
                    alt="Dr. Ambrish Kumar - Founder, AAA 2 Innovate"
                    style={{ width: '100%', aspectRatio: '4/3', maxHeight: '280px', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ padding: '16px 20px', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
                    <div style={{ fontSize: '16.5px', fontWeight: 800, color: 'var(--brand-indigo)' }}>
                      Dr. Ambrish Kumar
                    </div>
                    <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '2px' }}>
                      Founder &amp; Chief Strategist
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. The Team / Collective Showcase */}
      <section style={{ padding: 'clamp(40px, 5vw, 60px) 0', backgroundColor: 'var(--bg-main)' }} className="gsap-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '30px' }}
          >
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: 'var(--brand-indigo)', marginBottom: '8px' }}>
              The Engine Behind the Innovation
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '680px', margin: '0 auto', lineHeight: 1.5 }}>
              A dynamic powerhouse of Gen-Z engineers and seasoned supply chain masters working in synergy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.015, boxShadow: '0 25px 50px rgba(34, 1, 80, 0.16)' }}
            className="media-showcase-card"
            style={{ maxHeight: '300px', cursor: 'pointer' }}
          >
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              loading="lazy"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="The AAA 2 Innovate Team"
              style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(34, 1, 80, 0.6) 0%, transparent 60%)', pointerEvents: 'none' }} />
          </motion.div>
        </div>
      </section>

      {/* 7. 6 Core Divisions Section - DARK THEME BENTO GRID */}
      <DivisionsBentoGrid
        title="Our 6 Core Divisions"
        subtitle="Integrating physical manufacturing, quality assurance, digital ERPs, and algorithmic tech."
        divisions={divisionsData}
      />

      {/* 8. Strategic Ecosystem (Zipaworld) */}
      <section
        className="gsap-section"
        style={{
          padding: 'clamp(40px, 5vw, 60px) 0',
          backgroundColor: '#140038',
          color: '#FFFFFF',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="container">
          <div className="responsive-grid-2" style={{ alignItems: 'center', gap: 'clamp(24px, 3.5vw, 48px)' }}>
            
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="pill-badge pill-badge-blue" style={{ marginBottom: '14px' }}>
                Strategic Ecosystem
              </div>

              <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px', lineHeight: 1.22 }}>
                Backed by a Global Logistics Leader
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <motion.div
                  whileHover={{ x: 6, backgroundColor: 'rgba(255, 255, 255, 0.08)', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                  transition={{ duration: 0.25 }}
                  className="feature-list-card"
                  style={{ cursor: 'default' }}
                >
                  <div style={{ padding: '8px', backgroundColor: 'rgba(96, 165, 250, 0.15)', borderRadius: '10px', flexShrink: 0 }}>
                    <ShieldCheck color="#FFFFFF" size={18} />
                  </div>
                  <div>
                    <h3 style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 700, marginBottom: '2px' }}>Freight Leadership</h3>
                    <p style={{ color: '#CBD5E1', fontSize: '13px', lineHeight: 1.45, margin: 0 }}>
                      Powered by <strong style={{ color: '#FFFFFF' }}>Zipaworld Innovation</strong>, guaranteeing priority shipping slots and freight transparency.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 6, backgroundColor: 'rgba(255, 255, 255, 0.08)', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                  transition={{ duration: 0.25 }}
                  className="feature-list-card"
                  style={{ cursor: 'default' }}
                >
                  <div style={{ padding: '8px', backgroundColor: 'rgba(96, 165, 250, 0.15)', borderRadius: '10px', flexShrink: 0 }}>
                    <Globe color="#FFFFFF" size={18} />
                  </div>
                  <div>
                    <h3 style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 700, marginBottom: '2px' }}>End-to-End Reliability</h3>
                    <p style={{ color: '#CBD5E1', fontSize: '13px', lineHeight: 1.45, margin: 0 }}>
                      From factory floor in India to destination port clearance and warehousing in the US and Europe.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: 3D Floating Logo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <TiltCard>
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.03, boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)' }}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '30px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.35)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    width: '100%',
                    maxWidth: '380px',
                    margin: '0 auto',
                    cursor: 'pointer'
                  }}
                >
                  <img
                    loading="lazy"
                    src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/zipaworld-logo.png"
                    alt="Zipaworld Logistics Ecosystem"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '75px',
                      objectFit: 'contain'
                    }}
                  />
                </motion.div>
              </TiltCard>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 9. Global Footprint Section */}
      <section
        className="gsap-section"
        style={{
          padding: 'clamp(40px, 5vw, 60px) 0',
          backgroundColor: '#220150',
          color: '#FFFFFF'
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(24px, 3.5vw, 40px)', alignItems: 'center' }}>

            {/* Left Title */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ flex: '1 1 min(100%, 300px)', minWidth: 0 }}
            >
              <div className="pill-badge pill-badge-blue" style={{ marginBottom: '12px' }}>
                <Globe size={13} /> Global Reach
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 34px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px', lineHeight: 1.22 }}>
                Executing at Scale. Anywhere.
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: '14.5px', lineHeight: 1.5, margin: 0 }}>
                With strategic headquarters across Indian manufacturing hubs and international liaison points, we ensure flawless operations.
              </p>
            </motion.div>

            {/* Right Content - Interactive Badges */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ flex: '1.4 1 min(100%, 420px)', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}
            >

              {/* India Operations */}
              <motion.div
                whileHover={{ borderColor: 'rgba(255, 255, 255, 0.25)', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)' }}
                transition={{ duration: 0.25 }}
                className="location-hub-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '6px', backgroundColor: 'rgba(96, 165, 250, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={14} color="#FFFFFF" />
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>India Operations</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
                  <motion.span
                    whileHover={{ scale: 1.06, backgroundColor: 'rgba(96, 165, 250, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    className="location-tag-primary"
                  >
                    Noida (Head Office)
                  </motion.span>

                  {['Mumbai', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad'].map(city => (
                    <motion.span
                      key={city}
                      whileHover={{ scale: 1.08, backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.25)' }}
                      whileTap={{ scale: 0.95 }}
                      className="location-tag"
                    >
                      {city}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* International Hubs */}
              <motion.div
                whileHover={{ borderColor: 'rgba(255, 255, 255, 0.25)', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)' }}
                transition={{ duration: 0.25 }}
                className="location-hub-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '6px', backgroundColor: 'rgba(96, 165, 250, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Globe size={14} color="#FFFFFF" />
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>International Hubs</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['London', 'Dubai', 'China', 'Germany'].map(city => (
                    <motion.span
                      key={city}
                      whileHover={{ scale: 1.08, backgroundColor: 'rgba(255, 255, 255, 0.15)', borderColor: 'rgba(255, 255, 255, 0.25)' }}
                      whileTap={{ scale: 0.95 }}
                      className="location-tag"
                    >
                      {city}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. Accreditations Infinite Marquee (Matching Home) */}
      <AccreditationsMarquee />

    </div>
  );
};

export default About;
