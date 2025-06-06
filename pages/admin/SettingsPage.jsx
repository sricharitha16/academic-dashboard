import {NavLink} from 'react-router-dom';

const SettingsPage = () => {
  return (
    <div className="container">
        <div className="top-bar">	
                <h3 className="">Settings</h3>
                {/* <div className="search">
                    <input type="text" placeholder="Search" />
                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div> */}
            </div>
        <div className="content">
            <div className="content-2">
                <div className="mainblock">
                    <div className="title">
                        <h2>Administrator Settings</h2>
                        
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Settings</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Change E-Mail</td>
                                <td></td>
                                <td></td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="7" name="check7"/>&nbsp;&nbsp;&nbsp;&nbsp;<NavLink to="#" className="button">Change E-Mail</NavLink></td>
                                
                            </tr>
                            <tr>
                                <td>Change Password</td>
                                <td></td>
                                <td></td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="7" name="check7"/>&nbsp;&nbsp;&nbsp;&nbsp;<NavLink to="#" className="button">Change Password</NavLink></td>
                            </tr>
                            <tr>
                                <td>Change Password</td>
                                <td></td>
                                <td></td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="7" name="check7"/>&nbsp;&nbsp;&nbsp;&nbsp;<NavLink to="#" className="button">Change Password</NavLink></td>
                            </tr>
                            <tr>
                                <td>Update Phone Number</td>
                                <td></td>
                                <td></td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="7" name="check7"/>&nbsp;&nbsp;&nbsp;&nbsp;<NavLink to="#" className="button">Update Phone Number</NavLink></td>
                            </tr>
                            <tr>
                                <td>Update Address</td>
                                <td></td>
                                <td></td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="7" name="check7"/>&nbsp;&nbsp;&nbsp;&nbsp;<NavLink to="#" className="button">Update Address</NavLink></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SettingsPage