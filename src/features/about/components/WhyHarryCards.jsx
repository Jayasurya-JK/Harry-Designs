import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { WHY_HARRY } from '../data/aboutData';
import { useIsMobile } from '@/hooks';

import { TRANSITIONS } from '@/animations';
import AboutProfile from './AboutProfile';

const WhyHarryDesktop = ({ hoveredCard, setHoveredCard }) => {
  return (
    <motion.div
      className="lg:col-span-3 order-2 lg:order-2"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
        {WHY_HARRY.map(reason => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={reason.title}
              className="group relative p-5 md:p-7 glass-effect rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              onMouseEnter={() => setHoveredCard(reason.title)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0`}
                animate={{
                  opacity: hoveredCard === reason.title ? 0.2 : 0,
                }}
                transition={TRANSITIONS.fast}
              />

              {/* Glow effect on hover */}
              <motion.div
                className={`absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 blur-xl bg-gradient-to-br ${reason.color}`}
                animate={{
                  opacity: hoveredCard === reason.title ? 0.3 : 0,
                }}
                transition={TRANSITIONS.fast}
                style={{ zIndex: -1 }}
              />

              <div className="relative z-10 flex items-start gap-4">
                {/* Icon with bounce animation */}
                <motion.div
                  animate={{
                    scale: hoveredCard === reason.title ? 1.15 : 1,
                    rotate: hoveredCard === reason.title ? [0, -10, 10, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-white shadow-lg`}
                >
                  <Icon className="text-3xl md:text-4xl" />
                </motion.div>

                <div className="flex-1 pt-1">
                  <h4 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-gradient transition-all duration-300">
                    {reason.title}
                  </h4>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {reason.description}
                  </p>
                </div>
              </div>

              {/* Bottom shine effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

const WhyHarryMobile = ({ isInView }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play the slider
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % WHY_HARRY.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isInView]);

  const reason = WHY_HARRY[activeIndex];
  const Icon = reason.icon;

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      setActiveIndex((current) => (current + 1) % WHY_HARRY.length);
    } else if (swipe > swipeConfidenceThreshold) {
      setActiveIndex((current) => (current - 1 + WHY_HARRY.length) % WHY_HARRY.length);
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="col-span-1 order-2 relative h-[450px] flex flex-col items-center justify-center px-4 overflow-hidden">
      
      {/* Sliding Cards Container */}
      <div className="relative w-full max-w-sm flex items-center justify-center pt-8">
        
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="w-full relative z-10 cursor-grab active:cursor-grabbing"
        >
          <div className="w-full p-6 glass-effect rounded-3xl overflow-hidden shadow-2xl relative"
               style={{
                 background: 'rgba(30, 41, 59, 0.8)',
                 backdropFilter: 'blur(20px)',
                 border: '1px solid rgba(139, 92, 246, 0.3)',
               }}
          >
            {/* Gradient overlay */}
             <div
               className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-10 pointer-events-none`}
             />

            <div className="relative z-10 pointer-events-none">
              {/* Icon */}
              <div
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-white shadow-lg`}
              >
                <Icon className="text-4xl" />
              </div>

              <h4 className="text-2xl font-bold mb-4 text-white text-center">
                {reason.title}
              </h4>
              <p className="text-slate-300 text-base leading-relaxed text-center min-h-[80px]">
                {reason.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-8 z-20">
        {WHY_HARRY.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500'
                : 'w-2 bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
      
    </div>
  );
};

const WhyHarryCards = ({ isInView }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const isMobile = useIsMobile();

  return (
    <div className="mb-16">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={TRANSITIONS.medium}
        className="text-3xl md:text-5xl font-bold mb-8 text-white text-center"
      >
        Why <span className="text-gradient">Harry?</span>
      </motion.h3>

      {/* Split Layout Container */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        {/* LEFT SIDE - Designer Photo (40% width on desktop) */}
        <AboutProfile isInView={isInView} />

        {/* RIGHT SIDE - Why Harry Cards */}
        {!isMobile ? (
          <WhyHarryDesktop hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
        ) : (
          <WhyHarryMobile isInView={isInView} />
        )}
      </div>
    </div>
  );
};

export default WhyHarryCards;
