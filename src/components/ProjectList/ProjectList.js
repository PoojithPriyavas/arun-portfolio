// src/components/ProjectsList.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from '../../firebase';
import { db } from '../../firebase';

function ProjectsList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("callimg the db")
        const fetchProjects = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'projects'));
                const projectsData = [];
                querySnapshot.forEach((doc) => {
                    projectsData.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
                setProjects(projectsData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    console.log(projects, "projects")

    if (loading) return <div>Loading...</div>;

    return (
        <div className="projects-container">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {project.technologies && (
                            <div className="tech-stack">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        )}
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        )}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                Live Demo
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsList;