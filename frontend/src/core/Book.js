import React, { useState } from 'react'
import Base from "./Base";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { isauthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';
import { bookroom } from './helper/coreapi';


const Book=({match})=> {

    const curroomid=match.params.roomid

    const [values, setValues] = useState({
        fname: "",
        lname:"",
        phone:"",
        email:"",
        error:"",
        from:new Date(),
        to:new Date(),
        roomid:"",
        didredirect:"",
      });  
      const [startDate, setStartDate] = useState(new Date());
      const [endDate, setendDate] = useState(new Date());
      
      const {fname,lname,email,phone,error,from,to,didredirect,roomid}=values
    
      const { user, token }=isauthenticated()
    
      const handlechange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };
    

    
      const successmessage=()=>{
        return(
        <div className="alert alert-success mt-3" >
           Room has been Booked Successfully by {fname}  <Link to="/">Click here</Link> to go back Home
        </div>
        )
      }
      const onsubmit=event=>{
        event.preventDefault()
        setValues({...values,error:false,loading:true,from:startDate,to:endDate})
        bookroom(user.id,user.token,curroomid,values)
        .then(
          data=>{
            console.log("hello")
            if(data.error){
              setValues({...values,error:data.error,loading:false})

            }
            else{
                
            }
          }
        )
        .catch(console.log("signin failed"))
      }

    

    return (
        <div>
            <Base title="Book">
            <div>
            <form className="pl-5">
                <div className="row">
                <div className="form-group">
                    <label>First Name: </label>
    <input type="text" required className="form-control "  onChange={handlechange("fname")} value={fname} autoFocus require placeholder="First Name"></input>
                </div>
                <div className="form-group pl-5">
                    <label>Last Name: </label>
                    <input type="text" required className="form-control "  onChange={handlechange("lname")} value={lname} autoFocus require placeholder="Last Name"></input>
                </div>
                </div>
                <div className="row">
                <div className="form-group">
                    <label>Email: </label>
                    <input type="text" required className="form-control"  onChange={handlechange("email")} value={email} autoFocus require placeholder="email"></input>
                </div>
                <div className="form-group pl-5">
                    <label>Phone: </label>
                    <input type="text" required className="form-control "  onChange={handlechange("phone")} value={phone} autoFocus require placeholder="Phone"></input>
                </div>

                </div>

                <div className="row pt-5">
                <div className="form-group">
                    <label >From</label>

                    <DatePicker className="pl-3"  onChange={date => setendDate(date)} selected={endDate}  autoFocus/>            
                </div>
                <div className="form-group pl-5">
                    <label >To</label>
    <DatePicker className="pl-3"  onChange={date => setStartDate(date)} selected={startDate} autoFocus/>            
                </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Book Room" onClick={onsubmit} className="btn btn-primary"  />
                </div>
            </form>
            </div>
            </Base>
        </div>
    )
}

export default Book