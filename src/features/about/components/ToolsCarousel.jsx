import { motion } from 'framer-motion';
import { useState } from 'react';
import { TOOLS } from '../data/aboutData';
import { useIsMobile } from '@/hooks';
import { fadeInUp, TRANSITIONS, DELAYS } from '@/animations';

const ToolsCarousel = ({ isInView }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{ delay: DELAYS.large, ...TRANSITIONS.slow }}
      className="mb-16"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        The Tools I <span className="text-gradient">Trust</span>
      </h3>
      <div className="relative overflow-hidden rounded-3xl glass-effect p-8 md:p-10">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
          {TOOLS.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
                }
                transition={{
                  delay: 0.5 + index * 0.05,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  !isMobile
                    ? {
                        scale: 1.2,
                        y: -10,
                        transition: { duration: 0.2 },
                      }
                    : {}
                }
                className="group relative flex flex-col items-center justify-center"
                onMouseEnter={() => !isMobile && setHoveredCard(tool.name)}
                onMouseLeave={() => !isMobile && setHoveredCard(null)}
              >
                {/* Icon container with gradient background */}
                <motion.div
                  className={`relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-br ${tool.color} shadow-lg`}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${tool.color}`}
                    animate={{
                      opacity: !isMobile && hoveredCard === tool.name ? 1 : 0.9,
                    }}
                    transition={TRANSITIONS.fast}
                  />

                  <motion.div
                    className="text-3xl md:text-5xl text-white relative z-10"
                    animate={{
                      rotateY: !isMobile && hoveredCard === tool.name ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon />
                  </motion.div>
                </motion.div>

                <span className="text-xs md:text-sm text-slate-400 text-center mt-3 group-hover:text-white transition-colors truncate max-w-full block font-medium capitalize">
                  {tool.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ToolsCarousel;
