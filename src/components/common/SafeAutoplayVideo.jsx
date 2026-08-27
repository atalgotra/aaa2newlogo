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
  preload = 'auto',
  useIntersectionObserver = true,
  threshold = 0.15,
  onError,
  ...props
}) => {
  const videoRef = useRef(null);
  const [hasError, setHasError] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src || hasError) return;

    let isCancelled = false;
    let isIntersecting = !useIntersectionObserver;

    // Enforce essential DOM properties for Safari WebKit autoplay policies
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
            // Gracefully ignore autoplay restrictions (e.g. low power mode)
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

    // When media data is ready, trigger playback and reveal video
    const handleReadyToPlay = () => {
      if (isCancelled || !video) return;
      setIsReady(true);
      if (isIntersecting) {
        attemptPlay();
      }
    };

    video.addEventListener('loadeddata', handleReadyToPlay);
    video.addEventListener('canplay', handleReadyToPlay);
    video.addEventListener('playing', handleReadyToPlay);

    // If already buffered enough data, play immediately and mark ready
    if (video.readyState >= 2) {
      setIsReady(true);
      if (isIntersecting || !useIntersectionObserver) {
        attemptPlay();
      }
    } else if (!useIntersectionObserver) {
      attemptPlay();
    }

    let observer = null;
    if (useIntersectionObserver && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (isCancelled) return;
            isIntersecting = entry.isIntersecting;
            if (entry.isIntersecting) {
              attemptPlay();
            } else {
              attemptPause();
            }
          });
        },
        { threshold }
      );
      observer.observe(video);
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        attemptPause();
      } else if (isIntersecting && autoPlay) {
        attemptPlay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isCancelled = true;
      video.removeEventListener('loadeddata', handleReadyToPlay);
      video.removeEventListener('canplay', handleReadyToPlay);
      video.removeEventListener('playing', handleReadyToPlay);
      if (observer) {
        observer.disconnect();
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [src, hasError, autoPlay, muted, playsInline, useIntersectionObserver, threshold]);

  const handleVideoError = (e) => {
    setHasError(true);
    if (onError) onError(e);
  };

  if (hasError && poster) {
    return (
      <img
        src={poster}
        alt=""
        role="presentation"
        className={className}
        style={{ objectFit: 'cover', objectPosition: 'center', ...style }}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      loop={loop}
      muted={muted}
      autoPlay={autoPlay}
      playsInline={playsInline}
      preload={preload}
      disablePictureInPicture
      disableRemotePlayback
      tabIndex={-1}
      onError={handleVideoError}
      className={className}
      style={style}
      {...props}
    />
  );
};

export default SafeAutoplayVideo;
