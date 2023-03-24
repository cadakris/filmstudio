import React from 'react'
import IndividualStudios from './IndividualStudios'

function RightSide({studioDetails}) {

    const {title} = studioDetails

  return (
    <>
        <div className="rightSideContainer">
            <h1 className="studioTitle">{title}</h1>
        </div>
    </>

  )
}

export default RightSide