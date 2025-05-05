import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Home.css';

function Example2() {
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
          <Modal.Title>🏦 Loan Management System – SQL-Based Data Handling & Automation</Modal.Title>
        </Modal.Header>
        <Modal.Body>       
            <h6>Tech Stack: MySQL, SQL Queries, Triggers, Joins, Stored Procedures</h6>
            <h6>Role: Database Developer</h6>

            <h6>Description:</h6>
            <p>The Loan Management System is a database project designed to automate the evaluation and tracking of customer loans using advanced SQL functionalities. It helps identify ineligible applicants, calculate loan interest, and generate comprehensive loan status reports using optimized queries.</p>

            <h6>Key Features:</h6>

            <p>🔍 Eligibility Filtering: Used WHERE conditions and filtering logic to identify and exclude ineligible customers based on loan criteria.</p>

            <p>💰 Interest Calculation: Implemented custom SQL expressions to calculate interest on active loans dynamically.</p>

            <p>🔄 Triggers:</p>

                    <p>Row-Level Trigger: Activated on individual loan applications for auto-filtering.</p>

                    <p>Statement-Level Trigger: Applied bulk validations and updates.</p>

            <p>🔗 Joins: Used INNER JOIN and NATURAL JOIN to efficiently combine customer, loan, and status tables.</p>
            <p>⚙️ Stored Procedures: Created procedures to generate structured outputs with one-click execution.</p>
            <p>📊 Loan Summary Output: Produced a detailed report showing loan approval status, pending amounts, and total interest using CASE statements and conditionals.</p>
            <h6>Outcome:</h6>
            <p>Demonstrated strong SQL skills by combining logic, triggers, and automation to manage loan operations. The project showcases practical database design, business logic implementation, and analytical reporting capabilities.</p>
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

export default Example2;