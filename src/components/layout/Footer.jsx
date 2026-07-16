import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, ChevronRight, ArrowUp, ShieldCheck, Award } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
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

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <footer style={{
        padding: '60px 0 20px',
        background: '#0B0F19',
        fontFamily: 'Outfit, sans-serif',
        position: 'relative'
      }}>
        <div className="container footer-grid" style={{ display: 'grid', gap: '40px' }}>

          {/* Brand & Social Column */}
          <div className="footer-brand-col">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <img className="footer-logo-unified" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/aaa2_logo.png" alt="AAA2 Innovate Logo" width="300" height="100" style={{ height: '100px', width: 'auto', transform: 'scale(3)', transformOrigin: 'left center' }} />
            </div>
            <p style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: '1.6', maxWidth: '350px', marginLeft: '35px', textAlign: 'left' }}>
              Bridging the gap between world-class product sourcing and elite technological engineering. Products, Technology, Commerce, and Global Services delivered worldwide.
            </p>

            {/* Social Media */}
            <div style={{ marginTop: '24px', display: 'flex', gap: '16px', marginLeft: '35px' }}>
              <a href="https://in.linkedin.com/company/aaa2innovatepvtltd" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', color: '#9CA3AF', transition: 'all 0.3s ease', textDecoration: 'none' }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#0A66C2'; e.currentTarget.style.color = '#FFF'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#9CA3AF'; e.currentTarget.style.transform = 'translateY(0)'; }}
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

          {/* Links Column */}
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#FFFFFF', marginBottom: '16px', fontSize: '17px', fontWeight: 600 }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
              <li><Link to="/about" className="footer-link" style={{ textDecoration: 'none', color: '#9CA3AF' }}>About Us</Link></li>
              <li><Link to="/team" className="footer-link" style={{ textDecoration: 'none', color: '#9CA3AF' }}>Our Team</Link></li>
              <li><Link to="/services" className="footer-link" style={{ textDecoration: 'none', color: '#9CA3AF' }}>Our Services</Link></li>
              <li><Link to="/products" className="footer-link" style={{ textDecoration: 'none', color: '#9CA3AF' }}>Products</Link></li>
              <li><Link to="/ethical-sourcing" className="footer-link" style={{ textDecoration: 'none', color: '#9CA3AF' }}>Ethical Sourcing</Link></li>
            </ul>
          </div>

          {/* Memberships Column */}
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#FFFFFF', marginBottom: '16px', fontSize: '17px', fontWeight: 600 }}>Memberships</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9CA3AF', fontSize: '14px' }}><ShieldCheck size={16} color="var(--brand-orange)" /> NASSCOM IT Member</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9CA3AF', fontSize: '14px' }}><Award size={16} color="var(--brand-orange)" /> ISO 27001 Certified</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9CA3AF', fontSize: '14px' }}><ShieldCheck size={16} color="var(--brand-orange)" /> SEPC Registered</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9CA3AF', fontSize: '14px' }}><Award size={16} color="var(--brand-orange)" /> BAA Association</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9CA3AF', fontSize: '14px' }}><ShieldCheck size={16} color="var(--brand-orange)" /> EPCH Certified</li>
            </ul>
          </div>

          {/* Global Network Column */}
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#FFFFFF', marginBottom: '16px', fontSize: '17px', fontWeight: 600 }}>Global Network</h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={20} color="var(--brand-orange)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <address style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: '1.5', fontStyle: 'normal' }}>
                  <strong style={{ color: '#E5E7EB', fontWeight: 500 }}>AAA 2 Innovate Pvt. Ltd.</strong><br />
                  Global Headquarters<br />
                  Noida, India
                </address>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="var(--brand-orange)" style={{ flexShrink: 0 }} />
                <a href="mailto:info@aaa2innovate.com" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = 'var(--brand-orange)'} onMouseOut={(e) => e.target.style.color = '#9CA3AF'}>
                  info@aaa2innovate.com
                </a>
              </div>

              <button
                onClick={() => { window.location.href = '/contact'; }}
                className="btn-primary"
                style={{ marginTop: '8px', padding: '10px 24px', fontSize: '14px', width: 'max-content' }}
              >
                Contact Hub
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="container" style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', color: '#6B7280', fontSize: '13px' }}>
          <p>&copy; {new Date().getFullYear()} AAA 2 Innovate Pvt. Ltd. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/privacy-policy" style={{ color: '#6B7280', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--brand-orange)'} onMouseOut={(e) => e.target.style.color = '#6B7280'}>Privacy Policy</Link>
            <Link to="/terms-of-service" style={{ color: '#6B7280', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--brand-orange)'} onMouseOut={(e) => e.target.style.color = '#6B7280'}>Terms of Service</Link>
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
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            backgroundColor: 'var(--brand-orange)',
            color: '#FFFFFF',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            zIndex: 9999,
            transition: 'transform 0.3s ease, background-color 0.3s ease'
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.backgroundColor = '#e04f00'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.backgroundColor = 'var(--brand-orange)'; }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </button>
      )}
    </>
  );
};

export default Footer;

