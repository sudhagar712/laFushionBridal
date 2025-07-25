import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import hair4 from "../assets/images/angelvd.mp4";
import hair5 from "../assets/images/bridewed2.mp4";
import hair6 from "../assets/images/ban1.mp4";
import hair7 from "../assets/images/spanew.mp4";
import hair8 from "../assets/images/hande.mp4";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Bridal MakeUp",
    description:
      "Magnis dis parturient montes nascetur ridiculus mus mauris vitae.",
    video: hair5,
    shop: "Pondicherry"
  },
  {
    title: "Saloon",
    description:
      "Magnis dis parturient montes nascetur ridiculus mus mauris vitae.",
    video: hair6,
    shop: "Pondicherry"
  },
  {
    title: "Bridal Makeup",
    description:
      "Magnis dis parturient montes nascetur ridiculus mus mauris vitae.",
    video: hair4,
    shop: "Pondicherry"
  },
  {
    title: "Traditional Bridal Makeup",
    description:
      "Magnis dis parturient montes nascetur ridiculus mus mauris vitae.",
    video: hair8,
    shop: "Pondicherry"
  },

  {
    title: "spa",
    description:
      "Magnis dis parturient montes nascetur ridiculus mus mauris vitae.",
    video: hair7,
    shop: "Pondicherry"
  }
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setLoading(true);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setLoading(true);
  };

  const { title, video, shop } = slides[current];

  return (
    <section className="relative w-full md:h-[100vh] h-[40vh] overflow-hidden ">
      {/* Video background */}
      <div className="absolute inset-0 bg-black  w-full h-full z-10 mix-blend-multiply">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-10 backdrop-brightness-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
          </div>
        )}
        <video
          key={video}
          className="w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlayThrough={() => setLoading(false)}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/60 to-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 mt-4   flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* <h1 className="text-[13px] sm:text-4xl md:text-3xl  text-white font-serif  mb-2">
          Welcome To laFusion Bridal Studio
        </h1> */}
        {/* <div className=" mb-4">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[100px] md:w-[100%] md:h-[150px] rounded-full " />
          </Link>
        </div> */}

        <h1 className="text-[16px] sm:text-3xl md:text-7xl text-white  md:border-2 border-white md:px-3 md:p-3  font-serif  mb-2">
          {title}
        </h1>
        <p className="max-w-2xl mx-auto text-[12px] md:text-[15px] mb-5">
          {shop}
        </p>
        <a href="tel:+919003545353">
          <button className="border-2 border-white bg-yellow-400  py-2    px-5  text-[10px] md:text-[18px]  transition">
            <span>Book an Appointment</span>
          </button>
        </a>
      </div>

      {/* Controls - Hidden on mobile screens */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-5 bottom-8 text-white z-20 text-2xl"
        aria-label="Previous Slide"
      >
        <FiArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-5 bottom-8 text-white z-20 text-2xl"
        aria-label="Next Slide"
      >
        <FiArrowRight />
      </button>
    </section>
  );
};

export default Banner;
