import { useState, useEffect } from 'react';
import {get_users} from '../api/accounts';
import { NavLink } from 'react-router-dom';

const AdminDashTableComponent = () => {
  const [users, setUsers] =useState([]);

  useEffect(() =>{
    get_users()
    .then(data =>{
      const userData =[...data].map(({id, first_name, last_name, role, status}) =>{
        return {id, name: `${first_name} ${last_name}`, role, status}
      })
      setUsers(userData);
    })
    .catch(error => console.log(error));
  },[]);
  return (
    <table>
      <tbody>
        <tr>
            <th>Requested Role</th>
            <th>User Name</th>
            <th>Eligibililty</th>
            <th>Actions</th>
        </tr>
        {users.map(({id, name, role, status}, index) =>(
          <tr key={index}>
              <td>{role}</td>
              <td>{name}</td>
              <th>{status =='active'? 'Client requirements met': status =='rejected'? 'No Client requirements met': 'Some Client requirements met'}</th>
              <td><NavLink to="#" class="button">View Profile</NavLink>&nbsp;<NavLink to="#" style={{color:'green'}} class="button">Approve</NavLink>&nbsp;<NavLink to="#" style={{color:'red'}} class="button">Reject</NavLink></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default AdminDashTableComponent;