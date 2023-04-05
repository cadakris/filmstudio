import React from 'react'

function LeftSide({studioDetails}) {

  const{imageSource} = studioDetails

  return (
    <>
    <div className="left-1">
      <div className="leftSideContainer">
          <img className="mainStudioPhotoDisplay" src={imageSource[0]}></img>
          <br/>
          <img className="mainStudioPhotoDisplay" src={imageSource[1]}></img>    
      </div>
    </div>
    </>
  )
}

export default LeftSide