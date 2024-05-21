// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav>
      
      <div className="logo">
        <Link to="/" ><img class="logo" src="/Images/logo.jpg" width="100%" height="60" alt='logo'/></Link>
      </div>

      <ul className="nav-links">
        
        <li className="dropdown">
          <Link to="dashboard" className="dropbtn">Dashboard</Link>

        </li>

        <li className="contact-us">
        <Link to="/contact-us" className="contact-us">Contact Us</Link>
        </li>

        <li className="about-us">
        <Link to="/about-us"  className="about-us">About Us</Link>
        </li>


      </ul>

      <ul className="nav-links-right">

        <li className="dropdown">
          <Link to="login" className="dropbtn">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
