import React from 'react'
import './css/Home_Content_CSS.css'

const HomePage = () => {
  const modalOpen =() =>{}
  const closeModal =() =>{}
  return (
    <div id="content">
      <div className="row">
        <div className="column cards-blue">
          <h2>Job Postings</h2>
          <hr />
          <div className="cards">

            <div className="card">
              <h3>Assistant Analyst</h3>
              <h2>UTA</h2>
              <button id="applyBtn">Apply</button>
            </div>

            <div className="card">
              <h3>Research Assistant</h3>
              <h2>UTD</h2>
              <button id="applyBtn">Apply</button>
            </div>

            <div className="card">
              <h3>Research Assistant</h3>
              <h2>UCLA</h2>
              <button id="applyBtn">Apply</button>
            </div>
          </div>
          </div>

        <div className="column cards-orange">
          <h2>In Progress</h2>
          <div className="cards">
            <div className="card">
              <h3>TA</h3>
              <h2>UTA</h2>
              <button id="viewBtn" onClick={modalOpen}>View</button>
            </div>
          </div>

        </div>

        <div className="column cards-green">
          <h2>Done</h2>
          <div className="cards">
            <div className="card">
              <h3>TA</h3>
              <h2>UTA</h2>
              <button id="viewBtn" onClick={modalOpen}>View</button>
            </div>
          </div>
        </div>
      </div>
  
      {modalOpen && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>UC San Diego</h2>
            <h3>TA</h3>
            <h3>Selected</h3>
          </div>
        </div>
      )} 
    </div>
  )
}

export default HomePage;