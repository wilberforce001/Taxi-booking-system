import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
    className={`navbar navbar-expand-lg fixed-top ${isMenuOpen ? 'navbar-open' : 'navbar-closed'}`}
    style={{
      height: '100vh',
      transition: 'background-color 0.3s ease, width 0.3s ease',
      backgroundColor: isMenuOpen ? '#f8f9fa' : 'transparent',
      width: isMenuOpen ? '250px' : '60px',
    }}
  >
    <div className="container-fluid" style={{ height: '100%' }}>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        aria-expanded={isMenuOpen ? 'true' : 'false'}
        aria-label="Toggle navigation"
        onClick={toggleMenu}
        style={{
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
        id="navbarNav"
        style={{
          display: isMenuOpen ? 'flex' : 'none',
          flexDirection: 'column', // Stack links vertically when the menu is open
          justifyContent: 'flex-start',
          height: '100%',
          marginTop: '50px',
        }}
      >
        <ul className="navbar-nav w-100 text-center">
          <li className="nav-item">
            <Link className="nav-link" to="/" style={{ padding: '10px' }}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/drivers" style={{ padding: '10px' }}>
              Drivers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/booking" style={{ padding: '10px' }}>
              Booking
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
