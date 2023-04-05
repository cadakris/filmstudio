import React from 'react'
import LeftSide from './LeftSide';
import RightSide from './RightSide';

function IndividualStudios({studioDetails}) {
  return (
    <>
      <div className="individualStudioContainer">
        <LeftSide studioDetails={studioDetails}/>
        <RightSide studioDetails={studioDetails}/>

      </div>
    </>

  )
}

export default IndividualStudios