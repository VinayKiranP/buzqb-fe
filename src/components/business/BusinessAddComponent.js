import React, { useState, useEffect } from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import BusinessService from '../../services/business/BusinessService';
import Button from '@mui/material/Button';
import NavbarComponent from '../web/NavbarComponent';

const BusinessAddComponent = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [landmark, setLandmark] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateBusiness = (e) => {
        e.preventDefault();

        const business = {name, email, mobile, username, password, addressLine1, addressLine2, landmark, city, pincode, status:"active"}

        if(id){
            BusinessService.saveOrUpdateBusiness(id, business).then((response) => {
                navigate('/business')
            }).catch(error => {
                console.log(error)
            })

        }else{
            BusinessService.createBusiness(business).then((response) =>{
                console.log(response.data)
                navigate('/business');
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        BusinessService.getBusinessById(id).then((response) =>{
            setName(response.data.data.name)
            setUsername(response.data.data.username)
            setMobile(response.data.data.mobile)
            setEmail(response.data.data.email)
            setPassword(response.data.data.password)
            setAddressLine1(response.data.data.addressLine1)
            setAddressLine2(response.data.data.addressLine2)
            setLandmark(response.data.data.landmark)
            setCity(response.data.data.city)
            setPincode(response.data.data.pincode)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Business</h2>
        }else{
            return <h2 className = "text-center">Add Business</h2>
        }
    }


  return (
    <div>
    <NavbarComponent/>
    <div className="container">
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                {title()}
                <div className="card-body">
                    <form>
                        <div className="form-group md-2">
                            <label className="form-label" for="name">Name:</label>
                            <input
                             type="text"
                             placeholder="John"
                             className="form-control" 
                             id="name" value={name} 
                             onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="form-group md-2">
                            <label className="form-label" for="mobile">Mobile:</label>
                            <input
                             type="text"
                             placeholder="8880000088"
                             className="form-control" 
                             id="mobile" value={mobile} 
                             onChange={(e) => setMobile(e.target.value)} />
                        </div>

                        <div className="form-group md-2">
                            <label className="form-label" for="email">Email:</label>
                            <input
                             type="text"
                             placeholder="vk888@gmail.com"
                             className="form-control" 
                             id="email" value={email} 
                             onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        
                        <div className="form-group md-2">
                            <label className="form-label" for="username">Username:</label>
                            <input
                             type="text"
                             placeholder="john_cena"
                             className="form-control" 
                             id="username" value={username} 
                             onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div className="form-group md-2">
                            <label className="form-label" for="password">Password:</label>
                            <input
                             type="password"
                             placeholder="123@buzQB"
                             className="form-control" 
                             id="password" value={password} 
                             onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="form-group md-2">
                            <label className="form-label" for="confirmPassword">Confirm Password:</label>
                            <input
                             type="text"
                             placeholder="123@buzQB"
                             className="form-control" 
                             id="confirmPassword" value={confirmPassword} 
                             onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>

                        <hr></hr>
                        <h6>Address</h6>

                        <div className="form-group md-2">
                            <label className="form-label" for="addressLine1">Address Line1:</label>
                            <input
                             type="text"
                             placeholder="#88/1, 1st Floor, 3rd Cross, 4th Main"
                             className="form-control" 
                             id="addressLine1" value={addressLine1} 
                             onChange={(e) => setAddressLine1(e.target.value)} />
                        </div>

                        <div className="form-group md-2">
                            <label className="form-label" for="addressLine2">Address Line2:</label>
                            <input
                             type="text"
                             placeholder="2nd Stage, Basaveshwara Nagara, Bengaluru"
                             className="form-control" 
                             id="addressLine2" value={addressLine2} 
                             onChange={(e) => setAddressLine2(e.target.value)} />
                        </div>

                        <div className="form-group md-2">
                            <label className="form-label" for="landmark">Landmark:</label>
                            <input
                             type="text"
                             placeholder="2nd Stage, Basaveshwara Nagara, Bengaluru"
                             className="form-control" 
                             id="landmark" value={landmark} 
                             onChange={(e) => setLandmark(e.target.value)} />
                        </div>

                        <div className="form-group md-2">
                            <label className="form-label" for="city">City:</label>
                            <input
                             type="text"
                             placeholder="Bengaluru"
                             className="form-control" 
                             id="city" value={city} 
                             onChange={(e) => setCity(e.target.value)} />
                        </div>

                        <div className="form-group md-2">
                            <label className="form-label" for="pincode">Pincode:</label>
                            <input
                             type="text"
                             placeholder="560001"
                             className="form-control" 
                             id="pincode" value={pincode} 
                             onChange={(e) => setPincode(e.target.value)} />
                        </div>
                        <br/>
                        <Button className = "btn btn-success" onClick = {(e) => saveOrUpdateBusiness(e)} >Submit </Button>
                        <Link to="/business" className="btn btn-success"> Cancel </Link>

                    </form>
                </div>

                
            </div>

        </div>

    </div>
    </div>
  )
}

export default BusinessAddComponent
