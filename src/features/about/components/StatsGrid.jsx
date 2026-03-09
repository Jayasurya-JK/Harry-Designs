import React, { useState } from 'react';
import { motion, animate, useMotionValue, useTransform, useInView } from 'framer-motion';
import { useIsMobile } from '@/hooks';
import { fadeInUp, TRANSITIONS, DELAYS } from '@/animations';

const STATS = [
  { rawNumber: 5, suffix: '+', label: 'Years of freelance experience', gradient: 'from-purple-600 to-pink-600' },
  { rawNumber: 80, suffix: '+', label: 'Projects Completed', gradient: 'from-blue-600 to-cyan-600' },
  { rawNumber: 50, suffix: '+', label: 'Happy Clients', gradient: 'from-amber-600 to-orange-600' },
  { rawNumber: 40, suffix: '+', label: 'Logos Designed', gradient: 'from-emerald-600 to-teal-600' },
];

const AnimatedCounter = ({ value, suffix }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  
  React.useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [inView, motionValue, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const StatsGrid = ({ isInView }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{ delay: DELAYS.xxl, ...TRANSITIONS.slow }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
    >
      {STATS.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{
            delay: 0.7 + index * 0.08,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={
            !isMobile
              ? {
                  scale: 1.1,
                  y: -8,
                  zIndex: 20,
                  transition: { duration: 0.2 },
                }
              : {}
          }
          className="group relative p-4 sm:p-5 md:p-4 lg:p-6 glass-effect rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-center min-h-[140px]"
          onMouseEnter={() => !isMobile && setHoveredCard(stat.label)}
          onMouseLeave={() => !isMobile && setHoveredCard(null)}
        >
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 transition-opacity duration-300`}
            animate={{
              opacity: !isMobile && hoveredCard === stat.label ? 0.2 : 0,
            }}
          />

          <motion.div
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-1 md:mb-2 relative z-10"
            animate={{
              scale: !isMobile && hoveredCard === stat.label ? 1.15 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            <AnimatedCounter value={stat.rawNumber} suffix={stat.suffix} />
          </motion.div>
          <div className="text-slate-400 text-xs sm:text-sm md:text-sm lg:text-base leading-tight md:leading-normal relative z-10 group-hover:text-slate-300 transition-colors font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsGrid;
