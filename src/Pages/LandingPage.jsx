import React from "react";
import Banner from "../Components/Banner";
import PhotographySection from "../Components/PhotographySection";



import CategoryGrid from "../Components/CategoryGrid";
import Carousel3D from "../Components/Carousel3D";

import PhotoGalleryWithModal from "../Components/PhotoGalleryWithModal";

import TestimonialCarousel from "../Components/TestimonialCarousel";
import FaqAccordion from "../Components/FaqAccordion";
import ContactForm from "./ContactPage";
import NailTreatments from "../Components/NailTreatments";

import AboutPage from "./AboutPages";
import BridalPackages from "../Components/BridalPackages";

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <PhotographySection />

      <CategoryGrid />
      
       <BridalPackages/>

      <PhotoGalleryWithModal />
      <Carousel3D />
      <NailTreatments />
      {/* <SpaBenefits /> */}
      <hr />

   
      <TestimonialCarousel />
      <FaqAccordion />

      <hr />
      <ContactForm />

      {/* <HeroWithImageStrip/> */}
    
    </div>
  );
};

export default LandingPage;
