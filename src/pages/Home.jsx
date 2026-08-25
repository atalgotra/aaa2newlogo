import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import VideoHero from '../components/layout/VideoHero';
import ProductVideoCard from '../components/common/ProductVideoCard';
import ProductSpecModal from '../components/common/ProductSpecModal';
import SourcingConfigurator from '../components/common/SourcingConfigurator';
import TestimonialSlider from '../components/TestimonialSlider';
import SchemaInjector from '../components/seo/SchemaInjector';
import FAQSection from '../components/seo/FAQSection';
import TiltCard from '../components/animations/TiltCard';
import {
  ShieldCheck, Target, Users, Lightbulb, Leaf, Award, Cloud, LayoutGrid, Server, BadgeCheck, Globe, Sun,
  MapPin, Phone, Mail, Clock, Send, Loader2, TrendingUp, ShoppingBag, Sparkles, Droplet, Zap, Droplets, Heart
} from 'lucide-react';
import { gsap, createGsapScope, animateNumberCounter } from '../utils/gsapUtils';

const teamMembers = [
  {
    id: 'shashank',
    name: 'Shashank Jain',
    role: 'Director',
    expertise: 'Finance & Strategy',
    image: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/team/shashank_jain.png',
    icon: <TrendingUp size={24} color="#2563EB" />,
    bio: "With a profound background in corporate finance, investment strategy, and global market expansion, Shashank Jain serves as the financial architect of AAA 2 Innovate. His strategic foresight and mastery of complex financial ecosystems have been instrumental in steering the company through rapid, sustainable growth.",
    linkedin: 'https://www.linkedin.com/in/shashank-jain-5586b023/',
    email: 'mailto:shashank@aaa2innovate.com'
  },
  {
    id: 'rohit',
    name: 'Rohit Singh',
    role: 'Director',
    expertise: 'Logistics Operations & Sales',
    image: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/team/rohit_singh.png',
    icon: <ShieldCheck size={24} color="#2563EB" />,
    bio: "An industry veteran with a razor-sharp focus on global supply chain mechanics, Rohit Singh drives the operational and commercial success at AAA 2 Innovate. His deep expertise in complex logistics operations and high-stakes international sales allows us to seamlessly bridge markets across continents.",
    linkedin: 'https://www.linkedin.com/in/rohit-singh-97b60417/',
    email: 'mailto:rohit@aaa2innovate.com',
    objectPosition: 'left center'
  }
];

const productsData = [
  {
    id: 'apparel',
    title: 'Apparel & Fashion',
    category: 'Sourcing & Production',
    description: 'From fast fashion collections to bespoke luxury evening wear, ethically produced in top Indian facilities.',
    videoSrc: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/6a18173c8cb4a.mp4',
    posterSrc: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/products_bags.png',
    ctaText: 'Source Apparel'
  },
  {
    id: 'bags',
    title: 'Designer Bags & Clutches',
    category: 'Accessories & Leather',
    description: 'Statement hardware, luxury synthetic and genuine leather clutches, structured tote bags, and accessories.',
    videoSrc: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/meta_ai_video.mp4',
    posterSrc: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/products_bags.png',
    ctaText: 'Source Accessories'
  },
  {
    id: 'jewellery',
    title: 'Fashion Jewellery',
    category: 'Precision Craftsmanship',
    description: 'Imitation jewelry with maximum sparkle, intricate craftsmanship, and premium anti-tarnish plating.',
    videoSrc: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/fine_jewellery_hero.mp4',
    posterSrc: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/products_jewellery.png',
    ctaText: 'Discover Jewellery'
  }
];

