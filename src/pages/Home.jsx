import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ProductSpecModal from '../components/common/ProductSpecModal';
import SchemaInjector from '../components/seo/SchemaInjector';
import TiltCard from '../components/animations/TiltCard';
import {
  HeroSkeleton,
  AboutSkeleton,
  CapabilitiesSkeleton,
  ProductShowcaseSkeleton,
  EthicalSourcingSkeleton,
  ContactSectionSkeleton,
  TestimonialsSkeleton,
  FAQSkeleton,
  MarqueeSkeleton
} from '../components/common/HomeSkeletons';

import VideoHero from '../components/layout/VideoHero';

// Lazy-loaded secondary sections with section-specific skeleton boundaries
const CapabilitiesBentoGrid = lazy(() => import('../components/home/CapabilitiesBentoGrid'));
const ProductShowcaseSection = lazy(() => import('../components/home/ProductShowcaseSection'));
const EthicalSourcingSection = lazy(() => import('../components/home/EthicalSourcingSection'));
const InteractiveContactSection = lazy(() => import('../components/home/InteractiveContactSection'));
const TestimonialSlider = lazy(() => import('../components/common/TestimonialSlider'));
const FAQSection = lazy(() => import('../components/common/FAQSection'));
import AccreditationsMarquee from '../components/common/AccreditationsMarquee';
import {
  ShieldCheck, Target, Users, Lightbulb, Cloud,
  TrendingUp, BadgeCheck
} from 'lucide-react';
import { gsap, createGsapScope, animateNumberCounter } from '../utils/gsapUtils';

const Home = () => {
  const location = useLocation();
  const containerRef = useRef(null);
  const counterRef1 = useRef(null);
  const counterRef2 = useRef(null);

  const [specModalOpen, setSpecModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);
  const [selectedCategoryForConfigurator, setSelectedCategoryForConfigurator] = useState(null);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

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
      <section id="about" className="section-padding gsap-section" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center', gap: 'clamp(32px, 4vw, 56px)' }}>

            {/* Left: Bio Text */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>


              <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 42px)', fontWeight: 800, color: 'var(--brand-indigo)', lineHeight: 1.2, marginBottom: '16px', letterSpacing: '-0.01em' }}>
                Bridging Global Sourcing &amp; Tech Engineering
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>
                India is the world’s rising manufacturing and AI innovation capital. <strong>AAA 2 Innovate</strong> connects on-ground production mastery with elite Gen-Z software engineering to build, scale, and modernize your global supply chain.
              </p>

              <div className="home-bio-cta">
                <button
                  onClick={() => scrollToSection('services')}
                  className="btn-primary"
                >
                  Capabilities
                </button>
              </div>
            </div>

            {/* Right: Why Brands Trust Us with Counter */}
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '20px',
                border: '1px solid var(--border-light)',
                padding: 'clamp(24px, 3vw, 32px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 10px 30px rgba(34, 1, 80, 0.04)'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px', alignItems: 'flex-start' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--brand-indigo)', margin: 0, lineHeight: 1.2 }}>Why Brands Trust Us</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.3px' }}>Proven Enterprise Scale</span>
              </div>

              {/* Stats Counters */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px', paddingBottom: '18px', borderBottom: '1px solid rgba(34, 1, 80, 0.1)' }}>
                <div>
                  <div ref={counterRef1} style={{ fontSize: '32px', fontWeight: 800, color: 'var(--brand-indigo)', fontFamily: "var(--font-display)", lineHeight: 1 }}>100+</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '6px', fontWeight: 600 }}>Vetted Factory Partners</div>
                </div>
                <div>
                  <div ref={counterRef2} style={{ fontSize: '32px', fontWeight: 800, color: 'var(--brand-indigo)', fontFamily: "var(--font-display)", lineHeight: 1 }}>100%</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '6px', fontWeight: 600 }}>Statutory Compliance</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { title: "End-to-End Execution", desc: "From tech pack prototyping to factory floor auditing and international dispatch." },
                  { title: "Statutory Integrity", desc: "Rigorous SA8000, ISO, and ethical labor certifications at every stage." },
                  { title: "Integrated Logistics", desc: "Direct container capacity & real-time shipment visibility via Zipaworld." }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(34, 1, 80, 0.08)', flexShrink: 0, marginTop: '2px' }}>
                      <BadgeCheck color="var(--brand-indigo)" size={16} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--brand-indigo)', margin: '0 0 2px 0' }}>{item.title}</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Capabilities Bento Grid Section */}
      <Suspense fallback={<CapabilitiesSkeleton />}>
        <CapabilitiesBentoGrid />
      </Suspense>

      {/* 4. Products Showcase Section */}
      <Suspense fallback={<ProductShowcaseSkeleton />}>
        <ProductShowcaseSection />
      </Suspense>

      {/* 5. Ethical Sourcing & Sustainability Section */}
      <Suspense fallback={<EthicalSourcingSkeleton />}>
        <EthicalSourcingSection />
      </Suspense>

      {/* 7. Interactive Contact Section */}
      <Suspense fallback={<ContactSectionSkeleton />}>
        <InteractiveContactSection selectedCategoryForConfigurator={selectedCategoryForConfigurator} />
      </Suspense>

      {/* Product Spec Modal */}
      <ProductSpecModal
        isOpen={specModalOpen}
        onClose={() => setSpecModalOpen(false)}
        productData={selectedProductForModal}
        onSelectCategory={(catName) => setSelectedCategoryForConfigurator(catName)}
      />

      {/* 8. Testimonials & FAQ Section */}
      <Suspense fallback={<TestimonialsSkeleton />}>
        <TestimonialSlider />
      </Suspense>

      <Suspense fallback={<FAQSkeleton />}>
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
            },
            {
              question: "What is your Minimum Order Quantity (MOQ) and sample lead time?",
              answer: "We accommodate flexible MOQ tiers starting from pilot runs (100–500 pcs) up to full container enterprise scale. Rapid sample development and tech packs are typically dispatched within 7–10 days."
            }
          ]}
        />
      </Suspense>

      {/* Infinite Accreditations Marquee */}
      <AccreditationsMarquee style={{ borderTop: 'none' }} />

    </div>
  );
};

export default Home;
