import React, { useEffect } from 'react';
import FAQSection from '../../components/seo/FAQSection';
import SchemaInjector from '../../components/seo/SchemaInjector';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTASection from '../../components/CTASection';
import { ArrowLeft, ArrowRight, ShieldCheck, Cpu, Zap, Box, MapPin, Database, CheckCircle2, Clock } from 'lucide-react';

const stats = [
  { value: '24×7', label: 'Processing Capability' },
  { value: '100%', label: 'Paperless Workflows' },
  { value: 'LIVE', label: 'Real-Time Tracking' },
  { value: 'ZERO', label: 'Delay Dispatch' },
];

const operationsPillars = [
  {
    icon: Database,
    title: 'Automated Gate-In / Out',
    desc: 'System records cargo movement automatically using document scanning and digital logs. Zero manual register maintenance.',
    color: '#38BDF8'
  },
  {
    icon: MapPin,
    title: 'Digital Location Mapping',
    desc: 'Every cargo position is digitally mapped on a live inventory dashboard for exact location visibility and faster retrieval.',
    color: '#818CF8'
  },
  {
    icon: Box,
    title: 'Order Fulfillment',
    desc: 'Advanced packing and labeling. Supported models include Box Picking, Full Pallet Pull, and Mixed Order Fulfillment.',
    color: '#A78BFA'
  },
  {
    icon: ShieldCheck,
    title: '100% Safety Compliance',
    desc: 'Mandatory PPE, 24×7 CCTV surveillance, fire safety systems, and strict zone management for pedestrian and equipment routes.',
    color: '#F472B6'
  }
];


