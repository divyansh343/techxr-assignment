import React from 'react'

const FrontSection = () => {
    return (
        <div className=' row section mt-4'>
            <div class="col">
                <div className='section-tag'>
                    <div className="tagline">
                        <h1>We are on a great mission to take AR-VR to the masses</h1>
                    </div>
                    <div className="subheading mt-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio amet, alias natus qui fugit quas cum modi vero. </p>
                    </div>
                    <button type="button" className="btn btn-outline-dark mt-4">Register Now</button>
                </div>
            </div>
            <div class="col">
                <div>
                    <h3 className='section-heading'>Join with us</h3>
                </div>
                <div className='joinform pt-3 pb-3'>
                    <input type="text" class="form-control" placeholder='Name'
                    />
                    <input type="email" class="form-control" placeholder='Email'
                    />
                    <input type="phone" class="form-control" placeholder='Contact Number' />
                </div>
            </div>
        </div>
    )
}

export default FrontSection