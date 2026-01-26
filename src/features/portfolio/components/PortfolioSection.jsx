import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PORTFOLIO_ITEMS, FEATURED_COUNT } from '../data/portfolioData';
import { usePortfolioFilter } from '../hooks/usePortfolioFilter';
import { useIsMobile } from '@/hooks';
import BrandsCarousel from './BrandsCarousel';
import FeaturedProjects from './FeaturedProjects';
import PortfolioFilters from './PortfolioFilters';
import PortfolioGrid from './PortfolioGrid';
import { fadeInUp, scaleIn, TRANSITIONS, DELAYS } from '@/animations';

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = useIsMobile();

  const {
    filter,
    setFilter,
    showAll,
    displayItems,
    featuredItems,
    handleShowAll,
    handleBackToFeatured,
  } = usePortfolioFilter(PORTFOLIO_ITEMS, FEATURED_COUNT);

  return (
    <section id="portfolio" className="relative py-20 md:py-32 bg-eerie overflow-hidden" ref={ref}>
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
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-crimson/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-crimson-dark/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ ...TRANSITIONS.slow, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={scaleIn}
            transition={TRANSITIONS.medium}
            className="inline-block mb-4"
          >
            <span className="text-crimson text-sm tracking-[0.3em] uppercase font-medium">
              Portfolio
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Brands I've <span className="text-gradient">Worked With</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Trusted by leading global brands to deliver exceptional design solutions
          </p>
        </motion.div>

        {/* Infinite Scrolling Brands Carousel */}
        <BrandsCarousel isInView={isInView} />

        {/* Featured Work Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ delay: DELAYS.large, ...TRANSITIONS.medium }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-4 text-white">
            Featured <span className="text-gradient">Projects</span>
          </h3>
          <p className="text-center text-slate-400 mb-12 text-sm md:text-base px-4">
            {showAll ? 'Explore all my creative work' : 'Showcasing my best design creations'}
          </p>
        </motion.div>

        {/* Featured Projects or Full Portfolio */}
        {!showAll ? (
          <FeaturedProjects
            items={featuredItems}
            isInView={isInView}
            onViewAll={handleShowAll}
          />
        ) : (
          <>
            {/* Filter Buttons */}
            <PortfolioFilters filter={filter} setFilter={setFilter} />

            {/* Portfolio Grid */}
            <PortfolioGrid items={displayItems} />

            {/* Back to Featured Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: DELAYS.medium, ...TRANSITIONS.medium }}
              className="text-center mt-12"
            >
              <motion.button
                onClick={handleBackToFeatured}
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
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ delay: DELAYS.xxl, ...TRANSITIONS.medium }}
            className="text-center mt-20"
          >
            <p className="text-lg md:text-xl text-slate-400 mb-8">
              Ready to elevate your brand with stunning design?
            </p>
            <motion.a
              href="#contact"
              whileHover={
                !isMobile
                  ? {
                      scale: 1.05,
                      boxShadow: '0 20px 60px rgba(120, 119, 198, 0.5)',
                    }
                  : {}
              }
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
                  initial={{ x: '-100%' }}
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

export default PortfolioSection;
