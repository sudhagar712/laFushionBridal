import React from "react";
import aboutVideo from "../assets/images/masterbanner.mp4";
import StatsSection from "../Components/StatsSection";
import WhyChooseUs from "../Components/WhyChooseUs";

const AboutPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-300 flex flex-col items-center ">
        <div className="max-w-9xl w-full grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Video */}
          <div className="w-full">
            <div className="relative w-full h-64 md:h-[100vh] overflow-hidden  shadow-xl">
              <video
                className="w-full h-full object-cover"
                src={aboutVideo}
                autoPlay
                muted
                loop
                playsInline
              ></video>
              <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl p-4 font-bold mb-4 text-yellow-500">
              About Our Studio
            </h2>
            <p className="px-5 text-[12px] md:text-[20px] leading-relaxed mb-4">
              At La Fusion Bridal Studio, we bring out the best in you by
              enhancing your natural beauty. With a passionate team and
              personalized service, we make every makeover a magical
              transformation.
            </p>

            {/* Working Hours */}
            <div className="px-5 mb-4">
              <h3 className="text-[14px] md:text-[18px] font-semibold text-gray-700 mb-2">
                Working Hours
              </h3>
              <ul className="text-[12px] md:text-[16px] text-gray-600 space-y-1">
                <li>Monday – Sunday: 9:00 AM – 10:00 PM</li>
              </ul>
            </div>

            {/* Booking Button */}
            <div className="px-4">
              <a
                href="https://wa.me/9003545353?text=Hello%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-6 px-6 py-2 bg-yellow-400 text-white border-2 border-white font-semibold rounded hover:bg-yellow-500 transition-all">
                  Book Appointment
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <StatsSection />
      <WhyChooseUs />
    </>
  );
};

export default AboutPage;
