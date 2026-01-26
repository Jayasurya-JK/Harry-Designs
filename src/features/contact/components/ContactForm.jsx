import { motion } from 'framer-motion';
import { useContactForm } from '../hooks/useContactForm';
import { TRANSITIONS } from '@/animations';

const ContactForm = () => {
  const { formData, showSuccess, handleSubmit, handleChange } = useContactForm();

  return (
    <div className="glass-effect p-8 rounded-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Success Message */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400"
          >
            ✓ Thank you for your message! I will get back to you soon.
          </motion.div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
            Your Name
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent transition-all outline-none text-white placeholder-slate-500"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
            Your Email
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent transition-all outline-none text-white placeholder-slate-500"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
            Your Message
          </label>
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent transition-all outline-none resize-none text-white placeholder-slate-500"
            placeholder="Tell me about your project..."
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{
            scale: 1.02,
            boxShadow: '0 20px 60px rgba(120, 119, 198, 0.4)',
          }}
          whileTap={{ scale: 0.98 }}
          className="group relative w-full px-8 py-4 bg-gradient-dark text-white rounded-lg font-semibold overflow-hidden"
        >
          <span className="relative z-10">Send Message</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={TRANSITIONS.fast}
          />
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
