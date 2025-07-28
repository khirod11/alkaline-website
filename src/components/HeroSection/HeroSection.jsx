import React from 'react';
import Navbar from '../Navbar/Navbar';
import PromoCard from '../PromoCard/PromoCard';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <Navbar />
      <PromoCard/>
    </div>
  );
};

export default HeroSection;
