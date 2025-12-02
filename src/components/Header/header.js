import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import './header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Add/remove blur class to body when menu opens/closes
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  const handleScroll = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -60;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleMobileScroll = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -60;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && <div className="menu-backdrop" onClick={() => setIsOpen(false)}></div>}
      <div className="container">
        <header className={`header ${isVisible ? 'fade-in' : ''}`}>
          <div className="logo">
            <img className="user-icon" src={`${process.env.PUBLIC_URL}/assets/about/user3.png`} alt="User" />
            <p>Arun</p>
          </div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about" onClick={(e) => handleScroll(e, "about")}>About Me</a>
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>Designs</a>
            <a href="#services" onClick={(e) => handleScroll(e, "services")}>Services</a>
          </nav>
          <div className="lets-connect">
            <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+916238470880">Let's Connect</a>
          </div>
          <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
          </button>
          {isOpen && (
            <div className="mobile-menu">
              <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" onClick={(e) => handleMobileScroll(e, "about")}>About</a>
              <a href="#projects" onClick={(e) => handleMobileScroll(e, "projects")}>Designs</a>
              <a href="#services" onClick={(e) => handleMobileScroll(e, "services")}>Services</a>
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
    </>
  );
};

export default Header;