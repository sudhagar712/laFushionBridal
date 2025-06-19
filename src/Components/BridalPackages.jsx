import React from "react";

// All packages use same image for demo (replace with actual if needed)
import classicMain from "../assets/images/subm4.jpg";
import elegantMain from "../assets/images/md2.jpg";
import star1Main from "../assets/images/md3.jpg";
import star2Main from "../assets/images/md4.jpg";
import royalMain from "../assets/images/md5.jpg";

const bridalPackages = [
  {
    title: "The Classic Bridal Package",
    tagline: "where less is more",
    image: classicMain
  },
  {
    title: "The Elegant Bridal Package",
    tagline: "a glamourous look sparkled with gems",
    image: elegantMain
  },
  {
    title: "The Star Bridal Package 1",
    tagline: "where intricate art comes to life",
    image: star1Main
  },
  {
    title: "The Star Bridal Package 2",
    tagline: "where intricate art comes to life with brilliance",
    image: star2Main
  },
  {
    title: "The Royal Bridal Package",
    tagline: "where fairy tales are made",
    image: royalMain
  }
];

const BridalPackages = () => {
  return (
    <div className=" py-9 mt-3  px-5 text-yellow-500  font-bold ">
      <h2 className="text-3xl md:text-4xl font-semibold text-center border-b-2 border-yellow-500 pb-3 mb-8">
        Bridal Packages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 md:px-9  text-center gap-3  mx-auto">
        {bridalPackages.map((pkg, index) => (
          <div
            key={index}
            className="bg-gray-100  border rounded-lg overflow-hidden shadow-md hover:shadow-yellow-500/50 transition-shadow duration-300"
          >
            <img
              src={pkg.image}
              alt={`${pkg.title} main`}
              className="w-full h-[300px] object-fit"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-yellow-400">
                {pkg.title}
              </h3>
              <p className="text-sm mt-1 text-gray-500">{pkg.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BridalPackages;
