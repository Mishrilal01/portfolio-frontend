# 🚀 Quick Reference Cheat Sheet

## 📝 Most Common Customizations

### 1. Change Your Name
**File**: `src/components/Hero/Hero.jsx`
```javascript
<h1 className="hero-title">
  <span className="highlight">Your Name Here</span>
</h1>
```

### 2. Change Your Tagline
**File**: `src/components/Hero/Hero.jsx`
```javascript
<p className="hero-description">
  "Your Custom Tagline"
</p>
```

### 3. Update Contact Email
**File**: `src/utils/constants.js`
```javascript
export const SOCIAL_LINKS = {
  email: 'youremail@example.com',
  // ...
};
```

### 4. Add Project
**File**: `src/data/projects.js`
```javascript
{
  id: 9,
  title: 'New Project',
  description: 'Description...',
  image: '/assets/images/project.jpg',
  liveUrl: 'https://...',
  githubUrl: 'https://github.com/...',
  tags: ['Tech1', 'Tech2'],
  category: 'data-analysis',
  featured: true
}
```

### 5. Change Color Scheme
**File**: `src/styles/variables.css`
```css
:root {
  --primary-color: #YOUR_COLOR;
  --secondary-color: #YOUR_COLOR;
}
```

## 🎨 Common Commands

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Key Files to Edit

| File | Purpose |
|------|---------|
| `src/data/projects.js` | Your projects |
| `src/utils/constants.js` | Personal info |
| `src/components/Hero/Hero.jsx` | Landing section |
| `src/components/About/About.jsx` | About & Skills |
| `src/styles/variables.css` | Colors & Theme |

## 🖼️ Image Locations

```
public/assets/images/
├── profile.jpg          ← Your photo (800x800px)
├── crime-dashboard.jpg  ← Project 1
├── ev-dashboard.jpg     ← Project 2
├── taskmaster.jpg       ← Project 3
└── ...                  ← More projects
```

## 🎯 Animation Classes (AOS)

```jsx
data-aos="fade-up"        // Fade in from bottom
data-aos="fade-down"      // Fade in from top
data-aos="fade-left"      // Fade in from right
data-aos="fade-right"     // Fade in from left
data-aos="zoom-in"        // Zoom in
data-aos-delay="200"      // Delay 200ms
```

## 🌈 Color Variables

```css
--primary-color      // Main brand color
--secondary-color    // Secondary brand color
--accent-color       // Accent highlights
--bg-primary         // Background main
--bg-secondary       // Background alternate
--text-primary       // Text main
--text-secondary     // Text muted
```

## 📱 Responsive Breakpoints

```css
@media (max-width: 576px)  { /* Mobile */ }
@media (max-width: 968px)  { /* Tablet */ }
@media (min-width: 969px)  { /* Desktop */ }
```

## ⚡ Utility Classes

```css
.glassmorphism       // Glass effect
.gradient-text       // Gradient text
.hover-lift          // Lift on hover
.pulse-animation     // Pulse effect
.float-animation     // Float effect
.smooth-transition   // Smooth transitions
```

## 🔧 Component Structure

```
Component/
├── ComponentName.jsx    ← React component
└── ComponentName.css    ← Styles
```

## 🎬 Quick Animations

```jsx
// Fade in on scroll
<div data-aos="fade-up">Content</div>

// Delay animation
<div data-aos="fade-up" data-aos-delay="200">Content</div>

// Multiple animations
<div 
  data-aos="fade-up" 
  data-aos-delay="200"
  data-aos-duration="1000"
>
  Content
</div>
```

## 🌓 Dark Mode

Dark mode toggles automatically!
- Button in navbar
- Saves preference
- Matches system theme

## 📊 Stats Counter

```jsx
<h3 ref={el => counterRefs.current[0] = el} 
    data-count="15" 
    className="stat-count">
  0+
</h3>
```

## 🎨 Gradient Backgrounds

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 🔗 Social Links

Update in: `src/utils/constants.js`
```javascript
export const SOCIAL_LINKS = {
  github: 'https://github.com/username',
  linkedin: 'https://linkedin.com/in/username',
  twitter: 'https://twitter.com/username',
  email: 'email@example.com',
  phone: '+1234567890'
};
```

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "gsap": "^3.12.4",
  "aos": "^2.3.4"
}
```

## 🚀 Production Build

```bash
npm run build
```

Output: `build/` folder

## 📤 Deployment

### Netlify
1. Drag `build/` folder to Netlify

### Vercel
```bash
vercel
```

### GitHub Pages
```bash
npm run deploy
```

## 🔍 SEO Meta Tags

**File**: `public/index.html`
```html
<meta name="description" content="Your description">
<title>Your Portfolio</title>
```

## ⚙️ Configuration Files

```
.env                 ← Environment variables
package.json         ← Dependencies & scripts
public/manifest.json ← PWA settings
```

## 🎯 Project Categories

```javascript
'all'                 // All projects
'data-analysis'       // Data Analysis
'data-visualization'  // Dashboards
'machine-learning'    // ML Projects
'web-development'     // Web Dev
'python-projects'     // Python
```

## 💡 Pro Tips

1. **Images**: Optimize before uploading (use TinyPNG)
2. **Colors**: Use consistent palette
3. **Content**: Keep descriptions concise
4. **Testing**: Test on mobile devices
5. **Updates**: Update regularly

## 🆘 Common Issues

### Animations not working?
- Check if AOS is initialized
- Verify `data-aos` attributes

### Dark mode not saving?
- Check browser localStorage
- Clear cache and reload

### Images not loading?
- Check file paths
- Verify images are in `public/`

### Build failing?
- Run `npm install` again
- Check for console errors

## 📞 File Structure Reference

```
src/
├── components/      ← UI components
├── data/           ← Content data
├── context/        ← React context
├── hooks/          ← Custom hooks
├── utils/          ← Utilities
└── styles/         ← CSS files
```

## ✅ Pre-Launch Checklist

- [ ] Profile image added
- [ ] Resume PDF uploaded
- [ ] Project images added
- [ ] Personal info updated
- [ ] Links tested
- [ ] Mobile tested
- [ ] Dark mode tested
- [ ] Build successful

---

**Keep this handy! 📌**

For detailed info, check:
- `README.md`
- `SETUP_GUIDE.md`
- `FEATURES.md`
- `GETTING_STARTED.md`
