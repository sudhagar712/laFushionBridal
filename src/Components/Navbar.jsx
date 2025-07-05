import React, { useState, useEffect } from "react";
import {  FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { CgMenuRightAlt } from "react-icons/cg";

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

  // Scroll visibility
  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY <= 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full px-5 py-1 top-0 left-0 z-50 md:p-5 mt-4 md:mt-0 md:px-10 transition-all duration-300 ${
        isAtTop ? "bg-transparent text-white" : "hidden"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-[110px] md:w-[60%] mb-2" />
        </Link>

        {/* Desktop Menu */}
        {/* <nav className="hidden md:flex gap-4 font-medium p-2 ">
          {menuItems.map((item) =>
            item.name === "Services" ? (
              <div
                className="relative group border border-white hover:bg-yellow-400 md:p-2  px-3 py-1"
                key={item.name}
              >
                <span className=" cursor-pointer transition duration-200">
                  {item.name}
                </span>
                <div
                  className="absolute top-full left-0 mt-2 w-52 bg-white text-gray-800 shadow-xl 
                  opacity-0 scale-95 translate-y-[-10px] group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                  transition-all duration-300 ease-out z-40"
                >
                  <Link
                    to="/services/bridalcollections"
                    className="block px-4 py-2 hover:bg-yellow-100"
                  >
                    Bridal Collections
                  </Link>

                  <Link
                    to="/services/mehandi"
                    className="block px-4 py-2 hover:bg-yellow-100"
                  >
                    Mehandi Collections
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
                className="border border-white hover:bg-yellow-400 md:p-2 md:px-5 py-1   transition duration-200"
              >
                {item.name}
              </Link>
            )
          )}
        </nav> */}

        <div></div>

        <div className="flex justify-center  gap-10 ">
          <a href="tel:+919003545353">
            {" "}
            <button className="border-2 border-white px-3 py-2">
              Lets Connect
            </button>
          </a>

          {/* Mobile Menu Icon */}
          <button
            className=" bg-yellow-400  p-1 px-2 border-2 border-white rounded-md shadow-2xl text-2xl "
            onClick={() => setMenuOpen(true)}
          >
            <CgMenuRightAlt />
          </button>
        </div>
      </div>

      {/* Mobile Offcanvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[100%] sm:w-[50%] bg-black bg-opacity-50 backdrop-blur-md text-white transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center  p-4 border-b border-yellow-400">
          <img src={logo} alt="logo" className="w-[120px] " />

          <button
            onClick={() => setMenuOpen(false)}
            className="text-xl text-white bg-yellow-400 p-2 shadow-2xl"
          >
            <FiX />
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-4 font-light text-[20px]">
          {menuItems.map((item) =>
            item.name === "Services" ? (
              <div
                className="flex flex-col text-center space-y-2  p-2"
                key={item.name}
              >
                <span className="font-semibold text-yellow-500">Services</span>
                <Link
                  to="/services/bridalcollections"
                  onClick={() => setMenuOpen(false)}
                  className="py-1 hover:text-yellow-400"
                >
                  Bridal Collections
                </Link>

                <Link
                  to="/services/mehandi"
                  onClick={() => setMenuOpen(false)}
                  className="py-1 hover:text-yellow-400"
                >
                  Mehandi Collections
                </Link>
                <Link
                  to="/services/saloon"
                  onClick={() => setMenuOpen(false)}
                  className="py-1 hover:text-yellow-400"
                >
                  Saloon
                </Link>
                <Link
                  to="/services/spa"
                  onClick={() => setMenuOpen(false)}
                  className="py-1 hover:text-yellow-400"
                >
                  SPA
                </Link>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-center   rounded-md py-2  "
              >
                {item.name}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
