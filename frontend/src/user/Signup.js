import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {

    const [values,setvalues]=useState({
      name:"",
      email:"",
      password:"",
      phone:"",
      error:"",
      success:false

    })
      const {name,email,password,phone,error,success}=values

      const handleChange = name => event => {
        setvalues({ ...values, error: false, [name]: event.target.value });
      };

      const onSubmit=event=>{
        event.preventDefault()
        setvalues({...values,error:false})
        signup({name,email,password,phone}).
        then(data=>{
          if(data.error){
            setvalues({...values,error:data.error,success:false})
          }
          else{
            setvalues({
              ...values,
              name:"",
              email:"",
              password:"",
              phone:"",
              error:"",
              success:true
            })
          }
        })
        .catch(console.log("Error in signup"))
      }

      const successmessage=()=>{
        return(
          <div className="col-md-6 offset-sm-3 text-left">
        <div className="alert alert-success" style={{display: success?"":"none"}}>
          New Account has been created Successfully.  <Link to="/signin">Click here</Link> to Singin
        </div>
        </div>
        )
      };

      const errormessage=()=>{
        return(
          <div className="col-md-6 offset-sm-3 text-left">
        <div className="alert alert-danger" style={{display: error?"":"none"}}>
          {error}
        </div></div>)
      }

  const signUpForm = () => {
    return (
      <div className="row pt-1">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-dark">Name</label>
              <input className="form-control"  onChange={handleChange("name")} value={name} type="text" />
            </div>
            <div className="form-group">
              <label className="text-dark">Email</label>
              <input className="form-control" onChange={handleChange("email")} value={email} type="email" />
            </div>

            <div className="form-group">
              <label className="text-dark">Password</label>
              <input className="form-control"  onChange={handleChange("password")} value={password} type="password" />
            </div>
            <div className="form-group">
              <label className="text-dark">phone</label>
              <input className="form-control" onChange={handleChange("phone")} value={phone} type="text" />
            </div>
            <button className="btn btn-success btn-block " onClick={onSubmit}>Submit</button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="Sign up page">
      {successmessage()}    
      {errormessage()}

      {signUpForm()}
  <p className="text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signup;
