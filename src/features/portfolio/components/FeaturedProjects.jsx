import { motion } from 'framer-motion';
import { useState } from 'react';
import { useIsMobile } from '@/hooks';
import { fadeInUp, TRANSITIONS } from '@/animations';

const FeaturedCard = ({ item, index, isInView }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const isMobile = useIsMobile();
  const Icon = item.icon;

  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, scale: 0.9, x: index === 0 ? -50 : 50 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, x: 0 }
          : { opacity: 0, scale: 0.9, x: index === 0 ? -50 : 50 }
      }
      transition={{
        delay: 0.6 + index * 0.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        !isMobile
          ? {
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 },
            }
          : {}
      }
      className="group relative overflow-hidden rounded-3xl cursor-pointer"
      onMouseEnter={() => !isMobile && setHoveredItem(item.id)}
      onMouseLeave={() => !isMobile && setHoveredItem(null)}
    >
      {/* Card container with larger aspect ratio for featured */}
      <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
          animate={{
            scale: !isMobile && hoveredItem === item.id ? 1.15 : 1,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
          {/* Top section - Brand icon */}
          <motion.div
            className="flex justify-between items-start"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.2 }}
          >
            <motion.div
              animate={{
                scale: !isMobile && hoveredItem === item.id ? 1.2 : 1,
                rotate: !isMobile && hoveredItem === item.id ? 5 : 0,
              }}
              transition={TRANSITIONS.fast}
              className="text-4xl md:text-6xl text-white/90 backdrop-blur-sm bg-white/10 p-3 md:p-4 rounded-xl md:rounded-2xl"
            >
              <Icon />
            </motion.div>

            <motion.span
              className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 glass-effect rounded-full text-white/90 backdrop-blur-md font-medium capitalize"
              animate={{
                y: !isMobile && hoveredItem === item.id ? -5 : 0,
              }}
              transition={TRANSITIONS.fast}
            >
              {item.category}
            </motion.span>
          </motion.div>

          {/* Bottom section - Project info */}
          <motion.div className="text-white">
            <motion.div
              animate={{
                y: !isMobile && hoveredItem === item.id ? -10 : 0,
              }}
              transition={TRANSITIONS.fast}
            >
              <p className="text-xs md:text-sm text-white/70 mb-1 md:mb-2 font-medium">Client</p>
              <h3 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">{item.client}</h3>
              <p className="text-base md:text-lg text-white/80 mb-2 md:mb-4">{item.title}</p>
              <p className="text-xs md:text-sm text-white/70 mb-3 md:mb-4">{item.description}</p>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 md:gap-3"
              animate={{
                x: !isMobile && hoveredItem === item.id ? 10 : 0,
              }}
              transition={TRANSITIONS.fast}
            >
              <span className="px-4 md:px-5 py-2 md:py-2.5 bg-white/20 backdrop-blur-md rounded-full text-xs md:text-sm font-medium">
                Featured Project
              </span>
              <motion.span
                animate={{
                  x: !isMobile && hoveredItem === item.id ? 5 : 0,
                  scale: !isMobile && hoveredItem === item.id ? 1.2 : 1,
                }}
                className="text-xl md:text-2xl"
              >
                →
              </motion.span>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated border */}
        {!isMobile && (
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-white/0 transition-all duration-300"
            animate={{
              borderColor:
                hoveredItem === item.id ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0)',
            }}
          />
        )}

        {/* Glow effect */}
        {!isMobile && (
          <motion.div
            className="absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500"
            animate={{
              opacity: hoveredItem === item.id ? 0.7 : 0,
            }}
            style={{
              background: `linear-gradient(to bottom right, ${item.color})`,
            }}
          />
        )}
      </div>
    </motion.div>
  );
};

const FeaturedProjects = ({ items, isInView, onViewAll }) => {
  const isMobile = useIsMobile();

  return (
    <>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeInUp}
        transition={{ delay: 0.5, ...TRANSITIONS.medium }}
        className="mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <FeaturedCard key={item.id} item={item} index={index} isInView={isInView} />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, ...TRANSITIONS.medium }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={onViewAll}
            whileHover={
              !isMobile
                ? {
                    scale: 1.05,
                    boxShadow: '0 20px 60px rgba(120, 119, 198, 0.5)',
                  }
                : {}
            }
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-dark text-white rounded-full font-semibold text-base md:text-lg overflow-hidden"
          >
            <span className="relative z-10">View All Projects</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10 text-xl md:text-2xl"
            >
              →
            </motion.span>
            {!isMobile && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default FeaturedProjects;
