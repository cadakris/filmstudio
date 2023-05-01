import React from 'react'

import Navbar from '../Navbar/Navbar'
import ContactParallax from './ContactParallax'
import MainFooter from '../Footer/MainFooter'
import RightInformation from './RightInformation'
import LeftMessage from './LeftMessage'

import './_contact.scss'

function Contact() {
  return (
    <>
        <Navbar />
        <ContactParallax />
        <div>
          <h1 className="about-header">Say Hello!</h1>
              <div className="divider">
                  <hr/>
              </div>
              <div>
                <p>If you have any inquiries or would like to book studio, please fill out the form below. We are happy to accommdate!</p>
              </div>
        </div>
        <div className='contact-split-screen'> 
        <LeftMessage />
        <RightInformation />
        </div>

        <MainFooter />
    </>
  )
}

export default Contact