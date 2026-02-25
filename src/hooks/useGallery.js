import { useState, useEffect, useMemo } from 'react';
import { CATEGORY_PATTERNS } from '@/config/galleryConfig';

/**
 * Hook for managing gallery images with auto-categorization
 * Scans /public/media/gallery/ and categorizes images by filename
 */
export const useGallery = () => {
  const [images, setImages] = useState({
    all: [],
    bedrooms: [],
    living: [],
    outdoor: [],
    exterior: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGalleryImages = async () => {
      try {
        setIsLoading(true);
        
        // In a real app, this would scan the directory
        // For now, we'll use a predefined list based on the expected structure
        const galleryImages = [
          // Bedrooms
          { src: '/media/gallery/bedroom-1.jpg', category: 'bedrooms', alt: 'Master Bedroom' },
          { src: '/media/gallery/bedroom-2.jpg', category: 'bedrooms', alt: 'Guest Bedroom 1' },
          { src: '/media/gallery/bedroom-3.jpg', category: 'bedrooms', alt: 'Guest Bedroom 2' },
          { src: '/media/gallery/bedroom-4.jpg', category: 'bedrooms', alt: 'Guest Bedroom 3' },
          { src: '/media/gallery/bedroom-5.jpg', category: 'bedrooms', alt: 'Guest Bedroom 4' },
          // Living & Kitchen
          { src: '/media/gallery/kitchen.jpg', category: 'living', alt: 'Modern Kitchen' },
          { src: '/media/gallery/living-room.jpg', category: 'living', alt: 'Living Room' },
          // Outdoor
          { src: '/media/gallery/garden.jpg', category: 'outdoor', alt: 'Tropical Garden' },
          { src: '/media/gallery/pool.jpg', category: 'outdoor', alt: 'Private Pool' },
          // Exterior
          { src: '/media/gallery/exterior-1.jpg', category: 'exterior', alt: 'Villa Front' },
          { src: '/media/gallery/exterior-2.jpg', category: 'exterior', alt: 'Villa Side View' },
          { src: '/media/gallery/garage.jpg', category: 'exterior', alt: 'Parking Garage' },
        ];

        // Categorize images
        const categorized = {
          all: galleryImages,
          bedrooms: galleryImages.filter(img => img.category === 'bedrooms'),
          living: galleryImages.filter(img => img.category === 'living'),
          outdoor: galleryImages.filter(img => img.category === 'outdoor'),
          exterior: galleryImages.filter(img => img.category === 'exterior'),
        };

        setImages(categorized);
        setError(null);
      } catch (err) {
        console.error('Error loading gallery images:', err);
        setError('Failed to load gallery images');
      } finally {
        setIsLoading(false);
      }
    };

    loadGalleryImages();
  }, []);

  // Get count for each category
  const counts = useMemo(() => ({
    all: images.all.length,
    bedrooms: images.bedrooms.length,
    living: images.living.length,
    outdoor: images.outdoor.length,
    exterior: images.exterior.length,
  }), [images]);

  // Get images by category
  const getImagesByCategory = (category) => {
    return images[category] || images.all;
  };

  return {
    images,
    counts,
    isLoading,
    error,
    getImagesByCategory,
  };
};

/**
 * Categorizes an image based on its filename
 * @param {string} filename - The image filename
 * @returns {string} - The category name
 */
export const categorizeImage = (filename) => {
  for (const [category, pattern] of Object.entries(CATEGORY_PATTERNS)) {
    if (pattern.test(filename)) {
      return category;
    }
  }
  return 'other';
};

export default useGallery;
