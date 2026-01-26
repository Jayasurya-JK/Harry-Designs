import { motion } from 'framer-motion';
import { useState } from 'react';
import { SKILLS } from '../data/aboutData';
import { useIsMobile } from '@/hooks';
import { fadeInUp, TRANSITIONS, DELAYS } from '@/animations';

const SkillsGrid = ({ isInView }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{ delay: DELAYS.medium, ...TRANSITIONS.slow }}
      className="mb-16"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        Core <span className="text-gradient">Expertise</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SKILLS.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                !isMobile
                  ? {
                      y: -12,
                      scale: 1.03,
                      transition: { duration: 0.3, ease: 'easeOut' },
                    }
                  : {}
              }
              className="group relative p-6 md:p-7 glass-effect rounded-3xl overflow-hidden cursor-pointer"
              onMouseEnter={() => !isMobile && setHoveredCard(skill.title)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 transition-opacity duration-500`}
                animate={{
                  opacity: !isMobile && hoveredCard === skill.title ? 0.2 : 0,
                }}
              />

              <motion.div
                animate={{
                  rotate: !isMobile && hoveredCard === skill.title ? [0, -10, 10, 0] : 0,
                  scale: !isMobile && hoveredCard === skill.title ? 1.15 : 1,
                }}
                transition={{ duration: 0.5 }}
                className="text-purple-400 mb-4 relative z-10"
              >
                <Icon className="text-4xl" />
              </motion.div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white relative z-10 group-hover:text-gradient transition-all duration-300">
                {skill.title}
              </h3>
              <p className="text-slate-400 text-sm md:text-base relative z-10 group-hover:text-slate-300 transition-colors">
                {skill.description}
              </p>

              {/* Glow effect */}
              {!isMobile && (
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300"
                  animate={{
                    opacity: hoveredCard === skill.title ? 1 : 0,
                  }}
                  style={{
                    boxShadow: `0 0 40px rgba(168, 85, 247, 0.5)`,
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SkillsGrid;
