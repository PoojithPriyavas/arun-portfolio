import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
import CountUp from 'react-countup';
import { motion, useInView, useAnimation } from "framer-motion";

export default function About() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });
  const controls = useAnimation();

  const stats = [
    {
      value: 1,
      suffix: "K+",
      description: "Videos Created",
    },
    {
      value: 15,
      suffix: "+",
      description: "Awards & Honors",
    },
    {
      value: 25,
      suffix: "M+",
      description: "Viewers",
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      setStartCount(true);
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div 
      className="about-div" 
      id="about"
      ref={sectionRef}
      variants={containerVariant}
      initial="hidden"
      animate={controls}
    >
      <Row className="align-items-center">
        {/* Left Side - Image Section */}
        <Col lg={6} className="text-center">
          <motion.div 
            className="about-img position-relative"
            variants={slideInLeft}
          >
            <motion.img
              src="/assets/about/profile.jpg"
              className="abt-img"
              alt="about-img"
              style={{ maxWidth: "100%" }}
              whileHover={{ 
                scale: 1.02,
                filter: "grayscale(0)",
                transition: { duration: 0.3 }
              }}
              animate={floatingAnimation}
            />
            <motion.div 
              className="about-img-text"
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(229, 84, 10, 0.1)",
                transition: { duration: 0.3 }
              }}
              animate={pulseAnimation}
            >
              <h3>
                <motion.span 
                  style={{ fontSize: "100px" }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  6+
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                >
                  Years Experience
                </motion.span>
              </h3>
            </motion.div>
          </motion.div>
        </Col>

        {/* Right Side - Text Section */}
        <Col lg={6} className="about-text">
          <motion.div 
            className="abt-me-wrap"
            variants={fadeInUp}
          >
            <motion.p 
              className="abt-me"
              whileHover={{ 
                scale: 1.1,
                color: "#fff",
                transition: { duration: 0.3 }
              }}
            >
              About Me
            </motion.p>
          </motion.div>

          <motion.h2 
            className="justified-heading"
            variants={slideInRight}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Welcome to Arun,
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              Capturing Moments,
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              Crafting Stories.
            </motion.span>
          </motion.h2>

          <motion.h5
            variants={fadeInUp}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            I have over 6 years of experience in videography and editing, bringing ideas to life through cinematic storytelling.
          </motion.h5>

          <motion.p 
            className="abt-content"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            From scripting to the final cut, I handle the entire creative process with precision and passion—creating visuals that resonate and inspire. which I enjoy with my whole heart.
            I've had the privilege of working with creative teams and government-backed media, producing content that has reached millions. I am so happy, my
            dear friend, so absorbed in the exquisite.
          </motion.p>

          {/* Stats Section */}
          <motion.div 
            className="text-center abt-count" 
            style={{ display: 'flex', justifyContent: 'space-around' }}
            variants={containerVariant}
            initial="hidden"
            animate={controls}
          >
            {stats.map((item, index) => (
              <motion.div 
                className="abt-count-item" 
                key={index}
                variants={fadeInUp}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ 
                  opacity: isInView ? 1 : 0, 
                  y: isInView ? 0 : 50,
                  scale: isInView ? 1 : 0.8
                }}
                transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.1,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h3
                  whileHover={{ 
                    color: "#fff",
                    textShadow: "0 0 20px #e5540a",
                    transition: { duration: 0.3 }
                  }}
                >
                  {startCount && (
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={2.5}
                      suffix={item.suffix}
                      delay={1.5 + index * 0.3}
                    />
                  )}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 + index * 0.2, duration: 0.5 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
}