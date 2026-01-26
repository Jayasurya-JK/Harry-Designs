import { motion } from 'framer-motion';
import { useState } from 'react';
import { WHY_HARRY } from '../data/aboutData';
import { useIsMobile } from '@/hooks';
import { useCardStack } from '../hooks/useCardStack';
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
  const { cardStack, isAutoPlaying, toggleAutoPlay, handleDragEnd } = useCardStack(
    WHY_HARRY.length,
    isInView
  );

  return (
    <div className="col-span-1 order-2 relative h-[500px] flex items-center justify-center px-4">
      {/* Instruction text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.3 }}
        className="absolute top-0 left-0 right-0 text-center text-slate-400 text-sm mb-4 z-20"
      >
        👆 Swipe up to see next card
      </motion.div>

      {/* Play/Pause Control */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ delay: 0.5 }}
        onClick={toggleAutoPlay}
        className="absolute top-8 right-6 z-30 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300 active:scale-95 shadow-lg"
        aria-label={isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
      >
        {isAutoPlaying ? (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5 3.5h2v9H5v-9zm4 0h2v9H9v-9z" />
          </svg>
        ) : (
          <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4 3v10l8-5-8-5z" />
          </svg>
        )}
      </motion.button>

      {/* Stacked Cards Container */}
      <div className="relative w-full max-w-sm h-full flex items-center">
        {cardStack.map((cardIndex, stackPosition) => {
          const reason = WHY_HARRY[cardIndex];
          const Icon = reason.icon;
          const isTopCard = stackPosition === 0;
          const isVisible = stackPosition < 3;

          if (!isVisible) return null;

          return (
            <motion.div
              key={`${cardIndex}-${stackPosition}`}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                scale: 1 - stackPosition * 0.05,
                y: stackPosition * 15,
                opacity: 1 - stackPosition * 0.3,
                zIndex: 10 - stackPosition,
                rotateZ: stackPosition * 2,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 25,
              }}
              drag={isTopCard ? 'y' : false}
              dragConstraints={{ top: -300, bottom: 50 }}
              dragElastic={0.7}
              onDragEnd={isTopCard ? handleDragEnd : undefined}
              style={{
                cursor: isTopCard ? 'grab' : 'default',
                touchAction: isTopCard ? 'none' : 'auto',
              }}
            >
              <div
                className="w-full p-6 glass-effect rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  background:
                    stackPosition === 0 ? 'rgba(30, 41, 59, 0.8)' : 'rgba(30, 41, 59, 0.6)',
                  backdropFilter: 'blur(20px)',
                  border:
                    stackPosition === 0
                      ? '1px solid rgba(139, 92, 246, 0.3)'
                      : '1px solid rgba(100, 116, 139, 0.2)',
                }}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-10`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: isTopCard ? [1, 1.05, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    <Icon className="text-4xl" />
                  </motion.div>

                  <h4 className="text-2xl font-bold mb-3 text-white text-center">
                    {reason.title}
                  </h4>
                  <p className="text-slate-300 text-base leading-relaxed text-center">
                    {reason.description}
                  </p>

                  {/* Card indicator */}
                  <div className="flex justify-center gap-2 mt-6">
                    {WHY_HARRY.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === cardIndex
                            ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500'
                            : 'w-1.5 bg-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"
                  animate={{
                    x: isTopCard ? ['-100%', '100%'] : '-100%',
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Stack depth indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 text-center text-slate-500 text-xs"
      >
        {cardStack[0] + 1} of {WHY_HARRY.length}
      </motion.div>
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
