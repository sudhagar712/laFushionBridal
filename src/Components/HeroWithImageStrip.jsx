import React from "react";
import img1 from "../assets/images/photos3.jpg";
import img2 from "../assets/images/photos4.jpg";
import img3 from "../assets/images/photos5.jpg";
import img4 from "../assets/images/photos6.jpeg";
import img5 from "../assets/images/photos7.webp";

const HeroWithImageStrip = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <div className="max-w-xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          I'M YOUR NAME
          <br />
          I'M A WEDDING AND CANDID PHOTOGRAPHER
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          Live and authentic emotions are my specialties with which I can frame
          your special day. I am a wedding and candid photographer who focuses
          on genuine feelings, smiles, and bonds that are the essence of your
          love. Taking an artistic concept with operational detail, I guarantee
          that every picture captures the spirit of your joyous occasion,
          leaving you with memories of your special day that you will never
          forget.
        </p>
        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-2 border border-gray-500 text-gray-700 rounded-full hover:bg-gray-100 transition">
            Chat Us
          </button>
          <button className="px-6 py-2 border border-gray-500 text-gray-700 rounded-full hover:bg-gray-100 transition">
            Call Today
          </button>
        </div>
      </div>

      {/* Right Images */}
      <div className="flex gap-2">
        {[img1, img2, img3, img4, img5].map((img, idx) => (
          <div
            key={idx}
            className="w-[60px] sm:w-[70px] md:w-[80px] lg:w-[90px] xl:w-[100px] transform rotate-2 overflow-hidden rounded-md shadow-lg"
          >
            <img
              src={img}
              alt={`photo${idx}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroWithImageStrip;
