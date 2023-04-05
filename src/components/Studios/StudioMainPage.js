import React, { useState} from 'react';
import Navbar from '../Navbar/Navbar';
import StudioParallax from './StudioParallax';
import IndividualStudios from './IndividualStudios';

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
    </>
  )
}

export default StudioMainPage