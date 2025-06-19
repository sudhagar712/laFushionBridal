import React from 'react'
import saloonVideo from "../assets/images/mdbd.mp4"; 
import { IoArrowUndoCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import MehndiDesignSection from '../Components/MehndiDesignSection';
import MehandiGalleryModal from '../Components/MehandiGalleryModal';

const Mehandi = () => {
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
            Mehandi Collections
          </h1>
          <Link to="/">
            <IoArrowUndoCircleOutline className="text-4xl text-white" />
          </Link>
        </div>
      </div>


      <MehndiDesignSection />
      <MehandiGalleryModal/>
    </>
  );
}

export default Mehandi
