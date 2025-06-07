import React, { useState } from "react";
import { Link } from "react-router-dom";
import menhaircut from "../assets/images/menhaircut.mp4";
import menbeard from "../assets/images/menbeard.mp4";
import women1 from "../assets/images/womencut.mp4";
import women2 from "../assets/images/womencut2.mp4";
import kids1 from "../assets/images/kidscut.mp4";
import kids2 from "../assets/images/haircut.mp4";




const tabs = ["All", "Men", "Women", "Kids"];

const services = {
  Men: [
    {
      title: "Men Haircut",
      video: menhaircut
    },
    {
      title: "Beard Styling",
      video: menbeard
    }
  ],
  Women: [
    {
      title: "Women Haircut",
      video: women1
    },
    {
      title: "Hair Coloring",
      video: women2
    }
  ],
  Kids: [
    {
      title: "Kids Haircut",
      video: kids1
    },
    {
      title: "Cute Styling",
      video: kids2
    }
  ]
};

const TabServiceComponent = () => {
  const [activeTab, setActiveTab] = useState("All");

  const getDisplayedServices = () => {
    if (activeTab === "All") {
      return [...services.Men, ...services.Women, ...services.Kids];
    }
    return services[activeTab];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white py-16 px-4">
      <h2 className="text-5xl text-center font-extrabold mb-14 text-gray-800">
        Our Services
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full border-2 transition duration-300 font-semibold text-sm md:text-base ${
              activeTab === tab
                ? "bg-yellow-400 text-white border-yellow-400 shadow"
                : "bg-white text-gray-700 border-gray-300 hover:bg-yellow-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {getDisplayedServices().map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 group"
          >
            <div className="overflow-hidden relative rounded-t-3xl">
              <video
                src={service.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[22rem] object-cover transform group-hover:scale-105 transition duration-500 rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition" />
            </div>
            <div className="p-8 backdrop-blur-lg bg-white bg-opacity-90 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-5">
                {service.title}
              </h3>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabServiceComponent;
