import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import landingImg from '../assets/images/admin.png'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import { homeProjectAPI } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [homeProjects, setHomeProjects] = useState([])
  const navigate = useNavigate()
  // console.log(homeProjects);
  useEffect(() => {
    getHomeProjects()
  }, [])

  const getHomeProjects = async () => {
    try {
      const result = await homeProjectAPI()
      // console.log(result);
      if (result.status == 200) {
        setHomeProjects(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleProject = () => {
    if (sessionStorage.getItem("token")) {
      navigate('/projects')
    } else {
      toast.warning("Please Login to get full access to our projects")
    }
  }

  return (
    <>
      <div style={{ minHeight: '100vh' }} className='d-flex justify-content-center align-items-center rounded shadow w-100'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: '80px' }}> <i className='fa-brands fa-docker'></i>Project Fair</h1>
              <p style={{ textAlign: 'justify' }}>
                One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website . . .
                <br /> What are you waiting for ! ! !
              </p>
              {
                sessionStorage.getItem("token") ?
                  <Link to="/dashboard" className='btn btn-warning'>MANAGE YOUR PROJECTS</Link>
                  :
                  <Link to="/login" className='btn btn-warning'>START TO EXPLORE</Link>
              }
            </div>
            <div className="col-lg-6">
              <img src={landingImg} alt="landing" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <h1 className="mb-5">Explore Our Projects</h1>
        <marquee>
          <div className="d-flex">
            {
              homeProjects?.length > 0 &&
              homeProjects?.map(project => (
                <div key={project?._id} className="me-5">
                  <ProjectCard displayData={project} />
                </div>
              ))
            }
          </div>
        </marquee>
        <button onClick={handleProject} className="btn btn-link mt-5">CLICK HERE TO VIEW MORE PROJECTS...</button>
      </div>
      <div className="d-flex align-items-center mt-5 flex-column">
        <h1>Our Testimonials</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png" />
                <span>Max Miller</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                </div>
                <p>Some quick example text to build on the card title and make up the
                  bulk of the card's content.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0xOS5wbmc.png" />
                <span>Xi Lium</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                </div>
                <p>Some quick example text to build on the card title and make up the
                  bulk of the card's content.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png" />
                <span>Jo Anderson</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                </div>
                <p>Some quick example text to build on the card title and make up the
                  bulk of the card's content.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Home