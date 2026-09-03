import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CTASection from '../components/common/CTASection';
import { ShoppingBag, Star, Sparkles, Droplet, ArrowRight } from 'lucide-react';
import SchemaInjector from '../components/seo/SchemaInjector';
import TiltCard from '../components/animations/TiltCard';
import TextReveal from '../components/animations/TextReveal';
import AccreditationsMarquee from '../components/common/AccreditationsMarquee';
import { gsap, createGsapScope } from '../utils/gsapUtils';

const heroCategories = [
  { id: 1, title: 'Apparels', video: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/6a18173c8cb4a.mp4' },
  { id: 2, title: 'Designer Bags', video: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/meta_ai_video.mp4' },
  { id: 3, title: 'Fashion Jewellery', video: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/fine_jewellery_hero.mp4' },
  { id: 4, title: 'Holistic Wellness', video: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/wellness_hero.mp4' }
];

const HoverVideo = ({ src, title, description, delay = 0, className = '', playbackRate = 1 }) => {
  const videoRef = React.useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (isMobile && videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
      videoRef.current.play().catch(e => console.log(e));
    }
  }, [isMobile, playbackRate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay }}
      className={className}
      style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '100%', cursor: 'pointer', backgroundColor: '#000' }}
      onMouseEnter={() => {
        if (!isMobile) {
          setIsHovered(true);
          if (videoRef.current) {
            videoRef.current.playbackRate = playbackRate;
            videoRef.current.play().catch(e => console.log(e));
          }
        }
      }}
      onMouseLeave={() => {
        if (!isMobile) {
          setIsHovered(false);
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      }}
    >
      <video
        ref={videoRef}
        src={`${src}#t=0.1`}
        autoPlay={isMobile}
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'all 0.5s ease',
          pointerEvents: 'none'
        }}
      />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: className.includes('hero') || className.includes('wide') ? '40px' : '24px', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)', zIndex: 1, pointerEvents: 'none' }}>
        <h3 style={{ fontSize: className.includes('hero') ? '42px' : '24px', color: '#FFF', fontWeight: 800, marginBottom: '8px' }}>{title}</h3>
        <p style={{ color: '#9CA3AF', marginBottom: 0, fontSize: className.includes('hero') ? '18px' : '15px' }}>{description}</p>
      </div>
    </motion.div>
  );
};

