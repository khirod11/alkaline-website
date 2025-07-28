import React, { useState } from "react";
import "./TestimonialSlider.scss";
import bottle1 from "../../assets/bottle3.png";
import bottle2 from "../../assets/bottle4.png";
import bottle3 from "../../assets/bottle5.png";

const images = [bottle1, bottle2, bottle3];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);

//   const getImageClass = (index) => {
//     if (index === activeIndex) return "carousel-image center";
//     if ((index + 1) % images.length === activeIndex)
//       return "carousel-image right";
//     if ((index + 2) % images.length === activeIndex)
//       return "carousel-image left";
//     return "carousel-image";
//   };
  const getShiftedImages = () => {
    const shifted = [...images];
    return [
      shifted[(activeIndex + 2) % 3],
      shifted[activeIndex],
      shifted[(activeIndex + 1) % 3],
    ];
  };

  return (
    <div className="testimonial-container">
      <div className="image-section">
        <div className="carousel">
          {getShiftedImages().map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Bottle ${i}`}
              className={`carousel-image ${
                i === 1 ? "center" : i === 0 ? "left" : "right"
              }`}
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

      <div className="text-section">
        <div className="header-grid">
  <div className="heading-text">
    <h2>Testimonials</h2>
    <h4>Feedback</h4>
  </div>
  <div className="quote">&#8221;</div>
</div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining unchanged.
        </p>
        <button>View Product</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