const Home = () => {
  const containerRef = useRef(null);
  const counterRef1 = useRef(null);
  const counterRef2 = useRef(null);

  const [specModalOpen, setSpecModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);
  const [selectedCategoryForConfigurator, setSelectedCategoryForConfigurator] = useState(null);

  const handleBentoMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    subject: 'Sourcing',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://finance.devapi.zipaworld.com/api/contactUs/contactMailAaa2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          company: formData.company || ""
        })
      });

      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message || 'Failed to send message');
      }

      setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
      setFormData({ name: '', company: '', email: '', subject: 'Sourcing', message: '' });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const cleanup = createGsapScope(containerRef, () => {
      // Counter animations
      if (counterRef1.current) animateNumberCounter(counterRef1.current, 100, '+');
      if (counterRef2.current) animateNumberCounter(counterRef2.current, 100, '%');

      // Section Reveals
      const sections = gsap.utils.toArray('.gsap-section');
      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 85%',
              once: true
            }
          }
        );
      });
    });

    return () => cleanup();
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', backgroundColor: 'var(--bg-main)' }}>
      <Helmet>
        <title>AAA 2 Innovate | Global Sourcing, Tech Engineering &amp; Supply Chain</title>
        <meta name="description" content="AAA 2 Innovate bridges the gap between world-class product sourcing in India and elite Gen-Z IT engineering. Discover end-to-end global supply chain solutions." />
        <link rel="canonical" href="https://www.aaa2innovate.com/" />
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
            "sameAs": ["https://www.linkedin.com/company/aaa-2-innovate"],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "info@aaa2innovate.com",
              "contactType": "customer service"
            }
          }
        ]
      }} />

      <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
        AAA 2 Innovate - Global Sourcing, Manufacturing, and Tech Engineering
      </h1>

      {/* 1. Cinematic Hero Section */}
      <VideoHero />

      {/* 2. About Us & Dual Powerhouse Section */}
      <section id="about" className="section-padding gsap-section" style={{ backgroundColor: 'var(--bg-main)', paddingBottom: '60px', paddingTop: '80px' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'stretch' }}>

            {/* Left: Bio Text */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
              <h2 className="text-h1" style={{ fontWeight: 300, color: 'var(--text-primary)', marginBottom: '8px' }}>Why India?</h2>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--brand-blue)', marginBottom: '24px', letterSpacing: '2px', textTransform: 'uppercase' }}>The Dual Powerhouse</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-secondary)', fontSize: '17px', lineHeight: '1.7', textAlign: 'justify' }}>
                <p>
                  India has evolved into a global hub for elite software engineering and AI, alongside a vast, diverse manufacturing ecosystem. <strong>AAA 2 Innovate</strong> bridges this gap, leveraging on-ground expertise and talent to deliver your next physical or digital breakthrough.
                </p>
                <p>
                  We operate at the bleeding edge of physical infrastructure and digital transformation. We help organizations navigate shifting global supply chains and digitize traditional sectors, delivering innovative, customer-centric solutions designed to <strong>Take You Forward</strong> into the new future.
                </p>
              </div>

              <div style={{ marginTop: '32px' }}>
                <button
                  onClick={() => scrollToSection('services')}
                  className="btn-primary"
                  style={{ padding: '16px 40px', fontSize: '15px' }}
                >
                  Explore Capabilities
                </button>
              </div>
            </div>

            {/* Right: Why Brands Trust Us with Counter */}
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '24px',
                border: '1px solid var(--border-light)',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
              }}
            >
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>Why Brands Trust Us</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '28px', lineHeight: '1.6' }}>
                From global multi-channel household names to fast-growing digital brands, we are the chosen partner in India.
              </p>

              {/* Stats Counters */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div>
                  <div ref={counterRef1} style={{ fontSize: '36px', fontWeight: 800, color: '#2563EB', fontFamily: "var(--font-display)" }}>100+</div>
                  <div style={{ fontSize: '13px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px' }}>Global Manufacturing Partners</div>
                </div>
                <div>
                  <div ref={counterRef2} style={{ fontSize: '36px', fontWeight: 800, color: '#2563EB', fontFamily: "var(--font-display)" }}>100%</div>
                  <div style={{ fontSize: '13px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px' }}>Statutory Audit Compliance</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { title: "End-to-End Execution", desc: "We manage the entire lifecycle, from tech packs and factory floor audits to international freight and cloud deployment." },
                  { title: "Unswerving Integrity", desc: "Operating with total transparency, ethical labor standards, and strict third-party statutory compliance." },
                  { title: "Strategic Logistics", desc: "Formidably backed by our sister concern Zipaworld, guaranteeing complete visibility and container capacity." }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(37, 99, 235, 0.1)', flexShrink: 0 }}>
                      <BadgeCheck color="var(--brand-blue)" size={20} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 4px 0' }}>{item.title}</h3>
                      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Capabilities Bento Grid Section */}
      <section id="services" className="section-padding gsap-section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', paddingTop: '80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="text-h1" style={{ fontWeight: 300, color: 'var(--text-primary)', marginBottom: '8px' }}>Our Global Capabilities</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7', textAlign: 'center' }}>
              Bridging the gap between world-class product sourcing and elite technological engineering.
            </p>
          </div>

          <div className="services-bento-grid">
            <div className="service-bento-card bento-spotlight-card" onMouseMove={handleBentoMouseMove}>
              <span className="bento-badge-holo"><span className="badge-pulse-dot" style={{ backgroundColor: '#F59E0B' }} /> ⚡ 100+ Vetted Factories</span>
              <img loading="lazy" src="/images/services/sourcing.png" alt="Sourcing" />
              <div className="service-bento-overlay">
                <h3>Sourcing</h3>
                <p>We know the craftsmanship and skills of India and can find the right vendor to bring your product vision to life.</p>
              </div>
            </div>

            <div className="service-bento-card bento-spotlight-card" onMouseMove={handleBentoMouseMove}>
              <span className="bento-badge-holo"><span className="badge-pulse-dot" style={{ backgroundColor: '#38BDF8' }} /> ✏️ 48h Prototyping</span>
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/design.png" alt="Design & PD" />
              <div className="service-bento-overlay">
                <h3>Design &amp; PD</h3>
                <p>Working with your creative team and buyers we help translate trends and mood boards into real products and samples.</p>
              </div>
            </div>

            <div className="service-bento-card bento-spotlight-card" onMouseMove={handleBentoMouseMove}>
              <span className="bento-badge-holo"><span className="badge-pulse-dot" style={{ backgroundColor: '#4ADE80' }} /> 🏭 Full Factory Scale</span>
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/manufacturing.png" alt="Manufacturing" />
              <div className="service-bento-overlay">
                <h3>Manufacturing</h3>
                <p>We are production management specialists, overseeing quality and process across every manufacturing stage.</p>
              </div>
            </div>

            <div className="service-bento-card bento-spotlight-card" onMouseMove={handleBentoMouseMove}>
              <span className="bento-badge-holo"><span className="badge-pulse-dot" style={{ backgroundColor: '#00F0FF' }} /> 🛡️ SA8000 &amp; ISO Audited</span>
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/quality_inspection.png" alt="Inspection & Compliance" width="400" height="400" />
              <div className="service-bento-overlay">
                <h3>Inspection &amp; Compliance</h3>
                <p>We enforce world-class quality controls standards and statutory compliance audits across the entire supply chain.</p>
              </div>
            </div>

            <div className="service-bento-card bento-spotlight-card" onMouseMove={handleBentoMouseMove}>
              <span className="bento-badge-holo"><span className="badge-pulse-dot" style={{ backgroundColor: '#F43F5E' }} /> 🏬 50k Sq.Ft Storage</span>
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/warehousing.png" alt="Warehousing" />
              <div className="service-bento-overlay">
                <h3>Warehousing</h3>
                <p>Secure, state-of-the-art storage and highly efficient fulfillment hubs positioned for global reach.</p>
              </div>
            </div>

            <div className="service-bento-card bento-spotlight-card" onMouseMove={handleBentoMouseMove}>
              <span className="bento-badge-holo"><span className="badge-pulse-dot" style={{ backgroundColor: '#3B82F6' }} /> 🚢 Direct Air/Sea Freight</span>
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/logistics.png" alt="Global Logistics" />
              <div className="service-bento-overlay">
                <h3>Global Logistics</h3>
                <p>Ensuring merchandise is ready and dispatched smoothly through our direct logistics partnerships.</p>
              </div>
            </div>

            <div className="service-bento-card wide bento-spotlight-card" onMouseMove={handleBentoMouseMove}>
              <span className="bento-badge-holo"><span className="badge-pulse-dot" style={{ backgroundColor: '#A855F7' }} /> 💻 AI Digital Ops</span>
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/ai_tech.png" alt="Digital Ops & Gen-Z Tech" />
              <div className="service-bento-overlay">
                <h3>Digital Ops &amp; Gen-Z Tech</h3>
                <p>We deploy our elite Gen-Z IT engineers to build bespoke software, dashboards, and AI integrations necessary to modernize your enterprise operations. Seamless supply chain visibility meets algorithmic efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Showcase Section using ProductVideoCard */}
      <section id="products" className="gsap-section" style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: '#220150', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '50px', backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#E2E8F0', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Product Categories
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
              B2B Product Showcase
            </h2>
            <p style={{ color: '#E2E8F0', fontSize: '18px', maxWidth: '750px', margin: '16px auto 0 auto', lineHeight: 1.6 }}>
              Crafted with precision, delivered with speed. Explore our core B2B product lines.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '32px' }}>
            {productsData.map((prod) => (
              <ProductVideoCard
                key={prod.id}
                title={prod.title}
                category={prod.category}
                description={prod.description}
                videoSrc={prod.videoSrc}
                posterSrc={prod.posterSrc}
                ctaText={prod.ctaText}
                onCtaClick={() => {
                  setSelectedProductForModal(prod);
                  setSpecModalOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Ethical Sourcing & Sustainability Section */}
      <section id="ethical-sourcing" className="section-padding gsap-section" style={{ backgroundColor: '#140038', color: '#FFFFFF', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="responsive-grid-2" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '50px', backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#E2E8F0', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
                <Leaf size={16} color="#34D399" /> Ethical Sourcing
              </div>

              <h2 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px', lineHeight: 1.2 }}>
                Pioneering Sustainable &amp; Compliant Manufacturing
              </h2>
              <p style={{ color: '#E2E8F0', fontSize: '17px', lineHeight: 1.8, marginBottom: '24px', textAlign: 'justify' }}>
                At AAA 2 Innovate, our passion for high-end production is matched only by our relentless commitment to sustainability. We empower our manufacturing partners to embrace renewable energy—including solar, wind, and biomass—to power their facilities.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '32px' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Zap color="#38BDF8" size={28} style={{ marginBottom: '8px' }} />
                  <h4 style={{ color: '#FFF', fontWeight: 600, fontSize: '16px', margin: '0 0 4px 0' }}>Clean Energy</h4>
                  <span style={{ color: '#CBD5E1', fontSize: '13px' }}>Solar &amp; Wind Powered Mills</span>
                </div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Droplets color="#3B82F6" size={28} style={{ marginBottom: '8px' }} />
                  <h4 style={{ color: '#FFF', fontWeight: 600, fontSize: '16px', margin: '0 0 4px 0' }}>Zero Waste Water</h4>
                  <span style={{ color: '#CBD5E1', fontSize: '13px' }}>Effluent Treatment Plants</span>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '480px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/ethical_sustainability.png" alt="Sustainable Manufacturing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20, 0, 56, 0.9) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', color: '#FFF' }}>
                <div style={{ fontSize: '18px', fontWeight: 700 }}>Certified Factories (SA8000 &amp; ISO 14001)</div>
                <div style={{ fontSize: '14px', color: '#CBD5E1' }}>Full Garment Transfer Certificates for Organic Cotton &amp; GOTS</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 7. Interactive Contact Section */}
      <section id="contact" className="gsap-section" style={{ padding: '80px 0 100px 0', backgroundColor: '#140038', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '50px', backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#E2E8F0', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Contact Hub
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
              Start Your Journey With Us
            </h2>
            <p style={{ color: '#E2E8F0', fontSize: '18px', maxWidth: '750px', margin: '16px auto 0 auto', lineHeight: 1.6 }}>
              Whether you need high-end product sourcing, custom manufacturing, or IT engineering, our experts are ready.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '48px', alignItems: 'start' }}>

            {/* Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.15)', height: 'fit-content' }}>
                  <MapPin color="#E2E8F0" size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>Global Headquarters</h3>
                  <p style={{ color: '#CBD5E1', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                    AAA 2 Innovate Private Limited<br />
                    1 Floor, F-40, F Block, Sector 6,<br />
                    Noida, Uttar Pradesh 201301
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.15)', height: 'fit-content' }}>
                  <Phone color="#E2E8F0" size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>Direct Line</h3>
                  <p style={{ color: '#CBD5E1', fontSize: '15px', margin: 0 }}>
                    <a href="tel:+911206916907" style={{ color: '#CBD5E1', textDecoration: 'none' }}>+91-120-691-6907</a>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.15)', height: 'fit-content' }}>
                  <Mail color="#E2E8F0" size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>Email Inquiry</h3>
                  <p style={{ color: '#CBD5E1', fontSize: '15px', margin: 0 }}>
                    <a href="mailto:info@aaa2innovate.com" style={{ color: '#CBD5E1', textDecoration: 'none' }}>info@aaa2innovate.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Sourcing Configurator */}
            <div>
              <SourcingConfigurator selectedCategoryFromModal={selectedCategoryForConfigurator} />
            </div>

          </div>
        </div>
      </section>

      {/* Product Spec Modal */}
      <ProductSpecModal
        isOpen={specModalOpen}
        onClose={() => setSpecModalOpen(false)}
        productData={selectedProductForModal}
        onSelectCategory={(catName) => setSelectedCategoryForConfigurator(catName)}
      />

      {/* 8. Testimonials & FAQ Section */}
      <TestimonialSlider />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "What services does AAA 2 Innovate provide?",
            answer: "We provide end-to-end global supply chain management. This includes high-quality product sourcing, custom manufacturing, rigorous quality control, logistics, and Gen-Z software engineering."
          },
          {
            question: "Where are your manufacturing hubs located?",
            answer: "While we operate globally, our core manufacturing and sourcing hubs are located in India, giving brands direct access to top-tier factories and craftspeople."
          },
          {
            question: "How do you enforce ethical compliance?",
            answer: "Every facility undergoes strict audits for international certifications including SA8000, ISO 14001, GOTS, OCS, Sedex, and BSCI."
          }
        ]}
      />

      {/* Infinite Accreditations Marquee */}
      <div className="marquee-container" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="marquee-track">
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
            { name: 'OEKO-TEX STANDARD 100', Icon: Sun },
            { name: 'SEDEX', Icon: Globe },
            { name: 'BSCI', Icon: Users },
            { name: 'C-TPAT', Icon: ShieldCheck },
            { name: 'GOTS', Icon: Leaf },
            { name: 'ISO 9001', Icon: Award }
          ].map((partner, index) => (
            <div key={index} className="marquee-item">
              <partner.Icon size={24} style={{ marginRight: '12px', color: 'var(--brand-blue)' }} />
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
