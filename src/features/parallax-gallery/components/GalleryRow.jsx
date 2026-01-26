import { motion } from 'framer-motion';

/**
 * Single row of images with parallax effect (Mobile)
 */
const GalleryRow = ({ images, autoXPercent, smoothX, rotation = '', overlay = 'bg-crimson/10', marginLeft = '-ml-[10%]' }) => {
  return (
    <div className={`relative w-full overflow-hidden ${rotation}`}>
      <motion.div className={`flex gap-4 w-max ${marginLeft}`} style={{ x: autoXPercent }}>
        <motion.div className="flex gap-4 w-max" style={{ x: smoothX }}>
          {images.map((src, i) => (
            <div
              key={`row-${i}`}
              className="w-40 h-40 flex-shrink-0 rounded-xl overflow-hidden relative"
            >
              <img src={src} alt="Project" className="w-full h-full object-cover" />
              <div className={`absolute inset-0 ${overlay}`} />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GalleryRow;
