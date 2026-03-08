import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const VideoTour = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowOverlay(false);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoClick = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  return (
    <section id="tour" className="py-20 bg-dark">
      <div className="section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
            <span className="text-sm font-medium text-gold tracking-wider uppercase">
              Virtual Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            Tour the <span className="gold-text">Villa</span>
          </h2>
          <p className="text-lg text-gray-400">
            Experience the luxury and serenity of your potential new home. 
            Take a virtual walkthrough of this stunning Bali property.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative aspect-video bg-dark-50 rounded-2xl overflow-hidden border border-dark-100 group">
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover cursor-pointer"
              poster="/media/hero/slide-1.jpg"
              muted
              loop
              playsInline
              onClick={handleVideoClick}
            >
              <source src="/media/villa-tour.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Overlay */}
            {showOverlay && (
              <div 
                className="absolute inset-0 bg-dark/40 flex items-center justify-center cursor-pointer transition-opacity"
                onClick={handlePlay}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-24 h-24 rounded-full gold-gradient flex items-center justify-center shadow-2xl"
                >
                  <Play className="w-10 h-10 text-dark ml-1" fill="currentColor" />
                </motion.div>
              </div>
            )}

            {/* Video Caption */}
            {showOverlay && (
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold text-white font-display text-shadow-lg">
                  Experience the Villa
                </h3>
                <p className="text-gray-300 text-shadow mt-1">
                  4K Virtual Tour • 2:30 min
                </p>
              </div>
            )}

            {/* Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={isPlaying ? handlePause : handlePlay}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5 ml-0.5" />
                    )}
                  </button>
                </div>

                <button
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Video Fallback Message */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Video tour coming soon. Check back for the full 4K walkthrough experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoTour;
