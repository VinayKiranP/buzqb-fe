import React, { useState, useEffect } from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import BusinessService from '../../services/business/BusinessService';

const BusinessAddComponent = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [pincode, setPincode] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateBusiness = (e) => {
        e.preventDefault();

        const business = {name, username, pincode, status:"active"}

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
                            <label className="form-label" for="username">Username:</label>
                            <input
                             type="text"
                             placeholder="john_cena"
                             className="form-control" 
                             id="username" value={username} 
                             onChange={(e) => setUsername(e.target.value)} />
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
                        <button className = "btn btn-success" onClick = {(e) => saveOrUpdateBusiness(e)} >Submit </button>
                        <Link to="/business" className="btn btn-danger"> Cancel </Link>

                    </form>
                </div>

                
            </div>

        </div>

    </div>
  )
}

export default BusinessAddComponent
