import React from "react";
import owner from "../assets/images/owner.jpg";
import StatsSection from "../Components/StatsSection";
import WhyChooseUs from "../Components/WhyChooseUs";

const AboutPage = () => {
  return (
    <>
      <div className="bg-pink-600 md:bg-pink-600">
        <div className=" h-[20vh ]"></div>

        <div className="flex">
          <div className="md:w-1/2 ">
            <img
              src={owner}
              alt=""
              className=" w-[400px] h-[400px] md:w-[700px] md:h-[100vh]"
            />
          </div>
          <div className="md:w-1/2 ">
            
          </div>
        </div>
      </div>

      <StatsSection />
      <WhyChooseUs />
    </>
  );
};

export default AboutPage;
