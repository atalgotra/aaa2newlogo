import React, { useEffect } from 'react';
import FAQSection from '../../components/seo/FAQSection';
import SchemaInjector from '../../components/seo/SchemaInjector';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTASection from '../../components/CTASection';
import { ArrowLeft, Box, Lightbulb, TrendingUp, DraftingCompass, Layers, Search, Factory, ArrowRight, Quote } from 'lucide-react';


const serviceFaqs = [
  {
    "question": "Do you help with product design and prototyping?",
    "answer": "Yes, our design team translates your concepts into tech packs, 3D renders, and physical prototypes before moving to mass production."
  },
  {
    "question": "Who owns the intellectual property?",
    "answer": "You retain full ownership of all designs, blueprints, and intellectual property. We operate under strict Non-Disclosure Agreements (NDAs)."
  },
  {
    "question": "What is the typical turnaround time for a prototype?",
    "answer": "Depending on the complexity of the product, initial 3D renders take 3-5 days, while physical prototypes typically take 2-4 weeks to manufacture and ship."
  },
  {
    "question": "Can you reverse engineer an existing product?",
    "answer": "Absolutely. If you have a physical sample, our engineering team can deconstruct it, identify the materials, and create comprehensive tech packs for manufacturing."
  },
  {
    "question": "Do you assist with packaging design?",
    "answer": "Yes, we offer complete end-to-end solutions, including structural packaging design, unboxing experience optimization, and eco-friendly material sourcing."
  }
];

