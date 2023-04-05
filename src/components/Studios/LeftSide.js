import React from 'react'

function LeftSide({studioDetails}) {

  const{imageSource} = studioDetails

  return (
    <>
    <div className="leftSideContainer">
        <img className="mainStudioPhotoDisplay" src={imageSource[0]}></img>
        <br/>
        <img className="mainStudioPhotoDisplay" src={imageSource[1]}></img>    
    </div>
    </>
  )
}

export default LeftSide