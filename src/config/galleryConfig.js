// Gallery Configuration
// Images are auto-categorized based on filename patterns
// Drop new images into /public/media/gallery/ and they auto-appear

export const GALLERY_CATEGORIES = {
  all: 'All Photos',
  bedrooms: '5 Bedrooms',
  living: 'Living & Kitchen',
  outdoor: 'Garden & Pool',
  exterior: 'Exterior & Garage',
};

// Filename patterns for auto-categorization
export const CATEGORY_PATTERNS = {
  bedrooms: /^bedroom-/i,
  living: /^(kitchen|living-room)/i,
  outdoor: /^(garden|pool)/i,
  exterior: /^(exterior-|garage)/i,
};

// Expected gallery images (for reference)
// These will be auto-scanned at runtime
export const EXPECTED_IMAGES = {
  bedrooms: [
    'bedroom-1.jpg', // Master bedroom
    'bedroom-2.jpg', // Guest bedroom 1
    'bedroom-3.jpg', // Guest bedroom 2
    'bedroom-4.jpg', // Guest bedroom 3
    'bedroom-5.jpg', // Guest bedroom 4
  ],
  living: [
    'kitchen.jpg',
    'living-room.jpg',
  ],
  outdoor: [
    'garden.jpg',
    'pool.jpg',
  ],
  exterior: [
    'exterior-1.jpg', // Villa front
    'exterior-2.jpg', // Villa side/back
    'garage.jpg',
  ],
};

// Gallery display settings
export const GALLERY_CONFIG = {
  columns: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    large: 4,
  },
  gap: 16, // pixels
  lightboxEnabled: true,
  lazyLoad: true,
  blurPlaceholder: true,
};
