import React, { useState, useEffect } from 'react';
import { skillsData } from '../../data/skills';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState(skillsData); // Default to local data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch skills from backend API
    const fetchSkills = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/skills');
        if (response.ok) {
          const data = await response.json();
          if (data.skills && data.skills.length > 0) {
            setSkills(data.skills);
            console.log(`✓ Loaded ${data.skills.length} skills from backend`);
          }
        }
      } catch (err) {
        console.error('Error fetching skills:', err);
        setError('Using local data');
        // Keep using local skillsData as fallback
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchSkills();

    // Auto-refresh every 30 seconds to stay in sync with backend
    const interval = setInterval(fetchSkills, 30000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

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
