import React from "react";
import coupleImage from "../assets/images/photos4.jpg";

const PhotographySection = () => {
  return (
    <section className="relative py-20  bg-white overflow-hidden">
      {/* Marquee Background */}
      <div className="absolute top-10 left-0 w-full whitespace-nowrap z-0 pointer-events-none">
        <div className="animate-marquee inline-block">
          <h2 className="text-[20vw] sm:text-[12vw] md:text-[10vw] font-extrabold text-gray-200 uppercase">
            Good Moments Showcased &nbsp; Good Moments Showcased &nbsp; Good
            Moments Showcased
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-10 md:px-20 flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={coupleImage}
            alt="Couple"
            className="w-full  max-w-md rounded-lg shadow-xl  transform rotate-[-6deg]"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 md:text-center lg:text-left">
          <h3
            className="text-3xl md:text-5xl text-yellow-300 font-[Great Vibes] mb-2"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Bride Makeup
          </h3>
          <h4 className="text-2xl font-semibold text-gray-800 mb-4 tracking-wide">
            Best Team
          </h4>
          <p className="text-gray-700 leading-relaxed text-[10px] sm:text-[14px]">
            We specialize in delivering exquisite bridal makeup services
            designed to enhance your natural beauty on your special day. From
            traditional to contemporary bridal looks, our professional artists
            ensure every detail is flawless. We also offer personalized
            pre-wedding beauty consultations, HD makeup, and long-lasting,
            camera-ready finishes. With our expertise and commitment to
            perfection, you’ll walk down the aisle with confidence and grace,
            looking radiant from every angle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;
