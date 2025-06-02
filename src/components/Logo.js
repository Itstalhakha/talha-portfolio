import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';

const Logo = () => {
  return (
    <Link to="/" className="navbar-logo">
      <div className="logo-container">
        <span className="logo-text">
          <span className="logo-highlight">T</span>K
        </span>
        <span className="logo-dot"></span>
      </div>
    </Link>
  );
};

export default Logo; 