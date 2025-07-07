import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content grid grid-4">
          <div className="footer-section">
            <h3 className="gradient-text">CryptoFlow</h3>
            <p>
              Leading the future of Web3 development with innovative blockchain solutions, 
              security audits, and comprehensive crypto business services.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Telegram">💬</a>
              <a href="#" aria-label="Discord">💻</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Smart Contracts</a></li>
              <li><a href="#services">dApp Development</a></li>
              <li><a href="#services">Crypto Wallets</a></li>
              <li><a href="#services">Security Audits</a></li>
              <li><a href="#services">NFT Development</a></li>
              <li><a href="#services">Market Making</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <div className="footer-contact">
              <p>📧 info@cryptoflow.com</p>
              <p>💬 @CryptoFlowSupport</p>
              <p>⏰ 24/7 Support Available</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 CryptoFlow. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 