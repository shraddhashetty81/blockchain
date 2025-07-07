import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Bring Your Vision to Life</h2>
          <p>Let's turn your ideas into innovative, blockchain-powered solutions.</p>
        </div>
        
        <div className="contact-content grid grid-2">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>Ready to start your Web3 journey? Our team of experts is here to help you build, secure, and scale your blockchain projects.</p>
            
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>info@cryptoflow.com</p>
                <p>support@cryptoflow.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">💬</div>
              <div>
                <h4>Telegram</h4>
                <p>@CryptoFlowSupport</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">⏰</div>
              <div>
                <h4>Response Time</h4>
                <p>24/7 Support Available</p>
                <p>Avg. response: 2-4 hours</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name (Optional)"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="smart-contracts">Smart Contract Development</option>
                  <option value="dapp">dApp Development</option>
                  <option value="wallet">Crypto Wallet</option>
                  <option value="exchange">Crypto Exchange</option>
                  <option value="nft">NFT Development</option>
                  <option value="audit">Security Audit</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-full">
                Start Your Project
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 