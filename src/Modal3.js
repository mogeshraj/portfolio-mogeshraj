import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Home.css';

function Example3() {
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
          <Modal.Title>📦 Stock and Work Order Analysis – Data-Driven Supply Chain Reporting</Modal.Title>
        </Modal.Header>
        <Modal.Body>       
            <h6>Tech Stack: Oracle SQL, Stored Procedures, CASE Statements, Joins</h6>
            <h6>Role: Data Analyst / SQL Developer</h6>

            <h6>Description:</h6>
            <p>This project involved analyzing and tracking stock availability and work order status across suppliers using Oracle SQL. The objective was to provide a clear view of inventory flow, pending orders, and supplier activity using efficient SQL queries and procedures.</p>

            <h6>Key Features:</h6>

            <p>📊 Stock & Work Count Calculation: Used aggregate functions to count orders and track stock status based on Order ID.</p>

            <p>🟡 Work Order Pending Status Logic:

Calculated Pending Status = Stock Count - Work Count.

Applied CASE logic to classify:

{`<`} 0 → Order Pending

= 0 → No Work Order</p>

            <p>🔄 Joins: Utilized NATURAL JOIN to combine Order Status and Date by Supplier for consolidated analysis.</p>
            <p>📅 Date-Based Quantity Analysis: Extracted quantities and trends by order dates to identify delays or patterns.</p>
            <p>🧩 Name Standardization: Split full supplier names into First Name and Last Name for clarity and uniformity.</p>
            <p>⚙️ Stored Procedures: Automated the generation of final reports through procedures, allowing for single-command execution and export-ready outputs.</p>
            <h6>Outcome:</h6>
            <p>This project demonstrated advanced SQL skills in handling large datasets for supply chain analysis. It effectively combined logic, reporting, and automation to support business decisions related to stock and order management.</p>
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

export default Example3;