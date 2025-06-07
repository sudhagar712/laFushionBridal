import React from "react";
import oilmassage from "../assets/images/oilmassage1.webp"
import swedish from "../assets/images/sedishmassage2.jpg";
import ayurvedi from "../assets/images/ayuirvedic3.webp";
import Aroma from "../assets/images/aroma4.webp";
import ThaiMassage from "../assets/images/thaimassage4.webp";
import DryMassage from "../assets/images/drymassage.jpg";
import GelMassage from "../assets/images/gelmassage.jpg";
import PowderMassage from "../assets/images/powermassage.jpeg";
import CreamMassage from "../assets/images/creammassage.webp";
import KeralaMassage from "../assets/images/kerelamassage.jpeg";
import CouplesMassage from "../assets/images/couplemassage.jpg";
import RelaxationMassage from "../assets/images/sedishmassage2.jpg";


const services = [
  {
    title: "Oil Massage",
    description:
      "Indulge in pure relaxation with our Oil Massage at Relax Massage Spa. Our therapists use a blend of rich oils to soothe your body, melt away stress, and enhance circulation for a truly rejuvenating experience. Book your Oil Massage appointment today.",
    image: oilmassage
  },
  {
    title: "Swedish Massage",
    description:
      "Relax and unwind with our Swedish Massage at Relax Massage Spa. Designed to gently ease muscle tension, improve flexibility, and boost circulation, this popular massage technique offers a perfect balance of relaxation and rejuvenation.",
    image: swedish
  },
  {
    title: "Ayurvedic Massage",
    description:
      "Experience the healing traditions of Ayurvedic Massage at Relax Massage Spa. This ancient practice combines herbal oils and rhythmic strokes to restore balance and vitality. Book your Ayurvedic Massage appointment today.",
    image: ayurvedi
  },
  {
    title: "Aroma Massage",
    description:
      "Experience pure bliss and relaxation with our Aroma Massage at Relax Massage Spa. This gentle massage uses essential oils to uplift and calm the mind, ease muscle tension, and promote emotional well-being.",
    image: Aroma
  },
  {
    title: "Thai Massage",
    description:
      "Discover the invigorating power of Thai Massage at Relax Massage Spa. This therapy combines stretching, acupressure, and gentle manipulation techniques to restore balance and increase flexibility.",
    image: ThaiMassage
  },
  {
    title: "Dry Massage",
    description:
      "Experience the revitalizing strength of our Dry Massage at Relax Massage Spa. This oil-free massage technique improves blood circulation, reduces fatigue, and soothes sore muscles.",
    image: DryMassage
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
    title: "Kerala Massage",
    description:
      "Soothe your senses with our Kerala Massage at Relax Massage Spa. Using traditional Indian oils and techniques, this massage promotes relaxation and detoxification.",
    image:KeralaMassage
  },
  {
    title: "Couples Massage",
    description:
      "Share a blissful relaxation experience with our Couples Massage at Relax Massage Spa. Enjoy side-by-side treatments in a tranquil setting, perfect for romantic getaways or bonding time.",
    image:CouplesMassage
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-green-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {service.description}
              </p>
              <button className="bg-yellow-400 text-white px-4 py-2 rounded  text-sm">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MassageServices;
