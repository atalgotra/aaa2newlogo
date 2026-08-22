import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AAA2Logo from '../common/AAA2Logo';

const Navbar = () => {
  const [pastHero, setPastHero] = useState(false);
  const [heroProgress, setHeroProgress] = useState(0); // 0 = top of hero, 1 = past hero
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('hero');
      const heroBottom = heroEl ? heroEl.offsetTop + heroEl.offsetHeight : window.innerHeight;
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
      // Ramp from 0→1 through the bottom 50% of the hero
      const rawProgress = Math.min(1, Math.max(0, (window.scrollY - heroHeight * 0.5) / (heroHeight * 0.5)));
      setHeroProgress(rawProgress);
      setPastHero(window.scrollY + 90 >= heroBottom);

      const sections = ['hero', 'about', 'services', 'products', 'ethical-sourcing', 'team', 'contact'];
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', sectionId: 'hero' },
    { name: 'About Us', sectionId: 'about' },
    { name: 'Capabilities', sectionId: 'services' },
    { name: 'Products', sectionId: 'products' },
    { name: 'Ethical Sourcing', sectionId: 'ethical-sourcing' },
    { name: 'Team', sectionId: 'team' },
    { name: 'Contact', sectionId: 'contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: pastHero ? '12px' : '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 32px)',
        maxWidth: '1280px',
        backgroundColor: pastHero
          ? 'rgba(34, 1, 80, 0.95)'
          : `rgba(34, 1, 80, ${(heroProgress * 0.45).toFixed(2)})`,
        backdropFilter: (heroProgress > 0.1 || pastHero)
          ? `blur(${Math.round(heroProgress * 10 + (pastHero ? 10 : 0))}px)`
          : 'none',
        borderRadius: '50px',
        border: pastHero
          ? '1px solid rgba(255, 255, 255, 0.15)'
          : `1px solid rgba(255, 255, 255, ${(0.08 + heroProgress * 0.18).toFixed(2)})`,
        boxShadow: pastHero ? '0 15px 40px rgba(0, 0, 0, 0.6)' : 'none',
        zIndex: 1000,
        transition: 'top 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
        padding: '0 24px'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '68px' }}>

        {/* AAA2 Logo */}
        <div 
          onClick={() => scrollToSection('hero')} 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <AAA2Logo mode="dark" size={50} />
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
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  borderRadius: '30px',
                  fontSize: '14px',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#FFFFFF' : '#CBD5E1',
                  fontFamily: "'Chakra Petch', sans-serif",
                  backgroundColor: isActive ? '#220150' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
            style={{
              padding: '10px 22px',
              fontSize: '13px',
              fontWeight: 600,
              borderRadius: '30px',
              backgroundColor: '#2563EB',
              color: '#FFFFFF',
              boxShadow: '0 4px 15px rgba(37, 99, 235, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
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
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-toggle { display: block !important; }
        }
      `}</style>

      {/* Mobile Menu Dropdown Card */}
      {mobileMenuOpen && (
        <div 
          style={{ 
            position: 'absolute', 
            top: '76px', 
            left: 0, 
            width: '100%', 
            backgroundColor: 'rgba(34, 1, 80, 0.95)', 
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)', 
            padding: '24px', 
            border: '1px solid rgba(255, 255, 255, 0.15)' 
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.sectionId)}
                style={{ 
                  fontSize: '15px', 
                  fontWeight: 600, 
                  textAlign: 'left', 
                  padding: '12px 16px', 
                  borderRadius: '12px',
                  border: 'none', 
                  backgroundColor: activeSection === link.sectionId ? '#2563EB' : 'transparent', 
                  color: '#FFFFFF', 
                  cursor: 'pointer' 
                }}
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
