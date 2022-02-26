import React from 'react'

const Student = ({ name, email, city }) => {
    return (
        <div className="mb-3">
            <img height={180} width={140} src={`https://i.ibb.co/GCCdy8t/womens.png`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="">{name}</h5>
                    <h6 className="">{email},  {city}</h6>
                    <p className="">this is real Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
        </div>
    )
}

export default Student