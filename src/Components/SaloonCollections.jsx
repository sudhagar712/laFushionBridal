import React, { useState } from "react";

const tabs = ["All", "Men", "Women", "Kids"];

const services = {
  Men: [
    {
      title: "Men Haircut",
      image: "https://via.placeholder.com/300x200?text=Men+Haircut"
    },
    {
      title: "Beard Styling",
      image: "https://via.placeholder.com/300x200?text=Beard+Styling"
    }
  ],
  Women: [
    {
      title: "Women Haircut",
      image: "https://via.placeholder.com/300x200?text=Women+Haircut"
    },
    {
      title: "Hair Coloring",
      image: "https://via.placeholder.com/300x200?text=Hair+Coloring"
    }
  ],
  Kids: [
    {
      title: "Kids Haircut",
      image: "https://via.placeholder.com/300x200?text=Kids+Haircut"
    },
    {
      title: "Cute Styling",
      image: "https://via.placeholder.com/300x200?text=Cute+Styling"
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
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h2 className="text-4xl text-center font-bold mb-8 text-gray-700">
        Our Services
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full border-2 transition duration-300 font-semibold text-sm md:text-base
              ${
                activeTab === tab
                  ? "bg-yellow-400 text-white border-yellow-400"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-yellow-100"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {getDisplayedServices().map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5 flex flex-col items-center justify-between">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-full font-medium transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabServiceComponent;
