import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

    <>
      <div className="newslater container mb-4">
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="Name@company.com" />
          </div>
          <div class="col">
          <button type="button" class="btn btn-outline-dark ">Register Now</button>
            
          </div>
        </div>
      </div>
      <div className="container footer">
        <div className="row mb-4">
          <div className="col">
            <h2>TechXR</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="col">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, sequi et.</div>
          <div className="col">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, accusantium fugit?</div>
          <div className="col">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, id dolor?</div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-light">
        <div className="container-fluid">
          <h5>@Copyrigt 2022 <Link to='/'>TechXR</Link></h5>
        </div>
      </div>
    </>
  )
}

export default Footer