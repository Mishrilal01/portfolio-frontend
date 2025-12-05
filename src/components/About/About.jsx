import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const counterRefs = useRef([]);

  const skills = {
    programming: [
      { name: 'Python', level: 90, icon: '🐍' },
      { name: 'C/C++', level: 85, icon: '⚡' },
      { name: 'SQL', level: 88, icon: '💾' },
      { name: 'JavaScript', level: 80, icon: '📜' }
    ],
    dataSkills: [
      { name: 'Data Analysis', level: 92, icon: '📊' },
      { name: 'Data Visualization', level: 90, icon: '📈' },
      { name: 'Machine Learning', level: 85, icon: '🤖' },
      { name: 'Statistical Analysis', level: 87, icon: '📉' }
    ],
    tools: [
      { name: 'Excel', level: 95, icon: '📑' },
      { name: 'Tableau', level: 88, icon: '📊' },
      { name: 'Power BI', level: 90, icon: '💼' },
      { name: 'Pandas', level: 92, icon: '🐼' }
    ],
    web: [
      { name: 'HTML', level: 90, icon: '🌐' },
      { name: 'CSS', level: 88, icon: '🎨' },
      { name: 'JavaScript', level: 80, icon: '⚡' },
      { name: 'React', level: 75, icon: '⚛️' }
    ]
  };

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

    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const skillsGrids = document.querySelectorAll('.skills-grid');

    const handleTabClick = (e) => {
      const button = e.currentTarget;
      const targetTab = button.getAttribute('data-tab');
      
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      
      // Hide all skill grids
      skillsGrids.forEach(grid => {
        grid.classList.remove('active');
      });
      
      // Show target skill grid
      const targetGrid = document.querySelector(`[data-content="${targetTab}"]`);
      if (targetGrid) {
        targetGrid.classList.add('active');
      }
    };

    tabButtons.forEach(button => {
      button.addEventListener('click', handleTabClick);
    });

    return () => {
      observer.disconnect();
      tabButtons.forEach(button => {
        button.removeEventListener('click', handleTabClick);
      });
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

        {/* Skills Section */}
        <div id="skills" className="skills-showcase" data-aos="fade-up" data-aos-delay="800">
          <h3 className="skills-title">Technical Skills</h3>
          
          <div className="skills-tabs">
            <button className="tab-btn active" data-tab="programming">Programming</button>
            <button className="tab-btn" data-tab="data">Data Skills</button>
            <button className="tab-btn" data-tab="tools">Tools</button>
            <button className="tab-btn" data-tab="web">Web Dev</button>
          </div>

          <div className="skills-content-wrapper">
            <div className="skills-grid active" data-content="programming">
              {skills.programming.map((skill, index) => (
                <div key={index} className="skill-item" data-aos="zoom-in" data-aos-delay={index * 100}>
                  <div className="skill-icon-wrapper">
                    <span className="skill-icon">{skill.icon}</span>
                  </div>
                  <h4>{skill.name}</h4>
                  <div className="skill-progress-circle">
                    <svg>
                      <circle cx="45" cy="45" r="40"></circle>
                      <circle 
                        cx="45" 
                        cy="45" 
                        r="40" 
                        style={{ strokeDashoffset: 251 - (251 * skill.level) / 100 }}
                      ></circle>
                    </svg>
                    <div className="skill-percentage">{skill.level}%</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="skills-grid" data-content="data">
              {skills.dataSkills.map((skill, index) => (
                <div key={index} className="skill-item" data-aos="zoom-in" data-aos-delay={index * 100}>
                  <div className="skill-icon-wrapper">
                    <span className="skill-icon">{skill.icon}</span>
                  </div>
                  <h4>{skill.name}</h4>
                  <div className="skill-progress-circle">
                    <svg>
                      <circle cx="45" cy="45" r="40"></circle>
                      <circle 
                        cx="45" 
                        cy="45" 
                        r="40" 
                        style={{ strokeDashoffset: 251 - (251 * skill.level) / 100 }}
                      ></circle>
                    </svg>
                    <div className="skill-percentage">{skill.level}%</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="skills-grid" data-content="tools">
              {skills.tools.map((skill, index) => (
                <div key={index} className="skill-item" data-aos="zoom-in" data-aos-delay={index * 100}>
                  <div className="skill-icon-wrapper">
                    <span className="skill-icon">{skill.icon}</span>
                  </div>
                  <h4>{skill.name}</h4>
                  <div className="skill-progress-circle">
                    <svg>
                      <circle cx="45" cy="45" r="40"></circle>
                      <circle 
                        cx="45" 
                        cy="45" 
                        r="40" 
                        style={{ strokeDashoffset: 251 - (251 * skill.level) / 100 }}
                      ></circle>
                    </svg>
                    <div className="skill-percentage">{skill.level}%</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="skills-grid" data-content="web">
              {skills.web.map((skill, index) => (
                <div key={index} className="skill-item" data-aos="zoom-in" data-aos-delay={index * 100}>
                  <div className="skill-icon-wrapper">
                    <span className="skill-icon">{skill.icon}</span>
                  </div>
                  <h4>{skill.name}</h4>
                  <div className="skill-progress-circle">
                    <svg>
                      <circle cx="45" cy="45" r="40"></circle>
                      <circle 
                        cx="45" 
                        cy="45" 
                        r="40" 
                        style={{ strokeDashoffset: 251 - (251 * skill.level) / 100 }}
                      ></circle>
                    </svg>
                    <div className="skill-percentage">{skill.level}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
