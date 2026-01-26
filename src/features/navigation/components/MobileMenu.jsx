import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../data/navData';
import { TRANSITIONS, DELAYS, fadeInLeft, menuSlide } from '@/animations';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={menuSlide}
        transition={TRANSITIONS.fast}
        className="md:hidden glass-effect border-t border-white/10"
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {NAV_LINKS.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={onClose}
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
              transition={{ delay: DELAYS.tiny * index, ...TRANSITIONS.fast }}
              className="block px-3 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={onClose}
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            transition={{ delay: DELAYS.large, ...TRANSITIONS.fast }}
            className="block px-3 py-3 bg-gradient-dark text-white rounded-lg font-semibold text-center"
          >
            Let&apos;s Talk
          </motion.a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileMenu;
