import React from 'react';

const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing products, orders, and users. Built with MERN stack.",
        tags: ["React", "Node.js", "MongoDB", "Chart.js"],
        liveLink: "#",
        codeLink: "#"
    },
    {
        title: "Task Management App",
        description: "Collaborative task manager with real-time updates using Socket.io and React.",
        tags: ["React", "Socket.io", "Express", "JWT"],
        liveLink: "#",
        codeLink: "#"
    },
    {
        title: "Social Media Clone",
        description: "Full-stack social media application with post creation, likes, and comments feature.",
        tags: ["MERN", "Redux", "Cloudinary"],
        liveLink: "#",
        codeLink: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-image">
                            <span>Project Preview</span>
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="tag">{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.liveLink} className="link-btn">Live Demo &rarr;</a>
                                <a href={project.codeLink} className="link-btn">View Code &rarr;</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
