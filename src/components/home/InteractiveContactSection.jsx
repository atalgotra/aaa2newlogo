import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SourcingConfigurator from '../common/SourcingConfigurator';

const InteractiveContactSection = ({ selectedCategoryForConfigurator }) => {
  return (
    <section
      id="contact"
      className="section-padding gsap-section"
      style={{ backgroundColor: 'var(--bg-main)' }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(24px, 3vw, 36px)' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 42px)', fontWeight: 800, color: 'var(--brand-indigo)', margin: 0, lineHeight: 1.2, letterSpacing: '-0.01em' }}>
            Connect With Our Directors
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '16px',
              maxWidth: '800px',
              margin: '10px auto 0 auto',
              lineHeight: 1.7
            }}
          >
            Get rapid production quotations, factory capacity matching, or custom digital engineering proposals.
          </p>
        </div>

        {/* 2-Column Grid: Contact Info + Configurator */}
        <div className="about-grid" style={{ alignItems: 'start', gap: 'clamp(24px, 3vw, 40px)' }}>

          {/* Left: Contact Info (4 Cards matching exact 480px height) */}
          <div
            className="contact-cards-container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '480px',
              gap: '10px'
            }}
          >
            {/* Headquarters Card */}
            <div
              className="contact-card"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                backgroundColor: 'var(--bg-secondary)',
                padding: 'clamp(12px, 1.5vw, 18px)',
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                boxShadow: '0 6px 20px rgba(34, 1, 80, 0.04)'
              }}
            >
              <div
                className="contact-card-icon-wrapper"
                style={{
                  backgroundColor: 'rgba(34, 1, 80, 0.08)',
                  padding: '10px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <MapPin color="var(--brand-indigo)" size={20} />
              </div>
              <div style={{ minWidth: 0 }}>
                <h3 className="contact-card-title" style={{ fontSize: '15px', fontWeight: 700, color: 'var(--brand-indigo)', margin: '0 0 2px 0' }}>
                  Global Headquarters
                </h3>
                <p className="contact-card-value" style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.4, margin: 0 }}>
                  AAA 2 Innovate, F-40, Sector 6, Noida, UP 201301
                </p>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div
              className="contact-card"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                backgroundColor: 'var(--bg-secondary)',
                padding: 'clamp(12px, 1.5vw, 18px)',
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                boxShadow: '0 6px 20px rgba(34, 1, 80, 0.04)'
              }}
            >
              <div
                className="contact-card-icon-wrapper"
                style={{
                  backgroundColor: 'rgba(34, 1, 80, 0.08)',
                  padding: '10px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Phone color="var(--brand-indigo)" size={20} />
              </div>
              <div style={{ minWidth: 0 }}>
                <h3 className="contact-card-title" style={{ fontSize: '15px', fontWeight: 700, color: 'var(--brand-indigo)', margin: '0 0 2px 0' }}>
                  Direct Calling Line
                </h3>
                <p className="contact-card-value" style={{ color: 'var(--text-secondary)', fontSize: '13px', margin: 0 }}>
                  <a href="tel:+911206916907" style={{ color: 'var(--brand-indigo)', textDecoration: 'none', fontWeight: 600 }}>
                    +91-120-691-6907
                  </a>
                </p>
              </div>
            </div>

            {/* Global Operating Hours & Timezone Coverage Card */}
            <div
              className="contact-card"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                backgroundColor: 'var(--bg-secondary)',
                padding: 'clamp(12px, 1.5vw, 18px)',
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                boxShadow: '0 6px 20px rgba(34, 1, 80, 0.04)'
              }}
            >
              <div
                className="contact-card-icon-wrapper"
                style={{
                  backgroundColor: 'rgba(34, 1, 80, 0.08)',
                  padding: '10px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Clock color="var(--brand-indigo)" size={20} />
              </div>
              <div style={{ minWidth: 0 }}>
                <h3 className="contact-card-title" style={{ fontSize: '15px', fontWeight: 700, color: 'var(--brand-indigo)', margin: '0 0 2px 0' }}>
                  Global Operating Hours
                </h3>
                <p className="contact-card-value" style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.4, margin: 0 }}>
                  Mon – Sat: 9:00 AM – 7:30 PM IST
                </p>
              </div>
            </div>

            {/* Email Inquiry Card */}
            <div
              className="contact-card"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                backgroundColor: 'var(--bg-secondary)',
                padding: 'clamp(12px, 1.5vw, 18px)',
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                boxShadow: '0 6px 20px rgba(34, 1, 80, 0.04)'
              }}
            >
              <div
                className="contact-card-icon-wrapper"
                style={{
                  backgroundColor: 'rgba(34, 1, 80, 0.08)',
                  padding: '10px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Mail color="var(--brand-indigo)" size={20} />
              </div>
              <div style={{ minWidth: 0 }}>
                <h3 className="contact-card-title" style={{ fontSize: '15px', fontWeight: 700, color: 'var(--brand-indigo)', margin: '0 0 2px 0' }}>
                  Official Email
                </h3>
                <p className="contact-card-value" style={{ color: 'var(--text-secondary)', fontSize: '13px', margin: 0 }}>
                  <a href="mailto:info@aaa2innovate.com" style={{ color: 'var(--brand-indigo)', textDecoration: 'none', fontWeight: 600 }}>
                    info@aaa2innovate.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Sourcing Configurator Component */}
          <div>
            <SourcingConfigurator selectedCategoryFromModal={selectedCategoryForConfigurator} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContactSection;
