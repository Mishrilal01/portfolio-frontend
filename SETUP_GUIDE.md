# 🚀 Portfolio Setup & Customization Guide

## 📋 Table of Contents
1. [Installation](#installation)
2. [Customization](#customization)
3. [Adding Your Content](#adding-your-content)
4. [Deployment](#deployment)
5. [Troubleshooting](#troubleshooting)

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git (optional)

### Step 1: Install Dependencies
```bash
cd portfolio-react
npm install
```

### Step 2: Start Development Server
```bash
npm start
```
Your portfolio will open at `http://localhost:3000`

## 🎨 Customization

### 1. Personal Information

#### Update Hero Section
**File**: `src/components/Hero/Hero.jsx`

```javascript
// Change the typing animation texts
const texts = [
  'Your Role 1',
  'Your Role 2',
  'Your Role 3',
  'Your Role 4'
];

// Update the hero title
<h1 className="hero-title">
  <span className="highlight">Your Name</span>
</h1>

// Update the tagline
<p className="hero-description">
  "Your Custom Tagline Here"
</p>
```

#### Update Stats
```javascript
<div className="stat-item">
  <h3 className="stat-number" data-count="YOUR_NUMBER">0</h3>
  <p className="stat-label">Your Label</p>
</div>
```

### 2. About Me Section

**File**: `src/components/About/About.jsx`

```javascript
// Update bio text
<p>
  Your professional bio here...
</p>

// Update education info
<div className="info-card">
  <div className="info-icon">🎓</div>
  <div className="info-content">
    <h4>Education</h4>
    <p>Your Degree</p>
    <span>Your University</span>
  </div>
</div>
```

#### Update Skills
```javascript
const skills = {
  programming: [
    { name: 'Skill Name', level: 90, icon: '🐍' },
    // Add more...
  ],
  // Update other categories...
};
```

### 3. Projects

**File**: `src/data/projects.js`

```javascript
export const projectsData = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    image: '/assets/images/your-image.jpg',
    liveUrl: 'https://your-live-url.com',
    githubUrl: 'https://github.com/yourusername/repo',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    category: 'data-analysis',
    featured: true
  },
  // Add more projects...
];
```

### 4. Contact Information

**File**: `src/components/Contact/Contact.jsx`

```javascript
<div className="contact-item">
  <div className="contact-icon">📧</div>
  <h3>Email</h3>
  <p>your.email@example.com</p>
</div>
```

### 5. Social Links

**File**: `src/utils/constants.js`

```javascript
export const SOCIAL_LINKS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  email: 'your.email@example.com',
  phone: '+1 (123) 456-7890'
};
```

## 📷 Adding Your Content

### Images

1. **Profile Picture**
   - Place in: `public/assets/images/profile.jpg`
   - Recommended size: 800x800px
   - Format: JPG or PNG

2. **Project Images**
   - Place in: `public/assets/images/`
   - Naming: `project-name.jpg`
   - Recommended size: 1200x800px

3. **Hero Illustration**
   - Place in: `public/assets/images/hero-illustration.svg`
   - Use SVG for best quality

### Resume PDF

1. Place your resume PDF in: `public/assets/resume.pdf`
2. Name it: `Mishrilal_Parihar_Resume.pdf` (or update the filename in Hero.jsx)

## 🎨 Color Theme Customization

**File**: `src/styles/variables.css`

```css
:root {
  /* Update these colors */
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  
  /* Background Colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  
  /* Text Colors */
  --text-primary: #2c3e50;
  --text-secondary: #7f8c8d;
}

/* Dark theme */
[data-theme='dark'] {
  --bg-primary: #1a1a2e;
  --bg-secondary: #16213e;
  --text-primary: #eaeaea;
  --text-secondary: #a9a9a9;
}
```

## 🚀 Deployment

### Deploy to Netlify

1. Build your project:
```bash
npm run build
```

2. Drag and drop the `build` folder to Netlify

OR

3. Connect GitHub repository to Netlify for automatic deployments

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## 🔧 Advanced Customization

### Add New Section

1. Create component folder: `src/components/YourSection/`
2. Create files:
   - `YourSection.jsx`
   - `YourSection.css`

3. Import in `App.jsx`:
```javascript
import YourSection from './components/YourSection/YourSection';

function App() {
  return (
    <div className="App">
      {/* Other components */}
      <YourSection />
    </div>
  );
}
```

### Modify Animations

**AOS (Animate on Scroll)**

Available animations:
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- `flip-left`, `flip-right`

Usage:
```jsx
<div data-aos="fade-up" data-aos-delay="200">
  Content
</div>
```

### Custom Animations

Add to your CSS:
```css
@keyframes yourAnimation {
  0% { /* start state */ }
  100% { /* end state */ }
}

.your-element {
  animation: yourAnimation 1s ease-in-out;
}
```

## 🐛 Troubleshooting

### Issue: Animations not working

**Solution**: Make sure AOS is initialized
```javascript
import AOS from 'aos';
import 'aos/dist/aos.css';

useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
```

### Issue: Theme toggle not working

**Solution**: Verify ThemeContext is wrapped around App
```javascript
<ThemeProvider>
  <App />
</ThemeProvider>
```

### Issue: Images not loading

**Solution**: Check image paths
- Public folder images: `/assets/images/image.jpg`
- Src folder images: `import image from './image.jpg'`

### Issue: Routing not working

**Solution**: Make sure BrowserRouter is set up
```javascript
import { BrowserRouter as Router } from 'react-router-dom';

<Router>
  <App />
</Router>
```

## 📝 Environment Variables

Create `.env` file in root:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📞 Support

If you encounter any issues:

1. Check the [README.md](README.md)
2. Review the code comments
3. Search for similar issues online
4. Create an issue on GitHub

## ✅ Checklist Before Deployment

- [ ] Update all personal information
- [ ] Add all project images
- [ ] Upload resume PDF
- [ ] Test all links
- [ ] Test contact form
- [ ] Check responsive design on mobile
- [ ] Test dark/light mode
- [ ] Optimize images
- [ ] Update meta tags for SEO
- [ ] Test all animations
- [ ] Check console for errors

## 🎯 Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress images (TinyPNG, Squoosh)
   - Use lazy loading

2. **Code Splitting**
   ```javascript
   const Component = React.lazy(() => import('./Component'));
   ```

3. **Reduce Bundle Size**
   - Remove unused dependencies
   - Use production build
   - Enable gzip compression

## 📚 Resources

- [React Documentation](https://reactjs.org/)
- [AOS Library](https://michalsnik.github.io/aos/)
- [GSAP Documentation](https://greensock.com/gsap/)
- [CSS Tricks](https://css-tricks.com/)

---

**Happy Coding! 🚀**

*Remember: Your portfolio is a reflection of you. Make it unique!*
