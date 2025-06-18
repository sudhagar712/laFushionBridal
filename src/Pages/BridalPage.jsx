import React from "react";

import bridal2 from "../assets/images/bridalvd.mp4";
import PhotoGalleryWithModal from "../Components/PhotoGalleryWithModal";
import { Link } from "react-router-dom";
import { IoArrowUndoCircleOutline } from "react-icons/io5";

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
            className="relative w-full  h-[300px]  md:min-h-screen overflow-hidden mt-6 first:mt-0"
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
              <h2 className="text-white text-xl border-2 border-white p-2  md:text-4xl font-bold text-center">
                {video.title}
              </h2>
              <Link to="/">
                <IoArrowUndoCircleOutline className="text-4xl text-white" />
              </Link>
            </div>
          </section>
        ))}
      </div>

      <PhotoGalleryWithModal />
    </div>
  );
};

export default BridalPage;
