import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TextReveal from '../animations/TextReveal';

const serviceRoutes = [
  { path: '/capabilities/sourcing', title: 'Sourcing' },
  { path: '/capabilities/design', title: 'Design & PD' },
  { path: '/capabilities/manufacturing', title: 'Manufacturing' },
  { path: '/capabilities/quality-control-compliance', title: 'Inspection & Compliance' },
  { path: '/capabilities/warehousing', title: 'Warehousing' },
  { path: '/capabilities/logistics', title: 'Global Logistics' },
  { path: '/capabilities/tech', title: 'Gen-Z Tech' },
];

/**
 * PageHero — Reusable Cinematic Hero Section
 *
 * Props:
 *  backgroundImage  {string}   — Full URL or path to the hero background image
 *  titleLine1       {string}   — First line of the main heading (light text)
 *  titleLine2       {string}   — Second line of the heading (highlighted white)
 *  subtitle         {string}   — Supporting paragraph text beneath the heading
 *  minHeight        {string}   — CSS min-height override (default: '55vh')
 *  paddingTop       {string}   — CSS paddingTop override  (default: '115px')
 *  paddingBottom    {string}   — CSS paddingBottom override (default: '115px')
 *  overlayOpacity   {number}   — Overlay opacity 0–1 (default: undefined → CSS default)
 *  centered         {boolean}  — Center-align content (default: false)
 */
const PageHero = ({
  backgroundImage,
  titleLine1,
  titleLine2,
  subtitle,
  minHeight = '100vh',
  paddingTop = '175px',
  paddingBottom = '80px',
  overlayOpacity,
  centered = false,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const normalizedPath = location.pathname.replace(/^\/services\//, '/capabilities/');
  const isCapabilitiesOverview = normalizedPath === '/capabilities' || normalizedPath === '/capabilities/';
  const currentIndex = serviceRoutes.findIndex(s => s.path === normalizedPath);
  const isServicePage = currentIndex !== -1 || isCapabilitiesOverview;

  let prevService = null;
  let nextService = null;

  if (isCapabilitiesOverview) {
    prevService = null;
    nextService = serviceRoutes[0]; // Sourcing
  } else if (currentIndex !== -1) {
    prevService = currentIndex === 0
      ? { path: '/capabilities', title: 'Capabilities Overview' }
      : serviceRoutes[currentIndex - 1];
    nextService = currentIndex === serviceRoutes.length - 1
      ? { path: '/products', title: 'Products' }
      : serviceRoutes[currentIndex + 1];
  }

  return (
    <section
      id="hero"
      className="page-hero"
      style={{
        '--hero-min-height': minHeight,
        '--hero-pad-top': paddingTop,
        '--hero-pad-bottom': paddingBottom,
      }}
    >
      {/* Background Image with Depth Zoom Animation */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
        }}
      />

      {/* Dark overlay */}
      <div
        className="page-hero-overlay"
        style={overlayOpacity !== undefined ? { opacity: overlayOpacity } : undefined}
      />

      {/* Hero Content */}
      <div
        className="container page-hero-content"
        style={
          centered
            ? { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }
            : undefined
        }
      >
        <div className="page-hero-title-row">
          {isServicePage && prevService && (
            <motion.button
              whileHover={{ scale: 1.12, x: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(prevService.path)}
              aria-label={`Previous: ${prevService.title}`}
              title={`Previous: ${prevService.title}`}
              className="page-hero-nav-arrow page-hero-nav-arrow-left"
            >
              <ChevronLeft size={24} />
            </motion.button>
          )}

          {isServicePage && !prevService && nextService && (
            <div className="page-hero-nav-arrow-spacer" />
          )}

          <h1 className="page-hero-title">
            <TextReveal
              text={titleLine1}
              elementType="div"
              style={{ width: '100%', justifyContent: 'center' }}
              justifyContent="center"
            />
            {titleLine2 && (
              <span style={{ color: '#FFFFFF', textShadow: '0 0 35px rgba(18, 47, 81, 0.4)', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <TextReveal
                  text={titleLine2}
                  elementType="div"
                  style={{ width: '100%', justifyContent: 'center' }}
                  justifyContent="center"
                  delay={0.25}
                />
              </span>
            )}
          </h1>

          {isServicePage && nextService && (
            <motion.button
              whileHover={{ scale: 1.12, x: 3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(nextService.path)}
              aria-label={`Next: ${nextService.title}`}
              title={`Next: ${nextService.title}`}
              className="page-hero-nav-arrow page-hero-nav-arrow-right"
            >
              <ChevronRight size={24} />
            </motion.button>
          )}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="page-hero-subtitle"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHero;
