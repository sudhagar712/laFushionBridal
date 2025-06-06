import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "A great salon with excellent amenities it offers. The ambiance is delightful, and the skillful owner truly elevates the entire experience. His expertise is undoubtedly the key to the salon's success. Highly recommended!",
    name: "Sudhagar",
    role: "Happy Client"
  },
  {
    text: "They provide very good service and its an affordable price for every hair cut and facial. Highly recommended for pondy bros.",
    name: "Thivagar",
    role: "Happy Client"
  },
  {
    text: "Ambience super 👍🏻 location 🥲 atmosphere 🌟Very good service and satisfaction ✅ friendliness advise with kindness... Nambi vaanga santhosama ponga 👍🏻💥🤞🏻❣️",
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
    <section className="py-20 bg-white">
      <div className="text-center mb-12">
        <h3
          className="text-2xl md:text-4xl text-yellow-300 font-[Great Vibes] mb-2"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Happy Clients
        </h3>
        <div className="flex justify-center mt-4 items-center gap-2">
          <span className="w-10 h-1 bg-yellow-400 rounded"></span>
          <span className="w-8 h-1 bg-black rounded"></span>
          <span className="w-10 h-1 bg-yellow-400 rounded"></span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative bg-yellow-100 h-[300px] p-6 rounded shadow-md italic pl-24">
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-green-600 text-2xl">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="mb-4">{item.text}</p>
                <h3 className="text-lg font-bold not-italic">{item.name}</h3>
             
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
