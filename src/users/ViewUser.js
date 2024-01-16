import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser () {

    const[user,setUser] = useState({
        name:"",
        description:"",
        assigned_by:"",
        assigned_for:"",
        assign_date:"",
        deadline:"",
        status:"",
    })

    const {id} = useParams();
    useEffect(()=>{
       loadUser()
    },[])

    const loadUser = async()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }
  return (
    <div className='container'>
        <div className="row">
            <div className='col-md-6 offset-md-3 border rounded p-4 shadow'>
                <h2 className="text-center m-4">User Details</h2>
                <div className="card">
                    <div className="card-header">
                        <b>Details of user</b>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Name:</b> {user.name}
                            </li>

                            <li className="list-group-item">
                                <b>Description:</b> {user.description}
                            </li>

                            <li className="list-group-item">
                                <b>Assigned By:</b> {user.assigned_by}
                            </li>

                            <li className="list-group-item">
                                <b>Assigned For:</b> {user.assigned_for}
                            </li>

                            <li className="list-group-item">
                                <b>Assigned Date:</b> {user.assign_date}
                            </li>

                            <li className="list-group-item">
                                <b>Deadline:</b> {user.deadline}
                            </li>

                            <li className="list-group-item">
                                <b>Status:</b> {user.status}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>
            </div>
        </div>
    </div>  
)}
