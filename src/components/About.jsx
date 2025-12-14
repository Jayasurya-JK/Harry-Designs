import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaPalette, FaBox, FaLightbulb, FaAward, FaFigma } from 'react-icons/fa';
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiSketch, SiCanva, SiBlender } from 'react-icons/si';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

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
            Crafting Excellence <br />
            <span className="text-gradient">Through Design</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            I&apos;m a passionate designer specializing in creating stunning logos and product packaging designs 
            that help brands stand out in today&apos;s competitive market.
          </p>
        </motion.div>

        {/* Bento-style Grid Layout - Modern asymmetric design */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {/* Large feature card - spans 2 columns on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 lg:row-span-2 group relative p-8 glass-effect rounded-3xl overflow-hidden"
            onMouseEnter={() => setHoveredCard('main')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 transition-opacity duration-500`}
              animate={{
                opacity: hoveredCard === 'main' ? 1 : 0,
              }}
            />
            
            <div className="relative z-10">
              <motion.div 
                className="text-6xl mb-6"
                animate={{
                  rotate: hoveredCard === 'main' ? [0, -5, 5, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <FaPalette className="text-purple-400" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-4 text-white">Design Philosophy</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Every brand has a story to tell. My approach combines strategic thinking with creative 
                excellence to craft designs that don&apos;t just look good, but communicate your brand&apos;s 
                unique value proposition.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Strategic', 'Creative', 'Memorable'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white/10 rounded-full text-sm text-purple-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills cards with gradient backgrounds */}
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
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative p-6 glass-effect rounded-3xl overflow-hidden"
              onMouseEnter={() => setHoveredCard(skill.title)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 transition-opacity duration-500`}
                animate={{
                  opacity: hoveredCard === skill.title ? 0.15 : 0,
                }}
              />
              
              <motion.div
                animate={{
                  rotate: hoveredCard === skill.title ? [0, -10, 10, 0] : 0,
                  scale: hoveredCard === skill.title ? 1.1 : 1,
                }}
                transition={{ duration: 0.5 }}
                className="text-purple-400 mb-4 relative z-10"
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 text-white relative z-10">{skill.title}</h3>
              <p className="text-slate-400 text-sm relative z-10">{skill.description}</p>
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300"
                animate={{
                  opacity: hoveredCard === skill.title ? 1 : 0,
                }}
                style={{
                  boxShadow: `0 0 30px rgba(168, 85, 247, 0.4)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Tools Section with Brand Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
            Tools & <span className="text-gradient">Technologies</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
                whileHover={{ 
                  scale: 1.15,
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group relative aspect-square flex flex-col items-center justify-center p-6 glass-effect rounded-2xl overflow-hidden"
                onMouseEnter={() => setHoveredCard(tool.name)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 transition-opacity duration-300`}
                  animate={{
                    opacity: hoveredCard === tool.name ? 0.2 : 0,
                  }}
                />
                
                <motion.div 
                  className="text-4xl md:text-5xl text-white mb-2 relative z-10"
                  animate={{
                    rotateY: hoveredCard === tool.name ? 360 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {tool.icon}
                </motion.div>
                <span className="text-xs text-slate-400 text-center relative z-10 group-hover:text-white transition-colors">
                  {tool.name}
                </span>
              </motion.div>
            ))}
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
              whileHover={{ 
                scale: 1.08,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative p-6 glass-effect rounded-2xl overflow-hidden"
              onMouseEnter={() => setHoveredCard(stat.label)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 transition-opacity duration-300`}
                animate={{
                  opacity: hoveredCard === stat.label ? 0.15 : 0,
                }}
              />
              
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-gradient mb-2 relative z-10"
                animate={{
                  scale: hoveredCard === stat.label ? 1.1 : 1,
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
