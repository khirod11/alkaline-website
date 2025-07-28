import React, { useState } from "react";
import "./AlkalineHydration.scss";
import water1 from "../../assets/bottle3.png";
import water2 from "../../assets/bottle4.png";
import water3 from "../../assets/bottle5.png";

const images = [water1, water2, water3];

const AlkalineHydration = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const getImageClass = (index) => {
    if (index === activeIndex) return "carousel-image center";
    if (index === (activeIndex + 1) % 3) return "carousel-image right";
    if (index === (activeIndex + 2) % 3) return "carousel-image left";
    return "carousel-image";
  };

  return (
    <div className="hydration-container">
      <div className="text-section">
        <h2>The Power Of Alkaline Hydration</h2>
        <h3>
          Balance Your Body. Elevate Your Energy.
          <br />
          One Sip At A Time.
        </h3>
        <p>
          Unlike ordinary bottled water, alkaline water has a higher pH level
          (typically 8.5 to 9.5) that helps neutralize acidity in the body,
          improve hydration, and support overall wellness. It's not just about
          quenching thirst — it's about restoring balance from within.
        </p>
        <p>
          Founded with a passion for wellness and purity, our team ensures every
          drop you drink is triple-filtered, mineral-balanced, and delivered
          fresh to your doorstep. We serve households, offices, gyms, and cafes
          — offering flexible delivery schedules and eco-friendly bottle
          exchange programs to reduce plastic waste.
        </p>
        <p>
          We serve households, offices, gyms, and cafes — offering flexible
          delivery schedules and eco-friendly bottle exchange programs to reduce
          plastic waste.
        </p>
      </div>

      <div className="carousel-section">
        <div className="carousel">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Bottle ${index}`}
              className={getImageClass(index)}
            />
          ))}
        </div>
        <div className="carousel-dots">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlkalineHydration;
