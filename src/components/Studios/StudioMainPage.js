import React, { useState} from 'react';
import Navbar from '../Navbar/Navbar';
import StudioParallax from './StudioParallax';
import IndividualStudios from './IndividualStudios';
// import LeftSide from './LeftSide';
// import RightSide from './RightSide';

import studiodata from '../../studiodata.json'



import './_studios.scss'

function StudioMainPage() {

  const [studioData] = useState([...studiodata])
  
  return (
    <>
        <Navbar />
        <StudioParallax />
        {studioData.map(studioDetails => {
          return <IndividualStudios
            key={studioDetails.id}
            studioDetails={studioDetails}
          
            />
        })}
        
        {/* <div className="splitScreen">
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

        </div> */}
    </>
  )
}

export default StudioMainPage