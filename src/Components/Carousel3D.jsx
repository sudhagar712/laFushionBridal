import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Lorem ipsum dolor",
    role: "Web Designer",
    image:
      "https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450",
    description: "Lorem ipsum dolor"
  },
  {
    title: "Lorem ipsum dolor",
    role: "Web Designer",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450"
  },
  {
    title: "Lorem ipsum dolor",
    role: "Web Designer",
    image:
      "https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450"
  },
  {
    title: "Lorem ipsum dolor",
    role: "Web Designer",
    image:
      "https://images.pexels.com/photos/8422523/pexels-photo-8422523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450"
  },
  {
    title: "Lorem ipsum dolor",
    role: "Web Designer",
    image:
      "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450"
  }
];

const Carousel3D = () => {
  return (
    <section className="my-10 py-5  px-4">
      <h2 className="text-3xl md:text-5xl mt-10 text-center font-bold text-yellow-400 mb-8">
        Our Services
      </h2>
      <div className="max-w-7xl mb-5 mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 350,
            modifier: 1,
            slideShadows: true
          }}
          navigation
          pagination={{ clickable: true }}
          className="carousel-3D-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg overflow-hidden shadow-md bg-white">
                <div className="overflow-hidden aspect-video">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold">{slide.title}</h3>
                  <span className="text-red-500 block mt-1">{slide.role}</span>
                  {slide.description && (
                    <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                      {slide.description}
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel3D;
