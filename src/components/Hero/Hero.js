import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-animation"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in-up">
            Build, Secure & Scale with 
            <span className="gradient-text"> CryptoFlow</span>
          </h1>
          <p className="hero-subtitle animate-fade-in-up">
            Custom blockchain development, Web3 security, crypto business licensing, 
            and market making — CryptoFlow delivers complete solutions for the decentralized future.
          </p>
          <div className="hero-actions animate-fade-in-up">
            <a href="#contact" className="btn btn-primary">Start Your Project</a>
            <a href="#services" className="btn btn-secondary">Explore Services</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>100+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Smart Contracts Audited</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 