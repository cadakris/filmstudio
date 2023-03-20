import React from 'react'
import './hero.scss'
import { imageData  } from "../../utils/MediaData.js";

function ImagePlayer({src}) {

  return (
      <div className='image-player' style={{backgroundImage: `url(${src})`} }>
    </div>

  )
}

export default ImagePlayer