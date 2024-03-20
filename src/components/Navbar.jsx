import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-orange">
 natt5-branch
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="/images/skypalette-logo.png" className="nav--icon" alt="Logo" />
      
        </Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link to="/" className="nav-link">HOME</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">ABOUT</Link>
            </li>
            <li className="nav-item">
                  <Link to="/contact" className="nav-link">CONTACT</Link>
              </li>
          </ul>
        </div>

 main
      </div>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


  );
}

export default Navbar;

