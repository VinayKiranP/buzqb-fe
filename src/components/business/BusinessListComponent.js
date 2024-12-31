import React, { useEffect, useState } from 'react'
import BusinessService from '../../services/business/BusinessService';
import { Link } from 'react-router-dom';
import Loader from '../utils/Loader';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const BusinessListComponent = () => {
  
  const[businessList, setBusinessList] = useState([]);
  const[loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    getAllBusinesses();
  }, [])

  const getAllBusinesses = () => {
    BusinessService.getAllBusinesses().then((response) => {
        setBusinessList(response.data.data);
        setLoading(false);
        console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
}
console.log(setBusinessList);

const deleteBusiness = () => {
  console.log(setId);
  handleClose();
  setLoading(true);
   BusinessService.deleteBusiness(setId).then((response) =>{
    getAllBusinesses();
   }).catch(error =>{
       console.log(error);
       setLoading(false);
   })
}

  const handleClickOpen = (id) => {
    setId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <>
    <div className="container">
    <h2>BuzQb Business</h2>
      <Link className="dashboard-redirect-btn" to="/add-business">Edit Business</Link>
      { loading ? <Loader/> : 
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
                  <Link className="btn btn-danger" variant="outlined" to={`/edit-business/${business.id}`} >Update</Link>
                  {/* <Button className = "btn btn-danger"  variant="outlined"
                   onClick={() => handleClickOpen(business.id)}> Delete</Button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      }
    </div>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">
        {"Do you really want to delete the Business..?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Click <b>Confirm</b> To Delete the Bsiness, Close to <b>Cancel</b>.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={deleteBusiness} autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  </>
  )
}

export default BusinessListComponent
