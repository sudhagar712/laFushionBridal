import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import hair4 from "../assets/images/bridewed.mp4";
import hair5 from "../assets/images/bridewed2.mp4";
import hair6 from "../assets/images/saloon1.mp4";



const slides = [
  {
    title: "Bride Makeup",
    description:
      "Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Duis at tellus at urna CALISTA's mattis. Viverra tellus in hac habitasse platea dictumst.",
    video: hair4,
    shop: "Pondicherry"
  },
  {
    title: "Bridal MakeUp",
    description:
      "Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Duis at tellus at urna CALISTA's mattis. Viverra tellus in hac habitasse platea dictumst.",
    video: hair5,
    shop: "Pondicherry"
  },
  {
    title: "Saloon SPA",
    description:
      "Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Duis at tellus at urna CALISTA's mattis. Viverra tellus in hac habitasse platea dictumst.",
    video: hair6,
    shop: "Pondicherry"
  }
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const { title, video, shop } = slides[current];

  return (
    <section className="relative w-full md:h-screen h-[370px]  overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Slide Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-[15px] sm:text-4xl md:text-7xl text-yellow-500 font-serif font-bold mb-6">
          {title}
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl mb-10">
          Shop : 📍{shop}
        </p>
        <div className="flex gap-5">
          <a href="tel:+919003545353">
            <button className="border mt-4 py-2 border-yellow-500 px-4 uppercase text-[10px] md:text-[18px] bg-yellow-500 transition">
              Book an Appointement
            </button>
          </a>
        
        </div>
      </div>

      {/* Navigation Icons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 bottom-8 text-white z-20 text-2xl"
        aria-label="Previous Slide"
      >
        <FiArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 bottom-8 text-white z-20 text-2xl"
        aria-label="Next Slide"
      >
        <FiArrowRight />
      </button>
    </section>
  );
};

export default Banner;
