import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Settings, ShieldCheck, Factory, Box, Activity, Cpu, Code, Globe, Zap, CheckCircle2, Truck, FileCheck, Package } from 'lucide-react';
import SchemaInjector from '../components/seo/SchemaInjector';
import Breadcrumbs from '../components/seo/Breadcrumbs';
import FAQSection from '../components/seo/FAQSection';
import CTASection from '../components/CTASection';

const Services = () => {
  // Scroll to top on load
return (
    <div style={{ width: '100%', backgroundColor: 'var(--bg-main)', paddingTop: '90px' }}>
      <Helmet>
        <title>Our Services | Custom Manufacturing & IT Solutions | AAA 2 Innovate</title>
        <meta name="description" content="Explore AAA 2 Innovate's world-class B2B services: Ethical Sourcing, Custom Manufacturing, Quality Control, Digital Warehousing, Global Logistics, and Elite Software Engineering." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Services | Custom Manufacturing & IT Solutions | AAA 2 Innovate" />
        <meta property="og:description" content="Explore AAA 2 Innovate's world-class B2B services: Ethical Sourcing, Custom Manufacturing, Quality Control, Digital Warehousing, Global Logistics, and Elite Software Engineering." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.aaa2innovate.com/services" />
        <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/services" />
      </Helmet>
      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Supply Chain Management & IT Engineering",
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
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: '80px', // Prevent overlap with breadcrumbs
        paddingBottom: '60px', // Prevent content clipping
        overflow: 'hidden'
      }}>
        {/* Background Image with Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'url(https://aaawebisteimages.s3.ap-south-1.amazonaws.com/services-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to right, rgba(11, 15, 25, 0.9) 0%, rgba(11, 15, 25, 0.6) 100%)',
          zIndex: 2
        }}></div>

        {/* Hero Content */}
        <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px', lineHeight: 1.1 }}>
              <span style={{ color: 'var(--brand-orange)' }}>Our Services</span>
            </h1>
            <p style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 300, color: '#E5E7EB', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
              We blend physical manufacturing in India with elite tech engineering to scale your enterprise globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Source in India? */}
      <section style={{ padding: '40px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '60px', alignItems: 'center' }}>
            
            {/* Left Content */}
            <div>
              <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '24px', lineHeight: '1.2' }}>
                Are you thinking about sourcing products in India, or <strong style={{ fontWeight: 800 }}>scaling your digital infrastructure?</strong>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: '1.8', marginBottom: '32px' }}>
                Organizations are no longer keeping all their eggs in one basket. Whether you've had less-than-perfect experiences in the past or you're simply looking to diversify, India has surged as the premier global destination for both physical manufacturing and elite digital engineering.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  "Highly competitive manufacturing and IT costs to stay ahead of the global market.",
                  "Access to a massive range of raw materials alongside top-tier algorithmic problem solving.",
                  "A unique design heritage spanning specialized markets and massive volumes.",
                  "A digitally native Gen-Z workforce trained to execute complex engineering tasks with hyper-modern agility."
                ].map((point, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ marginTop: '4px' }}>
                      <CheckCircle2 size={20} color="var(--brand-orange)" />
                    </div>
                    <p style={{ color: 'var(--text-primary)', fontSize: '16px', fontWeight: 500, lineHeight: '1.6', margin: 0 }}>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}>
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/services-physical.png" 
                alt="Manufacturing India" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}></div>
              <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--brand-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Factory size={28} color="#FFFFFF" />
                </div>
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, margin: 0 }}>Physical Scale</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontSize: '14px' }}>Infinite material capacity</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Sourcing & Engineering Process */}
      <section style={{ padding: '40px 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '60px', alignItems: 'center' }}>
            
            {/* Left Image Group */}
            <div style={{ position: 'relative', padding: '20px' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255,87,34,0.05)', borderRadius: '32px' }}></div>
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/services-digital.png" 
                alt="Digital Engineering" 
                style={{ position: 'relative', zIndex: 2, width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
              />
              <div style={{ position: 'absolute', top: '30px', right: '30px', zIndex: 3, backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', maxWidth: '240px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <Cpu size={24} color="var(--brand-orange)" />
                  <span style={{ fontWeight: 700, fontSize: '16px' }}>Zero Risk</span>
                </div>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>We never recommend unknown factories or unvetted tech stacks.</p>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '24px' }}>
                The <strong style={{ fontWeight: 800 }}>Execution Process</strong>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: '1.8', marginBottom: '32px' }}>
                In order to source the right factory and materials for your physical goods, or to deploy the perfect digital architecture, we start with a highly detailed brief. There is too much at risk to leave execution to chance. We work exclusively with a curated selection of factories and elite developers whose strengths and weaknesses we know intimately.
              </p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px', padding: 0 }}>
                {[
                  "We ensure the factory or tech team has the precise skills to build what you need.",
                  "We strictly enforce fair working conditions and sustainable production processes.",
                  "Once verified, we source materials from specialized markets or develop unique digital components specifically for you."
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ marginTop: '4px', backgroundColor: 'rgba(255,87,34,0.1)', borderRadius: '50%', padding: '6px' }}>
                      <ChevronRight size={16} color="var(--brand-orange)" strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '16px', color: 'var(--text-primary)', lineHeight: '1.6' }}>{item}</span>
                  </li>
                ))}
              </ul>


            </div>

          </div>
        </div>
      </section>

      {/* Deep Dive Services Bento Grid */}
      <section style={{ padding: '60px 0', backgroundColor: '#05080F', position: 'relative' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 300, color: '#FFFFFF', marginBottom: '16px' }}>
              Our <strong style={{ fontWeight: 800 }}>Service Matrix</strong>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
              A world-class hybrid of physical supply chain mastery and elite software development.
            </p>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px' 
          }}>
            
            {/* Sourcing */}
            <Link to="/services/sourcing" style={{ textDecoration: 'none', display: 'contents' }}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="service-matrix-card"
                style={{ 
                backgroundColor: 'rgba(255,255,255,0.03)', 
                borderRadius: '24px', 
                border: '1px solid rgba(255,255,255,0.05)', 
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div className="matrix-card-bg" style={{ backgroundImage: 'url(/images/services/sourcing.png)' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <Globe size={32} color="var(--brand-orange)" style={{ marginBottom: '20px' }} />
                  <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Sourcing</h3>
                  <p style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    We locate, vet, and integrate the perfect manufacturing partners across India's most specialized markets.
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Design & PD */}
            <Link to="/services/design" style={{ textDecoration: 'none', display: 'contents' }}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="service-matrix-card"
                style={{ 
                backgroundColor: 'rgba(255,255,255,0.03)', 
                borderRadius: '24px', 
                border: '1px solid rgba(255,255,255,0.05)', 
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div className="matrix-card-bg" style={{ backgroundImage: 'url(https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/design.png)' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <Box size={32} color="var(--brand-orange)" style={{ marginBottom: '20px' }} />
                  <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Design & PD</h3>
                  <p style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    Translating raw concepts into market-ready prototypes with precision product development.
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Manufacturing */}
            <Link to="/services/manufacturing" style={{ textDecoration: 'none', display: 'contents' }}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5 }}
                className="service-matrix-card"
                style={{ 
                backgroundColor: 'rgba(255,255,255,0.03)', 
                borderRadius: '24px', 
                border: '1px solid rgba(255,255,255,0.05)', 
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div className="matrix-card-bg" style={{ backgroundImage: 'url(https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/manufacturing.png)' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <Factory size={32} color="var(--brand-orange)" style={{ marginBottom: '20px' }} />
                  <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Manufacturing</h3>
                  <p style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    Executing full-scale production runs with unparalleled efficiency and massive raw material capacity.
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Quality Control & Compliance */}
            <Link to="/services/quality-control-compliance" style={{ textDecoration: 'none', display: 'contents' }}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5 }}
                className="service-matrix-card"
                style={{ 
                backgroundColor: 'rgba(255,87,34,0.02)', 
                borderRadius: '24px', 
                border: '1px solid rgba(255,87,34,0.1)', 
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div className="matrix-card-bg" style={{ backgroundImage: 'url(https://aaawebisteimages.s3.ap-south-1.amazonaws.com/qc_dashboard.png)' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <ShieldCheck size={32} color="var(--brand-orange)" style={{ marginBottom: '20px' }} />
                  <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Inspection & Compliance</h3>
                  <p style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    Rigorous, data-driven inspection protocols combined with comprehensive factory compliance to ensure ethical, sustainable labor practices perfectly.
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Warehousing & Fulfillment */}
            <Link to="/services/warehousing" style={{ textDecoration: 'none', display: 'contents' }}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -5 }}
                className="service-matrix-card"
                style={{ 
                backgroundColor: 'rgba(255,255,255,0.03)', 
                borderRadius: '24px', 
                border: '1px solid rgba(255,255,255,0.05)', 
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div className="matrix-card-bg" style={{ backgroundImage: 'url(https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/warehousing.png)' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <Package size={32} color="var(--brand-orange)" style={{ marginBottom: '20px' }} />
                  <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Warehousing</h3>
                  <p style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    Secure, state-of-the-art storage and highly efficient fulfillment hubs positioned for immediate global dispatch.
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Logistics powered by Zipaworld */}
            <Link to="/services/logistics" style={{ textDecoration: 'none', display: 'contents' }}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -5 }}
                className="service-matrix-card"
                style={{ 
                backgroundColor: 'rgba(255,87,34,0.02)', 
                borderRadius: '24px', 
                border: '1px solid rgba(255,87,34,0.15)', 
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div className="matrix-card-bg" style={{ backgroundImage: 'url(https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/logistics.png)' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', borderRadius: '50px', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF', fontSize: '10px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px', border: '1px solid rgba(255,255,255,0.2)', width: 'max-content' }}>
                    <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: '#4ADE80', borderRadius: '50%' }}></span> Powered by Zipaworld
                  </div>
                  <Truck size={32} color="var(--brand-orange)" style={{ marginBottom: '20px' }} />
                  <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Global Logistics</h3>
                  <p style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    We don't just manufacture your product; we ensure it reaches any port on earth with unprecedented speed and precision.
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Gen-Z Tech & Digital Ops */}
            <Link to="/services/tech" style={{ textDecoration: 'none', display: 'contents' }}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ y: -5 }}
                className="service-matrix-card service-matrix-card-tech"
                style={{ 
                gridColumn: '1 / -1', 
                backgroundColor: 'rgba(255,255,255,0.01)', 
                borderRadius: '24px', 
                border: '1px solid rgba(255,255,255,0.05)', 
                padding: '50px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div className="matrix-card-bg" style={{ backgroundImage: 'url(https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/ai_tech.png)' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ position: 'absolute', bottom: '-20%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
                  <Code size={40} color="#38BDF8" style={{ marginBottom: '24px' }} />
                  <h3 style={{ fontSize: '32px', marginBottom: '16px' }}>Digital Ops & Gen-Z Tech</h3>
                  <p style={{ fontSize: '17px', lineHeight: '1.7', maxWidth: '800px' }}>
                    We deploy our elite Gen-Z IT engineers to build the bespoke software, dashboards, and AI integrations necessary to modernize your enterprise operations. Seamless supply chain visibility meets algorithmic efficiency.
                  </p>
                </div>
              </motion.div>
            </Link>

          </div>
        </div>
      </section>

      {/* FAQ Section for AEO */}
      <FAQSection 
        title="Service FAQs"
        subtitle="Common questions about our end-to-end supply chain capabilities."
        faqs={[
          {
            question: "Do you offer partial supply chain services, or only end-to-end?",
            answer: "We offer both. While our core strength lies in managing the entire lifecycle from conceptualization to global delivery, we also provide modular services. You can engage us specifically for tech solutions, independent quality control, or logistics."
          },
          {
            question: "How do you handle quality control?",
            answer: "We deploy independent, multi-stage quality control protocols. This includes pre-production inspections, in-line audits, and final pre-shipment inspections to guarantee an AQL (Acceptable Quality Limit) that matches global luxury standards."
          },
          {
            question: "Can you manage B2B and B2C logistics simultaneously?",
            answer: "Absolutely. Our smart warehousing and logistics network is equipped for high-volume B2B freight forwarding as well as granular, direct-to-consumer B2C fulfillment."
          }
        ]}
      />

    </div>
  );
};

export default Services;