const Design = () => {
return (
    <div style={{ width: '100%', backgroundColor: 'var(--bg-main)', paddingTop: '90px' }}>
      <Helmet>
        <title>Product Design & Development | Custom Manufacturing | AAA 2 Innovate</title>
        <meta name="description" content="Transform concepts into market-ready merchandise. Our specialized design team engineers physical products tailored to global consumer trends and your brand's unique identity." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Product Design & Development | Custom Manufacturing | AAA 2 Innovate" />
        <meta property="og:description" content="Transform concepts into market-ready merchandise. Our specialized design team engineers physical products tailored to global consumer trends and your brand's unique identity." />
        <meta name="twitter:card" content="summary_large_image" />
              <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/" />
  <link rel="canonical" href="https://www.aaa2innovate.com/services/design" />
</Helmet>
      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Product Design & Development",
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
        backgroundImage: 'url(https://aaawebisteimages.s3.ap-south-1.amazonaws.com/design_hero_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Dark overlay to make text readable */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.75)' }}></div>
        {/* Gradient fade to seamlessly blend into the next section */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to bottom, transparent, var(--bg-main))' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Left-aligned, narrower text container */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'justify', maxWidth: '700px' }}>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-hero" style={{ color: '#FFFFFF', marginBottom: '24px', letterSpacing: '-1px' }}
            >
              Next-Gen <br/><span style={{ color: 'var(--brand-orange)' }}>Product Engineering</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              style={{ fontSize: '24px', color: '#E5E7EB', lineHeight: '1.5', marginBottom: '40px', fontWeight: 400, textAlign: 'justify' }}
            >
              We transform algorithmic market intelligence into tangible, market-dominating merchandise. From raw concept to factory-ready technical specifications, we engineer products built to scale globally.
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
                Explore Our Process
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Initial Design Process */}
      <section style={{ padding: 'clamp(40px, 10vw, 60px) 0 clamp(60px, 10vw, 100px)', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>The Initial Design Process</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>We take your product from a raw idea to detailed, factory-ready technical sampling.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '30px' }}>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ backgroundColor: 'var(--bg-secondary)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border-light)' }}>
              <Lightbulb size={32} color="var(--brand-orange)" style={{ marginBottom: '24px' }} />
              <h3 style={{ fontSize: '22px', color: 'var(--text-primary)', marginBottom: '16px' }}>1. Brand Immersion</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6' }}>
                We first immerse ourselves in your brand identity, your specific look, and your target market. This deep understanding ensures our factories meet your exact expectations as full partners.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              style={{ backgroundColor: 'rgba(56,189,248,0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(56,189,248,0.2)' }}>
              <TrendingUp size={32} color="#38BDF8" style={{ marginBottom: '24px' }} />
              <h3 style={{ fontSize: '22px', color: 'var(--text-primary)', marginBottom: '16px' }}>2. Data-Driven Trend Boards</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6' }}>
                We draw inspiration by conducting algorithmic market research and fashion forecasting. We analyze catwalks, social media, and competitor shops to link themes for the final product design.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ backgroundColor: 'var(--bg-secondary)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border-light)' }}>
              <DraftingCompass size={32} color="var(--brand-orange)" style={{ marginBottom: '24px' }} />
              <h3 style={{ fontSize: '22px', color: 'var(--text-primary)', marginBottom: '16px' }}>3. Technical Drawings</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6' }}>
                We transition into highly precise sketches and technical product drawings, detailing exact specifications, colors, fabrics, and trims tailored to whatever works best for your unique brand.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Product Development Process */}
      <section style={{ padding: 'clamp(60px, 10vw, 100px) 0', backgroundColor: '#05080F', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(255,87,34,0.05) 0%, transparent 80%)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>Product Development Process</h2>
            <p style={{ fontSize: '18px', color: '#9CA3AF', maxWidth: '700px', margin: '0 auto' }}>
              Once the final design is approved, we bring your product to life. The sampling process adapts dynamically to your sector and volume, ensuring you get exactly what you envisioned before scaling.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '24px', right: '24px', fontSize: '64px', fontWeight: 800, color: 'rgba(255,255,255,0.03)', lineHeight: 1 }}>01</div>
              <Search size={32} color="var(--brand-orange)" style={{ marginBottom: '24px' }} />
              <h4 style={{ fontSize: '20px', color: '#FFFFFF', marginBottom: '16px' }}>Material & Trim Sourcing</h4>
              <p style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: '1.6' }}>
                We collaborate intimately with specialized factories to source the precise raw materials, technical fabrics, and custom trims required to build your perfect initial sample.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              style={{ backgroundColor: 'rgba(56,189,248,0.03)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(56,189,248,0.1)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '24px', right: '24px', fontSize: '64px', fontWeight: 800, color: 'rgba(56,189,248,0.05)', lineHeight: 1 }}>02</div>
              <Layers size={32} color="#38BDF8" style={{ marginBottom: '24px' }} />
              <h4 style={{ fontSize: '20px', color: '#FFFFFF', marginBottom: '16px' }}>Pattern Engineering</h4>
              <p style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: '1.6' }}>
                A dedicated specialist drafts the precise pattern and maps out all necessary production steps. Once the sample meets strict design requirements, it is sent for your initial physical review.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '24px', right: '24px', fontSize: '64px', fontWeight: 800, color: 'rgba(255,255,255,0.03)', lineHeight: 1 }}>03</div>
              <Factory size={32} color="var(--brand-orange)" style={{ marginBottom: '24px' }} />
              <h4 style={{ fontSize: '20px', color: '#FFFFFF', marginBottom: '16px' }}>Pre-Production Sampling</h4>
              <p style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: '1.6' }}>
                Upon your approval of the first iteration, we instruct the factory to generate flawless pre-production samples. Only after this absolute sign-off do we place the bulk material orders.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '24px', right: '24px', fontSize: '64px', fontWeight: 800, color: 'rgba(255,255,255,0.03)', lineHeight: 1 }}>04</div>
              <Box size={32} color="var(--brand-orange)" style={{ marginBottom: '24px' }} />
              <h4 style={{ fontSize: '20px', color: '#FFFFFF', marginBottom: '16px' }}>Retail-Ready Finalization</h4>
              <p style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: '1.6' }}>
                These final production samples represent exactly what will hit the store shelves—including finalized custom labelling, hangtags, and packaging formats for your ultimate retail approval.
              </p>
            </motion.div>

          </div>
        </div>
      </section>


      
      {/* Semantic FAQ Section */}
      <FAQSection faqs={serviceFaqs} title="Frequently Asked Questions" />



      {/* Next Step Transition */}
      <section style={{ padding: 'clamp(40px, 8vw, 60px) 0 clamp(50px, 8vw, 80px) 0', backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Next in the Matrix</p>
          <Link to="/services/manufacturing" style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', textDecoration: 'none', group: 'true' }}>
            <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800, color: 'var(--text-primary)', margin: 0, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--brand-orange)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
              Manufacturing
            </h2>
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: '50%', display: 'flex', transition: 'background-color 0.2s' }}>
              <ArrowRight size={32} color="var(--brand-orange)" />
            </div>
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <CTASection titlePrefix="Ready to" highlightText="Build?" description="Ready to bring your hardware or software concept to life? Our world-class UI/UX and product engineering teams build hyper-engaging digital experiences and physical prototypes." buttonText="Consult our Design Team" />
    </div>
  );
};

export default Design;




