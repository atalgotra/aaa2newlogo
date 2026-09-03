import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SafeAutoplayVideo from '../common/SafeAutoplayVideo';

const ProductShowcaseCard = ({
  title,
  category = 'Product Showcase',
  description,
  videoSrc,
  posterSrc,
  ctaText = null,
  onCtaClick,
  onClick,
  className = '',
  style = {}
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    } else if (onCtaClick) {
      onCtaClick(e);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`product-video-card ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick(e);
        }
      }}
      style={{
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        cursor: 'pointer',
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
      {/* Background Video / Poster */}
      {videoSrc ? (
        <SafeAutoplayVideo
          src={videoSrc}
          poster={posterSrc}
          useIntersectionObserver={true}
          preload="metadata"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            zIndex: 1,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
      ) : (
        posterSrc && (
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
              transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
        )
      )}

      {/* Bottom Text Shadow Gradient (Clean & transparent, darkens on hover for expanded content) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isHovered
            ? 'linear-gradient(to top, rgba(10, 0, 25, 0.95) 0%, rgba(10, 0, 25, 0.65) 45%, transparent 80%)'
            : 'linear-gradient(to top, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.30) 35%, transparent 65%)',
          zIndex: 2,
          pointerEvents: 'none',
          transition: 'background 0.5s ease'
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
          gap: '6px'
        }}
      >
        <span
          style={{
            fontSize: '11px',
            fontWeight: 700,
            color: '#CBD5E1',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            opacity: 0.9
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
            textShadow: '0 2px 10px rgba(0,0,0,0.6)'
          }}
        >
          {title}
        </h3>

        {/* Expandable Description & CTA Reveal on Hover */}
        <div
          style={{
            maxHeight: isHovered ? '200px' : '0px',
            opacity: isHovered ? 1 : 0,
            overflow: 'hidden',
            transform: isHovered ? 'translateY(0)' : 'translateY(12px)',
            transition: 'max-height 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'max-height, opacity, transform',
            pointerEvents: isHovered ? 'auto' : 'none'
          }}
        >
          <p
            style={{
              color: '#E2E8F0',
              fontSize: '14px',
              lineHeight: 1.55,
              margin: '6px 0 16px 0',
              maxWidth: '94%'
            }}
          >
            {description}
          </p>

          {ctaText && (
            <button
              onClick={onCtaClick}
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                fontSize: '13px',
                marginBottom: '2px',
                cursor: 'pointer'
              }}
            >
              {ctaText} <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcaseCard;
