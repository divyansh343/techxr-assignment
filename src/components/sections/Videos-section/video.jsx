import React from 'react'

const Video = ({VideoUrl,name,price}) => {
  return (
    <>
    <div className="mb-3">
            <img src={VideoUrl} className="card-img-top" alt="..." />
            <h4>{name}</h4>
            <p>price: {price}</p>
        </div>
    </>
  )
}

export default Video