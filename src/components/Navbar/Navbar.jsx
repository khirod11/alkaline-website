import React from 'react';
import './Navbar.scss';
import bgImage from '../../assets/image1.png';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <>
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <nav className="navbar">
        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Subscription</li>
          <li>Contact Us</li>
        </ul>
        <button className="sign-in-btn">Sign In</button>

        {/* Social Media Icons */}
        <div className="social-icons">
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </nav>
    </div>
    </>
  );
};

export default HeroSection;
