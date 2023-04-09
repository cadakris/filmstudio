import { React } from 'react'
import './navbar.scss'
import MenuBar from './MenuBar'
import { imageData } from '../../utils/MediaData.js'
import { useNavigate, Link } from 'react-router-dom'


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
              <Link to="/">
                <img src={`${logoImage}`} alt="Studio Logo" className="logo-image"/>
              </Link>
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

