import React from 'react';
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';

const  RecruiterHomePage =()  =>{
  const [data,setData] = useState([]);
  useEffect(() => {
    async function fetchMyAPI(){
      let result = await fetch("http://localhost:8000/api/application");
      result = await result.json();
      setData(result)
  }
  fetchMyAPI()
},[])
  console.warn("result",data)
  return (
    <div className="main-content">
      <div className="top-bar"><h3>Dashboard</h3></div>
    <div className="recruiter_container">
      <div className="card">
        <h3>User Approval</h3>
        <table>
          <thead>
            <tr>
              <th>URM ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Approval</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/recruiter/cand_details">37263</Link></td>
              <td>Alex</td>
              <td>alex23@gmail.com</td>
              <td>
                <div className="actions">
                  <input type="button" className="approve" name="approve" value="Approve" />
                  <input type="button" className="reject" name="reject" value="Reject" />
                </div>
              </td>
            </tr>
            <tr>
            <td><Link to="/recruiter/cand_details">87456</Link></td>
              <td>John</td>
              <td>john76@gmail.com</td>
              <td>
              <div className="actions">
                  <input type="button" className="approve" name="approve" value="Approve" />
                  <input type="button" className="reject" name="reject" value="Reject" />
                </div>
              </td>
            </tr>
            <tr>
            <td><Link to="/recruiter/cand_details">09845</Link></td>
              <td>Stanley</td>
              <td>stanley98@gmail.com</td>
              <td>
              <div className="actions">
                  <input type="button" className="approve" name="approve" value="Approve" />
                  <input type="button" className="reject" name="reject" value="Reject" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card">
        <h3>Application Status</h3>
        <table>
          <thead>
            <tr>
              <th>URM</th>
              <th>Name</th>
              <th>Job ID</th>
              <th>App date</th>
              <th>App ID</th>
              <th>Status</th>
            </tr>
          </thead>
          {
            data.map((item,myKey)=>
            <tbody key={myKey}>
            <tr>
              <td>{item.uid}</td>
              <td>{item.cand_name}</td>
              <td>{item.jid}</td>
              <td>{item.a_date}</td>
              <td><Link to={`/recruiter/app_status/${item.id}`}>{item.id}</Link></td>
              <td>{item.status}</td>
            </tr>
            </tbody>
            )
          }
        </table>
      </div>
      <div className="card">
        <h3>Number of Job Postings</h3>
        <table>
          <thead>
            <tr>
              <th>Institution</th>
              <th>Job Postings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UTA</td>
              <td>12</td>
            </tr>
            <tr>
              <td>UNT</td>
              <td>2</td>
            </tr>
            <tr>
              <td>UTD</td>
              <td>7</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card">
        <h3>New Profile Matches</h3>
        <table>
          <thead>
            <tr>
              <th>URM ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Institution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/recruiter/interview">37263</Link></td>
              <td>Alex</td>
              <td>RA</td>
              <td>UTA</td>
            </tr>
            <tr>
            <td><Link to="/recruiter/interview">43765</Link></td>
              <td>John</td>
              <td>TA</td>
              <td>UTD</td>
            </tr>
            <tr>
            <td><Link to="/recruiter/interview">87675</Link></td>
              <td>Stanley</td>
              <td>RA</td>
              <td>UNT</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default RecruiterHomePage;
