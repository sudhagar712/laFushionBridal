import React from 'react'
import Banner from '../Components/Banner'
import PhotographySection from '../Components/PhotographySection'
import SpaBenefits from '../Components/SpaBenefits'
import BackToTop from '../Components/BackToTop'
import ShotOfTheDay from '../Components/ShotOfTheDay'
import CategoryGrid from '../Components/CategoryGrid'
import Carousel3D from '../Components/Carousel3D'
import WhatsAppButton from '../Components/WhatsAppButton'
import PhotoGalleryWithModal from '../Components/PhotoGalleryWithModal'
import MapLocation from '../Components/MapLocation'
import TestimonialCarousel from '../Components/TestimonialCarousel'
import HeroWithImageStrip from '../Components/HeroWithImageStrip'


const LandingPage = () => {
  return (
    <div>
      <Banner />

      <PhotographySection />
      <CategoryGrid />
      <PhotoGalleryWithModal/>
      {/* <Carousel3D /> */}
      
      <SpaBenefits />
     
      {/* <ShotOfTheDay /> */}
      <hr />
      <TestimonialCarousel/>
      <MapLocation/>
      {/* <HeroWithImageStrip/> */}
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

export default LandingPage
