import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import ParallaxGallery from './ParallaxGallery';

const Hero = () => {
  const { scrollY } = useScroll();

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden">
      {/* Background with simple gradient mesh to not compete with gallery */}
      <div className="absolute inset-0">
      </div>

      <div className="w-full relative z-10 pt-20 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full">

          {/* LEFT COLUMN: Text Content - 50% Width */}
          <motion.div
            className="text-left order-1 lg:order-1 flex flex-col justify-center h-full px-8 lg:pl-20 xl:pl-32 z-20"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-3xl"
            >
              {/* Tagline Label */}
              <motion.span
                className="block text-purple-400 text-xs md:text-sm tracking-[0.2em] uppercase font-bold mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Crafting Premium Logos & Packaging
              </motion.span>

              {/* Main Headline */}
              <motion.h1
                className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold mb-6 leading-[1.1] tracking-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex flex-col">
                  <span className="block whitespace-nowrap">
                    Crafting <span className="font-display italic font-normal text-purple-300">Meaningful</span>
                  </span>
                  <span className="block">
                    Brands Through Design
                  </span>
                </div>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-sm md:text-lg text-slate-300 font-light leading-relaxed max-w-xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Transforming brands with stunning visual identities and memorable packaging designs that leave lasting impressions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto px-8 py-4 bg-[#ccff00] text-black rounded-full font-bold text-lg hover:bg-[#b3e600] transition-colors"
                >
                  Book a demo
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Scroll indicator - Only visible on desktop/landscape */}
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-8 left-8 hidden lg:block"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-slate-500 text-xs uppercase tracking-widest">Scroll</span>
                <HiArrowDown className="text-purple-400 text-2xl" />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Parallax Gallery - 50% Width */}
          <div className="order-2 lg:order-2 h-auto lg:h-screen w-full flex items-center justify-center relative overflow-hidden">
            {/* Gradient overlay on the left to blend with text */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
            <ParallaxGallery />
          </div>

        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
    </section>
  );
};

export default Hero;
