import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Settings, Check, X, ChevronRight } from 'lucide-react';

const GA_TRACKING_ID = 'G-LDP4XDVPSG';
const CLARITY_PROJECT_ID = 'x7xw2gsgac';

// Premium animated Toggle Switch component
const ToggleSwitch = ({ checked, onChange, disabled }) => (
  <div 
    onClick={() => !disabled && onChange()}
    style={{
      width: '44px',
      height: '24px',
      background: disabled ? 'rgba(59, 130, 246, 0.5)' : checked ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' : 'rgba(255, 255, 255, 0.1)',
      borderRadius: '24px',
      position: 'relative',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background 0.3s ease',
      boxShadow: checked ? '0 0 15px rgba(139, 92, 246, 0.4)' : 'inset 0 2px 4px rgba(0,0,0,0.2)'
    }}
  >
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 700, damping: 30 }}
      style={{
        width: '20px',
        height: '20px',
        background: '#ffffff',
        borderRadius: '50%',
        position: 'absolute',
        top: '2px',
        left: checked ? '22px' : '2px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {checked && <Check size={12} color="#8b5cf6" strokeWidth={3} />}
    </motion.div>
  </div>
);

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    compulsory: true,
    analytical: false,
    marketing: false
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem('aaa2_cookie_consent');
    if (!savedConsent) {
      setTimeout(() => setIsVisible(true), 1500);
    } else {
      const parsedConsent = JSON.parse(savedConsent);
      if (parsedConsent.analytical) {
        injectTrackingScripts();
      }
    }
  }, []);

  const injectTrackingScripts = () => {
    if (!document.getElementById('ga-script')) {
      const gaScript = document.createElement('script');
      gaScript.id = 'ga-script';
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(gaScript);

      const gaInline = document.createElement('script');
      gaInline.id = 'ga-inline';
      gaInline.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}');
      `;
      document.head.appendChild(gaInline);
    }

    if (!document.getElementById('clarity-script')) {
      const clarityInline = document.createElement('script');
      clarityInline.id = 'clarity-script';
      clarityInline.type = 'text/javascript';
      clarityInline.innerHTML = `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
      `;
      document.head.appendChild(clarityInline);
    }
  };

  const saveConsent = (newPreferences) => {
    localStorage.setItem('aaa2_cookie_consent', JSON.stringify(newPreferences));
    if (newPreferences.analytical) {
      injectTrackingScripts();
    }
    setIsVisible(false);
  };

  const handleAcceptAll = () => saveConsent({ compulsory: true, analytical: true, marketing: true });
  const handleRejectAll = () => saveConsent({ compulsory: true, analytical: false, marketing: false });
  const handleSavePreferences = () => saveConsent(preferences);

  const togglePreference = (key) => {
    if (key === 'compulsory') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div style={{ position: 'fixed', bottom: '30px', left: '0', right: '0', display: 'flex', justifyContent: 'center', zIndex: 999999, padding: '0 20px', pointerEvents: 'none' }}>
        <motion.div
          initial={{ y: 120, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 120, opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          style={{
            background: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(24px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '20px 24px',
            borderRadius: '16px',
            maxWidth: showPreferences ? '600px' : '750px',
            width: '100%',
            boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(139, 92, 246, 0.15)',
            pointerEvents: 'auto',
            color: 'white',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {/* Subtle glowing orb in background */}
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

          {!showPreferences ? (
            // Layer 1: Minimalist Premium Banner
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ 
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)', 
                  padding: '12px', 
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: 'inset 0 0 20px rgba(139, 92, 246, 0.1)'
                }}>
                  <Shield size={24} color="#a78bfa" />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 6px 0', fontSize: '1.15rem', fontWeight: '800', background: 'linear-gradient(to right, #fff, #cbd5e1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Your Privacy matters
                  </h3>
                  <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.5', fontWeight: '400' }}>
                    We use cookies to elevate your browsing experience, deliver tailored content, and analyze our traffic to continuously improve. 
                    Explore our <Link to="/privacy-policy" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: '600', borderBottom: '1px solid rgba(167, 139, 250, 0.3)', paddingBottom: '2px', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#a78bfa'} onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'rgba(167, 139, 250, 0.3)'}>Privacy Policy</Link> for details.
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'flex-end', paddingTop: '4px' }}>
                <button 
                  onClick={() => setShowPreferences(true)}
                  style={{ background: 'transparent', color: '#cbd5e1', border: 'none', padding: '10px 16px', borderRadius: '10px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#cbd5e1'; e.currentTarget.style.background = 'transparent' }}
                >
                  <Settings size={16} /> Customize
                </button>
                <button 
                  onClick={handleRejectAll}
                  style={{ background: 'rgba(255, 255, 255, 0.03)', color: '#cbd5e1', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '600', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'; e.currentTarget.style.color = '#fca5a5'; e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; e.currentTarget.style.color = '#cbd5e1'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)' }}
                >
                  Reject Non-Essential
                </button>
                <button 
                  onClick={handleAcceptAll}
                  style={{ 
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', 
                    color: 'white', 
                    border: 'none', 
                    padding: '10px 24px', 
                    borderRadius: '10px', 
                    cursor: 'pointer', 
                    fontSize: '0.9rem', 
                    fontWeight: '700', 
                    boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.5), inset 0 2px 4px rgba(255,255,255,0.2)', 
                    transition: 'all 0.3s',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 15px 35px -5px rgba(139, 92, 246, 0.6), inset 0 2px 4px rgba(255,255,255,0.2)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(139, 92, 246, 0.5), inset 0 2px 4px rgba(255,255,255,0.2)' }}
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            // Layer 2: Granular Preferences with WOW Factor
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', zIndex: 1 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '16px' }}>
                <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(to right, #fff, #cbd5e1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  <Settings size={20} color="#a78bfa" /> Preferences
                </h3>
                <button 
                  onClick={() => setShowPreferences(false)} 
                  style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: '8px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Compulsory */}
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ marginTop: '2px' }}>
                    <ToggleSwitch checked={true} disabled={true} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', color: '#fff', fontWeight: '600' }}>Essential Cookies</h4>
                    <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.5' }}>
                      Strictly necessary for the website to function securely and properly. These cannot be disabled.
                    </p>
                  </div>
                </div>

                {/* Analytical */}
                <div 
                  onClick={() => togglePreference('analytical')}
                  style={{ 
                    background: preferences.analytical ? 'rgba(139, 92, 246, 0.05)' : 'rgba(255,255,255,0.02)', 
                    padding: '16px', 
                    borderRadius: '12px', 
                    border: `1px solid ${preferences.analytical ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255,255,255,0.05)'}`, 
                    display: 'flex', gap: '16px', alignItems: 'flex-start', cursor: 'pointer', transition: 'all 0.3s',
                    boxShadow: preferences.analytical ? 'inset 0 0 20px rgba(139, 92, 246, 0.05)' : 'none'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = preferences.analytical ? 'rgba(139, 92, 246, 0.5)' : 'rgba(255,255,255,0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = preferences.analytical ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255,255,255,0.05)'}
                >
                  <div style={{ marginTop: '2px' }}>
                    <ToggleSwitch checked={preferences.analytical} onChange={() => togglePreference('analytical')} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', color: '#fff', fontWeight: '600' }}>Analytics & Performance</h4>
                    <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.5' }}>
                      Empowers us to improve the website by securely analyzing visitor interactions via Google Analytics and Microsoft Clarity.
                    </p>
                  </div>
                </div>

                {/* Marketing */}
                <div 
                  onClick={() => togglePreference('marketing')}
                  style={{ 
                    background: preferences.marketing ? 'rgba(139, 92, 246, 0.05)' : 'rgba(255,255,255,0.02)', 
                    padding: '16px', 
                    borderRadius: '12px', 
                    border: `1px solid ${preferences.marketing ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255,255,255,0.05)'}`, 
                    display: 'flex', gap: '16px', alignItems: 'flex-start', cursor: 'pointer', transition: 'all 0.3s',
                    boxShadow: preferences.marketing ? 'inset 0 0 20px rgba(139, 92, 246, 0.05)' : 'none'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = preferences.marketing ? 'rgba(139, 92, 246, 0.5)' : 'rgba(255,255,255,0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = preferences.marketing ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255,255,255,0.05)'}
                >
                  <div style={{ marginTop: '2px' }}>
                    <ToggleSwitch checked={preferences.marketing} onChange={() => togglePreference('marketing')} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', color: '#fff', fontWeight: '600' }}>Marketing & Advertising</h4>
                    <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.5' }}>
                      Allows us to deliver personalized advertisements and track campaign performance across platforms.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '10px' }}>
                <button 
                  onClick={handleSavePreferences}
                  style={{ 
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', 
                    color: 'white', 
                    border: 'none', 
                    padding: '12px 28px', 
                    borderRadius: '10px', 
                    cursor: 'pointer', 
                    fontSize: '0.95rem', 
                    fontWeight: '700', 
                    boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.5), inset 0 2px 4px rgba(255,255,255,0.2)', 
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 15px 35px -5px rgba(139, 92, 246, 0.6), inset 0 2px 4px rgba(255,255,255,0.2)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(139, 92, 246, 0.5), inset 0 2px 4px rgba(255,255,255,0.2)' }}
                >
                  Save My Choices <ChevronRight size={18} strokeWidth={3} />
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
