import React, { useEffect, useState } from 'react'
import BusinessService from '../../services/business/BusinessService';
import { Link } from 'react-router-dom';

const BusinessListComponent = () => {
  
  const[businessList, setBusinessList]=useState([]);

  useEffect(() => {
    getAllBusinesses();
  }, [])

  const getAllBusinesses = () => {
    BusinessService.getAllBusinesses().then((response) => {
        setBusinessList(response.data.data)
        console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
}
console.log(setBusinessList);

const deleteBusiness = (id) => {
   BusinessService.deleteBusiness(id).then((response) =>{
    getAllBusinesses();
   }).catch(error =>{
       console.log(error);
   })
}
  
  return (
    <div className="container">
      <h2>Business</h2>
      <Link to="/add-business" className="btn btn-primart mb-2">Add</Link>
      <table className="table table-bordered table-striped">
        <thead>
          <th>Id</th>
          <th>Username</th>
          <th>Name</th>
          <th>City - Pincode</th>
          <th>Action</th>
        </thead>
        <tbody>
          {businessList.map(business => (
            <tr key={business.id}>
              <td>{business.id}</td>
              <td>{business.username}</td>
              <td>{business.name}</td>
              <td>{business.city} {business.city}- {business.pincode}</td>
              <td>
                  <Link className="btn btn-info" to={`/edit-business/${business.id}`} >Update</Link>
                  <button className = "btn btn-danger" onClick = {() => deleteBusiness(business.id)}
                  style = {{marginLeft:"10px"}}> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>    
    </div>
  )
}

export default BusinessListComponent
