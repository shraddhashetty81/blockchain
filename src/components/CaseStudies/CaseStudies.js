import React from 'react';
import './CaseStudies.css';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "DeFi Trading Platform",
      description: "Built a comprehensive DeFi platform with automated market making, yield farming, and staking features.",
      category: "DeFi",
      image: "🏦",
      metrics: ["$50M+ TVL", "10K+ Users", "99.9% Uptime"]
    },
    {
      title: "NFT Marketplace",
      description: "Developed a full-featured NFT marketplace with minting, trading, and royalty distribution systems.",
      category: "NFT",
      image: "🎨",
      metrics: ["100K+ NFTs", "5K+ Artists", "Cross-chain"]
    },
    {
      title: "Crypto Exchange",
      description: "Launch secure, scalable crypto exchange with advanced trading features and institutional-grade security.",
      category: "Exchange",
      image: "📊",
      metrics: ["1M+ Trades", "24/7 Support", "Multi-asset"]
    },
    {
      title: "Multi-Chain Wallet",
      description: "Custom wallet solution supporting 50+ cryptocurrencies with hardware wallet integration.",
      category: "Wallet",
      image: "💳",
      metrics: ["50+ Chains", "Hardware Support", "Mobile & Web"]
    },
    {
      title: "GameFi Platform",
      description: "Innovative gaming platform combining traditional gaming with blockchain rewards and NFT integration.",
      category: "GameFi",
      image: "🎮",
      metrics: ["P2E Model", "NFT Rewards", "DAO Governance"]
    },
    {
      title: "Enterprise Blockchain",
      description: "Custom blockchain solution for supply chain tracking with smart contract automation.",
      category: "Enterprise",
      image: "🏢",
      metrics: ["Global Scale", "Real-time Tracking", "Compliance Ready"]
    }
  ];

  return (
    <section className="case-studies" id="case-studies">
      <div className="container">
        <div className="section-title">
          <h2>Our Success Stories</h2>
          <p>
            Explore our portfolio of blockchain projects that highlight our expertise, 
            innovation, and commitment to excellence in Web3 development.
          </p>
        </div>
        
        <div className="case-studies-grid grid grid-3">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-card card">
              <div className="case-study-image">
                <div className="case-study-icon">{study.image}</div>
                <div className="case-study-category">{study.category}</div>
              </div>
              <div className="case-study-content">
                <h4>{study.title}</h4>
                <p>{study.description}</p>
                <div className="case-study-metrics">
                  {study.metrics.map((metric, idx) => (
                    <span key={idx} className="metric">{metric}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 