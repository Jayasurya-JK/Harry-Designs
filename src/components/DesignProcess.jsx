import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const DesignProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const processSteps = [
    {
      number: 1,
      title: "Discovery",
      description: "Understanding your brand, goals, and target audience"
    },
    {
      number: 2,
      title: "Research",
      description: "Market analysis and competitor research"
    },
    {
      number: 3,
      title: "Conceptualization",
      description: "Developing creative concepts and design directions"
    },
    {
      number: 4,
      title: "Design & Refinement",
      description: "Creating and refining the final design"
    },
    {
      number: 5,
      title: "Presentation",
      description: "Presenting the design with rationale and context"
    },
    {
      number: 6,
      title: "Revisions",
      description: "Incorporating feedback and making adjustments"
    },
    {
      number: 7,
      title: "Finalization",
      description: "Preparing files for production and delivery"
    },
    {
      number: 8,
      title: "Support",
      description: "Ongoing support and design consultation"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-[#0a0a0a] overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
              Design Process
            </span>
          </h2>
          <div className="w-64 h-1 bg-gradient-to-r from-[#a855f7] to-[#ec4899] mx-auto mb-6 rounded-full" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A systematic approach to creating exceptional designs
          </p>
        </motion.div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex flex-col items-center text-center group"
            >
              {/* Numbered Circle with Rotating Ring */}
              <div className="relative mb-8">
                {/* Rotating Ring Effect */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, #a855f7, #ec4899, #6366f1, #a855f7)",
                    filter: "blur(8px)",
                    transform: "scale(1.1)",
                  }}
                />
                
                {/* Inner Circle */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-20 h-20 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center border-2 border-slate-800"
                >
                  <span className="text-3xl font-bold text-white z-10">
                    {step.number}
                  </span>
                </motion.div>
              </div>

              {/* Vertical Connecting Line */}
              <div className="w-0.5 h-12 bg-gradient-to-b from-[#a855f7] to-transparent mb-6" />

              {/* Card Content */}
              <div className="space-y-3">
                <motion.h3
                  whileHover={{ color: "#a855f7" }}
                  transition={{ duration: 0.3 }}
                  className="text-xl md:text-2xl font-bold text-white"
                >
                  {step.title}
                </motion.h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
