import React, { useEffect } from 'react';
import { skillsData } from '../../data/skills';
import './Skills.css';

const Skills = () => {
  const skills = {
    programming: skillsData.filter(s => s.category === 'Programming'),
    dataSkills: skillsData.filter(s => s.category === 'Data Skills'),
    tools: skillsData.filter(s => s.category === 'Tools'),
    web: skillsData.filter(s => s.category === 'Web Dev')
  };

  const getSkillLevel = (percentage) => {
    if (percentage >= 90) return 'Expert';
    if (percentage >= 80) return 'Advanced';
    if (percentage >= 75) return 'Upper-Intermediate';
    return 'Intermediate';
  };

  useEffect(() => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const skillsGrids = document.querySelectorAll('.skills-grid');

    const handleTabClick = (e) => {
      const button = e.currentTarget;
      const targetTab = button.getAttribute('data-tab');
      
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      skillsGrids.forEach(grid => {
        grid.classList.remove('active');
      });
      
      const targetGrid = document.querySelector(`[data-content="${targetTab}"]`);
      if (targetGrid) {
        targetGrid.classList.add('active');
      }
    };

    tabButtons.forEach(button => {
      button.addEventListener('click', handleTabClick);
    });

    return () => {
      tabButtons.forEach(button => {
        button.removeEventListener('click', handleTabClick);
      });
    };
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Technical <span className="highlight">Skills</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          My technical expertise and proficiency
        </p>
        
        <div className="skills-showcase" data-aos="fade-up" data-aos-delay="200">
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
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 1}} />
                        </linearGradient>
                      </defs>
                      <circle cx="45" cy="45" r="40"></circle>
                      <circle 
                        cx="45" 
                        cy="45" 
                        r="40" 
                        style={{ strokeDashoffset: 251 - (251 * skill.percentage) / 100 }}
                      ></circle>
                    </svg>
                    <div className="skill-percentage">{getSkillLevel(skill.percentage)}</div>
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
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 1}} />
                        </linearGradient>
                      </defs>
                      <circle cx="45" cy="45" r="40"></circle>
                      <circle 
                        cx="45" 
                        cy="45" 
                        r="40" 
                        style={{ strokeDashoffset: 251 - (251 * skill.percentage) / 100 }}
                      ></circle>
                    </svg>
                    <div className="skill-percentage">{getSkillLevel(skill.percentage)}</div>
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
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 1}} />
                        </linearGradient>
                      </defs>
                      <circle cx="45" cy="45" r="40"></circle>
                      <circle 
                        cx="45" 
                        cy="45" 
                        r="40" 
                        style={{ strokeDashoffset: 251 - (251 * skill.percentage) / 100 }}
                      ></circle>
                    </svg>
                    <div className="skill-percentage">{getSkillLevel(skill.percentage)}</div>
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
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 1}} />
                        </linearGradient>
                      </defs>
                      <circle cx="45" cy="45" r="40"></circle>
                      <circle 
                        cx="45" 
                        cy="45" 
                        r="40" 
                        style={{ strokeDashoffset: 251 - (251 * skill.percentage) / 100 }}
                      ></circle>
                    </svg>
                    <div className="skill-percentage">{getSkillLevel(skill.percentage)}</div>
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

export default Skills;
