import React from 'react'
import IndividualStudios from './IndividualStudios'

function RightSide({studioDetails}) {

    const {title, description, sqftg, height} = studioDetails

  return (
    <>
    <div className='right-2'>
        <div className="rightSideContainer">
            <h1 className="studioTitle">{title}</h1>
            <p>{description}</p>
            <br/>
            <p>Square Footage: {sqftg}</p>
            <p>Height: {height}</p>
            <button> Book Stage </button>
        </div>
    </div>
    </>

  )
}

export default RightSide