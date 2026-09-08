import React, { useRef, useEffect, useState } from 'react';

/**
 * SafeAutoplayVideo
 * Clean, production-ready video component tailored for seamless cross-browser autoplay
 * (including iOS Safari, iPadOS, Android, and Desktop Chrome) without aggressive hacks.
 *
 * Key features:
 * 1. Strictly enforces muted + playsinline properties before play.
 * 2. Listens to `canplay` and `loadeddata` so initial above-the-fold media plays as soon as data arrives.
 * 3. Pauses off-screen videos using IntersectionObserver when enabled.
 * 4. Gracefully catches unhandled play() rejections without throwing or looping.
 */
const SafeAutoplayVideo = ({
  src,
  poster,
  style,
  className,
  loop = true,
  playsInline = true,
  muted = true,
  autoPlay = true,
  preload = 'metadata',
  useIntersectionObserver = true,
  threshold = 0.05,
  rootMargin = '0px',
  onError,
  ...props
}) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [hasError, setHasError] = useState(false);
  const [isReady, setIsReady] = useState(false);
  // If not using intersection observer (e.g. Hero), load immediately
  const [isNearViewport, setIsNearViewport] = useState(!useIntersectionObserver);
  const [isVisibleInView, setIsVisibleInView] = useState(!useIntersectionObserver);

  // Viewport proximity detector for lazy video network loading
  useEffect(() => {
    if (!useIntersectionObserver || isNearViewport) return;
    const target = containerRef.current;
    if (!target || typeof IntersectionObserver === 'undefined') {
      setIsNearViewport(true);
      setIsVisibleInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsNearViewport(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [useIntersectionObserver, isNearViewport, rootMargin]);

  // Active visibility observer for play/pause control
  useEffect(() => {
    if (!useIntersectionObserver) return;
    const target = containerRef.current;
    if (!target || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisibleInView(entry.isIntersecting);
        });
      },
      { threshold }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [useIntersectionObserver, threshold]);

  // Handle video playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src || !isNearViewport || hasError) return;

    let isCancelled = false;

    if (muted) {
      video.muted = true;
      video.defaultMuted = true;
    }
    if (playsInline) {
      video.playsInline = true;
    }

    const attemptPlay = () => {
      if (isCancelled || !video || !autoPlay) return;
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Gracefully ignore autoplay restrictions
          });
        }
      }
    };

    const attemptPause = () => {
      if (isCancelled || !video) return;
      if (!video.paused) {
        video.pause();
      }
    };

    if (isVisibleInView) {
      attemptPlay();
    } else {
      attemptPause();
    }

    const handleReady = () => {
      if (isCancelled) return;
      setIsReady(true);
      if (isVisibleInView) {
        attemptPlay();
      }
    };

    video.addEventListener('loadeddata', handleReady);
    video.addEventListener('canplay', handleReady);
    video.addEventListener('playing', handleReady);

    if (video.readyState >= 2) {
      setIsReady(true);
      if (isVisibleInView) attemptPlay();
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        attemptPause();
      } else if (isVisibleInView && autoPlay) {
        attemptPlay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isCancelled = true;
      video.removeEventListener('loadeddata', handleReady);
      video.removeEventListener('canplay', handleReady);
      video.removeEventListener('playing', handleReady);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [src, isNearViewport, isVisibleInView, hasError, autoPlay, muted, playsInline]);

  const handleVideoError = (e) => {
    setHasError(true);
    if (onError) onError(e);
  };

  return (
    <div
      ref={containerRef}
      className={`safe-video-container ${className || ''}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: '#0a0015',
        ...style
      }}
    >
      {/* High-fidelity poster placeholder (visible before load or on error) */}
      {poster && (!isReady || hasError) && (
        <img
          src={poster}
          alt=""
          role="presentation"
          loading="lazy"
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 1,
            transition: 'opacity 0.6s ease',
            opacity: hasError || !isReady ? 1 : 0,
            pointerEvents: 'none'
          }}
        />
      )}

      {/* Actual video element (only loads network stream when near viewport) */}
      {isNearViewport && !hasError && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          loop={loop}
          muted={muted}
          autoPlay={autoPlay && isVisibleInView}
          playsInline={playsInline}
          preload={preload}
          disablePictureInPicture
          disableRemotePlayback
          tabIndex={-1}
          onError={handleVideoError}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 2,
            transition: 'opacity 0.5s ease',
            opacity: isReady ? 1 : 0
          }}
          {...props}
        />
      )}
    </div>
  );
};

export default SafeAutoplayVideo;
