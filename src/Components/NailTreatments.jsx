import React from "react";
import nailImage from "../assets/images/nail.jpeg"; 

const treatments = [
  {
    title: "Manicure",
    description: "Elemental tempus getas"
  },
  {
    title: "Nail Clippers",
    description: "Quality products, customized services"
  },
  {
    title: "Manicure & Pedicure",
    description: "Premium quality nail polishes"
  },
  {
    title: "Hand/nail Moisturizer",
    description: "Rejuvenating hand or foot massage"
  },
  {
    title: "Nail Art",
    description: "Vibrant colors, finishes"
  }
];

const NailTreatments = () => {
  return (
    <section className="md:py-10 md:px-5 mb-5 py-4 px-0">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="md:w-1/2 ">
          <img
            src={nailImage}
            alt="Nail Treatments"
            className="rounded-lg w-full h-[500px] md:h-[100vh] object-fit md:object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-sm text-rose-400 font-semibold mb-2">
            Nail & Hand Care
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Nails Treatments & Prices
          </h2>

          <ul className="space-y-4 p-5">
            {treatments.map((item, index) => (
              <li key={index}>
                <div className="flex justify-between items-center border-dotted border-b border-rose-300 pb-1">
                  <div>
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
               
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NailTreatments;
