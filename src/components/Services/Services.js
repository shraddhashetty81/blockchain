import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Smart Contract Development",
      description: "Secure smart contracts for various blockchain platforms with thorough testing and optimization.",
      icon: "📝"
    },
    {
      title: "dApp Development", 
      description: "User-friendly, secure, and scalable decentralized applications built with modern frameworks.",
      icon: "📱"
    },
    {
      title: "Crypto Wallet Development",
      description: "Secure, user-friendly wallets supporting multiple blockchains with advanced security features.",
      icon: "💳"
    },
    {
      title: "Crypto Exchange Development",
      description: "Build scalable, secure crypto exchanges with advanced trading features and high liquidity.",
      icon: "📊"
    },
    {
      title: "NFT Development",
      description: "End-to-end solutions for creating and launching NFTs with marketplace integration.",
      icon: "🎨"
    },
    {
      title: "Token Creation",
      description: "Custom token creation with secure tokenomics and automated distribution mechanisms.",
      icon: "🪙"
    },
    {
      title: "Smart Contract Auditing",
      description: "In-depth security audits to identify vulnerabilities and ensure contract safety.",
      icon: "🔍"
    },
    {
      title: "DeFi Solutions",
      description: "Comprehensive DeFi protocols including yield farming, staking, and liquidity pools.",
      icon: "🏦"
    },
    {
      title: "Market Making",
      description: "Strategic market making to enhance liquidity and price efficiency in crypto markets.",
      icon: "📈"
    },
    {
      title: "Token Listing Support",
      description: "Support for listing tokens on major exchanges with compliance and documentation.",
      icon: "🚀"
    },
    {
      title: "Web3 Marketing",
      description: "Specialized marketing strategies to boost visibility and engagement for Web3 projects.",
      icon: "📢"
    },
    {
      title: "Blockchain Consultation",
      description: "Expert blockchain strategy and advice to help you navigate the decentralized landscape.",
      icon: "💡"
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Comprehensive Web3 Services</h2>
          <p>
            Explore our full suite of blockchain, crypto, and Web3 services, designed to empower 
            your business and drive innovation in the decentralized world.
          </p>
        </div>
        
        <div className="services-grid grid grid-4">
          {services.map((service, index) => (
            <div key={index} className="service-card card">
              <div className="service-icon">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 