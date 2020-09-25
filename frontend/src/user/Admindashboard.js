import React from 'react'
import { Link } from 'react-router-dom'
import { isauthenticated } from '../auth/helper'
import Base from '../core/Base'

const AdminDashboard=()=> {

    const {user:{name,email}}=isauthenticated()



    const adminleft=()=>{
        return (
            <div className="cont1">
    <div className="card ">
        <h5 className="card-header bg-dark text-white">Manage your Rooms</h5>
        <ul className="list-group">
            <li className="list-group-item">
<Link className="nav-link text-success" to="/admin/create">Create Room</Link>
            </li>
            <li className="list-group-item">
            <Link className="nav-link text-success" to="/admin/viewall">View Rooms</Link>
            </li>
 
        </ul>
        </div>
    </div>
        );
    
    };
    
    const adminright=()=>{
    
        return (
            <div className="cont2">
                <div className="card mb-4">
                    <h5 className="card-header bg-dark text-white">Admin  info</h5>
                    <ul className="list-group">
                        <li className="list-group-item">   
                            <span className="badge bagde-success mr-2">Name:</span>{name}
                        </li>
                        <li className="list-group-item">   
                            <span className="badge bagde-success mr-2">Email:</span>{email}
                        </li>

                    </ul>
                    </div>
                </div>
        );
       
}

    return (
        <Base title="Admin Area">
        {adminleft()}
        {adminright()}
        </Base>
    )
}
export default AdminDashboard