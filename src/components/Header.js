import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
      header.classList.add('translucent');
    } else {
      header.classList.remove('translucent');
    }
  });
  

  return (
    <header className="header">
      <div className="names">
        <Link to="/about-Charvi" className="charvi">Charvi</Link>.<Link to="/about-Karan" className="karan">Karan</Link>
      </div>
      <nav className="nav-links">
        <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <Link to="/home" className="dropdown-toggle">Home</Link>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/month">First Month</Link>
              <Link to="/letter2">Charvi's Poems</Link>
              <Link to="/month2">Second Month</Link>
              <Link to="/c19b">19th Birthday</Link>
            </div>
          )}
        </div>
        <Link to="/timeline">Timeline</Link>
        <Link to="/theater">Theater (Beta)</Link>
        <Link to="/photos-videos">Photos/Videos</Link>
        <Link to="/tug-of-war">Tug of War</Link>
      </nav>
    </header>
  );
};

export default Header;
