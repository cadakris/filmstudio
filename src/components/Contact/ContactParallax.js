import React from 'react'
import { Parallax } from 'react-parallax'

function ContactParallax() {
  return (
    <>
        <div className="contact-parallax-container">
            <Parallax
                bgImage={"https://res.cloudinary.com/dnr8dgxt2/image/upload/v1681056072/Studio%20Project%20Images/film-studio_fffnzs.jpg"}
                strength={800}
                className="contact-parallax-element"
            >
                <div className="contact-parallax-content">
                    <span className="contact-section">CONTACT</span>
                </div>
            </Parallax>
        </div>
    </>
  )
}   

export default ContactParallax