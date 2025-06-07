import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  "What types of makeup services do you offer?",
  "How do I book an appointment?",
  "Do you provide makeup trials?",
  "What brands of makeup products do you use?",
  "Do you travel to the client's location?",
  "How far in advance should I book for a wedding or special event?",
  "Can you accommodate large groups for weddings?",
  "How long does a typical makeup session take?",
  "What if I have allergies or sensitive skin?",
  "Do you offer airbrush makeup?",
  "How do I prepare for my makeup session?",
  "Do you offer makeup lessons?",
  "What payment methods do you accept?",
  "Can you recreate a specific makeup look from a photo?"
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <p className="text-4xl text-yellow-400 font-semibold mb-7">
        Frequently Asked Any Question
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Unveil Your True Beauty At Our Makeup Studio
      </h2>

      <div className="border rounded">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full text-left px-4 py-4 flex justify-between items-center focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-base md:text-lg">{faq}</span>
              {activeIndex === index ? (
                <FiMinus className="text-xl" />
              ) : (
                <FiPlus className="text-xl" />
              )}
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-600">
                {/* Placeholder answer */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
