import React from "react";
import saloonVideo from "../assets/images/saloonbanner.mp4"; 
import TabServiceComponent from "../Components/SaloonCollections";

const SaloonPage = () => {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={saloonVideo}
          autoPlay
          muted
          loop
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-widest drop-shadow-lg">
            Saloon
          </h1>
        </div>
      </div>
      <TabServiceComponent />
    </>
  );
};

export default SaloonPage;
