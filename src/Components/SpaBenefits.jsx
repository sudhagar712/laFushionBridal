import React from "react";
import {
  GiHerbsBundle,
  GiHeartBeats,
  GiMeditation,
  GiFairyWings
} from "react-icons/gi";
import spabenifts from "../assets/images/spabenfits.jpeg"



const benefits = [
  {
    title: "Advanced detox",
    description:
      "Lorem ipsum dolor sit amet, conse tetur adipiscing elit, seddo eiusmod.",
    icon: GiHerbsBundle
  },
  {
    title: "Lower Blood Pressure",
    description:
      "Lorem ipsum dolor sit amet, conse tetur adipiscing elit, seddo eiusmod.",
    icon: GiHeartBeats
  },
  {
    title: "Reduces Stress",
    description:
      "Lorem ipsum dolor sit amet, conse tetur adipiscing elit, seddo eiusmod.",
    icon: GiMeditation
  },
  {
    title: "Healthy Skin",
    description:
      "Lorem ipsum dolor sit amet, conse tetur adipiscing elit, seddo eiusmod.",
    icon: GiFairyWings
  }
];

const SpaBenefits = () => {
  return (
    <>
      <div className="relative overflow-hidden h-[100px] mb-10">
        <div className="absolute top-0 left-0 w-full whitespace-nowrap z-0 pointer-events-none">
          <div className="animate-marquee inline-block">
            <h2 className="text-[20vw] sm:text-[12vw] md:text-[10vw] font-extrabold text-gray-200 uppercase">
              Good Moments Showcased &nbsp; Good Moments Showcased &nbsp; Good
              Moments Showcased
            </h2>
          </div>
        </div>
      </div>
      <section
        className="relative bg-cover min-h-screen md:h-[700px] bg-center py-16 px-4  text-white"
        style={{
          backgroundImage: `url(${spabenifts})`
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-serif  font-bold text-yellow-400  leading-snug">
              Benefits of spa for your skin & body
            </h2>
          </div>

          {/* Icon Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12  text-center lg:text-left">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center lg:items-start"
                >
                  <Icon className="text-9xl text-white mb-4" />
                  <h3 className="text-xl text-yellow-400 font-semibold">{benefit.title}</h3>
                  <p className="text-sm max-w-xs">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SpaBenefits;
