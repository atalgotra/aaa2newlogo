import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DivisionsBentoGrid = ({
  title = "",
  subtitle = "",
  divisions = [],
  theme = "dark",
}) => {
  const isLight = theme === 'light';

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  // Base styles depending on theme (alternate background and text colors)
  const sectionStyle = {
    padding: 'clamp(40px, 5vw, 60px) 0',
    backgroundColor: isLight ? 'var(--bg-main, #FFFFFF)' : 'var(--section-dark-bg, #220150)',
    color: isLight ? 'var(--text-primary, #0F172A)' : 'var(--text-light, #FFFFFF)',
    transition: 'background-color 0.3s ease, color 0.3s ease'
  };

  const titleStyle = {
    fontSize: 'clamp(24px, 3.2vw, 36px)',
    fontWeight: 800,
    marginBottom: '10px',
    letterSpacing: '-0.01em',
    color: isLight ? 'var(--brand-indigo)' : 'var(--text-light, #FFFFFF)'
  };

  const subtitleStyle = {
    fontSize: '15px',
    maxWidth: '680px',
    margin: '0 auto',
    lineHeight: 1.5,
    textAlign: 'center',
    textAlignLast: 'center',
    color: isLight ? 'var(--text-secondary, #475569)' : 'rgba(255, 255, 255, 0.72)'
  };

  const cardHoverStyle = {
    y: -8,
    scale: 1.025
  };

  return (
    <section
      id="divisions"
      className="gsap-section"
      style={sectionStyle}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '36px' }}
        >
          <h2 style={titleStyle}>
            {title}
          </h2>
          <p style={subtitleStyle}>
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          className="divisions-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {divisions.map((divItem) => {
            const cardContent = (
              <motion.div
                variants={itemVariants}
                whileHover={cardHoverStyle}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`bento-card ${isLight ? 'bento-card-light' : 'bento-card-dark'}`}
                style={{ cursor: 'pointer', ...divItem.style }}
              >
                <div 
                  className={`bento-watermark-tr ${isLight ? 'bento-watermark-tr-light' : 'bento-watermark-tr-dark'}`} 
                  style={divItem.watermarkStyle}
                >
                  {divItem.id}
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`bento-icon-box ${isLight ? 'bento-icon-box-light' : 'bento-icon-box-dark'}`}
                >
                  <divItem.Icon size={20} color={isLight ? 'var(--brand-indigo)' : 'var(--accent-secondary, #FFFFFF)'} />
                </motion.div>
                
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h3 className={`bento-card-title ${isLight ? 'bento-card-title-light' : 'bento-card-title-dark'}`}>
                    {divItem.title}
                  </h3>
                  <p className={`bento-card-desc ${isLight ? 'bento-card-desc-light' : 'bento-card-desc-dark'}`}>
                    {divItem.desc}
                  </p>
                </div>
              </motion.div>
            );

            if (divItem.path) {
              return (
                <Link key={divItem.id} to={divItem.path} style={{ textDecoration: 'none', display: 'contents' }}>
                  {cardContent}
                </Link>
              );
            }

            return (
              <div key={divItem.id} style={{ display: 'contents' }}>
                {cardContent}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DivisionsBentoGrid;
