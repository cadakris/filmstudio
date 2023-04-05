import React from 'react'
import IndividualStudios from './IndividualStudios'

function RightSide({studioDetails}) {

    const {title, description, sqftg, height} = studioDetails

  return (
    <>
        <div className="rightSideContainer">
            <h1 className="studioTitle">{title}</h1>
            <p>{description}</p>
            <br/>
            <p>Square Footage: {sqftg}</p>
            <p>Height: {height}</p>
        </div>
    </>

  )
}

export default RightSide