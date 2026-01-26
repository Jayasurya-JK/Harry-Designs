import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { useScrollEffect } from '../hooks/useScrollEffect';
import { SITE_INFO } from '../data/navData';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import { slideInFromTop, scaleIn, hoverScale, TRANSITIONS, DELAYS } from '@/animations';
import { cn } from '@/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollEffect();

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={slideInFromTop}
      transition={{ ...TRANSITIONS.medium, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled ? 'glass-effect shadow-xl shadow-purple-500/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={hoverScale}
            aria-label={`${SITE_INFO.fullName} - Home`}
            className="text-2xl font-display font-medium text-white tracking-tight"
          >
            {SITE_INFO.name}
          </motion.a>

          {/* Desktop Navigation */}
          <NavLinks />

          {/* CTA Button */}
          <motion.a
            href="#contact"
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            transition={{ delay: DELAYS.xl, ...TRANSITIONS.normal }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(120, 119, 198, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 bg-gradient-dark text-white rounded-full font-semibold text-sm"
          >
            Let&apos;s Talk
          </motion.a>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </motion.nav>
  );
};

export default Navbar;
