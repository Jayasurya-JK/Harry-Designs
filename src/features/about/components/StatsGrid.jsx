import { motion } from 'framer-motion';
import { useState } from 'react';
import { useIsMobile } from '@/hooks';
import { fadeInUp, TRANSITIONS, DELAYS } from '@/animations';

const STATS = [
  { number: '200+', label: 'Projects Completed', gradient: 'from-purple-600 to-pink-600' },
  { number: '150+', label: 'Happy Clients', gradient: 'from-blue-600 to-cyan-600' },
  { number: '50+', label: 'Logos Designed', gradient: 'from-amber-600 to-orange-600' },
  { number: '100+', label: 'Packages Created', gradient: 'from-emerald-600 to-teal-600' },
];

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
                  transition: { duration: 0.2 },
                }
              : {}
          }
          className="group relative p-6 md:p-7 glass-effect rounded-2xl overflow-hidden cursor-pointer"
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
            className="text-3xl md:text-5xl font-bold text-gradient mb-2 relative z-10"
            animate={{
              scale: !isMobile && hoveredCard === stat.label ? 1.15 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {stat.number}
          </motion.div>
          <div className="text-slate-400 text-sm md:text-base relative z-10 group-hover:text-slate-300 transition-colors font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsGrid;
