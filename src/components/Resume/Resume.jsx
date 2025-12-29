import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');

  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Lovely Professional University',
      year: '2023 - 2027',
      description: 'Pursuing Bachelor of Technology with focus on Data Science, Machine Learning, and Software Development.'
    }
  ];

  const experience = [
    {
      position: 'Data Science Intern',
      company: 'Unified Mentor Private Limited',
      year: 'August 2025 - September 2025',
      description: 'Completed one month virtual internship focused on data analysis, machine learning projects, and statistical modeling.',
      tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
      outcome: 'Successfully completed a real-world data science project, gaining practical insights into applying technical skills in professional settings and developing strong team collaboration abilities.'
    }
  ];

  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Resume</h2>
        
        <div className="resume-tabs">
          <button 
            className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button 
            className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
        </div>

        <div className="resume-content">
          {activeTab === 'education' && (
            <div className="resume-section" data-aos="fade-up">
              {education.map((item, index) => (
                <div key={index} className="resume-item">
                  <h3>{item.degree}</h3>
                  <h4>{item.institution}</h4>
                  <span className="year">{item.year}</span>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="resume-section" data-aos="fade-up">
              {experience.map((item, index) => (
                <div key={index} className="resume-item">
                  <h3>{item.position}</h3>
                  <h4>{item.company}</h4>
                  <span className="year">{item.year}</span>
                  <p>{item.description}</p>
                  
                  {item.tools && (
                    <div className="resume-highlights">
                      <div className="highlight-section">
                        <h5>🛠️ Tools Used:</h5>
                        <ul className="tools-list">
                          {item.tools.map((tool, i) => (
                            <li key={i}>{tool}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  
                  {item.outcome && (
                    <div className="resume-highlights">
                      <div className="highlight-section">
                        <h5>🎯 Outcome/Result:</h5>
                        <p className="outcome-text">{item.outcome}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="resume-download" data-aos="fade-up">
          <a href={`${process.env.PUBLIC_URL}/assets/resume.pdf`} download className="btn btn-primary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
