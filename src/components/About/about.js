
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
import CountUp from 'react-countup';
import { motion } from "framer-motion";

export default function About() {
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
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="about-div" id="about">
      {/* <Container> */}
      <Row className="align-items-center">
        {/* Left Side - Image Section */}
        <Col lg={6} className="text-center">
          <div className="about-img position-relative">
            <img
              src="/assets/about/profile.jpg"
              className="abt-img"
              alt="about-img"
              style={{ maxWidth: "100%" }}
            />
            <div className="about-img-text">
              <h3>
                <span style={{ fontSize: "100px" }}>6+</span>
                <br /> Years Experience
              </h3>
            </div>
          </div>
        </Col>

        {/* Right Side - Text Section */}
        <Col lg={6} className="about-text">
          <div className="abt-me-wrap">
            <p className="abt-me">About Me</p>
          </div>

          <h2 class="justified-heading">
            Welcome to Arun,<br />
            Capturing Moments,
            Crafting Stories.
          </h2>
          <h5>
            I have over 6 years of experience in videography and editing, bringing ideas to life through cinematic storytelling.
          </h5>
          <p className="abt-content">
            From scripting to the final cut, I handle the entire creative process with precision and passion—creating visuals that resonate and inspire. which I enjoy with my whole heart.
            I’ve had the privilege of working with creative teams and government-backed media, producing content that has reached millions. I am so happy, my
            dear friend, so absorbed in the exquisite.
          </p>

          {/* Stats Section */}
          <Row className="text-center abt-count">
            {stats.map((item, index) => (
              <Col sm={4} className="abt-count-item">
                <h3>
                  <span> <CountUp
                    start={0}
                    end={item.value}
                    duration={2}
                    suffix={item.suffix}
                  /></span>
                </h3>
                <p>{item.description}</p>
              </Col>
            ))}
            {/* <Col sm={4} className="abt-count-item">
              <h3>
                <span>15</span>+
              </h3>
              <p>Awards & Honors</p>
            </Col>
            <Col sm={4} className="abt-count-item">
              <h3>
                <span>25M</span>+
              </h3>
              <p>Viewers</p>
            </Col> */}
          </Row>
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
}
