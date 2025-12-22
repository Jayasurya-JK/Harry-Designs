import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

// Grid layout constants
const DESKTOP_COLUMNS = 4;

const DesignProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  // Design process steps (8 steps)
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
    <section className="relative py-16 md:py-24 overflow-hidden" ref={ref}>
      {/* Floating gradient orb background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-gradient">Design Process</span>
          </h2>
          <p className="text-slate-400 text-lg">
            A systematic approach to creating exceptional designs
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {processSteps.map((step, index) => {
            const isHovered = hoveredCard === step.number;
            const col = index % DESKTOP_COLUMNS;
            const row = Math.floor(index / DESKTOP_COLUMNS);

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                onMouseEnter={() => setHoveredCard(step.number)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative group"
              >
                {/* Glass-morphism Card */}
                <div className="relative p-6 glass-effect rounded-3xl overflow-hidden h-full">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-indigo-600/20"
                    animate={{
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Corner decorations (dots) */}
                  <motion.div
                    className="absolute top-3 right-3 w-2 h-2 bg-purple-400/50 rounded-full"
                    animate={{
                      scale: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-3 left-3 w-2 h-2 bg-pink-400/50 rounded-full"
                    animate={{
                      scale: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Connecting line to next card (horizontal, desktop only) */}
                  {col < DESKTOP_COLUMNS - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-8 w-8 h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
                  )}

                  {/* Connecting line to row below (vertical, desktop only) */}
                  {row === 0 && (
                    <div className="hidden lg:block absolute -bottom-8 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-purple-500/50 to-transparent" />
                  )}

                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Numbered Circle */}
                    <div className="relative mb-4">
                      {/* Rotating ring */}
                      <motion.div
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute inset-0 w-16 h-16 border-2 border-purple-500/30 rounded-full"
                      />
                      
                      {/* Number container */}
                      <motion.div
                        className="relative w-16 h-16 rounded-full border-2 border-purple-500/50 flex items-center justify-center"
                        animate={{
                          scale: isHovered ? 1.1 : 1,
                          rotate: isHovered ? 360 : 0,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <motion.span
                          className="text-2xl font-bold text-white"
                          animate={{
                            color: isHovered ? "#c084fc" : "#ffffff",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {step.number}
                        </motion.span>
                      </motion.div>

                      {/* Connecting vertical line below circle */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-b from-purple-500/50 to-transparent" />
                    </div>

                    {/* Title */}
                    <motion.h3
                      className="text-lg font-bold mb-2 text-white"
                      animate={{
                        color: isHovered ? "#c084fc" : "#ffffff",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-effect rounded-full">
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-2 h-2 bg-purple-400 rounded-full"
            />
            <span className="text-slate-400 text-sm">
              Each project is unique and may require custom adjustments
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignProcess;
