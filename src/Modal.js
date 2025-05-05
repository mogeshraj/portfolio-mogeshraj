import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Home.css';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='modalbtn' onClick={handleShow}>
        more details
      </Button>

      <Modal className='modal'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className='modalhead'>
          <Modal.Title>📱 MobileNest – Mobile E-Commerce Showcase Website</Modal.Title>
        </Modal.Header>
        <Modal.Body>       
            <h6>Tech Stack: HTML, CSS, JavaScript, Bootstrap</h6>
            <h6>Role: Front-End Developer</h6>

            <h6>Description:</h6>
            <p>MobileNest is a responsive front-end website that showcases the latest smartphones and accessories in a clean and modern layout. The platform allows users to browse various mobile products with engaging visuals and interactive UI elements.</p>

            <h6>Key Features:</h6>

            <p>🖥️ Responsive Design: Built with Bootstrap to ensure mobile-first responsiveness across all devices.</p>

            <p>📸 Product Showcase: Each product card displays the image, name, price, and specifications.</p>

            <p>🎨 Stylized Layout: Used CSS and Bootstrap utilities for a visually appealing, user-friendly interface.</p>

            <p>🚀 Fast Loading & Optimized Code: Clean HTML structure with reusable components.</p>

            <h6>Outcome:</h6>
            <p>The project demonstrates front-end development skills, responsive design principles, and the ability to build a clean product catalog layout suitable for an e-commerce setting.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;