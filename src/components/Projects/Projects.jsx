import React from 'react';
import { projectsData } from '../../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  // Using local projects data only (backend admin API is disabled)
  const projects = projectsData;

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
