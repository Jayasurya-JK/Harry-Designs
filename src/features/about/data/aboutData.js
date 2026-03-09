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
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAffinitydesigner,
} from 'react-icons/si';

/**
 * About section data - skills, tools, why Harry
 */

export const WHY_HARRY = [
  {
    icon: FaPalette,
    title: 'Design With Purpose',
    description: 'Every visual decision is driven by meaning, strategy, and clarity',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: FaRocket,
    title: 'Fast Delivery',
    description: 'Quick turnaround without compromising on quality',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FaBolt,
    title: 'Precision in Every Detail',
    description: 'From typography to spacing, every detail is intentional.',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: FaStar,
    title: 'Timeless, High-End Aesthetic',
    description: 'My work is crafted to remain relevant and elegant over time, ensuring your brand looks premium today and years from now.',
    color: 'from-crimson to-crimson-dark',
  },
];

export const TOOLS = [
  {
    name: 'Photoshop',
    icon: SiAdobephotoshop,
    color: 'from-blue-600 to-cyan-600',
  },
  {
    name: 'illustrator',
    icon: SiAdobeillustrator,
    color: 'from-orange-600 to-yellow-600',
  },
  {
    name: 'premiere pro',
    icon: SiAdobepremierepro,
    color: 'from-purple-600 to-indigo-600',
  },
  {
    name: 'figma',
    icon: FaFigma,
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: 'after effects',
    icon: SiAdobeaftereffects,
    color: 'from-indigo-600 to-violet-600',
  },
  {
    name: 'Affinity Designer',
    icon: SiAffinitydesigner,
    color: 'from-blue-500 to-teal-500',
  },
];

export const SKILLS = [
  {
    icon: FaPalette,
    title: 'Brand Visual Identity Design',
    description: 'Creating cohesive, timeless visual systems that express a brand’s essence across every touchpoint.',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    icon: FaBox,
    title: 'Logo Design',
    description: 'Designing distinctive logos and refined typographic hierarchies built for longevity and clarity.',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    icon: FaLightbulb,
    title: 'Product Packaging',
    description: 'Designing packaging that captivates and converts customers',
    gradient: 'from-amber-600 to-orange-600',
  },
  {
    icon: FaAward,
    title: 'Creative Solutions',
    description: 'Innovative design approaches for complex branding challenges',
    gradient: 'from-emerald-600 to-teal-600',
  },
];
