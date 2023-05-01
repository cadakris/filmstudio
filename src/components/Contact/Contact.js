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

        <h1 className="about-header">Say Hello!</h1>
            <div className="divider">
                <hr/>
            </div>
        
        <form>
          <div className="form-container">
            <input className="half"
              type="text"
              placeholder='First Name'
            />
            <input className="half"
              type="text"
              placeholder='Last Name'
            />
            <input className="full"
              type="text"
              placeholder='Email'
            />
            <textarea className="message"
              type='text'
              name='message'
              placeholder='Write Your Message Here'
            />
          </div>
        </form>

        <MainFooter />
    </>
  )
}

export default Contact