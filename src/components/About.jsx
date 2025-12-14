import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaPalette, FaBox, FaLightbulb, FaAward, FaFigma, FaHeart, FaRocket, FaStar, FaBolt } from 'react-icons/fa';
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiSketch, SiCanva, SiBlender } from 'react-icons/si';

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

  // Why Harry reasons
  const whyHarry = [
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-purple-400 text-sm tracking-[0.3em] uppercase font-medium">About Me</span>
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

        {/* New Layout: Designer Photo + Why Harry Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Side: Why Harry */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Why <span className="text-gradient">Harry?</span>
            </h3>
            <div className="space-y-4">
              {whyHarry.map((reason, index) => (
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
                  className="group relative p-6 glass-effect rounded-2xl overflow-hidden"
                  onMouseEnter={() => !isMobile && setHoveredCard(reason.title)}
                  onMouseLeave={() => !isMobile && setHoveredCard(null)}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 transition-opacity duration-500`}
                    animate={{
                      opacity: !isMobile && hoveredCard === reason.title ? 0.15 : 0,
                    }}
                  />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <motion.div
                      animate={{
                        scale: !isMobile && hoveredCard === reason.title ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-purple-400"
                    >
                      {reason.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2 text-white">{reason.title}</h4>
                      <p className="text-slate-400 text-sm">{reason.description}</p>
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
            className="relative"
          >
            <div className="relative aspect-square lg:aspect-auto lg:h-full rounded-3xl overflow-hidden glass-effect p-8">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-indigo-600/20" />
              
              {/* Designer Photo */}
              <div className="relative h-full flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  {/* Photo placeholder - using a professional avatar */}
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
                    {imageError ? (
                      <div className="text-6xl">👨‍🎨</div>
                    ) : (
                      <img 
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Harry&backgroundColor=transparent&style=circle" 
                        alt="Harry - Creative Designer"
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                      />
                    )}
                  </div>
                  
                  {/* Decorative elements */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute -top-4 -right-4 w-20 h-20 border-4 border-purple-500/50 rounded-full"
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
                    className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-pink-500/50 rounded-lg"
                  />
                </motion.div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-around gap-4">
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
      </div>
    </section>
  );
};

export default About;
