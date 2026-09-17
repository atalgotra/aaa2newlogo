import React from 'react';
import { Link } from 'react-router-dom';

import MagneticWrapper from '../animations/MagneticWrapper';

const CTASection = ({ 
  titlePrefix = "Ready to", 
  highlightText = "Grow?", 
  description, 
  buttonText = "Start Your Project" 
}) => {
  return (
    <section style={{ 
      padding: '48px 0', 
      background: 'linear-gradient(180deg, var(--section-dark-bg, #220150) 0%, var(--section-darker-bg, #140038) 100%)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      transition: 'background 0.3s ease'
    }}>
      <div className="container">
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800, color: 'var(--text-light, #FFFFFF)', marginBottom: '20px', textAlign: 'center', fontFamily: 'var(--font-display)', lineHeight: 1.2 }}>
            {titlePrefix} <span style={{ color: 'var(--accent-secondary, #6366F1)' }}>{highlightText}</span>
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '17px', lineHeight: 1.6, marginBottom: '36px', textAlign: 'center', textAlignLast: 'center', textWrap: 'balance', maxWidth: '780px', marginLeft: 'auto', marginRight: 'auto' }}>
            {description}
          </p>
          <Link to="/contact" tabIndex="-1">
            <MagneticWrapper>
              <button className="btn-primary" aria-label={buttonText}>
                {buttonText}
              </button>
            </MagneticWrapper>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
