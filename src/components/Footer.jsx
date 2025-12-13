import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl md:text-3xl font-display font-bold text-gradient mb-4"
          >
            Harry
          </motion.div>
          
          <p className="text-gray-400 mb-4">
            Creating memorable designs that make brands stand out
          </p>
          
          <div className="border-t border-gray-800 pt-6 mt-6">
            <p className="text-gray-500 text-sm">
              © {currentYear} Harry Designs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
