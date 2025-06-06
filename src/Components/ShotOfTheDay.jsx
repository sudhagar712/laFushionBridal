import React from "react";
import bride1 from "../assets/images/bride1.jpg"
import bride2 from "../assets/images/bride2.webp";
import bride3 from "../assets/images/bride3.jpeg";
import bride4 from "../assets/images/photos5.jpg";



const shots = [
  {
    title: "Love In Focus",
    image: bride1
  },
  {
    title: "Forever Captured",
    image: bride2
  },
  {
    title: "Timeless Romance",
    image: bride3
  },
  {
    title: "Timeless Romance",
    image: bride4
  }
];

const ShotOfTheDay = () => {
  return (
    <section className="py-4 md:flex md:mt-[70px] md:mb-[90px] ">
      <h2 className="text-yellow-400 md:flex md:items-center  mt-6  text-5xl md:text-7xl font-cursive text-center mb-12 drop-shadow-md">
        Shot Of The Day
      </h2>

      <div className="max-w-9xl   grid gap-3 sm:grid-cols-4  place-items-center">
        {shots.map((shot, index) => (
          <div key={index} className="text-center">
            <img
              src={shot.image}
              alt={shot.title}
              className="rounded-2xl w-72 h-80 object-cover mx-auto shadow-lg"
            />
            <p className="mt-4 text-white text-lg md:text-xl font-cursive">
              {shot.title}
            </p>
          </div>
        ))}
      </div>
     
    </section>
  );
};

export default ShotOfTheDay;
