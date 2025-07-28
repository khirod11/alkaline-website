import React from 'react';
import './PromoCard.scss';
import bottle from '../../assets/bottle.png';
import bgImage from '../../assets/image1.png';

const PromoCard = () => {
  return (
    <div
      className="promo-card"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bottle-group">
        <img src={bottle} alt="Bottle 1" className="bottle" />
      </div>

      <div className="text-content">
        <h1>Stay Hydrated With</h1>
        <h1 className="highlight">Premium Alkaline Water</h1>
        <p>PH 9.5+ | Delivered Daily | Zero Contaminants - For A Healthier You</p>
        <div className="buttons">
          <button className="order-btn">Order Now</button>
          <button className="explore-btn">Explore Benefits</button>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
