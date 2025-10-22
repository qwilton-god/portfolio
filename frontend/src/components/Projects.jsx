import React from 'react';
import './Projects.css';
import { ExternalLink, Github } from 'lucide-react';
import { mockProjects } from '../mock';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-label">Портфолио</span>
          <h2 className="section-title">
            Избранные <span className="highlight-text">проекты</span>
          </h2>
          <p className="section-description">
            Примеры реализованных проектов с использованием современных технологий
          </p>
        </div>

        <div className="projects-grid">
          {mockProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.liveUrl} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="link-icon" />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="link-icon" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="project-tag"
                      style={{ '--tag-color': project.color }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;