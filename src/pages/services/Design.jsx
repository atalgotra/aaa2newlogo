import React, { useEffect, useRef } from 'react';
import FAQSection from '../../components/common/FAQSection';
import SchemaInjector from '../../components/seo/SchemaInjector';
// import Breadcrumbs from '../../components/seo/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTASection from '../../components/CTASection';
import AccreditationsMarquee from '../../components/common/AccreditationsMarquee';
import DivisionsBentoGrid from '../../components/common/DivisionsBentoGrid';
import PageHero from '../../components/common/PageHero';
import { gsap, createGsapScope } from '../../utils/gsapUtils';
import { Box, Lightbulb, TrendingUp, DraftingCompass, Layers, Search, Factory, ArrowRight, RefreshCw, CheckCircle } from 'lucide-react';

const developmentProcessData = [
  {
    id: '01',
    title: 'Material & Trim Sourcing',
    desc: 'We source premium materials, technical fabrics, components, and custom trims from trusted manufacturing partners.',
    Icon: Search
  },
  {
    id: '02',
    title: 'Pattern Engineering',
    desc: 'Specialists transform your designs into precise patterns and production-ready technical specifications.',
    Icon: Layers
  },
  {
    id: '03',
    title: 'Prototype Development',
    desc: 'We develop the first physical prototype to validate design, materials, construction, and functionality.',
    Icon: Factory
  },
  {
    id: '04',
    title: 'Sample Refinement',
    desc: 'Feedback is incorporated through focused iterations until the sample meets your design and quality standards.',
    Icon: RefreshCw
  },
  {
    id: '05',
    title: 'Pre-Production Approval',
    desc: 'Final specifications are locked, materials are ordered, and production standards are confirmed before bulk manufacturing.',
    Icon: CheckCircle
  },
  {
    id: '06',
    title: 'Retail-Ready Finalization',
    desc: 'Labels, packaging, branding, and finishing details are finalized for retail and distribution.',
    Icon: Box
  }
];

const initialDesignData = [
  {
    id: '01',
    title: 'Brand Immersion',
    desc: 'We understand your brand identity, target market, and design vision to align every product with your expectations.',
    Icon: Lightbulb
  },
  {
    id: '02',
    title: 'Data-Driven Trend Boards',
    desc: 'We analyze market trends, social media, competitors, and forecasts to develop relevant product directions.',
    Icon: TrendingUp
  },
  {
    id: '03',
    title: 'Technical Drawings',
    desc: 'We create precise technical drawings covering specifications, colors, fabrics, trims, and key design details.',
    Icon: DraftingCompass
  }
];

const serviceFaqs = [
  {
    "question": "Do you help with product design and prototyping?",
    "answer": "Yes, our expert design team translates your concepts into detailed tech packs, realistic 3D renders, and physical prototypes, ensuring every detail is refined and production-ready before moving to mass production."
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
  }
];

const Design = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = createGsapScope(containerRef, () => {
      const sections = gsap.utils.toArray('.gsap-section');
      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    });
    return cleanup;
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', backgroundColor: 'var(--bg-main)', paddingTop: '80px', overflowX: 'hidden' }}>
      <Helmet>
        <title>Product Design & Development | Custom Manufacturing | AAA 2 Innovate</title>
        <meta name="description" content="Transform concepts into market-ready merchandise. Our specialized design team engineers physical products tailored to global consumer trends and your brand's unique identity." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Product Design & Development | Custom Manufacturing | AAA 2 Innovate" />
        <meta property="og:description" content="Transform concepts into market-ready merchandise. Our specialized design team engineers physical products tailored to global consumer trends and your brand's unique identity." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/" />
        <link rel="canonical" href="https://www.aaa2innovate.com/capabilities/design" />
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

      {/* <div style={{ position: 'absolute', top: '80px', left: 0, width: '100%', zIndex: 10 }}>
        <Breadcrumbs />
      </div> */}

      {/* Hero Section */}
      <PageHero
        backgroundImage="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/design.png"
        titleLine1="Next-Gen"
        titleLine2="Product Engineering"
        subtitle="We transform concepts into tangible, market-dominating merchandise. From raw ideas to factory-ready technical specifications, we engineer products built to scale globally."
        paddingTop="115px"
        paddingBottom="115px"
        overlayOpacity={0.9}
      />


      {/* Initial Design Process */}
      <DivisionsBentoGrid
        theme="light"
        title="The Initial Design Process"
        divisions={initialDesignData}
      />

      {/* Product Development Process */}
      <DivisionsBentoGrid
        title="Product Development Process"
        divisions={developmentProcessData}
      />


      
      {/* Semantic FAQ Section */}
      <FAQSection faqs={serviceFaqs} title="Frequently Asked Questions" />



      {/* Next Step Transition */}
      <section className="gsap-section" style={{ padding: 'clamp(24px, 3.5vw, 36px) 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container next-transition-container">
          <p style={{ color: 'var(--text-secondary)', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>Next in the Capabilities Matrix</p>
          <Link to="/capabilities/manufacturing" className="next-transition-link">
            <motion.h2 
              whileHover={{ x: -4 }}
              style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, color: 'var(--brand-indigo)', margin: 0, fontFamily: 'var(--font-display)' }}
            >
              Manufacturing
            </motion.h2>
            <motion.div 
              className="next-transition-arrow"
              whileHover={{ scale: 1.1, rotate: 90 }}
            >
              <ArrowRight size={20} color="var(--brand-indigo)" />
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <CTASection titlePrefix="Ready to" highlightText="Build?" description="Ready to bring your hardware or software concept to life? Our world-class UI/UX and product engineering teams build hyper-engaging digital experiences and physical prototypes." buttonText="Consult our Design Team" />

      {/* Accreditations Marquee */}
      <AccreditationsMarquee />
    </div>
  );
};

export default Design;




