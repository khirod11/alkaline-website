import React from "react";
import "./StorySection.scss";

const StorySection = () => {
  return (
    <section className="story-section">
      <div className="story-left">
        <h2>Our Story Of Purity</h2>
        <h3>
          Crafted For The Health-Conscious,
          <br />
          Delivered With Care.
        </h3>
        <a href="#about" className="learn-more">
          More About Us
        </a>
      </div>
      <div className="story-right">
        <p>
          At Genesis, we're more than just a water delivery company — we're on a
          mission to bring better hydration and better health to every home.
          With our scientifically backed alkaline water (pH 9.5+), we help
          neutralize acidity, support metabolism, and keep you energized
          naturally.<br/><br/>
          Founded with a passion for wellness and purity, our team ensures every
          drop you drink is triple-filtered, mineral-balanced, and delivered
          fresh to your doorstep. We serve households, offices, gyms, and cafes
          — offering flexible delivery schedules and eco-friendly bottle
          exchange programs to reduce plastic waste.<br/>
          We serve households, offices, gyms, and cafes — offering flexible
          delivery schedules and eco-friendly bottle exchange programs to reduce
          plastic waste.
        </p>
      </div>
    </section>
  );
};

export default StorySection;
