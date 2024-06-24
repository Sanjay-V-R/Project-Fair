import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import uploadImg from '../assets/images/addImg.png'

const Edit = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button onClick={handleShow} className="btn"><i className="fa-solid fa-edit"></i></button>

      <Modal
        size='lg'
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{ display: 'none' }} />
                <img height={'200px'} src={uploadImg} alt="" className="img-fluid" />
              </label>
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input type="text" className="form-control" placeholder='Project Title' />
              </div>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder='Languages used in Project' />
              </div>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder='Project GITHUB Link' />
              </div>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder='Project WEBSITE Link' />
              </div>
            </div>
          </div>
          <div>
            <input type="text" className="form-control" placeholder='Project Overview' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Edit