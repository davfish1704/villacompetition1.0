import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Grid3X3 } from 'lucide-react';
import { GALLERY_CATEGORIES } from '@/config/galleryConfig';
import GalleryGrid from '@/components/media/GalleryGrid';
import { useGallery } from '@/hooks/useGallery';

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { counts } = useGallery();

  const categories = [
    { key: 'all', label: GALLERY_CATEGORIES.all, count: counts.all },
    { key: 'bedrooms', label: GALLERY_CATEGORIES.bedrooms, count: counts.bedrooms },
    { key: 'living', label: GALLERY_CATEGORIES.living, count: counts.living },
    { key: 'outdoor', label: GALLERY_CATEGORIES.outdoor, count: counts.outdoor },
    { key: 'exterior', label: GALLERY_CATEGORIES.exterior, count: counts.exterior },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-dark-50">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <Camera className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Photo Gallery</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
              Explore the Villa
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Take a virtual tour through La Casa De Villa. Every corner is designed 
              for luxury living in paradise.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.key
                    ? 'bg-gold text-dark'
                    : 'bg-dark-100 text-gray-400 hover:text-white hover:bg-dark-200'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
                {category.label}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === category.key
                    ? 'bg-dark/20'
                    : 'bg-dark-50'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <GalleryGrid activeCategory={activeCategory} />
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-gray-500 mt-8"
          >
            Click on any image to view in full size
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
