import React from "react";
import cat1 from "../assets/images/saloon1.mp4"
import cat2 from "../assets/images/bridewed.mp4";
import cat3 from "../assets/images/spanew.mp4";
import cat4 from "../assets/images/haircut.mp4";




const categories = [
  {
    title: "UniSex Saloon",
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
    <>
      <div className="text-center mb-10">
        <h3
          className="text-3xl md:text-6xl text-yellow-300 font-[Great Vibes] mb-2"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Our Services
        </h3>
      </div>
      <div className="grid grid-cols-1 px-3 md:px-10 md:grid-cols-4 gap-5">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group h-[500px] overflow-hidden cursor-pointer"
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
    </>
  );
};

export default CategoryGrid;
