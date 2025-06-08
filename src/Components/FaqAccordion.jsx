import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What types of makeup services do you offer?",
    answer:
      "We offer bridal, party, HD, airbrush, signature, and casual makeup services tailored to your needs."
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment through our website, Instagram, or by contacting us directly via WhatsApp."
  },
  {
    question: "Do you provide makeup trials?",
    answer:
      "Yes, we provide makeup trials to help you decide your perfect look for the big day."
  },
  {
    question: "What brands of makeup products do you use?",
    answer:
      "We use high-end professional products like MAC, Huda Beauty, NARS, and more."
  },
  {
    question: "Do you travel to the client's location?",
    answer:
      "Yes, we provide on-location services for weddings and events with prior arrangements."
  },
  {
    question: "How far in advance should I book for a wedding or special event?",
    answer:
      "For weddings, it's best to book 2–3 months in advance to secure your preferred date."
  },
  {
    question: "Can you accommodate large groups for weddings?",
    answer:
      "Absolutely, we have a team of experts who can cater to large bridal parties or events."
  },
  {
    question: "How long does a typical makeup session take?",
    answer:
      "A typical makeup session takes about 1.5 to 2 hours, depending on the package chosen."
  },
  {
    question: "What if I have allergies or sensitive skin?",
    answer:
      "Yes, we use hypoallergenic products and do a patch test if you have sensitive skin."
  },
  {
    question: "Do you offer airbrush makeup?",
    answer:
      "Yes, airbrush makeup is available and perfect for a long-lasting, flawless look."
  },
  {
    question: "How do I prepare for my makeup session?",
    answer:
      "Please come with a clean, moisturized face and bring inspiration photos if you have any."
  },
  {
    question: "Do you offer makeup lessons?",
    answer:
      "Yes, we offer personalized makeup lessons for beginners and aspiring artists."
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, bank transfers, cash, and popular digital wallets."
  },
  {
    question: "Can you recreate a specific makeup look from a photo?",
    answer:
      "Yes, we can recreate any look you show us, and we’ll customize it to suit your features."
  }
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl bg-gray-100 md:p-10 px-3 md:mb-10 md:py-12 mx-auto py-12">
      <p className="text-2xl md:text-4xl text-yellow-500 font-semibold mb-7">
        Frequently Asked Any Question
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Unveil Your True Beauty At Our Makeup Studio
      </h2>

      <div className="border rounded shadow-md bg-white">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full text-left px-4 py-4 flex justify-between items-center focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-base md:text-lg font-medium">{faq.question}</span>
              {activeIndex === index ? (
                <FiMinus className="text-xl" />
              ) : (
                <FiPlus className="text-xl" />
              )}
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
