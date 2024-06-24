import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import uploadImg from '../assets/images/addImg.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../services/allAPI';

const Add = () => {
  const [preview, setPreview] = useState(uploadImg)
  const [imageFileStatus, setImageFileStatus] = useState(false)
  const [projectDetails, setProjectDetails] = useState({
    title: "", languages: "", github: "", website: "", overview: "", projectImg: ""
  })
  const [show, setShow] = useState(false);

  console.log(projectDetails);
  const handleClose = () => {
    setShow(false);
    setProjectDetails({
      title: "", languages: "", github: "", website: "", overview: "", projectImg: ""
    })
  }
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (projectDetails.projectImg.type == "image/png" || projectDetails.projectImg.type == "image/jpg" || projectDetails.projectImg.type == "image/jpeg") {
      setImageFileStatus(true)
      setPreview(URL.createObjectURL(projectDetails.projectImg))
    } else {
      setImageFileStatus(false)
      setPreview(uploadImg)
      setProjectDetails({ ...projectDetails, projectImg: "" })
    }
  }, [projectDetails.projectImg])

  const handleAddProject = async () => {
    const { title, languages, github, website, overview, projectImg } = projectDetails
    if (projectDetails.title && projectDetails.languages && projectDetails.github && projectDetails.website && projectDetails.overview && projectDetails.projectImg) {
      // reqbody - add items to form data
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("languages", languages)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("overview", overview)
      reqBody.append("projectImg", projectImg)

      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        // api call - reqbody, reqheader
        try {
          const result = await addProjectAPI(reqBody, reqHeader)
          console.log(result);
          if (result.status == 200) {
            handleClose()
            toast.success("Project added successfully")
          } else {
            toast.warning(result.response.data)
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      toast.info("Please fill the form completely")
    }
  }

  return (
    <>
      <button onClick={handleShow} className="btn btn-danger"><i className="fa-solid fa-plus"></i> Add Project</button>

      <Modal
        size='lg'
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{ display: 'none' }} onChange={e => setProjectDetails({ ...projectDetails, projectImg: e.target.files[0] })} />
                <img height={'200px'} src={preview} alt="" className="img-fluid" />
              </label>
              {!imageFileStatus && <div className="text-warning fw-bolder my-2">*Upload only the following file types (jpeg,jpg,png) here!!!</div>}
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input type="text" className="form-control" placeholder='Project Title' value={projectDetails.title} onChange={e => setProjectDetails({ ...projectDetails, title: e.target.value })} />
              </div>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder='Languages used in Project' value={projectDetails.languages} onChange={e => setProjectDetails({ ...projectDetails, languages: e.target.value })} />
              </div>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder='Project GITHUB Link' value={projectDetails.github} onChange={e => setProjectDetails({ ...projectDetails, github: e.target.value })} />
              </div>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder='Project WEBSITE Link' value={projectDetails.website} onChange={e => setProjectDetails({ ...projectDetails, website: e.target.value })} />
              </div>
            </div>
          </div>
          <div>
            <input type="text" className="form-control" placeholder='Project Overview' value={projectDetails.overview} onChange={e => setProjectDetails({ ...projectDetails, overview: e.target.value })} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddProject} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Add