import React from "react";
import packageVideo from "../assets/images/makeupbanner2.mp4"; 
import PackageSection from "../Components/MakeupComponents/PackageSection";
import NailTreatments from "../Components/NailTreatments";


const Makeup = () => {

  return (
    <>
      <div className=" bg-blue-100">
        <div className="flex flex-col md:flex-row items-center gap-8 min-h-[400px]">
          {/* Left Side - Video */}
          <div className="md:w-1/2">
            <video
              src={packageVideo}
              className=" shadow-lg w-full h-[300px] md:h-[670px] object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2  text-center md:text-left">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              Bridal Makeup Packages
            </h2>
            <p className="text-gray-700 mb-4">
              Choose from our expertly curated makeup packages tailored for
              brides, parties, and special occasions. Our professionals use
              top-quality products for a flawless finish that lasts.
            </p>
            <ul className="text-gray-600 list-disc pl-5 text-left">
              <li>HD Bridal Makeup – ₹10,000</li>
              <li>Party Makeup – ₹3,000</li>
              <li>Engagement Makeup – ₹5,000</li>
              <li>Hair Styling Included</li>
            </ul>
            <button className="mt-5 px-5 py-2 bg-yellow-300 text-white rounded hover:bg-yellow-400">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* package price */}

      <PackageSection />
      <hr />
      <NailTreatments />
      <hr />
    </>
  );
};

export default Makeup;
