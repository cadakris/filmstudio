import { React } from 'react'
import './navbar.scss'
import MenuBar from './MenuBar'
import { imageData } from '../../utils/MediaData.js'


function Navbar() {

  let logoImage = imageData.map((images) => {
    return images.logo
  })

  return (
    <>
        <div className="topNavBar">
          <div className="sectionContainer">
            <div className="top-left"></div>

            <div className="top-center">
              <a href="main-page">
                <img src={`${logoImage}`} alt="Studio Logo" className="logo-image"/>
              </a>
            </div>
           
            <div className="top-right">
              <MenuBar />
            </div>
          </div>
        </div>
    </>

  )
}

export default Navbar

