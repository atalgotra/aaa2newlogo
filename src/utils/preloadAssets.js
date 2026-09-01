/**
 * Background media preloader utility to preheat browser cache for
 * homepage showcase videos, high-res posters, and key section images.
 */

const CRITICAL_IMAGES = [
  'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/ethical_sustainability.png',
  'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/products_bags.png',
  'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/products_jewellery.png',
  'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/design.png',
  'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/manufacturing.png',
  'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/quality_inspection.png',
  'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/warehousing.png',
  'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/logistics.png',
  'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/ai_tech.png'
];

const CRITICAL_VIDEOS = [
  'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/6a18173c8cb4a.mp4',
  'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/meta_ai_video.mp4',
  'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/fine_jewellery_hero.mp4'
];

/**
 * Preload a single image into browser cache
 */
export const preloadImage = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = resolve;
    img.onerror = resolve; // Don't block on error
  });
};

/**
 * Preload video metadata into browser cache
 */
export const preloadVideo = (url) => {
  return new Promise((resolve) => {
    const video = document.createElement('video');
    video.src = url;
    video.preload = 'metadata';
    video.onloadedmetadata = resolve;
    video.onerror = resolve;
  });
};

/**
 * Executes non-blocking background asset preloading during idle frames
 */
export const preloadAllCriticalMedia = () => {
  const executePreload = () => {
    // Preload all critical images in parallel
    CRITICAL_IMAGES.forEach((url) => {
      preloadImage(url);
    });

    // Sequentially preload product videos with light delay to save bandwidth
    CRITICAL_VIDEOS.forEach((videoUrl, idx) => {
      setTimeout(() => {
        preloadVideo(videoUrl);
      }, idx * 400);
    });
  };

  if (typeof window !== 'undefined') {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(executePreload, { timeout: 2000 });
    } else {
      setTimeout(executePreload, 300);
    }
  }
};
