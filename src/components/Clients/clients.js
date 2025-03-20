
import React, { useEffect, useState , useMemo , useRef} from 'react';
import './clients.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

export default function Clients() {

  const sliderRef = useRef(null);

  const images = useMemo(() => Array.from({ length: 9 }, (_, index) =>
    `/assets/logo/${index + 1}.png`
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
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
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
    <div className="conatiner client">
      <Slider {...settings}>
        {images.map((src, i) => (
          <div className='custom-slider' key={i}>
            <img src={src} alt={`Client ${i + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}