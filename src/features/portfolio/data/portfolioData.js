import {
  FaApple,
  FaCoffee,
  FaLeaf,
  FaGem,
  FaWineBottle,
  FaTshirt,
} from 'react-icons/fa';
import { SiNike, SiCocacola, SiStarbucks } from 'react-icons/si';

/**
 * Portfolio data - brands and portfolio items
 */

export const BRANDS = [
  { name: 'Anjarai Petti', logo: '/image/Logos/2@4x.webp' },
  { name: 'Ministries', logo: '/image/Logos/Artboard 5.webp' },
  { name: 'De Mu Trong', logo: '/image/Logos/Artboard 6.webp' },
  { name: 'Thomas Bakers', logo: '/image/Logos/Colored.webp' },
  { name: 'CSIR', logo: '/image/Logos/CSIR-Logo-With-Tagline-Seleceted-Bilingual.webp' },
  { name: 'Divya Pure', logo: '/image/Logos/Logo.webp' },
  { name: 'The Dravidian', logo: '/image/Logos/logo hm.webp' },
  { name: 'Main Logo', logo: '/image/Logos/Main logo png@1000x.webp' },
  { name: 'Mo Elixir', logo: '/image/Logos/Mo Elixir.webp' },
  { name: 'Edwin BS', logo: '/image/Logos/edwin bs logo.webp' },
  { name: 'Neeri', logo: '/image/Logos/neeri_logo.webp' },
  { name: 'Quill', logo: '/image/Logos/quill main logo.webp' },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    category: 'logo',
    title: 'Tech Startup Logo',
    client: 'TechFlow',
    icon: FaApple,
    color: 'from-blue-600 via-cyan-500 to-teal-400',
    description: 'Modern minimal logo for tech company',
    size: 'tall',
  },
  {
    id: 2,
    category: 'packaging',
    title: 'Organic Tea Packaging',
    client: 'Pure Leaf',
    icon: FaLeaf,
    color: 'from-emerald-600 via-green-500 to-teal-500',
    description: 'Eco-friendly tea box design',
    size: 'wide',
  },
  {
    id: 3,
    category: 'logo',
    title: 'Restaurant Brand Identity',
    client: 'Bistro Deluxe',
    icon: FaCoffee,
    color: 'from-orange-600 via-red-500 to-rose-500',
    description: 'Complete branding package',
    size: 'normal',
  },
  {
    id: 4,
    category: 'packaging',
    title: 'Luxury Cosmetic Box',
    client: 'Glow Beauty',
    icon: FaGem,
    color: 'from-rose-600 via-pink-500 to-fuchsia-500',
    description: 'Premium cosmetic packaging',
    size: 'normal',
  },
  {
    id: 5,
    category: 'logo',
    title: 'Fitness Brand Logo',
    client: 'PowerFit',
    icon: SiNike,
    color: 'from-amber-600 via-orange-500 to-red-500',
    description: 'Dynamic sports brand identity',
    size: 'wide',
  },
  {
    id: 6,
    category: 'packaging',
    title: 'Artisan Chocolate',
    client: 'Cacao Noir',
    icon: SiCocacola,
    color: 'from-amber-700 via-yellow-600 to-orange-500',
    description: 'Premium chocolate packaging',
    size: 'tall',
  },
  {
    id: 7,
    category: 'logo',
    title: 'Fashion Label Identity',
    client: 'Essence Apparel',
    icon: FaTshirt,
    color: 'from-purple-600 via-indigo-500 to-blue-500',
    description: 'Elegant fashion brand',
    size: 'normal',
  },
  {
    id: 8,
    category: 'packaging',
    title: 'Premium Wine Label',
    client: 'Vineyard Estate',
    icon: FaWineBottle,
    color: 'from-red-700 via-rose-600 to-pink-500',
    description: 'Sophisticated wine packaging',
    size: 'normal',
  },
  {
    id: 9,
    category: 'logo',
    title: 'Coffee House Brand',
    client: 'Urban Brew',
    icon: SiStarbucks,
    color: 'from-yellow-700 via-amber-600 to-orange-600',
    description: 'Contemporary cafe identity',
    size: 'wide',
  },
];

export const FILTER_BUTTONS = [
  { label: 'All Work', value: 'all' },
  { label: 'Logos', value: 'logo' },
  { label: 'Packaging', value: 'packaging' },
];

export const FEATURED_COUNT = 2;
