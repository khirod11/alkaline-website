import React from 'react';
import './LuxuryHydration.scss';
import healthIcon from '../../assets/healthcare.png';
import deliveryIcon from '../../assets/received.png';
import exchangeIcon from '../../assets/bottleIcon.png';
import purificationIcon from '../../assets/neofilter.png';
import bottle2 from '../../assets/bottle2.png';

const features = [
  { icon: healthIcon, label: 'Ph 9.5+ For Health' },
  { icon: deliveryIcon, label: 'Daily Delivery' },
  { icon: exchangeIcon, label: 'Bottle Exchange' },
  { icon: purificationIcon, label: 'Triple Layer Purification' },
];

const LuxuryHydration = () => {
  return (
    <section className="hydration-section">
      <div className="hydration-container">
        <div className="hydration-left">
          <img
            src={bottle2}
            alt="Water Bottle"
          />
        </div>

        <div className="hydration-right">
          <h2>The Luxury Of Pure Hydration</h2>
          <p>
            Explore The Science, Care, And Craftsmanship Behind Every Drop.
          </p>

          <div className="hydration-features">
            {features.map((item, index) => (
              <div className="feature" key={index}>
                <img src={item.icon} alt={`Icon ${index}`} />
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHydration;
