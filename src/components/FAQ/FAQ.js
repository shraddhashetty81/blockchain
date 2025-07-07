import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do you support token listings on major exchanges?",
      answer: "We assist with exchange selection, technical documentation, compliance requirements, and application submission to help get your token listed on leading platforms like Binance, Coinbase, and other major exchanges."
    },
    {
      question: "What exactly is crypto market making?",
      answer: "Crypto market making is the process of providing consistent buy and sell orders for a token to ensure liquidity, reduce slippage, and stabilize price movements on exchanges. Our market making services help maintain healthy trading volumes and price stability."
    },
    {
      question: "Is Web3 technology secure?",
      answer: "Yes, but security is crucial. We provide comprehensive audits and implement best practices to ensure your dApps, smart contracts, and crypto platforms are secure, protecting both your assets and users through rigorous testing and security protocols."
    },
    {
      question: "Can you help us integrate blockchain into our existing systems?",
      answer: "Absolutely! CryptoFlow specializes in seamless blockchain integration. Whether it's connecting decentralized features to your existing applications or implementing blockchain-based solutions like tokenization, our team ensures smooth integration without disrupting your current systems."
    },
    {
      question: "What blockchain platforms do you support?",
      answer: "We support all major blockchain platforms including Ethereum, Binance Smart Chain, Polygon, Solana, Avalanche, Polkadot, and many others. Our multi-chain expertise allows us to recommend the best platform for your specific use case."
    },
    {
      question: "How long does it take to develop a smart contract?",
      answer: "Development time varies based on complexity. Simple contracts can be completed in 1-2 weeks, while complex DeFi protocols may take 2-3 months. We provide detailed timelines during our initial consultation based on your specific requirements."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Check out the FAQs below for insights into our process, services, 
            and how we can help you achieve your Web3 project goals.
          </p>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 