import React, { useRef } from 'react';
import './testimonials.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useInView } from "framer-motion";

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: false,
    centerMode: false,
    focusOnSelect: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  }

  const testimonialDetails = [
    {
      id: 1,
      name: 'Marry Jenefer',
      quote: '“That will need careful attention To begin to identify aspects of students’ own portfolios To identify key portfolio features, varied styles, and organizational schemes.”'
    },
    {
      id: 2,
      name: 'Elezabeth Marvel',
      quote: '“To identify key portfolio features, varied styles, and organizational schemes; to begin to identify aspects of students’ own portfolios that will need careful attention.”'
    },
    {
      id: 3,
      name: 'Marry Jenefer',
      quote: '“That will need careful attention To begin to identify aspects of students’ own portfolios To identify key portfolio features, varied styles, and organizational schemes.”'
    },
    {
      id: 4,
      name: 'Elezabeth Marvel',
      quote: '“To identify key portfolio features, varied styles, and organizational schemes; to begin to identify aspects of students’ own portfolios that will need careful attention.”'
    }
  ]


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

  const slideVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="tstml" 
      style={{ padding: '60px 0' }}
      ref={sectionRef}
      variants={containerVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container">
        <div className="tstml-main">
          <motion.div className="tstml-text" variants={titleVariant}>
            <motion.p 
              className="tstml-title"
              whileHover={{ 
                scale: 1.05,
                color: "#fff",
                transition: { duration: 0.3 }
              }}
            >
              Testimonials
            </motion.p>
            <motion.h1 
              style={{ color: '#fff', fontWeight: 700 }} 
              className='font-mulish'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              What My Client Say.
            </motion.h1>
          </motion.div>
          <br />
          <br />

          <motion.div
            variants={slideVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.8 }}
          >
            <Slider {...settings}>
              {testimonialDetails.map((item, i) => (
                <motion.div 
                  className="custom-slide-div" 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="custom-slide">
                    <p style={{ color: '#fff' }}>{item.quote}</p>
                    <h3 style={{ color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span className="line"></span>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/about/user.jpg`}
                        alt="User"
                        className="name-img"
                        style={{ width: '30px', height: '30px', marginRight: '10px', borderRadius: '50%' }}
                      />
                      {item.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </motion.div>
          <br />
          <br />
        </div>
      </div>
    </motion.div>
  )
}