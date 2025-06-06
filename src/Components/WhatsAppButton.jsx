import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919003545353"; // Your number here

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition uppercase text-sm"
    >
      <FaWhatsapp className="text-xl" />
      WhatsApp
    </a>
  );
};

export default WhatsAppButton;
