import React from "react";
import cat1 from "../assets/images/saloon1.mp4"
import cat2 from "../assets/images/bridewed.mp4";
import cat3 from "../assets/images/spalol.mp4";
import cat4 from "../assets/images/haircut.mp4";




const categories = [
  {
    title: "Saloon",
    video: cat1
  },
  {
    title: "Bride Makeup",
    video: cat2
  },
  {
    title: "Spa",
    video: cat3
  },
  {
    title: "haircut",
    video: cat4
  }
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-1 px-5  md:grid-cols-2 gap-2">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative group h-[600px] overflow-hidden cursor-pointer"
        >
          <video
            src={category.video}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
            <h2 className="text-white text-xl font-bold uppercase text-center">
              {category.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
