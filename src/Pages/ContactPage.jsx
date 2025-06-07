import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import bannercont from "../assets/images/sexygirl.webp";

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full min-h-screen bg-gray-200">
      {/* Left Side Image Section */}
      <div className="relative  md:w-1/2 h-64 md:h-auto">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bannercont})`,
            filter: "brightness(0.4)"
          }}
        ></div>
        <div className="absolute inset-0 bg-red opacity-60"></div>
      </div>

      {/* Right Side Contact Info */}
      <div className="md:w-1/2 px-8 py-12 md:py-20 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-light uppercase tracking-widest text-gray-800 mb-6">
          Contact Us
        </h1>

        <div className="text-gray-700 space-y-6 text-[15px]">
          <div className="flex items-center gap-2">
            <MdPhone className="text-xl text-yellow-500" />
            <span>+91 9003545353</span>
          </div>

          <div className="flex items-center gap-2">
            <MdEmail className="text-xl text-yellow-500" />
            <span>lafusionbridal@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919003545353"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-600 hover:underline"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp
            </a>

            <a
              href="https://instagram.com/lafusionbridal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink-600 hover:underline"
            >
              <FaInstagram className="text-xl" />
              Instagram
            </a>
          </div>

          <div className="mt-4">
            <h2 className="uppercase font-semibold mb-1 text-gray-800">
              Address:
            </h2>
            <p>
              <strong>La Fusion Bridal Studio</strong>,<br />
              No. 93, 1st Floor, MG Road Corner & KBSN Kofi Bar Upstairs,
              <br />
              Vysial St, Puducherry, 605001
            </p>
          </div>

          {/* Embedded Google Map */}
          <div className="mt-6">
            <iframe
              title="La Fusion Bridal Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4968194304175!2d79.8319239748186!3d11.933764488331266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5499eeb81bb27d%3A0x47a1cfb2aefc5d09!2sLa%20Fusion%20Bridal%20Studio!5e0!3m2!1sen!2sin!4v1717744703006!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
