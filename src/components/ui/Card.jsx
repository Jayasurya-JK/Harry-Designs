import { motion } from 'framer-motion';
import { cn } from '@/utils';

/**
 * Reusable glass effect card component
 * @param {string} className - Additional Tailwind classes
 * @param {React.ReactNode} children - Card content
 * @param {boolean} hover - Enable hover effect
 */
const Card = ({ className, children, hover = false, ...props }) => {
  const baseClasses = 'glass-effect rounded-2xl p-6';

  if (hover) {
    return (
      <motion.div
        whileHover={{
          y: -10,
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        }}
        transition={{ duration: 0.3 }}
        className={cn(baseClasses, className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={cn(baseClasses, className)} {...props}>
      {children}
    </div>
  );
};

export default Card;
