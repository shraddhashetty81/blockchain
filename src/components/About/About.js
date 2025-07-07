import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-title">
          <h2>Complete Solutions for Blockchain, Crypto, and Web3</h2>
          <p>
            Whether you're building a decentralized platform, launching a crypto company, 
            or seeking security and compliance expertise, CryptoFlow delivers what you need to lead in Web3.
          </p>
        </div>
        
        <div className="about-grid grid grid-4">
          <div className="about-card card">
            <div className="icon">🌐</div>
            <h4>Web3 Development</h4>
            <p>Turn your ideas into reality with cutting-edge Web3 solutions. We specialize in building decentralized apps, smart contracts, crypto tokens, wallets, exchanges, NFTs, and swap platforms.</p>
          </div>
          
          <div className="about-card card">
            <div className="icon">🔒</div>
            <h4>Security Auditing</h4>
            <p>Protect your decentralized platforms with expert audits and security solutions. We identify vulnerabilities in smart contracts and dApps to ensure your Web3 products are safe and reliable.</p>
          </div>
          
          <div className="about-card card">
            <div className="icon">💼</div>
            <h4>Business Consulting</h4>
            <p>Navigate the Web3 landscape with confidence. From marketing and regulatory compliance to blockchain strategy, token launches, and listings — we provide expert guidance you need to scale.</p>
          </div>
          
          <div className="about-card card">
            <div className="icon">🏢</div>
            <h4>Corporate Solutions</h4>
            <p>Set up and grow your crypto business with ease. We offer comprehensive licensing solutions and strategic marketing to help you operate securely in the Web3 economy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 