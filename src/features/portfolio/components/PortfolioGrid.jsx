import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PortfolioCard from './PortfolioCard';

const PortfolioGrid = ({ items }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <AnimatePresence mode="wait">
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <PortfolioCard
            key={item.id}
            item={item}
            index={index}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
            size={item.size}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioGrid;
