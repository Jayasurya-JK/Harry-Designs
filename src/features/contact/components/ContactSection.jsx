import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn, TRANSITIONS, DELAYS } from '@/animations';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      className="relative pt-10 md:pt-16 pb-20 md:pb-32 bg-eerie-light overflow-hidden"
      ref={ref}
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-crimson/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-crimson-dark/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ ...TRANSITIONS.slow, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={scaleIn}
            transition={TRANSITIONS.medium}
            className="inline-block mb-4"
          >
            <span className="text-crimson text-sm tracking-[0.3em] uppercase font-medium">
              Contact
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-6">
            Let&apos;s Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto px-4">
            Have a project in mind? Let&apos;s discuss how we can bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInRight}
            transition={{ delay: DELAYS.small, ...TRANSITIONS.medium }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            id="contact"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInLeft}
            transition={{ delay: DELAYS.large, ...TRANSITIONS.medium }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-white">Get In Touch</h3>

            <ContactInfo isInView={isInView} />

            {/* Social Links */}
            <SocialLinks isInView={isInView} />

        {/* Empty placeholder removed */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
