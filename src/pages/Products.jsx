import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CTASection from '../components/CTASection';
import { ShoppingBag, Star, Sparkles, Droplet } from 'lucide-react';
import SchemaInjector from '../components/seo/SchemaInjector';
import Breadcrumbs from '../components/seo/Breadcrumbs';

const heroCategories = [
  { id: 1, title: 'Apparels', video: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/6a18173c8cb4a.mp4' },
  { id: 2, title: 'Designer Bags', video: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/meta_ai_video.mp4' },
  { id: 3, title: 'Fashion Jewellery', video: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/fine_jewellery_hero.mp4' },
  { id: 4, title: 'Holistic Wellness', video: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/wellness_hero.mp4' }
];

const HoverVideo = ({ src, title, description, delay = 0, className = '', playbackRate = 1 }) => {
  const videoRef = React.useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay }}
      className={className}
      style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '100%', cursor: 'pointer', backgroundColor: '#000' }}
      onMouseEnter={() => { setIsHovered(true); if (videoRef.current) { videoRef.current.playbackRate = playbackRate; videoRef.current.play().catch(e => console.log(e)); } }}
      onMouseLeave={() => { setIsHovered(false); if (videoRef.current) { videoRef.current.pause(); } }}
    >
      <video
        ref={videoRef}
        src={`${src}#t=0.1`}
        muted
        loop
        playsInline
        preload="metadata"
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
    <section style={{ width: '100%', height: '60vh', minHeight: '500px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', overflow: 'hidden', backgroundColor: '#000' }}>
      {heroCategories.map((item, index) => {
        const isHovered = hoveredIndex === index;
        return (
          <motion.div
            key={item.id}
            onMouseEnter={() => setHoveredIndex(index)}
            initial={{ flex: 1 }}
            animate={{ flex: isHovered ? (isMobile ? 3 : 4) : 1 }}
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
              <motion.video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: isHovered ? 'brightness(0.9)' : 'brightness(0.3)',
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

            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: (isMobile && !isHovered) ? 'row' : 'column', justifyContent: isHovered ? (isMobile ? 'center' : 'flex-end') : 'center', alignItems: 'center', paddingBottom: (isHovered && !isMobile) ? '60px' : 0, zIndex: 10, pointerEvents: 'none' }}>
              <motion.h2
                animate={{
                  opacity: isHovered ? 1 : 0.6,
                  y: isHovered ? 0 : (isMobile ? 0 : 20),
                  fontSize: isHovered ? (isMobile ? '32px' : '64px') : (isMobile ? '18px' : '20px'),
                  rotate: isHovered ? 0 : (isMobile ? 0 : -90)
                }}
                style={{ color: '#FFF', fontWeight: 800, margin: 0, whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '4px', transformOrigin: 'center center', textShadow: '0px 4px 20px rgba(0,0,0,0.8)' }}
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
  const [isHovered, setIsHovered] = React.useState(false);
  const videoRef = React.useRef(null);

  return (
    <div
      style={{ paddingTop: '90px', width: '100%', height: '100%', position: 'relative', cursor: 'pointer' }}
      onMouseEnter={() => { setIsHovered(true); if (videoRef.current) { videoRef.current.play().catch(e => console.log(e)); } }}
      onMouseLeave={() => { setIsHovered(false); if (videoRef.current) { videoRef.current.pause(); } }}
    >
      <img loading="lazy" src={imageSrc}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, opacity: isHovered ? 0 : 1, transition: 'opacity 0.6s ease' }}
      />
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, opacity: isHovered ? 1 : 0, transition: 'opacity 0.6s ease' }}
      />
    </div>
  );
};

