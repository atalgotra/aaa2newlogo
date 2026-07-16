import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SmoothScroll from './components/animations/SmoothScroll';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Team = lazy(() => import('./pages/Team'));
const Products = lazy(() => import('./pages/Products'));
const EthicalSourcing = lazy(() => import('./pages/EthicalSourcing'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

import CookieConsent from './components/CookieConsent';

const Services = lazy(() => import('./pages/Services'));
const Sourcing = lazy(() => import('./pages/services/Sourcing'));
const Design = lazy(() => import('./pages/services/Design'));
const Manufacturing = lazy(() => import('./pages/services/Manufacturing'));
const QualityControl = lazy(() => import('./pages/services/QualityControl'));
const Logistics = lazy(() => import('./pages/services/Logistics'));
const Warehousing = lazy(() => import('./pages/services/Warehousing'));
const Tech = lazy(() => import('./pages/services/Tech'));

// Simple Loading Component
const PageLoader = () => (
  <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--bg-main)' }}>
    <div style={{ width: '40px', height: '40px', border: '3px solid rgba(255, 87, 34, 0.2)', borderTopColor: 'var(--brand-orange)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
    <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/products" element={<Products />} />
          <Route path="/ethical-sourcing" element={<EthicalSourcing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/sourcing" element={<Sourcing />} />
          <Route path="/services/design" element={<Design />} />
          <Route path="/services/manufacturing" element={<Manufacturing />} />
          <Route path="/services/quality-control-compliance" element={<QualityControl />} />
          <Route path="/services/logistics" element={<Logistics />} />
          <Route path="/services/warehousing" element={<Warehousing />} />
          <Route path="/services/tech" element={<Tech />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <SmoothScroll>
      <Router>
        <ScrollToTop />
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoutes />
            </Suspense>
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </SmoothScroll>
  );
}

export default App;
