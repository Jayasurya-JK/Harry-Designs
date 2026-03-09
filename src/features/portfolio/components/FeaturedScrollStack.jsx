import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useIsMobile, useIsTablet } from '@/hooks';
import {
  createScrollTransforms,
  getResponsiveDimensions,
  SCROLL_STACK_CONFIG,
} from '@/animations/scrollStack';

/**
 * Individual stacked card component
 */
const StackedCard = ({ item, index, totalCards, dimensions }) => {
  const Icon = item.icon;
  
  // Create scroll transforms for this card
  const transforms = createScrollTransforms(
    index,
    totalCards,
    dimensions.stackOffset,
    dimensions.scaleDecrement
  );
  
  // Parent scroll container ref (passed via context/hook)
  const containerRef = useRef(null);
  
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: dimensions.cardWidth,
        maxWidth: dimensions.cardMaxWidth,
        height: dimensions.cardHeight,
        x: '-50%',
        y: '-50%',
      }}
      className="origin-center"
    >
      <motion.div
        className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
        style={{
          // These will be controlled by scroll
          y: 0,
          scale: 1,
          opacity: 1,
        }}
      >
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
        
        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-10">
          {/* Top Section - Icon & Category */}
          <div className="flex justify-between items-start">
            <div className="text-5xl md:text-7xl text-white/90 backdrop-blur-sm bg-white/10 p-4 md:p-5 rounded-2xl">
              <Icon />
            </div>
            
            <span className="text-xs md:text-sm px-4 py-2 glass-effect rounded-full text-white/90 backdrop-blur-md font-medium capitalize">
              {item.category}
            </span>
          </div>
          
          {/* Bottom Section - Project Info */}
          <div className="text-white">
            <p className="text-xs md:text-sm text-white/70 mb-2 font-medium uppercase tracking-wider">
              Featured Client
            </p>
            <h3 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
              {item.client}
            </h3>
            <p className="text-lg md:text-2xl text-white/90 mb-3 md:mb-4 font-medium">
              {item.title}
            </p>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
        
        {/* Subtle border glow */}
        <div className="absolute inset-0 border border-white/20 rounded-3xl pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

/**
 * Scroll-driven card component with transforms applied
 */
const ScrollDrivenCard = ({ item, index, totalCards, dimensions, scrollProgress, isMobile }) => {
  const Icon = item.icon;
  
  // Create scroll transforms for this card
  const transforms = createScrollTransforms(
    index,
    totalCards,
    dimensions.stackOffset,
    dimensions.scaleDecrement
  );
  
  // Apply scroll-based transformations
  const y = useTransform(
    scrollProgress,
    transforms.y.input,
    transforms.y.output.map((val) => `${val}vh`)
  );
  
  const scale = useTransform(
    scrollProgress,
    transforms.scale.input,
    transforms.scale.output
  );
  
  const opacity = useTransform(
    scrollProgress,
    transforms.opacity.input,
    transforms.opacity.output
  );
  
  return (
    <motion.div
      style={{
        position: 'absolute',
        inset: 0,
        top: isMobile ? '23%' : '18%', // Adjusted to provide space for the header on both mobile and desktop
        margin: 'auto',
        width: dimensions.cardWidth,
        maxWidth: dimensions.cardMaxWidth,
        height: dimensions.cardHeight,
        y,
        scale,
        opacity,
        zIndex: index + 1,
      }}
      className="will-change-transform"
    >
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group flex flex-col bg-slate-900">
        
        {/* Full Image Background */}
        <div className="absolute inset-0 z-0">
          {item.image ? (
            <img 
              src={item.image} 
              alt={item.client}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
              <Icon className="text-8xl text-white/50" />
            </div>
          )}
          
          {/* Enhanced Text Readability Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none" />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-end items-end p-6 md:p-8">
            {/* Icon removed */}
        </div>
        
        {/* Border Glow */}
        <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
      </div>
    </motion.div>
  );
};

/**
 * FeaturedScrollStack Component
 * 
 * Creates a scroll-driven stacking card effect where featured projects
 * stack on top of each other as the user scrolls.
 * 
 * Architecture:
 * 1. Tall container (300vh) - creates scroll distance
 * 2. Sticky viewport (100vh) - cards animate within this fixed view
 * 3. Absolute positioned cards - stacked using transforms
 * 4. useScroll tracks container scroll progress (0-1)
 * 5. useTransform maps scroll → card position/scale/opacity
 * 
 * @param {Array} items - Featured project items to display
 * @param {Function} onViewAll - Callback for "View All" button
 */
const FeaturedScrollStack = ({ items, onViewAll }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  
  // Get responsive dimensions
  const dimensions = getResponsiveDimensions(isMobile, isTablet);
  
  // Ref for the tall scroll container
  const containerRef = useRef(null);
  
  // Track scroll progress through the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  
  const totalCards = items.length;
  
  return (
    <div className="relative w-full overflow-x-clip">
      {/* Tall scroll container - creates scroll room for animations */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{
          height: isMobile ? '600vh' : SCROLL_STACK_CONFIG.containerHeight,
        }}
      >
        {/* Sticky viewport - LOCKS the view in place */}
        <div
          className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Title Header - Sticky with the cards */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-16 md:top-20 left-0 w-full z-20 text-center px-4 pointer-events-none"
          >
            <h3 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-white drop-shadow-lg pt-4 md:pt-0">
              Featured <span className="text-gradient">Projects</span>
            </h3>
            <p className="text-slate-300 text-xs md:text-base font-medium tracking-wide drop-shadow-md">
              Scroll to explore my best design creations
            </p>
          </motion.div>

          {/* All cards stacked in same position - animate within locked viewport */}
          <div className="relative w-full h-full flex items-center justify-center">
            {items.map((item, index) => (
              <ScrollDrivenCard
                key={item.id}
                item={item}
                index={index}
                totalCards={totalCards}
                dimensions={dimensions}
                scrollProgress={scrollYProgress}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* View All Button - positioned after scroll stack with proper spacing */}
      {onViewAll && (
        <div className="relative z-20 pt-12 pb-24 flex justify-center bg-eerie">
          <motion.button
            onClick={onViewAll}
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass-effect text-white rounded-full font-semibold text-base md:text-lg hover:bg-white/10 transition-colors backdrop-blur-md shadow-lg border border-white/10"
          >
            View All Projects →
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default FeaturedScrollStack;
