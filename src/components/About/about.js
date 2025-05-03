// import React from "react";
// import './about.css'

// export default function About() {
//     return (
//         <div className="about-div" id="about">
//             <div className="container">
//                 <div className="row">
//                     <div className="col col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
//                         <div className="about-img">
//                             <img src='/assets/about/profile.jpg' className="abt-img" alt="about-img" style={{ maxWidth: "100%" }} />
//                             <div className="about-img-text">
//                                 <div className="about-img-icon">
//                                     <h3><span style={{ fontSize: "100px" }}>8+</span><br />Years Experience</h3>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                     <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 about-text"
//                     // style={{color:'#fff',textAlign:'start'}}
//                     >
//                         <p className="abt-me">About Me</p>
//                         <h2>Welcome to Arun,Best Software Services</h2>
//                         <h5>I have 8+ years of experiences in Software Development for give you better services.</h5>
//                         <p className="abt-content">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite</p>
//                         <div className="abt-count">
//                             <div className="abt-count-item">
//                                 <h3><span>500</span>+</h3>
//                                 <p>Projects Completed</p>
//                             </div>
//                             <div className="abt-count-item">
//                                 <h3><span>52</span>+</h3>
//                                 <p>Awards Win</p>
//                             </div>
//                             <div className="abt-count-item">
//                                 <h3><span>2M</span>+</h3>
//                                 <p>Happy Clients</p>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//                 {/* <div className="abt-bg-text">
//                     <h1>about me</h1>
//                 </div> */}
//             </div>
//         </div>

//     )
// }

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";

export default function About() {
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
                <span style={{ fontSize: "100px" }}>8+</span>
                <br /> Years Experience
              </h3>
            </div>
          </div>
        </Col>

        {/* Right Side - Text Section */}
        <Col lg={6} className="about-text">
          <p className="abt-me">About Me</p>
          <h2>Crafting Visual Impact</h2>
          <h6>
            I’m an experienced Videographer and Editor with a strong passion for storytelling through
            visuals. With a deep-rooted love for filmmaking, I specialize in the entire creative process
            from pre-production to final edits. I bring ideas to life with creativity and precision.
          </h6>
          <p className="abt-content">
            I’ve had the privilege of working with exceptional creative teams and producing content
            that has reached millions of viewers by collaborating with leading Government Social
            media channels under Visioneers
          </p>

          {/* Stats Section */}
          <Row className="text-center abt-count">
            <Col sm={4} className="abt-count-item">
              <h3>
                <span>500</span>+
              </h3>
              <p>Projects Completed</p>
            </Col>
            <Col sm={4} className="abt-count-item">
              <h3>
                <span>52</span>+
              </h3>
              <p>Awards Won</p>
            </Col>
            <Col sm={4} className="abt-count-item">
              <h3>
                <span>2M</span>+
              </h3>
              <p>Happy Clients</p>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
}
