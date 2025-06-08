import React from "react";
import saloonVideo from "../assets/images/saloonbanner.mp4"; 
import TabServiceComponent from "../Components/SaloonCollections";
import { IoArrowUndoCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SaloonPage = () => {
  return (
    <>
      <div className="relative  w-full md:min-h-screen h-[50vh]  overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={saloonVideo}
          autoPlay
          muted
          loop
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3">
          <h1 className="text-xl md:text-7xl font-bold border-2 border-white p-2 text-white uppercase tracking-widest drop-shadow-lg">
            Saloon
          </h1>
          <Link to="/">
            <IoArrowUndoCircleOutline className="text-4xl text-white" />
          </Link>
        </div>
      </div>
      <TabServiceComponent />
    </>
  );
};

export default SaloonPage;
