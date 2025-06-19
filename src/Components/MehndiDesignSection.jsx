import React from "react";

// Import images
import bridal from "../assets/images/m1.png";
import mughlai from "../assets/images/m2.png";
import wedding from "../assets/images/m3.png";
import multiColor from "../assets/images/m4.png";

const mehndiDesigns = [
  {
    title: "BRIDAL MEHANDI DESIGNER",
    description:
      "Mehndi is the traditional yet creative form of design which has been practiced from many years. This form of design is still famous...",
    image: bridal
  },
  {
    title: "MUGHLAI MEHANDI DESIGNER",
    description:
      "Mughal mehendi designs are also rich and classy mehendi art. These designs have a flavor of traditions and are really charming and beautiful..",
    image: mughlai
  },
  {
    title: "WEEDING & HENNA MEHANDI ARTIST",
    description:
      "Kundan Mehndi feels proud in catering the professional wedding Mehndi service across Delhi and NCR. The Mehndi center..",
    image: wedding
  },
  {
    title: "MULTI COLORED MEHENDI DESIGNS",
    description:
      "Look fashionable, and trendy by applying multi-colored Mehendi accented with crystals!",
    image: multiColor
  }
];

const MehndiDesignSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {mehndiDesigns.map((item, index) => (
          <div
            key={index}
            className="text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-white shadow"
            />
            <h3 className="mt-4 text-lg font-semibold text-green-600 uppercase">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MehndiDesignSection;
