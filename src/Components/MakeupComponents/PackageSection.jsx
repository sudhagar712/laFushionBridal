import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import classic from "../../assets/images/classicpakage.jpg";
import hd from "../../assets/images/hdpackage.jpg";
import airbrush from "../../assets/images/Airbrushpackage.jpeg";
import signature from "../../assets/images/Signaturemake.jpeg";

const packages = [
  {
    title: "Classic Package",
    image: classic,
    features: ["Face Makeup", "Saree Draping", "Hair Do"]
  },
  {
    title: "HD Package",
    image: hd,
    features: [
      "Face Makeup",
      "Saree Draping",
      "Hair Do",
      "Lashes",
      "Lens",
      "Hair Extension",
      "Flowers"
    ]
  },
  {
    title: "Airbrush Package",
    image: airbrush,
    features: [
      "Face Makeup",
      "Saree Draping",
      "Hair Do",
      "Hair Extension",
      "Lashes",
      "Lens",
      "Flowers"
    ]
  },
  {
    title: "Signature Makeup",
    image: signature,
    features: [
      "Face Makeup",
      "Saree Draping",
      "Hair Do",
      "Hair Extension",
      "Lashes",
      "Lens",
      "Flowers"
    ]
  }
];

const PackageSection = () => {
  return (
    <section className="py-12 px-4 bg-gray-200 text-center">
      <h3 className="text-sm uppercase text-yellow-400 font-semibold mb-2">
        Pricing Package
      </h3>
      <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-10">
        Choose Your Perfect Package
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {packages.map((pack, index) => (
          <div
            key={index}
            className="bg-white border rounded-3xl shadow-md overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl flex flex-col sm:flex-row"
          >
            {/* Left image full height */}
            <div className="sm:w-1/2 h-64 sm:h-auto">
              <img
                src={pack.image}
                alt={pack.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right content */}
            <div className="p-6 flex flex-col justify-center text-left sm:w-1/2 animate-fadeIn">
              <h3 className="text-xl font-semibold font-serif mb-3">
                {pack.title}
              </h3>
              <ul className="space-y-1 text-gray-700 mb-4">
                {pack.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <FaCheckCircle className="text-yellow-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/919003545353?text=${encodeURIComponent(
                  `Hi, I'm interested in the ${pack.title} for bridal makeup. Please share the details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-full text-[10px] font-semibold transition-all inline-block text-center"
              >
                BOOK NOW ➜
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackageSection;
