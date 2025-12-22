import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const DesignProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || !carouselRef.current) return;
    
    const carousel = carouselRef.current;
    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = carousel.offsetWidth;
      const newSlide = Math.round(scrollLeft / cardWidth);
      setCurrentSlide(newSlide);
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const processSteps = [
    {
      number: 1,
      title: "Discovery",
      description: "Understanding your brand, goals, and target audience"
    },
    {
      number: 2,
      title: "Research",
      description: "Market analysis and competitor research"
    },
    {
      number: 3,
      title: "Conceptualization",
      description: "Developing creative concepts and design directions"
    },
    {
      number: 4,
      title: "Design & Refinement",
      description: "Creating and refining the final design"
    },
    {
      number: 5,
      title: "Presentation",
      description: "Presenting the design with rationale and context"
    },
    {
      number: 6,
      title: "Revisions",
      description: "Incorporating feedback and making adjustments"
    },
    {
      number: 7,
      title: "Finalization",
      description: "Preparing files for production and delivery"
    },
    {
      number: 8,
      title: "Support",
      description: "Ongoing support and design consultation"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-slate-900 overflow-hidden" ref={ref}>
      {/* Background gradient effects matching site theme */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
              Design Process
            </span>
          </motion.h2>
          <motion.div 
            className="w-64 h-1 bg-gradient-to-r from-[#a855f7] to-[#ec4899] mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p 
            className="text-slate-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            A systematic approach to creating exceptional designs
          </motion.p>
        </motion.div>

        {/* Mobile Carousel Hint */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-6"
          >
            <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
              <span>Swipe to see process</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </p>
          </motion.div>
        )}

        {/* Desktop/Tablet Grid - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Numbered Circle with Rotating Ring */}
              <div className="relative mb-8">
                {/* Rotating Ring Effect */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, #a855f7, #ec4899, #6366f1, #a855f7)",
                    filter: "blur(8px)",
                    transform: "scale(1.1)",
                  }}
                />
                
                {/* Inner Circle */}
                <motion.div
                  className="relative w-20 h-20 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center border-2 border-slate-800 group-hover:border-purple-500 transition-colors duration-300"
                >
                  <span className="text-3xl font-bold text-white z-10">
                    {step.number}
                  </span>
                </motion.div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)",
                  }}
                />
              </div>

              {/* Vertical Connecting Line */}
              <motion.div 
                className="w-0.5 h-12 bg-gradient-to-b from-[#a855f7] to-transparent mb-6"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              />

              {/* Card Content */}
              <div className="space-y-3">
                <motion.h3
                  className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300"
                >
                  {step.title}
                </motion.h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          {/* Horizontal Timeline with Numbers */}
          <div className="relative mb-8 px-4">
            <div className="flex items-center justify-between max-w-full overflow-hidden">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-700 via-purple-500 to-slate-700" 
                   style={{ 
                     transform: 'translateY(-50%)',
                     zIndex: 0
                   }}
              />
              
              {/* Numbered Circles */}
              <div className="relative z-10 flex justify-between w-full">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      currentSlide === index
                        ? 'bg-gradient-to-br from-[#a855f7] to-[#ec4899] text-white scale-110 shadow-lg shadow-purple-500/50'
                        : 'bg-slate-800 text-slate-500 scale-90'
                    }`}
                    animate={{
                      scale: currentSlide === index ? 1.1 : 0.9,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.number}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Swipeable Cards Container */}
          <div 
            ref={carouselRef}
            className="overflow-x-auto snap-x snap-mandatory scrollbar-hide flex gap-4 px-4 pb-8"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ 
                  delay: index * 0.05, 
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="snap-center flex-shrink-0 w-full"
              >
                <div className="flex flex-col items-center text-center p-6 rounded-3xl glass-effect border border-slate-800">
                  {/* Numbered Circle */}
                  <div className="relative mb-6">
                    <motion.div
                      animate={{
                        rotate: currentSlide === index ? [0, 360] : 0,
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "conic-gradient(from 0deg, #a855f7, #ec4899, #6366f1, #a855f7)",
                        filter: "blur(8px)",
                        transform: "scale(1.1)",
                      }}
                    />
                    
                    <div className="relative w-24 h-24 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center border-2 border-purple-500">
                      <span className="text-4xl font-bold text-white z-10">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Vertical Connector */}
                  <motion.div 
                    className="w-0.5 h-16 bg-gradient-to-b from-[#a855f7] to-transparent mb-6"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  />

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {processSteps.map((step, index) => (
              <motion.button
                key={step.number}
                onClick={() => {
                  if (carouselRef.current) {
                    const cardWidth = carouselRef.current.offsetWidth;
                    carouselRef.current.scrollTo({
                      left: cardWidth * index,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? 'w-8 h-2 bg-gradient-to-r from-[#a855f7] to-[#ec4899]'
                    : 'w-2 h-2 bg-slate-600'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to step ${step.number}: ${step.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
