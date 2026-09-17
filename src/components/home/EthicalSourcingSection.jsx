import React from 'react';
import { Zap, Droplets } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const EthicalSourcingSection = ({
  title = "Sustainable & Compliant Sourcing",
  description1 = "Audited manufacturing powered by renewable energy and zero-liquid-discharge water recycling for sustainable production.",
  description2 = "Certified global compliance ensures consistent quality and adherence to international standards.",
  imageSrc = "https://aaawebisteimages.s3.ap-south-1.amazonaws.com/ethical_sustainability.png",
  certTitle = "Certified Facilities (SA8000 & ISO 14001)",
  certSubtitle = "GOTS & Organic Cotton Transfer Certificates"
}) => {
  const { currentTheme } = useTheme();
  const isAtelier = currentTheme === 'atelier';
  const isForge = currentTheme === 'forge';
  const isNexus = currentTheme === 'nexus';
  const isAurelis = currentTheme === 'aurelis';

  return (
    <section
      id="ethical-sourcing"
      className="section-padding gsap-section"
      style={{
        backgroundColor: isAtelier
          ? 'var(--bg-main, #F6F2E9)'
          : (isForge
              ? 'var(--bg-secondary, #151D24)'
              : (isNexus ? 'var(--bg-secondary, #0B1424)' : (isAurelis ? 'var(--bg-main, #F7F9FA)' : '#220150'))),
        color: (isAtelier || isAurelis) ? 'var(--text-primary, #17202A)' : '#FFFFFF',
        transition: 'background-color 0.28s ease, color 0.28s ease'
      }}
    >
      <div className="container">
        <div className="responsive-grid-2" style={{ alignItems: 'start', gap: '36px' }}>
          {/* Left Content */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(26px, 4vw, 36px)',
                fontWeight: 800,
                color: (isAtelier || isAurelis)
                  ? 'var(--text-primary, #17202A)'
                  : (isForge ? '#F2F6F8' : (isNexus ? '#EAF7FA' : '#FFFFFF')),
                margin: '0 0 12px 0',
                lineHeight: 1.25,
                transition: 'color 0.28s ease'
              }}
            >
              {title}
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: (isAtelier || isAurelis)
                  ? 'var(--text-secondary, #59616A)'
                  : (isForge ? '#AAB7C0' : (isNexus ? '#AABCC5' : '#E2E8F0')),
                lineHeight: 1.6,
                marginBottom: '18px',
                transition: 'color 0.28s ease'
              }}
            >
              {description1}
            </p>

            <p
              style={{
                fontSize: '15px',
                color: (isAtelier || isAurelis)
                  ? 'var(--text-tertiary, #7B807F)'
                  : (isForge ? '#71808A' : (isNexus ? '#718692' : '#CBD5E1')),
                lineHeight: 1.6,
                marginBottom: '28px',
                transition: 'color 0.28s ease'
              }}
            >
              {description2}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div
                style={{
                  backgroundColor: isAtelier
                    ? 'var(--bg-surface, #FBF9F4)'
                    : (isForge ? '#202A33' : (isNexus ? '#102B4A' : (isAurelis ? '#FFFFFF' : 'rgba(255, 255, 255, 0.06)'))),
                  padding: '18px 20px',
                  borderRadius: '16px',
                  border: isAtelier
                    ? '1px solid var(--border-light, #D9D2C5)'
                    : (isForge
                        ? '1px solid rgba(221, 229, 234, 0.12)'
                        : (isNexus
                            ? '1px solid rgba(234, 247, 250, 0.10)'
                            : (isAurelis ? '1px solid rgba(23, 35, 45, 0.10)' : '1px solid rgba(255, 255, 255, 0.12)'))),
                  boxShadow: (isAtelier || isAurelis)
                    ? '0 4px 16px rgba(23, 32, 42, 0.04)'
                    : (isForge
                        ? '0 8px 20px rgba(0, 0, 0, 0.4)'
                        : (isNexus ? '0 8px 20px rgba(0, 0, 0, 0.5)' : '0 8px 20px rgba(0, 0, 0, 0.25)')),
                  transition: 'all 0.28s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <Zap color={isAtelier ? 'var(--accent-primary, #E87522)' : (isForge ? '#E87522' : (isNexus ? '#E87522' : (isAurelis ? '#E87522' : '#FFFFFF')))} size={22} />
                  <h4 style={{ color: (isAtelier || isAurelis) ? 'var(--text-primary, #17202A)' : '#FFF', fontWeight: 700, fontSize: '15.5px', margin: 0 }}>
                    Clean Energy
                  </h4>
                </div>
                <span style={{ color: (isAtelier || isAurelis) ? 'var(--text-secondary, #59616A)' : (isForge ? '#AAB7C0' : (isNexus ? '#AABCC5' : '#94A3B8')), fontSize: '13px', display: 'block', lineHeight: 1.4 }}>Solar &amp; Wind Powered Mills</span>
              </div>

              <div
                style={{
                  backgroundColor: isAtelier
                    ? 'var(--bg-surface, #FBF9F4)'
                    : (isForge ? '#202A33' : (isNexus ? '#102B4A' : (isAurelis ? '#FFFFFF' : 'rgba(255, 255, 255, 0.06)'))),
                  padding: '18px 20px',
                  borderRadius: '16px',
                  border: isAtelier
                    ? '1px solid var(--border-light, #D9D2C5)'
                    : (isForge
                        ? '1px solid rgba(221, 229, 234, 0.12)'
                        : (isNexus
                            ? '1px solid rgba(234, 247, 250, 0.10)'
                            : (isAurelis ? '1px solid rgba(23, 35, 45, 0.10)' : '1px solid rgba(255, 255, 255, 0.12)'))),
                  boxShadow: (isAtelier || isAurelis)
                    ? '0 4px 16px rgba(23, 32, 42, 0.04)'
                    : (isForge
                        ? '0 8px 20px rgba(0, 0, 0, 0.4)'
                        : (isNexus ? '0 8px 20px rgba(0, 0, 0, 0.5)' : '0 8px 20px rgba(0, 0, 0, 0.25)')),
                  transition: 'all 0.28s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <Droplets color={isAtelier ? 'var(--accent-secondary, #164B78)' : (isForge ? '#45B8FF' : (isNexus ? '#39C6E8' : (isAurelis ? '#155A8A' : '#FFFFFF')))} size={22} />
                  <h4 style={{ color: (isAtelier || isAurelis) ? 'var(--text-primary, #17202A)' : '#FFF', fontWeight: 700, fontSize: '15.5px', margin: 0 }}>
                    Zero Waste Water
                  </h4>
                </div>
                <span style={{ color: (isAtelier || isAurelis) ? 'var(--text-secondary, #59616A)' : (isForge ? '#AAB7C0' : (isNexus ? '#AABCC5' : '#94A3B8')), fontSize: '13px', display: 'block', lineHeight: 1.4 }}>Closed-Loop ETP Systems</span>
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
              border: isNexus ? '1px solid rgba(234, 247, 250, 0.12)' : (isAurelis ? '1px solid rgba(23, 35, 45, 0.15)' : '1px solid rgba(255, 255, 255, 0.1)')
            }}
          >
            <img
              loading="lazy"
              src={imageSrc}
              alt="Sustainable Manufacturing"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Neutral Luminance Gradient for Text Readability Only (Authentic photo preservation) */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '55%',
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0.20) 60%, transparent 100%)',
                pointerEvents: 'none'
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
              <div style={{ fontSize: '12px', color: isNexus ? '#AABCC5' : '#CBD5E1', marginTop: '2px' }}>
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
