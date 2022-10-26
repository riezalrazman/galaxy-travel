import React from 'react'
import Navbar from '../components/Navbar'
import PricingCards from '../components/Pricing'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'


const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='PRICING.' text='Choose your trip.' />
      <PricingCards />
      <Footer />
    </div>
  )
}

export default Pricing