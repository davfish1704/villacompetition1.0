// Hero Configuration
// Change HERO_MODE to switch between display types:
// 'image' - Single static image (slide-1.jpg)
// 'carousel' - Auto-playing image carousel (slide-1/2/3.jpg)
// 'video' - Background video (video.mp4)

export const HERO_MODE = 'image'; // 'image' | 'carousel' | 'video'

export const HERO_SLIDES = [
  '/media/hero/slide-1.jpg',
  '/media/hero/slide-2.jpg',
  '/media/hero/slide-3.jpg',
];

export const HERO_VIDEO = '/media/hero/video.mp4';

// Carousel settings (only used when HERO_MODE = 'carousel')
export const CAROUSEL_CONFIG = {
  autoplay: true,
  interval: 5000, // 5 seconds between slides
  showDots: true,
  showArrows: true,
  transitionDuration: 0.8, // seconds
};

// Video settings (only used when HERO_MODE = 'video')
export const VIDEO_CONFIG = {
  muted: true,
  loop: true,
  playsInline: true,
  poster: '/media/hero/slide-1.jpg', // Fallback image
};
