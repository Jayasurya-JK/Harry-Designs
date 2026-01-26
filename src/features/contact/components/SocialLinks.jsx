import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../data/contactData';
import { fadeInUp, TRANSITIONS, DELAYS } from '@/animations';

const SocialLinks = ({ isInView }) => {
  return (
    <div className="mt-12">
      <h4 className="text-lg font-semibold mb-6 text-white">Follow Me</h4>
      <div className="flex space-x-4">
        {SOCIAL_LINKS.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.url}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ delay: DELAYS.xxl + index * DELAYS.tiny, ...TRANSITIONS.medium }}
              className="relative w-14 h-14 glass-effect rounded-full flex items-center justify-center text-purple-400 hover:text-white transition-colors text-xl group overflow-hidden"
              aria-label={social.name}
            >
              <span className="relative z-10">
                <Icon />
              </span>
              <motion.div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
