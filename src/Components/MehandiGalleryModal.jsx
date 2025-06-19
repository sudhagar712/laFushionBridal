import React, { useState } from "react";
import gallery1 from "../assets/images/l1.png";
import gallery2 from "../assets/images/l2.jpg";
import gallery3 from "../assets/images/l3.png";
import gallery4 from "../assets/images/l4.jpg";
import gallery5 from "../assets/images/l5.jpeg";
import gallery6 from "../assets/images/l6.jpg";
import gallery7 from "../assets/images/l7.webp";
import gallery8 from "../assets/images/l8.webp";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8
];

const MehandiGalleryModal = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white py-12 px-5">
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-10">
        Mehandi Image Showcase
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img)}
            className="overflow-hidden rounded-xl shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full p-4">
            <img
              src={selectedImage}
              alt="Selected"
              className="rounded-lg w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 p-2 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};



export default MehandiGalleryModal;
;
