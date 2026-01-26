import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import AboutHeader from './AboutHeader';
import WhyHarryCards from './WhyHarryCards';
import SkillsGrid from './SkillsGrid';
import ToolsCarousel from './ToolsCarousel';
import StatsGrid from './StatsGrid';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-eerie-light overflow-hidden"
      ref={ref}
    >
      {/* Background decorative elements with enhanced animations */}
      <motion.div
        style={{ y }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-0 w-96 h-96 bg-crimson/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 left-0 w-96 h-96 bg-crimson-dark/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <AboutHeader isInView={isInView} />

        {/* Why Harry Section */}
        <WhyHarryCards isInView={isInView} />

        {/* Skills Section */}
        <SkillsGrid isInView={isInView} />

        {/* Tools Section */}
        <ToolsCarousel isInView={isInView} />

        {/* Stats Section */}
        <StatsGrid isInView={isInView} />
      </div>
    </section>
  );
};

export default AboutSection;
