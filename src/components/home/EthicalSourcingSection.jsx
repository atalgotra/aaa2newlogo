import React from 'react';
import { Zap, Droplets } from 'lucide-react';

const EthicalSourcingSection = ({
  title = "Sustainable & Compliant Sourcing",
  description = "Audited manufacturing powered by renewable clean energy, zero-liquid-discharge water recycling, and certified global statutory compliance.",
  imageSrc = "https://aaawebisteimages.s3.ap-south-1.amazonaws.com/ethical_sustainability.png",
  certTitle = "Certified Facilities (SA8000 & ISO 14001)",
  certSubtitle = "GOTS & Organic Cotton Transfer Certificates"
}) => {
  return (
    <section
      id="ethical-sourcing"
      className="section-padding gsap-section"
      style={{ backgroundColor: '#220150', color: '#FFFFFF' }}
    >
      <div className="container">
        <div className="responsive-grid-2" style={{ alignItems: 'center', gap: '36px' }}>
          {/* Left Content */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(26px, 4vw, 36px)',
                fontWeight: 800,
                color: '#FFFFFF',
                margin: '0 0 12px 0',
                lineHeight: 1.25
              }}
            >
              {title}
            </h2>

            <p
              style={{
                color: '#CBD5E1',
                fontSize: '15px',
                lineHeight: 1.6,
                marginBottom: '20px'
              }}
            >
              {description}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  padding: '18px 20px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <Zap color="#FFFFFF" size={22} />
                  <h4 style={{ color: '#FFF', fontWeight: 700, fontSize: '15.5px', margin: 0 }}>
                    Clean Energy
                  </h4>
                </div>
                <span style={{ color: '#94A3B8', fontSize: '13px', display: 'block', lineHeight: 1.4 }}>Solar &amp; Wind Powered Mills</span>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  padding: '18px 20px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <Droplets color="#FFFFFF" size={22} />
                  <h4 style={{ color: '#FFF', fontWeight: 700, fontSize: '15.5px', margin: 0 }}>
                    Zero Waste Water
                  </h4>
                </div>
                <span style={{ color: '#94A3B8', fontSize: '13px', display: 'block', lineHeight: 1.4 }}>Closed-Loop ETP Systems</span>
              </div>
            </div>
          </div>

          {/* Right Image Card */}
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              height: '320px',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <img
              loading="lazy"
              src={imageSrc}
              alt="Sustainable Manufacturing"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(20, 0, 56, 0.92) 0%, rgba(20, 0, 56, 0.3) 50%, transparent 100%)'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                color: '#FFF'
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 700 }}>{certTitle}</div>
              <div style={{ fontSize: '12px', color: '#CBD5E1', marginTop: '2px' }}>
                {certSubtitle}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicalSourcingSection;
