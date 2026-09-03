import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    if (hash) {
      const targetId = hash.replace('#', '');
      const scrollToHash = () => {
        const el = document.getElementById(targetId);
        if (el) {
          if (window.lenis) {
            window.lenis.scrollTo(el, { offset: -70, immediate: false });
          } else {
            const offset = 70;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }
      };

      const timer1 = setTimeout(scrollToHash, 100);
      const timer2 = setTimeout(scrollToHash, 400);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      // Scroll to top immediately on mount / route change
      window.scrollTo(0, 0);
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      }
      
      // Delayed scroll attempt to execute after the exit page transition has completed (400ms)
      const timer = setTimeout(() => {
        window.scrollTo(0, 0);
        if (window.lenis) {
          window.lenis.scrollTo(0, { immediate: true });
        }
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

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
