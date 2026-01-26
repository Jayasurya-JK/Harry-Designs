import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PORTFOLIO_ITEMS, FEATURED_COUNT } from '../data/portfolioData';
import { usePortfolioFilter } from '../hooks/usePortfolioFilter';
import { useIsMobile } from '@/hooks';
import BrandsCarousel from './BrandsCarousel';
import FeaturedScrollStack from './FeaturedScrollStack';
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
    <section id="portfolio" className="relative py-20 md:py-32 bg-eerie" ref={ref}>
      {/* Background Wrapper - Handles overflow for blobus/backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      </div>

      <div className="relative z-10">
        
        {/* ==================== BRANDS SECTION ==================== */}
        <div className="mb-8 md:mb-16 container mx-auto px-4 sm:px-6 lg:px-8">
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
                  Clients
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
        </div>


        {/* ==================== FEATURED PROJECTS SECTION ==================== */}
        <div id="featured-projects" className="w-full">
            {/* Featured Section: Stack for Mobile, Grid for Desktop */}
            {!showAll ? (
              isMobile ? (
                <FeaturedScrollStack
                  items={featuredItems}
                  onViewAll={handleShowAll}
                />
              ) : (
                <FeaturedProjects
                  items={featuredItems}
                  isInView={isInView}
                  onViewAll={handleShowAll}
                />
              )
            ) : (
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid View Header */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="text-center mb-16"
                >
                  <h3 className="text-2xl md:text-4xl font-bold text-center mb-4 text-white">
                    Featured <span className="text-gradient">Projects</span>
                  </h3>
                  <p className="text-center text-slate-400 mb-8 text-sm md:text-base px-4">
                    Explore all my creative work
                  </p>
                </motion.div>

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
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
