import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp, scaleIn, TRANSITIONS } from '@/animations';

const AboutHeader = ({ isInView }) => {
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{ ...TRANSITIONS.slow, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-12 md:mb-16"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={scaleIn}
        transition={TRANSITIONS.medium}
        className="inline-block mb-4"
      >
        <span className="text-crimson text-sm tracking-[0.3em] uppercase font-medium">
          About Me
        </span>
      </motion.div>
      <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
        Meet Your <br />
        <span className="text-gradient">Creative Partner</span>
      </h2>
      <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
        I&apos;m a passionate designer specializing in creating stunning logos and product
        packaging designs that help brands stand out in today&apos;s competitive market.
      </p>
    </motion.div>
  );
};

export default AboutHeader;
