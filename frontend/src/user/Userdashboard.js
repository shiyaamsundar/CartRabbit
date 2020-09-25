import React from 'react'
import { Link } from 'react-router-dom'
import { isauthenticated } from '../auth/helper'
import Base from '../core/Base'

const UserDashboard=()=> {

    const {user}=isauthenticated()



    const adminleft=()=>{
        return (
            <div className="cont1">
    <div className="card ">
        <h5 className="card-header bg-dark text-white text-center">User Profile</h5>
        <ul className="list-group">
            <li className="list-group-item">
<Link className="nav-link text-success" to="/user/edit">Edit Info</Link>
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
                    <h5 className="card-header bg-dark text-white">User  info</h5>
                    <ul className="list-group">
                        <li className="list-group-item">   
                            <span className="badge bagde-success mr-2">Name:</span>{user.name}
                        </li>
                        <li className="list-group-item">   
                            <span className="badge bagde-success mr-2">Email:</span>{user.email}
                        </li>
                    </ul>
                    </div>
                </div>
        );
       
}

    return (
        <Base title="User Area">
        {adminleft()}
        {adminright()}
        </Base>
    )
}
export default UserDashboard