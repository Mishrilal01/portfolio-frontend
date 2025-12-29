import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const counterRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = parseInt(target.getAttribute('data-count'));
            animateCounter(target, finalValue);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counterRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + (element.classList.contains('percentage') ? '%' : '+');
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + (element.classList.contains('percentage') ? '%' : '+');
      }
    }, 40);
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          About <span className="highlight">Me</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Get to know me better
        </p>

        <div className="about-content" data-aos="fade-up" data-aos-delay="200">
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img src={`${process.env.PUBLIC_URL}/assets/images/profile.jpeg`} alt="Mishrilal Parihar" />
              <div className="image-overlay"></div>
            </div>
            <div className="floating-card">
              <span className="card-icon">🎓</span>
              <p>B.Tech CSE (DA)</p>
            </div>
          </div>

          <div className="about-text">
            <h3 data-aos="fade-left" data-aos-delay="300">
              Hello! I'm <span className="highlight">Mishrilal Parihar</span>
            </h3>


            <p data-aos="fade-left" data-aos-delay="400">
              I'm a <strong>B.Tech CSE (Data Analytics)</strong> student at <strong>Lovely Professional University</strong>, 
              specializing in data analysis, machine learning, and data visualization. I turn raw data into meaningful insights that empower smarter decision-making.
            </p>
           
            <p data-aos="fade-left" data-aos-delay="500">
              Passionate, detail-oriented, and endlessly curious — I believe data has the power to solve real-world problems, and I love bringing that power to life through analytics and visualization.
            </p>


            <div className="about-info" data-aos="fade-left" data-aos-delay="600">
              <div className="info-card">
                <div className="info-icon">🎓</div>
                <div className="info-content">
                  <h4>Education</h4>
                  <p>B.Tech CSE (Data Analytics)</p>
                  <span>Lovely Professional University</span>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">🎯</div>
                <div className="info-content">
                  <h4>Focus</h4>
                  <p>Data Science & Analytics</p>
                  <span>ML, Visualization, Insights</span>
                </div>
              </div>
            </div>

            <div className="quick-stats" data-aos="fade-left" data-aos-delay="700">
              <div className="stat-box">
                <h3 ref={el => counterRefs.current[0] = el} data-count="15" className="stat-count">0+</h3>
                <p>Projects</p>
              </div>
              <div className="stat-box">
                <h3 ref={el => counterRefs.current[1] = el} data-count="8" className="stat-count">0+</h3>
                <p>Certificates</p>
              </div>
              <div className="stat-box">
                <h3 ref={el => counterRefs.current[2] = el} data-count="500" className="stat-count">0+</h3>
                <p>Hours Coding</p>
              </div>
              <div className="stat-box">
                <h3 ref={el => counterRefs.current[3] = el} data-count="95" className="stat-count percentage">0%</h3>
                <p>Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
