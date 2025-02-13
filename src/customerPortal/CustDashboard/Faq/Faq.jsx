import React, { useState } from "react";
import "./Faq.css";

const FAQAccordion = () => {
  const faqs = [
    { question: "How to File Income Tax ?", answer: "You can file your income tax online through the official tax portal by following the required steps." },
    { question: "What documents are required for filing Income Tax?", answer: "You need PAN card, Form 16, salary slips, investment proofs, and bank statements." },
    { question: "What is the deadline for filing Income Tax?", answer: "The deadline varies by country; generally, it's around July 31st in India." },
    { question: "Can I file Income Tax without Form 16?", answer: "Yes, you can file it manually using salary slips and bank statements." },
    { question: "How to File Income Tax ?", answer: "You can file your income tax online through the official tax portal by following the required steps." },
    { question: "What documents are required for filing Income Tax?", answer: "You need PAN card, Form 16, salary slips, investment proofs, and bank statements." },
    { question: "What is the deadline for filing Income Tax?", answer: "The deadline varies by country; generally, it's around July 31st in India." },
    { question: "Can I file Income Tax without Form 16?", answer: "Yes, you can file it manually using salary slips and bank statements." },
    { question: "How to File Income Tax ?", answer: "You can file your income tax online through the official tax portal by following the required steps." },
    { question: "What documents are required for filing Income Tax?", answer: "You need PAN card, Form 16, salary slips, investment proofs, and bank statements." },
    { question: "What is the deadline for filing Income Tax?", answer: "The deadline varies by country; generally, it's around July 31st in India." },
    { question: "Can I file Income Tax without Form 16?", answer: "Yes, you can file it manually using salary slips and bank statements." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions (FAQs)</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            FAQs:
            <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>&#9662;</span>
          </button>
          {openIndex === index && <div className="faq-answer">{faq.question}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