const serviceFaqs = [
  {
    "question": "Is your warehousing digitally managed?",
    "answer": "Yes, our digital warehousing solutions integrate real-time inventory tracking, AI-driven demand forecasting, and automated sorting systems."
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
return (
    <div style={{ width: '100%', backgroundColor: 'var(--bg-main)', paddingTop: '90px' }}>
      <Helmet>
        <title>Digital Warehousing & Storage Solutions | AAA 2 Innovate</title>
        <meta name="description" content="Powered by Zipaworld, our digital warehousing ecosystem provides AI-driven inventory management, faceless processing, and real-time cargo visibility." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Digital Warehousing & Storage Solutions | AAA 2 Innovate" />
        <meta property="og:description" content="Powered by Zipaworld, our digital warehousing ecosystem provides AI-driven inventory management, faceless processing, and real-time cargo visibility." />
        <meta name="twitter:card" content="summary_large_image" />
              <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/" />
  <link rel="canonical" href="https://www.aaa2innovate.com/services/warehousing" />
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

      <div style={{ position: 'absolute', top: '90px', left: 0, width: '100%', zIndex: 10 }}>
        <Breadcrumbs />
      </div>


      {/* Cinematic Hero */}
      <section style={{ minHeight: '60vh', position: 'relative', display: 'flex', alignItems: 'center', paddingTop: '80px', paddingBottom: '60px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
          <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/warehousing_hero.png" alt="Digital Warehousing Command Center" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(90deg, rgba(2,4,10,0.95) 0%, rgba(2,4,10,0.7) 50%, rgba(2,4,10,0.4) 100%)' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '650px' }}
          >
            
            <h1 style={{ fontSize: '64px', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px', lineHeight: 1.1, letterSpacing: '-1px' }}>
              Digital <span style={{ color: 'var(--brand-orange)' }}>Warehousing</span> <br/>Ecosystem.
            </h1>
            
            <p style={{ fontSize: '18px', color: '#E5E7EB', lineHeight: 1.6, maxWidth: '600px', marginBottom: '32px', fontWeight: 400 }}>
              Empowering global logistics with AI and cutting-edge technology for a smarter, more efficient world. A fully digital, cloud-based platform designed specifically for high-volume air cargo operations.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', maxWidth: '100%' }}>
              {stats.map((stat, index) => (
                <div key={index} style={{ backgroundColor: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', borderRadius: '16px', borderBottom: '3px solid var(--brand-orange)' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px', lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* IGIA Advantage */}
      <section style={{ minHeight: 'calc(100vh - 90px)', display: 'flex', alignItems: 'center', padding: '40px 0', backgroundColor: '#02040A' }}>
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
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <Clock size={24} color="var(--brand-orange)" />
                <span style={{ color: '#9CA3AF', fontSize: '14px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Time-Critical Location</span>
              </div>

              <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px', lineHeight: 1.2 }}>
                Strategic Advantage at <br/><span style={{ color: 'var(--brand-orange)' }}>IGIA, New Delhi</span>
              </h2>
              
              <p style={{ fontSize: '16px', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '16px', textAlign: 'justify' }}>
                Location matters. Our facility is situated inside <strong>ACLC-2B (Air Cargo Logistics Centre-2B)</strong> near the New ATC Tower, giving immediate access to cargo terminals, airport logistics networks, and airside operations support.
              </p>
              
              <p style={{ fontSize: '16px', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '24px', textAlign: 'justify' }}>
                We are optimized for urgent air freight and high-volume export cargo. With digital connectivity to Emirates, IndiGo Cargo, and Lufthansa, we ensure faster data exchange, streamlined documentation, and zero-delay dispatch.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {['Direct Airport Access', 'Carrier Integration', 'Urgent Cargo Handling', 'Reduced Turnaround (TAT)'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <CheckCircle2 size={18} color="#38BDF8" style={{ flexShrink: 0 }} />
                    <span style={{ color: '#F3F4F6', fontSize: '14px', fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Graphics Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ position: 'relative', display: 'flex', borderRadius: '32px', overflow: 'hidden', alignItems: 'flex-end', justifyContent: 'center', minHeight: '320px', border: '1px solid rgba(56, 189, 248, 0.2)' }}
            >
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/faceless_processing.png" alt="Faceless Processing" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(2,4,10,0.95) 0%, rgba(2,4,10,0.3) 60%, transparent 100%)', zIndex: 2 }}></div>
              <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '24px', width: '100%' }}>
                <Cpu size={36} color="#38BDF8" style={{ marginBottom: '8px' }} />
                <h3 style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Faceless Processing</h3>
                <p style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: 1.5, maxWidth: '320px', margin: '0 auto' }}>
                  Manual intervention is eradicated via automated workflows, digital approvals, and AI-extracted documentation.
                </p>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Tech Engine Module */}
      <section style={{ padding: 'clamp(40px, 8vw, 60px) 0 clamp(50px, 8vw, 80px) 0', backgroundColor: '#05080F' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>Automated Checklist Generation</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
              Traditional export processes require manual checklist preparation. We automate the entire flow, eliminating manual data entry, reducing documentation errors, and improving customs compliance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { step: '1', title: 'Upload Data', desc: 'Simply upload the Commercial Invoice and Packing List (PDF).' },
              { step: '2', title: 'AI Extraction', desc: 'System automatically extracts shipment info, cargo details, and documentation data.' },
              { step: '3', title: 'Generate Bill', desc: 'Platform instantly generates the shipping bill checklist and validation records.' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ 
                  backgroundColor: 'var(--bg-secondary)', 
                  padding: '32px 24px', 
                  borderRadius: '24px', 
                  border: '1px solid var(--border-light)', 
                  textAlign: 'center',
                  transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease'
                }}
                whileHover={{ 
                  transform: 'translateY(-12px)', 
                  boxShadow: '0 24px 48px rgba(255, 87, 34, 0.15)',
                  borderColor: 'var(--brand-orange)'
                }}
              >
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  backgroundColor: 'rgba(255,87,34,0.1)', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 16px',
                  transition: 'transform 0.4s ease'
                }}>
                  <span style={{ color: 'var(--brand-orange)', fontSize: '20px', fontWeight: 800 }}>{item.step}</span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Operations Grid */}
      <section style={{ padding: 'clamp(40px, 8vw, 60px) 0 clamp(50px, 8vw, 80px) 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>Comprehensive Operations</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
              Beyond storage, we provide a massive, highly-secure fulfillment infrastructure engineered for zero risk tolerance and 100% compliance.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {operationsPillars.map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  backgroundColor: 'var(--bg-secondary)', 
                  padding: '32px 24px', 
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
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '20px', 
                  boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                  transition: 'transform 0.4s ease'
                }}>
                  <pillar.icon size={28} color={pillar.color} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px', letterSpacing: '-0.5px' }}>{pillar.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>{pillar.desc}</p>
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
      <CTASection titlePrefix="Ready to" highlightText="Store?" description="Unlock next-level fulfillment speed with our intelligent warehousing nodes. Position your inventory strategically across the globe to achieve Amazon-level delivery times." buttonText="Upgrade Fulfillment" />
    </div>
  );
};

export default Warehousing;




