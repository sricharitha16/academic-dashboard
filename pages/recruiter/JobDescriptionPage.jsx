import React from 'react'
import './recruiter.css';

const JobDescriptionPage = () => {
  return (
    <div className="main-content">
    <div className="top-bar"><h3>Jobs</h3></div>
    <div className="recruiter-container">
      <div className="card">
        <div className="title" style={{ textAlign: 'center' }}>
          <h1>Job Postings</h1>
        </div>
        <div className="content">
          <h3>University of Texas at Arlington</h3>
        </div>
        <div className="content">
          <h4>Designation:</h4>
          <p>Research Assistant</p>
        </div>
        <div className="content">
          <h4>Qualification:</h4>
          <p>Bachelors in Computer Science</p>
        </div>
        <div className="content">
          <h4>Work Hours:</h4>
          <p>15 hours per week</p>
        </div>
        <div className="content">
          <h4>Pay Scale:</h4>
          <p>$12 per hour</p>
        </div>
        <div className="content">
          <h4>Preferred location:</h4>
          <p>India</p>
        </div>
        <div className="content">
          <h4>Preferred Ethnicity:</h4>
          <p>Asian</p>
        </div>
        <br />
        <div className="content">
          <h4>Responsibilities:</h4>
          <p>As a research assistant, your duties will include gathering experimental data, creating presentations, and editing written materials. The ability to follow instructions and protocols given by primary researchers is essential to success in this capacity. The complete and timely completion of all research and documentation serves as a sign of accomplishment in this function.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default JobDescriptionPage;