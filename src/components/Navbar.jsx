import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-xl shadow-purple-500/5' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            aria-label="Harry Designs - Home"
            className="text-2xl font-display font-medium text-white tracking-tight"
          >
            Harry
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -2 }}
                className="text-base font-bold uppercase tracking-widest text-white hover:text-purple-400 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(120, 119, 198, 0.3)" }}
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
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden glass-effect border-t border-white/10"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className="block px-3 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="block px-3 py-3 bg-gradient-dark text-white rounded-lg font-semibold text-center"
            >
              Let&apos;s Talk
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
