
import React, { useEffect, useState , useMemo , useRef} from 'react';
import './tech.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

export default function Tech() {

  const sliderRef = useRef(null);

  const images = useMemo(() => Array.from({ length: 4 }, (_, index) =>
    `/assets/logo3/${index + 1}.png`
  ), []);
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


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ],
    // afterChange: (current) => {
    //   if (current === images.length - 4) {  // Adjust based on `slidesToShow`
    //     setTimeout(() => {
    //       sliderRef.current.slickGoTo(0);
    //     }, 2000);
    //   }
    // }
  };


  return (
    <div className="tech"  style={{padding:'60px 0'}}>
    <div className="container">
      <div className="tech-main">
      <div className="tech-text">
          <p className="tech-title">Softwares</p>
          <h1 style={{ color: '#fff' }}>Softwares I Work With</h1>
        </div>
    <div className="conatiner tech-container">
      <Slider {...settings}>
        {images.map((src, i) => (
          <div className='tech-slider' key={i}>
            <img src={src} alt={`tech ${i + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </div>
    </div>
  );
}