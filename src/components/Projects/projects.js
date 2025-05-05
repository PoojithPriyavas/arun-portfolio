import React, { useState, useEffect } from "react";
import './projects.css'
import ReelEmbed from './ReelEmbeded'
function Projects() {

  const images = Array.from({ length: 9 }, (_, index) =>
    `/assets/projects/${index + 1}.jpg`
  );

  const projectDetails = [
    {
      id: 1,
      img: '/assets/projects2/1.png',
      title: 'Steve Harvey’s insights on the UAE’s progress',
      subtitle: 'project name',
      link: 'https://www.instagram.com/reel/C5ircMdJXt-/'
    },
    {
      id: 2,
      img: '/assets/projects2/2.png',
      title: 'Here’s how Max Maxwell went from multiple ...',
      subtitle: 'project name',
      link: 'https://www.instagram.com/reel/C2cO2aBp-OL/'
    },
    {
      id: 3,
      img: '/assets/projects2/3.png',
      title: 'How Dubai generates rain?',
      subtitle: 'project name',
      link: 'https://www.instagram.com/reel/C37uSSbIrCw/'
    },
    {
      id: 4,
      img: '/assets/projects2/4.png',
      title: 'video to avoid getting your insurance claim rejected...',
      subtitle: 'project name',
      link: 'https://www.instagram.com/reel/C55CSvzpJEz/'
    },
    {
      id: 5,
      img: '/assets/projects2/5.png',
      title: 'Sundeep caught Anand off guard while he...',
      subtitle: 'project name',
      link: 'https://www.instagram.com/reel/DCrjAS8IIZg/'
    },
    {
      id: 6,
      img: '/assets/projects2/6.png',
      title: 'A new way to move across the UAE has ...',
      subtitle: 'project name',
      link: 'https://www.instagram.com/reel/DCEh_P-oN2c/'
    },
    {
      id: 7,
      img: '/assets/projects2/7.png',
      title: 'Sheikh Mohammed bin Rashid’s exceptional...',
      subtitle: 'project name',
      link: 'https://www.instagram.com/reel/C_-fCOqotOY/'
    },
    {
      id: 8,
      img: '/assets/projects2/8.png',
      title: 'Bring Your Impossible...',
      subtitle: 'project name',
      link: 'https://www.instagram.com/reel/DABIzghITA5/'
    },
    {
      id: 9,
      img: '/assets/projects2/9.png',
      title: 'Trust no one. In the game of Werewolf...',
      subtitle: 'project name',
      link: 'https://www.instagram.com/reel/DA0qHoKSs7N/'
    },
    {
      id: 10,
      img: '/assets/projects2/10.png',
      title: 'Dubai’s new Humanitarian Golden Visa...',
      subtitle: 'project name',
      link: 'https://www.instagram.com/reel/DFLHtuKyXx4/'
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
          <div className="project-text">
            {prt.title}
          </div>
          {/* <div className="project-text2">
            {prt.subtitle}
          </div> */}
        </div>
      )}
      {isOpen && selectedProject && (
        // In your Projects component's return statement
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="close-button-container">
              <button className="close-button" onClick={() => setIsOpen(false)}>&times;</button>
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
export default Projects