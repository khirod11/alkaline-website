import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FAQAccordion.scss';

const faqItems = [
  {
    question: 'What is alkaline water and how is it different from regular water?',
    answer: 'Alkaline water has a higher pH level than regular water and may help neutralize acid in the bloodstream, among other claimed benefits.',
  },
  {
    question: 'Is alkaline water safe for daily consumption?',
    answer: 'Yes, it is generally considered safe for daily use, but it`s best to consult your doctor if you have any health concerns.',
  },
  {
    question: 'Do I need a subscription to place an order?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text since the 1500s...',
  },
  {
    question: 'How do I return or exchange bottles?',
    answer: 'You can request a return or exchange through your account dashboard, or contact our support team directly.',
  }
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="faq-accordion">
      <div className="faq-title">
        <h2>Frequently Asked Question</h2>
        <p>From Concept to Code - Your Questions Answered</p>
      </div>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
            <div className="faq-question" onClick={() => toggle(index)}>
              <span>{index + 1}. {item.question}</span>
              <div className="faq-icon">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;
