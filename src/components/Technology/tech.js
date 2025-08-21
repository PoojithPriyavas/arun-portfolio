import React, { useEffect, useState, useMemo, useRef } from 'react';
import './tech.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useInView } from "framer-motion";

export default function Tech() {

  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

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
    arrows: false,
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
  };

  // Animation variants (matching the service component)
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const titleVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="tech" 
      style={{ padding: '60px 0' }}
      ref={sectionRef}
      variants={containerVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container">
        <div className="tech-main">
          <motion.div className="tech-text" variants={titleVariant}>
            <motion.p 
              className="tech-title"
              whileHover={{ 
                scale: 1.05,
                color: "#fff",
                transition: { duration: 0.3 }
              }}
            >
              Softwares
            </motion.p>
            <motion.h1 
              style={{ color: '#fff', fontWeight: 700 }} 
              className='font-mulish'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Softwares I Work With
            </motion.h1>
          </motion.div>
          <motion.div 
            className="conatiner tech-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Slider {...settings}>
              {images.map((src, i) => (
                <motion.div 
                  className='tech-slider' 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img src={src} alt={`tech ${i + 1}`} />
                </motion.div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}