
import React from 'react'

function VideoPlayer({src}) {
  return (
    <div>
      <iframe
        title={src}
        src={src}
        className={`resp-iframe-2`}
        width="640"
        height="360"
        frameborder="0"
        wedkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        allow="autoplay; fullscreen; picture-in-picture"
        controls= "0"

      >

      </iframe>

      {/* <iframe 
        src="https://player.vimeo.com/video/799696049?h=520498d395" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
    </div>
  )
}

export default VideoPlayer


