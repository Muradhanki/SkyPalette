// import React from 'react'

// function Navbar() {
//   return (
//     <nav>
//       <img src="../images/react-icon-small.png" className="nav--icon" />
//       <h3 className="nav--logo_text">Skypalette</h3>
//       <h4 className="nav--title">About</h4>
      
//       <h4 className="nav--title">Creators</h4>
//     </nav>
//   )
// }

// export default Navbar

//NEW natt5

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-orange">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="./src/assets/images/skypalette-logo.png" className="nav--icon" alt="Logo" />
        </Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/about" className="nav-link">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link to="/creators" className="nav-link">CREATORS</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;




