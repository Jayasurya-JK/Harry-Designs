import { useState, useEffect } from 'react';
import { SCROLL_THRESHOLDS } from '@/constants';

/**
 * Hook to handle scroll effects for navbar
 * @returns {boolean} - Whether the page has been scrolled past threshold
 */
export function useScrollEffect() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLDS.navbar);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrolled;
}
