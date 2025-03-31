import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './footer.css';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    let position = window.scrollY;
    const speed = 3;

    const scrollStep = () => {
      if (position > 0) {
        position -= 60;
        window.scrollTo(0, position);
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const fadeInVariantTwo = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };
  const fadeInVariantThree = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.1 } },
  };

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="column col-lg-6 col-md-6 col-sx-12 word" variants={fadeInVariant}>
           <img src="/assets/about/user2.jpg" className="footer-logo"/>
          </motion.div>
          <motion.div className="column col-lg-6 col-md-6 col-sx-12 icons" variants={fadeInVariant}>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-github"></i>
            <i className="fa fa-pinterest"></i>
            <i className="fa fa-twitter"></i>
          </motion.div>
        </motion.div>
        <motion.div
          className="line"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariantTwo}
        ></motion.div>
        <motion.div
          className="row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="column col-lg-4 col-md-4 col-sx-12 content-one" variants={fadeInVariantThree}>
          ©2025 Arun. All rights reserved.
          </motion.div>
          <motion.div
            className="column col-lg-4 col-md-4 col-sx-12 up-arrow"
            variants={fadeInVariantThree}
          >
            {isVisible && (
              <motion.i
                className="fa fa-angle-up"
                onClick={scrollToTop}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                style={{ cursor: "pointer" }}
              ></motion.i>
            )}
          </motion.div>
          <motion.div className="column col-lg-4 col-md-4 col-sx-12 content-two" variants={fadeInVariantThree}>
            Designed By Cod Hatch
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
