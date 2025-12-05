import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import './Hero.css';

const Hero = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Typing animation
    const texts = [
      'Data Analyst',
      'Aspiring Data Scientist',
      'CSE (DA) Student',
      'Problem Solver'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      if (!typedTextRef.current) return;
      
      const currentText = texts[textIndex];
      
      if (!isDeleting) {
        typedTextRef.current.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
          isDeleting = true;
          timeoutId = setTimeout(type, 2000); // Pause at end
        } else {
          timeoutId = setTimeout(type, 100); // Typing speed
        }
      } else {
        typedTextRef.current.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          timeoutId = setTimeout(type, 500); // Pause before next word
        } else {
          timeoutId = setTimeout(type, 50); // Deleting speed
        }
      }
    };

    type();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const handleDownloadResume = () => {
    // Create a link and trigger download
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/assets/resume.pdf`;
    link.download = 'Mishrilal_Parihar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      <div className="particles-background">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content" data-aos="fade-up">
          <p className="hero-greeting" data-aos="fade-down">Hello, I'm</p>
          <h1 className="hero-title" data-aos="fade-right" data-aos-delay="200">
            <span className="highlight">Mishrilal Parihar</span>
          </h1>
          <h2 className="hero-subtitle" data-aos="fade-left" data-aos-delay="400">
            <span ref={typedTextRef} className="typed-text"></span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description" data-aos="fade-up" data-aos-delay="600">
            Where data becomes insight, insights become decisions, and decisions shape the future — through analytics, visualization, and machine learning intelligence.
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="800">
            <button onClick={handleDownloadResume} className="btn btn-primary">
              <span className="btn-icon">📄</span>
              Download Resume
            </button>
            <a href="#projects" className="btn btn-secondary">
              <span className="btn-icon">🚀</span>
              View Projects
            </a>
          </div>
        </div>
        
        <div className="hero-image" data-aos="fade-left" data-aos-delay="600">
          <div className="image-container">
            <div className="tech-circle">
              <div className="circle-content">
                <div className="tech-icon">📊</div>
                <h3>Data Analytics</h3>
              </div>
            </div>
            <div className="floating-tech">
              <div className="tech-badge" style={{animationDelay: '0s'}}>
                <span>🐍</span>
                <p>Python</p>
              </div>
              <div className="tech-badge" style={{animationDelay: '0.5s'}}>
                <span>💾</span>
                <p>SQL</p>
              </div>
              <div className="tech-badge" style={{animationDelay: '1s'}}>
                <span>📈</span>
                <p>Power BI</p>
              </div>
              <div className="tech-badge" style={{animationDelay: '1.5s'}}>
                <span>🤖</span>
                <p>ML</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="1200">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
