import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Safely register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Checks whether user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Helper to run GSAP animations safely inside React component scope
 * @param {React.RefObject} scopeRef - Container ref scope
 * @param {Function} animationFn - GSAP setup function
 * @returns {Function} Cleanup function to call on unmount
 */
export const createGsapScope = (scopeRef, animationFn) => {
  if (prefersReducedMotion()) return () => {};
  
  const ctx = gsap.context(animationFn, scopeRef);
  return () => ctx.revert();
};

/**
 * Animates numeric counter smoothly from 0 to target value on ScrollTrigger entry
 * @param {HTMLElement} element - Target DOM element
 * @param {number} targetValue - Ending number
 * @param {string} suffix - Suffix string (e.g. "+", "%")
 * @param {number} duration - Animation duration in seconds
 */
export const animateNumberCounter = (element, targetValue, suffix = '', duration = 2) => {
  if (!element || prefersReducedMotion()) return;

  const obj = { value: 0 };

  gsap.to(obj, {
    value: targetValue,
    duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      once: true
    },
    onUpdate: () => {
      element.innerText = `${Math.floor(obj.value)}${suffix}`;
    }
  });
};

export { gsap, ScrollTrigger };
