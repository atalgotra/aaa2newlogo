import React, { useEffect } from 'react';
import FAQSection from '../../components/seo/FAQSection';
import SchemaInjector from '../../components/seo/SchemaInjector';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTASection from '../../components/CTASection';
import { ArrowLeft, Globe, MapPin, Layers, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';


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
  },
  {
    "question": "Can you source raw materials as well as finished goods?",
    "answer": "Absolutely. We procure everything from raw textiles and metals to fully assembled, market-ready consumer products."
  }
];

const Sourcing = () => {
return (
    <div style={{ width: '100%', backgroundColor: 'var(--bg-main)', paddingTop: '90px' }}>
      <Helmet>
        <title>Global Sourcing & Procurement Services | AAA 2 Innovate</title>
        <meta name="description" content="Leverage our elite sourcing network in India. We procure high-quality materials and products directly from vetted factories, completely eliminating middleman markups." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Global Sourcing & Procurement Services | AAA 2 Innovate" />
        <meta property="og:description" content="Leverage our elite sourcing network in India. We procure high-quality materials and products directly from vetted factories, completely eliminating middleman markups." />
        <meta name="twitter:card" content="summary_large_image" />
              <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/" />
  <link rel="canonical" href="https://www.aaa2innovate.com/services/sourcing" />
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

      <div style={{ position: 'absolute', top: '90px', left: 0, width: '100%', zIndex: 10 }}>
        <Breadcrumbs />
      </div>




      {/* Hero Section */}
      <section style={{
        minHeight: '60vh',  
        display: 'flex', 
        alignItems: 'center', 
        paddingTop: '80px', // Prevent overlap with breadcrumbs
        paddingBottom: '60px', // Prevent content clipping
        backgroundColor: '#05080F', 
        backgroundImage: 'linear-gradient(rgba(5, 8, 15, 0.7), rgba(5, 8, 15, 0.8)), url(https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/sourcing_hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,87,34,0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ fontSize: 'clamp(36px, 7vw, 56px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px', lineHeight: '1.1' }}
            >
              Global Sourcing & <span style={{ color: 'var(--brand-orange)' }}>Procurement</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontSize: '20px', color: '#9CA3AF', lineHeight: '1.6', marginBottom: '0' }}
            >
              We locate, vet, and integrate the perfect manufacturing partners for your physical goods. From raw material acquisition to final assembly, we manage every layer of the vendor ecosystem across India's most specialized markets.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section style={{ padding: 'clamp(60px, 10vw, 100px) 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            
            <div className="service-matrix-card" style={{ padding: '40px', backgroundColor: '#05080F', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column' }}>
              <div className="matrix-card-bg" style={{ backgroundImage: 'url(/images/services/sourcing.png)' }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <MapPin size={32} color="var(--brand-orange)" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Specialized Vendor Ecosystem</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  We don't rely on generic directories. We maintain direct relationships with elite, niche factories located deep within India's specialized industrial corridors, guaranteeing access to domain-specific expertise.
                </p>
              </div>
            </div>

            <div className="service-matrix-card" style={{ padding: '40px', backgroundColor: '#05080F', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column' }}>
              <div className="matrix-card-bg" style={{ backgroundImage: 'url(https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/manufacturing.png)' }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <Layers size={32} color="var(--brand-orange)" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Raw Material Acquisition</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  The foundation of a world-class product is its material. We secure premium, sustainably sourced raw materials at massive scale, ensuring supply chain resilience and uncompromising end-product quality.
                </p>
              </div>
            </div>

            <div className="service-matrix-card service-matrix-card-tech" style={{ padding: '40px', backgroundColor: '#05080F', borderRadius: '24px', border: '1px solid rgba(56, 189, 248, 0.2)', display: 'flex', flexDirection: 'column' }}>
              <div className="matrix-card-bg" style={{ backgroundImage: 'url(https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/ai_tech.png)' }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                  <Cpu size={32} color="#38BDF8" />
                  <span style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38BDF8', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>TECH INTEGRATED</span>
                </div>
                <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Algorithmic Visibility</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  Our Gen-Z IT division deploys custom software mapping the entire vendor network. You gain real-time transparency into material origin, vendor capacity, and procurement timelines via your bespoke dashboard.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Zero Risk Banner */}
      <section style={{ padding: '60px 0', backgroundColor: 'var(--brand-orange)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '30px' }}>
            <div style={{ flex: '1 1 500px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '50%' }}>
                <ShieldCheck size={40} color="var(--brand-orange)" />
              </div>
              <div>
                <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>The "Zero Risk" Mandate</h2>
                <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', margin: 0 }}>We never recommend unknown factories or unvetted material sources.</p>
              </div>
            </div>
            <div style={{ flex: '0 0 auto' }}>
              <Link to="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#05080F', color: '#FFFFFF', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '16px', transition: 'transform 0.2s', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                View Our Vetting Standards
              </Link>
            </div>
          </div>
        </div>
      </section>


      
      {/* Semantic FAQ Section */}
      <FAQSection faqs={serviceFaqs} title="Frequently Asked Questions" />

      {/* Next Step Transition */}
      <section style={{ padding: 'clamp(40px, 8vw, 60px) 0 clamp(50px, 8vw, 80px) 0', backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Next in the Matrix</p>
          <Link to="/services/design" style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', textDecoration: 'none', group: 'true' }}>
            <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800, color: 'var(--text-primary)', margin: 0, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--brand-orange)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
              Design & PD
            </h2>
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: '50%', display: 'flex', transition: 'background-color 0.2s' }}>
              <ArrowRight size={32} color="var(--brand-orange)" />
            </div>
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <CTASection titlePrefix="Ready to" highlightText="Source?" description="Tap into a global network of elite suppliers. We negotiate, procure, and manage the highest quality raw materials so you can focus entirely on scaling your brand." buttonText="Find Better Suppliers" />
    </div>
  );
};

export default Sourcing;




