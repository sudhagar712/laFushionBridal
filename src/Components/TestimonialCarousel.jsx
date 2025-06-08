import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import salonVideo from "../assets/images/happyclient.mp4"
import "@fortawesome/fontawesome-free/css/all.min.css";



const testimonials = [
  {
    text: "A great salon with excellent amenities it offers. The ambiance is delightful, and the skillful owner truly elevates the entire experience.",
    name: "Sudhagar",
    role: "Happy Client"
  },
  {
    text: "They provide very good service and its an affordable price for every hair cut and facial. Highly recommended for pondy bros.",
    name: "Thivagar",
    role: "Happy Client"
  },
  {
    text: "Ambience super 👍🏻 location 🥲 atmosphere ✅ friendliness advise with kindness... Nambi vaanga santhosama ponga 👍🏻💥🤞🏻❣️",
    name: "Revathi",
    role: "Happy Client"
  },
  {
    text: "One of the best place in Pondicherry must visit and hair cut and shave &facial…ect…..",
    name: "Sumathi",
    role: "Happy Client"
  },
  {
    text: "Best budget salon (good service & friendly staff)",
    name: "Lakshmi",
    role: "Happy Client"
  }
];

const TestimonialCarousel = () => {
  return (
    <section className="md:py-20 bg-white md:mb-10">
      <div className="text-center mb-9">
        <h3
          className="text-2xl md:text-2xl text-yellow-500 font-[Great Vibes] mb-2"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Happy Clients
        </h3>
        <div className="flex justify-center mt-4 items-center gap-2">
          <span className="w-10 h-1 bg-yellow-400 rounded"></span>
          <span className="w-8 h-1 bg-yellow-400 rounded"></span>
          <span className="w-10 h-1 bg-yellow-400 rounded"></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
        {/* Left Video Section */}
        <div className="w-full md:w-1/2 rounded overflow-hidden shadow-lg">
          <video
            className="w-full h-[600px] object-cover rounded-lg"
            src={salonVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Right Testimonial Carousel */}
        <div className="w-full md:w-1/2 ">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative bg-white  min-h-[220px] p-6 rounded shadow-2xl border-2 border-gray-300 italic pl-24">
                  <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-yellow-400 text-3xl">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="mb-4">{item.text}</p>
                  <h3 className="text-lg font-bold not-italic">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
