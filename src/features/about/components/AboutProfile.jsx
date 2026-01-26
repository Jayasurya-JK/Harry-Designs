import { motion } from 'framer-motion';
import { useState } from 'react';

const AboutProfile = ({ isInView }) => {
  const [imageError, setImageError] = useState(false);

  const stats = [
    { num: '5+', label: 'Years' },
    { num: '200+', label: 'Projects' },
    { num: '150+', label: 'Clients' },
  ];

  return (
    <div className="lg:col-span-2 order-1 lg:order-1">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-md mx-auto lg:max-w-none"
      >
        <div className="relative aspect-square rounded-3xl overflow-hidden glass-effect p-6 md:p-8 group">
          {/* Enhanced gradient background with animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-indigo-600/30"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />

          {/* Designer Photo */}
          <div className="relative h-full flex items-center justify-center">
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Photo container */}
              <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gradient-to-br from-crimson to-crimson-dark flex items-center justify-center shadow-2xl ring-4 ring-crimson/20">
                {imageError ? (
                  <div className="text-6xl md:text-8xl">👨‍🎨</div>
                ) : (
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Harry&backgroundColor=transparent&style=circle"
                    alt="Harry - Creative Designer"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                )}
              </div>

              {/* Decorative floating elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 border-4 border-crimson/40 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-14 h-14 md:w-20 md:h-20 border-4 border-pink-500/40 rounded-lg"
              />
            </motion.div>
          </div>

          {/* Stats overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-around gap-2">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect px-3 py-2 md:px-4 md:py-3 rounded-xl text-center backdrop-blur-xl bg-slate-900/60 hover:bg-slate-900/80 transition-all duration-300"
              >
                <div className="text-xl md:text-2xl font-bold text-gradient">{stat.num}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutProfile;
