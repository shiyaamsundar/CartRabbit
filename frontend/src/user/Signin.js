import React, { useState } from "react";
import Base from "../core/Base";
import { Link ,Redirect} from "react-router-dom";
import { signin,authenticate,isauthenticated } from "../auth/helper";

const Signin = () => {

  const [values,setvalues]=useState({
    email:"",
    password:"",
    loading:false,
    didredirect:false,
    error:false
  })

    const {email,password,error,loading,didredirect}=values
    const {user}=isauthenticated()


    const handleChange = name => event => {
      setvalues({ ...values, error: false, [name]: event.target.value });
    };


    const onsubmit=event=>{
        event.preventDefault()
        setvalues({...values,error:false,loading:true})

        signin({email,password})
        .then(
          data=>{
            if(data.error){
              setvalues({...values,error:data.error,loading:false})

            }
            else{
              authenticate(data,()=>{
                setvalues({...values,didredirect:true})

              })
            }
          }
        )
        .catch(console.log("signin failed"))
      }

      const performredirect=()=>{
      
          if(didredirect){

          if(user.role===1){
            return <Redirect to="/admin/dashboard"/>
          }
          else{

            return <Redirect to="/user/dashboard"/>
          }
        }
        if(isauthenticated() ){
        return <Redirect to="/user/dashboard" />
        }
      }

    const loadingmessage=()=>{
      return(
        loading && (
          <div className="row">
          <div className="alert alert-info">
            <h2>loading...</h2>
          </div></div>
        )
      )
    };

    const errormessage=()=>{
      return(
        <div className="col-md-6 offset-sm-3 text-left">
      <div className="alert alert-danger" style={{display: error?"":"none"}}>
        {error}
      </div></div>)
    }

  const signInForm = () => {
    return (
    
      <div className="row pt-5">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-dark">Email</label>
              <input className="form-control" type="email" value={email} onChange={handleChange('email')} />
            </div>

            <div className="form-group ">
              <label className="text-dark">Password</label>
              <input className="form-control" type="password" value={password} onChange={handleChange('password')} />
            </div>
            <button className="btn btn-success btn-block" onClick={onsubmit}>Submit</button>
          </form>
      </div>
      </div>

    );
  };

  return (
    <Base title="Sign In page" >
      {loadingmessage()}
      {errormessage()}
      {signInForm()}
      {performredirect()}
      <p className="text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signin;
