import React from 'react';
import './Footer.scss';
import { FaTwitter, FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="footer-overlay"> */}
        <div className="footer-content">
          {/* Social Icons Section */}
          <div className="footer-section social">
            <div className="footer-socials">
              <FaTwitter />
              <FaFacebookF />
              <FaInstagram />
            </div>
          </div>

          {/* What We Do Section */}
          <div className="footer-section">
            <h4>What We Do</h4>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>

          {/* Site Map Section */}
          <div className="footer-section site-map">
  <div>
    <h4>Site Map</h4>
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Products</li>
      <li>Subscription</li>
    </ul>
  </div>
  <div>
    <h4>&nbsp;</h4> {/* spacer to align with the first heading */}
    <ul>
      <li>We Work With</li>
      <li>Gallery</li>
      <li>Business</li>
      <li>Contact</li>
      <li>Privacy Policy</li>
    </ul>
  </div>
</div>


          {/* Contact Info Section */}
          <div className="footer-section contact">
            <h4>Contact</h4>
            <ul>
              <li><FaPhone /> (+291) 912-3456-789</li>
              <li><FaEnvelope /> genesis@gmail.com</li>
              <li><FaMapMarkerAlt /> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
            </ul>
          </div>
        </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
