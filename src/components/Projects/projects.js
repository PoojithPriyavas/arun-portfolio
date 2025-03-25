import React, { useState, useEffect } from "react";
import './projects.css'

function Projects() {

  const images = Array.from({ length: 9 }, (_, index) =>
    `/assets/projects/${index + 1}.jpg`
  );

  const projectDetails = [
    {
      id: 1,
      img: '/assets/projects/1.jpg',
      title: 'branding',
      subtitle: 'project name',
      link: 'https://youtu.be/CgkZ7MvWUAA?si=10mJlQkYtoG0CRdP'
    },
    {
      id: 2,
      img: '/assets/projects/2.jpg',
      title: 'branding',
      subtitle: 'project name',
      link: 'https://youtu.be/CgkZ7MvWUAA?si=10mJlQkYtoG0CRdP'
    },
    {
      id: 3,
      img: '/assets/projects/3.jpg',
      title: 'branding',
      subtitle: 'project name',
      link: 'https://youtu.be/CgkZ7MvWUAA?si=10mJlQkYtoG0CRdP'
    },
    {
      id: 4,
      img: '/assets/projects/4.jpg',
      title: 'branding',
      subtitle: 'project name',
      link: 'https://youtu.be/CgkZ7MvWUAA?si=10mJlQkYtoG0CRdP'
    },
    {
      id: 5,
      img: '/assets/projects/5.jpg',
      title: 'branding',
      subtitle: 'project name',
      link: 'https://www.youtube.com/watch?v=CgkZ7MvWUAA'
    },
    {
      id: 6,
      img: '/assets/projects/6.jpg',
      title: 'branding',
      subtitle: 'project name',
      link: 'https://youtu.be/CgkZ7MvWUAA?si=10mJlQkYtoG0CRdP'
    }
  ]

  const [loaded, setLoaded] = useState(Array(images.length).fill(false));
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoaded((prev) => {
          const newLoaded = [...prev];
          newLoaded[index] = true;
          return newLoaded;
        });
      };
    });
  }, [images]);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    console.log("project", project)
    setIsOpen(true);
  };

  return (
    <div className="image-grid" id="projects">
      {projectDetails.map((prt, i) =>
        <div key={prt.id} className="image-container" onClick={() => handleOpenModal(prt)}>
          <img src={prt.img} className="image" alt={prt.title} />
        </div>
      )}
      {isOpen && selectedProject && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="close-button-container">
              <button className="close-button" onClick={() => setIsOpen(false)}>&times;</button>
            </div>
            <div className="video-wrapper">
              <iframe
                src={selectedProject.link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

          </div>

        </div>
      )}


    </div>
  );

}
export default Projects