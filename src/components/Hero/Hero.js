import React from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import Fade from 'react-reveal/Fade'
import { imageData } from '../../utils/MediaData.js'
import './hero.scss'

function Hero() {

  return (
    <>
    <Fade top>
    <div className='main-hero-container' id="main-page">
        <div className='hover-left-2'>
  
            <div className='parallax'>
              <LeftContainer />
              <RightContainer/>
              <h1 className='center-text'> MAHER STUDIOS</h1>  
            </div>
        </div>
      
    </div>

    </Fade>
    </>
  )
}

export default Hero