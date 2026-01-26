import {
  FaPalette,
  FaBox,
  FaLightbulb,
  FaAward,
  FaFigma,
  FaHeart,
  FaRocket,
  FaStar,
  FaBolt,
} from 'react-icons/fa';
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiSketch,
  SiBlender,
} from 'react-icons/si';

/**
 * About section data - skills, tools, why Harry
 */

export const WHY_HARRY = [
  {
    icon: FaHeart,
    title: 'Passion-Driven',
    description: 'Every design is crafted with love and dedication to excellence',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: FaRocket,
    title: 'Fast Delivery',
    description: 'Quick turnaround without compromising on quality',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FaStar,
    title: 'Premium Quality',
    description: 'Award-winning designs that exceed expectations',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: FaBolt,
    title: 'Innovative Ideas',
    description: 'Fresh perspectives and creative solutions',
    color: 'from-crimson to-crimson-dark',
  },
];

export const TOOLS = [
  {
    name: 'Adobe Illustrator',
    icon: SiAdobeillustrator,
    color: 'from-orange-600 to-yellow-600',
  },
  {
    name: 'Adobe Photoshop',
    icon: SiAdobephotoshop,
    color: 'from-blue-600 to-cyan-600',
  },
  { name: 'Figma', icon: FaFigma, color: 'from-purple-600 to-pink-600' },
  {
    name: 'Adobe InDesign',
    icon: SiAdobeindesign,
    color: 'from-pink-600 to-rose-600',
  },
  { name: 'Sketch', icon: SiSketch, color: 'from-amber-600 to-orange-600' },
  { name: 'Blender 3D', icon: SiBlender, color: 'from-blue-600 to-indigo-600' },
];

export const SKILLS = [
  {
    icon: FaPalette,
    title: 'Logo Design',
    description: 'Creating unique and memorable brand identities that stand out',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    icon: FaBox,
    title: 'Product Packaging',
    description: 'Designing packaging that captivates and converts customers',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    icon: FaLightbulb,
    title: 'Creative Solutions',
    description: 'Innovative design approaches for complex branding challenges',
    gradient: 'from-amber-600 to-orange-600',
  },
  {
    icon: FaAward,
    title: 'Award-Winning',
    description: 'Recognized excellence in design and client satisfaction',
    gradient: 'from-emerald-600 to-teal-600',
  },
];
