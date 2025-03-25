import { useState } from "react";
import "./header.css";
import { Menu, X } from "lucide-react";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <header className="header">
      <div className="container">
        <div className="logo">Logo</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about" onClick={(e) => handleScroll(e, "about")} >About</a>
          <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>Projects</a>
          <a href="#services" onClick={(e) => handleScroll(e, "services")}>Services</a>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-facebook-f"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-github"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-twitter"></i>
            </a>
          </div>
        </nav>

        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Menu size={28} color="white" /> : <Menu size={28} color="white" />}
        </button>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <div className="mobile-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-facebook-f"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-github"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-twitter"></i>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
