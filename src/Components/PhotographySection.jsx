import React from "react";
import coupleImage from "../assets/images/photos4.jpg";
import Salooncut from "../assets/images/saloonhaircut.webp";
import spa from "../assets/images/spamass.webp";
import { Link } from "react-router-dom";

const PhotographySection = () => {
  return (
    <>
      {/* Bridal Section */}
      <section className="relative md:py-20 mt-[50px] overflow-hidden">
        <div className="absolute top-10 left-0 w-full whitespace-nowrap z-0 pointer-events-none">
          <div className="animate-marquee inline-block">
            <h2 className="text-[20vw] sm:text-[12vw] md:text-[10vw] font-extrabold text-gray-300 uppercase">
              Good Moments Showcased &nbsp; Good Moments Showcased &nbsp; Good
              Moments Showcased
            </h2>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-10 flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <div
            className="w-full lg:w-1/2 flex justify-center"
            data-aos="fade-right"
          >
            <img
              src={coupleImage}
              alt="Couple"
              className="w-full max-w-lg rounded-lg shadow-xl transform rotate-[-6deg]"
            />
          </div>

          {/* Text */}
          <div
            className="w-full lg:w-1/2 md:text-center lg:text-left"
            data-aos="fade-left"
          >
            <h3 className="text-3xl md:text-6xl text-yellow-300 font-[Great Vibes] mb-2">
              Bridal Makeup
            </h3>
            <h4 className="text-2xl font-semibold text-gray-500 mb-4 tracking-wide">
              Best Team
            </h4>
            <p className="text-gray-500 leading-relaxed text-[10px] sm:text-[14px]">
              We specialize in delivering exquisite bridal makeup services...
            </p>
            <Link to="/services/bridalcollections">
              <button className="bg-yellow-300 border-2 border-white p-3 px-4 mt-3">
                Show More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Saloon Section */}
      <section className="relative mt-[50px] md:px-20 overflow-hidden">
        <div className="absolute top-[100px] left-0 w-full whitespace-nowrap z-0 pointer-events-none">
          <div className="animate-marquee inline-block">
            <h2 className="text-[20vw] sm:text-[12vw] md:text-[10vw] font-extrabold text-gray-300 uppercase">
              Good Moments Showcased &nbsp; Good Moments Showcased &nbsp; Good
              Moments Showcased
            </h2>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-10 flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Text */}
          <div
            className="w-full lg:w-1/2 md:text-center lg:text-left"
            data-aos="fade-right"
          >
            <h3 className="text-3xl md:text-6xl text-yellow-300 font-[Great Vibes] mb-2">
              Saloon HairCut
            </h3>
            <h4 className="text-2xl font-semibold text-gray-500 mb-4 tracking-wide">
              Best Team
            </h4>
            <p className="text-gray-500 leading-relaxed text-[10px] sm:text-[14px]">
              We specialize in delivering exquisite bridal makeup services...
            </p>
            <Link to="/services/saloon">
              <button className="bg-yellow-300 border-2 border-white p-3 px-4 mt-3">
                Show More
              </button>
            </Link>
          </div>

          {/* Image */}
          <div
            className="w-full lg:w-1/2 flex justify-center"
            data-aos="fade-left"
          >
            <img
              src={Salooncut}
              alt="Saloon Cut"
              className="w-full md:h-[500px] h-[300px] max-w-lg rounded-lg shadow-xl transform rotate-[-6deg]"
            />
          </div>
        </div>
      </section>

      {/* Spa Section */}
      <section className="relative py-20 mt-5 overflow-hidden">
        <div className="absolute top-10 left-0 w-full whitespace-nowrap z-0 pointer-events-none">
          <div className="animate-marquee inline-block">
            <h2 className="text-[20vw] sm:text-[12vw] md:text-[10vw] font-extrabold text-gray-300 uppercase">
              Good Moments Showcased &nbsp; Good Moments Showcased &nbsp; Good
              Moments Showcased
            </h2>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-10 flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <div
            className="w-full lg:w-1/2 flex justify-center"
            data-aos="zoom-in-up"
          >
            <img
              src={spa}
              alt="Spa"
              className="w-full md:h-[500px] h-[300px] max-w-lg rounded-lg shadow-xl transform rotate-[-6deg]"
            />
          </div>

          {/* Text */}
          <div
            className="w-full lg:w-1/2 md:text-center lg:text-left"
            data-aos="fade-up"
          >
            <h3 className="text-3xl md:text-6xl text-yellow-300 font-[Great Vibes] mb-2">
              Spa
            </h3>
            <h4 className="text-2xl font-semibold text-gray-500 mb-4 tracking-wide">
              Best Team
            </h4>
            <p className="text-gray-500 leading-relaxed text-[10px] sm:text-[14px]">
              We specialize in delivering exquisite bridal makeup services...
            </p>
            <Link to="/services/spa">
              <button className="bg-yellow-300 border-2 border-white p-3 px-4 mt-3">
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
