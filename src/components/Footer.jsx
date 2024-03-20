
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange text-orange text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-icon me-3">
              <i className="bi bi-instagram fs-3"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="footer-icon me-3">
              <i className="bi bi-twitter fs-3"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="footer-icon me-3">
              <i className="bi bi-facebook fs-3"></i>
            </a>
            <a href="https://github.com/Muradhanki/SkyPalette" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <i className="bi bi-github fs-3"></i>
            </a>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            &copy; 2024 SkyPalette
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

