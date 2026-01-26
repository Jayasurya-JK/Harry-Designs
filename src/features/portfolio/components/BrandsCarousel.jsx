import { useState } from 'react';
import { motion } from 'framer-motion';
import { BRANDS } from '../data/portfolioData';
import BrandCard from './BrandCard';
import { CARD_DIMENSIONS } from '@/constants';
import { fadeInUp, TRANSITIONS, DELAYS } from '@/animations';

const BrandsCarousel = ({ isInView }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Calculate animation distance
  const scrollDistance = (CARD_DIMENSIONS.width + CARD_DIMENSIONS.gap) * BRANDS.length;

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{ delay: DELAYS.small, ...TRANSITIONS.medium }}
      className="mb-20 overflow-hidden"
    >
      <div className="relative">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-eerie to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-eerie to-transparent z-10 pointer-events-none" />

        {/* Scrolling brands container */}
        <div className="flex">
          {/* First set */}
          <motion.div
            animate={{
              x: [0, -scrollDistance],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
            className="flex gap-8 pr-8"
          >
            {BRANDS.map((brand, index) => (
              <BrandCard
                key={`brand-1-${index}`}
                brand={brand}
                index={index}
                hoveredItem={hoveredItem}
                setHoveredItem={setHoveredItem}
              />
            ))}
          </motion.div>

          {/* Second set (duplicate for seamless loop) */}
          <motion.div
            animate={{
              x: [0, -scrollDistance],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
            className="flex gap-8 pr-8"
          >
            {BRANDS.map((brand, index) => (
              <BrandCard
                key={`brand-2-${index}`}
                brand={brand}
                index={index}
                hoveredItem={hoveredItem}
                setHoveredItem={setHoveredItem}
                duplicate
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BrandsCarousel;
