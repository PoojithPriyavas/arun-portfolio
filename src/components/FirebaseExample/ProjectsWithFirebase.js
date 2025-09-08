import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import './FirebaseExample.css';

function ProjectsWithFirebase() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        
        // Create a query to get projects ordered by date (newest first)
        const projectsQuery = query(
          collection(db, 'projects'),
          orderBy('createdAt', 'desc')
        );
        
        const querySnapshot = await getDocs(projectsQuery);
        const projectsList = [];
        
        querySnapshot.forEach((doc) => {
          projectsList.push({
            id: doc.id,
            ...doc.data()
          });
        });
        
        setProjects(projectsList);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching projects: ', err);
        setError('Failed to load projects. Please try again later.');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return (
    <div className="firebase-example loading-container">
      <div className="loading-spinner"></div>
      <p>Loading projects...</p>
    </div>
  );

  if (error) return (
    <div className="firebase-example error-container">
      <p className="error-message">{error}</p>
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
  );

  return (
    <div className="firebase-example">
      <h2>My Projects</h2>
      
      {projects.length > 0 ? (
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              {project.imageUrl && (
                <div className="project-image">
                  <img src={project.imageUrl} alt={project.title} />
                </div>
              )}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.tags && (
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span className="tag" key={index}>{tag}</span>
                    ))}
                  </div>
                )}
                {project.link && (
                  <a 
                    href={project.link} 
                    className="project-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-projects">No projects found. Add some projects to your Firestore database!</p>
      )}
    </div>
  );
}

export default ProjectsWithFirebase;