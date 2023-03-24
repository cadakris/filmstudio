import React, { useState} from 'react';
import Navbar from '../Navbar/Navbar';
import StudioParallax from './StudioParallax';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

import studiodata from '../../studiodata.json'



import './_studios.scss'

function StudioMainPage() {

  const [studioData] = useState([...studiodata])
  
  return (
    <>
        <Navbar />
        <StudioParallax />
        <div className="splitScreen">
          {studioData.map(studioDetails => {
            return <LeftSide 
              key={studioDetails.id}
              studioDetails={studioDetails}
              />
          })}

          {studioData.map(studioDetails => {
            return <RightSide 
              key={studioDetails.id}
              studioDetails={studioDetails}
              />
          })}
        </div>
    </>
  )
}

export default StudioMainPage