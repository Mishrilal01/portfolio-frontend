import React from 'react';

const ProjectCard = ({ project, index }) => {
  return (
    <div 
      className="project-card" 
      data-aos="fade-up" 
      data-aos-delay={index * 100}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          {/* <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-small">
            Live Demo
          </a> */}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-small">
            GitHub
          </a>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.outcome && (
          <div className="project-outcome">
            <span className="outcome-icon">🎯</span>
            <p>{project.outcome}</p>
          </div>
        )}
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
