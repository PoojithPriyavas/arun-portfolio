import { useState, useEffect } from "react";
import "./header.css";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in effect after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -60; // Adjust this based on your header height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      <header className={`header ${isVisible ? 'fade-in' : ''}`}>
        <div className="logo">
          <img className="user-icon" src='/assets/about/user3.png'/>
          <p>Arun</p>
        </div>
        <nav className="nav-links">
          <a href="">Home</a>
          <a href="" onClick={(e) => handleScroll(e, "about")} >About Me</a>
          <a href="" onClick={(e) => handleScroll(e, "projects")}>Designs</a>
          <a href="" onClick={(e) => handleScroll(e, "services")}>Services</a>
          {/* <a href="" onClick={(e) => handleScroll(e, "contact")}>Contact</a> */}
        </nav>
        <div className="lets-connect">
          <a target="_blank" href="https://wa.me/+916238470880">Let's Connect</a>
        </div>
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
        </button>
        {isOpen && (
          <div className="mobile-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <div className="mobile-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;