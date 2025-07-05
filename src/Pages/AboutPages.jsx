import React from "react";
import owner from "../assets/images/owner.jpg";
import StatsSection from "../Components/StatsSection";
import WhyChooseUs from "../Components/WhyChooseUs";
import { Link } from "react-router-dom";


const AboutPage = () => {
  return (
    <>
      <div className="bg-gray-200 ">
        <div className=" h-[20vh ]"></div>

        <div className="md:flex ">
          <div className="md:w-1/2 w-full ">
            <img
              src={owner}
              alt=""
              className="  "
            />
          </div>
          <div className="md:w-1/2 flex flex-col    justify-center items-center ">
           

            <h1 className="font-bold text-4xl  mt-4 md:text-7xl ">ABOUTUS<br /> <span className="text-white ">Lakshmi P</span></h1>
            <button className="bg-yellow-400 border-2 p-2 py-1 mt-10 border-white">Lets Connect</button>
          </div>
        </div>
      </div>

      <StatsSection />
      <WhyChooseUs />
    </>
  );
};

export default AboutPage;
