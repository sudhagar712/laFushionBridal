import React from 'react'
import Banner from '../Components/Banner'
import PhotographySection from '../Components/PhotographySection'
import SpaBenefits from '../Components/SpaBenefits'
import BackToTop from '../Components/BackToTop'

import CategoryGrid from '../Components/CategoryGrid'
import Carousel3D from '../Components/Carousel3D'
import WhatsAppButton from '../Components/WhatsAppButton'
import PhotoGalleryWithModal from '../Components/PhotoGalleryWithModal'

import TestimonialCarousel from '../Components/TestimonialCarousel'
import FaqAccordion from '../Components/FaqAccordion'
import ContactForm from './ContactPage'
import NailTreatments from '../Components/NailTreatments'
import StatsSection from '../Components/StatsSection'


const LandingPage = () => {
  return (
    <div>
      <Banner />
      <PhotographySection />
      <CategoryGrid />
      <StatsSection/>
      <PhotoGalleryWithModal />
      {/* <Carousel3D /> */}
      <NailTreatments />
      {/* <SpaBenefits /> */}
      <hr />

      {/* <ShotOfTheDay /> */}
      <TestimonialCarousel />
      <FaqAccordion />

      <hr />
      <ContactForm />

      {/* <HeroWithImageStrip/> */}
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

export default LandingPage
