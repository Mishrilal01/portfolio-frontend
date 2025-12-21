import React from 'react';
import { skillsData } from '../../data/skills';
import './Skills.css';

const Skills = () => {
  // Using local skills data only (backend admin API is disabled)
  const skills = skillsData;

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">My Skills</h2>
        {loading && <p className="loading-text">Loading skills...</p>}
        {error && <p className="error-text" style={{textAlign: 'center', color: '#888', fontSize: '14px', marginBottom: '20px'}}>{error}</p>}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={skill.id || index} 
              className="skill-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
