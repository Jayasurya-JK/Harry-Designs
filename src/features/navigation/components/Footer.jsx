import { motion } from 'framer-motion';
import { SITE_INFO, FOOTER_LINKS } from '../data/navData';
import { TRANSITIONS, DELAYS } from '@/animations';

const Footer = () => {
  return (
    <footer className="relative bg-eerie text-white py-12 border-t border-eerie-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="inline-block text-3xl md:text-4xl font-display font-bold text-gradient mb-4"
          >
            {SITE_INFO.name}
          </motion.a>

          <p className="text-slate-400 mb-6 max-w-md mx-auto">{SITE_INFO.tagline}</p>

          {/* Quick Links */}
          <motion.div
            className="flex justify-center space-x-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {FOOTER_LINKS.map((link, index) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ y: -2, color: '#D72638' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * DELAYS.tiny, ...TRANSITIONS.fast }}
                className="text-slate-400 hover:text-crimson transition-colors text-sm"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>

          <div className="border-t border-slate-800 pt-8 mt-8">
            <p className="text-slate-500 text-sm">
              © {SITE_INFO.currentYear} {SITE_INFO.fullName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/50 to-transparent" />
    </footer>
  );
};

export default Footer;
