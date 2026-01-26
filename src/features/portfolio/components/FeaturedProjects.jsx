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
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      onMouseEnter={() => !isMobile && setHoveredItem(item.id)}
      onMouseLeave={() => !isMobile && setHoveredItem(null)}
    >
      {/* Card container with larger aspect ratio for featured */}
      <div className="relative overflow-hidden rounded-2xl aspect-[4/5] md:aspect-[4/5] max-w-xs md:max-w-sm mx-auto shadow-lg">
        
        {/* Full Image Background */}
        <div className="absolute inset-0 z-0">
          {item.image ? (
            <img 
              src={item.image} 
              alt={item.client}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
             <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                  animate={{
                    scale: !isMobile && hoveredItem === item.id ? 1.15 : 1,
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                <Icon className="relative z-10 text-8xl text-white/50" />
             </div>
          )}
          
          {/* Enhanced Text Readability Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
        </div>

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />

        {/* Content - Empty as requested */}
        <div className="absolute inset-0 pointer-events-none"></div>

        {/* Animated border */}
        {!isMobile && (
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-white/0 transition-all duration-300 pointers-events-none"
            animate={{
              borderColor:
                hoveredItem === item.id ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0)',
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
        className="mb-20 container mx-auto px-4"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Featured <span className="text-gradient">Projects</span>
            </h3>
            <p className="text-slate-300 text-base md:text-lg font-medium mx-auto max-w-2xl">
              Scroll to explore my best design creations
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
