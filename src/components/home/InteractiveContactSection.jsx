import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SourcingConfigurator from '../common/SourcingConfigurator';

const InteractiveContactSection = ({ selectedCategoryForConfigurator }) => {
  return (
    <section
      id="contact"
      className="section-padding gsap-section"
      style={{ backgroundColor: '#140038', color: '#FFFFFF' }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 42px)', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
            Connect With Our Directors
          </h2>
          <p
            style={{
              color: '#CBD5E1',
              fontSize: '16px',
              maxWidth: '800px',
              margin: '10px auto 0 auto',
              lineHeight: 1.5
            }}
          >
            Get rapid production quotations, factory capacity matching, or custom digital engineering proposals.
          </p>
        </div>

        {/* 2-Column Grid: Contact Info + Configurator */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '28px',
            alignItems: 'start'
          }}
        >
          {/* Left: Contact Info (4 Cards matching exact 480px height) */}
          <div
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
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                padding: '12px 18px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(37, 99, 235, 0.2)',
                  padding: '10px',
                  borderRadius: '12px',
                  border: '1px solid rgba(37, 99, 235, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <MapPin color="#60A5FA" size={20} />
              </div>
              <div style={{ minWidth: 0 }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 2px 0' }}>
                  Global Headquarters
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '13px', lineHeight: 1.4, margin: 0 }}>
                  AAA 2 Innovate, F-40, Sector 6, Noida, UP 201301
                </p>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                padding: '12px 18px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(52, 211, 153, 0.15)',
                  padding: '10px',
                  borderRadius: '12px',
                  border: '1px solid rgba(52, 211, 153, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Phone color="#34D399" size={20} />
              </div>
              <div style={{ minWidth: 0 }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 2px 0' }}>
                  Direct Calling Line
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0 }}>
                  <a href="tel:+911206916907" style={{ color: '#93C5FD', textDecoration: 'none', fontWeight: 600 }}>
                    +91-120-691-6907
                  </a>
                </p>
              </div>
            </div>

            {/* Global Operating Hours & Timezone Coverage Card */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                padding: '12px 18px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(129, 140, 248, 0.18)',
                  padding: '10px',
                  borderRadius: '12px',
                  border: '1px solid rgba(129, 140, 248, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Clock color="#818CF8" size={20} />
              </div>
              <div style={{ minWidth: 0 }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 2px 0' }}>
                  Global Operating Hours
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '13px', lineHeight: 1.4, margin: 0 }}>
                  Mon – Sat: 9:00 AM – 7:30 PM IST <span style={{ color: '#818CF8' }}>(US &amp; EU aligned)</span>
                </p>
              </div>
            </div>

            {/* Email Inquiry Card */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                padding: '12px 18px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  padding: '10px',
                  borderRadius: '12px',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Mail color="#FBBF24" size={20} />
              </div>
              <div style={{ minWidth: 0 }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 2px 0' }}>
                  Official Email
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0 }}>
                  <a href="mailto:info@aaa2innovate.com" style={{ color: '#93C5FD', textDecoration: 'none', fontWeight: 600 }}>
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
