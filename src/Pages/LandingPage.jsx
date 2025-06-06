import React from 'react'
import Banner from '../Components/Banner'
import PhotographySection from '../Components/PhotographySection'
import SpaBenefits from '../Components/SpaBenefits'
import BackToTop from '../Components/BackToTop'
import ShotOfTheDay from '../Components/ShotOfTheDay'
import CategoryGrid from '../Components/CategoryGrid'
import Carousel3D from '../Components/Carousel3D'
import WhatsAppButton from '../Components/WhatsAppButton'


const LandingPage = () => {
  return (
    <div>
      <Banner />

      <PhotographySection />
      <CategoryGrid />
      <Carousel3D />
      <SpaBenefits />
      <ShotOfTheDay />

      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

export default LandingPage
