import { cn } from '@/utils';

/**
 * Animated grid pattern background overlay
 * @param {string} className - Additional Tailwind classes
 * @param {number} opacity - Grid opacity (0-100)
 */
const GridPattern = ({ className, opacity = 5 }) => {
  return (
    <div
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, ${opacity / 100}) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, ${opacity / 100}) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }}
    />
  );
};

export default GridPattern;
