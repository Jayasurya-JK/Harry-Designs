import { motion, useTransform } from 'framer-motion';

/**
 * Single column of images with parallax effect (Desktop)
 */
const GalleryColumn = ({ images, autoYPercent, smoothY, className = '', offset = '' }) => {
  return (
    <div className={`relative h-full overflow-hidden ${offset}`}>
      <motion.div className="flex flex-col gap-8" style={{ y: autoYPercent }}>
        <motion.div className="flex flex-col gap-8" style={{ y: smoothY }}>
          {images.map((src, i) => (
            <div
              key={`col-${i}`}
              className="w-full aspect-[3/4] rounded-2xl overflow-hidden relative group"
            >
              <img src={src} alt="Project" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GalleryColumn;
