import React, { useEffect } from 'react';
import FAQSection from '../../components/seo/FAQSection';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, ShieldCheck, Database, Rocket, PlayCircle, BookOpen, GraduationCap, ArrowRight, Zap, Target, Search, BarChart } from 'lucide-react';
import CTASection from '../../components/CTASection';
import SchemaInjector from '../../components/seo/SchemaInjector';
import Breadcrumbs from '../../components/seo/Breadcrumbs';

const techStack = [
  { name: 'AWS Cloud', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Microsoft Azure', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg' },
  { name: 'React.js', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/02569B' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000' },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' }
];

const softwareServices = [
  { icon: Database, title: 'ERP Design & Development', desc: 'Customized ERP systems tailored to streamline operations, improve productivity, and support exponential business growth.' },
  { icon: Code2, title: 'Cloud-Native Ecosystems', desc: 'Scalable, secure, and performance-driven software architectures built from the ground up for the modern cloud.' },
  { icon: Smartphone, title: 'Mobile-First Experiences', desc: 'Fluid Android and iOS applications engineered to deliver hyper-engaging, native experiences across all devices.' },
  { icon: ShieldCheck, title: 'Data Security & Protection', desc: 'Advanced security measures prioritizing confidentiality, integrity, and availability for sensitive business data.' }
];

const marketingServices = [
  { icon: Search, title: 'Organic SEO', desc: 'Data-backed keyword research, technical optimization, and high-authority link building to dominate search rankings.' },
  { icon: Target, title: 'PPC Advertising', desc: 'Laser-targeted ad campaigns designed to maximize conversions while drastically lowering acquisition costs.' },
  { icon: Globe, title: 'Social Media & Brand', desc: 'Engaging storytelling and viral content strategies that build a loyal community across all major platforms.' },
  { icon: PlayCircle, title: 'Webinars & Corporate Video', desc: 'High-production-value video assets and live events that build immense brand trust and authority at scale.' }
];

const elearningServices = [
  { icon: Globe, title: 'Web Development', desc: 'Professional training in frontend & backend technologies, PHP, and responsive web design.' },
  { icon: Target, title: 'Digital Marketing Training', desc: 'Comprehensive education on SEO, PPC, social media strategies, and corporate branding.' },
  { icon: Database, title: 'Cloud Computing (AWS/Azure)', desc: 'Enterprise cloud infrastructure, deployment training, and architecture optimization.' },
  { icon: Smartphone, title: 'Android Development', desc: 'Mobile application development training targeting the massive Android ecosystem.' }
];

const whyChooseUs = [
  'Customized Technology Solutions', 'Modern UI/UX Design', 'Secure & Scalable Systems', 'End-to-End Development',
  'Digital Marketing Expertise', 'Industry-Specific Experience', 'Dedicated Technical Support', 'Affordable Pricing Models'
];


