import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../data/contactData';
import { fadeInLeft, TRANSITIONS, DELAYS } from '@/animations';

const ContactInfo = ({ isInView }) => {
  return (
    <div className="space-y-6 mb-12">
      {CONTACT_INFO.map((info, index) => {
        const Icon = info.icon;
        return (
          <motion.div
            key={info.label}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInLeft}
            transition={{ delay: DELAYS.medium + index * DELAYS.tiny, ...TRANSITIONS.medium }}
            whileHover={{ x: 10, transition: { duration: 0.2 } }}
            className="flex items-center space-x-4 p-4 glass-effect rounded-xl group"
          >
            <motion.div
              className="text-3xl text-crimson group-hover:text-crimson-light transition-colors"
              whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Icon />
            </motion.div>
            <div>
              <p className="text-sm text-slate-500 uppercase tracking-wide">{info.label}</p>
              <p className="text-white font-medium">{info.value}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ContactInfo;
