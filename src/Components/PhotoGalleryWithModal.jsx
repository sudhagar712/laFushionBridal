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

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

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

  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="py-5 mt-5">
      <div className="text-center mb-10">
        <h3
          className="text-6xl text-yellow-300 font-[Great Vibes] mb-2"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Our Latest Collections
        </h3>
      </div>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300"
            onClick={() => openModal(img)}
          >
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal View */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition duration-300"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-[90%] mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Icon */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full p-2 text-2xl z-50"
              aria-label="Close Modal"
            >
              &times;
            </button>

            {/* Enlarged Image */}
            <img
              src={activeImg}
              alt="Enlarged view"
              className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 transform scale-100 hover:scale-105"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGalleryWithModal;
