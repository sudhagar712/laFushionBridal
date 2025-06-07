import React from "react";

import bridal2 from "../assets/images/bridewed2.mp4";
import PhotoGalleryWithModal from "../Components/PhotoGalleryWithModal";

const videos = [
 
  {
    src: bridal2,
    title: "Bridal Collections"
  }
];

const BridalPage = () => {
  return (
    <div>
      <div className="w-full">
        {videos.map((video, index) => (
          <section
            key={index}
            className="relative w-full h-[80vh] overflow-hidden mt-6 first:mt-0"
          >
            <video
              className="w-full h-full object-cover"
              src={video.src}
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-4xl md:text-5xl font-bold text-center">
                {video.title}
              </h2>
            </div>
          </section>
        ))}
      </div>

      <PhotoGalleryWithModal/>
    </div>
  );
};

export default BridalPage;
