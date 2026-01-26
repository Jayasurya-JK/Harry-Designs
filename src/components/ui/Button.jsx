import { motion } from 'framer-motion';
import { cn } from '@/utils';

/**
 * Reusable button component with gradient effect
 * @param {string} variant - 'primary' or 'secondary'
 * @param {string} className - Additional Tailwind classes
 * @param {React.ReactNode} children - Button content
 */
const Button = ({ variant = 'primary', className, children, ...props }) => {
  const baseClasses =
    'group relative px-8 py-4 rounded-lg font-semibold overflow-hidden transition-all';

  const variants = {
    primary: 'bg-gradient-dark text-white',
    secondary: 'glass-effect text-white border border-slate-700',
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.02,
        boxShadow: '0 20px 60px rgba(120, 119, 198, 0.4)',
      }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"
        initial={{ x: '-100%' }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default Button;
