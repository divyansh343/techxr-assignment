import React from 'react'
import Video from './video'
import './video-section.css'

const VideoSection = ({ videos }) => {
  return (
    <div className='container mt-4 pt-4 pb-4'>

      <div className="headline mb-4 ">
        COURSE STRUCTURE
      </div>

      <div className='video-layout mb-4'>
        {videos
          .filter((video, idx) => idx < 3)
          .map(({ id, ...otherProps }) => (
            <Video key={id} {...otherProps} />
          ))}
      </div>
    </div>
  )
}

export default VideoSection