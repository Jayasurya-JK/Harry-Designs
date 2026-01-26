import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, TRANSITIONS, DELAYS } from '@/animations';

const HeroContent = () => {
  return (
    <motion.div
      className="text-center lg:text-left order-1 lg:order-1 flex flex-col justify-center h-full px-6 sm:px-8 lg:pl-20 xl:pl-32 z-20 py-8 lg:py-0"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...TRANSITIONS.verySlow }}
        className="max-w-3xl"
      >
        {/* Tagline Label */}
        <motion.span
          className="block text-crimson text-xs sm:text-sm tracking-[0.25em] uppercase font-extrabold mb-4 sm:mb-4 md:mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: DELAYS.small, ...TRANSITIONS.slow }}
        >
          Crafting Premium Logos & Packaging
        </motion.span>

        {/* Main Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-black mb-4 sm:mb-5 leading-[1.1] sm:leading-[1.1] md:leading-[1.1] tracking-tighter text-white"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: DELAYS.medium, ...TRANSITIONS.slow, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col">
            <span className="block">
              Crafting{' '}
              <span className="font-display italic font-normal text-crimson">Meaningful</span>
            </span>
            <span className="block">Brands Through Design</span>
          </div>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-lg text-slate-300 font-normal leading-relaxed mx-auto lg:mx-0 max-w-xl mb-5 sm:mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: DELAYS.xxxl, ...TRANSITIONS.slow }}
        >
          Transforming brands with stunning visual identities and memorable packaging designs that
          leave lasting impressions.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.9, ...TRANSITIONS.slow }}
          className="flex justify-center lg:justify-start"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-crimson text-white rounded-full font-bold text-base sm:text-lg hover:bg-crimson-dark transition-all shadow-2xl shadow-crimson/40 mb-0"
          >
            Book a demo
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
