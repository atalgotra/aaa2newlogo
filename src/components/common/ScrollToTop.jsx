import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();
  const { pathname, hash, state } = location;
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const targetId = hash ? hash.replace('#', '') : state?.scrollTo;

    // Always reset to top immediately when route changes so page loads at the top
    window.scrollTo(0, 0);
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }

    if (targetId) {
      let attempts = 0;
      const maxAttempts = 15;

      const attemptScroll = () => {
        const el = document.getElementById(targetId);
        if (el) {
          if (window.lenis) {
            window.lenis.scrollTo(el, { offset: -80, immediate: false, duration: 0.9 });
          } else {
            const offset = 80;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(attemptScroll, 80);
        }
      };

      // Start initial attempt and retry until element is mounted
      const timer = setTimeout(attemptScroll, 100);

      prevPathnameRef.current = pathname;
      return () => clearTimeout(timer);
    } else {
      // Delayed check to guarantee top position after page transition
      const timer = setTimeout(() => {
        window.scrollTo(0, 0);
        if (window.lenis) {
          window.lenis.scrollTo(0, { immediate: true });
        }
      }, 350);

      prevPathnameRef.current = pathname;
      return () => clearTimeout(timer);
    }
  }, [pathname, hash, state]);

  useEffect(() => {
    // Send GA4 Page View
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_title: document.title || 'AAA 2 Innovate',
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
