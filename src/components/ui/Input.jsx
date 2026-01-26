import { motion } from 'framer-motion';
import { cn } from '@/utils';

/**
 * Reusable animated input component
 * @param {string} className - Additional Tailwind classes
 * @param {string} label - Input label text
 * @param {string} id - Input ID for label association
 */
const Input = ({ className, label, id, ...props }) => {
  const baseClasses =
    'w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent transition-all outline-none text-white placeholder-slate-500';

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-2">
          {label}
        </label>
      )}
      <motion.input
        whileFocus={{ scale: 1.01 }}
        id={id}
        className={cn(baseClasses, className)}
        {...props}
      />
    </div>
  );
};

export default Input;
