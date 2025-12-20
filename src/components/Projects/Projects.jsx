// FORCE REBUILD - API BASE URL FIX APPLIED

import React, { useState, useEffect } from 'react';
import { projectsData } from '../../data/projects';
import ProjectCard from './ProjectCard';
import API_BASE_URL from '../../utils/config';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState(projectsData); // Default to local data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch projects from backend API
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/admin/projects`);
        if (response.ok) {
          const data = await response.json();
          if (data.projects && data.projects.length > 0) {
            setProjects(data.projects);
            console.log(`✓ Loaded ${data.projects.length} projects from backend`);
          }
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
        //setError('Using local data');
        // Keep using local projectsData as fallback
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchProjects();

    // Auto-refresh every 30 seconds to stay in sync with backend
    const interval = setInterval(fetchProjects, 30000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">My Projects</h2>
        {loading && <p className="loading-text">Loading projects...</p>}
        {error && <p className="error-text" style={{textAlign: 'center', color: '#888', fontSize: '14px', marginBottom: '20px'}}>{error}</p>}
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
