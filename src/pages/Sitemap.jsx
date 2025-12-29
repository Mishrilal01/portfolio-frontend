import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import './LegalPages.css';

const Sitemap = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (path) => {
    if (path.startsWith('/#')) {
      // Navigate to home first
      navigate('/');
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const sectionId = path.substring(2); // Remove /#
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  const siteLinks = [
    { name: 'Home', path: '/#home' },
    { name: 'About', path: '/#about' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Services', path: '/#services' },
    { name: 'Resume', path: '/#resume' },
    { name: 'Contact', path: '/#contact' },
  ];

  const additionalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
  ];

  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-content" data-aos="fade-up">
          <h1 className="legal-title">Sitemap</h1>
          <p className="legal-subtitle">Navigate through all pages</p>

          <section className="legal-section">
            <h2>Main Pages</h2>
            <ul className="sitemap-list">
              {siteLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleNavigation(link.path)} 
                    className="sitemap-link"
                  >
                    <span className="link-icon">→</span> {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section className="legal-section">
            <h2>Additional Pages</h2>
            <ul className="sitemap-list">
              {additionalLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleNavigation(link.path)} 
                    className="sitemap-link"
                  >
                    <span className="link-icon">→</span> {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <div className="back-home">
            <button onClick={() => navigate('/')} className="btn-primary">← Back to Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
