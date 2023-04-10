import React from 'react'
import { Parallax } from 'react-parallax'

function AboutParallax() {
  return (
    <>
        <div className="about-parallax-container">
            <Parallax
                bgImage={"https://res.cloudinary.com/dnr8dgxt2/image/upload/v1681056072/Studio%20Project%20Images/film-studio_fffnzs.jpg"}
                strength={800}
                className="about-parallax-element"
            >
                <div className="about-parallax-content">
                    <span className="about-section">ABOUT</span>
                </div>
            </Parallax>
        </div>
    </>
  )
}

export default AboutParallax