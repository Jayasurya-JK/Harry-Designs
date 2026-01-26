import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, TRANSITIONS } from '@/animations';
import { cn } from '@/utils';

/**
 * Reusable section header component
 * @param {string} subtitle - Small text above title
 * @param {string} title - Main title text (can include HTML)
 * @param {string} description - Paragraph below title
 * @param {boolean} isInView - Whether section is in view
 * @param {string} className - Additional classes for container
 */
const SectionHeader = ({
  subtitle,
  title,
  description,
  isInView = true,
  className,
}) => {
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{ ...TRANSITIONS.slow, ease: [0.22, 1, 0.36, 1] }}
      className={cn('text-center mb-16', className)}
    >
      {subtitle && (
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={scaleIn}
          transition={TRANSITIONS.medium}
          className="inline-block mb-4"
        >
          <span className="text-crimson text-sm tracking-[0.3em] uppercase font-medium">
            {subtitle}
          </span>
        </motion.div>
      )}
      <h2
        className="text-3xl md:text-6xl font-display font-bold mb-6"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {description && (
        <p className="text-base md:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto px-4">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
