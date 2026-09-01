import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from '../animations/TextReveal';

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
  minHeight = '55vh',
  paddingTop = '115px',
  paddingBottom = '115px',
  overlayOpacity,
  centered = false,
}) => {
  return (
    <section
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
