import React from "react";
import trialImg from "../assets/images/ww.webp";
import flower from "../assets/images/flowerBanner.webp";

const TrialMakeupSection = () => {
  return (
    <section className="bg-yellow-100 py-10 px-4  md:px-[40px] md:p-10 mt-6 rounded-3xl relative overflow-hidden">
      {/* Floral Decoration (optional image overlay) */}
      <div className="absolute top-0 left-0 w-40 md:w-52">
        <img src={flower} />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left z-10">
          <h2 className="text-4xl md:text-6xl font-[Playfair_Display] text-red-800 mb-4">
            Trial Makeup <br /> Sessions
          </h2>
          <p className="text-gray-700 font-[Playfair_Display] mb-6 leading-relaxed">
            We know that choosing the right makeup look can be a daunting task,
            which is why we offer trial makeup sessions. During your trial, our
            makeup artist will work with you to create a look that highlights
            your best features and complements your personal style.
          </p>
          <button className="px-6 py-2 border-2 border-red-500 rounded-full text-red-700 font-semibold hover:bg-red-500 hover:text-white transition">
            Book Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative">
          <div className="relative w-full max-w-sm mx-auto">
            <div className="absolute top-5 left-5 w-full h-full bg-gray-300 transform rotate-3 z-0 rounded-xl shadow-lg" />
            <img
              src={trialImg}
              alt="Makeup Model"
              className="relative z-10 rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialMakeupSection;
