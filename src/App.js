/**
 * @author Vinay Sharma
 * @description This the the application container,will contain app header and router
 */

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import CaseStudies from './components/CaseStudies/CaseStudies';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
