import { Helmet } from 'react-helmet-async';
import { Leaf, ShieldCheck, Heart, Globe, Droplets, Zap } from 'lucide-react';
import CTASection from '../components/CTASection';
import TextReveal from '../components/animations/TextReveal';
import SchemaInjector from '../components/seo/SchemaInjector';

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
  return (
    <div style={{ width: '100%', backgroundColor: '#02040A', paddingTop: '90px', minHeight: '100vh', paddingBottom: '0' }}>
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
      <section style={{height: '60vh', minHeight: '500px',  position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/ethical_hero.png" 
            alt="Ethical Sourcing" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} 
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(2,4,10,0.8) 0%, rgba(2,4,10,0.95) 100%)' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
              <Leaf color="var(--brand-orange)" size={28} />
              <span style={{ color: 'var(--brand-orange)', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '14px' }}>Our Commitment</span>
            </div>
            <h1 style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px', lineHeight: 1.1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TextReveal text="Elevating Global Standards in" elementType="div" style={{ display: 'inline-flex' }} justifyContent="center" />
              <span style={{ color: 'var(--brand-orange)' }}>
                 <TextReveal text="India" elementType="div" style={{ display: 'inline-flex' }} delay={0.4} justifyContent="center" />
              </span>
            </h1>
            <p style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 300, color: '#E5E7EB', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
              AAA 2 Innovate is dedicated to pioneering uncompromising ethical sourcing and sustainable manufacturing. We believe luxury and responsibility must go hand in hand.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainable Practices Section */}
      <section style={{ paddingTop: '60px', paddingBottom: '60px', backgroundColor: '#02040A' }}>
        <div className="container">
          <div className="responsive-grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '32px', lineHeight: 1.2 }}>
                Pioneering the Future of Sustainable Manufacturing
              </h2>
              <p style={{ color: '#9CA3AF', fontSize: '18px', lineHeight: 1.8, marginBottom: '24px', textAlign: 'justify' }}>
                If recent global challenges have taught us anything, it is that we are a deeply connected global family with a shared duty to protect the resources we utilize. At AAA 2 Innovate, our passion for high-end production is matched only by our relentless commitment to sustainability.
              </p>
              <p style={{ color: '#9CA3AF', fontSize: '18px', lineHeight: 1.8, marginBottom: '40px', textAlign: 'justify' }}>
                We actively support the textile and garment industry in transitioning toward a greener future. Recognizing the decline of non-renewable resources, we empower our manufacturing partners to embrace renewable energy—including solar, wind, and biomass—to power their facilities. Furthermore, we are revolutionizing water conservation through advanced effluent treatment plants, rainwater harvesting, and aquifer-building initiatives.
              </p>
              
              <div className="responsive-grid-2" style={{ gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#0A0D16', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <Zap color="var(--brand-orange)" size={32} />
                  <div>
                    <h4 style={{ color: '#FFF', fontWeight: 600, fontSize: '16px' }}>Renewable Energy</h4>
                    <span style={{ color: '#6B7280', fontSize: '14px' }}>Solar, Wind, Biomass</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#0A0D16', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <Droplets color="var(--brand-orange)" size={32} />
                  <div>
                    <h4 style={{ color: '#FFF', fontWeight: 600, fontSize: '16px' }}>Water Conservation</h4>
                    <span style={{ color: '#6B7280', fontSize: '14px' }}>Rainwater Harvesting</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', height: '700px', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/ethical_sustainability.png" alt="Sustainable Manufacturing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', padding: '40px', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Globe color="#FFF" size={24} />
                  <span style={{ color: '#FFF', fontWeight: 600, letterSpacing: '1px' }}>Global Eco-Standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section style={{ padding: '30px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span style={{ color: 'var(--brand-grey)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px' }}>Internationally Certified Excellence</span>
          </div>
          <p style={{ color: '#4B5563', fontSize: '16px', lineHeight: 1.8, textAlign: 'justify', maxWidth: '800px', margin: '0 auto 32px auto' }}>
            Our vendor network operates strictly under global regulatory standards, including SA8000 and ISO 14001. Facilities are registered with the Control Union, holding premium certifications such as GOTS, OCS, Sedex, BSCI, and C-TPAT. We ensure full Garment Transfer Certificates for sustainable fabrics like organic cotton, BCI, and Lenzing sustainable viscose.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
            <HoverCert text="Oeko-Tex" />
            <HoverCert text="Sedex" />
            <HoverCert text="BSCI" />
            <HoverCert text="C-TPAT" />
            <HoverCert text="GOTS" />
          </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section style={{ paddingTop: '60px', paddingBottom: '60px', backgroundColor: '#05080F' }}>
        <div className="container">
          <div className="responsive-grid-2" style={{ alignItems: 'center' }}>
            
            <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', height: '700px', boxShadow: '0 0 40px rgba(255, 87, 34, 0.15)' }}>
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/ethical_community.png" alt="Empowering Communities" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <Heart color="var(--brand-orange)" size={28} />
                <span style={{ color: 'var(--brand-orange)', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '14px' }}>Social Impact</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '32px', lineHeight: 1.2 }}>
                Empowering the Future of India
              </h2>
              <p style={{ color: '#9CA3AF', fontSize: '18px', lineHeight: 1.8, marginBottom: '24px', textAlign: 'justify' }}>
                True luxury is built on a foundation of ethical responsibility. At AAA 2 Innovate, we are deeply invested in the prosperity of the communities that bring our products to life.
              </p>
              <p style={{ color: '#9CA3AF', fontSize: '18px', lineHeight: 1.8, marginBottom: '24px', textAlign: 'justify' }}>
                We proudly support the Cheshire Home Society India, an organization established in 1967 to provide specialized care, housing, and livelihood support for the disabled. Through consistent contributions and material support, we strive to bring practical empowerment to those who need it most.
              </p>
              <p style={{ color: '#9CA3AF', fontSize: '18px', lineHeight: 1.8, textAlign: 'justify' }}>
                Additionally, we actively partner with GOONJ—a revolutionary non-profit organization that empowers marginalized communities to upcycle waste materials into beautiful, functional products. We firmly reject the narrative of a dependent India. Instead, we champion a responsible, fiercely independent India by providing its people with the tools to master their own destinies.
              </p>
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
      
    </div>
  );
};

export default EthicalSourcing;

