import React from "react";
import packageVideo from "../assets/images/makeupbanner2.mp4"; 
import PackageSection from "../Components/MakeupComponents/PackageSection";
import NailTreatments from "../Components/NailTreatments";


const Makeup = () => {

  return (
    <>
      <div className=" bg-gray-200">
        <div className="flex flex-col md:flex-row items-center gap-8 min-h-[400px]">
          {/* Left Side - Video */}
          <div className="md:w-1/2">
            <video
              src={packageVideo}
              className=" shadow-lg w-full h-[690px] md:h-[670px] object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2  text-center md:text-left p-3 px-5">
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 mb-4">
              Bridal Makeup Packages
            </h2>
            <p className="text-gray-700 mb-5 text-xl ">
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
            <a
              href="https://wa.me/919003545353?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20for%20bridal%20makeup.%20Please%20share%20the%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block px-5 py-2 bg-yellow-300 text-white rounded hover:bg-yellow-400 transition-all"
            >
              Book Appointment
            </a>
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
