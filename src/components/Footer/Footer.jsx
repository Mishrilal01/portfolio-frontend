import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h2 className="footer-logo">
              <span className="gradient-text">Mishrilal</span>
              <span className="dot-pulse">.</span>
            </h2>
            <p className="footer-tagline">
                Transforming data into meaningful insights.
                Empowering smarter decisions with analytics.
                Building tomorrow’s solutions today.
            </p>
            
            {/* Animated Floating Social Icons */}
            <div className="footer-floating-socials">
              <div className="social-orbit-center">
                <span className="orbit-pulse"></span>
              </div>
              <a href="https://github.com/Mishrilal01" target="_blank" rel="noopener noreferrer" className="floating-social-badge orbit-1" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mis-p/" target="_blank" rel="noopener noreferrer" className="floating-social-badge orbit-2" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://leetcode.com/u/mishrilalparihar30221/" target="_blank" rel="noopener noreferrer" className="floating-social-badge orbit-3" aria-label="LeetCode">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.89-5.83-1.73-8.063.346l-.047.051-5.109 5.497a4.678 4.678 0 0 0-.943 1.762 4.451 4.451 0 0 0-.092.732v.001c-.01.307-.005.615.028.921a4.842 4.842 0 0 0 .17.766 4.66 4.66 0 0 0 .237.598 4.88 4.88 0 0 0 .765 1.183l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.89-5.83-1.73-8.063.346l-.047.051-5.109 5.497a4.678 4.678 0 0 0-.943 1.762z"/>
                </svg>
              </a>
              <a href="mailto:mishrilalparihar30221@gmail.com" className="floating-social-badge orbit-4" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home"><span className="link-icon">→</span> Home</a></li>
              <li><a href="#about"><span className="link-icon">→</span> About</a></li>
              <li><a href="#skills"><span className="link-icon">→</span> Skills</a></li>
              <li><a href="#projects"><span className="link-icon">→</span> Projects</a></li>
              <li><a href="#services"><span className="link-icon">→</span> Services</a></li>
              <li><a href="#contact"><span className="link-icon">→</span> Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li><a href="#services"><span className="link-icon">→</span> Data Analysis</a></li>
              <li><a href="#services"><span className="link-icon">→</span> Data Visualization</a></li>
              <li><a href="#services"><span className="link-icon">→</span> Dashboard Design</a></li>
              <li><a href="#services"><span className="link-icon">→</span> Machine Learning</a></li>
              <li><a href="#services"><span className="link-icon">→</span> Web Development</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Get In Touch</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>mishrilalparihar30221@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+91 73571 30221</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Rajasthan, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} <span className="gradient-text">Mishrilal Parihar</span>. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#terms">Terms of Service</a>
            <span className="separator">•</span>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
      
      <div className="footer-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </footer>
  );
};

export default Footer;
