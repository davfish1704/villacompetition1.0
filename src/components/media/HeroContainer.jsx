import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { HERO_MODE, HERO_SLIDES, HERO_VIDEO, CAROUSEL_CONFIG, VIDEO_CONFIG } from '@/config/heroMode';

const HeroContainer = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Carousel auto-play
  useEffect(() => {
    if (HERO_MODE !== 'carousel' || !isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, CAROUSEL_CONFIG.interval);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  // Render based on mode
  const renderBackground = () => {
    switch (HERO_MODE) {
      case 'video':
        return (
          <div className="absolute inset-0">
            <video
              autoPlay
              muted={VIDEO_CONFIG.muted}
              loop={VIDEO_CONFIG.loop}
              playsInline={VIDEO_CONFIG.playsInline}
              poster={VIDEO_CONFIG.poster}
              onLoadedData={() => setIsVideoLoaded(true)}
              className="w-full h-full object-cover"
            >
              <source src={HERO_VIDEO} type="video/mp4" />
            </video>
            {/* Video Loading State */}
            {!isVideoLoaded && (
              <div className="absolute inset-0 bg-dark">
                <img
                  src={VIDEO_CONFIG.poster}
                  alt="Loading..."
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        );

      case 'carousel':
        return (
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: CAROUSEL_CONFIG.transitionDuration }}
                className="absolute inset-0"
              >
                <img
                  src={HERO_SLIDES[currentSlide]}
                  alt={`Slide ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            {CAROUSEL_CONFIG.showArrows && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-dark/70 transition-colors z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-dark/70 transition-colors z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute bottom-24 right-4 w-10 h-10 rounded-full bg-dark/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-dark/70 transition-colors z-10"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Dots */}
            {CAROUSEL_CONFIG.showDots && (
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {HERO_SLIDES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? 'w-8 bg-gold'
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        );

      case 'image':
      default:
        return (
          <div className="absolute inset-0">
            <img
              src={HERO_SLIDES[0]}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
        );
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      {renderBackground()}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};

export default HeroContainer;
