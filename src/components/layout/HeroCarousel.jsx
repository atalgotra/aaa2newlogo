import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticWrapper from '../animations/MagneticWrapper';

const slides = [
  {
    id: 1,
    image: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/hero_1_indian.png',
    titleMain: 'From Sourcing to ',
    titleOrange: 'Delivery',
    subtitle: 'AAA 2 Innovate, here for all your sourcing and buying needs worldwide.',
    buttonText: 'MORE',
    link: '/services/sourcing'
  },
  {
    id: 2,
    image: '/images/hero_network_suppliers.png',
    titleMain: 'A Vast Network of ',
    titleOrange: 'Suppliers',
    subtitle: 'Working with you to respond to consumer trends and your market needs.',
    buttonText: 'MORE',
    link: '/services/sourcing'
  },
  {
    id: 3,
    image: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/hero_3_indian.png',
    titleMain: 'End-to-End ',
    titleOrange: 'Solutions',
    subtitle: 'Delivering customised, quality sourcing solutions from India, worldwide.',
    buttonText: 'MORE',
    link: '/services/logistics'
  },
  {
    id: 4,
    image: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/hero_4_indian.png',
    titleMain: 'Next-Gen IT & AI ',
    titleOrange: 'Engineering',
    subtitle: 'A highly talented full-stack development team building world-class tools and solutions.',
    buttonText: 'MORE',
    link: '/services/tech'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden', paddingTop: '90px' }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '120%', // Added extra height for parallax
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: slides[currentSlide].id === 1 ? 'center 20%' : 'center',
            zIndex: 1,
            y: y
          }}
        >
          {/* Enhanced gradient overlay to ensure text readability */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)' }} />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="container" style={{ position: 'relative', height: '100%', zIndex: 10, display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '600px', color: '#FFFFFF' }}>
          <AnimatePresence mode="wait">
            <motion.h2
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ color: '#FFFFFF', textShadow: '0 4px 15px rgba(0,0,0,0.8)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.1, fontFamily: 'Outfit', margin: 0 }}
            >
              {slides[currentSlide].titleMain}
              <span style={{ color: 'var(--brand-orange)' }}>{slides[currentSlide].titleOrange}</span>
            </motion.h2>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 300, marginBottom: '40px', color: '#E5E7EB', textShadow: '0 4px 15px rgba(0,0,0,0.8)', fontFamily: 'Outfit, sans-serif', textAlign: 'left', lineHeight: '1.6' }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={`btn-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to={slides[currentSlide].link} tabIndex="-1">
                <MagneticWrapper>
                  <button className="btn-primary">
                    {slides[currentSlide].buttonText}
                  </button>
                </MagneticWrapper>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div style={{ position: 'absolute', bottom: '40px', left: '0', width: '100%', zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', gap: '10px' }}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              style={{
                width: idx === currentSlide ? '40px' : '12px',
                height: '4px',
                borderRadius: '2px',
                backgroundColor: idx === currentSlide ? 'var(--brand-orange)' : 'rgba(255,255,255,0.4)',
                boxShadow: idx === currentSlide ? '0 0 10px rgba(255, 87, 34, 0.6)' : 'none',
                transition: 'all 0.3s ease',
                padding: 0
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
