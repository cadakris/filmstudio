import React from 'react'
import { Parallax } from 'react-parallax'
import { useNavigate, Link } from 'react-router-dom'


function Parallaxes({blurbDetails}) {

  const navigate = useNavigate()

  return (
    <>
      {blurbDetails.map((details, index) => (
        <div key={index}>
          <div className="parallax-container">
            <Parallax
              bgImage={details.imageURL}
              strength={600}
              className="parallax-element"
            >
              <div className="parallax-content">
                <span className="border">{details.caption}</span>
              </div>
            </Parallax>
          </div>  
          
          <div id="blurb-section">
            <h1 className="blurb-header">{details.title}</h1>
            <div className="divider">
              <hr/>
            </div>
            <div className="paragraphContainer">
              <p className="blurbParagraph">{details.description}</p>
            </div>
            <div className="buttonContainer">
              <Link to={details.linkTo}>
                <button>{details.button}</button>
              </Link>

            </div>

          </div>
        </div>
      ))}
    </>
  )
}

export default Parallaxes