import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

export default function AddUser() {
   
   let navigate = useNavigate();

   const[user,setUser]=useState({
    name:"",
    description:"",
    assigned_by:"",
    assigned_for:"",
    assign_date:"",
    deadline:"",
    status:"",
   });
   const{name,description,assigned_by,assigned_for,assign_date,deadline,status}=user;
 
   const onInputChange=(e)=>{
     setUser({...user,[e.target.name]:e.target.value});
   };

   const onSubmit = async (e)=>{
      e.preventDefault();
      await axios.post('http://localhost:8080/user',user);
      navigate("/")
   };

  return (
    <div className='container'>
        <div className="row">
            <div className='col-md-6 offset-md-3 border rounded p-4 shadow'>
                <h2 className="text-center m-4">Register User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor='Name' className='form-label'>Name</label>
                    <input type={'text'}
                    className='form-control'
                    name ='name'
                    value={name}
                    onChange={(e)=>onInputChange(e)} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor='Description' className='form-label'>Description</label>
                    <input type={'text'}
                    className='form-control'
                    name ='description'
                    value={description}
                    onChange={(e)=>onInputChange(e)} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor='AssignedBy' className='form-label'>Assigned By</label>
                    <input type={'text'}
                    className='form-control'
                    name ='assigned_by'
                    value={assigned_by}
                    onChange={(e)=>onInputChange(e)} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor='AssignedFor' className='form-label'>Assigned For</label>
                    <input type={'text'}
                    className='form-control'
                    name ='assigned_for'
                    value={assigned_for}
                    onChange={(e)=>onInputChange(e)} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor='AssignDate' className='form-label'>Assign Date</label>
                    <input type={'text'}
                    className='form-control'
                    name ='assign_date'
                    value={assign_date}
                    onChange={(e)=>onInputChange(e)} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor='Deadline' className='form-label'>Deadline</label>
                    <input type={'text'}
                    className='form-control'
                    name ='deadline'
                    value={deadline}
                    onChange={(e)=>onInputChange(e)} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor='Status' className='form-label'>Status</label>
                    <input type={'text'}
                    className='form-control'
                    name ='status'
                    value={status}
                    onChange={(e)=>onInputChange(e)} required/>
                </div>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link  className='btn btn-outline-danger mx-2' to ="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
