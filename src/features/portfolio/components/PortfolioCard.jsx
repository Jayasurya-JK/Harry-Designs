import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks';
import { TRANSITIONS } from '@/animations';

const PortfolioCard = ({ item, index, hoveredItem, setHoveredItem, size = 'normal' }) => {
  const isMobile = useIsMobile();
  const Icon = item.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      exit={{ opacity: 0, scale: 0.8, rotateY: 20 }}
      transition={{
        delay: index * 0.05,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
        size === 'wide' ? 'md:col-span-2' : ''
      } ${size === 'tall' ? 'md:row-span-2' : ''}`}
      onMouseEnter={() => !isMobile && setHoveredItem(item.id)}
      onMouseLeave={() => !isMobile && setHoveredItem(null)}
    >
      {/* Card container */}
      <div
        className={`relative overflow-hidden rounded-3xl ${
          size === 'tall' ? 'aspect-[1/1.5]' : 'aspect-square'
        }`}
      >
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
            transition={{ delay: 0.2 }}
          >
            <motion.div
              animate={{
                scale: !isMobile && hoveredItem === item.id ? 1.2 : 1,
                rotate: !isMobile && hoveredItem === item.id ? 5 : 0,
              }}
              transition={TRANSITIONS.fast}
              className="text-4xl md:text-5xl text-white/90 backdrop-blur-sm bg-white/10 p-3 rounded-2xl"
            >
              <Icon />
            </motion.div>

            <motion.span
              className="text-xs px-3 py-1.5 glass-effect rounded-full text-white/90 backdrop-blur-md font-medium capitalize"
              animate={{
                y: !isMobile && hoveredItem === item.id ? -5 : 0,
              }}
              transition={TRANSITIONS.fast}
            >
              {item.category}
            </motion.span>
          </motion.div>

          {/* Bottom section - Project info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: (!isMobile && hoveredItem === item.id) || isMobile ? 1 : 0.9,
              y: 0,
            }}
            transition={TRANSITIONS.fast}
            className="text-white"
          >
            <motion.div
              animate={{
                y: !isMobile && hoveredItem === item.id ? -10 : 0,
              }}
              transition={TRANSITIONS.fast}
            >
              <p className="text-sm text-white/70 mb-1 font-medium">Client</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{item.client}</h3>
              <p className="text-base text-white/80 mb-4">{item.title}</p>
            </motion.div>

            {!isMobile && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: hoveredItem === item.id ? 1 : 0,
                  height: hoveredItem === item.id ? 'auto' : 0,
                }}
                transition={TRANSITIONS.fast}
                className="overflow-hidden"
              >
                <p className="text-sm text-white/70 mb-4">{item.description}</p>
                <div className="flex items-center gap-3">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
                    View Project
                  </span>
                  <motion.span animate={{ x: hoveredItem === item.id ? 5 : 0 }} className="text-2xl">
                    →
                  </motion.span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Animated border */}
        {!isMobile && (
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-white/0 transition-all duration-300"
            animate={{
              borderColor:
                hoveredItem === item.id ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0)',
            }}
          />
        )}

        {/* Glow effect */}
        {!isMobile && (
          <motion.div
            className="absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500"
            animate={{
              opacity: hoveredItem === item.id ? 0.6 : 0,
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

export default PortfolioCard;
