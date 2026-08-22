import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const ProductVideoCard = ({
  title,
  description,
  videoSrc,
  posterSrc,
  category = 'Product Showcase',
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
        backgroundColor: '#220150',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: isHovered 
          ? '0 20px 45px rgba(0, 0, 0, 0.6)' 
          : '0 10px 30px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease',
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        minHeight: '420px',
        ...style
      }}
    >
      {/* Background Poster Image (Always rendered as fallback & base layer) */}
      {posterSrc && (
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
            zIndex: 0,
            opacity: hasError || !videoSrc ? 1 : isHovered ? 0.2 : 0.85,
            transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.06)' : 'scale(1)'
          }}
        />
      )}

      {/* HTML5 Background Video */}
      {videoSrc && !hasError && (
        <video
          ref={videoRef}
          src={videoSrc}
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
            zIndex: 1,
            opacity: 1,
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
      )}

      {/* #220150 Cinematic Dark Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isHovered
            ? 'linear-gradient(180deg, rgba(34, 1, 80, 0.2) 0%, rgba(34, 1, 80, 0.85) 60%, #220150 100%)'
            : 'linear-gradient(180deg, rgba(34, 1, 80, 0.1) 0%, rgba(34, 1, 80, 0.75) 55%, #220150 100%)',
          zIndex: 2,
          transition: 'background 0.5s ease',
          pointerEvents: 'none'
        }}
      />

      {/* Card Content Header & Body */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          padding: '32px',
          color: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          gap: '12px'
        }}
      >
        <span
          style={{
            fontSize: '12px',
            fontWeight: 700,
            color: '#E2E8F0',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            opacity: 0.85
          }}
        >
          {category}
        </span>

        <h3
          style={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#FFFFFF',
            margin: 0,
            fontFamily: "'Outfit', sans-serif",
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: '#CBD5E1',
            fontSize: '15px',
            lineHeight: 1.6,
            margin: 0,
            maxWidth: '90%'
          }}
        >
          {description}
        </p>

        <div style={{ marginTop: '12px' }}>
          <button
            onClick={onCtaClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              backgroundColor: isHovered ? '#2563EB' : 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(8px)'
            }}
          >
            {ctaText} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductVideoCard;
