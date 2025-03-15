import React,{useState,useEffect} from "react";
import './projects.css'

function Projects(){

    const images = Array.from({ length: 9 }, (_, index) => 
        `/assets/projects/${index + 1}.jpg`
      );

      console.log("img :",images)

  const [loaded, setLoaded] = useState(Array(images.length).fill(false));

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

  return (
    <div className="image-grid">
      {images.map((src, index) => (
        <div key={index} className="image-container">
          {!loaded[index] ? (
            <div className="skeleton" />
          ) : (
            <img src={src} alt={`Image ${index + 1}`} className="image" />
          )}
        </div>
      ))}
    </div>
  );

}
export default Projects