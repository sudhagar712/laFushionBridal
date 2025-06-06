import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center px-4 py-3 text-white">
          {/* Logo */}

          <div className="text-[12px] md:text-[20px] font-bold">
            LaFushion Bridal
          </div>

          {/* Offcanvas Toggle (Always visible) */}

          <div className="flex items-center gap-5">
            <div>
            <a href="tel:+919003545353">
            <button className="border bg-yellow-500 mt-1 py-2 px-4 uppercase text-[8px] md:text-[18px] w-fit">
                Let's Connect
              </button>
              </a>

             
            </div>
            <button
              onClick={() => setMenuOpen(true)}
              className="text-2xl focus:outline-none"
            >
              <FiMenu />
            </button>
          </div>
        </div>

        {/* Offcanvas Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-[70%] md:w-[50%] bg-white text-gray-500 transform transition-transform duration-300 z-50 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-700">
            <h2 className="md:text-3xl text-xl  font-semibold">
              LaFusion Bridal{" "}
            </h2>
            <button onClick={() => setMenuOpen(false)} className="text-2xl">
              <FiX />
            </button>
          </div>

          <div className="flex items-center p-10 justify-center">
            <h1 className="text-sm md:text-xl">
              <p className="text-yellow-400 text-md md:text-2xl font-bold">
                Shop Address:
              </p>{" "}
              La Fusion Bridal Studio, No. 93, 1st Floor, MG Road Corner & KBSN
              Kofi Bar Upstairs, Vysial St, Puducherry, 605001
            </h1>
          </div>
          <div className="flex items-center p-10 justify-center">
            <p className="text-yellow-400 font-bold">Contact:&nbsp; </p>
            <span> 9003545353</span>
          </div>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </header>
    </>
  );
};

export default Navbar;
