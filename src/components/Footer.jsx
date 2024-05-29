import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{ height: '350px' }} className='p-5 mt-5 w-100 bg-primary'>
      <div className="d-flex justify-content-between">
        <div style={{ width: '400px' }} className="intro text-light">
          <h5><i className="fa-brands fa-docker me-2"></i>
            Project Fair</h5>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
          <p>Code Licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently v1.0.0</p>
        </div>
        <div className="links d-flex flex-column">
          <h5>Links</h5>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
          <Link to={'/register'} style={{ textDecoration: 'none', color: 'white' }}>Register</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h5>Guides</h5>
          <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>React</a>
          <a href="https://react-bootstrap.netlify.app/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>React Bootstrap</a>
          <a href="https://www.npmjs.com/package/react-router-dom" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>React Router</a>
        </div>
        <div className="contact">
          <h5>Contact Us</h5>
          <div className="d-flex">
            <input className='form-control' placeholder='Enter your email here' type="text" />
            <button className="btn btn-warning ms-2"><i className='fa-solid fa-arrow-right'></i></button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-brands fa-twitter'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-brands fa-instagram'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-brands fa-facebook'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-brands fa-linkedin'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-brands fa-github'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-solid fa-phone'></i></a>
          </div>
        </div>
      </div>
      <p className='text-center text-light mt-2'>Copyright © Jan Batch 2024 FF Store. Build with React.</p>
    </div>
  )
}

export default Footer