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
    <section style={{ padding: '40px 0', backgroundColor: '#0B0F19', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px', textAlign: 'center', fontFamily: 'var(--font-display)', lineHeight: 1.2 }}>
            {titlePrefix} <span style={{ color: 'color-mix(in srgb, var(--brand-indigo), white 30%)' }}>{highlightText}</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '18px', lineHeight: 1.6, marginBottom: '40px', textAlign: 'center', textAlignLast: 'center', textWrap: 'balance', maxWidth: '780px', marginLeft: 'auto', marginRight: 'auto' }}>
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
