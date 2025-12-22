import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaApple, FaAmazon, FaGoogle, FaCoffee, FaLeaf, FaGem, FaWineBottle, FaTshirt, FaShoppingCart, FaMusic, FaFilm, FaCube, FaPalette, FaBox } from 'react-icons/fa';
import { SiNike, SiCocacola, SiStarbucks, SiAdidas, SiMcdonalds, SiSpotify, SiNetflix } from 'react-icons/si';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [previousFilter, setPreviousFilter] = useState('all');

  // Case Studies Data - initialized directly in state
  const [caseStudies, setCaseStudies] = useState([
    {
      id: 1,
      name: 'Aster Snacks',
      type: 'Packaging system',
      title: 'Shelf-ready refresh',
      category: 'Retail',
      description: 'Color-led pack architecture with bold type hierarchy for fast scanning.',
      tags: ['Packaging', 'Icons', 'Print'],
      color: 'from-blue-600 via-purple-500 to-violet-500',
      icon: <FaBox />
    },
    {
      id: 2,
      name: 'Vertex Studios',
      type: 'Logo + guidelines',
      title: 'Modular wordmark system',
      category: 'Creative',
      description: 'Geometric identity with adaptive lockups for various touchpoints.',
      tags: ['Branding', 'Identity', 'Guidelines'],
      color: 'from-emerald-600 via-teal-500 to-cyan-500',
      icon: <FaCube />
    },
    {
      id: 3,
      name: 'Bloom Organics',
      type: 'Full rebrand',
      title: 'Nature-first cosmetics',
      category: 'D2C',
      description: 'Sustainable beauty brand with earthy palette and botanical illustrations.',
      tags: ['Packaging', 'Web', 'Social'],
      color: 'from-rose-600 via-pink-500 to-fuchsia-500',
      icon: <FaLeaf />
    },
    {
      id: 4,
      name: 'Metro Coffee Co.',
      type: 'Packaging system',
      title: 'Artisan blend series',
      category: 'Retail',
      description: 'Minimalist approach highlighting origin stories and tasting notes.',
      tags: ['Packaging', 'Typography', 'Print'],
      color: 'from-amber-700 via-orange-600 to-red-500',
      icon: <FaCoffee />
    },
    {
      id: 5,
      name: 'Spark Ventures',
      type: 'Logo + guidelines',
      title: 'Dynamic tech identity',
      category: 'Creative',
      description: 'Forward-thinking brand with motion-first approach and vibrant gradients.',
      tags: ['Branding', 'Motion', 'Guidelines'],
      color: 'from-indigo-600 via-purple-500 to-pink-500',
      icon: <FaPalette />
    },
    {
      id: 6,
      name: 'Luxe Apparel',
      type: 'Full rebrand',
      title: 'Premium fashion line',
      category: 'D2C',
      description: 'Elegant serif typography paired with monochrome photography system.',
      tags: ['Branding', 'Web', 'Packaging'],
      color: 'from-slate-700 via-gray-600 to-zinc-500',
      icon: <FaTshirt />
    }
  ]);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Brands worked with
  const brands = [
    { name: 'Apple', icon: <FaApple />, color: 'from-slate-600 to-slate-800' },
    { name: 'Nike', icon: <SiNike />, color: 'from-orange-600 to-red-600' },
    { name: 'Coca Cola', icon: <SiCocacola />, color: 'from-red-600 to-red-800' },
    { name: 'Starbucks', icon: <SiStarbucks />, color: 'from-green-600 to-emerald-700' },
    { name: 'Amazon', icon: <FaAmazon />, color: 'from-orange-500 to-yellow-600' },
    { name: 'Google', icon: <FaGoogle />, color: 'from-blue-600 to-indigo-600' },
    { name: 'Adidas', icon: <SiAdidas />, color: 'from-slate-700 to-slate-900' },
    { name: 'Target', icon: <FaShoppingCart />, color: 'from-red-600 to-rose-800' },
    { name: 'McDonalds', icon: <SiMcdonalds />, color: 'from-yellow-500 to-red-600' },
    { name: 'Spotify', icon: <SiSpotify />, color: 'from-green-500 to-green-700' },
    { name: 'Netflix', icon: <SiNetflix />, color: 'from-red-600 to-red-800' },
  ];

  // Shuffle function for case studies
  const shuffleCaseStudies = () => {
    setCaseStudies(prev => {
      const shuffled = [...prev];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  };

  // Calculate animation distance based on actual card dimensions
  // Card width: 160px (w-40), Gap: 32px (gap-8)
  const CARD_WIDTH = 160;
  const CARD_GAP = 32;
  const scrollDistance = (CARD_WIDTH + CARD_GAP) * brands.length;

  // Enhanced portfolio items with brand names and realistic projects
  const portfolioItems = [
    { 
      id: 1, 
      category: 'logo', 
      title: 'Tech Startup Logo', 
      client: 'TechFlow',
      icon: <FaApple />,
      color: 'from-blue-600 via-cyan-500 to-teal-400',
      description: 'Modern minimal logo for tech company',
      size: 'tall' // for masonry effect
    },
    { 
      id: 2, 
      category: 'packaging', 
      title: 'Organic Tea Packaging', 
      client: 'Pure Leaf',
      icon: <FaLeaf />,
      color: 'from-emerald-600 via-green-500 to-teal-500',
      description: 'Eco-friendly tea box design',
      size: 'wide'
    },
    { 
      id: 3, 
      category: 'logo', 
      title: 'Restaurant Brand Identity', 
      client: 'Bistro Deluxe',
      icon: <FaCoffee />,
      color: 'from-orange-600 via-red-500 to-rose-500',
      description: 'Complete branding package',
      size: 'normal'
    },
    { 
      id: 4, 
      category: 'packaging', 
      title: 'Luxury Cosmetic Box', 
      client: 'Glow Beauty',
      icon: <FaGem />,
      color: 'from-rose-600 via-pink-500 to-fuchsia-500',
      description: 'Premium cosmetic packaging',
      size: 'normal'
    },
    { 
      id: 5, 
      category: 'logo', 
      title: 'Fitness Brand Logo', 
      client: 'PowerFit',
      icon: <SiNike />,
      color: 'from-amber-600 via-orange-500 to-red-500',
      description: 'Dynamic sports brand identity',
      size: 'wide'
    },
    { 
      id: 6, 
      category: 'packaging', 
      title: 'Artisan Chocolate', 
      client: 'Cacao Noir',
      icon: <SiCocacola />,
      color: 'from-amber-700 via-yellow-600 to-orange-500',
      description: 'Premium chocolate packaging',
      size: 'tall'
    },
    { 
      id: 7, 
      category: 'logo', 
      title: 'Fashion Label Identity', 
      client: 'Essence Apparel',
      icon: <FaTshirt />,
      color: 'from-purple-600 via-indigo-500 to-blue-500',
      description: 'Elegant fashion brand',
      size: 'normal'
    },
    { 
      id: 8, 
      category: 'packaging', 
      title: 'Premium Wine Label', 
      client: 'Vineyard Estate',
      icon: <FaWineBottle />,
      color: 'from-red-700 via-rose-600 to-pink-500',
      description: 'Sophisticated wine packaging',
      size: 'normal'
    },
    { 
      id: 9, 
      category: 'logo', 
      title: 'Coffee House Brand', 
      client: 'Urban Brew',
      icon: <SiStarbucks />,
      color: 'from-yellow-700 via-amber-600 to-orange-600',
      description: 'Contemporary cafe identity',
      size: 'wide'
    },
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  // Featured items - show only 2 initially
  const FEATURED_COUNT = 2;
  const featuredItems = portfolioItems.slice(0, FEATURED_COUNT);
  const displayItems = showAll ? filteredItems : featuredItems;

  const filterButtons = [
    { label: 'All Work', value: 'all', count: portfolioItems.length },
    { label: 'Logos', value: 'logo', count: portfolioItems.filter(i => i.category === 'logo').length },
    { label: 'Packaging', value: 'packaging', count: portfolioItems.filter(i => i.category === 'packaging').length },
  ];

  return (
    <section id="portfolio" className="relative py-20 md:py-32 bg-slate-950 overflow-hidden" ref={ref}>
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-purple-400 text-sm tracking-[0.3em] uppercase font-medium">Portfolio</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Brands I&apos;ve <span className="text-gradient">Worked With</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Trusted by leading global brands to deliver exceptional design solutions
          </p>
        </motion.div>

        {/* Infinite Scrolling Brands Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20 overflow-hidden"
        >
          <div className="relative">
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling brands container */}
            <div className="flex">
              {/* First set */}
              <motion.div
                animate={{
                  x: [0, -scrollDistance],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
                className="flex gap-8 pr-8"
              >
                {brands.map((brand, index) => (
                  <motion.div
                    key={`brand-1-${index}`}
                    whileHover={!isMobile ? { scale: 1.1, y: -10 } : {}}
                    className="group relative flex-shrink-0 w-40 h-40 glass-effect rounded-3xl flex flex-col items-center justify-center overflow-hidden"
                    onMouseEnter={() => !isMobile && setHoveredItem(brand.name)}
                    onMouseLeave={() => !isMobile && setHoveredItem(null)}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 transition-opacity duration-300`}
                      animate={{
                        opacity: !isMobile && hoveredItem === brand.name ? 0.2 : 0,
                      }}
                    />
                    <motion.div
                      className="text-6xl text-white relative z-10"
                      animate={{
                        scale: !isMobile && hoveredItem === brand.name ? 1.2 : 1,
                        rotate: !isMobile && hoveredItem === brand.name ? [0, -10, 10, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {brand.icon}
                    </motion.div>
                    <p className="text-sm text-slate-400 mt-4 relative z-10 group-hover:text-white transition-colors">
                      {brand.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Second set (duplicate for seamless loop) */}
              <motion.div
                animate={{
                  x: [0, -scrollDistance],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
                className="flex gap-8 pr-8"
              >
                {brands.map((brand, index) => (
                  <motion.div
                    key={`brand-2-${index}`}
                    whileHover={!isMobile ? { scale: 1.1, y: -10 } : {}}
                    className="group relative flex-shrink-0 w-40 h-40 glass-effect rounded-3xl flex flex-col items-center justify-center overflow-hidden"
                    onMouseEnter={() => !isMobile && setHoveredItem(brand.name)}
                    onMouseLeave={() => !isMobile && setHoveredItem(null)}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 transition-opacity duration-300`}
                      animate={{
                        opacity: !isMobile && hoveredItem === brand.name ? 0.2 : 0,
                      }}
                    />
                    <motion.div
                      className="text-6xl text-white relative z-10"
                      animate={{
                        scale: !isMobile && hoveredItem === brand.name ? 1.2 : 1,
                        rotate: !isMobile && hoveredItem === brand.name ? [0, -10, 10, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {brand.icon}
                    </motion.div>
                    <p className="text-sm text-slate-400 mt-4 relative z-10 group-hover:text-white transition-colors">
                      {brand.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Featured Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-4 text-white">
            Featured <span className="text-gradient">Projects</span>
          </h3>
          <p className="text-center text-slate-400 mb-12 text-sm md:text-base px-4">
            {showAll ? "Explore all my creative work" : "Showcasing my best design creations"}
          </p>
        </motion.div>

        {/* Case Studies & Concept Explorations Section */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mb-20"
          >
            {/* Section Header */}
            <div className="mb-12">
              <div className="flex items-center justify-center mb-4">
                <span className="flex items-center gap-2 text-xs md:text-sm text-slate-400 uppercase tracking-wider">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  Selected Work
                </span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
                <div className="flex-1">
                  <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                    Case studies &amp; concept{' '}
                    <span className="text-gradient">explorations</span>
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base max-w-2xl">
                    A curated set of logo systems and packaging projects. Click any card to view a compact case summary.
                  </p>
                </div>
                
                <motion.button
                  onClick={shuffleCaseStudies}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-effect px-6 py-3 rounded-full font-semibold text-white hover:bg-white/10 transition-all flex items-center gap-2 justify-center md:justify-start"
                >
                  <motion.span
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    🔀
                  </motion.span>
                  Shuffle
                </motion.button>
              </div>
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {caseStudies.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.5,
                      layout: { duration: 0.4 }
                    }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="group cursor-pointer"
                  >
                    <div className="glass-effect rounded-3xl p-6 h-full backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                      {/* Project Name Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20">
                          {project.name}
                        </span>
                      </div>

                      {/* Icon Preview Area */}
                      <motion.div 
                        className={`relative rounded-2xl bg-gradient-to-br ${project.color} p-8 mb-4 overflow-hidden`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Noise texture overlay */}
                        <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                          }}
                        />
                        <motion.div 
                          className="relative text-5xl text-white/90 flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {project.icon}
                        </motion.div>
                      </motion.div>

                      {/* Project Details */}
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <p className="text-xs text-slate-400 mb-1">{project.type}</p>
                            <h4 className="text-lg font-bold text-white group-hover:text-gradient transition-all">
                              {project.title}
                            </h4>
                          </div>
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 whitespace-nowrap">
                            {project.category}
                          </span>
                        </div>

                        <p className="text-sm text-slate-400 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* Animated Featured Projects Carousel - Only show when not viewing all */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {featuredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9, x: index === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: index === 0 ? -50 : 50 }}
                  transition={{ 
                    delay: 0.6 + index * 0.2, 
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={!isMobile ? {
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 }
                  } : {}}
                  className="group relative overflow-hidden rounded-3xl cursor-pointer"
                  onMouseEnter={() => !isMobile && setHoveredItem(item.id)}
                  onMouseLeave={() => !isMobile && setHoveredItem(null)}
                >
                  {/* Card container with larger aspect ratio for featured */}
                  <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                    {/* Animated gradient background */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                      animate={{
                        scale: !isMobile && hoveredItem === item.id ? 1.15 : 1,
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    
                    {/* Noise texture overlay */}
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                      }}
                    />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                      {/* Top section - Brand icon */}
                      <motion.div 
                        className="flex justify-between items-start"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.2 }}
                      >
                        <motion.div
                          animate={{
                            scale: !isMobile && hoveredItem === item.id ? 1.2 : 1,
                            rotate: !isMobile && hoveredItem === item.id ? 5 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="text-4xl md:text-6xl text-white/90 backdrop-blur-sm bg-white/10 p-3 md:p-4 rounded-xl md:rounded-2xl"
                        >
                          {item.icon}
                        </motion.div>
                        
                        <motion.span 
                          className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 glass-effect rounded-full text-white/90 backdrop-blur-md font-medium capitalize"
                          animate={{
                            y: !isMobile && hoveredItem === item.id ? -5 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.category}
                        </motion.span>
                      </motion.div>
                      
                      {/* Bottom section - Project info */}
                      <motion.div
                        className="text-white"
                      >
                        <motion.div
                          animate={{
                            y: !isMobile && hoveredItem === item.id ? -10 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-xs md:text-sm text-white/70 mb-1 md:mb-2 font-medium">Client</p>
                          <h3 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">{item.client}</h3>
                          <p className="text-base md:text-lg text-white/80 mb-2 md:mb-4">{item.title}</p>
                          <p className="text-xs md:text-sm text-white/70 mb-3 md:mb-4">{item.description}</p>
                        </motion.div>
                        
                        <motion.div
                          className="flex items-center gap-2 md:gap-3"
                          animate={{
                            x: !isMobile && hoveredItem === item.id ? 10 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="px-4 md:px-5 py-2 md:py-2.5 bg-white/20 backdrop-blur-md rounded-full text-xs md:text-sm font-medium">
                            Featured Project
                          </span>
                          <motion.span
                            animate={{ 
                              x: !isMobile && hoveredItem === item.id ? 5 : 0,
                              scale: !isMobile && hoveredItem === item.id ? 1.2 : 1 
                            }}
                            className="text-xl md:text-2xl"
                          >
                            →
                          </motion.span>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Animated border */}
                    {!isMobile && (
                      <motion.div
                        className="absolute inset-0 rounded-3xl border-2 border-white/0 transition-all duration-300"
                        animate={{
                          borderColor: hoveredItem === item.id ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0)',
                        }}
                      />
                    )}
                    
                    {/* Glow effect */}
                    {!isMobile && (
                      <motion.div
                        className="absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500"
                        animate={{
                          opacity: hoveredItem === item.id ? 0.7 : 0,
                        }}
                        style={{
                          background: `linear-gradient(to bottom right, ${item.color})`,
                        }}
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* View All Projects Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-center mt-12"
            >
              <motion.button
                onClick={() => {
                  setPreviousFilter(filter);
                  setShowAll(true);
                }}
                whileHover={!isMobile ? { 
                  scale: 1.05,
                  boxShadow: "0 20px 60px rgba(120, 119, 198, 0.5)"
                } : {}}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-dark text-white rounded-full font-semibold text-base md:text-lg overflow-hidden"
              >
                <span className="relative z-10">View All Projects</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10 text-xl md:text-2xl"
                >
                  →
                </motion.span>
                {!isMobile && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {/* Enhanced Filter Buttons - Only show when viewing all */}
        {showAll && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mb-16"
              role="group"
              aria-label="Filter portfolio items"
            >
              {filterButtons.map((btn) => (
                <motion.button
                  key={btn.value}
                  whileHover={!isMobile ? { scale: 1.05, y: -2 } : {}}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(btn.value)}
                  aria-current={filter === btn.value ? "true" : "false"}
                  className={`relative px-8 py-3.5 rounded-full font-semibold transition-all ${
                    filter === btn.value
                      ? 'bg-gradient-dark text-white shadow-xl shadow-purple-500/30'
                      : 'glass-effect text-slate-300 hover:text-white hover:border-purple-400/50'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {btn.label}
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      filter === btn.value ? 'bg-white/20' : 'bg-white/10'
                    }`}>
                      {btn.count}
                    </span>
                  </span>
                  {filter === btn.value && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-dark rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Portfolio Grid with creative layouts */}
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {displayItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                    transition={{ 
                      delay: index * 0.05, 
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
                      item.size === 'wide' ? 'md:col-span-2' : ''
                    } ${
                      item.size === 'tall' ? 'md:row-span-2' : ''
                    }`}
                    onMouseEnter={() => !isMobile && setHoveredItem(item.id)}
                    onMouseLeave={() => !isMobile && setHoveredItem(null)}
                  >
                    {/* Card container */}
                    <div className={`relative overflow-hidden rounded-3xl ${
                      item.size === 'tall' ? 'aspect-[1/1.5]' : 'aspect-square'
                    }`}>
                      {/* Animated gradient background */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                        animate={{
                          scale: !isMobile && hoveredItem === item.id ? 1.15 : 1,
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      
                      {/* Noise texture overlay */}
                      <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                        }}
                      />
                      
                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                        {/* Top section - Brand icon */}
                        <motion.div 
                          className="flex justify-between items-start"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <motion.div
                            animate={{
                              scale: !isMobile && hoveredItem === item.id ? 1.2 : 1,
                              rotate: !isMobile && hoveredItem === item.id ? 5 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-4xl md:text-5xl text-white/90 backdrop-blur-sm bg-white/10 p-3 rounded-2xl"
                          >
                            {item.icon}
                          </motion.div>
                          
                          <motion.span 
                            className="text-xs px-3 py-1.5 glass-effect rounded-full text-white/90 backdrop-blur-md font-medium capitalize"
                            animate={{
                              y: !isMobile && hoveredItem === item.id ? -5 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.category}
                          </motion.span>
                        </motion.div>
                        
                        {/* Bottom section - Project info */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: (!isMobile && hoveredItem === item.id) || isMobile ? 1 : 0.9, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-white"
                        >
                          <motion.div
                            animate={{
                              y: !isMobile && hoveredItem === item.id ? -10 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-sm text-white/70 mb-1 font-medium">Client</p>
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">{item.client}</h3>
                            <p className="text-base text-white/80 mb-4">{item.title}</p>
                          </motion.div>
                          
                          {!isMobile && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{
                                opacity: hoveredItem === item.id ? 1 : 0,
                                height: hoveredItem === item.id ? 'auto' : 0,
                              }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="text-sm text-white/70 mb-4">{item.description}</p>
                              <div className="flex items-center gap-3">
                                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
                                  View Project
                                </span>
                                <motion.span
                                  animate={{ x: hoveredItem === item.id ? 5 : 0 }}
                                  className="text-2xl"
                                >
                                  →
                                </motion.span>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      </div>

                      {/* Animated border */}
                      {!isMobile && (
                        <motion.div
                          className="absolute inset-0 rounded-3xl border-2 border-white/0 transition-all duration-300"
                          animate={{
                            borderColor: hoveredItem === item.id ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0)',
                          }}
                        />
                      )}
                      
                      {/* Glow effect */}
                      {!isMobile && (
                        <motion.div
                          className="absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500"
                          animate={{
                            opacity: hoveredItem === item.id ? 0.6 : 0,
                          }}
                          style={{
                            background: `linear-gradient(to bottom right, ${item.color})`,
                          }}
                        />
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Back to Featured Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center mt-12"
            >
              <motion.button
                onClick={() => {
                  setShowAll(false);
                  setFilter(previousFilter);
                }}
                whileHover={!isMobile ? { scale: 1.05 } : {}}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 glass-effect text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                <span className="text-xl">←</span>
                <span>Back to Featured</span>
              </motion.button>
            </motion.div>
          </>
        )}


        {/* Enhanced CTA - Only show when not viewing all */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-20"
          >
            <p className="text-lg md:text-xl text-slate-400 mb-8">
              Ready to elevate your brand with stunning design?
            </p>
            <motion.a
              href="#contact"
              whileHover={!isMobile ? { 
                scale: 1.05,
                boxShadow: "0 20px 60px rgba(120, 119, 198, 0.5)"
              } : {}}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-dark text-white rounded-full font-semibold text-lg overflow-hidden"
            >
              <span className="relative z-10">Let&apos;s Create Something Amazing</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10 text-2xl"
              >
                →
              </motion.span>
              {!isMobile && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
