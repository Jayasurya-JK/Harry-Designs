import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { TRANSITIONS } from '@/animations';

const ScrollIndicator = () => {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute bottom-8 left-8 hidden lg:block"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-slate-500 text-xs uppercase tracking-widest">Scroll</span>
        <HiArrowDown className="text-crimson text-2xl" />
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
