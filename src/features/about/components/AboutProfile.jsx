import { motion } from 'framer-motion';
import { useState } from 'react';

const AboutProfile = ({ isInView }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="lg:col-span-2 order-1 lg:order-1">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-md mx-auto lg:max-w-none flex justify-center"
      >
        <div className="relative rounded-full p-8 md:p-10 group">
          {/* Enhanced gradient background with animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-indigo-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Designer Photo */}
          <div className="relative flex items-center justify-center">
            <motion.div
              className="relative"
            >
              {/* Photo container */}
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-crimson to-crimson-dark flex items-center justify-center shadow-2xl ring-4 ring-crimson/20 relative z-10">
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

          {/* Stats overlay removed */}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutProfile;
