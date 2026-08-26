import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const ProductShowcaseCard = ({
  title,
  category = 'Product Showcase',
  description,
  videoSrc,
  posterSrc,
  ctaText = 'Discover Line',
  onCtaClick,
  className = '',
  style = {}
}) => {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!videoRef.current || hasError) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {
              // Silently handle browser autoplay policy restriction
            });
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [hasError]);

  return (
    <div
      ref={cardRef}
      className={`product-video-card ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        backgroundColor: '#000000',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: isHovered
          ? '0 20px 45px rgba(0, 0, 0, 0.6), 0 0 25px rgba(99, 102, 241, 0.3)'
          : '0 10px 30px rgba(0, 0, 0, 0.35)',
        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease, border-color 0.6s ease',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        borderColor: isHovered ? 'rgba(99, 102, 241, 0.45)' : 'rgba(255, 255, 255, 0.12)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        minHeight: '340px',
        ...style
      }}
    >
      {/* Fallback Image (Rendered ONLY if no video or on video error) */}
      {(!videoSrc || hasError) && posterSrc && (
        <img
          loading="lazy"
          src={posterSrc}
          alt={title}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            zIndex: 1,
            opacity: 1,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1.001)'
          }}
        />
      )}

      {/* HTML5 Background Video (Magnified from top, trimmed at bottom) */}
      {videoSrc && !hasError && (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setHasError(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            zIndex: 1,
            opacity: 1,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1.001)'
          }}
        />
      )}

      {/* Bottom Text Shadow Gradient (Top is 100% Clear & Untinted) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.45) 30%, transparent 60%)',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      {/* Card Content Header & Body */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          padding: '24px',
          color: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          gap: '8px'
        }}
      >
        <span
          style={{
            fontSize: '11px',
            fontWeight: 700,
            color: '#CBD5E1',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            opacity: 0.85
          }}
        >
          {category}
        </span>

        <h3
          style={{
            fontSize: '22px',
            fontWeight: 800,
            color: '#FFFFFF',
            margin: 0,
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            transition: 'transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {title}
        </h3>

        {/* Expandable Description & CTA Reveal on Hover */}
        <div
          style={{
            maxHeight: isHovered ? '180px' : '0px',
            opacity: isHovered ? 1 : 0,
            overflow: 'hidden',
            transform: isHovered ? 'translateY(0)' : 'translateY(14px)',
            transition: 'max-height 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'max-height, opacity, transform',
            pointerEvents: isHovered ? 'auto' : 'none'
          }}
        >
          <p
            style={{
              color: '#E2E8F0',
              fontSize: '14.5px',
              lineHeight: 1.6,
              margin: '4px 0 16px 0',
              maxWidth: '92%'
            }}
          >
            {description}
          </p>

          <button
            onClick={onCtaClick}
            className="btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              fontSize: '13px',
              marginBottom: '2px'
            }}
          >
            {ctaText} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcaseCard;
