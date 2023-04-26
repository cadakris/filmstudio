import React from 'react'

import Navbar from '../Navbar/Navbar'
import ContactParallax from './ContactParallax'
import MainFooter from '../Footer/MainFooter'

import './_contact.scss'

function Contact() {
  return (
    <>
        <Navbar />
        <ContactParallax />
        <MainFooter />
    </>
  )
}

export default Contact