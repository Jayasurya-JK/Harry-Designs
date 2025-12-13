import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState('all');

  // Sample portfolio items with premium color schemes
  const portfolioItems = [
    { id: 1, category: 'logo', title: 'Tech Startup Logo', color: 'from-blue-600 to-cyan-500' },
    { id: 2, category: 'packaging', title: 'Organic Tea Packaging', color: 'from-emerald-600 to-teal-500' },
    { id: 3, category: 'logo', title: 'Restaurant Brand', color: 'from-orange-600 to-red-500' },
    { id: 4, category: 'packaging', title: 'Cosmetic Product Box', color: 'from-rose-600 to-pink-500' },
    { id: 5, category: 'logo', title: 'Fitness Brand', color: 'from-amber-600 to-orange-500' },
    { id: 6, category: 'packaging', title: 'Chocolate Packaging', color: 'from-amber-700 to-yellow-600' },
    { id: 7, category: 'logo', title: 'Fashion Label', color: 'from-purple-600 to-indigo-500' },
    { id: 8, category: 'packaging', title: 'Wine Bottle Label', color: 'from-red-700 to-rose-600' },
    { id: 9, category: 'logo', title: 'Real Estate Logo', color: 'from-teal-600 to-cyan-500' },
    { id: 10, category: 'packaging', title: 'Skincare Package', color: 'from-cyan-600 to-blue-500' },
    { id: 11, category: 'logo', title: 'Coffee Shop Brand', color: 'from-yellow-700 to-orange-600' },
    { id: 12, category: 'packaging', title: 'Perfume Box Design', color: 'from-indigo-700 to-purple-600' },
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const filterButtons = [
    { label: 'All Work', value: 'all' },
    { label: 'Logos', value: 'logo' },
    { label: 'Packaging', value: 'packaging' },
  ];

  return (
    <section id="portfolio" className="relative py-20 md:py-32 bg-slate-950 overflow-hidden" ref={ref}>
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
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
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Explore a collection of my best work in logo design and product packaging
          </p>
        </motion.div>

        {/* Filter Buttons with modern design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
          role="group"
          aria-label="Filter portfolio items"
        >
          {filterButtons.map((btn) => (
            <motion.button
              key={btn.value}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(btn.value)}
              aria-current={filter === btn.value ? "true" : "false"}
              className={`relative px-8 py-3 rounded-full font-semibold transition-all ${
                filter === btn.value
                  ? 'bg-gradient-dark text-white shadow-lg shadow-purple-500/30'
                  : 'glass-effect text-slate-300 hover:text-white'
              }`}
            >
              {btn.label}
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

        {/* Portfolio Grid with advanced animations */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ 
                delay: index * 0.05, 
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Card with glass effect border */}
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                {/* Gradient background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-white text-center">
                    <motion.div 
                      className="text-6xl mb-4"
                      whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.category === 'logo' ? '🎨' : '📦'}
                    </motion.div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
                
                {/* Overlay with smooth reveal */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-end"
                >
                  <div className="p-6 text-white w-full">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-3 py-1 glass-effect rounded-full text-sm capitalize">
                        {item.category}
                      </span>
                      <span className="text-2xl" aria-label="View project">→</span>
                    </div>
                  </div>
                </motion.div>

                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-purple-500/0 group-hover:border-purple-500/50 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA with magnetic effect simulation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-lg md:text-xl text-slate-400 mb-8">
            Interested in working together?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 60px rgba(120, 119, 198, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-block px-10 py-5 bg-gradient-dark text-white rounded-full font-semibold text-lg overflow-hidden"
          >
            <span className="relative z-10">Let&apos;s Create Something Amazing</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
