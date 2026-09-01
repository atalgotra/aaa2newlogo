import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Heart, Globe, Droplets, Zap, ArrowRight, GraduationCap, Recycle } from 'lucide-react';
import CTASection from '../components/common/CTASection';
import TextReveal from '../components/animations/TextReveal';
import PageHero from '../components/common/PageHero';
import SchemaInjector from '../components/seo/SchemaInjector';
import TiltCard from '../components/animations/TiltCard';
import AccreditationsMarquee from '../components/common/AccreditationsMarquee';
import { gsap, createGsapScope } from '../utils/gsapUtils';

const HoverCert = ({ text }) => {
  return (
    <span 
      style={{ fontSize: '26px', fontWeight: 800, color: '#9CA3AF', letterSpacing: '0px', cursor: 'pointer', transition: 'all 0.3s ease' }}
      onMouseOver={(e) => { e.currentTarget.style.color = 'var(--brand-orange)'; e.currentTarget.style.transform = 'scale(1.1)'; }}
      onMouseOut={(e) => { e.currentTarget.style.color = '#9CA3AF'; e.currentTarget.style.transform = 'scale(1)'; }}
    >
      {text}
    </span>
  );
};

const EthicalSourcing = () => {
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

  return (
    <div ref={containerRef} style={{ width: '100%', backgroundColor: 'var(--bg-main)', minHeight: '100vh', overflowX: 'hidden' }}>
      <Helmet>
        <title>Ethical Sourcing & Sustainability | AAA 2 Innovate</title>
        <meta name="description" content="We enforce strict compliance, fair labor practices, and sustainable procurement across our entire Indian manufacturing network. Source globally with absolute integrity." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ethical Sourcing & Sustainability | AAA 2 Innovate" />
        <meta property="og:description" content="We enforce strict compliance, fair labor practices, and sustainable procurement across our entire Indian manufacturing network. Source globally with absolute integrity." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/ethical-sourcing" />
      </Helmet>

      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Ethical Sourcing & Sustainability",
        "description": "Learn about AAA 2 Innovate's commitment to ethical sourcing, sustainable manufacturing, and our rigorous compliance standards.",
        "publisher": {
          "@type": "Organization",
          "name": "AAA 2 Innovate"
        }
      }} />

      {/* Hero Section */}
      <PageHero
        backgroundImage="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/ethical_hero.png"
        titleLine1="Elevating Global Standards"
        subtitle="AAA 2 Innovate is dedicated to pioneering uncompromising ethical sourcing and sustainable manufacturing. We believe luxury and responsibility must go hand in hand."
        minHeight="100vh"
        paddingTop="175px"
        paddingBottom="80px"
        centered={true}
      />

      {/* Sustainable Practices Section */}
      <section className="gsap-section" style={{ padding: 'clamp(60px, 8vw, 100px) 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            
            {/* Left Content */}
            <div>
              <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 800, color: 'var(--brand-indigo)', marginBottom: '24px', lineHeight: 1.2, fontFamily: 'var(--font-display)' }}>
                <TextReveal text="Pioneering Sustainable" elementType="span" />
                <span style={{ color: 'var(--brand-indigo)' }}>
                  <TextReveal text="Manufacturing" elementType="span" delay={0.15} />
                </span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
                At AAA 2 Innovate, we combine world-class production with environmental responsibility, helping partners reduce resource use and carbon footprints.              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6, marginBottom: '32px' }}>
               We support renewable energy, efficient water management, effluent treatment, closed-loop systems, and rainwater harvesting across our manufacturing network.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: 'var(--bg-secondary)', padding: '16px 20px', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                  <Zap color="var(--brand-indigo)" size={24} />
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '14.5px', margin: 0, fontFamily: 'var(--font-heading)' }}>Renewable Energy</h4>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>Solar & Wind Systems</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: 'var(--bg-secondary)', padding: '16px 20px', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                  <Droplets color="var(--brand-indigo)" size={24} />
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '14.5px', margin: 0, fontFamily: 'var(--font-heading)' }}>Water Audit</h4>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>Effluent Recycling</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Graphics Panel with TiltCard */}
            <div style={{ position: 'relative', width: '100%' }}>
              <TiltCard style={{ width: '100%' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="media-showcase-card"
                  style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', cursor: 'pointer', height: '380px' }}
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    loading="lazy"
                    src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/ethical_sustainability.png"
                    alt="Sustainable Manufacturing"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div className="media-showcase-overlay">
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>
                      Ecological Stewardship
                    </h3>
                    <p style={{ fontSize: '13px', color: '#CBD5E1', margin: 0, lineHeight: 1.4 }}>
                      Integrating closed-loop water treatment, solar-powered mills, and certified organic textiles across India.
                    </p>
                  </div>
                </motion.div>
              </TiltCard>
            </div>

          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="gsap-section" style={{ padding: 'clamp(60px, 8vw, 60px) 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 800, color: 'var(--brand-indigo)', marginBottom: '20px', fontFamily: 'var(--font-display)' }}>Internationally Certified Excellence</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto 10px auto' }}>
            Our vendor network operates strictly under global regulatory standards, including SA8000 and ISO 14001. Facilities are registered with the Control Union, holding premium certifications such as GOTS, OCS, Sedex, BSCI, and C-TPAT. We ensure full Garment Transfer Certificates for sustainable fabrics like organic cotton, BCI, and Lenzing sustainable viscose.
          </p>
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="gsap-section" style={{ padding: 'clamp(60px, 8vw, 100px) 0', backgroundColor: '#220150' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            
            {/* Left Graphics Panel with TiltCard */}
            <div style={{ position: 'relative', width: '100%' }}>
              <TiltCard style={{ width: '100%' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, x: -20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="media-showcase-card"
                  style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', cursor: 'pointer', height: '380px' }}
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    loading="lazy"
                    src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/ethical_community.png"
                    alt="Empowering Communities"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div className="media-showcase-overlay">
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>
                      Inclusive Community Uplift
                    </h3>
                    <p style={{ fontSize: '13px', color: '#CBD5E1', margin: 0, lineHeight: 1.4 }}>
                      Partnering with Cheshire Home Society India to advance disability inclusion, vocational training, and dignified livelihoods.
                    </p>
                  </div>
                </motion.div>
              </TiltCard>
            </div>

            {/* Right Content */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 className="mobile-text-center" style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px', lineHeight: 1.2, fontFamily: 'var(--font-display)' }}>
                <TextReveal text="Empowering the" elementType="span" className="text-reveal-center-mobile" />
                <span style={{ color: '#FFFFFF' }}>
                  <TextReveal text="Future of India" elementType="span" delay={0.15} className="text-reveal-center-mobile" />
                </span>
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
                True responsibility begins with community prosperity. We support the people behind our sourcing network.
              </p>
              <p style={{ color: '#CBD5E1', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
We proudly support Cheshire Home Society India, advancing inclusion, care, and livelihood opportunities while helping create a more empowered and independent future for individuals with disabilities.
              </p>

              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '20px', marginTop: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '16px 20px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <GraduationCap color="#FFFFFF" size={24} />
                  <div>
                    <h4 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '14.5px', margin: 0, fontFamily: 'var(--font-heading)' }}>Skill Development</h4>
                    <span style={{ color: '#CBD5E1', fontSize: '12px' }}>Future Livelihoods</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '16px 20px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <Recycle color="#FFFFFF" size={24} />
                  <div>
                    <h4 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '14.5px', margin: 0, fontFamily: 'var(--font-heading)' }}>Sustainable Impact</h4>
                    <span style={{ color: '#CBD5E1', fontSize: '12px' }}>Upcycling Communities</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <CTASection 
        titlePrefix="Partner with"
        highlightText="Responsibility"
        description="Join us in our mission to create world-class products without compromising on ethical standards or the environment."
        buttonText="Help me source products"
      />

      {/* Accreditations Marquee */}
      <AccreditationsMarquee />
    </div>
  );
};

export default EthicalSourcing;

