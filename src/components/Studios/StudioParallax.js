import React from 'react'
import { Parallax } from 'react-parallax'

// import './_studios.scss'

function StudioParallax() {
  return (
    <>
        <div className="studio-parallax-container">
            <Parallax
                bgImage={"https://res.cloudinary.com/dnr8dgxt2/image/upload/v1679350715/Studio%20Project%20Images/above-shot-film-set_z2vykt.jpg"}
                strength={600}
                className="studio-parallax-element"
            >
                <div className="studio-parallax-content">
                    <span className="border">STUDIO SPACE</span>
                </div>
            </Parallax>
        </div>
    </>
  )
}

export default StudioParallax