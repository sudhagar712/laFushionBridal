import React from "react";
import oilmassage from "../assets/images/oilmassage1.webp"
import GelMassage from "../assets/images/gelmassage.jpg";
import PowderMassage from "../assets/images/powermassage.jpeg";
import CreamMassage from "../assets/images/creammassage.webp";
import RelaxationMassage from "../assets/images/sedishmassage2.jpg";


const services = [
  {
    title: "Oil Massage",
    description:
      "Indulge in pure relaxation with our Oil Massage at Relax Massage Spa. Our therapists use a blend of rich oils to soothe your body, melt away stress, and enhance circulation for a truly rejuvenating experience. Book your Oil Massage appointment today.",
    image: oilmassage
  },
  

 
 
 
  {
    title: "Gel Massage",
    description:
      "Indulge in the luxurious sensation of our Gel Massage at Relax Massage Spa. Our specially formulated gel enhances glide and comfort, promoting deep relaxation and skin hydration.",
    image: GelMassage
  },
  {
    title: "Powder Massage",
    description:
      "Experience the gentle touch of our Powder Massage at Relax Massage Spa. This dry massage technique promotes detoxification and revitalizes tired skin, offering a refreshing alternative to traditional massages.",
    image: PowderMassage
  },
  {
    title: "Cream Massage",
    description:
      "Indulge in softness with our Cream Massage at Relax Massage Spa. Our therapists use rich massage creams to nourish your skin while easing tension and fatigue.",
    image: CreamMassage
  },
  
  {
    title: "Relaxation Massage",
    description:
      "Unwind and relax with our Relaxation Massage at Relax Massage Spa. Designed to relieve stress, enhance sleep, and promote total body wellness.",
    image:RelaxationMassage
  }
];

const MassageServices = () => {
  return (
    <div className="py-10 px-4 md:px-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        Our Services
      </h2>

      <div className="grid grid-cols-1  lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-green-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {service.description}
              </p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MassageServices;
