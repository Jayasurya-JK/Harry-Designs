import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState('all');

  // Sample portfolio items with placeholder colors
  const portfolioItems = [
    { id: 1, category: 'logo', title: 'Tech Startup Logo', color: 'from-blue-400 to-blue-600' },
    { id: 2, category: 'packaging', title: 'Organic Tea Packaging', color: 'from-green-400 to-green-600' },
    { id: 3, category: 'logo', title: 'Restaurant Brand', color: 'from-red-400 to-red-600' },
    { id: 4, category: 'packaging', title: 'Cosmetic Product Box', color: 'from-pink-400 to-pink-600' },
    { id: 5, category: 'logo', title: 'Fitness Brand', color: 'from-orange-400 to-orange-600' },
    { id: 6, category: 'packaging', title: 'Chocolate Packaging', color: 'from-amber-400 to-amber-600' },
    { id: 7, category: 'logo', title: 'Fashion Label', color: 'from-purple-400 to-purple-600' },
    { id: 8, category: 'packaging', title: 'Wine Bottle Label', color: 'from-rose-400 to-rose-600' },
    { id: 9, category: 'logo', title: 'Real Estate Logo', color: 'from-teal-400 to-teal-600' },
    { id: 10, category: 'packaging', title: 'Skincare Package', color: 'from-cyan-400 to-cyan-600' },
    { id: 11, category: 'logo', title: 'Coffee Shop Brand', color: 'from-yellow-600 to-orange-600' },
    { id: 12, category: 'packaging', title: 'Perfume Box Design', color: 'from-indigo-400 to-indigo-600' },
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
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore a collection of my best work in logo design and product packaging
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterButtons.map((btn) => (
            <motion.button
              key={btn.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(btn.value)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === btn.value
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              {btn.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
            >
              {/* Placeholder Image with Gradient */}
              <div className={`aspect-square bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                <div className="text-white text-center p-6">
                  <div className="text-6xl mb-4">
                    {item.category === 'logo' ? '🎨' : '📦'}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
              
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex items-end"
              >
                <div className="p-6 text-white w-full">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm capitalize">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Interested in working together?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Let's Create Something Amazing
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
