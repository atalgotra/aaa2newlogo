import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, MapPin, Layers, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';
import FAQSection from '../../components/common/FAQSection';
import SchemaInjector from '../../components/seo/SchemaInjector';
// import Breadcrumbs from '../../components/seo/Breadcrumbs';
import CTASection from '../../components/CTASection';
import TiltCard from '../../components/animations/TiltCard';
import PageHero from '../../components/common/PageHero';
import AccreditationsMarquee from '../../components/common/AccreditationsMarquee';
import DivisionsBentoGrid from '../../components/common/DivisionsBentoGrid';
import { gsap, createGsapScope } from '../../utils/gsapUtils';


const sourcingCapabilitiesData = [
  {
    id: '01',
    title: 'Specialized Vendor Ecosystem',
    desc: "We partner directly with niche factories across India's specialized industrial corridors, ensuring domain-specific expertise and reliable production.",
    Icon: MapPin
  },
  {
    id: '02',
    title: 'Raw Material Acquisition',
    desc: 'We secure premium, sustainably sourced raw materials at scale, ensuring supply resilience and consistent product quality.',
    Icon: Layers
  },
  {
    id: '03',
    title: 'Algorithmic Visibility',
    desc: 'Our custom software provides real-time visibility into material origins, vendor capacity, and procurement timelines.',
    Icon: Cpu
  }
];

const serviceFaqs = [
  {
    "question": "What is your product sourcing process in India?",
    "answer": "Our sourcing process begins with identifying your product requirements, matching them with vetted Indian manufacturers, conducting strict quality control protocols, and managing the end-to-end supply chain until final delivery."
  },
  {
    "question": "How do you ensure ethical sourcing?",
    "answer": "We strictly partner with factories that comply with international labor laws, ethical standards, and environmental regulations. We conduct routine site visits and compliance audits."
  },
  {
    "question": "Do you handle the export documentation?",
    "answer": "Yes, we manage all export documentation, customs clearance, and freight forwarding to ensure a seamless door-to-door delivery experience."
  },
  {
    "question": "Why source from India instead of other regions?",
    "answer": "India offers a unique combination of high-quality craftsmanship, English-speaking management, democratic stability, and rapidly modernizing infrastructure, making it a highly resilient alternative."
  }
];

const Sourcing = () => {
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
    <div ref={containerRef} style={{ width: '100%', backgroundColor: 'var(--bg-main)', paddingTop: '80px', overflowX: 'hidden' }}>
      <Helmet>
        <title>Global Sourcing & Procurement Services | AAA 2 Innovate</title>
        <meta name="description" content="Leverage our elite sourcing network in India. We procure high-quality materials and products directly from vetted factories, completely eliminating middleman markups." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Global Sourcing & Procurement Services | AAA 2 Innovate" />
        <meta property="og:description" content="Leverage our elite sourcing network in India. We procure high-quality materials and products directly from vetted factories, completely eliminating middleman markups." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/" />
        <link rel="canonical" href="https://www.aaa2innovate.com/capabilities/sourcing" />
      </Helmet>
      
      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Global Product Sourcing",
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
        backgroundImage="/images/services/sourcing.png"
        titleLine1="Global Sourcing &"
        titleLine2="Procurement"
        subtitle="We source and vet trusted manufacturing partners across India’s specialized markets. From raw materials to final assembly, we manage your entire vendor ecosystem."
        paddingTop="115px"
        paddingBottom="115px"
        overlayOpacity={0.9}
      />

      {/* Core Capabilities */}
      <DivisionsBentoGrid
        theme="light"
        title="Strategic Vendor Networks"
        divisions={sourcingCapabilitiesData}
      />

      {/* Zero Risk Banner */}
      <section className="gsap-section" style={{ padding: 'clamp(24px, 3.5vw, 36px) 0', backgroundColor: '#220150', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
            <div style={{ flex: '1 1 500px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '10px', borderRadius: '50%', flexShrink: 0 }}>
                <ShieldCheck size={24} color="var(--text-light)" />
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>The "Zero Risk" Mandate</h2>
                <p style={{ fontSize: '14px', color: '#CBD5E1', margin: 0, lineHeight: 1.45 }}>We never recommend unknown factories or unvetted material sources.</p>
              </div>
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
          <Link to="/capabilities/design" className="next-transition-link">
            <motion.h2 
              whileHover={{ x: -4 }}
              style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, color: 'var(--brand-indigo)', margin: 0, fontFamily: 'var(--font-display)' }}
            >
              Design & PD
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
      <CTASection titlePrefix="Ready to" highlightText="Source?" description="Tap into a global network of elite suppliers. We negotiate, procure, and manage the highest quality raw materials so you can focus entirely on scaling your brand." buttonText="Find Better Suppliers" />

      {/* Accreditations Marquee */}
      <AccreditationsMarquee />
    </div>
  );
};

export default Sourcing;




