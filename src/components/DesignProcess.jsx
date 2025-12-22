import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  FaCompass, 
  FaChartLine, 
  FaLightbulb, 
  FaPencilRuler, 
  FaDesktop, 
  FaSyncAlt, 
  FaCheckCircle, 
  FaHandshake 
} from 'react-icons/fa';

const DesignProcess = () => {
  const ref = useRef(null);
  const scrollContainerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Process steps with icons
  const processSteps = [
    {
      icon: <FaCompass className="text-3xl" />,
      title: "Discovery",
      description: "Understanding your brand, goals, and target audience through in-depth research"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Research",
      description: "Analyzing market trends, competitors, and gathering data for informed decisions"
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Conceptualization",
      description: "Brainstorming creative ideas and developing unique design concepts"
    },
    {
      icon: <FaPencilRuler className="text-3xl" />,
      title: "Design & Refinement",
      description: "Creating detailed designs and refining them to perfection"
    },
    {
      icon: <FaDesktop className="text-3xl" />,
      title: "Presentation",
      description: "Showcasing the design concepts and explaining the creative rationale"
    },
    {
      icon: <FaSyncAlt className="text-3xl" />,
      title: "Revisions",
      description: "Incorporating feedback and iterating on the design based on your input"
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "Finalization",
      description: "Completing final touches and preparing all deliverables"
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Support",
      description: "Providing ongoing support and ensuring your complete satisfaction"
    }
  ];

  // Detect mobile/tablet devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track scroll position for progress indicators
  useEffect(() => {
    if (!isMobile || !scrollContainerRef.current) return;

    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const scrollLeft = container.scrollLeft;
      const cardWidth = container.scrollWidth / processSteps.length;
      const currentIndex = Math.round(scrollLeft / cardWidth);
      setActiveStep(currentIndex);
    };

    const container = scrollContainerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isMobile, processSteps.length]);

  // Navigate to specific step
  const scrollToStep = (index) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.scrollWidth / processSteps.length;
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth'
    });
  };

  return (
    <section id="process" className="relative py-20 md:py-32 bg-slate-950 overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            My <span className="text-gradient">Design Process</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A structured approach to creating exceptional designs from concept to completion
          </p>
        </motion.div>

        {/* Desktop Grid Layout (>= 1024px) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 relative">
          {/* Horizontal connecting line for desktop */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#a855f7] opacity-30 hidden lg:block" />
          
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative p-6 glass-effect rounded-3xl overflow-hidden h-full flex flex-col">
                {/* Hover gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                
                {/* Icon circle with rotating gradient ring */}
                <div className="relative mb-6 flex justify-center">
                  {/* Rotating gradient ring */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#a855f7] blur-sm opacity-50 group-hover:opacity-75 transition-opacity"
                  />
                  
                  {/* Icon container */}
                  <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-slate-900 border-2 border-purple-500/50 group-hover:border-pink-500/50 transition-colors z-10">
                    <div className="text-purple-400 group-hover:text-pink-400 transition-colors">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gradient transition-all">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Horizontal Scroll Layout (< 1024px) */}
        <div className="lg:hidden relative">
          {/* Horizontal connecting line for mobile */}
          <div className="absolute h-1 bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#a855f7] opacity-30" 
               style={{ top: '3rem', left: '5%', right: '5%' }} />
          
          {/* Scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="flex-shrink-0 snap-start w-[85vw] sm:w-[75vw]"
                style={{ 
                  maxWidth: '500px'
                }}
              >
                {/* Card */}
                <div className="relative p-6 glass-effect rounded-3xl overflow-hidden h-full flex flex-col">
                  {/* Gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0"
                    animate={{
                      opacity: activeStep === index ? 0.3 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Icon circle with rotating gradient ring */}
                  <div className="relative mb-6 flex justify-center">
                    {/* Rotating gradient ring */}
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#a855f7] blur-sm opacity-50"
                    />
                    
                    {/* Icon container */}
                    <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-slate-900 border-2 border-purple-500/50 z-10">
                      <div className="text-purple-400">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col text-center">
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {processSteps.map((step, index) => (
              <motion.button
                key={step.title}
                onClick={() => scrollToStep(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-gradient-to-r from-[#a855f7] to-[#ec4899] w-8' 
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
                aria-label={`Go to step ${index + 1}: ${step.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
