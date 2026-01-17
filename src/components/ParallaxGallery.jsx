import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';

// Local portfolio images
const images = [
    "/image/samples/1.png",
    "/image/samples/2.png",
    "/image/samples/3.png",
    "/image/samples/4.png",
    "/image/samples/5.png",
    "/image/samples/6.png",
    "/image/samples/7.png",
    "/image/samples/8.png",
    "/image/samples/9.png",
    "/image/samples/10.png",
    "/image/samples/11.png",
];

const ParallaxGallery = () => {
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef(null);
    const scrollTimeout = useRef(null);
    const { scrollY } = useScroll();

    // MotionValues for Auto-Scroll offsets
    const autoY1 = useMotionValue(0); // Col 1 & 3 (Up)
    const autoY2 = useMotionValue(0); // Col 2 (Down)
    const autoX1 = useMotionValue(0); // Row 1 (Left)
    const autoX2 = useMotionValue(0); // Row 2 (Right)

    // Configuration for Auto-Scroll Speed (Pixels per frame)
    // 0.008 is extremely slow and smooth, "premium" feel
    const SPEED = 0.008;

    // Animation Loop
    useAnimationFrame((t, delta) => {
        if (!isPaused) {
            // Desktop Vertical (Loop at -50% for 2 sets of images)
            const moveUp = autoY1.get() - (SPEED * delta * 0.05);
            const moveDown = autoY2.get() + (SPEED * delta * 0.05);

            // Mobile Horizontal
            const moveLeft = autoX1.get() - (SPEED * delta * 0.05);
            const moveRight = autoX2.get() + (SPEED * delta * 0.05);

            // UP Loop (0 -> -50)
            let newUp = moveUp;
            if (newUp <= -50) newUp = 0;
            autoY1.set(newUp);

            // DOWN Loop (-50 -> 0)
            let newDown = moveDown;
            if (newDown >= 0) newDown = -50;
            autoY2.set(newDown);

            // LEFT Loop (0 -> -50)
            let newLeft = moveLeft;
            if (newLeft <= -50) newLeft = 0;
            autoX1.set(newLeft);

            // RIGHT Loop (-50 -> 0)
            let newRight = moveRight;
            if (newRight >= 0) newRight = -50;
            autoX2.set(newRight);
        }
    });

    // Interaction Handlers
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    // Scroll Detection to Pause Auto-Scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsPaused(true);
            clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(() => {
                setIsPaused(false);
            }, 1000); // Resume after 1s of no scroll
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout.current);
        };
    }, []);

    // Parallax Transforms (Scroll-Linked)
    // Desktop: Very subtle scroll influence (0 -> -50) - Reduced for slower feel
    const yLeftRight = useTransform(scrollY, [0, 1000], [0, -50]);
    const yCenter = useTransform(scrollY, [0, 1000], [0, 50]);

    // Mobile: Row 1 LEFT (0 -> -50), Row 2 RIGHT (0 -> 50)
    const xRow1 = useTransform(scrollY, [0, 1000], [0, -50]);
    const xRow2 = useTransform(scrollY, [0, 1000], [0, 50]);

    // Smooth Springs for Scroll - Heavy damping
    const springConfig = { stiffness: 40, damping: 50, bounce: 0 };
    const smoothYLeftRight = useSpring(yLeftRight, springConfig);
    const smoothYCenter = useSpring(yCenter, springConfig);
    const smoothXRow1 = useSpring(xRow1, springConfig);
    const smoothXRow2 = useSpring(xRow2, springConfig);

    // Compose Auto + Scroll Transforms
    const autoY1Percent = useTransform(autoY1, v => `${v}%`);
    const autoY2Percent = useTransform(autoY2, v => `${v}%`);
    const autoX1Percent = useTransform(autoX1, v => `${v}%`);
    const autoX2Percent = useTransform(autoX2, v => `${v}%`);

    // Image Arrays - Doubled for seamless -50% loop
    const colImages = [...images, ...images];
    const rowImages = [...images, ...images];

    return (
        <div
            ref={containerRef}
            className="w-full h-full relative z-10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseLeave}
        >

            {/* DESKTOP LAYOUT */}
            <div className="hidden lg:grid grid-cols-3 gap-8 h-[120vh] -mt-20 overflow-hidden px-12 xl:px-20">

                {/* Column 1 - Auto UP, Scroll UP */}
                <div className="relative h-full overflow-hidden">
                    <motion.div
                        className="flex flex-col gap-8"
                        style={{ y: autoY1Percent }}
                    >
                        <motion.div
                            className="flex flex-col gap-8"
                            style={{ y: smoothYLeftRight }}
                        >
                            {colImages.map((src, i) => (
                                <div key={`col1-${i}`} className="w-full aspect-[3/4] rounded-2xl overflow-hidden relative group">
                                    <img src={src} alt="Project" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Column 2 - Auto DOWN, Scroll DOWN */}
                <div className="relative h-full overflow-hidden pt-20">
                    <motion.div
                        className="flex flex-col gap-8"
                        style={{ y: autoY2Percent }}
                    >
                        <motion.div
                            className="flex flex-col gap-8"
                            style={{ y: smoothYCenter }}
                        >
                            {colImages.map((src, i) => (
                                <div key={`col2-${i}`} className="w-full aspect-[3/4] rounded-2xl overflow-hidden relative group">
                                    <img src={src} alt="Project" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Column 3 - Auto UP, Scroll UP */}
                <div className="relative h-full overflow-hidden -mt-10">
                    <motion.div
                        className="flex flex-col gap-8"
                        style={{ y: autoY1Percent }}
                    >
                        <motion.div
                            className="flex flex-col gap-8"
                            style={{ y: smoothYLeftRight }}
                        >
                            {colImages.map((src, i) => (
                                <div key={`col3-${i}`} className="w-full aspect-[3/4] rounded-2xl overflow-hidden relative group">
                                    <img src={src} alt="Project" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-20 pointer-events-none" />
            </div>

            {/* MOBILE LAYOUT */}
            <div className="lg:hidden flex flex-col gap-4 mt-8 pb-10 w-full overflow-hidden">

                {/* Row 1 - Auto LEFT, Scroll LEFT */}
                <div className="relative w-full overflow-hidden rotate-1">
                    <motion.div
                        className="flex gap-4 w-max -ml-[20%]"
                        style={{ x: autoX1Percent }}
                    >
                        <motion.div
                            className="flex gap-4 w-max"
                            style={{ x: smoothXRow1 }}
                        >
                            {rowImages.map((src, i) => (
                                <div key={`m-row1-${i}`} className="w-40 h-40 flex-shrink-0 rounded-xl overflow-hidden relative">
                                    <img src={src} alt="Project" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-purple-500/10" />
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Row 2 - Auto RIGHT, Scroll RIGHT */}
                <div className="relative w-full overflow-hidden -rotate-1">
                    <motion.div
                        className="flex gap-4 w-max -ml-[40%]"
                        style={{ x: autoX2Percent }}
                    >
                        <motion.div
                            className="flex gap-4 w-max"
                            style={{ x: smoothXRow2 }}
                        >
                            {rowImages.map((src, i) => (
                                <div key={`m-row2-${i}`} className="w-40 h-40 flex-shrink-0 rounded-xl overflow-hidden relative">
                                    <img src={src} alt="Project" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-indigo-500/10" />
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default ParallaxGallery;
