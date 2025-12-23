import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaSearch, FaLightbulb, FaPalette, FaDesktop, FaCheckCircle } from 'react-icons/fa';

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

  // Stage colors
  const stageColors = {
    discovery: {
      primary: '#7C3AED',
      light: '#A78BFA', 
      glow: 'rgba(124, 58, 237, 0.4)'
    },
    conceptualization: {
      primary: '#EC4899',
      light: '#F9A8D4',
      glow: 'rgba(236, 72, 153, 0.4)'
    },
    design: {
      primary: '#F59E0B',
      light: '#FCD34D',
      glow: 'rgba(245, 158, 11, 0.4)'
    },
    presentation: {
      primary: '#EF4444',
      light: '#FCA5A5',
      glow: 'rgba(239, 68, 68, 0.4)'
    },
    finalization: {
      primary: '#8B5CF6',
      light: '#C4B5FD',
      glow: 'rgba(139, 92, 246, 0.4)'
    }
  };

  const processSteps = [
    {
      number: 1,
      id: 'discovery',
      title: "DISCOVERY",
      description: "Understanding your brand, goals, target audience",
      icon: <FaSearch className="text-4xl md:text-6xl" />,
      color: stageColors.discovery
    },
    {
      number: 2,
      id: 'conceptualization',
      title: "CONCEPTUALIZATION",
      description: "Developing creative concepts, design directions",
      icon: <FaLightbulb className="text-4xl md:text-6xl" />,
      color: stageColors.conceptualization
    },
    {
      number: 3,
      id: 'design',
      title: "DESIGN",
      description: "Creating, refining the final design",
      icon: <FaPalette className="text-4xl md:text-6xl" />,
      color: stageColors.design
    },
    {
      number: 4,
      id: 'presentation',
      title: "PRESENTATION",
      description: "Presenting design with rationale, context",
      icon: <FaDesktop className="text-4xl md:text-6xl" />,
      color: stageColors.presentation
    },
    {
      number: 5,
      id: 'finalization',
      title: "FINALIZATION",
      description: "Preparing files for production, delivery",
      icon: <FaCheckCircle className="text-4xl md:text-6xl" />,
      color: stageColors.finalization
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

        {/* Desktop Wave-Flow Layout - Hidden on Mobile */}
        <div className="hidden md:block relative py-20">
          {/* SVG Wave Path Container */}
          <div className="relative" style={{ height: '320px' }}>
            <svg 
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1200 320"
              preserveAspectRatio="none"
              style={{ overflow: 'visible' }}
            >
              <defs>
                {/* Gradient definitions for each stage */}
                <linearGradient id="gradient-discovery" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6B7280" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="gradient-conceptualization" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
                <linearGradient id="gradient-design" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#EC4899" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
                <linearGradient id="gradient-presentation" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#EF4444" />
                </linearGradient>
                <linearGradient id="gradient-finalization" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#EF4444" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>

              {/* Wave paths - each segment animates in sequence */}
              {/* Path 1: Start to Discovery (down wave) */}
              <motion.path
                d="M 60 160 Q 120 200, 180 160"
                fill="none"
                stroke="url(#gradient-discovery)"
                strokeWidth="4"
                strokeDasharray="12 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
              />

              {/* Path 2: Discovery to Conceptualization (up wave) */}
              <motion.path
                d="M 180 160 Q 300 100, 420 160"
                fill="none"
                stroke="url(#gradient-conceptualization)"
                strokeWidth="4"
                strokeDasharray="12 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              />

              {/* Path 3: Conceptualization to Design (down wave) */}
              <motion.path
                d="M 420 160 Q 540 220, 660 160"
                fill="none"
                stroke="url(#gradient-design)"
                strokeWidth="4"
                strokeDasharray="12 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.7, delay: 1.0, ease: "easeInOut" }}
              />

              {/* Path 4: Design to Presentation (up wave) */}
              <motion.path
                d="M 660 160 Q 780 100, 900 160"
                fill="none"
                stroke="url(#gradient-presentation)"
                strokeWidth="4"
                strokeDasharray="12 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.7, ease: "easeInOut" }}
              />

              {/* Path 5: Presentation to Finalization (down wave) */}
              <motion.path
                d="M 900 160 Q 1020 220, 1140 160"
                fill="none"
                stroke="url(#gradient-finalization)"
                strokeWidth="4"
                strokeDasharray="12 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.7, delay: 2.3, ease: "easeInOut" }}
              />
            </svg>

            {/* Stage Circles positioned along the wave */}
            <div className="absolute inset-0 flex justify-between items-center px-8">
              {processSteps.map((step, index) => {
                // Calculate animation delays based on spec
                const delays = [0, 0.5, 1.0, 1.7, 2.3];
                const delay = delays[index];
                
                return (
                  <div key={step.number} className="flex flex-col items-center" style={{ flex: '0 0 auto' }}>
                    {/* Circle Container */}
                    <motion.div
                      className="group relative cursor-pointer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { 
                        opacity: 1, 
                        scale: [0, 1.1, 1],
                      } : { opacity: 0, scale: 0 }}
                      transition={{ 
                        delay: delay,
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      whileHover={{
                        scale: 1.08,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                    >
                      {/* Circle with animated border */}
                      <motion.div
                        className="relative w-36 h-36 rounded-full bg-white flex items-center justify-center"
                        style={{
                          border: `8px dashed ${step.color.primary}`,
                          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
                        }}
                        initial={{ borderStyle: 'dashed' }}
                        animate={isInView ? { 
                          borderStyle: ['dashed', 'dashed', 'solid'],
                          boxShadow: [
                            '0px 8px 24px rgba(0, 0, 0, 0.15)',
                            '0px 8px 24px rgba(0, 0, 0, 0.15)',
                            `0px 8px 24px ${step.color.glow}`
                          ]
                        } : { borderStyle: 'dashed' }}
                        transition={{ 
                          delay: delay,
                          duration: 0.6,
                        }}
                        whileHover={{
                          boxShadow: `0px 16px 40px ${step.color.glow}`,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {/* Icon */}
                        <motion.div
                          style={{ color: step.color.primary }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: delay + 0.2, duration: 0.4 }}
                          whileHover={{ 
                            rotate: 5,
                            transition: { duration: 0.3 }
                          }}
                        >
                          {step.icon}
                        </motion.div>
                      </motion.div>

                      {/* Outer ring glow effect on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                          border: `2px solid ${step.color.primary}`,
                          opacity: 0,
                        }}
                        whileHover={{
                          opacity: [0, 0.5, 0],
                          scale: [1, 1.15, 1.15],
                          transition: { duration: 0.6, repeat: Infinity }
                        }}
                      />
                    </motion.div>

                    {/* Title and Description */}
                    <motion.div
                      className="text-center mt-8 max-w-[220px]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: delay + 0.3, duration: 0.5 }}
                    >
                      <h3 
                        className="text-2xl font-bold mb-4"
                        style={{ color: step.color.primary }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-base leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final flourish animation */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={isInView ? { 
              opacity: [0, 0, 0, 0, 0.3, 0],
            } : { opacity: 0 }}
            transition={{ 
              duration: 3.5,
              times: [0, 0.85, 0.87, 0.90, 0.93, 1],
              ease: "easeInOut"
            }}
          >
            <div 
              className="w-full h-full"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent)',
                filter: 'blur(20px)'
              }}
            />
          </motion.div>
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
