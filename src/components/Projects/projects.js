import React, { useState, useEffect } from "react";
import { db, storage } from '../../firebase'; 
import { collection, getDocs } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import './projects.css'
import ReelEmbed from './ReelEmbeded'

function Projects() {
  const [projectDetails, setProjectDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrls, setImageUrls] = useState({});

  // Fetch projects from Firebase
  const fetchProjects = async () => {
    try {
      setLoading(true);
      console.log("Fetching projects from Firebase...");
      
      const querySnapshot = await getDocs(collection(db, 'project'));
      const projects = [];
      const urls = {};

      // Process each document
      for (const doc of querySnapshot.docs) {
        const data = doc.data();
        
        const project = {
          id: doc.id,
          title: data.title || 'Untitled Project',
          subtitle: data.subtitle || 'project name',
          link: data.link || '',
          img: data.img || '', // This is the filename from Firebase Storage
          originalData: data // Keep original data for debugging
        };

        projects.push(project);

        // Generate image URL if image exists
        if (project.img) {
          try {
            const imageUrl = await getImageURL(project.img);
            urls[project.id] = imageUrl;
            console.log(`Generated URL for ${project.img}: ${imageUrl}`);
          } catch (err) {
            console.warn(`Failed to get URL for ${project.img}:`, err);
            urls[project.id] = null;
          }
        }
      }

      console.log("Fetched projects:", projects);
      setProjectDetails(projects);
      setImageUrls(urls);
      setLoaded(Array(projects.length).fill(true));
      setLoading(false);

    } catch (err) {
      console.error('Error fetching projects: ', err);
      setError(`Failed to fetch projects: ${err.message}`);
      setLoading(false);
    }
  };

  // Get image URL from Firebase Storage
  const getImageURL = async (imageName) => {
    try {
      if (!imageName || typeof imageName !== 'string') {
        throw new Error('Invalid image name provided');
      }

      // Create a reference to the file in the root directory of storage
      const fileRef = ref(storage, imageName);
      
      // Get the download URL
      const url = await getDownloadURL(fileRef);
      
      return url;
    } catch (err) {
      console.error(`Error getting image URL for ${imageName}:`, err);
      
      // More specific error messages
      if (err.code === 'storage/object-not-found') {
        console.error(`Image not found in storage: ${imageName}`);
      } else if (err.code === 'storage/unauthorized') {
        console.error('Unauthorized access to storage');
      }
      
      throw err;
    }
  };

  // Handle opening modal
  const handleOpenModal = (project) => {
    setSelectedProject(project);
    console.log("Selected project:", project);
    setIsOpen(true);
    
    // Hide header when modal opens
    const header = document.querySelector('.header');
    if (header) {
      header.classList.add('modal-open');
    }
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  };

  // Handle closing modal
  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
    
    // Show header when modal closes
    const header = document.querySelector('.header');
    if (header) {
      header.classList.remove('modal-open');
    }
    
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchProjects();
  }, []);

  // Add fade-in effect after projects load
  useEffect(() => {
    if (!loading && projectDetails.length > 0) {
      const imageGrid = document.getElementById('projects');
      if (imageGrid) {
        imageGrid.classList.add('fade-in');
      }
    }
  }, [loading, projectDetails]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Ensure body scroll is restored on component unmount
      document.body.style.overflow = 'unset';
      const header = document.querySelector('.header');
      if (header) {
        header.classList.remove('modal-open');
      }
    };
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="image-grid loading-state" id="projects">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading projects from Firebase...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="image-grid error-state" id="projects">
        <div className="error-container">
          <h3>Error Loading Projects</h3>
          <p>{error}</p>
          <button onClick={fetchProjects} className="retry-button">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // No projects found
  if (projectDetails.length === 0) {
    return (
      <div className="image-grid no-projects" id="projects">
        <div className="no-projects-container">
          <p>No projects found</p>
          <button onClick={fetchProjects} className="retry-button">
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="image-grid" id="projects">
      {projectDetails.map((prt, i) => (
        <div key={prt.id} className="image-container" onClick={() => handleOpenModal(prt)}>
          {/* Use Firebase Storage URL or fallback */}
          <img 
            src={imageUrls[prt.id] || '/assets/placeholder.png'} 
            className="image" 
            alt={prt.title}
            onLoad={() => {
              // Update loaded state when image loads
              setLoaded(prev => {
                const newLoaded = [...prev];
                newLoaded[i] = true;
                return newLoaded;
              });
            }}
            onError={(e) => {
              console.error(`Image failed to load for project ${prt.id}:`, prt.img);
              // Set fallback image
              e.target.src = '/assets/placeholder.png';
            }}
          />
          <div className="project-text">
            {prt.title}
          </div>
        </div>
      ))}

      {/* Modal for displaying reel */}
      {isOpen && selectedProject && (
        <div className="modal-overlay-one" onClick={handleCloseModal}>
          <div className="modal-container-one" onClick={(e) => e.stopPropagation()}>
            <div className="close-button-container-one">
              <button className="close-button-one" onClick={handleCloseModal}>&times;</button>
            </div>
            <div className="video-wrapper">
              <ReelEmbed link={selectedProject.link} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;