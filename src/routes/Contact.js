import React from 'react'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='CONTACT.' text='Contact GLX Travel' />
      <Form />
    </div>
  )
}

export default Contact