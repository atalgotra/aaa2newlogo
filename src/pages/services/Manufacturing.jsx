import React, { useEffect } from 'react';
import FAQSection from '../../components/seo/FAQSection';
import SchemaInjector from '../../components/seo/SchemaInjector';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTASection from '../../components/CTASection';
import { ArrowLeft, Factory, MapPin, Cpu, ShieldCheck, Zap, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Vetted Factories' },
  { value: '20+', label: 'Industrial Hubs' },
  { value: '99%', label: 'On-Time Delivery' },
  { value: '0', label: 'Defect Tolerance' },
];

const processSteps = [
  {
    num: '01',
    icon: ShieldCheck,
    title: 'Pre-Production Audit',
    desc: 'Before a single unit is made, our on-ground team audits factory readiness—capacity allocation, raw material arrival, and machinery calibration. We eliminate surprises before they happen.',
  },
  {
    num: '02',
    icon: Cpu,
    title: 'Inline Tracking Dashboard',
    desc: 'Our Gen-Z IT division deploys custom monitoring software that delivers real-time production updates directly to your dashboard. You know exactly where your order stands, at every moment.',
    tech: true,
  },
  {
    num: '03',
    icon: Zap,
    title: 'Rapid Iteration Loops',
    desc: 'When an adjustment is needed mid-production—whether specification, color, or trim—our in-factory liaisons execute changes at speed, keeping your timeline perfectly intact.',
  },
  {
    num: '04',
    icon: Users,
    title: 'Assembly & Finishing',
    desc: 'Our specialists oversee the final assembly, finishing, labelling, and packaging. Every unit leaving our factories meets our uncompromising standard before it reaches your fulfilment center.',
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
return (
    <div style={{ width: '100%', backgroundColor: 'var(--bg-main)', fontFamily: 'Outfit, sans-serif', paddingTop: '90px' }}>
      <Helmet>
        <title>Precision Custom Manufacturing in India | AAA 2 Innovate</title>
        <meta name="description" content="End-to-end precision manufacturing across 500+ specialized Indian factories. Benefit from real-time tracking, massive scalability, and zero-defect tolerance." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Precision Custom Manufacturing in India | AAA 2 Innovate" />
        <meta property="og:description" content="End-to-end precision manufacturing across 500+ specialized Indian factories. Benefit from real-time tracking, massive scalability, and zero-defect tolerance." />
        <meta name="twitter:card" content="summary_large_image" />
              <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/" />
  <link rel="canonical" href="https://www.aaa2innovate.com/services/manufacturing" />
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

      <div style={{ position: 'absolute', top: '90px', left: 0, width: '100%', zIndex: 10 }}>
        <Breadcrumbs />
      </div>




      {/* Hero Section */}
      <section style={{
        minHeight: '60vh',  
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px', // Prevent overlap with breadcrumbs
        paddingBottom: '60px', // Prevent button clipping
        backgroundColor: '#02040A', 
        position: 'relative', 
        overflow: 'hidden',
        backgroundImage: 'url(https://aaawebisteimages.s3.ap-south-1.amazonaws.com/manufacturing_hero_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Dark overlay to make text readable */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.75)' }}></div>
        {/* Gradient fade to seamlessly blend into the next section */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to bottom, transparent, rgba(255,87,34,0.05))' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Left-aligned, narrower text container */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', maxWidth: '750px' }}>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-hero" style={{ color: '#FFFFFF', marginBottom: '24px', letterSpacing: '-1px' }}
            >
              Global-Scale <br/><span style={{ color: 'var(--brand-orange)' }}>Manufacturing Operations</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              style={{ fontSize: '24px', color: '#E5E7EB', lineHeight: '1.5', marginBottom: '40px', fontWeight: 400 }}
            >
              We orchestrate precision production across hundreds of elite facilities. Our experts are physically embedded in every major industrial corridor across India to guarantee absolute quality at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <button 
                onClick={() => window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
                style={{ 
                  backgroundColor: 'var(--brand-orange)', 
                  border: 'none', 
                  color: '#FFFFFF', 
                  padding: '16px 40px', 
                  borderRadius: '50px', 
                  fontSize: '18px', 
                  fontWeight: 600, 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(255,87,34,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(255,87,34,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,87,34,0.3)';
                }}
              >
                Explore Operations
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: 'rgba(255,87,34,0.05)', borderTop: '1px solid rgba(255,87,34,0.15)', borderBottom: '1px solid rgba(255,87,34,0.15)', padding: '24px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px', textAlign: 'center' }}>
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div style={{ fontSize: '52px', fontWeight: 800, color: 'var(--brand-orange)', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '8px', fontWeight: 500, letterSpacing: '0.5px' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pan-India Map Callout */}
      {/* Pan-India Map Callout */}
      <section style={{ padding: '80px 0 40px', backgroundColor: '#02040A', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background glow */}
        <div style={{ position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,87,34,0.1) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(60px)' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '80px', alignItems: 'center' }}>
            
            {/* Left Content */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,87,34,0.1)', padding: '8px 16px', borderRadius: '50px', marginBottom: '24px', border: '1px solid rgba(255,87,34,0.2)' }}>
                <MapPin size={16} color="var(--brand-orange)" />
                <span style={{ color: 'var(--brand-orange)', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>Pan-India Presence</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '20px', lineHeight: 1.2 }}>
                Everywhere Your Product Needs to Be Made.
              </h2>
              <p style={{ fontSize: '18px', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '40px' }}>
                India is not a single factory—it is a mosaic of hyper-specialized industrial zones. We maintain permanent, on-the-ground expertise in every major production hub.
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
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                    style={{ 
                      backgroundColor: 'rgba(255,255,255,0.02)', 
                      border: '1px solid rgba(255,255,255,0.05)', 
                      padding: '20px', 
                      borderRadius: '16px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '15px', marginBottom: '6px' }}>{item.label}</div>
                    <div style={{ color: 'var(--brand-orange)', fontSize: '13px', fontWeight: 500 }}>{item.hubs}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Map Visual Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ position: 'relative' }}
            >
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/india_map_nodes.png" 
                alt="Pan-India Industrial Hubs" 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  borderRadius: '32px',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }} 
              />
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* The Manufacturing Process */}
      <section style={{ padding: '40px 0 80px', backgroundColor: '#05080F' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>The Manufacturing Process</h2>
            <p style={{ fontSize: '18px', color: '#9CA3AF', maxWidth: '560px', margin: '0 auto' }}>From audit to finished goods—our end-to-end process is built for zero surprises.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {processSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                style={{
                  backgroundColor: step.tech ? 'rgba(56,189,248,0.05)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${step.tech ? 'rgba(56,189,248,0.2)' : 'rgba(255,255,255,0.07)'}`,
                  borderRadius: '24px', padding: '36px', position: 'relative', overflow: 'hidden'
                }}>
                <div style={{ position: 'absolute', top: '20px', right: '24px', fontSize: '52px', fontWeight: 800, color: 'rgba(255,255,255,0.04)', lineHeight: 1 }}>{step.num}</div>
                <step.icon size={28} color={step.tech ? '#38BDF8' : 'var(--brand-orange)'} style={{ marginBottom: '20px' }} />
                {step.tech && <span style={{ display: 'inline-block', backgroundColor: 'rgba(56,189,248,0.1)', color: '#38BDF8', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', padding: '3px 10px', borderRadius: '50px', marginBottom: '12px' }}>TECH INTEGRATED</span>}
                <h3 style={{ fontSize: '20px', color: '#FFFFFF', marginBottom: '12px', fontWeight: 700 }}>{step.title}</h3>
                <p style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Semantic FAQ Section */}
      <FAQSection faqs={serviceFaqs} title="Frequently Asked Questions" />

      {/* Next Step CTA */}
      <section style={{ padding: 'clamp(50px, 8vw, 80px) 0', backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 600 }}>Next in the Matrix</p>
          <Link to="/services/quality-control-compliance" style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
            <h2 onMouseEnter={(e) => e.target.style.color = 'var(--brand-orange)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
              style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800, color: 'var(--text-primary)', margin: 0, transition: 'color 0.2s' }}>
              Inspection & Compliance
            </h2>
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: '50%', display: 'flex' }}>
              <ArrowRight size={32} color="var(--brand-orange)" />
            </div>
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
    </div>
  );
};

export default Manufacturing;


