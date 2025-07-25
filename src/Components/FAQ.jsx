import React, { useState } from 'react';
import '../Styles/FAQ.css';

const faqs = [
  {
    question: "What are the opening hours of Blink Family Salon?",
    answer: "Mon to Fri 10.00 am to 9.00 pm / Sat & Sun 8.00 am to 9.00 pm",
  },
  {
    question: "Do I need to book an appointment in advance?",
    answer: "While walk-ins are welcome, booking ahead ensures your preferred time slot—especially for bridal or spa services.",
  },
  {
    question: "Are your products cruelty-free?",
    answer: "Yes! We proudly use cruelty-free and organic products for skin, hair, and styling treatments.",
  },
  {
    question: "Can I customize a bridal package?",
    answer: "Absolutely! Our bridal packages are fully customizable to fit your style, budget, and schedule.",
  },
  {
    question: "Do you offer services for kids?",
    answer: "Yes, we have trained stylists experienced in children’s grooming, designed to be gentle and fun.",
  },
  {
    question: "Are home service appointments available?",
    answer: "Yes! Contact us to schedule select services at your location, including makeup and hair styling.",
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq_section">
      <h2 className="faq_title">Frequently Asked Questions(FAQS)</h2>
      <div className="faq_cards">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq_card ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleCard(index)}
          >
            <div className="faq_card_header">
              <h3>{item.question}</h3>
              <span className="faq_toggle">{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="faq_card_body">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;