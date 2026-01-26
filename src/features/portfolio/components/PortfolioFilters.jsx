import { motion } from 'framer-motion';
import { FILTER_BUTTONS, PORTFOLIO_ITEMS } from '../data/portfolioData';
import { useIsMobile } from '@/hooks';
import { TRANSITIONS } from '@/animations';

const PortfolioFilters = ({ filter, setFilter }) => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={TRANSITIONS.medium}
      className="flex flex-wrap justify-center gap-3 mb-16"
      role="group"
      aria-label="Filter portfolio items"
    >
      {FILTER_BUTTONS.map(btn => {
        const count =
          btn.value === 'all'
            ? PORTFOLIO_ITEMS.length
            : PORTFOLIO_ITEMS.filter(i => i.category === btn.value).length;

        return (
          <motion.button
            key={btn.value}
            whileHover={!isMobile ? { scale: 1.05, y: -2 } : {}}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(btn.value)}
            aria-current={filter === btn.value ? 'true' : 'false'}
            className={`relative px-8 py-3.5 rounded-full font-semibold transition-all ${
              filter === btn.value
                ? 'bg-gradient-dark text-white shadow-xl shadow-crimson/30'
                : 'glass-effect text-slate-300 hover:text-white hover:border-crimson/50'
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              {btn.label}
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  filter === btn.value ? 'bg-white/20' : 'bg-white/10'
                }`}
              >
                {count}
              </span>
            </span>
            {filter === btn.value && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-gradient-dark rounded-full -z-10"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default PortfolioFilters;
