import React from 'react'

const CandidateDetailsPage = () => {
  return (
    <div className="main-content">
    <div className="top-bar"><h3>Candidates</h3></div>
    <div className="container">
      <form action="/recruiter/interview">
        <div className="card">
          <div className="title" style={{ textAlign: 'center' }}>
            <h1>Candidate details</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>Attributes</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Alex</td>
              </tr>
              <tr>
                <td>Qualification</td>
                <td>B.Tech</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>321, ABC Street</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>Korea</td>
              </tr>
              <tr>
                <td>Contact</td>
                <td>7891237823</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>alex23@gmail.com</td>
              </tr>
              <tr>
                <td>Job Preferences</td>
                <td>TA, RA</td>
              </tr>
            </tbody>
          </table>
            <button className='r_button'  style={{ textAlign: 'center', marginLeft: '0px' }}>Interview candidate</button>
        </div>
      </form>
    </div>
    </div>

  )
}

export default CandidateDetailsPage