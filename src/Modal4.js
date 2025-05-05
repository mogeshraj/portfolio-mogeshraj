import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Home.css';

function Example4() {
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
          <Modal.Title>📈 Sales Data Analysis – Python & Excel Integration with 10,000+ Rows</Modal.Title>
        </Modal.Header>
        <Modal.Body>       
            <h6>Tech Stack: Python, Pandas, NumPy, Matplotlib, Excel (XLSX), Jupyter Notebook  </h6>
            <h6>Role: Data Analyst</h6>

            <h6>Description:</h6>
            <p>This project focused on analyzing over 10,000 rows of sales and customer data using Python and Excel. It demonstrated the ability to clean, process, visualize, and interpret large datasets to extract meaningful business insights and trends.</p>

            <h6>Key Features:</h6>

            <p>🧹 Data Cleaning: Removed duplicates, handled missing values, and standardized formats using Pandas.</p>

            <p>📊 Descriptive Analysis:

Calculated KPIs such as Total Sales, Average Order Value, and Repeat Customer Rate.

Grouped data by Region, Product Category, and Month for deep insights.</p>

            <p>📅 DateTime Handling: Converted raw date columns into usable formats to analyze time-based trends.</p>

            <p>📈 Data Visualization:

Used Matplotlib and Pandas to create bar charts, pie charts, and line graphs for clear visual reporting.

Exported graphs to Excel for easy stakeholder presentation.</p>
            <p>📤 Excel Integration: Read from and wrote to Excel files, creating summarized reports in new sheets.</p>
            <p>🧠 Insights Generated: Identified top-performing products, peak sales periods, and underperforming regions.</p>
            <h6>Outcome:</h6>
            <p>This project showcased real-world data analysis skills by using Python and Excel to turn raw data into actionable insights. It proved proficiency in data wrangling, analysis, and visualization for business decision-making.</p>
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

export default Example4;