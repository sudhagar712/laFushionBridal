import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import bannerVideo from "../assets/images/angel2vd.mp4"; 

const ContactForm = () => {
  return (
    <div className="flex flex-col  md:flex-row w-full h-full min-h-screen mb-4  bg-gray-300">
      {/* Left Video Section */}
      <div className="relative md:w-1/2 h-[500px] md:h-auto overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Right Contact Section */}
      <div className="md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="bg-opacity-80 backdrop-blur-lg w-full max-w-xl">
          <h1 className="text-3xl md:text-2xl text-black md:mt-[90px] font-bold uppercase tracking-wider mb-6 border-b pb-2">
            Contact Us
          </h1>

          <div className="space-y-6  text-gray-700 text-[15px]">
            <div className="flex items-center gap-3">
              <MdPhone className="text-3xl text-black" />
              <span className="text-gray-900">+91 9003545353</span>
            </div>

            <div className="flex items-center gap-3">
              <MdEmail className="text-3xl text-black" />
              <span className="text-black">lafusionbridal28@gmail.com</span>
            </div>

            <div className="flex items-center gap-6 mt-2">
              <a
                href="https://wa.me/919003545353"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-yellow-50 p-3 rounded-md gap-2 text-green-600"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/lafusion_bridal_studio/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-yellow-50 p-3 rounded-md text-pink-600"
              >
                <FaInstagram className="text-xl" />
                Instagram
              </a>
            </div>

           
            <div className="mt-10">
              <h2 className="uppercase font-bold mb-1 text-black text-xl">
                Address:
              </h2>
              <hr />
              <p className="text-black text-xl mt-4">
                <strong className=" text-xl">
                  la Fusion Bridal Studio: &nbsp;
                </strong>
                No. 93, 1st Floor, MG Road Corner & KBSN Kofi Bar Upstairs,
                Vysial St, Puducherry, 605001
              </p>
            </div>
            <br />
            <hr />
            <div className="mt-5">
              <iframe
                title="La Fusion Bridal Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4968194304175!2d79.8319239748186!3d11.933764488331266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5499eeb81bb27d%3A0x47a1cfb2aefc5d09!2sLa%20Fusion%20Bridal%20Studio!5e0!3m2!1sen!2sin!4v1717744703006!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0, filter: "grayscale(100%)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="shadow-lg rounded-md border border-black"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
