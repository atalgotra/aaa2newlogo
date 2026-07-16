import React, { useEffect } from 'react';
import FAQSection from '../../components/seo/FAQSection';
import SchemaInjector from '../../components/seo/SchemaInjector';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTASection from '../../components/CTASection';
import { ArrowLeft, ArrowRight, Plane, Ship, Train, Truck, ShieldCheck, Zap, Globe2, FileText, CheckCircle2 } from 'lucide-react';

const stats = [
  { value: '120+', label: 'Global Ports' },
  { value: '24/7', label: 'Operations & Sales' },
  { value: '< 10m', label: 'Quote Response' },
  { value: '100%', label: 'Automated Docs' },
];

const modalPillars = [
  {
    icon: Plane,
    title: 'Air Freight',
    desc: 'Velocity at scale. Priority routing and dedicated capacity for time-critical components and high-value merchandise.',
    color: '#38BDF8'
  },
  {
    icon: Ship,
    title: 'Ocean Freight',
    desc: 'Massive scale efficiency. Securing TEU capacity and optimizing transit times across critical global shipping lanes.',
    color: '#818CF8'
  },
  {
    icon: Train,
    title: 'Rail Freight',
    desc: 'The strategic middle-ground. Reliable, cost-effective, and highly predictable transit for bulk continental transport.',
    color: '#A78BFA'
  },
  {
    icon: Truck,
    title: 'Road & Surface',
    desc: 'First and last-mile dominance. A sprawling, fully-tracked trucking network ensuring door-to-door continuity.',
    color: '#F472B6'
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
return (
    <div style={{ width: '100%', backgroundColor: 'var(--bg-main)', paddingTop: '90px' }}>
      <Helmet>
        <title>Global B2B Logistics & Freight Forwarding | AAA 2 Innovate</title>
        <meta name="description" content="Command your global supply chain with our fully automated logistics infrastructure, powered by Zipaworld. Real-time quoting, route optimization, and digital documentation." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Global B2B Logistics & Freight Forwarding | AAA 2 Innovate" />
        <meta property="og:description" content="Command your global supply chain with our fully automated logistics infrastructure, powered by Zipaworld. Real-time quoting, route optimization, and digital documentation." />
        <meta name="twitter:card" content="summary_large_image" />
              <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/" />
  <link rel="canonical" href="https://www.aaa2innovate.com/services/logistics" />
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

      <div style={{ position: 'absolute', top: '90px', left: 0, width: '100%', zIndex: 10 }}>
        <Breadcrumbs />
      </div>




      {/* Cinematic Hero */}
      <section style={{ minHeight: '60vh', position: 'relative', display: 'flex', alignItems: 'center', paddingTop: '80px', paddingBottom: '60px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
          <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/logistics_hero.png" alt="Global Logistics Command Center" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(90deg, rgba(2,4,10,0.95) 0%, rgba(2,4,10,0.7) 50%, rgba(2,4,10,0.4) 100%)' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '650px' }}
          >

            
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px', lineHeight: 1.1, letterSpacing: '-1px' }}>
              Global Freight <br/><span style={{ color: 'var(--brand-orange)' }}>& Logistics.</span>
            </h1>
            
            <p style={{ fontSize: '18px', color: '#E5E7EB', lineHeight: 1.6, maxWidth: '600px', marginBottom: '48px', fontWeight: 400 }}>
              Production is only half the battle. We control the physical movement of goods across the globe with zero latency, total transparency, and algorithmic precision.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', maxWidth: '700px' }}>
              {stats.map((stat, index) => (
                <div key={index} style={{ backgroundColor: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', borderRadius: '16px', borderBottom: '3px solid var(--brand-orange)' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px', lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Zipaworld Engine Integration */}
      <section style={{ padding: 'clamp(40px, 10vw, 60px) 0 clamp(60px, 10vw, 100px)', backgroundColor: '#02040A' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '80px', alignItems: 'center' }}>
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/zipaworld-logo-dark.png" alt="Zipaworld Logo" style={{ height: '64px' }} />
                <span style={{ color: '#6B7280', fontSize: '18px' }}>|</span>
                <span style={{ color: '#9CA3AF', fontSize: '16px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Sister Concern Engine</span>
              </div>

              <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px', lineHeight: 1.2 }}>
                Powered by the <br/><span style={{ color: 'var(--brand-orange)' }}>Logistics E-Mall</span> of India.
              </h2>
              
              <p style={{ fontSize: '18px', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '24px', textAlign: 'justify' }}>
                Our logistics infrastructure isn't just a department; it's an entirely proprietary tech company. <strong>Zipaworld Innovation Pvt. Ltd.</strong> serves as the technological backbone of our global transit operations.
              </p>
              
              <p style={{ fontSize: '18px', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '40px', textAlign: 'justify' }}>
                Through Zipaworld, our processes are fully automated. We leverage real-time quoting, algorithmic route optimization, and digital documentation. Our strong operations and sales teams work round the clock—ensuring that a lightning-fast response to your cargo needs remains our first and foremost priority.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {['Automated Documentation', 'Instant Quoting', 'Live Track & Trace', '24/7 Operations Center'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <Zap size={18} color="#38BDF8" style={{ flexShrink: 0 }} />
                    <span style={{ color: '#F3F4F6', fontSize: '14px', fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Image Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex' }}
            >
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/zipaworld_engine.png" 
                alt="Zipaworld Automated Dashboard" 
                style={{ 
                  width: '100%', 
                  height: '100%',
                  minHeight: '500px',
                  objectFit: 'cover',
                  borderRadius: '32px',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(56, 189, 248, 0.2)'
                }} 
              />
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Multi-Modal Dominance Grid */}
      <section style={{ padding: '60px 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>Multi-Modal Dominance</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
              We dictate terms across the earth, ocean, and sky. Seamless intermodal transitions orchestrated through a single unified dashboard.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {modalPillars.map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  backgroundColor: 'var(--bg-secondary)', 
                  padding: '48px 32px', 
                  borderRadius: '24px', 
                  border: '1px solid var(--border-light)',
                  transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
                whileHover={{ 
                  transform: 'translateY(-12px)', 
                  boxShadow: `0 24px 48px ${pillar.color}25`,
                  borderColor: pillar.color
                }}
              >
                <div style={{ 
                  backgroundColor: 'var(--bg-main)', 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '24px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '32px', 
                  boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                  transition: 'transform 0.4s ease'
                }}>
                  <pillar.icon size={36} color={pillar.color} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px', letterSpacing: '-0.5px' }}>{pillar.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      
      {/* Semantic FAQ Section */}
      <FAQSection faqs={serviceFaqs} title="Frequently Asked Questions" />

      {/* Next Step Transition */}
      <section style={{ padding: 'clamp(40px, 8vw, 60px) 0 clamp(50px, 8vw, 80px) 0', backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Next in the Matrix</p>
          <Link to="/services/tech" style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', textDecoration: 'none', group: 'true' }}>
            <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800, color: 'var(--text-primary)', margin: 0, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--brand-orange)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
              Digital Ops & Gen-Z Tech
            </h2>
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: '50%', display: 'flex', transition: 'background-color 0.2s' }}>
              <ArrowRight size={32} color="var(--brand-orange)" />
            </div>
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <CTASection titlePrefix="Ready to" highlightText="Optimize?" description="Stop leaking revenue through inefficient routing. We engineer robust, AI-powered logistics networks to ensure your supply chain operates at maximum velocity and minimal cost." buttonText="Optimize My Supply Chain" />
    </div>
  );
};

export default Logistics;




