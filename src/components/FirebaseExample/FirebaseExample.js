import React, { useState, useEffect } from 'react';
import { db, storage } from '../../firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import './FirebaseExample.css';

function FirebaseExample() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageUrls, setImageUrls] = useState({});

  // Fetch all projects from Firestore
  const fetchAllProjects = async () => {
    try {
      setLoading(true);
      console.log("Fetching projects from Firestore...");
      
      const querySnapshot = await getDocs(collection(db, 'project'));
      const projectsData = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        projectsData.push({
          id: doc.id,
          title: data.title || 'No title',
          subtitle: data.subtitle || 'No subtitle',
          link: data.link || '',
          img: data.img || '', // This is the filename stored in Firestore
          ...data // Include any other fields
        });
      });

      console.log("Fetched projects:", projectsData);
      setProjects(projectsData);
      
      // Generate image URLs for all projects
      await generateImageUrls(projectsData);
      
      setLoading(false);
    } catch (err) {
      console.error('Error fetching projects: ', err);
      setError('Failed to fetch projects');
      setLoading(false);
    }
  };

  // Generate image URLs from Storage using the filename stored in Firestore
  const generateImageUrls = async (projectsData) => {
    const urls = {};
    
    for (const project of projectsData) {
      if (project.img) {
        try {
          // Since images are stored in root directory, use filename directly
          const imageUrl = await getImageURL(project.img);
          urls[project.id] = imageUrl;
        } catch (err) {
          console.warn(`Failed to get URL for ${project.img}:`, err);
          urls[project.id] = null;
        }
      }
    }
    
    setImageUrls(urls);
  };

  // Get image URL from Firebase Storage
  const getImageURL = async (imageName) => {
    try {
      if (!imageName || typeof imageName !== 'string') {
        throw new Error('Invalid image name provided');
      }

      console.log(`Fetching URL for image: ${imageName}`);
      
      // Create a reference to the file in the root directory of storage
      const fileRef = ref(storage, imageName);
      
      // Get the download URL
      const url = await getDownloadURL(fileRef);
      
      console.log(`Generated URL for ${imageName}: ${url}`);
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

  // Fetch a single project by ID
  const fetchSingleProject = async (projectId) => {
    try {
      setLoading(true);
      console.log(`Fetching single project: ${projectId}`);
      
      const docRef = doc(db, 'project', projectId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const project = {
          id: docSnap.id,
          title: data.title || 'No title',
          subtitle: data.subtitle || 'No subtitle',
          link: data.link || '',
          img: data.img || '',
          ...data
        };

        // Generate image URL if image exists
        if (project.img) {
          const imageUrl = await getImageURL(project.img);
          setImageUrls(prev => ({
            ...prev,
            [project.id]: imageUrl
          }));
        }

        setProjects([project]);
        console.log("Fetched single project:", project);
      } else {
        console.log('No such project document!');
        setProjects([]);
      }

      setLoading(false);
    } catch (err) {
      console.error('Error fetching single project: ', err);
      setError('Failed to fetch project');
      setLoading(false);
    }
  };

  // Open Instagram/external links
  const openLink = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchAllProjects();
    
    // To fetch a single project instead, uncomment below:
    // fetchSingleProject('your-document-id-here');
  }, []);

  if (loading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading projects...</p>
    </div>
  );
  
  if (error) return (
    <div className="error-container">
      <h3>Error</h3>
      <p>{error}</p>
      <button onClick={fetchAllProjects} className="retry-button">
        Retry
      </button>
    </div>
  );

  return (
    <div className="firebase-example">
      <h2>Firebase Projects</h2>
      <p>Total Projects: {projects.length}</p>

      <div className="projects-grid">
        {projects.length > 0 ? (
          projects.map(project => (
            <div key={project.id} className="project-card">
              {/* Project Image */}
              <div className="project-image">
                {imageUrls[project.id] ? (
                  <img 
                    src={imageUrls[project.id]} 
                    alt={project.title}
                    onError={(e) => {
                      console.error('Image failed to load for project:', project.id);
                      e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
                    }}
                  />
                ) : (
                  <div className="image-placeholder">
                    <p>Loading image...</p>
                    <small>{project.img}</small>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                
                {project.link && (
                  <button 
                    onClick={() => openLink(project.link)}
                    className="link-button"
                  >
                    View on Instagram
                  </button>
                )}

                {/* Document ID and Image filename for debugging */}
                <div className="debug-info">
                  <small><strong>Document ID:</strong> {project.id}</small><br/>
                  <small><strong>Image File:</strong> {project.img || 'No image'}</small>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-projects">
            <p>No projects found</p>
            <button onClick={fetchAllProjects} className="retry-button">
              Refresh
            </button>
          </div>
        )}
      </div>

      {/* Raw Data Display (for debugging) */}
      <div className="debug-section">
        <h3>Debug Information</h3>
        <details>
          <summary>Raw Project Data</summary>
          <pre>{JSON.stringify(projects, null, 2)}</pre>
        </details>
        <details>
          <summary>Generated Image URLs</summary>
          <pre>{JSON.stringify(imageUrls, null, 2)}</pre>
        </details>
      </div>
    </div>
  );
}

export default FirebaseExample;