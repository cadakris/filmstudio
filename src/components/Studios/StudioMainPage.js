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
          <div className="left-1">
          {studioData.map(studioDetails => {
            return <LeftSide 
              key={studioDetails.id}
              studioDetails={studioDetails}
              />
          })}
          </div>

          <div className="right-2">
            {studioData.map(studioDetails => {
              return <RightSide 
                key={studioDetails.id}
                studioDetails={studioDetails}
                />
            })}

          </div>

        </div>
    </>
  )
}

export default StudioMainPage