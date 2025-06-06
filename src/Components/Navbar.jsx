import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Makeup",
    "Contact"
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full p-1 px-5 top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-md shadow-md text-white"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container  mx-auto  flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="" className="w-[30%] md:w-[45%]  mb-2" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 font-medium">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
              className={`hover:text-yellow-500   transition duration-200 ${
                isScrolled ? "text-white " : "text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Offcanvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] sm:w-[50%] bg-white text-gray-800 transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="text-xl font-bold">
            <span className="text-yellow-500">LaFusion</span> Bridal
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-600"
          >
            <FiX />
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-4 font-medium">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
              className="hover:text-yellow-500"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
