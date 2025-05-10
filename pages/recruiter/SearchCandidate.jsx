const SearchCandidate = () => {
  return (
    <div className="main-content">
    <div className="top-bar"><h3>Candidates</h3></div>
    <br></br>
    <div className="recruiter-container">
    <div className="card">
      <form action="/recruiter/cand_result">
        <div className="title" style={{ marginLeft: '50px' }}>
          <h1>Search for Candidates</h1>
        </div>
        <div className="content">
          <p>Name:</p>
          <input type="text" name="name" placeholder="Enter the name" />
          <p style={{ float: 'right' }}>(or)</p>
        </div>
        <div className="content">
          <p>URM ID:</p>
          <input type="text" name="mobile" placeholder="Enter URM ID" />
          <p style={{ float: 'right' }}>(or)</p>
        </div>
        <div className="content">
          <p>Ethnicity:</p>
          <input type="text" name="Ethnicity" placeholder="Enter Ethnicity" />
          <p style={{ float: 'right' }}>(or)</p>
        </div>
        <div className="content">
          <p>Location:</p>
          <input type="text" name="Location" placeholder="Enter the Location" />
          <p style={{ float: 'right' }}>(or)</p>
        </div>
        <div className="content">
          <p>Qualification:</p>
          <input type="text" name="Qualification" placeholder="Enter the Qualification" />
        </div>
        <button className="r_button" style={{ textAlign: 'center', marginLeft: '0px' }}>Filter</button>
      </form>
    </div>
  </div>
  </div>
  )
}

export default SearchCandidate