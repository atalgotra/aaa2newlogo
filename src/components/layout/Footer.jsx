import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Mail, ArrowUp, ShieldCheck, Award } from 'lucide-react';
import AAA2Logo from '../common/AAA2Logo';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
    if (location.pathname !== '/') {
      if (id === 'hero') {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/', { state: { scrollTo: id } });
      }
      return;
    }

    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

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
      <footer
        style={{
          padding: '40px 0 16px',
          background: 'linear-gradient(180deg, #220150 0%, #220150 100%)',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'relative'
        }}
      >
        <div className="container footer-grid" style={{ display: 'grid', gap: '32px' }}>

          {/* Brand & Social Column */}
          <div className="footer-brand-col">
            <div
              onClick={() => scrollToSection('hero')}
              style={{ display: 'flex', alignItems: 'center', marginBottom: '14px', cursor: 'pointer' }}
            >
              <AAA2Logo mode="dark" size={68} />
            </div>
            <p style={{ color: '#94A3B8', fontSize: '13.5px', lineHeight: '1.55', maxWidth: '340px', textAlign: 'left', margin: '0 0 16px 0' }}>
              Bridging world-class product sourcing with elite technological engineering. Products, Technology, Commerce, and Global Logistics delivered worldwide.
            </p>

            {/* Social Media */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                {
                  href: "https://in.linkedin.com/company/aaa2innovatepvtltd",
                  label: "LinkedIn",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  )
                },
                {
                  href: "https://www.instagram.com/aaa2innovatepvtltd/",
                  label: "Instagram",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  )
                },
                {
                  href: "https://www.youtube.com/@aaa2innovatepvtltd373",
                  label: "Youtube",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  )
                }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '34px',
                    height: '34px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#CBD5E1',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#220150';
                    e.currentTarget.style.borderColor = '#6366F1';
                    e.currentTarget.style.color = '#FFF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#CBD5E1';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#FFFFFF', marginBottom: '12px', fontSize: '13.5px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0 }}>
              {[
                { label: 'Capabilities', path: '/capabilities' },
                { label: 'Products', path: '/products' },
                { label: 'Ethical Sourcing', path: '/ethical-sourcing' },
                { label: 'Contact Hub', path: '/contact' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    style={{
                      textDecoration: 'none',
                      color: '#94A3B8',
                      fontSize: '13px',
                      transition: 'color 0.2s ease',
                      display: 'inline-block'
                    }}
                    onMouseOver={(e) => (e.target.style.color = '#93C5FD')}
                    onMouseOut={(e) => (e.target.style.color = '#94A3B8')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Memberships & Audits Column */}
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#FFFFFF', marginBottom: '16px', fontSize: '13.5px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Memberships &amp; Audits
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '13px' }}>
                <ShieldCheck size={15} color="#FFFFFF" /> NASSCOM IT Member
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '13px' }}>
                <Award size={15} color="#FFFFFF" /> ISO 27001 Certified
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '13px' }}>
                <ShieldCheck size={15} color="#FFFFFF" /> SEPC Registered
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '13px' }}>
                <Award size={15} color="#FFFFFF" /> BAA Association
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '13px' }}>
                <ShieldCheck size={15} color="#FFFFFF" /> EPCH Certified
              </li>
            </ul>
          </div>

          {/* Get in Touch Column */}
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#FFFFFF', marginBottom: '16px', fontSize: '13.5px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Get in Touch
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=AAA+2+Innovate+Pvt.+Ltd.+F-40,+Sector+6,+Noida,+UP+201301"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', textDecoration: 'none' }}
              >
                <MapPin size={16} color="#FFFFFF" style={{ marginTop: '2px', flexShrink: 0 }} />
                <address style={{ color: '#FFFFFF', fontSize: '13px', lineHeight: '1.4', fontStyle: 'normal', cursor: 'pointer', textAlign: 'left' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#94A3B8'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#FFFFFF'}
                >
                  <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>AAA 2 Innovate Pvt. Ltd.</strong><br />
                  F-40, Sector 6, Noida, UP 201301
                </address>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="#FFFFFF" style={{ flexShrink: 0 }} />
                <a href="mailto:info@aaa2innovate.com" style={{ color: '#FFFFFF', fontSize: '13px', textDecoration: 'none' }}>
                  info@aaa2innovate.com
                </a>
              </div>

              <button
                onClick={() => navigate('/contact')}
                className="btn-primary"
                style={{ marginTop: '4px', padding: '8px 20px', fontSize: '13px', width: 'max-content', border: 'none', cursor: 'pointer' }}
              >
                Contact Hub
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="container" style={{ marginTop: '28px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', color: '#64748B', fontSize: '12px' }}>
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} AAA 2 Innovate Pvt. Ltd. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/privacy-policy" style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => (e.target.style.color = '#93C5FD')} onMouseOut={(e) => (e.target.style.color = '#64748B')}>Privacy Policy</Link>
            <Link to="/terms-of-service" style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => (e.target.style.color = '#93C5FD')} onMouseOut={(e) => (e.target.style.color = '#64748B')}>Terms of Service</Link>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      {isVisible && (
        <button
          className="scroll-to-top-btn"
          aria-label="Scroll to top"
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#220150',
            color: '#FFFFFF',
            border: '1px solid rgba(99, 102, 241, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(34, 1, 80, 0.5)',
            zIndex: 9999,
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.backgroundColor = '#3730A3';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(99, 102, 241, 0.6)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.backgroundColor = '#220150';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(34, 1, 80, 0.5)';
          }}
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </button>
      )}
    </>
  );
};

export default Footer;