const AccordionHero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section style={{ width: '100%', height: isMobile ? '100vh' : '82vh', minHeight: isMobile ? '820px' : '620px', maxHeight: isMobile ? 'none' : '720px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', overflow: 'hidden', backgroundColor: '#000' }}>
      {heroCategories.map((item, index) => {
        const isHovered = hoveredIndex === index;
        return (
          <motion.div
            key={item.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onClick={() => setHoveredIndex(index)}
            initial={{ flex: 1 }}
            animate={{ flex: isHovered ? (isMobile ? 5.5 : 4) : 1 }}
            transition={{ type: 'tween', ease: 'circOut', duration: 0.5 }}
            style={{
              position: 'relative',
              height: isMobile ? 'auto' : '100%',
              width: isMobile ? '100%' : 'auto',
              cursor: 'pointer',
              borderRight: (!isMobile && index !== heroCategories.length - 1) ? '1px solid rgba(255,255,255,0.1)' : 'none',
              borderBottom: (isMobile && index !== heroCategories.length - 1) ? '1px solid rgba(255,255,255,0.1)' : 'none',
              overflow: 'hidden'
            }}
          >
            {item.images ? (
              <div style={{ position: 'absolute', inset: 0 }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center 15%', filter: isHovered ? 'brightness(0.9)' : 'brightness(0.3)', transition: 'filter 0.8s ease' }} />
                {item.images.map((imgSrc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      times: [0, 0.1, 0.33, 0.43, 1],
                      delay: i * 2,
                      ease: "easeInOut"
                    }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${imgSrc})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center 15%',
                      filter: isHovered ? 'brightness(0.9)' : 'brightness(0.3)',
                      transition: 'filter 0.8s ease'
                    }}
                  />
                ))}
              </div>
            ) : item.video ? (
              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  filter: isHovered ? 'brightness(0.9)' : (isMobile ? 'brightness(0.7)' : 'brightness(0.3)'),
                  transition: 'filter 0.8s ease'
                }}
              />
            ) : (
              <motion.div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 15%',
                  filter: isHovered ? 'brightness(0.9)' : 'brightness(0.3)',
                  transition: 'filter 0.8s ease'
                }}
              />
            )}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)', pointerEvents: 'none' }}></div>

            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: (isMobile && !isHovered) ? 'row' : 'column', justifyContent: isHovered ? (isMobile ? 'center' : 'flex-end') : 'center', alignItems: 'center', paddingBottom: (isHovered && !isMobile) ? '50px' : 0, paddingLeft: '16px', paddingRight: '16px', zIndex: 10, pointerEvents: 'none', boxSizing: 'border-box' }}>
              <motion.h2
                animate={{
                  opacity: isHovered ? 1 : 0.6,
                  y: isHovered ? 0 : (isMobile ? 0 : 20),
                  fontSize: isHovered ? (isMobile ? '22px' : 'clamp(24px, 2.6vw, 36px)') : (isMobile ? '15px' : '18px'),
                  rotate: isHovered ? 0 : (isMobile ? 0 : -90)
                }}
                style={{ color: '#FFF', fontWeight: 800, margin: 0, whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: isHovered ? '2px' : '3px', transformOrigin: 'center center', textShadow: '0px 4px 20px rgba(0,0,0,0.8)', textAlign: 'center', maxWidth: '100%' }}
              >
                {item.title}
              </motion.h2>

            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

const HoverFeatureImage = ({ imageSrc, videoSrc, alt }) => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [videoSrc]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <video
        ref={videoRef}
        src={videoSrc}
        poster={imageSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          inset: 0,
          zIndex: 1
        }}
      />
    </div>
  );
};

