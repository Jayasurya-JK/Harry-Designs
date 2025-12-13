# Customization Guide

This guide will help you customize the portfolio website with your own content and branding.

## 🎨 Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1a1a1a',      // Dark color
      secondary: '#f5f5f5',    // Light color
      accent: '#FFD700',       // Accent color
    },
  },
}
```

For gradient colors, search and replace in component files:
- Purple gradients: `from-purple-600`, `to-purple-600`
- Pink gradients: `from-pink-600`, `to-pink-600`
- Blue gradients: `from-blue-600`, `to-blue-600`

## 📝 Updating Content

### Hero Section (`src/components/Hero.jsx`)

Update the main heading and tagline:
```javascript
<h1 className="...">
  <span className="text-gradient">Your Name or Title</span>
</h1>
<p className="...">
  Your Tagline
</p>
<p className="...">
  Your Description
</p>
```

### About Section (`src/components/About.jsx`)

1. Update the introduction text:
```javascript
<p className="...">
  Your personal introduction and expertise
</p>
```

2. Customize skills (lines 10-27):
```javascript
const skills = [
  {
    icon: <FaPalette className="text-4xl" />,
    title: "Your Skill",
    description: "Skill description"
  },
  // Add more skills...
];
```

3. Update statistics (lines 79-82):
```javascript
{ number: "200+", label: "Projects Completed" },
{ number: "150+", label: "Happy Clients" },
// Update with your numbers
```

### Portfolio Section (`src/components/Portfolio.jsx`)

Replace sample portfolio items (lines 11-24) with your actual work:

```javascript
const portfolioItems = [
  { 
    id: 1, 
    category: 'logo',  // or 'packaging'
    title: 'Your Project Name', 
    image: '/path/to/image.jpg',  // Add actual images
    color: 'from-blue-400 to-blue-600'  // Fallback gradient
  },
  // Add more projects...
];
```

To use real images:
1. Add images to `public/portfolio/` folder
2. Update items:
```javascript
{ 
  id: 1, 
  category: 'logo',
  title: 'Tech Startup Logo',
  image: '/portfolio/logo1.jpg'
}
```
3. Update the image display in the component:
```javascript
<img 
  src={item.image} 
  alt={item.title}
  className="w-full h-full object-cover"
/>
```

### Contact Section (`src/components/Contact.jsx`)

1. Update contact information (lines 31-33):
```javascript
const contactInfo = [
  { icon: <HiMail />, label: 'Email', value: 'your@email.com' },
  { icon: <HiPhone />, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: <HiLocationMarker />, label: 'Location', value: 'Your City, Country' },
];
```

2. Update social media links (lines 36-41):
```javascript
const socialLinks = [
  { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourprofile', name: 'LinkedIn' },
  { icon: <FaInstagram />, url: 'https://instagram.com/yourhandle', name: 'Instagram' },
  { icon: <FaBehance />, url: 'https://behance.net/yourprofile', name: 'Behance' },
  { icon: <FaDribbble />, url: 'https://dribbble.com/yourprofile', name: 'Dribbble' },
];
```

3. To make the contact form functional, integrate with a service like:
   - [Formspree](https://formspree.io/)
   - [EmailJS](https://www.emailjs.com/)
   - [Web3Forms](https://web3forms.com/)

Example with Formspree:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  });
  setShowSuccess(true);
  setFormData({ name: '', email: '', message: '' });
};
```

## 🖼️ Adding Your Logo/Favicon

1. Replace favicon in `public/` folder
2. Update `index.html`:
```html
<link rel="icon" type="image/png" href="/your-favicon.png" />
```

3. Update logo text in `src/components/Navbar.jsx`:
```javascript
<motion.div className="...">
  Your Brand Name
</motion.div>
```

## 🎭 Customizing Animations

Animations are powered by Framer Motion. Adjust in component files:

- Animation duration: `duration: 0.6` (in seconds)
- Delay between elements: `delay: 0.2` (in seconds)
- Animation type: `ease`, `linear`, `easeIn`, `easeOut`, `easeInOut`

Example:
```javascript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, delay: 0.5 }}
>
```

To disable animations on an element, remove the `motion.` prefix and animation props.

## 📱 Adding New Sections

To add a new section:

1. Create `src/components/NewSection.jsx`:
```javascript
import { motion } from 'framer-motion';

const NewSection = () => {
  return (
    <section id="new-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Your content */}
      </div>
    </section>
  );
};

export default NewSection;
```

2. Import in `src/App.jsx`:
```javascript
import NewSection from './components/NewSection'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <NewSection />  {/* Add here */}
      <About />
      {/* ... */}
    </div>
  );
}
```

3. Add to navigation in `src/components/Navbar.jsx`:
```javascript
const navLinks = [
  // ...
  { name: 'New Section', href: '#new-section' },
];
```

## 🎨 Changing Fonts

Fonts are loaded from Google Fonts in `index.html`. To change:

1. Visit [Google Fonts](https://fonts.google.com/)
2. Select your fonts
3. Replace the `<link>` tag in `index.html`
4. Update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
  display: ['Your Display Font', 'serif'],
},
```

## 🔧 Advanced Customizations

### Add More Portfolio Categories

In `Portfolio.jsx`, update filter buttons:
```javascript
const filterButtons = [
  { label: 'All Work', value: 'all' },
  { label: 'Logos', value: 'logo' },
  { label: 'Packaging', value: 'packaging' },
  { label: 'Branding', value: 'branding' },  // New category
];
```

### Change Layout Structure

The site uses Tailwind's utility classes for layout:
- `max-w-7xl`: Maximum content width
- `px-4 sm:px-6 lg:px-8`: Responsive padding
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`: Responsive grid

Adjust these values to change spacing and layout.

## 💡 Tips

- Test on mobile devices after making changes
- Keep color contrast accessible (WCAG AA standard)
- Optimize images before uploading (use tools like TinyPNG)
- Maintain consistent spacing and sizing
- Test all links and forms after updates

## 🆘 Need Help?

- Tailwind CSS docs: https://tailwindcss.com/docs
- Framer Motion docs: https://www.framer.com/motion/
- React docs: https://react.dev/
