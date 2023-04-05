import React from 'react'
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import StudiosGallery from './StudiosGallery';

function IndividualStudios({studioDetails}) {
  return (
    <>
      <div className="splitScreen">
        <LeftSide studioDetails={studioDetails}/>
        <RightSide studioDetails={studioDetails}/>
      </div>
      
      <StudiosGallery />
    </>

  )
}

export default IndividualStudios