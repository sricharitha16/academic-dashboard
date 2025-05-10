import React, { useState,useEffect } from 'react';
import './css/Home_Content_CSS.css';
import './css/applications_content_css.css';


const ApplicationsPage = () => {
  const openModal =() =>{}
  const closeModal =() =>{}


  const [data,setData] = useState([]);
  useEffect(() => {

    async function fetchMyAPI(){
      let result = await fetch("http://localhost:8000/api/jobList");
      result = await result.json();
      setData(result)
  
    }
  fetchMyAPI()
  },[])
  console.warn("result",data)

  return (
    <div id="content">
      <div className="tile">
        <h2>Positions Applied</h2>
        <table className="savedtable">
          <thead>
            <tr>
              <th>Positions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="active-row">
              <td>TA</td>
            </tr>
            <tr>
              <td>RA</td>
            </tr>
            {/*
            data.map((item,myKey)=>
            <tbody key={myKey}>
            <tr>
              <td>{item.jid}</td>
              <td>{item.institution}</td>
              <td>{item.role}</td>
              <td>{item.department}</td>
            </tr>
            </tbody>
            )
          */}
          </tbody>
        </table>
      </div>
    <div className="tile">

      <h2>Completed Applications</h2>
      <table className="savedtable">
        <thead>
          <tr>
            <th>University</th>
            <th>Position</th>
            <th>View</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="active-row">
            <td>UC San Diego</td>
            <td>TA</td>
            <td>
              <button onClick="openModal">View</button>
            </td>
            <td>Selected</td>
          </tr>
          <tr className="active-row">
            <td>NCSU</td>
            <td>TA</td>
            <td>
              <button onClick="openModal">View</button>
            </td>
            <td>Selected</td>
          </tr>
          <tr>
            <td>Northeastern University</td>
            <td>RA</td>
            <td>
              <button onClick="openModal">View</button>
            </td>
            <td>In Review</td>
          </tr>
          {/* and so on... */}
        </tbody>
      </table>
    </div>

    <div className="tile">

      <h2>Saved Applications</h2>
      <table className="savedtable">
        <thead>
          <tr>
            <th>University</th>
            <th>Position</th>
            <th>View</th>
            <th>Completion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>UTA</td>
            <td>RA</td>
            <td>
              <button onClick={openModal}>View</button>
            </td>
            <td>70%</td>
          </tr>
          <tr className="active-row">
            <td>UTD</td>
            <td>TA</td>
            <td>
              <button onClick={openModal}>View</button>
            </td>
            <td>90%</td>
          </tr>
          <tr className="active-row">
            <td>UCLA</td>
            <td>Asst Professor</td>
            <td>
              <button onClick={openModal}>View</button>
            </td>
            <td>80%</td>
          </tr>
          {/* and so on... */}
        </tbody>
      </table>
    </div>

        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>UC San Diego</h2>
            <h3>TA</h3>
            <h3>Selected</h3>
          </div>
        </div>
      </div>
    
  )
}

export default ApplicationsPage