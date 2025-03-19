import React from "react";
import './footer.css'

export default function Footer(){
    return (
        <footer className="footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-column">
              <h1 className="footer-logo">Logo</h1>
            </div>
            <div className="footer-column">
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
          <div className="footer-row">
            <div className="footer-column">
              <p className="copyright">2025 © (name). All rights reserved.</p>
            </div>
            <div className="footer-column">
                   
             </div>
          </div>
        </div>
      </footer>
      );
}