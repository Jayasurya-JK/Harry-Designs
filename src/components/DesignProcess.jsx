import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaSearch, FaChartBar, FaLightbulb, FaPalette, FaDesktop, FaSyncAlt, FaCheckCircle, FaHeadset } from 'react-icons/fa';

const DesignProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  const isThrottledRef = useRef(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Throttled scroll handler for better mobile performance
  useEffect(() => {
    if (!isMobile || !carouselRef.current) return;
    
    const carousel = carouselRef.current;
    
    const handleScroll = () => {
      if (isThrottledRef.current) return;
      isThrottledRef.current = true;
      
      setTimeout(() => {
        if (carousel) {
          const scrollLeft = carousel.scrollLeft;
          const cardWidth = carousel.offsetWidth;
          const newSlide = Math.round(scrollLeft / cardWidth);
          setCurrentSlide(newSlide);
        }
        isThrottledRef.current = false;
      }, 100);
    };

    carousel.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      carousel.removeEventListener('scroll', handleScroll);
      isThrottledRef.current = false; // Reset on cleanup
    };
  }, [isMobile]);

  const processSteps = [
    {
      number: 1,
      title: "Discovery",
      description: "Understanding your brand, goals, and target audience",
      icon: <FaSearch className="text-4xl md:text-5xl" />
    },
    {
      number: 2,
      title: "Research",
      description: "Market analysis and competitor research",
      icon: <FaChartBar className="text-4xl md:text-5xl" />
    },
    {
      number: 3,
      title: "Conceptualization",
      description: "Developing creative concepts and design directions",
      icon: <FaLightbulb className="text-4xl md:text-5xl" />
    },
    {
      number: 4,
      title: "Design & Refinement",
      description: "Creating and refining the final design",
      icon: <FaPalette className="text-4xl md:text-5xl" />
    },
    {
      number: 5,
      title: "Presentation",
      description: "Presenting the design with rationale and context",
      icon: <FaDesktop className="text-4xl md:text-5xl" />
    },
    {
      number: 6,
      title: "Revisions",
      description: "Incorporating feedback and making adjustments",
      icon: <FaSyncAlt className="text-4xl md:text-5xl" />
    },
    {
      number: 7,
      title: "Finalization",
      description: "Preparing files for production and delivery",
      icon: <FaCheckCircle className="text-4xl md:text-5xl" />
    },
    {
      number: 8,
      title: "Support",
      description: "Ongoing support and design consultation",
      icon: <FaHeadset className="text-4xl md:text-5xl" />
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-slate-900 overflow-hidden" ref={ref}>
      {/* Background gradient effects matching site theme - Static on mobile, subtle on desktop */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: isMobile ? 0.15 : 0.25 } : { opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-20 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-xl md:blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: isMobile ? 0.15 : 0.25 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-xl md:blur-2xl"
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
              <span>→</span>
            </p>
          </motion.div>
        )}

        {/* Desktop Zigzag Layout - Hidden on Mobile */}
        <div className="hidden md:block relative">
          {/* Central Timeline */}
          <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2">
            <motion.div 
              className="h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Zigzag Steps Container */}
          <div className="relative grid grid-cols-4 gap-6 pt-12 pb-12">
            {processSteps.map((step, index) => {
              const isOdd = step.number % 2 === 1;
              
              return (
                <div key={step.number} className="relative flex flex-col items-center">
                  {/* Step positioned above or below timeline */}
                  <motion.div
                    initial={{ opacity: 0, y: isOdd ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isOdd ? -50 : 50 }}
                    transition={{ 
                      delay: index * 0.15, 
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: isOdd ? -10 : 10,
                      transition: { duration: 0.3 }
                    }}
                    className={`group cursor-pointer ${isOdd ? 'mb-32' : 'mt-32'}`}
                  >
                    {/* Connecting Line to Timeline */}
                    <motion.div 
                      className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-transparent ${
                        isOdd ? 'top-full h-32' : 'bottom-full h-32 rotate-180'
                      }`}
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                      transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
                    />

                    {/* Icon Circle - Border pulse animation on hover */}
                    <div className="relative mb-4 flex justify-center">
                      {/* Icon Container with border pulse */}
                      <motion.div
                        className="relative w-24 h-24 rounded-full bg-slate-900/90 backdrop-blur-sm flex items-center justify-center border-2 border-slate-800 transition-all duration-300 hover:border-transparent"
                        style={{
                          boxShadow: "0 0 0 0 rgba(168, 85, 247, 0)"
                        }}
                        whileHover={{
                          boxShadow: [
                            "0 0 0 0 rgba(168, 85, 247, 0.7)",
                            "0 0 0 8px rgba(168, 85, 247, 0)",
                            "0 0 0 0 rgba(236, 72, 153, 0.7)",
                            "0 0 0 8px rgba(236, 72, 153, 0)"
                          ],
                          border: ["2px solid rgba(168, 85, 247, 0.8)", "2px solid rgba(236, 72, 153, 0.8)", "2px solid rgba(168, 85, 247, 0.8)"]
                        }}
                        transition={{
                          boxShadow: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeOut"
                          },
                          border: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      >
                        <motion.div 
                          className="text-purple-400 group-hover:text-purple-300 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {step.icon}
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Card Content */}
                    <div className="text-center space-y-2 px-2">
                      <motion.h3
                        className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-300"
                      >
                        {step.title}
                      </motion.h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Step Number Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.15 + 0.7, duration: 0.3 }}
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-xs font-bold shadow-lg"
                    >
                      {step.number}
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
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
                  {/* Icon Circle - Static, no animations on mobile for performance */}
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                        currentSlide === index ? 'opacity-30' : 'opacity-0'
                      }`}
                      style={{
                        background: "linear-gradient(135deg, #a855f7, #ec4899)",
                        filter: "blur(8px)",
                        transform: "scale(1.1)",
                      }}
                    />
                    
                    <div className={`relative w-24 h-24 rounded-full bg-slate-900/80 flex items-center justify-center border-2 transition-colors duration-300 ${
                      currentSlide === index ? 'border-purple-500' : 'border-slate-700'
                    }`}>
                      <div className="text-purple-400">
                        {step.icon}
                      </div>
                    </div>
                  </div>

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
