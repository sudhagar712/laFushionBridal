import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services" },
    { name: "Makeup", path: "/makeup" },
    { name: "Contact", path: "/contact" }
  ];

  // Hide navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full p-1 px-5 top-0 left-0 z-50 transition-all duration-300
        ${isAtTop ? "bg-transparent text-white" : "hidden"}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-[30%] md:w-[45%] mb-2" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 font-medium relative">
          {menuItems.map((item) =>
            item.name === "Services" ? (
              <div className="relative group" key={item.name}>
                <span className="hover:text-yellow-500 cursor-pointer transition duration-200">
                  {item.name}
                </span>
                <div
                  className="absolute top-full left-0 mt-2 w-52 bg-white text-gray-800 shadow-xl rounded-md
                  opacity-0 scale-95 translate-y-[-10px] group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                  transition-all duration-300 ease-out z-40"
                >
                  <Link
                    to="/bridalcollections"
                    className="block px-4 py-2 hover:bg-yellow-100"
                  >
                    Bridal Collections
                  </Link>
                  <Link
                    to="/services/saloon"
                    className="block px-4 py-2 hover:bg-yellow-100"
                  >
                    Saloon
                  </Link>
                  <Link
                    to="/services/spa"
                    className="block px-4 py-2 hover:bg-yellow-100"
                  >
                    SPA
                  </Link>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-yellow-500 transition duration-200"
              >
                {item.name}
              </Link>
            )
          )}
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
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500"
            >
              {item.name}
            </Link>
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
