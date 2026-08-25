import React, { useRef, useEffect, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap, ScrollTrigger, createGsapScope, prefersReducedMotion } from '../../utils/gsapUtils';

/* ─────────────────────────────────────────────────────────────
   WORLD-CLASS LIVING GLOBAL NETWORK & STARDUST CANVAS
   Renders a connected network with warm gold drift, traveling pulse packets,
   cursor stardust trails, and click shockwave rings.
───────────────────────────────────────────────────────────── */
const NetworkCanvas = ({ canvasRef }) => (
  <canvas
    ref={canvasRef}
    style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 2,
      opacity: 0,
      visibility: 'hidden',
      willChange: 'transform, opacity',
    }}
  />
);

/* ─────────────────────────────────────────────────────────────
   HERO CINEMATIC EXPERIENTIAL COMPONENT
───────────────────────────────────────────────────────────── */
const VideoHero = () => {
  /* DOM element references */
  const heroRef            = useRef(null);
  const videoWrapRef       = useRef(null);
  const canvasRef          = useRef(null);
  const bgLayerRef         = useRef(null);       // Plane 2: atmospheric overlay
  const contentRef         = useRef(null);       // Foreground text container (anchored)
  const brandRef           = useRef(null);       // AAA 2 INNOVATE
  const mottoRef           = useRef(null);       // Innovation is our Addiction
  const mottoLineRef       = useRef(null);       // Signature line
  const titleLine1Ref      = useRef(null);       // Architecting the Future of
  const titleLine2Ref      = useRef(null);       // Global Commerce & Innovation
  const subtextRef         = useRef(null);       // Product sourcing...
  const ctaRef             = useRef(null);       // Action buttons
  const primaryBtnRef      = useRef(null);       // Explore Our Capabilities
  const scrollIndRef       = useRef(null);       // Scroll indicator container
  const scrollLineRef      = useRef(null);       // Vertical scroll line
  const scrollChevronRef   = useRef(null);       // Scroll SVG chevron
  const transitionBeamRef  = useRef(null);       // Golden transition line to next section


  /* Mouse stardust & shockwave state inside Canvas */
  const particlesRef       = useRef([]);
  const shockwavesRef      = useRef([]);

  /* ── Living Network & Interactive Stardust Canvas Initialization ── */
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const hero   = heroRef.current;
    if (!canvas || !hero) return;

    const ctx    = canvas.getContext('2d');
    const W      = hero.offsetWidth;
    const H      = hero.offsetHeight;
    canvas.width  = W;
    canvas.height = H;

    const NODES = 32;
    const LINK_DIST = W * 0.22;
    if (W < 768) return; // skip canvas on mobile for 60fps performance

    /* Generate sparse network nodes */
    const nodes = Array.from({ length: NODES }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      r: Math.random() * 1.5 + 0.5,
      pulse: Math.random() * Math.PI,
    }));

    /* Generate faint golden energy pulses traveling along network lines */
    const pulses = Array.from({ length: 4 }, () => ({
      from: 0,
      to: 1,
      progress: Math.random(),
      speed: 0.002 + Math.random() * 0.002,
    }));

    const getConnectedNode = (fromIdx) => {
      const neighbors = [];
      for (let j = 0; j < nodes.length; j++) {
        if (j === fromIdx) continue;
        const dx = nodes[j].x - nodes[fromIdx].x;
        const dy = nodes[j].y - nodes[fromIdx].y;
        if (Math.sqrt(dx * dx + dy * dy) < LINK_DIST) {
          neighbors.push(j);
        }
      }
      if (neighbors.length === 0) return (fromIdx + 1) % nodes.length;
      return neighbors[Math.floor(Math.random() * neighbors.length)];
    };

    pulses.forEach(p => {
      p.from = Math.floor(Math.random() * nodes.length);
      p.to = getConnectedNode(p.from);
    });

    /* Track stardust & shockwave particles */
    let frameId;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      /* Update & draw nodes */
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        n.pulse += 0.015;
      });

      /* Faint golden network connections */
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx   = nodes[j].x - nodes[i].x;
          const dy   = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.07;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(245, 158, 11, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      /* Subtle breathing nodes */
      nodes.forEach(n => {
        const alpha = 0.15 + Math.sin(n.pulse) * 0.08;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(253, 230, 138, ${alpha})`;
        ctx.fill();
      });

      /* Traveling energy pulses */
      pulses.forEach(p => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.from = p.to;
          p.to = getConnectedNode(p.from);
        }
        const nA = nodes[p.from];
        const nB = nodes[p.to];
        if (nA && nB) {
          const px = nA.x + (nB.x - nA.x) * p.progress;
          const py = nA.y + (nB.y - nA.y) * p.progress;
          
          const grad = ctx.createRadialGradient(px, py, 0, px, py, 5);
          grad.addColorStop(0, 'rgba(255, 235, 160, 0.7)');
          grad.addColorStop(1, 'rgba(245, 158, 11, 0)');
          ctx.beginPath();
          ctx.arc(px, py, 5, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }
      });

      /* Render Stardust Particles from mouse movement */
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const pt = particles[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.alpha -= 0.015;
        if (pt.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pt.color}, ${pt.alpha})`;
        ctx.fill();
      }

      /* Render Expanding Shockwave Rings from click */
      const shockwaves = shockwavesRef.current;
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.r += 6;
        sw.alpha -= 0.02;
        if (sw.alpha <= 0 || sw.r > sw.maxR) {
          shockwaves.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(245, 158, 11, ${sw.alpha * 0.5})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      frameId = requestAnimationFrame(draw);
    };

    draw();

    gsap.set(canvas, { visibility: 'visible' });
    gsap.to(canvas, { opacity: 1, duration: 2.0, delay: 0.8, ease: 'power1.out' });

    return () => cancelAnimationFrame(frameId);
  }, []);

  /* ── Interactive Stardust Trail & Click Shockwaves ── */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || prefersReducedMotion()) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      /* Spawn 1-2 stardust particles on move */
      if (Math.random() < 0.6) {
        particlesRef.current.push({
          x, y,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8 - 0.3,
          size: Math.random() * 2 + 0.8,
          alpha: 0.7,
          color: Math.random() > 0.3 ? '245, 158, 11' : '0, 240, 255',
        });
      }
    };

    const handleClick = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      /* Spawn expanding energy shockwave ring */
      shockwavesRef.current.push({
        x, y, r: 10, maxR: 280, alpha: 0.9
      });

      /* Spawn burst of golden star particles */
      for (let i = 0; i < 18; i++) {
        const angle = (Math.PI * 2 * i) / 18;
        const speed = Math.random() * 3 + 1.5;
        particlesRef.current.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2.5 + 1,
          alpha: 0.9,
          color: '253, 230, 138',
        });
      }
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('click', handleClick);
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('click', handleClick);
    };
  }, []);

  /* ── Mouse Depth Parallax & Magnetic Button Effect ── */
  const initMouseParallax = useCallback(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia('(max-width: 768px)').matches) return;
    if (prefersReducedMotion()) return;

    /* Plane parallax quickTo setters */
    const qVideoX   = gsap.quickTo(videoWrapRef.current,  'x', { duration: 1.4, ease: 'power1.out' });
    const qVideoY   = gsap.quickTo(videoWrapRef.current,  'y', { duration: 1.4, ease: 'power1.out' });
    const qBgX      = gsap.quickTo(bgLayerRef.current,    'x', { duration: 1.8, ease: 'power1.out' });
    const qBgY      = gsap.quickTo(bgLayerRef.current,    'y', { duration: 1.8, ease: 'power1.out' });
    const qCanvasX  = gsap.quickTo(canvasRef.current,     'x', { duration: 1.6, ease: 'power1.out' });
    const qCanvasY  = gsap.quickTo(canvasRef.current,     'y', { duration: 1.6, ease: 'power1.out' });
    const qContentX = gsap.quickTo(contentRef.current,    'x', { duration: 1.0, ease: 'power1.out' });
    const qContentY = gsap.quickTo(contentRef.current,    'y', { duration: 1.0, ease: 'power1.out' });

    const handleMouseMove = (e) => {
      const rect  = hero.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      const nx    = (e.clientX - cx) / (rect.width  / 2); // -1 → +1
      const ny    = (e.clientY - cy) / (rect.height / 2);

      qVideoX(nx   * 2.0);  qVideoY(ny   * 2.0);
      qBgX(nx      * 4.0);  qBgY(ny      * 4.0);
      qCanvasX(nx  * 2.5);  qCanvasY(ny  * 2.5);
      qContentX(nx * 0.5);  qContentY(ny * 0.5);
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  /* ── GSAP Intro Master Timeline + Ambient Breathing + Floating Badges + Scroll Exit ── */
  useEffect(() => {
    const reduced = prefersReducedMotion();

    let canvasCleanup;
    if (!reduced) canvasCleanup = initCanvas();

    let mouseCleanup;
    if (!reduced) mouseCleanup = initMouseParallax();

    const gsapCleanup = createGsapScope(heroRef, () => {

      const contentElements = [
        brandRef.current, mottoRef.current, mottoLineRef.current,
        titleLine1Ref.current, titleLine2Ref.current, subtextRef.current,
        ctaRef.current, scrollIndRef.current
      ].filter(Boolean);

      if (reduced) {
        /* Reduced motion fallback — make content instantly visible */
        gsap.set(contentElements, { visibility: 'visible', opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)', scaleX: 1 });
        gsap.set(videoWrapRef.current, { opacity: 1, scale: 1 });
      } else {

        /* ────── 1. PREVENT FOUC: SET INITIAL HIDDEN STATES AT 0.0s ────── */
        gsap.set(contentElements, { visibility: 'visible' });

        /* ────── 2. MASTER ENTRANCE TIMELINE ────── */
        const masterTl = gsap.timeline({
          defaults: { ease: 'power3.out' },
          onComplete: () => {
            /* Start Chevron Yoyo */
            gsap.to(scrollChevronRef.current, {
              y: 7, duration: 1.0, ease: 'sine.inOut', yoyo: true, repeat: -1
            });

            /* Background slow breathing cycle */
            gsap.to(videoWrapRef.current, {
              scale: 1.018,
              duration: 7,
              ease: 'sine.inOut',
              yoyo: true,
              repeat: -1
            });

            /* Atmospheric overlay breathing */
            gsap.to(bgLayerRef.current, {
              opacity: 0.72,
              duration: 6.5,
              ease: 'sine.inOut',
              yoyo: true,
              repeat: -1
            });
          }
        });

        /* 0.0s: Background establishes immediately */
        masterTl.fromTo(videoWrapRef.current,
          { opacity: 1, scale: 1.03 },
          { scale: 1, duration: 1.5, ease: 'power2.out' },
          0.0
        );

        /* 0.15s: Reveal AAA 2 INNOVATE */
        masterTl.fromTo(brandRef.current,
          { opacity: 0, y: 15, letterSpacing: '0.44em' },
          { opacity: 1, y: 0,  letterSpacing: '0.28em', duration: 0.7 },
          0.15
        );

        /* 0.55s: Reveal Motto */
        masterTl.fromTo(mottoRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          0.55
        );

        /* 0.75s: Motto line */
        masterTl.fromTo(mottoLineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.7, ease: 'power2.inOut', transformOrigin: 'center center' },
          0.75
        );

        /* 0.90s: Main Headline Line 1 wipe */
        masterTl.fromTo(titleLine1Ref.current,
          { opacity: 0, y: 20, clipPath: 'inset(0% 0% 100% 0%)' },
          { opacity: 1, y: 0,  clipPath: 'inset(0% 0% 0% 0%)', duration: 1.0, ease: 'power3.out' },
          0.90
        );

        /* 1.05s: Main Headline Line 2 wipe */
        masterTl.fromTo(titleLine2Ref.current,
          { opacity: 0, y: 20, clipPath: 'inset(0% 0% 100% 0%)' },
          { opacity: 1, y: 0,  clipPath: 'inset(0% 0% 0% 0%)', duration: 1.0, ease: 'power3.out' },
          1.05
        );


        /* 1.95s: Reveal supporting copy */
        masterTl.fromTo(subtextRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          1.95
        );

        /* 2.20s: Reveal Action Buttons */
        masterTl.fromTo(ctaRef.current,
          { opacity: 0, y: 12, scale: 0.98 },
          { opacity: 1, y: 0,  scale: 1, duration: 0.6, ease: 'power2.out' },
          2.20
        );

        /* 2.45s: Reveal Scroll Indicator */
        masterTl.fromTo(scrollIndRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          2.45
        );
        masterTl.fromTo(scrollLineRef.current,
          { scaleY: 0 },
          { scaleY: 1, duration: 0.5, ease: 'power2.inOut', transformOrigin: 'top center' },
          2.45
        );
      }

      /* ────── CAMERA PUSH SCROLL EXIT ────── */
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;

          /* Background video camera push */
          gsap.set(videoWrapRef.current, {
            scale: 1.0 + p * 0.08,
            y: -p * 45,
            force3D: true,
          });

          /* Atmosphere darkens */
          if (bgLayerRef.current) {
            gsap.set(bgLayerRef.current, {
              opacity: 0.58 + p * 0.42,
            });
          }

          /* Brand & Motto fade earlier */
          if (brandRef.current) gsap.set(brandRef.current, { opacity: Math.max(0, 1 - p * 3.5) });
          if (mottoRef.current) gsap.set(mottoRef.current, { opacity: Math.max(0, 1 - p * 3.5) });
          if (mottoLineRef.current) gsap.set(mottoLineRef.current, { opacity: Math.max(0, 1 - p * 3.5) });

          /* Headlines & Copy fade */
          if (titleLine1Ref.current) gsap.set(titleLine1Ref.current, { y: -p * 40, opacity: Math.max(0, 1 - p * 2.0) });
          if (titleLine2Ref.current) gsap.set(titleLine2Ref.current, { y: -p * 35, opacity: Math.max(0, 1 - p * 2.0) });
          if (subtextRef.current) gsap.set(subtextRef.current, { opacity: Math.max(0, 1 - p * 3.5), y: -p * 30 });
          if (ctaRef.current)     gsap.set(ctaRef.current,     { opacity: Math.max(0, 1 - p * 3.5), y: -p * 25 });


          /* Scroll indicator fades */
          if (scrollIndRef.current) gsap.set(scrollIndRef.current, { opacity: Math.max(0, 1 - p * 8) });

          /* Golden conduit beam */
          if (transitionBeamRef.current) {
            const beamProgress = Math.max(0, (p - 0.3) / 0.7);
            gsap.set(transitionBeamRef.current, {
              scaleY: beamProgress,
              opacity: Math.min(0.75, beamProgress * 1.2),
            });
          }
        }
      });

    });

    return () => {
      if (canvasCleanup)  canvasCleanup();
      if (mouseCleanup)   mouseCleanup();
      gsapCleanup();
    };
  }, [initCanvas, initMouseParallax]);

  /* ── Smooth Scroll Helper ── */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetPosition = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  /* ── CTA Button Magnetic Micro-Interaction ── */
  const handleCtaMove = (e) => {
    if (prefersReducedMotion() || !primaryBtnRef.current) return;
    const btn = primaryBtnRef.current;
    const rect = btn.getBoundingClientRect();
    const bx = e.clientX - (rect.left + rect.width / 2);
    const by = e.clientY - (rect.top + rect.height / 2);
    btn.style.transform = `translate(${bx * 0.25}px, ${by * 0.25}px) scale(1.04)`;
    btn.style.boxShadow = '0 16px 40px rgba(245, 158, 11, 0.45), 0 0 20px rgba(34, 1, 80, 0.8)';
  };

  const handleCtaLeave = () => {
    if (!primaryBtnRef.current) return;
    const btn = primaryBtnRef.current;
    btn.style.transform = 'translate(0px, 0px) scale(1)';
    btn.style.boxShadow = '0 6px 22px rgba(34,1,80,0.35)';
  };

  /* ─────────────────────────── RENDER ─────────────────────────── */
  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#0a0015',
        display: 'block',
        overflow: 'hidden',
      }}
    >

      {/* ── Plane 1: Background Video ── */}
      <div ref={videoWrapRef} style={{ display: 'block', width: '100%', opacity: 1, willChange: 'transform' }}>
        <video
          autoPlay loop muted playsInline preload="auto"
          style={{ display: 'block', width: '100%', height: 'auto' }}
        >
          <source src="/hero-video.mp4?v=cleaned" type="video/mp4" />
        </video>
      </div>

      {/* ── Plane 2: Living Global Network & Stardust Canvas ── */}
      <NetworkCanvas canvasRef={canvasRef} />

      {/* ── Plane 2 & 3: Atmospheric Layer & Vignette ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 3,
        background: 'linear-gradient(to bottom, rgba(10,0,21,0.10) 0%, transparent 22%, transparent 50%, rgba(10,0,21,0.35) 76%, rgba(10,0,21,0.88) 100%)',
      }} />

      <div ref={bgLayerRef} style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 3,
        background: 'radial-gradient(ellipse 70% 60% at 50% 38%, rgba(5,0,18,0.58) 0%, transparent 100%)',
        willChange: 'transform, opacity',
      }} />


      {/* ── Plane 4: Foreground Content ── */}
      <div ref={contentRef} style={{
        position: 'absolute', inset: 0, zIndex: 5,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        paddingBottom: '5vh',
        willChange: 'transform',
      }}>
        <div style={{ textAlign: 'center', padding: '0 24px', width: '100%', maxWidth: '920px', margin: '0 auto' }}>

          {/* ── AAA 2 INNOVATE ── */}
          <div
            ref={brandRef}
            style={{
              fontSize: 'clamp(14px, 2.2vw, 24px)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              fontFamily: "'Orbitron', sans-serif",
              marginBottom: '14px',
              opacity: 0,
              visibility: 'hidden',
              willChange: 'transform, opacity',
              textShadow: '0 0 20px rgba(255,255,255,0.4)',
            }}
          >
            AAA 2 Innovate
          </div>

          {/* ── Motto Signature Block ── */}
          <div style={{ display: 'inline-block', textAlign: 'center', marginBottom: '32px' }}>
            <div
              ref={mottoRef}
              style={{
                fontSize: 'clamp(11px, 1.2vw, 13px)',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '0.12em',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontStyle: 'italic',
                marginBottom: '8px',
                opacity: 0,
                visibility: 'hidden',
                willChange: 'transform, opacity',
              }}
            >
              Innovation is our Addiction
            </div>
            {/* Signature Line */}
            <div
              ref={mottoLineRef}
              style={{
                height: '1px',
                width: '100%',
                backgroundColor: 'rgba(245, 158, 11, 0.45)',
                boxShadow: '0 0 8px rgba(245, 158, 11, 0.6)',
                transform: 'scaleX(0)',
                transformOrigin: 'center center',
                visibility: 'hidden',
                willChange: 'transform',
              }}
            />
          </div>

          {/* ── Main Headline ── */}
          <div style={{ marginBottom: '22px', overflow: 'visible' }}>
            <div
              ref={titleLine1Ref}
              style={{
                display: 'block',
                fontSize: 'clamp(26px, 4.4vw, 52px)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.18,
                fontFamily: "'Orbitron', sans-serif",
                textShadow: '0 2px 28px rgba(0,0,0,0.95), 0 0 40px rgba(255,255,255,0.2)',
                opacity: 0,
                visibility: 'hidden',
                clipPath: 'inset(0% 0% 100% 0%)',
                letterSpacing: '-0.01em',
                willChange: 'transform, opacity, clip-path',
              }}
            >
              Architecting the Future of
            </div>
            <div
              ref={titleLine2Ref}
              style={{
                display: 'block',
                fontSize: 'clamp(26px, 4.4vw, 52px)',
                fontWeight: 800,
                lineHeight: 1.18,
                fontFamily: "'Orbitron', sans-serif",
                opacity: 0,
                visibility: 'hidden',
                clipPath: 'inset(0% 0% 100% 0%)',
                letterSpacing: '-0.01em',
                willChange: 'transform, opacity, clip-path',
                marginTop: '4px',
              }}
            >
              <span className="liquid-gold-gradient-text">
                Global Commerce &amp; Innovation
              </span>
            </div>
          </div>

          {/* ── Supporting Copy ── */}
          <p
            ref={subtextRef}
            style={{
              fontSize: 'clamp(13px, 1.4vw, 15px)',
              color: 'rgba(241,245,249,0.68)',
              maxWidth: '540px',
              margin: '0 auto 40px auto',
              lineHeight: 1.85,
              textAlign: 'center',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              opacity: 0,
              visibility: 'hidden',
              letterSpacing: '0.015em',
              willChange: 'transform, opacity',
            }}
          >
            Product sourcing, precision manufacturing, and technology —<br />
            connected through one global ecosystem.
          </p>

          {/* ── Action Buttons ── */}
          <div
            ref={ctaRef}
            style={{
              display: 'flex', justifyContent: 'center',
              alignItems: 'center', gap: '16px',
              flexWrap: 'wrap', opacity: 0,
              visibility: 'hidden',
              willChange: 'transform, opacity',
            }}
          >
            {/* Primary CTA — Deep #220150 Brand Purple with Amber Glow */}
            <button
              ref={primaryBtnRef}
              onClick={() => scrollToSection('services')}
              onMouseMove={handleCtaMove}
              onMouseLeave={handleCtaLeave}
              style={{
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#220150',
                border: '1px solid rgba(245, 158, 11, 0.45)',
                backdropFilter: 'blur(12px)',
                padding: '16px 36px',
                fontSize: '12px',
                fontWeight: 700,
                color: '#FFFFFF',
                borderRadius: '50px',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '1.8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
                boxShadow: '0 6px 22px rgba(34,1,80,0.5), 0 0 15px rgba(245,158,11,0.2)',
                fontFamily: "'Chakra Petch', sans-serif",
              }}
            >
              <span className="hero-btn-sweep" />
              Explore Our Capabilities <ArrowRight size={14} className="hero-arrow" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.18)',
                padding: '16px 28px',
                fontSize: '11px', fontWeight: 600,
                color: 'rgba(255,255,255,0.65)',
                borderRadius: '50px', cursor: 'pointer',
                textTransform: 'uppercase', letterSpacing: '1.6px',
                transition: 'all 0.3s ease',
                fontFamily: "'Chakra Petch', sans-serif",
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color='#FFFFFF'; e.currentTarget.style.borderColor='rgba(255,255,255,0.45)'; e.currentTarget.style.backgroundColor='rgba(255,255,255,0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color='rgba(255,255,255,0.65)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.18)'; e.currentTarget.style.backgroundColor='rgba(255,255,255,0.03)'; }}
            >
              Contact Us
            </button>
          </div>

        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div
        ref={scrollIndRef}
        onClick={() => scrollToSection('about')}
        style={{
          position: 'absolute', bottom: '24px', left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer', zIndex: 10, opacity: 0,
          visibility: 'hidden',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        }}
      >
        <div
          ref={scrollLineRef}
          style={{
            width: '1px', height: '32px',
            backgroundColor: 'rgba(245, 158, 11, 0.40)',
            boxShadow: '0 0 8px rgba(245, 158, 11, 0.6)',
            transformOrigin: 'top center',
          }}
        />
        <div
          ref={scrollChevronRef}
          style={{ color: 'rgba(245, 158, 11, 0.70)', display: 'flex' }}
        >
          <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* ── Golden Transition Conduit to Next Section ── */}
      <div
        ref={transitionBeamRef}
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1px',
          height: '60px',
          background: 'linear-gradient(to bottom, rgba(245, 158, 11, 0.6), rgba(245, 158, 11, 0))',
          transformOrigin: 'top center',
          opacity: 0,
          zIndex: 4,
          pointerEvents: 'none',
          willChange: 'transform, opacity',
        }}
      />

    </section>
  );
};

export default VideoHero;
