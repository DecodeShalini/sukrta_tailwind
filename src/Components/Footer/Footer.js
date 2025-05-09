import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/sukrtaLogo.png';
import { SocialIcon } from 'react-social-icons'
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
    <footer className="footer">
      <div className="footer-top">
        {/* Logo */}
        <div className="footer-section">
        <img src={logo} alt="Zentec Logo" className="h-auto w-auto" />
        </div>

        {/* Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-icon">
          
              <SocialIcon network='facebook' />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-icon">
            <SocialIcon network='twitter' />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-icon">
            <SocialIcon network='instagram' />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sukrta Technologies. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
