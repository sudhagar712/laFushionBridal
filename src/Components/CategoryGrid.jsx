import React from "react";

import cat2 from "../assets/images/bridalmakeup.mp4";
import cat3 from "../assets/images/spanew.mp4";
import cat4 from "../assets/images/haircut.mp4";
import cat5 from "../assets/images/makeupvd.mp4";
import cat6 from "../assets/images/megavd.mp4";

import { Link } from "react-router-dom";

const categories = [
  {
    title: "Bride Makeup",
    video: cat2,
    link: "/services/bridalcollections"
  },
  {
    title: "Mehandi",
    video: cat6,
    link: ""
  },
  {
    title: "Beauty Makeup",
    video: cat5,
    link: "/Makeup"
  },
  {
    title: "Spa",
    video: cat3,
    link: "/services/spa"
  },
  {
    title: "Haircut",
    video: cat4,
    link: "/services/saloon"
  }
];

const CategoryGrid = () => {
  return (
    <>
      <div className="text-center">
        <h3
          className="text-3xl md:text-5xl mb-10 text-yellow-300 font-[Great Vibes]"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Our Services
        </h3>
      </div>

      <div className="grid grid-cols-1 px-3 md:px-[20px] md:grid-cols-3 gap-5">
        {categories.map((category, index) => (
          <Link to={category.link} key={index}>
            <div className="relative group h-[700px] overflow-hidden cursor-pointer rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
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
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoryGrid;
