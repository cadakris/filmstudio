import React from 'react'
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import StudiosGallery from './StudiosGallery';

function IndividualStudios({studioDetails}) {
  return (
    <>
      {/* <hr /> */}
      <div className="splitScreen">
        <LeftSide studioDetails={studioDetails}/>
        <RightSide studioDetails={studioDetails}/>
      </div>
      <div className="gallery-container">
        <StudiosGallery photos={studioDetails.imageSource}/>
      </div>
    </>

  )
}

export default IndividualStudios