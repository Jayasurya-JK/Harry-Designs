import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';

/**
 * Contact section data
 */

export const CONTACT_INFO = [
  { icon: HiMail, label: 'Email', value: 'hello@harrydesigns.com' },
  { icon: HiPhone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: HiLocationMarker, label: 'Location', value: 'New York, USA' },
];

export const SOCIAL_LINKS = [
  { icon: FaLinkedin, url: '#', name: 'LinkedIn' },
  { icon: FaInstagram, url: '#', name: 'Instagram' },
  { icon: FaBehance, url: '#', name: 'Behance' },
  { icon: FaDribbble, url: '#', name: 'Dribbble' },
];
