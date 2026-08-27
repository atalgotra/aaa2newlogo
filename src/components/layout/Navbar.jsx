import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import AAA2Logo from '../common/AAA2Logo';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [pastHero, setPastHero] = useState(false);
  const [heroProgress, setHeroProgress] = useState(0); // 0 = top of hero, 1 = past hero
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const isSubpage = location.pathname === '/privacy-policy' || location.pathname === '/terms-of-service';
  const isSolid = pastHero || isSubpage;

  const isManualScrollRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('hero');
      const heroBottom = heroEl ? heroEl.offsetTop + heroEl.offsetHeight : window.innerHeight;
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
      // Ramp from 0→1 through the bottom 50% of the hero
      const rawProgress = Math.min(1, Math.max(0, (window.scrollY - heroHeight * 0.5) / (heroHeight * 0.5)));
      setHeroProgress(rawProgress);
      setPastHero(window.scrollY + 90 >= heroBottom);

      // Skip updating activeSection if user initiated a click-to-scroll
      if (isManualScrollRef.current) return;

      const sections = ['hero', 'about', 'services', 'products', 'ethical-sourcing', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setActiveSection(id);

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

    isManualScrollRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    scrollTimeoutRef.current = setTimeout(() => {
      isManualScrollRef.current = false;
    }, 900);

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', sectionId: 'hero' },
    { name: 'About', sectionId: 'about' },
    { name: 'Capabilities', sectionId: 'services' },
    { name: 'Products', sectionId: 'products' },
    { name: 'Ethical Sourcing', sectionId: 'ethical-sourcing' },
    { name: 'Contact', sectionId: 'contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: isSolid ? '10px' : '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: '1280px',
          backgroundColor: isSolid
            ? 'rgba(34, 1, 80, 0.95)'
            : `rgba(34, 1, 80, ${(heroProgress * 0.45).toFixed(2)})`,
          backdropFilter: (heroProgress > 0.1 || isSolid)
            ? `blur(${Math.round(heroProgress * 10 + (isSolid ? 10 : 0))}px)`
            : 'none',
          borderRadius: '50px',
          border: isSolid
            ? '1px solid rgba(255, 255, 255, 0.15)'
            : `1px solid rgba(255, 255, 255, ${(0.08 + heroProgress * 0.18).toFixed(2)})`,
          boxShadow: isSolid ? '0 15px 40px rgba(0, 0, 0, 0.6)' : 'none',
          zIndex: 1000,
          transition: 'top 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, background-color 0.3s ease',
          padding: '0 20px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '52px' }}>

          {/* AAA2 Logo */}
          <div
            onClick={() => scrollToSection('hero')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <AAA2Logo mode="dark" size={36} />
          </div>

          {/* Desktop Floating Navigation Items */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '4px', height: '100%' }} className="desktop-nav">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.sectionId;
              return (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.sectionId)}
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: isActive ? '#FFFFFF' : '#CBD5E1',
                    backgroundColor: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '6px 14px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    fontFamily: "'Chakra Petch', sans-serif"
                  }}
                  onMouseOver={(e) => {
                    if (!isActive) e.target.style.color = '#FFFFFF';
                  }}
                  onMouseOut={(e) => {
                    if (!isActive) e.target.style.color = '#CBD5E1';
                  }}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Action Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary desktop-action-btn"
              style={{ padding: '8px 18px', fontSize: '13px' }}
            >
              Get In Touch
            </button>

            {/* Mobile Menu Toggle */}
            <div className="mobile-menu-toggle" style={{ display: 'none' }}>
              <button
                aria-label="Toggle Mobile Menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ color: '#FFFFFF', border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '4px' }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

        </div>

        {/* Floating AAA 2 INNOVATE below Navbar Logo */}
        <div
          onClick={() => scrollToSection('hero')}
          className="desktop-floating-badge"
          style={{
            position: 'absolute',
            top: '58px',
            left: '2px',
            display: mobileMenuOpen ? 'none' : 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 14px',
            backgroundColor: isSolid
              ? 'rgba(34, 1, 80, 0.95)'
              : `rgba(34, 1, 80, ${(heroProgress * 0.45).toFixed(2)})`,
            backdropFilter: (heroProgress > 0.1 || isSolid)
              ? `blur(${Math.round(heroProgress * 10 + (isSolid ? 10 : 0))}px)`
              : 'none',
            borderRadius: '30px',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '10px',
            fontWeight: 800,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            whiteSpace: 'nowrap',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            userSelect: 'none'
          }}
        >
          AAA 2 INNOVATE
        </div>

        <style>{`
          @media (max-width: 992px) {
            .desktop-nav { display: none !important; }
            .desktop-action-btn { display: none !important; }
            .desktop-floating-badge { display: none !important; }
            .mobile-menu-toggle { display: block !important; }
          }
        `}</style>
      </header>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(5, 0, 15, 0.6)',
            backdropFilter: 'blur(6px)',
            zIndex: 10001,
            transition: 'opacity 0.3s ease'
          }}
        />
      )}

      {/* Mobile Menu Sliding Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '250px',
          maxWidth: '85vw',
          height: '100vh',
          backgroundColor: '#220150',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.5)',
          borderTopLeftRadius:"20px",
          borderBottomLeftRadius:"20px",
          zIndex: 10002,
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          visibility: mobileMenuOpen ? 'visible' : 'hidden'
        }}
      >
        {/* Drawer Header with Logo & Close Button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <AAA2Logo mode="dark" size={32} />
          <button
            aria-label="Close Mobile Menu"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: '#FFFFFF',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links inside Drawer */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => {
                scrollToSection(link.sectionId);
                setMobileMenuOpen(false);
              }}
              style={{
                fontSize: '15px',
                fontWeight: 600,
                textAlign: 'left',
                padding: '12px 16px',
                borderRadius: '12px',
                border: 'none',
                width: '170px',
                backgroundColor: activeSection === link.sectionId ? 'rgba(99, 102, 241, 0.25)' : 'transparent',
                color: activeSection === link.sectionId ? '#FFFFFF' : '#CBD5E1',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: "'Chakra Petch', sans-serif"
              }}
            >
              {link.name}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
