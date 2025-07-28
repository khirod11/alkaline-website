import React from 'react';
import './ContactSection.scss';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-image" />

      <div className="contact-form-container">
        <h2>Let’s Talk Hydration</h2>
        <p>Reach Out To Us For Orders, Subscriptions, Or Support.</p>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <textarea placeholder="Message" rows="5" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
