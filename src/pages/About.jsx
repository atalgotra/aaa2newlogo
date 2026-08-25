import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Target, Users, ShieldCheck, Cpu, Lightbulb, Globe, Server, Cloud, LineChart, MapPin } from 'lucide-react';
import SchemaInjector from '../components/seo/SchemaInjector';
import Breadcrumbs from '../components/seo/Breadcrumbs';
import TextReveal from '../components/animations/TextReveal';

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 300]);

  return (
    <div style={{ width: '100%', backgroundColor: 'var(--bg-main)', paddingTop: '90px' }}>
      <Helmet>
        <title>About Us | Global Sourcing & Supply Chain Experts | AAA 2 Innovate</title>
        <meta name="description" content="Learn about AAA 2 Innovate, a dynamic global enterprise led by 27-year industry veterans. We digitize and optimize traditional supply chains through advanced IT engineering and physical infrastructure." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us | Global Sourcing & Supply Chain Experts | AAA 2 Innovate" />
        <meta property="og:description" content="Learn about AAA 2 Innovate, a dynamic global enterprise led by industry veterans. We digitize and optimize traditional supply chains through advanced IT engineering and physical infrastructure." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.aaa2innovate.com/about" />
        <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/about" />
      </Helmet>
      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About AAA 2 Innovate",
        "description": "Learn about AAA 2 Innovate, a dynamic global enterprise led by 27-year industry veterans. We digitize and optimize traditional supply chains through advanced IT engineering and physical infrastructure.",
        "url": "https://www.aaa2innovate.com/about",
        "publisher": {
          "@type": "Organization",
          "name": "AAA 2 Innovate Pvt. Ltd."
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
        <motion.div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '120%',
          backgroundImage: 'url(https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/about/about_hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
          y: y
        }}></motion.div>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to right, rgba(11, 15, 25, 0.85) 0%, rgba(11, 15, 25, 0.4) 100%)',
          zIndex: 2
        }}></div>

        {/* Hero Content */}
        <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center', color: '#fff' }}>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 800, marginBottom: '24px', letterSpacing: '-1px', color: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextReveal text="Engineering the Future of" elementType="div" style={{ display: 'inline-flex' }} justifyContent="center" />
            <span style={{ color: 'var(--brand-orange)' }}>
               <TextReveal text="Global Commerce." elementType="div" style={{ display: 'inline-flex' }} delay={0.4} justifyContent="center" />
            </span>
          </h1>
          <p style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 300, color: '#E5E7EB', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Where elite technological innovation meets world-class physical sourcing.
          </p>
        </div>
      </section>

      {/* DNA Section (Who We Are) */}
      <section style={{ padding: '40px 0 60px 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>

            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '8px' }}>Our DNA</h2>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--brand-orange)', marginBottom: '32px', letterSpacing: '1px', textTransform: 'uppercase' }}>Powered by Gen-Z Energy</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-secondary)', fontSize: '17px', lineHeight: '1.8', textAlign: 'justify' }}>
                <p>
                  We are not a legacy corporation clinging to old methodologies. <strong>AAA 2 Innovate</strong> is driven by a dynamic, razor-sharp workforce where <strong>90% of our talent consists of brilliant minds straight from India's top universities.</strong>
                </p>
                <p>
                  This raw, Gen-Z energy allows us to approach legacy industries—like manufacturing, retail, and global logistics—with a digital-first, deeply innovative mindset. We don't just follow trends; our young engineers and sourcing specialists create them, bringing agility and technological fluency that traditional agencies simply cannot match.
                </p>
                <p>
                  By fusing this elite tech talent with decades of established global sourcing networks, we have built a dual-powerhouse enterprise designed to Take You Forward into the new future.
                </p>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', aspectRatio: '4/3' }}
            >
              <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/about/about_vision.png" alt="Tech Vision" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '30px', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px', color: '#FFFFFF' }}>Digital Convergence</h4>
                <p style={{ opacity: 0.9, fontSize: '15px', color: '#E5E7EB' }}>Bridging supply chains with cloud architecture.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* By the Numbers (GEO Statistics) */}
      <section style={{ padding: '60px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', textAlign: 'center' }}>
            
            <div style={{ padding: '32px', backgroundColor: 'var(--bg-main)', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '48px', fontWeight: 800, color: 'var(--brand-orange)', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>15+</div>
              <h4 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Countries Served</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>Delivering end-to-end supply chain solutions globally.</p>
            </div>

            <div style={{ padding: '32px', backgroundColor: 'var(--bg-main)', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '48px', fontWeight: 800, color: 'var(--brand-orange)', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>50+</div>
              <h4 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Manufacturing Partners</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>A robust, fully vetted network of Indian manufacturers.</p>
            </div>

            <div style={{ padding: '32px', backgroundColor: 'var(--bg-main)', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '48px', fontWeight: 800, color: 'var(--brand-orange)', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>100%</div>
              <h4 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Ethical Compliance</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>Strict adherence to SA8000 and ISO 14001 standards.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Core Values (Bento Grid) */}
      <section style={{ padding: '60px 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '16px' }}>Our Core Values</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '100%', margin: '0 auto', lineHeight: '1.7', textAlign: 'center' }}>
              We've reengineered traditional core values into a resilient framework designed for the modern enterprise.
            </p>
          </div>

          <div className="responsive-grid-2" style={{ gap: '30px' }}>

            {/* Value 1 */}
            <div style={{
              padding: '40px 30px', backgroundColor: '#FFFFFF', borderRadius: '20px', border: '1px solid var(--border-light)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.03)', transition: 'all 0.3s ease', cursor: 'default', textAlign: 'center'
            }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 90, 0, 0.08)'; e.currentTarget.style.borderColor = 'var(--brand-orange)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)'; e.currentTarget.style.borderColor = 'var(--border-light)'; }}
            >
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(255, 87, 34, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
                <ShieldCheck size={32} color="var(--brand-orange)" />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>Radical Transparency</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '15px' }}>
                We believe in ethical sourcing and transparent digital infrastructure. Whether auditing a factory floor or securing a cloud database, we hold ourselves to uncompromising global standards.
              </p>
            </div>

            {/* Value 2 */}
            <div style={{
              padding: '40px 30px', backgroundColor: '#FFFFFF', borderRadius: '20px', border: '1px solid var(--border-light)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.03)', transition: 'all 0.3s ease', cursor: 'default', textAlign: 'center'
            }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 90, 0, 0.08)'; e.currentTarget.style.borderColor = 'var(--brand-orange)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)'; e.currentTarget.style.borderColor = 'var(--border-light)'; }}
            >
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(255, 87, 34, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
                <Target size={32} color="var(--brand-orange)" />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>Engineering Excellence</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '15px' }}>
                Whether it's overseeing physical product manufacturing or deploying a full-stack web application, we invest heavily in our young talent to ensure execution is nothing short of perfection.
              </p>
            </div>

            {/* Value 3 */}
            <div style={{
              padding: '40px 30px', backgroundColor: '#FFFFFF', borderRadius: '20px', border: '1px solid var(--border-light)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.03)', transition: 'all 0.3s ease', cursor: 'default', textAlign: 'center'
            }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 90, 0, 0.08)'; e.currentTarget.style.borderColor = 'var(--brand-orange)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)'; e.currentTarget.style.borderColor = 'var(--border-light)'; }}
            >
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(255, 87, 34, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
                <Users size={32} color="var(--brand-orange)" />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>Client-Centric Agility</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '15px' }}>
                We leverage modern communication tech to stay hyper-responsive. We communicate with unwavering openness, putting your strategic goals at the center of our operational loops.
              </p>
            </div>

            {/* Value 4 */}
            <div style={{
              padding: '40px 30px', backgroundColor: '#FFFFFF', borderRadius: '20px', border: '1px solid var(--border-light)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.03)', transition: 'all 0.3s ease', cursor: 'default', textAlign: 'center'
            }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 90, 0, 0.08)'; e.currentTarget.style.borderColor = 'var(--brand-orange)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)'; e.currentTarget.style.borderColor = 'var(--border-light)'; }}
            >
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(255, 87, 34, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
                <Cpu size={32} color="var(--brand-orange)" />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>Algorithmic Problem Solving</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '15px' }}>
                Obstacles are just data waiting to be optimized. We embrace cutting-edge technology and a determination-driven approach to navigate challenges and deliver tangible results.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section style={{ padding: '40px 0 20px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'center' }}>

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--brand-orange)' }}></div>
                <h4 style={{ color: 'var(--brand-orange)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>The Architect</h4>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '32px', lineHeight: '1.2' }}>
                Leadership at <br /><strong style={{ fontWeight: 800 }}>AAA 2 Innovate</strong>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-secondary)', fontSize: '17px', lineHeight: '1.8' }}>
                <p>
                  <strong>Dr. Ambrish Kumar</strong> is the visionary Founder behind AAA 2 Innovate. With a profound understanding of global supply chain dynamics and digital transformation, he serves as the principal strategist driving our mission to modernize international commerce.
                </p>
                <p>
                  Drawing on decades of elite industry experience, Dr. Kumar architects the intersection where traditional manufacturing resilience meets cutting-edge technological agility. His uncompromising standards for quality, agile logistics, and operational compliance have empowered global enterprises to execute complex projects seamlessly.
                </p>
                <p>
                  By fostering a rapidly scaling team of brilliant Gen-Z engineers and sourcing specialists, he has cultivated a deeply innovative corporate culture. Under his leadership, AAA 2 Innovate doesn't just adapt to the future of global sourcing—we are actively engineering it.
                </p>
              </div>
            </motion.div>

            {/* Right: Modern Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative', padding: '20px' }}
            >
              {/* Decorative background shape */}
              <div style={{
                position: 'absolute',
                top: 0, right: 0,
                width: '80%', height: '80%',
                backgroundColor: 'rgba(255, 87, 34, 0.04)',
                borderRadius: '30px',
                zIndex: 1
              }}></div>

              <div style={{
                position: 'relative',
                zIndex: 2,
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0,0,0,0.08)',
                border: '1px solid var(--border-light)',
                backgroundColor: '#fff'
              }}>
                <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/founder_modern.png"
                  alt="Dr. Ambrish Kumar - Founder"
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '0 0 40px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--brand-orange)' }}></div>
              <h4 style={{ color: 'var(--brand-orange)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>The Collective</h4>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--brand-orange)' }}></div>
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '16px' }}>
              The Engine Behind the <strong style={{ fontWeight: 800 }}>Innovation</strong>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7', textAlign: 'center' }}>
              A dynamic powerhouse of Gen-Z engineers, seasoned supply chain experts, and strategic visionaries working in synergy to redefine the boundaries of global commerce.
            </p>
          </div>

          <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)', border: '1px solid var(--border-light)' }}>
            <img loading="lazy" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="The AAA 2 Innovate Team"
              style={{ width: '100%', aspectRatio: '21/9', objectFit: 'cover', display: 'block' }}
            />
            {/* Gradient Overlay for Premium Feel */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent 50%)', pointerEvents: 'none' }}></div>
          </div>
        </div>
      </section>

      {/* 6 Core Divisions Section - NEXT LEVEL DARK BENTO GRID */}
      <section style={{ padding: '60px 0 80px 0', backgroundColor: '#0B0F19', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 300, color: '#FFFFFF', marginBottom: '20px', letterSpacing: '-1px' }}>
              Our <strong style={{ fontWeight: 800 }}>6 Core Divisions</strong>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '18px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7', textAlign: 'center' }}>
              We operate through a specialized, six-pillar framework. No silos. Just seamless integration of deep industry expertise, advanced analytics, and agile digital execution.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>

            {/* 01: Product Engineering */}
            <div style={{
              position: 'relative', overflow: 'hidden', padding: '40px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
              borderRadius: '32px', border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
              transition: 'all 0.4s ease'
            }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = 'var(--brand-orange)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 87, 34, 0.15)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ position: 'absolute', right: '-10px', bottom: '-30px', fontSize: '160px', fontWeight: 900, color: 'rgba(255, 255, 255, 0.03)', pointerEvents: 'none', lineHeight: 1 }}>01</div>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: 'rgba(255, 87, 34, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <Lightbulb size={28} color="var(--brand-orange)" />
              </div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>Product Engineering</h3>
                <p style={{ color: '#9CA3AF', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>
                  We deeply analyze your brand's DNA to engineer products that resonate. Blending vast physical product knowledge with digital-first design thinking.
                </p>
              </div>
            </div>

            {/* 02: Global Procurement */}
            <div style={{
              position: 'relative', overflow: 'hidden', padding: '40px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
              borderRadius: '32px', border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
              transition: 'all 0.4s ease'
            }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = 'var(--brand-orange)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 87, 34, 0.15)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ position: 'absolute', right: '-10px', bottom: '-30px', fontSize: '160px', fontWeight: 900, color: 'rgba(255, 255, 255, 0.03)', pointerEvents: 'none', lineHeight: 1 }}>02</div>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: 'rgba(255, 87, 34, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <Globe size={28} color="var(--brand-orange)" />
              </div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>Global Procurement</h3>
                <p style={{ color: '#9CA3AF', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>
                  Acting as your high-speed conduit to global manufacturing, we manage every layer of vendor interaction to ensure maximum leverage and execution.
                </p>
              </div>
            </div>

            {/* 03: Digital Operations */}
            <div style={{
              position: 'relative', overflow: 'hidden', padding: '40px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
              borderRadius: '32px', border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
              transition: 'all 0.4s ease'
            }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = 'var(--brand-orange)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 87, 34, 0.15)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ position: 'absolute', right: '-10px', bottom: '-30px', fontSize: '160px', fontWeight: 900, color: 'rgba(255, 255, 255, 0.03)', pointerEvents: 'none', lineHeight: 1 }}>03</div>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: 'rgba(255, 87, 34, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <Server size={28} color="var(--brand-orange)" />
              </div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>Digital Operations</h3>
                <p style={{ color: '#9CA3AF', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>
                  We eliminate data silos by integrating modern ERP systems to automate information flow between your business and the factory floor.
                </p>
              </div>
            </div>

            {/* 04: Quality Assurance */}
            <div style={{
              position: 'relative', overflow: 'hidden', padding: '40px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
              borderRadius: '32px', border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
              transition: 'all 0.4s ease'
            }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = 'var(--brand-orange)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 87, 34, 0.15)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ position: 'absolute', right: '-10px', bottom: '-30px', fontSize: '160px', fontWeight: 900, color: 'rgba(255, 255, 255, 0.03)', pointerEvents: 'none', lineHeight: 1 }}>04</div>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: 'rgba(255, 87, 34, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <ShieldCheck size={28} color="var(--brand-orange)" />
              </div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>Quality Assurance</h3>
                <p style={{ color: '#9CA3AF', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>
                  We deploy rigorous, data-driven QA protocols and partner with top-tier international labs to guarantee your uncompromising standards.
                </p>
              </div>
            </div>

            {/* 05: Logistics */}
            <div style={{
              position: 'relative', overflow: 'hidden', padding: '40px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
              borderRadius: '32px', border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
              transition: 'all 0.4s ease'
            }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = 'var(--brand-orange)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 87, 34, 0.15)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ position: 'absolute', right: '-10px', bottom: '-30px', fontSize: '160px', fontWeight: 900, color: 'rgba(255, 255, 255, 0.03)', pointerEvents: 'none', lineHeight: 1 }}>05</div>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: 'rgba(255, 87, 34, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <Cloud size={28} color="var(--brand-orange)" />
              </div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>Global Logistics</h3>
                <p style={{ color: '#9CA3AF', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>
                  Powered by our sister concern <strong style={{ color: '#FFFFFF' }}>Zipaworld Innovation Pvt. Ltd.</strong>—a market leader in global freight—we orchestrate a vast logistics network to ensure absolute reliability on delivery.
                </p>
              </div>
            </div>

            {/* 06: Gen-Z Tech & AI */}
            <div style={{
              position: 'relative', overflow: 'hidden', padding: '40px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
              borderRadius: '32px', border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
              transition: 'all 0.4s ease'
            }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = 'var(--brand-orange)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 87, 34, 0.15)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ position: 'absolute', right: '-10px', bottom: '-30px', fontSize: '160px', fontWeight: 900, color: 'rgba(255, 255, 255, 0.03)', pointerEvents: 'none', lineHeight: 1 }}>06</div>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: 'rgba(255, 87, 34, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <Cpu size={28} color="var(--brand-orange)" />
              </div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>Gen-Z Tech & AI</h3>
                <p style={{ color: '#9CA3AF', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>
                  Our elite full-stack engineering team builds world-class custom software, AI solutions, and digital platforms to power your enterprise.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Strategic Ecosystem (Zipaworld) */}
      <section style={{ backgroundColor: '#0B0F19', color: '#FFFFFF', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 0' }}>
        <div className="container">
          <div className="responsive-grid-2" style={{ alignItems: 'center' }}>
            {/* Left: Text */}
            <div style={{ textAlign: 'justify' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,87,34,0.1)', padding: '8px 16px', borderRadius: '50px', marginBottom: '24px', border: '1px solid rgba(255,87,34,0.2)' }}>
                <span style={{ color: 'var(--brand-orange)', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>Strategic Ecosystem</span>
              </div>
              <h2 className="text-h1" style={{ fontWeight: 300, color: '#FFFFFF', marginBottom: '24px', textAlign: 'justify', lineHeight: 1.1 }}>
                Backed by a <br />
                <span style={{ fontWeight: 800, background: 'linear-gradient(90deg, #FFFFFF 0%, var(--brand-orange) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', paddingBottom: '4px' }}>
                  Market Leader
                </span>
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '16px', borderRadius: '16px', display: 'flex', gap: '16px', alignItems: 'flex-start', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                >
                  <div style={{ padding: '12px', backgroundColor: 'rgba(56, 189, 248, 0.1)', borderRadius: '12px', flexShrink: 0 }}>
                     <ShieldCheck color="#38BDF8" size={20} />
                  </div>
                  <div>
                    <h4 style={{ color: '#FFFFFF', fontSize: '17px', fontWeight: 600, marginBottom: '6px' }}>Unparalleled Infrastructure</h4>
                    <p style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      We operate with the formidable backing of our sister concern, <strong style={{ color: '#E5E7EB' }}>Zipaworld Innovation Pvt. Ltd.</strong>, leveraging their global logistics leadership to provide you with a massive supply chain advantage.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '16px', borderRadius: '16px', display: 'flex', gap: '16px', alignItems: 'flex-start', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                >
                  <div style={{ padding: '12px', backgroundColor: 'rgba(255, 87, 34, 0.1)', borderRadius: '12px', flexShrink: 0 }}>
                     <Globe color="var(--brand-orange)" size={20} />
                  </div>
                  <div>
                    <h4 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>End-to-End Solutions</h4>
                    <p style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                      Our integrated ecosystem—from software development by Gen-Z engineers to global logistics—guarantees execution, reliability, and speed.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            {/* Right: Logo / Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >
              <motion.div
                animate={{ y: [-15, 15, -15], rotateX: [5, -5, 5], rotateY: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 40px rgba(255,87,34,0.15)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                  width: '100%',
                  maxWidth: '400px',
                  margin: '0 auto'
                }}
              >
                {/* Inner highlight for premium feel */}
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top left, rgba(255,255,255,0.9) 0%, transparent 60%)', borderRadius: '24px', pointerEvents: 'none' }}></div>

                <img loading="lazy"
                  src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/zipaworld-logo.png"
                  alt="Zipaworld"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '90px',
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 2,
                    transform: 'translateZ(20px)'
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPACT NEXT LEVEL GLOBAL FOOTPRINT */}
      <section style={{
        padding: '60px 0 60px 0',
        backgroundColor: '#05080F',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        marginBottom: '-60px', /* Pulls Footer up to eliminate its top padding gap */
        position: 'relative',
        zIndex: 10,
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)' /* Premium separation from footer */
      }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>

            {/* Left Title */}
            <div style={{ flex: '1 1 300px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '6px 16px', borderRadius: '50px', backgroundColor: 'rgba(255, 87, 34, 0.1)', color: 'var(--brand-orange)', fontWeight: 600, fontSize: '14px', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px' }}>
                <Globe size={16} /> Global Reach
              </div>
              <h2 style={{ fontSize: '36px', fontWeight: 300, color: '#FFFFFF', marginBottom: '16px', lineHeight: '1.2' }}>
                Executing at Scale. <br />
                <strong style={{ fontWeight: 800 }}>Anywhere.</strong>
              </h2>
              <p style={{ color: '#9CA3AF', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>
                With strategic headquarters across major Indian tech and manufacturing centers, and an elite international presence, we maintain a flawless on-the-ground capability to drive your enterprise forward.
              </p>
            </div>

            {/* Right Content - Compact Badges */}
            <div style={{ flex: '2 1 500px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* India */}
              <div style={{ padding: '24px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'rgba(255,87,34,0.3)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(255,87,34,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={16} color="var(--brand-orange)" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#FFFFFF', margin: 0 }}>India Operations</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                  {/* Noida Head Office Badge */}
                  <span style={{
                    padding: '8px 16px',
                    backgroundColor: 'rgba(255, 87, 34, 0.15)',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    border: '1px solid var(--brand-orange)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 0 15px rgba(255, 87, 34, 0.2)'
                  }}>
                    <MapPin size={14} color="var(--brand-orange)" /> Noida (Head Office)
                  </span>

                  {['Mumbai', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad'].map(city => (
                    <span key={city} style={{ padding: '8px 16px', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px', fontSize: '14px', fontWeight: 500, color: '#D1D5DB', border: '1px solid rgba(255,255,255,0.05)' }}>
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* International */}
              <div style={{ padding: '24px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'rgba(255,87,34,0.3)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(255,87,34,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Globe size={16} color="var(--brand-orange)" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#FFFFFF', margin: 0 }}>International Hubs</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {['London', 'Dubai', 'China', 'Germany'].map(city => (
                    <span key={city} style={{ padding: '8px 16px', backgroundColor: 'rgba(255,87,34,0.05)', borderRadius: '8px', fontSize: '14px', fontWeight: 600, color: '#F9FAFB', border: '1px solid rgba(255,87,34,0.15)' }}>
                      {city}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

