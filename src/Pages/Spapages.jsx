import React from "react";
import spaVideo from "../assets/images/spabanner.mp4"
import MassageServices from "../Components/MassageSpa";

const Spapages = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          src={spaVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            UniSex Spa Massage
          </h1>
        </div>
      </div>
      <MassageServices />
    </>
  );
};

export default Spapages;
