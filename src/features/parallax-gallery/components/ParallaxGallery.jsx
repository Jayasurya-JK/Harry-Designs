import { useRef, useEffect, useState } from 'react';
import { useTransform } from 'framer-motion';
import { GALLERY_IMAGES } from '../data/galleryImages';
import { useAutoScroll } from '../hooks/useAutoScroll';
import { useParallaxTransform } from '../hooks/useParallaxTransform';
import GalleryColumn from './GalleryColumn';
import GalleryRow from './GalleryRow';
import { CAROUSEL_SETTINGS } from '@/constants';

const ParallaxGallery = () => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const scrollTimeout = useRef(null);

  // Auto-scroll motion values
  const { autoY1, autoY2, autoX1, autoX2 } = useAutoScroll(isPaused);

  // Scroll-based parallax transforms
  const { smoothYLeftRight, smoothYCenter, smoothXRow1, smoothXRow2 } = useParallaxTransform();

  // Convert motion values to percentages
  const autoY1Percent = useTransform(autoY1, v => `${v}%`);
  const autoY2Percent = useTransform(autoY2, v => `${v}%`);
  const autoX1Percent = useTransform(autoX1, v => `${v}%`);
  const autoX2Percent = useTransform(autoX2, v => `${v}%`);

  // Image Arrays - Doubled for seamless -50% loop
  const colImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];
  const rowImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  // Interaction Handlers
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Scroll Detection to Pause Auto-Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsPaused(true);
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsPaused(false);
      }, CAROUSEL_SETTINGS.pauseOnScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative z-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:grid grid-cols-3 gap-8 h-[120vh] -mt-20 overflow-hidden px-12 xl:px-20">
        {/* Column 1 - Auto UP, Scroll UP */}
        <GalleryColumn
          images={colImages}
          autoYPercent={autoY1Percent}
          smoothY={smoothYLeftRight}
        />

        {/* Column 2 - Auto DOWN, Scroll DOWN */}
        <GalleryColumn
          images={colImages}
          autoYPercent={autoY2Percent}
          smoothY={smoothYCenter}
          offset="pt-20"
        />

        {/* Column 3 - Auto UP, Scroll UP */}
        <GalleryColumn
          images={colImages}
          autoYPercent={autoY1Percent}
          smoothY={smoothYLeftRight}
          offset="-mt-10"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-eerie to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-eerie to-transparent z-20 pointer-events-none" />
      </div>

      {/* MOBILE LAYOUT */}
      <div className="lg:hidden flex flex-col gap-4 mt-8 pb-10 w-full overflow-hidden">
        {/* Row 1 - Auto LEFT, Scroll LEFT */}
        <GalleryRow
          images={rowImages}
          autoXPercent={autoX1Percent}
          smoothX={smoothXRow1}
          rotation="rotate-1"
          overlay="bg-crimson/10"
          marginLeft="-ml-[20%]"
        />

        {/* Row 2 - Auto RIGHT, Scroll RIGHT */}
        <GalleryRow
          images={rowImages}
          autoXPercent={autoX2Percent}
          smoothX={smoothXRow2}
          rotation="-rotate-1"
          overlay="bg-crimson-dark/10"
          marginLeft="-ml-[40%]"
        />
      </div>
    </div>
  );
};

export default ParallaxGallery;