const serviceFaqs = [
  {
    "question": "What tech stacks do you specialize in?",
    "answer": "Our Gen-Z engineering team specializes in React, Node.js, Python, AWS, Azure, and mobile-first frameworks to build scalable enterprise applications."
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
return (
    <div style={{ width: '100%', backgroundColor: 'var(--bg-main)', paddingTop: '90px' }}>
      <Helmet>
        <title>Elite IT Engineering & Digital Operations | AAA 2 Innovate</title>
        <meta name="description" content="World-class custom software development, digital infrastructure, and AI automation built by an elite Gen-Z engineering team to scale your enterprise." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Elite IT Engineering & Digital Operations | AAA 2 Innovate" />
        <meta property="og:description" content="World-class custom software development, digital infrastructure, and AI automation built by an elite Gen-Z engineering team to scale your enterprise." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.aaa2innovate.com/services/tech" />
        <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/services/tech" />
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

      <div style={{ position: 'absolute', top: '90px', left: 0, width: '100%', zIndex: 10 }}>
        <Breadcrumbs />
      </div>

      {/* Cinematic Hero */}
      <section style={{ minHeight: '60vh', position: 'relative', display: 'flex', alignItems: 'center', paddingTop: '80px', paddingBottom: '60px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
          <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/tech_hero.png" alt="Gen Z Software Engineering Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(90deg, rgba(2,4,10,0.8) 0%, rgba(2,4,10,0.5) 50%, transparent 100%)' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '700px' }}
          >
            <h1 style={{ fontSize: '64px', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px', lineHeight: 1.1, letterSpacing: '-1px' }}>
              Crafting Software with <br/><span style={{ color: 'var(--brand-orange)' }}>Technology & Simplicity.</span>
            </h1>
            
            <p style={{ fontSize: '18px', color: '#E5E7EB', lineHeight: 1.6, maxWidth: '600px', marginBottom: '40px', fontWeight: 400, textAlign: 'justify' }}>
              Powered by a new generation of digital-native architects, we don't just write code—we engineer disruption. We help businesses turn massive data into a competitive advantage through lightning-fast software, cloud-native architecture, and intelligent automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="tech-marquee-container" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '24px 0', overflow: 'hidden', backgroundColor: 'var(--bg-main)' }}>
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
      </section>

      {/* Core Services: Software Development */}
      <section style={{ padding: '32px 0 80px 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>Software Development Solutions</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
              We develop reliable, scalable, and user-friendly software tailored to your specific industry requirements. From Logistics to Healthcare, we've got you covered.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '24px' }}>
            {softwareServices.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  backgroundColor: 'var(--bg-secondary)', padding: '32px 24px', borderRadius: '24px', 
                  border: '1px solid var(--border-light)', transition: 'all 0.4s ease', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'justify'
                }}
                whileHover={{ transform: 'translateY(-12px)', boxShadow: '0 24px 48px rgba(56, 189, 248, 0.1)', borderColor: '#38BDF8' }}
              >
                <div style={{ width: '56px', height: '56px', backgroundColor: 'rgba(56,189,248,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <service.icon size={28} color="#38BDF8" />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Module */}
      <section style={{ padding: '48px 0', backgroundColor: '#02040A' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '40px', alignItems: 'center' }}>
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px', lineHeight: 1.2 }}>
                Amplify Your Reach. <br/><span style={{ color: 'var(--brand-orange)' }}>Dominate the Market.</span>
              </h2>
              <p style={{ fontSize: '16px', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '20px' }}>
                A website without traffic is just a billboard in the desert. We don't just run ads; we build digital ecosystems. Using data-driven SEO, precision-targeted paid media, and viral content strategies, we turn attention into revenue and casual scrollers into loyal customers.
              </p>
              <blockquote style={{ borderLeft: '4px solid var(--brand-orange)', paddingLeft: '20px', margin: '20px 0', fontStyle: 'italic', color: '#FFFFFF', fontSize: '18px' }}>
                "Stop interrupting what people are interested in and be what people are interested in." <br/><span style={{ fontSize: '14px', color: '#9CA3AF', fontStyle: 'normal' }}>— Craig Davis</span>
              </blockquote>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {marketingServices.map((service, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <service.icon size={16} color="var(--brand-orange)" />
                      <h3 style={{ color: '#F3F4F6', fontSize: '15px', fontWeight: 700, margin: 0 }}>{service.title}</h3>
                    </div>
                    <p style={{ color: '#6B7280', fontSize: '13px', lineHeight: 1.4, margin: 0 }}>{service.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Graphics */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', minHeight: '350px', border: '1px solid rgba(255, 87, 34, 0.2)' }}
            >
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/digital_marketing_v2.png" alt="Digital Marketing SaaS Dashboard" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(2,4,10,0.8), transparent)' }}></div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* E-Learning & Knowledge Hub */}
      <section style={{ padding: '48px 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>Interactivity & E-Learning</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
              We believe quality education should be accessible to everyone. We collaborate with industry experts to deliver live sessions, story-based learning, and highly practical training programs.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '24px' }}>
            {elearningServices.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  backgroundColor: 'var(--bg-secondary)', padding: '32px', borderRadius: '24px', 
                  border: '1px solid var(--border-light)', position: 'relative', overflow: 'hidden',
                  cursor: 'pointer', transition: 'all 0.4s ease', display: 'flex', flexDirection: 'column'
                }}
                whileHover={{ transform: 'translateY(-8px)', boxShadow: '0 20px 40px rgba(167, 139, 250, 0.1)', borderColor: '#A78BFA' }}
              >
                {/* Giant Faded Background Icon */}
                <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.03, transform: 'scale(2.5)' }}>
                  <service.icon size={100} />
                </div>
                
                <div style={{ width: '56px', height: '56px', backgroundColor: 'rgba(167,139,250,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', position: 'relative', zIndex: 2 }}>
                  <service.icon size={28} color="#A78BFA" />
                </div>
                
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>{service.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, margin: 0, flex: 1 }}>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Semantic FAQ Section */}
      <FAQSection faqs={serviceFaqs} title="Frequently Asked Questions" />

      {/* Footer CTA */}
      <CTASection 
        titlePrefix="Ready to"
        highlightText="Scale?"
        description="We are ready to help your business transform digitally through innovative software development, intelligent automation, and robust digital marketing. Let's build the future together."
        buttonText="Start Your Tech Project"
      />
    </div>
  );
};

export default Tech;


