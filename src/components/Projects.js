import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../assets/css/style.css';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my skills, projects, and services. Features include smooth animations, responsive design, and interactive components.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3",
      technologies: ["React", "React Router", "React Icons", "CSS3"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team features, and progress tracking.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      title: "Social Media Dashboard",
      description: "A responsive dashboard for social media analytics with data visualization and real-time updates.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
      technologies: ["React", "D3.js", "Node.js", "Express"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      title: "Weather Application",
      description: "A weather forecast application with location-based services and interactive maps.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3",
      technologies: ["React", "OpenWeather API", "Geolocation API"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      title: "Recipe Finder",
      description: "A recipe search application with filtering options and detailed cooking instructions.",
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3",
      technologies: ["React", "Spoonacular API", "CSS3"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2>My Projects</h2>
          <p>Some of my recent work</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
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