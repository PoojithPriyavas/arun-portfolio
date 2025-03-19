
import React from 'react';
import './clients.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

export default function Clients() {
    const images = Array.from({ length: 9 }, (_, index) => 
        `/assets/logo/${index + 1}.png`
      );


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
    autoplay: false,
    autoplaySpeed: 2000,
    rtl: false,
    centerMode: false, 
    focusOnSelect: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
   
  }
 

  return (
    <div className='container'>
      
        <>
          <Slider {...settings}>
            {images.map((src, i) => (
                <div className='custom-slide'  key={i}>
                <img src={src} />
                </div>
             
            ))}
          </Slider>
        </>

       

    </div>

  )
}