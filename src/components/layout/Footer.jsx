import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, ArrowUp, ShieldCheck, Award } from 'lucide-react';
import AAA2Logo from '../common/AAA2Logo';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <footer style={{
        padding: '60px 0 20px',
        background: 'linear-gradient(180deg, #220150 0%, #140038 100%)',
        fontFamily: 'Outfit, sans-serif',
        position: 'relative'
      }}>
        <div className="container footer-grid" style={{ display: 'grid', gap: '40px' }}>

          {/* Brand & Social Column */}
          <div className="footer-brand-col">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <AAA2Logo mode="dark" size={78} />
            </div>
            <p style={{ color: '#E2E8F0', fontSize: '15px', lineHeight: '1.6', maxWidth: '350px', textAlign: 'left' }}>
              Bridging the gap between world-class product sourcing and elite technological engineering. Products, Technology, Commerce, and Global Services delivered worldwide.
            </p>

            {/* Social Media */}
            <div style={{ marginTop: '24px', display: 'flex', gap: '16px' }}>
              <a href="https://in.linkedin.com/company/aaa2innovatepvtltd" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)', color: '#CBD5E1', transition: 'all 0.3s ease', textDecoration: 'none' }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#2563EB'; e.currentTarget.style.color = '#FFF'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#CBD5E1'; e.currentTarget.style.transform = 'translateY(0)'; }}
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Single-Page Navigation Column */}
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#FFFFFF', marginBottom: '16px', fontSize: '17px', fontWeight: 700 }}>Quick Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
              <li><button onClick={() => scrollToSection('about')} style={{ border: 'none', background: 'transparent', color: '#CBD5E1', cursor: 'pointer', padding: 0, fontSize: '15px' }}>About Us</button></li>
              <li><button onClick={() => scrollToSection('services')} style={{ border: 'none', background: 'transparent', color: '#CBD5E1', cursor: 'pointer', padding: 0, fontSize: '15px' }}>Capabilities</button></li>
              <li><button onClick={() => scrollToSection('products')} style={{ border: 'none', background: 'transparent', color: '#CBD5E1', cursor: 'pointer', padding: 0, fontSize: '15px' }}>Products</button></li>
              <li><button onClick={() => scrollToSection('ethical-sourcing')} style={{ border: 'none', background: 'transparent', color: '#CBD5E1', cursor: 'pointer', padding: 0, fontSize: '15px' }}>Ethical Sourcing</button></li>
              <li><button onClick={() => scrollToSection('team')} style={{ border: 'none', background: 'transparent', color: '#CBD5E1', cursor: 'pointer', padding: 0, fontSize: '15px' }}>Leadership</button></li>
              <li><button onClick={() => scrollToSection('contact')} style={{ border: 'none', background: 'transparent', color: '#CBD5E1', cursor: 'pointer', padding: 0, fontSize: '15px' }}>Contact Hub</button></li>
            </ul>
          </div>

          {/* Memberships Column */}
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#FFFFFF', marginBottom: '16px', fontSize: '17px', fontWeight: 700 }}>Memberships &amp; Audits</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#CBD5E1', fontSize: '14px' }}><ShieldCheck size={16} color="#00F0FF" /> NASSCOM IT Member</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#CBD5E1', fontSize: '14px' }}><Award size={16} color="#3B82F6" /> ISO 27001 Certified</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#CBD5E1', fontSize: '14px' }}><ShieldCheck size={16} color="#00F0FF" /> SEPC Registered</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#CBD5E1', fontSize: '14px' }}><Award size={16} color="#3B82F6" /> BAA Association</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#CBD5E1', fontSize: '14px' }}><ShieldCheck size={16} color="#00F0FF" /> EPCH Certified</li>
            </ul>
          </div>

          {/* Global Network Column */}
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#FFFFFF', marginBottom: '16px', fontSize: '17px', fontWeight: 700 }}>Global Network</h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={20} color="#00F0FF" style={{ marginTop: '2px', flexShrink: 0 }} />
                <address style={{ color: '#CBD5E1', fontSize: '14px', lineHeight: '1.5', fontStyle: 'normal' }}>
                  <strong style={{ color: '#E2E8F0', fontWeight: 600 }}>AAA 2 Innovate Pvt. Ltd.</strong><br />
                  Global Headquarters<br />
                  Noida, India
                </address>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="#00F0FF" style={{ flexShrink: 0 }} />
                <a href="mailto:info@aaa2innovate.com" style={{ color: '#CBD5E1', fontSize: '14px', textDecoration: 'none' }}>
                  info@aaa2innovate.com
                </a>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
                style={{ marginTop: '8px', padding: '10px 24px', fontSize: '14px', width: 'max-content', backgroundColor: '#2563EB' }}
              >
                Contact Hub
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="container" style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', color: '#94A3B8', fontSize: '13px' }}>
          <p>&copy; {new Date().getFullYear()} AAA 2 Innovate Pvt. Ltd. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/privacy-policy" style={{ color: '#94A3B8', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/terms-of-service" style={{ color: '#94A3B8', textDecoration: 'none' }}>Terms of Service</Link>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      {isVisible && (
        <button
          aria-label="Scroll to top"
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '40px',
            right: '40px',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: '#2563EB',
            color: '#FFFFFF',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(37, 99, 235, 0.5)',
            zIndex: 9999,
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </button>
      )}
    </>
  );
};

export default Footer;
