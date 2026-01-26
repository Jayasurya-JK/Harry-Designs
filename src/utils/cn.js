/**
 * Utility function for conditional className merging
 * Similar to clsx but lightweight
 */

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
