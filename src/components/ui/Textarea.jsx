import { motion } from 'framer-motion';
import { cn } from '@/utils';

/**
 * Reusable animated textarea component
 * @param {string} className - Additional Tailwind classes
 * @param {string} label - Textarea label text
 * @param {string} id - Textarea ID for label association
 * @param {number} rows - Number of rows
 */
const Textarea = ({ className, label, id, rows = 6, ...props }) => {
  const baseClasses =
    'w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent transition-all outline-none resize-none text-white placeholder-slate-500';

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-2">
          {label}
        </label>
      )}
      <motion.textarea
        whileFocus={{ scale: 1.01 }}
        id={id}
        rows={rows}
        className={cn(baseClasses, className)}
        {...props}
      />
    </div>
  );
};

export default Textarea;