const Products = () => {
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
        <title>Premium B2B Products | Fast Fashion, Bags & Jewellery | AAA 2 Innovate</title>
        <meta name="description" content="Explore our luxury B2B product collections sourced directly from vetted Indian manufacturers. Featuring fast fashion, designer bags, high-end imitation jewellery, and premium copper wellness items." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Premium B2B Products | AAA 2 Innovate" />
        <meta property="og:description" content="Discover our diverse range of premium products including Apparel, Wellness, Bags, and Artificial Jewellery, all ethically sourced and precision manufactured." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/products" />
      </Helmet>
      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "AAA 2 Innovate Products",
        "description": "Premium B2B Products including Apparel, Wellness, Bags, and Artificial Jewellery",
        "url": "https://www.aaa2innovate.com/products",
        "about": {
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Apparels"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Designer Bags"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Fashion Jewellery"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Holistic Wellness"
            }
          ]
        }
      }} />

      {/* ─── 1. Interactive Accordion Categories Matrix ─── */}
      <section className="gsap-section" style={{ backgroundColor: '#000', padding: 0 }}>
        <AccordionHero />
      </section>

      {/* Apparels Category */}
      <section id="apparels" className="gsap-section" style={{ padding: 'clamp(60px, 8vw, 60px) 0', backgroundColor: '#220150' }}>
        <div className="container">
          <div style={{ marginBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
            <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>Our Apparels</h2>
          </div>

          <div className="apparels-bento-grid">
            <HoverVideo
              src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/6a180e46963f8.mp4"
              title="Luxury Silhouette"
              description="Elegant, flowing evening dresses."
              delay={0}
              className="bento-hero"
            />
            <HoverVideo
              src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/6a18169623f16.mp4"
              title="Evening Glamour"
              description="Stand out at any event."
              delay={0.1}
              className="bento-square"
              playbackRate={3.0}
            />
            <HoverVideo
              src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/6a1815692941e.mp4"
              title="Modern Classics"
              description="Timeless cuts for the modern woman."
              delay={0.2}
              className="bento-portrait"
            />
            <HoverVideo
              src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/6a18173c8cb4a.mp4"
              title="Statement Pieces"
              description="Bold and beautiful designs."
              delay={0.3}
              className="bento-square"
              playbackRate={3.0}
            />
            <HoverVideo
              src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/6a1816c697db1.mp4"
              title="Casual Elegance"
              description="Everyday luxury wear."
              delay={0.4}
              className="bento-wide"
            />
            <HoverVideo
              src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/6a18192d86953.mp4"
              title="Summer Chic"
              description="Breathable and stylish pieces."
              delay={0.5}
              className="bento-wide"
            />
          </div>
        </div>
      </section>

      {/* Apparels Category Feature */}
      <section id="apparels-feature" style={{ paddingTop: '40px', paddingBottom: '40px', backgroundColor: '#220150' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            
            {/* Left Content */}
            <div className="product-feature-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 className="product-feature-title" style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px', lineHeight: 1.22, fontFamily: 'var(--font-display)' }}>
                <TextReveal text="Apparels & High" elementType="span" style={{ color: '#FFFFFF' }} />
                <span style={{ color: '#FFFFFF' }}>
                  <TextReveal text="Fashion" elementType="span" delay={0.15} style={{ color: '#FFFFFF' }} />
                </span>
              </h2>
              <p className="product-feature-desc" style={{ color: 'var(--text-light)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                From trend-setting fast fashion collections to bespoke luxury evening wear and timeless classics. Crafted with certified sustainable fabrics and precision finishing across premier Indian manufacturing hubs.
              </p>
              <motion.div className="product-feature-btn" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} style={{ width: 'fit-content' }}>
                <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                  Source Apparel Collection
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

            {/* Right Graphics Panel with TiltCard */}
            <div className="product-feature-media" style={{ position: 'relative' }}>
              <TiltCard>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ position: 'relative', display: 'flex', borderRadius: '24px', overflow: 'hidden', height: '380px', border: '1px solid var(--border-light)', boxShadow: '0 15px 35px rgba(34,1,80,0.1)' }}
                >
                  <HoverFeatureImage videoSrc="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/6a18173c8cb4a.mp4" alt="Apparels & High Fashion" />
                </motion.div>
              </TiltCard>
            </div>

          </div>
        </div>
      </section>

      {/* Bags & Accessories */}
      <section id="bags" style={{ paddingTop: '40px', paddingBottom: '40px', backgroundColor: '#05080F' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>

            {/* Left Content */}
            <div className="product-feature-media" style={{ position: 'relative' }}>
              <TiltCard>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ position: 'relative', display: 'flex', borderRadius: '24px', overflow: 'hidden', height: '380px', border: '1px solid var(--border-light)', boxShadow: '0 15px 35px rgba(34,1,80,0.1)' }}
                >
                  <HoverFeatureImage imageSrc="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/products_bags.png" videoSrc="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/meta_ai_video.mp4" alt="Luxury Handbags" />
                  <div className="page-hero-overlay" style={{ position: 'absolute', inset: 0, borderRadius: '24px', opacity: 0.3 }} />
                </motion.div>
              </TiltCard>
            </div>

            {/* Right Graphics Panel with TiltCard */}

<div className="product-feature-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 className="product-feature-title" style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px', lineHeight: 1.22, fontFamily: 'var(--font-display)' }}>
                <TextReveal text="Ladies Handbags" elementType="span" style={{ color: '#FFFFFF' }} />
                <span style={{ color: '#FFFFFF' }}>
                  <TextReveal text="& Clutches" elementType="span" delay={0.15} style={{ color: '#FFFFFF' }} />
                </span>
              </h2>
              <p className="product-feature-desc" style={{ color: 'var(--text-light)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                Elevate any outfit with our collection of luxury-inspired handbags and elegant clutches. Crafted with premium textures and statement hardware, these bags are designed to turn heads.
              </p>
              <motion.div className="product-feature-btn" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} style={{ width: 'fit-content' }}>
                <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                  Source Bags Collection
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

          

          </div>
        </div>
      </section>

      {/* Fashion Jewellery */}
      <section id="jewellery" className="gsap-section" style={{ padding: 'clamp(60px, 8vw, 100px) 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>

            {/* Left Graphics Panel with TiltCard */}
            

            {/* Right Content */}
            <div className="product-feature-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 className="product-feature-title" style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 800, color: 'var(--brand-indigo)', marginBottom: '24px', lineHeight: 1.22, fontFamily: 'var(--font-display)' }}>
                <TextReveal text="Fashion Jewellery &" elementType="span" />
                <span style={{  color: 'var(--brand-indigo)' }}>
                  <TextReveal text="Statement Pieces" elementType="span" delay={0.15}/>
                </span>
              </h2>
              <p className="product-feature-desc" style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                Flawless imitation jewelry that looks like a million dollars. From intricate necklaces to statement rings, our collection is curated to provide maximum sparkle and high-end aesthetics without the luxury markup.
              </p>
              <motion.div className="product-feature-btn" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} style={{ width: 'fit-content' }}>
                <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                  Discover Jewellery
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

            <div className="product-feature-media" style={{ position: 'relative' }}>
              <TiltCard>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, x: -20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ position: 'relative', display: 'flex', borderRadius: '24px', overflow: 'hidden', height: '380px', border: '1px solid var(--border-light)', boxShadow: '0 15px 35px rgba(34,1,80,0.1)' }}
                >
                  <HoverFeatureImage imageSrc="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/products_jewellery.png" videoSrc="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/fine_jewellery_hero.mp4" alt="Fashion Jewellery" />
                  <div className="page-hero-overlay" style={{ position: 'absolute', inset: 0, borderRadius: '24px', opacity: 0.3 }} />
                </motion.div>
              </TiltCard>
            </div>

          </div>
        </div>
      </section>

      {/* Wellness Items */}
      <section id="wellness" className="gsap-section" style={{ padding: 'clamp(60px, 8vw, 100px) 0', backgroundColor: '#220150', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>

            {/* Left Graphics Panel with TiltCard */}
           

            {/* Right Content */}
            <div className="product-feature-media" style={{ position: 'relative' }}>
              <TiltCard>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, x: -20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ position: 'relative', display: 'flex', borderRadius: '24px', overflow: 'hidden', height: '380px', border: '1px solid var(--border-light)', boxShadow: '0 15px 35px rgba(34,1,80,0.1)' }}
                >
                  <HoverFeatureImage imageSrc="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/products_wellness.png" videoSrc="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/wellness_hero.mp4" alt="Copper Wellness Item" />
                </motion.div>
              </TiltCard>
            </div>


 <div className="product-feature-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 className="product-feature-title" style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px', lineHeight: 1.22, fontFamily: 'var(--font-display)' }}>
                <TextReveal text="Copper Vessels &" elementType="span" style={{ color: '#FFFFFF' }} />
                <span style={{ color: '#FFFFFF' }}>
                  <TextReveal text="Holistic Tools" elementType="span" delay={0.15} style={{ color: '#FFFFFF' }} />
                </span>
              </h2>

              <p className="product-feature-desc" style={{ color: 'var(--text-light)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                Purify your environment and revitalize your body with authentic, beautifully handcrafted traditional tools.
              </p>
              <motion.div className="product-feature-btn" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} style={{ width: 'fit-content' }}>
                <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                  Source Wellness Items
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <CTASection
        titlePrefix="Ready to"
        highlightText="Upgrade?"
        description="Whether you are sourcing fast fashion, premium bags, or high-end wellness items, we provide the highest quality products on the market. Start your journey with us."
        buttonText="Help me source products"
      />

      {/* Accreditations Marquee */}
      <AccreditationsMarquee />
    </div>
  );
};

export default Products;

