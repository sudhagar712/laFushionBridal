import React from "react";
import coupleImage from "../assets/images/photos4.jpg";
import Salooncut from "../assets/images/saloonhaircut.webp";
import spa from "../assets/images/spamass.webp"

import { Link } from "react-router-dom";

const PhotographySection = () => {
  return (
    <>
      {/* // bridal sec */}
      <section className="relative py-20 mt-5  overflow-hidden">
        {/* Marquee Background */}
        <div className="absolute top-10 left-0 w-full whitespace-nowrap z-0 pointer-events-none">
          <div className="animate-marquee inline-block">
            <h2 className="text-[20vw] sm:text-[12vw] md:text-[10vw] font-extrabold text-gray-300 uppercase">
              Good Moments Showcased &nbsp; Good Moments Showcased &nbsp; Good
              Moments Showcased
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-10  flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full lg:w-1/2  flex justify-center">
            <img
              src={coupleImage}
              alt="Couple"
              className="w-full  max-w-lg rounded-lg shadow-xl  transform rotate-[-6deg]"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 md:text-center lg:text-left">
            <h3
              className="text-3xl md:text-6xl text-yellow-300 font-[Great Vibes] mb-2"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Bridal Makeup
            </h3>
            <h4 className="text-2xl font-semibold text-gray-500 mb-4 tracking-wide">
              Best Team
            </h4>
            <p className="text-gray-500 leading-relaxed text-[10px] sm:text-[14px]">
              We specialize in delivering exquisite bridal makeup services
              designed to enhance your natural beauty on your special day. From
              traditional to contemporary bridal looks, our professional artists
              ensure every detail is flawless. We also offer personalized
              pre-wedding beauty consultations, HD makeup, and long-lasting,
              camera-ready finishes. With our expertise and commitment to
              perfection, you’ll walk down the aisle with confidence and grace,
              looking radiant from every angle.
            </p>
            <Link to="/bridalCollections">
              <button className="bg-yellow-300 border-2 border-white p-3 px-4  mt-3">
                Show More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Saloon Cut */}
      <section className="relative py-20  md:px-20  overflow-hidden">
        {/* Marquee Background */}
        <div className="absolute top-[200px] left-0 w-full whitespace-nowrap z-0 pointer-events-none">
          <div className="animate-marquee inline-block">
            <h2 className="text-[20vw] sm:text-[12vw] md:text-[10vw] font-extrabold text-gray-300 uppercase">
              Good Moments Showcased &nbsp; Good Moments Showcased &nbsp; Good
              Moments Showcased
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-10  flex flex-col lg:flex-row items-center gap-10">
          {/* Text */}
          <div className="w-full lg:w-1/2 md:text-center lg:text-left">
            <h3
              className="text-3xl md:text-6xl text-yellow-300 font-[Great Vibes] mb-2"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Saloon HairCut
            </h3>
            <h4 className="text-2xl font-semibold text-gray-500 mb-4 tracking-wide">
              Best Team
            </h4>
            <p className="text-gray-500 leading-relaxed text-[10px] sm:text-[14px]">
              We specialize in delivering exquisite bridal makeup services
              designed to enhance your natural beauty on your special day. From
              traditional to contemporary bridal looks, our professional artists
              ensure every detail is flawless. We also offer personalized
              pre-wedding beauty consultations, HD makeup, and long-lasting,
              camera-ready finishes. With our expertise and commitment to
              perfection, you’ll walk down the aisle with confidence and grace,
              looking radiant from every angle.
            </p>
            <Link to="/bridalCollections">
              <button className="bg-yellow-300 border-2 border-white p-3 px-4  mt-3">
                Show More
              </button>
            </Link>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2  flex justify-center">
            <img
              src={Salooncut}
              alt="Couple"
              className="w-full md:h-[500px] h-[300px] max-w-lg rounded-lg shadow-xl  transform rotate-[-6deg]"
            />
          </div>
        </div>
      </section>

      {/* /spa */}
      <section className="relative py-20 mt-5  overflow-hidden">
        {/* Marquee Background */}
        <div className="absolute top-10 left-0 w-full whitespace-nowrap z-0 pointer-events-none">
          <div className="animate-marquee inline-block">
            <h2 className="text-[20vw] sm:text-[12vw] md:text-[10vw] font-extrabold text-gray-300 uppercase">
              Good Moments Showcased &nbsp; Good Moments Showcased &nbsp; Good
              Moments Showcased
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-10  flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full lg:w-1/2  flex justify-center">
            <img
              src={spa}
              alt="Couple"
              className="w-full  md:h-[500px] h-[300px]   max-w-lg rounded-lg shadow-xl  transform rotate-[-6deg]"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 md:text-center lg:text-left">
            <h3
              className="text-3xl md:text-6xl text-yellow-300 font-[Great Vibes] mb-2"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Spa
            </h3>
            <h4 className="text-2xl font-semibold text-gray-500 mb-4 tracking-wide">
              Best Team
            </h4>
            <p className="text-gray-500 leading-relaxed text-[10px] sm:text-[14px]">
              We specialize in delivering exquisite bridal makeup services
              designed to enhance your natural beauty on your special day. From
              traditional to contemporary bridal looks, our professional artists
              ensure every detail is flawless. We also offer personalized
              pre-wedding beauty consultations, HD makeup, and long-lasting,
              camera-ready finishes. With our expertise and commitment to
              perfection, you’ll walk down the aisle with confidence and grace,
              looking radiant from every angle.
            </p>
            <Link to="/bridalCollections">
              <button className="bg-yellow-300 border-2 border-white p-3 px-4  mt-3">
                Show More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PhotographySection;
