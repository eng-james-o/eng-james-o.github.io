import React from 'react';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import AerohubLogo from '../assets/AerohubLogo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://aerohubworks.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            <img src={AerohubLogo} alt="AeroHub Logo" className="footer-icon" /> AeroHub
          </a>
          <a href="https://www.flyinglabs.org/nigeria" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaGlobe className="footer-icon" /> Nigeria Flying Labs
          </a>
          <a href="mailto:james.o.oluwadare@gmail.com" className="footer-link">
            <FaEnvelope className="footer-icon" /> Email Me
          </a>
        </div>
        <p>&copy; 2025 James, OLUWADARE. All rights reserved.</p>
      </div>
      <style>{`
        .footer {
          background: #222;
          color: #fff;
          padding: 20px 0;
          text-align: center;
          position: relative; 
          bottom: 0;
          width: 100%;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 10px;
        }
        .footer-link {
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.3s;
        }
        .footer-link:hover {
          color: #4fd1c5;
        }
        .footer-icon {
          font-size: 1.2rem;
          width: 24px;
          height: 24px;
        }
        .footer-icon img {
          width: 24px;
          height: 24px;
          object-fit: cover;
        }
        body {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          margin: 0;
        }
        #root {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        main {
          flex: 1;
        }
      `}</style>
    </footer>
  );
};

export default Footer;