import {NavLink} from 'react-router-dom';
import Chart from '../../assets/img/Untitled design.png';

const UMRPage = () => {
    return (
        <div className="container">
                <div className="top-bar">	
                    <h3 className="">Manage Users</h3>
                    {/* <div className="search">
                        <input type="text" placeholder="Search" />
                        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div> */}
                </div>
        <div className="content">
            <br />
            <div className="content-2">
                <div className="mainblock">
                    <div className="title">
                        <h2 style={{ textAlign: 'left' }}>User Activity</h2>
                    </div>
                    <p style={{ textAlign: 'left' }}>
                        &nbsp; - Approved Users Today : 18
                        <br />
                        <br />
                        &nbsp; - Rejcted Users Today : 4
                        <br />
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<b>  User Distribution :</b>
                        <br />
                        <br />
                        &nbsp; - Percentage of Administrators on application : 6%
                        <br />
                        <br />
                        &nbsp; - Percentage of Recruiters on application : 14%
                        <br />
                        <br />
                        &nbsp; - Percentage of Candidates on application : 67%
                        <br />
                        <br />
                        &nbsp; - Percentage of DEI-Officers in application : 7%
                        <br />
                        <br />
                        &nbsp; - Percentage of Academia Members in application : 6%
                        <br />  
                        <br />
                    </p>
                </div>
                <div className="bigblock">
                    <div className="title">
                        <h2>&nbsp;&nbsp;Reports & User Management</h2>
                    </div>
                    <table>
                        <br />
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp;Reports</h3>
                        <br />
                        <p  style={{padding: '1rem', paddingBottom: '0'}}>
                            &nbsp;&nbsp;
                            <input type="checkbox" id="dei-officers" name="report-type" value="DEI Officers" />
                            <label htmlFor="dei-officers">DEI Officers</label>
                            <br />
                            <br />
                            &nbsp;&nbsp;
                            <input type="checkbox" id="academia-members" name="report-type" value="Academia Members" />
                            <label htmlFor="academia-members">Academia Members</label>
                            <br />
                            <br />
                            &nbsp;&nbsp;
                            <input type="checkbox" id="urm-candidates" name="report-type" value="URM Candidates" />
                            <label htmlFor="urm-candidates">URM Candidates</label>
                            <br />
                            <br />
                            &nbsp;&nbsp;
                            <input type="checkbox" id="select-all" name="report-type" value="Select All" checked />
                            <label htmlFor="select-all">Select All</label>
                            <br />
                            <br />
                            <p style={{ textAlign: 'left' }}>
                                <button className="button"> Generate Report</button>
                            </p>
                        </p>
                    </table>
                    <hr />
                    <table>
                        <br />
                        <h3  style={{padding: '1rem', paddingBottom: '0'}}>User Management</h3>
                        <br />
                        <p  style={{padding: '1rem'}}>
                            <NavLink to="/create-user" className="button">
                                 Create New User
                            </NavLink>
                            <br />
                            {/* <br />
                            <NavLink to="/update-user" className="button">
                                - Update User
                            </NavLink>
                            <br />
                            <br />
                            <NavLink to="/delete-user" className="button">
                                - Delete User
                            </NavLink>
                            <br /> */}
                            <br />
                            <div className="search">
                                <input type="text" placeholder="Role"/>
                                {/* <button type="submit">
                                    &nbsp;&nbsp;&nbsp;<NavLink to="" className="button">
                                 Search
                            </NavLink>
                                </button> */}
                                <br />
                                <br />
                            
                                <input type="text" placeholder="E_Mail"/>
                                {/* <button type="submit">
                                    &nbsp;&nbsp;&nbsp;<NavLink to="" className="button">
                                 Search
                            </NavLink>
                                </button> */}
                                
                                <br />
                                <br />
                                <input type="text" placeholder="Password" />
                                {/* <button type="submit">
                                    &nbsp;&nbsp;&nbsp;<NavLink to="" className="button">
                                 Search
                            </NavLink>
                                </button> */}
                            </div>
                        </p>
                    </table>
                </div>
            </div>
        </div>
        </div>
  )
}

export default UMRPage