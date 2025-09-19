import React from "react";
import owner from "../assets/images/owner.jpg";
import StatsSection from "../Components/StatsSection";
import WhyChooseUs from "../Components/WhyChooseUs";
import { Link } from "react-router-dom";


const AboutPage = () => {
  return (
    <>
      <div className="bg-pink-200 ">
        <div className=" h-[20vh ]"></div>

        <div className="md:flex ">
          <div className="md:w-1/2 w-full ">
            <img src={owner} alt="" className="  " />
          </div>
          <div className="md:w-1/2 flex flex-col    justify-center items-center ">
            <h1 className="font-bold text-4xl  mt-4 md:text-5xl ">ABOUTUS</h1>
            <span className="text-white mt-3 text-3xl  ">
              <em>Lakshmi P</em>
            </span>
            <button className="bg-yellow-400 px-10  border-2 p-2 py-3 rounded-md shadow-xl mt-3 mb-10 border-white">
              Lets Connect
            </button>
          </div>
        </div>
      </div>

      <StatsSection />
      <WhyChooseUs />
    </>
  );
};

export default AboutPage;
