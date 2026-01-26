import { motion } from 'framer-motion';
import { NAV_LINKS } from '../data/navData';
import { TRANSITIONS, DELAYS, fadeInDown, hoverLift } from '@/animations';

const NavLinks = () => {
  return (
    <div className="hidden md:flex space-x-8">
      {NAV_LINKS.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.href}
          initial="hidden"
          animate="visible"
          variants={fadeInDown}
          transition={{ delay: DELAYS.tiny * index, ...TRANSITIONS.normal }}
          whileHover={hoverLift}
          className="text-base font-bold uppercase tracking-widest text-white hover:text-crimson transition-colors"
        >
          {link.name}
        </motion.a>
      ))}
    </div>
  );
};

export default NavLinks;
