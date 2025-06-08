import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black md:h-[50vh] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-[20px]">
        {/* Logo & Description */}

        <div>
         
            <Link to="/">
              <img src={logo} alt="" className="w-[80%]" />
            </Link>
         
         
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-3xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#services" className="hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="#packages" className="hover:text-yellow-400">
                Packages
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-yellow-400">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-3xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Puducherry, India</li>
            <li>📞 +91 9003545353</li>
            <li>✉️ lafusionbridal@gmail.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-3xl font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4 text-xl">
            <a
              href="https://instagram.com/lafusionbridal"
              className="text-pink-400 hover:text-pink-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919003545353"
              className="text-green-400 hover:text-green-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} La Fusion Bridal Studio. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
