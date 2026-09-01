import React, { useEffect, useRef } from 'react';
import FAQSection from '../../components/common/FAQSection';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTASection from '../../components/common/CTASection';
import SchemaInjector from '../../components/seo/SchemaInjector';
import AccreditationsMarquee from '../../components/common/AccreditationsMarquee';
import DivisionsBentoGrid from '../../components/common/DivisionsBentoGrid';
import TiltCard from '../../components/animations/TiltCard';
import PageHero from '../../components/common/PageHero';
import { gsap, createGsapScope } from '../../utils/gsapUtils';
import { Code2, Smartphone, Globe, ShieldCheck, Database, ArrowRight, Zap, Target, Search, PlayCircle, Cloud, Cpu, Settings } from 'lucide-react';

const softwareServices = [
  {
    id: '01',
    Icon: Database,
    title: 'Software Development',
    desc: 'Scalable, reliable software solutions designed to solve complex business challenges and support long-term growth.'
  },
  {
    id: '02',
    Icon: Cloud,
    title: 'Cloud Solutions',
    desc: 'Flexible and secure cloud architectures built for performance, scalability, and seamless business operations.'
  },
  {
    id: '03',
    Icon: Smartphone,
    title: 'Web & Mobile Apps',
    desc: 'Modern, responsive digital experiences designed to work seamlessly across web, mobile, and multiple devices.'
  },
  {
    id: '04',
    Icon: Cpu,
    title: 'AI & Automation',
    desc: 'Intelligent technologies that automate repetitive processes, improve efficiency, and enable smarter decisions.'
  },
  {
    id: '05',
    Icon: ShieldCheck,
    title: 'Security & Compliance',
    desc: 'Robust security practices that protect applications, systems, and business data across every layer.'
  },
  {
    id: '06',
    Icon: Settings,
    title: 'Integration & Support',
    desc: 'Seamless system integrations and continuous technical support to keep your digital ecosystem connected and reliable.'
  }
];

const marketingServices = [
  {
    icon: Search,
    title: 'Organic SEO',
    desc: 'Data-driven SEO strategies that improve visibility and search rankings.'
  },
  {
    icon: Target,
    title: 'PPC Advertising',
    desc: 'Targeted campaigns designed to increase conversions and optimize ad spend.'
  },
  {
    icon: Globe,
    title: 'Social Media & Brand',
    desc: 'Engaging content that builds brand awareness and loyal communities.'
  },
  {
    icon: PlayCircle,
    title: 'Video & Webinars',
    desc: 'High-quality video content and webinars that build trust and authority.'
  }
];


const whyChooseUs = [
  'Customized Technology Solutions', 'Modern UI/UX Design', 'Secure & Scalable Systems', 'End-to-End Development',
  'Digital Marketing Expertise', 'Industry-Specific Experience', 'Dedicated Technical Support', 'Affordable Pricing Models'
];


const serviceFaqs = [
  {
    "question": "What tech stacks do you specialize in?",
    "answer": "Our Gen-Z engineering team specializes in React, Node.js, Python, AWS, Azure, and mobile-first frameworks. We build scalable enterprise applications with modern, agile technologies. Our solutions are fast, secure and user-focused."
  },
  {
    "question": "Do you offer dedicated development teams?",
    "answer": "Yes, we can provide dedicated squads of engineers, PMs, and designers to act as an extension of your in-house IT department."
  },
  {
    "question": "Do you build custom ERPs for supply chains?",
    "answer": "Yes, we architect custom Enterprise Resource Planning (ERP) tools, inventory management systems, and vendor portals specifically tailored to complex supply chains."
  },
  {
    "question": "How do you ensure data security?",
    "answer": "We follow strict security protocols including end-to-end encryption, SOC2 compliance standards, regular vulnerability penetration testing, and robust access controls."
  }
];

const Tech = () => {
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
    <div ref={containerRef} style={{ width: '100%', backgroundColor: 'var(--bg-main)', overflowX: 'hidden' }}>
      <Helmet>
        <title>Elite IT Engineering & Digital Operations | AAA 2 Innovate</title>
        <meta name="description" content="World-class custom software development, digital infrastructure, and AI automation built by an elite Gen-Z engineering team to scale your enterprise." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Elite IT Engineering & Digital Operations | AAA 2 Innovate" />
        <meta property="og:description" content="World-class custom software development, digital infrastructure, and AI automation built by an elite Gen-Z engineering team to scale your enterprise." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.aaa2innovate.com/capabilities/tech" />
        <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/capabilities/tech" />
      </Helmet>
      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "IT Engineering & Software Development",
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

      {/* Cinematic Hero */}
      <PageHero
        backgroundImage="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/tech_hero.png"
        titleLine1="Digital Ops &"
        titleLine2="Gen-Z Tech"
        subtitle="We engineer fast, intelligent software that turns complex data into competitive advantage through cloud-native architecture and automation."
        paddingTop="115px"
        paddingBottom="150px"
        overlayOpacity={0.9}
      />

      {/* Tech Stack Marquee */}
      {/* <section className="tech-marquee-container" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '24px 0', overflow: 'hidden', backgroundColor: 'var(--bg-main)' }}>
        <style>
          {`
            @keyframes scrollTech {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .tech-marquee {
              display: flex;
              width: max-content;
              animation: scrollTech 30s linear infinite;
            }
            .tech-marquee-container:hover .tech-marquee {
              animation-play-state: paused;
            }
            .tech-item {
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              cursor: pointer;
              filter: grayscale(100%);
              opacity: 0.5;
            }
              .tech-item:hover {
              transform: scale(1.15);
              filter: grayscale(0%);
              opacity: 1;
              color: var(--brand-orange) !important;
            }
          `}
        </style>
        <div className="tech-marquee">
          {[...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="tech-item" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '0 40px', fontSize: '20px', fontWeight: 600, color: '#6B7280' }}>
              <img loading="lazy" src={tech.icon} alt={tech.name} style={{ height: '32px', width: '32px', objectFit: 'contain' }} />
              {tech.name}
            </div>
          ))}
        </div>
      </section> */}

      {/* Core Services: Software Development */}
      <DivisionsBentoGrid
        theme="light"
        title="Software Development Solutions"
        subtitle="We develop reliable, scalable, and user-friendly software tailored to your specific industry requirements. From Logistics to Healthcare, we've got you covered."
        divisions={softwareServices}
      />
      
      {/* Semantic FAQ Section */}
      <FAQSection faqs={serviceFaqs} title="Frequently Asked Questions" />

      {/* Next Step Transition */}
      <section className="gsap-section" style={{ padding: 'clamp(24px, 3.5vw, 36px) 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container next-transition-container">
          <p style={{ color: 'var(--text-secondary)', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>Next in the Capabilities Matrix</p>
          <Link to="/capabilities/sourcing" className="next-transition-link">
            <motion.h2 
              whileHover={{ x: -4 }}
              style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, color: 'var(--brand-indigo)', margin: 0, fontFamily: 'var(--font-display)' }}
            >
              Product Sourcing
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
      <CTASection 
        titlePrefix="Ready to"
        highlightText="Scale?"
        description="We are ready to help your business transform digitally through innovative software development, intelligent automation, and robust digital marketing. Let's build the future together."
        buttonText="Start Your Tech Project"
      />

      {/* Accreditations Marquee */}
      <AccreditationsMarquee />
    </div>
  );
};

export default Tech;


