import { motion } from 'framer-motion';
import { cn } from '@/utils';

/**
 * Animated gradient orb for background decoration
 * @param {string} className - Additional Tailwind classes
 * @param {string} position - 'top-left', 'top-right', 'bottom-left', 'bottom-right'
 * @param {string} color - 'crimson', 'purple', 'blue'
 */
const GradientOrb = ({ className, position = 'top-right', color = 'crimson' }) => {
  const positions = {
    'top-left': 'top-20 left-0',
    'top-right': 'top-20 right-0',
    'bottom-left': 'bottom-20 left-0',
    'bottom-right': 'bottom-20 right-0',
  };

  const colors = {
    crimson: 'bg-crimson/10',
    'crimson-dark': 'bg-crimson-dark/10',
    purple: 'bg-purple-500/10',
    blue: 'bg-blue-500/10',
  };

  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={cn('absolute w-96 h-96 rounded-full blur-3xl', positions[position], colors[color], className)}
    />
  );
};

export default GradientOrb;
