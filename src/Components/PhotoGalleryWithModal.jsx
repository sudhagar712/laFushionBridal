import React, { useState, useEffect } from "react";

// Import your images
import img1 from "../assets/images/photos1.jpg";
import img2 from "../assets/images/photos2.jpg";
import img3 from "../assets/images/photos3.jpg";
import img4 from "../assets/images/photos4.jpg";
import img5 from "../assets/images/photos5.jpg";
import img6 from "../assets/images/photos6.jpeg";
import img7 from "../assets/images/photos7.webp";
import img8 from "../assets/images/photos8.jpg";
import img9 from "../assets/images/photos9.jpg";

// Array of image + layout spans (responsive)
const images = [
  { src: img1, colSpan: "col-span-2", rowSpan: "row-span-2" },
  { src: img2, colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: img3, colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: img4, colSpan: "col-span-2", rowSpan: "row-span-1" },
  { src: img5, colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: img6, colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: img7, colSpan: "col-span-2", rowSpan: "row-span-2" },
  { src: img8, colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: img9, colSpan: "col-span-1", rowSpan: "row-span-1" },
];

const PhotoGalleryWithModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImg, setActiveImg] = useState(null);

  const openModal = (img) => {
    setActiveImg(img);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveImg(null);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="py-8 md:p-10 md:px-10">
      {/* Heading */}

      <div className="relative overflow-hidden h-[200px] mb-10">
        <div className="absolute top-0 left-0 w-full whitespace-nowrap z-0 pointer-events-none">
          <div className="animate-marquee inline-block">
            <h2 className="text-[20vw] sm:text-[12vw] md:text-[10vw] font-extrabold text-gray-200 uppercase">
              Good Moments Showcased &nbsp; Good Moments Showcased &nbsp; Good
              Moments Showcased
            </h2>
          </div>
        </div>
      </div>

      <div className="text-center mb-10">
        <h3
          className="text-3xl text-yellow-400 font-[Great Vibes]"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Our Latest Collections
        </h3>

        <p className="text-[12px] md:p-10 p-4 md:text-[18px] mt-3  flex justify-center  ">
          We capture those special moments you would like to live a thousand
          times over, the look of love, the cheer of joy, we make sure every
          moment of your day is captured perfectly.
        </p>
      </div>

      {/* Masonry Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1  auto-rows-[-900px] md:auto-rows-[400px]">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`${img.colSpan} ${img.rowSpan} cursor-pointer  overflow-hidden rounded-lg shadow hover:shadow-xl transition duration-300`}
            onClick={() => openModal(img.src)}
          >
            <img
              src={img.src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-full  object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal View */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full p-2 text-3xl z-50"
              aria-label="Close Modal"
            >
              &times;
            </button>
            <img
              src={activeImg}
              alt="Enlarged view"
              className="w-full  h-auto rounded-lg shadow-lg transition-transform duration-300 transform scale-100 hover:scale-105"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGalleryWithModal;