const Products = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', color: 'var(--text-primary)', paddingTop: '90px' }}>
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

      <div style={{ position: 'absolute', top: '90px', left: 0, width: '100%', zIndex: 10 }}>
        <Breadcrumbs />
      </div>

      {/* Visually hidden H1 for SEO */}
      <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
        Premium B2B Products & Global Sourcing
      </h1>

      {/* Luxury Accordion Hero */}
      <AccordionHero />

      {/* Apparels Category */}
      <section style={{ paddingTop: '40px', paddingBottom: '40px', backgroundColor: '#02040A' }}>
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
              src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/6a18192d86953.mp4"
              title="Summer Chic"
              description="Breathable and stylish pieces."
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
              src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/6a18169623f16.mp4"
              title="Evening Glamour"
              description="Stand out at any event."
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
              src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/6a18173c8cb4a.mp4"
              title="Statement Pieces"
              description="Bold and beautiful designs."
              delay={0.5}
              className="bento-wide"
            />
          </div>
        </div>
      </section>

      {/* Bags & Accessories */}
      <section style={{ paddingTop: '40px', paddingBottom: '40px', backgroundColor: '#05080F' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '64px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <ShoppingBag color="var(--brand-orange)" size={24} />
                <span style={{ color: 'var(--brand-orange)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Premium Accessories</span>
              </div>
              <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px', lineHeight: 1.1 }}>Ladies Handbags & Clutches</h2>
              <p style={{ color: '#9CA3AF', fontSize: '18px', lineHeight: 1.6, marginBottom: '32px' }}>
                Elevate any outfit with our collection of luxury-inspired handbags and elegant clutches. Crafted with premium textures and statement hardware, these bags are designed to turn heads.
              </p>
              <Link to="/contact" tabIndex="-1">
                <button style={{ background: 'transparent', color: '#FFF', border: '1px solid rgba(255,255,255,0.3)', padding: '16px 32px', borderRadius: '30px', fontSize: '16px', fontWeight: 600, cursor: 'pointer' }}>
                  Source Bags Collection
                </button>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              style={{ position: 'relative', height: '500px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}
            >
              <HoverFeatureImage imageSrc="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/products_bags.png" videoSrc="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/meta_ai_video.mp4" alt="Luxury Handbags" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fashion Jewellery */}
      <section style={{ paddingTop: '40px', paddingBottom: '40px', backgroundColor: '#02040A' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '64px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              style={{ position: 'relative', height: '600px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 0 40px rgba(255, 87, 34, 0.15)' }}
            >
              <HoverFeatureImage imageSrc="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/products_jewellery.png" videoSrc="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/fine_jewellery_hero.mp4" alt="Fashion Jewellery" />
              {/* Luxury Shine Effect */}
              <motion.div
                animate={{
                  left: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  width: '50%',
                  height: '100%',
                  background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)',
                  transform: 'skewX(-20deg)',
                  pointerEvents: 'none'
                }}
              />
            </motion.div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Sparkles color="var(--brand-orange)" size={24} />
                <span style={{ color: 'var(--brand-orange)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Statement Pieces</span>
              </div>
              <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px', lineHeight: 1.1 }}>Fashion Jewellery</h2>
              <p style={{ color: '#9CA3AF', fontSize: '18px', lineHeight: 1.6, marginBottom: '32px' }}>
                Flawless imitation jewelry that looks like a million dollars. From intricate necklaces to statement rings, our collection is curated to provide maximum sparkle and high-end aesthetics without the luxury markup.
              </p>
              <Link to="/contact" tabIndex="-1">
                <button style={{ backgroundColor: '#FFF', color: '#000', border: 'none', padding: '16px 32px', borderRadius: '30px', fontSize: '16px', fontWeight: 700, cursor: 'pointer' }}>
                  Discover Jewellery
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Items */}
      <section style={{ paddingTop: '40px', paddingBottom: '100px', backgroundColor: '#05080F' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <Droplet color="var(--brand-orange)" size={24} />
            <span style={{ color: 'var(--brand-orange)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Holistic Living</span>
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px' }}>Wellness Collection</h2>
          <p style={{ color: '#9CA3AF', fontSize: '18px', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto 64px auto' }}>
            Traditional wisdom meets modern luxury. Elevate your daily routines with our premium wellness items, crafted from pure materials for maximum health benefits.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ position: 'relative', height: '600px', borderRadius: '32px', overflow: 'hidden', maxWidth: '1000px', margin: '0 auto' }}
          >
            <HoverFeatureImage imageSrc="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/products_wellness.png" videoSrc="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/wellness_hero.mp4" alt="Copper Wellness Items" />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '40px', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', textAlign: 'left' }}>
              <div>
                <h3 style={{ fontSize: '32px', color: '#FFF', fontWeight: 800, marginBottom: '8px' }}>Copper Bottles & Kansa Combs</h3>
                <p style={{ color: '#9CA3AF', fontSize: '16px', maxWidth: '400px' }}>Purify your water and revitalize your scalp with authentic, beautifully crafted wellness tools.</p>
              </div>
              <Link to="/contact" tabIndex="-1">
                <button style={{ backgroundColor: 'var(--brand-orange)', color: '#FFF', border: 'none', padding: '16px 32px', borderRadius: '30px', fontSize: '16px', fontWeight: 700, cursor: 'pointer' }}>
                  Source Wellness Items
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <CTASection
        titlePrefix="Ready to"
        highlightText="Upgrade?"
        description="Whether you are sourcing fast fashion, premium bags, or high-end wellness items, we provide the highest quality products on the market. Start your journey with us."
        buttonText="Help me source products"
      />
    </div>
  );
};

export default Products;

