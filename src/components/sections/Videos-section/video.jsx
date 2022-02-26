import React from 'react'

const Video = ({VideoUrl}) => {
  return (
    <>
    <div className="mb-3">
            <img src={VideoUrl} className="card-img-top" alt="..." />
        </div>
    </>
  )
}

export default Video