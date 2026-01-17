import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaPalette, FaBox, FaLightbulb, FaAward, FaFigma, FaHeart, FaRocket, FaStar, FaBolt } from 'react-icons/fa';
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiSketch, SiBlender } from 'react-icons/si';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [cardStack, setCardStack] = useState([0, 1, 2, 3]); // Track card order for mobile stack
  const [isAutoPlaying, setIsAutoPlaying] = useState(true); // Auto-play state
  const autoPlayTimerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-advance cards every 4 seconds
  useEffect(() => {
    if (!isMobile || !isAutoPlaying || !isInView) return;

    autoPlayTimerRef.current = setInterval(() => {
      setCardStack(prev => {
        const newStack = [...prev];
        const topCard = newStack.shift();
        newStack.push(topCard);
        return newStack;
      });
    }, 4000);

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isMobile, isAutoPlaying, isInView]);

  // Handle card swipe dismiss on mobile
  const handleDragEnd = (event, info) => {
    // Pause auto-play on user interaction
    setIsAutoPlaying(false);

    // If swiped up significantly, move to next card
    if (info.offset.y < -100) {
      setCardStack(prev => {
        const newStack = [...prev];
        const topCard = newStack.shift();
        newStack.push(topCard);
        return newStack;
      });
    }
  };

  // Toggle auto-play
  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Why Harry reasons
  const whyHarry = [
    {
      icon: <FaHeart className="text-3xl md:text-4xl" />,
      title: "Passion-Driven",
      description: "Every design is crafted with love and dedication to excellence",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <FaRocket className="text-3xl md:text-4xl" />,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising on quality",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaStar className="text-3xl md:text-4xl" />,
      title: "Premium Quality",
      description: "Award-winning designs that exceed expectations",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: <FaBolt className="text-3xl md:text-4xl" />,
      title: "Innovative Ideas",
      description: "Fresh perspectives and creative solutions",
      color: "from-crimson to-crimson-dark"
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
    <section id="about" className="relative py-20 md:py-32 bg-eerie-light overflow-hidden" ref={ref}>
      {/* Background decorative elements with enhanced animations */}
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
        className="absolute top-20 right-0 w-96 h-96 bg-crimson/10 rounded-full blur-3xl"
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
        className="absolute bottom-20 left-0 w-96 h-96 bg-crimson-dark/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-crimson text-sm tracking-[0.3em] uppercase font-medium">About Me</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Meet Your <br />
            <span className="text-gradient">Creative Partner</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            I&apos;m a passionate designer specializing in creating stunning logos and product packaging designs
            that help brands stand out in today&apos;s competitive market.
          </p>
        </motion.div>

        {/* SPLIT HERO LAYOUT - Desktop: Photo Left, Cards Right | Mobile: Stacked */}
        <div className="mb-16">
          {/* Section Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-white text-center"
          >
            Why <span className="text-gradient">Harry?</span>
          </motion.h3>

          {/* Split Layout Container */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">

            {/* LEFT SIDE - Designer Photo (40% width on desktop) */}
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
                      ease: 'linear'
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
                        ease: "easeInOut"
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
                          ease: "linear"
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
                          ease: "linear"
                        }}
                        className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-14 h-14 md:w-20 md:h-20 border-4 border-pink-500/40 rounded-lg"
                      />
                    </motion.div>
                  </div>

                  {/* Stats overlay */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-around gap-2">
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

            {/* RIGHT SIDE - Why Harry Cards */}
            {/* Desktop: Grid Layout | Mobile: Peek & Stack Layout */}

            {!isMobile ? (
              // DESKTOP VERSION - Grid Layout
              <motion.div
                className="lg:col-span-3 order-2 lg:order-2"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  {whyHarry.map((reason, index) => (
                    <motion.div
                      key={reason.title}
                      className="group relative p-5 md:p-7 glass-effect rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                        }
                      }}
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                        rotateX: 5,
                        rotateY: 5,
                        transition: { duration: 0.3, ease: 'easeOut' }
                      }}
                      onMouseEnter={() => setHoveredCard(reason.title)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Animated gradient overlay */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0`}
                        animate={{
                          opacity: hoveredCard === reason.title ? 0.2 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Glow effect on hover */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 blur-xl bg-gradient-to-br ${reason.color}`}
                        animate={{
                          opacity: hoveredCard === reason.title ? 0.3 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                        style={{ zIndex: -1 }}
                      />

                      <div className="relative z-10 flex items-start gap-4">
                        {/* Icon with bounce animation */}
                        <motion.div
                          animate={{
                            scale: hoveredCard === reason.title ? 1.15 : 1,
                            rotate: hoveredCard === reason.title ? [0, -10, 10, 0] : 0,
                          }}
                          transition={{ duration: 0.5 }}
                          className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-white shadow-lg`}
                        >
                          {reason.icon}
                        </motion.div>

                        <div className="flex-1 pt-1">
                          <h4 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-gradient transition-all duration-300">
                            {reason.title}
                          </h4>
                          <p className="text-slate-400 text-sm md:text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                            {reason.description}
                          </p>
                        </div>
                      </div>

                      {/* Bottom shine effect */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              // MOBILE VERSION - Peek & Stack Layout
              <div className="col-span-1 order-2 relative h-[500px] flex items-center justify-center px-4">
                {/* Instruction text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-0 left-0 right-0 text-center text-slate-400 text-sm mb-4 z-20"
                >
                  👆 Swipe up to see next card
                </motion.div>

                {/* Play/Pause Control */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5 }}
                  onClick={toggleAutoPlay}
                  className="absolute top-8 right-6 z-30 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300 active:scale-95 shadow-lg"
                >
                  {isAutoPlaying ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5 3.5h2v9H5v-9zm4 0h2v9H9v-9z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4 3v10l8-5-8-5z" />
                    </svg>
                  )}
                </motion.button>

                {/* Stacked Cards Container */}
                <div className="relative w-full max-w-sm h-full flex items-center">
                  {cardStack.map((cardIndex, stackPosition) => {
                    const reason = whyHarry[cardIndex];
                    const isTopCard = stackPosition === 0;
                    const isVisible = stackPosition < 3; // Only show top 3 cards in stack

                    if (!isVisible) return null;

                    return (
                      <motion.div
                        key={`${cardIndex}-${stackPosition}`}
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{
                          scale: 1 - (stackPosition * 0.05),
                          y: stackPosition * 15,
                          opacity: 1 - (stackPosition * 0.3),
                          zIndex: 10 - stackPosition,
                          rotateZ: stackPosition * 2,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25
                        }}
                        drag={isTopCard ? "y" : false}
                        dragConstraints={{ top: -300, bottom: 50 }}
                        dragElastic={0.7}
                        onDragEnd={isTopCard ? handleDragEnd : undefined}
                        style={{
                          cursor: isTopCard ? 'grab' : 'default',
                          touchAction: isTopCard ? 'none' : 'auto'
                        }}
                      >
                        <div
                          className="w-full p-6 glass-effect rounded-3xl overflow-hidden shadow-2xl"
                          style={{
                            background: stackPosition === 0
                              ? 'rgba(30, 41, 59, 0.8)'
                              : 'rgba(30, 41, 59, 0.6)',
                            backdropFilter: 'blur(20px)',
                            border: stackPosition === 0
                              ? '1px solid rgba(139, 92, 246, 0.3)'
                              : '1px solid rgba(100, 116, 139, 0.2)'
                          }}
                        >
                          {/* Gradient overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-10`} />

                          {/* Content */}
                          <div className="relative z-10">
                            {/* Icon */}
                            <motion.div
                              animate={{
                                scale: isTopCard ? [1, 1.05, 1] : 1,
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-white shadow-lg`}
                            >
                              <div className="text-4xl">
                                {reason.icon}
                              </div>
                            </motion.div>

                            <h4 className="text-2xl font-bold mb-3 text-white text-center">
                              {reason.title}
                            </h4>
                            <p className="text-slate-300 text-base leading-relaxed text-center">
                              {reason.description}
                            </p>

                            {/* Card indicator */}
                            <div className="flex justify-center gap-2 mt-6">
                              {whyHarry.map((_, i) => (
                                <div
                                  key={i}
                                  className={`h-1.5 rounded-full transition-all duration-300 ${i === cardIndex
                                    ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500'
                                    : 'w-1.5 bg-slate-600'
                                    }`}
                                />
                              ))}
                            </div>
                          </div>

                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"
                            animate={{
                              x: isTopCard ? ['-100%', '100%'] : '-100%',
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Stack depth indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 text-center text-slate-500 text-xs"
                >
                  {cardStack[0] + 1} of {whyHarry.length}
                </motion.div>
              </div>
            )}
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
            Core <span className="text-gradient">Expertise</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                  y: -12,
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" }
                } : {}}
                className="group relative p-6 md:p-7 glass-effect rounded-3xl overflow-hidden cursor-pointer"
                onMouseEnter={() => !isMobile && setHoveredCard(skill.title)}
                onMouseLeave={() => !isMobile && setHoveredCard(null)}
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 transition-opacity duration-500`}
                  animate={{
                    opacity: !isMobile && hoveredCard === skill.title ? 0.2 : 0,
                  }}
                />

                <motion.div
                  animate={{
                    rotate: !isMobile && hoveredCard === skill.title ? [0, -10, 10, 0] : 0,
                    scale: !isMobile && hoveredCard === skill.title ? 1.15 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-purple-400 mb-4 relative z-10"
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white relative z-10 group-hover:text-gradient transition-all duration-300">
                  {skill.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base relative z-10 group-hover:text-slate-300 transition-colors">
                  {skill.description}
                </p>

                {/* Glow effect */}
                {!isMobile && (
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300"
                    animate={{
                      opacity: hoveredCard === skill.title ? 1 : 0,
                    }}
                    style={{
                      boxShadow: `0 0 40px rgba(168, 85, 247, 0.5)`,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section with Brand Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
            Design <span className="text-gradient">Arsenal</span>
          </h3>
          <div className="relative overflow-hidden rounded-3xl glass-effect p-8 md:p-10">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{
                    delay: 0.5 + index * 0.05,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={!isMobile ? {
                    scale: 1.2,
                    y: -10,
                    transition: { duration: 0.2 }
                  } : {}}
                  className="group relative flex flex-col items-center justify-center"
                  onMouseEnter={() => !isMobile && setHoveredCard(tool.name)}
                  onMouseLeave={() => !isMobile && setHoveredCard(null)}
                >
                  {/* Icon container with gradient background */}
                  <motion.div
                    className={`relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-br ${tool.color} shadow-lg`}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${tool.color}`}
                      animate={{
                        opacity: !isMobile && hoveredCard === tool.name ? 1 : 0.9,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    <motion.div
                      className="text-3xl md:text-5xl text-white relative z-10"
                      animate={{
                        rotateY: !isMobile && hoveredCard === tool.name ? 360 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {tool.icon}
                    </motion.div>
                  </motion.div>

                  <span className="text-xs md:text-sm text-slate-400 text-center mt-3 group-hover:text-white transition-colors truncate max-w-full block font-medium">
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
          transition={{ delay: 0.6, duration: 0.8 }}
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
                delay: 0.7 + index * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={!isMobile ? {
                scale: 1.1,
                y: -8,
                transition: { duration: 0.2 }
              } : {}}
              className="group relative p-6 md:p-7 glass-effect rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => !isMobile && setHoveredCard(stat.label)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 transition-opacity duration-300`}
                animate={{
                  opacity: !isMobile && hoveredCard === stat.label ? 0.2 : 0,
                }}
              />

              <motion.div
                className="text-3xl md:text-5xl font-bold text-gradient mb-2 relative z-10"
                animate={{
                  scale: !isMobile && hoveredCard === stat.label ? 1.15 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-slate-400 text-sm md:text-base relative z-10 group-hover:text-slate-300 transition-colors font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
