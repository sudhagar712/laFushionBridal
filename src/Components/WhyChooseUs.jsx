import React from "react";
import { FaTools, FaHome, FaUserFriends } from "react-icons/fa";
import aboutVideo from "../assets/images/nailvideo.mp4"; 

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f8f2ef] py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <h4 className="text-amber-700 font-semibold tracking-wide flex items-center gap-2">
            <span>Why Choose Us</span>
            <span className="text-xl transform rotate-[-45deg]">➤</span>
          </h4>

          <h2 className="text-4xl font-bold text-black leading-tight">
            We Have <span className="text-amber-800">5+ Years</span> Of
            Experience <br /> With Nail Style.
          </h2>

          <p className="text-gray-600">
            We prioritize the cleanliness and comfort of our clients, ensuring a
            hygienic and relaxing environment throughout your visit. Our salon
            adheres to strict sanitization protocols, and all our tools.
          </p>

          <div className="space-y-4">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <FaTools className="text-amber-700 text-2xl mt-1" />
              <div>
                <h5 className="font-bold text-black">
                  Brand Nail Art Equipment
                </h5>
                <p className="text-gray-600 text-sm">
                  From classic manicures and pedicures to intricate nail art and
                  personalized nail extensions
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <FaHome className="text-amber-700 text-2xl mt-1" />
              <div>
                <h5 className="font-bold text-black">Best Place</h5>
                <p className="text-gray-600 text-sm">
                  That's why we only use premium quality nail polishes, gel, and
                  other nail products from trusted brands.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <FaUserFriends className="text-amber-700 text-2xl mt-1" />
              <div>
                <h5 className="font-bold text-black">Special Support</h5>
                <p className="text-gray-600 text-sm">
                  We provide attentive care and expert support to ensure your
                  nails always look their best.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Video */}
        <div className="rounded-tl-[100px] overflow-hidden">
          <video
            src={aboutVideo}
            autoPlay
            muted
            loop
            className="w-full h-[600px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
