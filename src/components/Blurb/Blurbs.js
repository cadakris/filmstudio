import React, { useState } from 'react'
import Parallaxes from './Parallaxes'
import blurbdata from '../../blurbdata.json'

import './_blurbs.scss'

function Blurbs() {

  const [blurbDetails] = useState([...blurbdata])
  

  return (
    <>
        <div id="blurb-section">
            <h1 className="blub-header">Our Commitment</h1>
                <div className="divider">
                    <hr/>
                </div>
            <div className = "paragraphContainer">
              <p className="blurbParagraph">Located in the heart of Los Angeles, Maher Studios is devoted to provide exceptional studio facilities and impeccable services. Our boutique studio caters to all TV, film, and commercial productions.</p>
            </div>
            <div className="buttonContainer">
              <button>Learn More</button>
              

            </div>
        </div>
        <Parallaxes
          blurbDetails = {blurbDetails}
        />
    </>
  )
}

export default Blurbs