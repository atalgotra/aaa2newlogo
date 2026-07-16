import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/layout/HeroCarousel';
import TestimonialSlider from '../components/TestimonialSlider';
import SchemaInjector from '../components/seo/SchemaInjector';
import FAQSection from '../components/seo/FAQSection';
import CTASection from '../components/CTASection';
import { ShieldCheck, Target, Users, Lightbulb, Leaf, Award, Cloud, LayoutGrid, Server, BadgeCheck, Globe, Sun } from 'lucide-react';

const Home = () => {
  return (
    <div style={{ width: '100%', backgroundColor: 'var(--bg-main)' }}>
      <Helmet>
        <title>AAA 2 Innovate | Global Sourcing, Tech Engineering & Supply Chain</title>
        <meta name="description" content="AAA 2 Innovate bridges the gap between world-class product sourcing in India and elite Gen-Z IT engineering. Discover end-to-end global supply chain solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AAA 2 Innovate | Global Sourcing, Tech Engineering & Supply Chain" />
        <meta property="og:description" content="AAA 2 Innovate bridges the gap between world-class product sourcing in India and elite Gen-Z IT engineering. Discover end-to-end global supply chain solutions." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.aaa2innovate.com/" />
        <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/" />
        <link rel="preload" as="image" href="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/hero_1_indian.png" fetchpriority="high" />
      </Helmet>
      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://www.aaa2innovate.com/#organization",
            "name": "AAA 2 Innovate Pvt. Ltd.",
            "url": "https://www.aaa2innovate.com/",
            "logo": "https://www.aaa2innovate.com/favicon.png",
            "sameAs": [
              "https://www.linkedin.com/company/aaa-2-innovate"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "info@aaa2innovate.com",
              "contactType": "customer service"
            }
          },
          {
            "@type": "WebSite",
            "@id": "https://www.aaa2innovate.com/#website",
            "url": "https://www.aaa2innovate.com/",
            "name": "AAA 2 Innovate",
            "publisher": {
              "@id": "https://www.aaa2innovate.com/#organization"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.aaa2innovate.com/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        ]
      }} />
      {/* Visually hidden H1 for SEO */}
      <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
        AAA 2 Innovate - Global Sourcing, Manufacturing, and Tech Engineering
      </h1>

      {/* 1. Hero Carousel */}
      <HeroCarousel />

      {/* 1.5 Who We Are & Trust Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)', paddingBottom: '40px', paddingTop: '40px' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'stretch' }}>

            {/* Left: Consolidated Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <h2 className="text-h1" style={{ fontWeight: 300, color: 'var(--text-primary)', marginBottom: '8px' }}>Why India?</h2>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--brand-orange)', marginBottom: '24px', letterSpacing: '1px', textTransform: 'uppercase' }}>The Dual Powerhouse</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-secondary)', fontSize: '17px', lineHeight: '1.7', textAlign: 'justify' }}>
                <p>
                  India has evolved into a global hub for elite software engineering and AI, alongside a vast, diverse manufacturing ecosystem. <strong>AAA 2 Innovate</strong> bridges this gap, leveraging on-ground expertise and talent to deliver your next physical or digital breakthrough.
                </p>
                <p>
                  We operate at the bleeding edge of both physical infrastructure and digital transformation. We help organizations navigate shifting global supply chains and digitize traditional sectors, delivering innovative, customer-centric solutions designed to <strong>Take You Forward</strong> into the new future.
                </p>
              </div>

              <Link to="/about" style={{ textDecoration: 'none' }}>
                <button style={{
                  marginTop: '32px',
                  padding: '16px 40px',
                  backgroundColor: 'var(--brand-orange)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 20px rgba(255, 90, 0, 0.2)',
                  display: 'inline-block'
                }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 15px 25px rgba(255, 90, 0, 0.3)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(255, 90, 0, 0.2)'; }}
                >
                  About Us
                </button>
              </Link>
            </motion.div>

            {/* Right: Why Businesses Trust Us (Bullet Metrics Layout) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              style={{ 
                backgroundColor: 'var(--bg-secondary)', 
                borderRadius: '24px', 
                border: '1px solid var(--border-light)', 
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
              }}
            >
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>Why Brands Trust Us</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '24px', lineHeight: '1.6' }}>
                From global multi-channel household names to fast-growing digital brands, we are the chosen partner in India.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { title: "End-to-End Execution", desc: "We manage the entire lifecycle, from tech packs and factory floor audits to international freight and cloud deployment." },
                  { title: "Unswerving Integrity", desc: "Operating with total transparency, ethical labor standards, and strict third-party statutory compliance." },
                  { title: "Strategic Logistics", desc: "Formidably backed by our sister concern Zipaworld, guaranteeing complete visibility and container capacity." }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255, 87, 34, 0.1)', flexShrink: 0 }}>
                      <BadgeCheck color="var(--brand-orange)" size={20} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 4px 0' }}>{item.title}</h3>
                      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Global Capabilities (Services) Bento Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)', paddingTop: '40px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="text-h1" style={{ fontWeight: 300, color: 'var(--text-primary)', marginBottom: '8px' }}>Our Global Capabilities</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7', textAlign: 'center' }}>
              Bridging the gap between world-class product sourcing and elite technological engineering.
            </p>
          </div>

          <div className="services-bento-grid">
            {/* Row 1 */}
            <Link to="/services/sourcing" className="service-bento-card" style={{ display: 'block', textDecoration: 'none' }}>
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/sourcing.png" alt="Sourcing" />
              <div className="service-bento-overlay">
                <h3>Sourcing</h3>
                <p>We know the craftsmanship and skills of India and can find the right vendor to bring your product vision to life.</p>
              </div>
            </Link>

            <Link to="/services/design" className="service-bento-card" style={{ display: 'block', textDecoration: 'none' }}>
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/design.png" alt="Design & PD" />
              <div className="service-bento-overlay">
                <h3>Design & PD</h3>
                <p>Working with your creative team and buyers we help translate trends and mood boards into real products and samples.</p>
              </div>
            </Link>

            <Link to="/services/manufacturing" className="service-bento-card" style={{ display: 'block', textDecoration: 'none' }}>
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/manufacturing.png" alt="Manufacturing" />
              <div className="service-bento-overlay">
                <h3>Manufacturing</h3>
                <p>We are production management specialists, and whatever the sector, we will oversee the quality and process.</p>
              </div>
            </Link>

            {/* Row 2 */}
            <Link to="/services/quality-control-compliance" className="service-bento-card" style={{ display: 'block', textDecoration: 'none' }}>
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/quality_inspection.png" alt="Inspection & Compliance" width="400" height="400" />
              <div className="service-bento-overlay">
                <h3>Inspection & Compliance</h3>
                <p>We enforce world-class quality controls standards and statutory compliance audits across the entire supply chain.</p>
              </div>
            </Link>

            <Link to="/services/warehousing" className="service-bento-card" style={{ display: 'block', textDecoration: 'none' }}>
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/warehousing.png" alt="Warehousing" />
              <div className="service-bento-overlay">
                <h3>Warehousing</h3>
                <p>Secure, state-of-the-art storage and highly efficient fulfillment hubs positioned for global reach.</p>
              </div>
            </Link>

            <Link to="/services/logistics" className="service-bento-card" style={{ display: 'block', textDecoration: 'none' }}>
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/logistics.png" alt="Global Logistics" />
              <div className="service-bento-overlay">
                <h3>Global Logistics</h3>
                <p>Whatever your transportation preferences, we will ensure merchandise is ready, liaising with global and local agencies.</p>
              </div>
            </Link>

            {/* Row 3 - Wide Card */}
            <Link to="/services/tech" className="service-bento-card wide" style={{ display: 'block', textDecoration: 'none' }}>
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/ai_tech.png" alt="Digital Ops & Gen-Z Tech" />
              <div className="service-bento-overlay">
                <h3>Digital Ops & Gen-Z Tech</h3>
                <p>We deploy our elite Gen-Z IT engineers to build the bespoke software, dashboards, and AI integrations necessary to modernize your enterprise operations. Seamless supply chain visibility meets algorithmic efficiency.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>





      {/* 2.75 Testimonials Section */}
      <TestimonialSlider />



      {/* 4. Ethical Sourcing & Tech Standards Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)', paddingTop: '40px', paddingBottom: '20px' }}>
        <div className="container text-center">
          <h2 className="text-h2" style={{ fontWeight: 300, marginBottom: '16px', color: 'var(--text-primary)' }}>Uncompromising Standards & Accreditations</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7', textAlign: 'center' }}>
            We ensure every link in your physical supply chain and every layer of your digital architecture complies with the highest global compliance benchmarks.
          </p>
        </div>
      </section>

      {/* FAQ Section for AEO */}
      <FAQSection 
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "What exactly does AAA 2 Innovate do?",
            answer: "We provide end-to-end global supply chain management. This includes high-quality product sourcing, custom manufacturing, rigorous quality control, and seamless global logistics, acting as a single point of contact for brands looking to scale without operational headaches."
          },
          {
            question: "Where do you source and manufacture products?",
            answer: "While we operate globally, our core manufacturing and sourcing hubs are located in India. We leverage India's vast textile and engineering capabilities to deliver world-class products to clients in North America, Europe, and the UAE."
          },
          {
            question: "How do you ensure ethical compliance?",
            answer: "Every facility in our network undergoes strict audits. We only partner with factories that adhere to international regulatory standards, holding premium certifications such as SA8000, ISO 14001, GOTS, OCS, Sedex, and BSCI."
          },
          {
            question: "Do you handle custom design and development?",
            answer: "Yes. Our in-house design and tech engineering teams work closely with you from initial conceptualization to final prototyping, ensuring your specific brand vision is accurately translated into the final manufactured product."
          }
        ]}
      />

      <div className="marquee-container">
        <div className="marquee-track">
          {/* Double the list to ensure seamless infinite looping */}
          {[
            { name: 'OEKO-TEX STANDARD 100', Icon: Sun },
            { name: 'SEDEX', Icon: Globe },
            { name: 'BSCI', Icon: Users },
            { name: 'C-TPAT', Icon: ShieldCheck },
            { name: 'GOTS', Icon: Leaf },
            { name: 'ISO 9001', Icon: Award },
            { name: 'AWS ADVANCED PARTNER', Icon: Cloud },
            { name: 'MICROSOFT GOLD', Icon: LayoutGrid },
            { name: 'CONTROL UNION', Icon: BadgeCheck },
            { name: 'GOOGLE CLOUD', Icon: Server },
            // Repeated for smooth infinite scroll
            { name: 'OEKO-TEX STANDARD 100', Icon: Sun },
            { name: 'SEDEX', Icon: Globe },
            { name: 'BSCI', Icon: Users },
            { name: 'C-TPAT', Icon: ShieldCheck },
            { name: 'GOTS', Icon: Leaf },
            { name: 'ISO 9001', Icon: Award },
            { name: 'AWS ADVANCED PARTNER', Icon: Cloud },
            { name: 'MICROSOFT GOLD', Icon: LayoutGrid },
            { name: 'CONTROL UNION', Icon: BadgeCheck },
            { name: 'GOOGLE CLOUD', Icon: Server }
          ].map((partner, index) => (
            <div key={index} className="marquee-item">
              <partner.Icon size={24} style={{ marginRight: '12px' }} />
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
