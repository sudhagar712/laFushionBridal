import React from "react";
import coupleImage from "../assets/images/photos4.jpg";

const PhotographySection = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Marquee Background */}
      <div className="absolute top-20 left-0 w-full whitespace-nowrap z-0 pointer-events-none">
        <div className="animate-marquee inline-block">
          <h2 className="text-[10vw] sm:text-[12vw] md:text-[10vw] font-extrabold text-gray-200 uppercase">
            Good Moments Showcased &nbsp; Good Moments Showcased &nbsp; Good
            Moments Showcased
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={coupleImage}
            alt="Couple"
            className="w-full  max-w-md rounded-lg shadow-xl  transform rotate-[-3deg]"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3
            className="text-6xl text-yellow-300 font-[Great Vibes] mb-2"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Bride Makeup
          </h3>
          <h4 className="text-2xl font-semibold text-gray-800 mb-4 tracking-wide">
            Best Team
          </h4>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            We pride ourselves in offering the best in pre-wedding photoshoot
            services, wedding photography, and video coverage. Our professional
            staff guarantees each moment is captured with unerring accuracy and
            flair. We also provide professional photo editing and beautiful
            customized albums, ensuring your precious memories are preserved in
            style.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;
