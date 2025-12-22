import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaPalette, FaBox, FaLightbulb, FaAward, FaFigma, FaHeart, FaRocket, FaStar, FaBolt } from 'react-icons/fa';
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiSketch, SiCanva, SiBlender } from 'react-icons/si';
import DesignProcess from './DesignProcess';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Disable parallax on mobile for performance
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [100, -100]);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Why (name) reasons
  const whyReasons = [
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Passion-Driven",
      description: "Every design is crafted with love and dedication to excellence",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising on quality",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaStar className="text-3xl" />,
      title: "Premium Quality",
      description: "Award-winning designs that exceed expectations",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: <FaBolt className="text-3xl" />,
      title: "Innovative Ideas",
      description: "Fresh perspectives and creative solutions",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  // Modern tools and technologies with brand logos
  const tools = [
    { name: "Adobe Illustrator", icon: <SiAdobeillustrator />, color: "from-orange-600 to-yellow-600" },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop />, color: "from-blue-600 to-cyan-600" },
    { name: "Figma", icon: <FaFigma />, color: "from-purple-600 to-pink-600" },
    { name: "Adobe InDesign", icon: <SiAdobeindesign />, color: "from-pink-600 to-rose-600" },
    { name: "Sketch", icon: <SiSketch />, color: "from-amber-600 to-orange-600" },
    { name: "Blender 3D", icon: <SiBlender />, color: "from-blue-600 to-indigo-600" },
  ];

  const skills = [
    {
      icon: <FaPalette className="text-4xl" />,
      title: "Logo Design",
      description: "Creating unique and memorable brand identities that stand out",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: <FaBox className="text-4xl" />,
      title: "Product Packaging",
      description: "Designing packaging that captivates and converts customers",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Creative Solutions",
      description: "Innovative design approaches for complex branding challenges",
      gradient: "from-amber-600 to-orange-600"
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: "Award-Winning",
      description: "Recognized excellence in design and client satisfaction",
      gradient: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-slate-900 overflow-hidden" ref={ref}>
      {/* Background decorative elements - Static on mobile */}
      {!isMobile && (
        <>
          <motion.div 
            style={{ y }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          />
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          />
        </>
      )}
      {isMobile && (
        <>
          <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-xl opacity-30" />
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-xl opacity-30" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center space-y-6"
          >
            {/* Chip badge - Remove pulsing/floating animations on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { 
                opacity: 1, 
                scale: 1,
              } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium w-fit"
            >
              {!isMobile && (
                <motion.span 
                  className="w-2 h-2 bg-emerald-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
              {isMobile && (
                <span className="w-2 h-2 bg-emerald-400 rounded-full" />
              )}
              <span>
                Available for logo &amp; packaging projects
              </span>
            </motion.div>

            {/* Large heading with enhanced text animations */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                Brand identities
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block"
              >
                that
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                sell on the shelf.
              </motion.span>
            </motion.h1>

            {/* Subtitle paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed"
            >
              (name) designs logos, packaging systems, and visual guidelines that make products feel premium, recognizable, and consistent across every touchpoint.
            </motion.p>

            {/* Three buttons in a row with enhanced hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <motion.button 
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-colors relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(168, 85, 247, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">View selected work</span>
              </motion.button>
              <motion.button 
                className="px-6 py-3 glass-effect hover:bg-white/10 text-white rounded-full font-medium transition-colors"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(168, 85, 247, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Why (name)
              </motion.button>
              <motion.button 
                className="px-6 py-3 glass-effect hover:bg-white/10 text-white rounded-full font-medium transition-colors flex items-center gap-2"
                whileHover={{ 
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Copy email</span>
                <motion.svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </motion.svg>
              </motion.button>
            </motion.div>

            {/* Tag badges at bottom with stagger animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-2 pt-4"
            >
              {["Brand systems", "Logo suites", "Packaging design", "Print-ready files", "Guidelines"].map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ 
                    delay: 0.5 + index * 0.1,
                    duration: 0.5
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(168, 85, 247, 0.1)",
                    borderColor: "rgba(168, 85, 247, 0.3)"
                  }}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Glassmorphism card with stagger animations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <motion.div 
              className="glass-effect rounded-3xl p-6 md:p-8 space-y-6"
              whileHover={{ 
                boxShadow: "0 20px 60px rgba(168, 85, 247, 0.2)",
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <motion.div 
                className="flex items-center justify-between mb-2"
                initial={{ opacity: 0, y: -10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-white">Signature strengths</h3>
                <motion.svg 
                  className="w-5 h-5 text-purple-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.div>

              {/* Subtitle */}
              <motion.p 
                className="text-slate-400 text-sm"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Clean marks • Bold shelf impact
              </motion.p>

              {/* Two stat cards in a row with stagger */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="glass-effect rounded-2xl p-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(168, 85, 247, 0.1)"
                  }}
                >
                  <div className="text-xs text-slate-500 mb-2">Avg. turnaround</div>
                  <div className="text-2xl font-bold text-white mb-2">5-10 days</div>
                  <div className="text-xs text-slate-500">Concepts → refinement → ready files</div>
                </motion.div>
                <motion.div 
                  className="glass-effect rounded-2xl p-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(168, 85, 247, 0.1)"
                  }}
                >
                  <div className="text-xs text-slate-500 mb-2">Deliverables</div>
                  <div className="text-lg font-bold text-white mb-2">AI • PDF • PNG</div>
                  <div className="text-xs text-slate-500">Print &amp; digital exports included</div>
                </motion.div>
              </div>

              {/* Design style card */}
              <motion.div 
                className="glass-effect rounded-2xl p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(168, 85, 247, 0.1)"
                }}
              >
                <div className="text-xs text-slate-500 mb-2">Design style</div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="text-lg font-bold text-white">Minimal, confident, modern</div>
                  <motion.span 
                    className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-medium whitespace-nowrap"
                    whileHover={{ scale: 1.1 }}
                  >
                    Shelf-first
                  </motion.span>
                </div>
                <p className="text-xs text-slate-500">
                  Focused on creating designs that stand out on retail shelves and connect with customers at first glance.
                </p>
              </motion.div>

              {/* Tip text at bottom */}
              <motion.div 
                className="text-xs text-slate-500 italic pt-4 border-t border-white/5"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <span className="font-semibold text-slate-400">Tip:</span> Replace this hero card with your best packaging mockup grid or Dribbble shots.
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* New Layout: Designer Photo + Why Harry Section */}
        {/* Mobile: Photo Right, Why Harry Left (side by side) | Desktop: Why Harry Left, Photo Right */}
        <div className="grid grid-cols-2 gap-6 md:gap-8 mb-16">
          {/* Left Side: Why Harry */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-1"
          >
            <h3 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-white">
              Why <span className="text-gradient">(name)?</span>
            </h3>
            <div className="space-y-3 md:space-y-4">
              {whyReasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={!isMobile ? { 
                    x: 10,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  } : {}}
                  className="group relative p-4 md:p-6 glass-effect rounded-xl md:rounded-2xl overflow-hidden"
                  onMouseEnter={() => !isMobile && setHoveredCard(reason.title)}
                  onMouseLeave={() => !isMobile && setHoveredCard(null)}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 transition-opacity duration-500`}
                    animate={{
                      opacity: !isMobile && hoveredCard === reason.title ? 0.15 : 0,
                    }}
                  />
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-start gap-3 md:gap-4">
                    <motion.div
                      animate={{
                        scale: !isMobile && hoveredCard === reason.title ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-purple-400 text-2xl md:text-3xl"
                    >
                      {reason.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-white">{reason.title}</h4>
                      <p className="text-slate-400 text-sm md:text-sm leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Designer Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2"
          >
            <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden glass-effect p-6 md:p-8">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-indigo-600/20" />
              
              {/* Designer Photo */}
              <div className="relative h-full flex items-center justify-center">
                <motion.div
                  animate={!isMobile ? {
                    y: [0, -20, 0],
                  } : {}}
                  transition={!isMobile ? {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  } : {}}
                  className="relative"
                >
                  {/* Photo placeholder - using a professional avatar */}
                  <div className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
                    {imageError ? (
                      <div className="text-4xl md:text-6xl">👨‍🎨</div>
                    ) : (
                      <img 
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Designer&backgroundColor=transparent&style=circle" 
                        alt="(name) - Creative Designer"
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                      />
                    )}
                  </div>
                  
                  {/* Decorative elements - No rotation on mobile */}
                  {!isMobile && (
                    <>
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 border-2 md:border-4 border-purple-500/50 rounded-full"
                      />
                      <motion.div
                        animate={{
                          rotate: [0, -360],
                        }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-10 h-10 md:w-16 md:h-16 border-2 md:border-4 border-pink-500/50 rounded-lg"
                      />
                    </>
                  )}
                  {isMobile && (
                    <>
                      <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 border-2 md:border-4 border-purple-500/50 rounded-full" />
                      <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-10 h-10 md:w-16 md:h-16 border-2 md:border-4 border-pink-500/50 rounded-lg" />
                    </>
                  )}
                </motion.div>
              </div>
              
              {/* Stats overlay - hidden on mobile to save space */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 hidden md:flex justify-around gap-4">
                {[
                  { num: "5+", label: "Years" },
                  { num: "200+", label: "Projects" },
                  { num: "150+", label: "Clients" }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="glass-effect px-4 py-3 rounded-xl text-center"
                  >
                    <div className="text-2xl font-bold text-gradient">{stat.num}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section - now below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
            Core <span className="text-gradient">Expertise</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={!isMobile ? { 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                } : {}}
                className="group relative p-6 glass-effect rounded-3xl overflow-hidden"
                onMouseEnter={() => !isMobile && setHoveredCard(skill.title)}
                onMouseLeave={() => !isMobile && setHoveredCard(null)}
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 transition-opacity duration-500`}
                  animate={{
                    opacity: !isMobile && hoveredCard === skill.title ? 0.15 : 0,
                  }}
                />
                
                <motion.div
                  animate={{
                    rotate: !isMobile && hoveredCard === skill.title ? [0, -10, 10, 0] : 0,
                    scale: !isMobile && hoveredCard === skill.title ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-purple-400 mb-4 relative z-10"
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 text-white relative z-10">{skill.title}</h3>
                <p className="text-slate-400 text-sm relative z-10">{skill.description}</p>
                
                {/* Glow effect */}
                {!isMobile && (
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300"
                    animate={{
                      opacity: hoveredCard === skill.title ? 1 : 0,
                    }}
                    style={{
                      boxShadow: `0 0 30px rgba(168, 85, 247, 0.4)`,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section with Brand Logos - New Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
            Design <span className="text-gradient">Arsenal</span>
          </h3>
          <div className="relative overflow-hidden rounded-3xl glass-effect p-8">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ 
                    delay: 0.4 + index * 0.05, 
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={!isMobile ? { 
                    scale: 1.15,
                    y: -8,
                    transition: { duration: 0.2 }
                  } : {}}
                  className="group relative flex flex-col items-center justify-center"
                  onMouseEnter={() => !isMobile && setHoveredCard(tool.name)}
                  onMouseLeave={() => !isMobile && setHoveredCard(null)}
                >
                  {/* Icon container with gradient background */}
                  <motion.div
                    className={`relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-br ${tool.color}`}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${tool.color}`}
                      animate={{
                        opacity: !isMobile && hoveredCard === tool.name ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <motion.div 
                      className="text-3xl md:text-4xl text-white relative z-10"
                      animate={{
                        rotateY: !isMobile && hoveredCard === tool.name ? 360 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {tool.icon}
                    </motion.div>
                  </motion.div>
                  
                  <span className="text-xs text-slate-400 text-center mt-3 group-hover:text-white transition-colors truncate max-w-full block">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { number: "200+", label: "Projects Completed", gradient: "from-purple-600 to-pink-600" },
            { number: "150+", label: "Happy Clients", gradient: "from-blue-600 to-cyan-600" },
            { number: "50+", label: "Logos Designed", gradient: "from-amber-600 to-orange-600" },
            { number: "100+", label: "Packages Created", gradient: "from-emerald-600 to-teal-600" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ 
                delay: 0.6 + index * 0.08, 
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={!isMobile ? { 
                scale: 1.08,
                y: -5,
                transition: { duration: 0.2 }
              } : {}}
              className="group relative p-6 glass-effect rounded-2xl overflow-hidden"
              onMouseEnter={() => !isMobile && setHoveredCard(stat.label)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 transition-opacity duration-300`}
                animate={{
                  opacity: !isMobile && hoveredCard === stat.label ? 0.15 : 0,
                }}
              />
              
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-gradient mb-2 relative z-10"
                animate={{
                  scale: !isMobile && hoveredCard === stat.label ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-slate-400 text-sm md:text-base relative z-10 group-hover:text-slate-300 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Design Process Section */}
        <DesignProcess />
      </div>
    </section>
  );
};

export default About;
