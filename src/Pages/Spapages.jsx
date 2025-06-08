import React from "react";
import spaVideo from "../assets/images/spabanner.mp4"
import MassageServices from "../Components/MassageSpa";
import { Link } from "react-router-dom";
import { IoArrowUndoCircleOutline } from "react-icons/io5";


const Spapages = () => {
  return (
    <>
      <div className="relative w-full md:min-h-screen h-[50vh]  overflow-hidden">
        {/* Background Video */}
        <video
          src={spaVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full  object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex gap-3 items-center justify-center">
          <h1 className="text-white text-xl md:text-6xl font-bold border-2 border-white p-2 text-center">
            Spa Massage
          </h1>
          <div>
            <Link to="/">
              <IoArrowUndoCircleOutline className="text-4xl text-white" />
            </Link>
          </div>
        </div>
      </div>
      <MassageServices />
    </>
  );
};

export default Spapages;
