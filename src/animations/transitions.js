import { EASINGS } from './easings';

/**
 * Standardized transition durations and configurations
 */

export const TRANSITIONS = {
  // Duration presets
  instant: { duration: 0.2, ease: EASINGS.smooth },
  fast: { duration: 0.3, ease: EASINGS.smooth },
  normal: { duration: 0.5, ease: EASINGS.smooth },
  medium: { duration: 0.6, ease: EASINGS.smooth },
  slow: { duration: 0.8, ease: EASINGS.smooth },
  verySlow: { duration: 1, ease: EASINGS.smooth },
  ultra: { duration: 1.2, ease: EASINGS.smooth },
};

export const DELAYS = {
  none: 0,
  tiny: 0.1,
  small: 0.2,
  medium: 0.3,
  large: 0.4,
  xl: 0.5,
  xxl: 0.6,
  xxxl: 0.7,
};
