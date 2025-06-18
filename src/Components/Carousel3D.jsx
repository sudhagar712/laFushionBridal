import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ser1 from "../assets/images/service1spa.avif";
import ser2 from "../assets/images/servicesaloonmen.jpg";
import ser3 from "../assets/images/servicewomensaloon.avif";
import ser4 from "../assets/images/bridemakeserv.webp";
import ser5 from "../assets/images/bride2.webp";

const slides = [
  { title: "Spa Services", image: ser1 },
  { title: "Men Saloon Services", image: ser2 },
  { title: "Women Saloon Services", image: ser3 },
  { title: "Bride Makeup Services", image: ser4 },
  { title: "Bridal Styling", image: ser5 }
];

const Carousel3D = () => {
  return (
    <section className="relative md:py-20 h-[550px] md:h-[900px]  mt-[50px]  overflow-hidden">
      <h2 className="text-yellow-400  text-3xl md:text-6xl font-cursive text-center mb-12 drop-shadow-md">
        Fav Collection
      </h2>
      <div className="max-w-7xl p-5   mx-auto relative">
        <Swiper
          modules={[Pagination, EffectCoverflow]}
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
            depth: 300,
            modifier: 1,
            slideShadows: true
          }}
          pagination={{ clickable: true }}
          className="carousel-3D-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-md md:h-[400px]  overflow-hidden shadow-lg bg-white transition-all duration-300 hover:scale-[1.01]">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-10 text-center">
                  <h3 className="md:text-2xl sm:text-xl text-yellow-400 font-semibold">
                    {slide.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute  left-0 w-full h-[200px] whitespace-nowrap z-0 pointer-events-none">
        <div className="animate-marquee inline-block">
          <h2 className="text-[20vw] sm:text-[12vw] md:text-[10vw] font-extrabold text-gray-300 uppercase">
            Good Moments Showcased &nbsp; Good Moments Showcased &nbsp; Good
            Moments Showcased
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Carousel3D;
