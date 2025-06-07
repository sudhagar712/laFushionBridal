import React from "react";
import makeupBanner from "../assets/images/makeupbanner.webp"
import PackageSection from "../Components/MakeupComponents/PackageSection";
import NailTreatments from "../Components/NailTreatments";

const Makeup = () => {
  return (
    <>
      <div className="relative w-full  md:h-[80vh] ">
        <img
          src={makeupBanner}
          alt="Makeup Banner"
          className="w-full h-full object-cover"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl ">
            Makeup Pricing Plan
          </h1>
        </div>
      </div>


      {/* package price */}

      <PackageSection/>
      <hr />
      <NailTreatments/>
      <hr />
    </>
  );
};

export default Makeup;
