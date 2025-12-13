# Deployment Guide

This document provides instructions for deploying the Harry Designs portfolio website to various hosting platforms.

## Building for Production

Before deploying, build the production version:

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Deployment Options

### 1. Vercel (Recommended)

Vercel provides seamless deployment for Vite projects:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to link your project

**Or** connect your GitHub repository on [vercel.com](https://vercel.com) for automatic deployments.

### 2. Netlify

Deploy to Netlify using their CLI or drag-and-drop:

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

**Or** drag the `dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

### 3. GitHub Pages

Deploy to GitHub Pages using gh-pages:

1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default {
     base: '/Harry-Designs/', // Your repo name
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### 4. Custom Server

For custom hosting (Apache, Nginx, etc.):

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the contents of `dist/` to your web server

3. Configure your server to serve `index.html` for all routes (for SPA routing)

## Environment Variables

If you add API integrations or backend services, create a `.env` file:

```
VITE_API_URL=https://your-api.com
VITE_CONTACT_EMAIL=your@email.com
```

Access in code with `import.meta.env.VITE_API_URL`

## Post-Deployment

After deployment:
- Test all sections and animations
- Verify mobile responsiveness
- Check contact form functionality
- Test all navigation links
- Verify images and assets load correctly

## Custom Domain

Most hosting providers allow custom domain configuration:
- Add your domain in the hosting provider's dashboard
- Update DNS settings with your domain registrar
- Add SSL certificate (usually automatic)

## Continuous Deployment

For automatic deployments:
1. Connect your GitHub repository to your hosting provider
2. Enable automatic deployments on push to main branch
3. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`

## Performance Optimization

The build is already optimized with:
- Code splitting
- Asset minification
- CSS optimization
- Tree shaking

For additional optimization:
- Enable CDN on your hosting provider
- Enable HTTP/2
- Configure caching headers
- Consider adding a service worker for offline support

## Troubleshooting

**Build fails**: Check Node.js version (requires Node 18+)
**Styles not loading**: Verify Tailwind CSS configuration
**Routing issues**: Ensure server is configured for SPA routing
**Animations not working**: Check Framer Motion is properly installed
