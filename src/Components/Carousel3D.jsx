import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ser1 from "../assets/images/service1spa.avif"
import ser2 from "../assets/images/servicesaloonmen.jpg";
import ser3 from "../assets/images/servicewomensaloon.avif";
import ser4 from "../assets/images/bridemakeserv.webp";
import ser5 from "../assets/images/bride2.webp";


const slides = [
  {
    title: "Spa Services",
   
    image:
    ser1,
  
  },
  {
    title: "Men Saloon services",
   
    image:
      ser2
  },
  {
    title: "Women Saloon Services",
   
    image:
     ser3
  },
  {
    title: "Bride Makeup services",
   
    image:
     ser4
  },
  {
    title: "BrideMakeup services",
   
    image:
     ser5
  }
];

const Carousel3D = () => {
  return (
    <section className="my-10 py-5  px-4">
      <h2 className="text-5xl md:text-5xl mt-10 text-center font-bold text-yellow-400 mb-8">
        Our Services
      </h2>
      <div className="max-w-9xl mb-5 mx-auto relative">
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
              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <div className="overflow-hidden aspect-video">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold">{slide.title}</h3>
                 
                
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
