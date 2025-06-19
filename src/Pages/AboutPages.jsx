import React from "react";
import owner from "../assets/images/owner.jpg";
import StatsSection from "../Components/StatsSection";
import WhyChooseUs from "../Components/WhyChooseUs";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const AboutPage = () => {
  return (
    <>
      <div className="bg-yellow-300 h-[130vh] md:bg-yellow-500">
        <div className=" h-[20vh ]"></div>

        <div className="md:flex ">
          <div className="md:w-1/2  w-full">
            <img
              src={owner}
              alt=""
              className=" w-[500px] h-[500px] md:w-[700px] md:h-[100vh]"
            />
          </div>
          <div className="md:w-1/2 h-[300px] flex flex-col mt-10  justify-center items-center ">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-[350px] h-[350px] object-fit  md:w-[100%] md:h-[300px] bg-black p-7 mt-[-60px]  rounded-full mb-5 md:mt-[500px]"
              />
            </Link>

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
