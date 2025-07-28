import React from 'react';
import './JourneySteps.scss';
import { FaShoppingCart, FaTruck, FaTint } from 'react-icons/fa';

const steps = [
  {
    icon: <FaShoppingCart size={40} color="white" />,
    title: 'Order Online',
    text: 'Lorem Ipsum Dolor Sit Amet Consectetur. Consequat Etiam Enim'
  },
  {
    icon: <FaTruck size={40} color="white" />,
    title: 'Doorstep Delivery',
    text: 'Lorem Ipsum Dolor Sit Amet Consectetur. Consequat Etiam Enim'
  },
  {
    icon: <FaTint size={40} color="white" />,
    title: 'Stay Hydrated',
    text: 'Lorem Ipsum Dolor Sit Amet Consectetur. Consequat Etiam Enim'
  }
];

const JourneySteps = () => {
  return (
    <div className="journey-container">
      <h2>Your Wellness Journey Starts Here</h2>
      <p className="subtitle">Premium Alkaline Water, Delivered On Your Terms.</p>

      <div className="steps">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="icon-box">{step.icon}</div>
            <h4>{step.title}</h4>
            <p>{step.text}</p>
          </div>
        ))}
      </div>

      <div className="plan-section">
        <div className="plan-bg">
          <div className="overlay"></div>
          <div className="content">
            <h2>Choose Your Plan</h2>
            <p>Premium Alkaline Water, Delivered On Your Terms.</p>
            <button>Subscribe Your Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySteps;
