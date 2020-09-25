import React,{useState,useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { isauthenticated } from '../auth/helper'
import Base from '../core/Base'
import { deleteroom } from '../core/helper/coreapi'
import {  getroomdet} from './adminapi'


const Deleteroom=({match})=>{

  const [values, setValues] = useState({
    name: "",
    desc: "",
    price: "",
    avab: "",
    contact:"",
    email:"",
    photo:"",
    loading:false,
    error:"",
    didredirect:"",
    createdroom:"",
  });  
  
  const {photo,name,email,contact,avab,desc,price,loading,error,createdroom,didredirect}=values

  const { user, token }=isauthenticated()

  const handlechange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

    const preload=(roomid)=>{
        getroomdet(roomid).then(data=>{
            if(data.error){
                setValues({...values,error:data.error})
            }
            else{
                setValues({
                    ...values,
                    name: data.name,
                    desc: data.desc,
                    price: data.price,
                    avab: data.avab,
                    contact:data.contact,
                    email:data.email,
                    photo:data.photo,
                })
            }
        })
    }
    useEffect(()=>{
        preload(match.params.roomid)
    },[])

  const successmessage=()=>{
    return(
    <div className="alert alert-success mt-3" 
    style={{display:didredirect?"":"none"}}>
      Room has been Deleted Successfully by {name}  <Link to="/admin/dashboard">Click here</Link> to go back to the dashboard
    </div>
    )
  }
  const performredirect=()=>{
      
    if(didredirect){

      return <Redirect to="/admin/dashboard"/>
   

}
}


  const onsubmit=(event)=>{
    event.preventDefault()
    setValues({...values,error:"",loading:true})
    deleteroom(user.id,token,match.params.roomid).
    then(data=>{
      console.log(user)
        if(data.error){

          setValues({...values,error:data.error})
        }
        
          setValues({
            ...values,
            name: "",
            desc: "",
            price: "",
            avab: "",
            contact:"",
            email:"",
            photo:"",
            error:false,
            getredirect:true,
            createdroom:"",
            createdroom:data.name

          })
          setValues({...values,didredirect:true})
        
        
      }
    ).catch(err=>console.log(err))
    
  }


    const adminform=()=>(
      <form>
      <div className="form-group ">
      <div className="row">
        <div className="col-2">
          <h5 className=" my-1">Owner Name:-</h5></div>
          <div className="col">
        <input type="text" className="form-control " onChange={handlechange("name")} value={name} autoFocus require placeholder="Name"/>
        </div></div>
        <div className="row my-3">
        <div className="col-2">
          <h5 className=" my-1">Email:-</h5></div>
          <div className="col">
        <input type="text" className="form-control " autoFocus require onChange={handlechange("email")} value={email} placeholder="Email"/>
        </div></div>
        <div className="row my-3">
        <div className="col-2">
          <h5 className=" my-1">Contact:-</h5></div>
          <div className="col">
        <input type="text" className="form-control " autoFocus onChange={handlechange("contact")} value={contact} require placeholder="Contact"/>
        </div></div>
        <div className="row my-3">
        <div className="col-2">
          <h5 className=" my-1">Price:-</h5></div>
          <div className="col">
        <input type="text" className="form-control " autoFocus require onChange={handlechange("price")} value={price} placeholder="Price"/>
        </div></div>
        <div className="row my-3">
        <div className="col-2">
          <h5 className=" my-1">Availability:-</h5></div>
          <div className="col">
        <input type="text" className="form-control " autoFocus onChange={handlechange("avab")} value={avab} require placeholder="Availability"/>

        </div></div>
        <div className="row my-3">
        <div className="col-2">
          <h5 className=" my-1">Description:-</h5></div>
          <div className="col">
        <input type="text" className="form-control " autoFocus onChange={handlechange("desc")} value={desc} require placeholder="Description"/>

        </div></div>
        <div className="row my-3">
        <div className="col-2">
          <h5 className=" my-1">Photo Url:-</h5></div>
          <div className="col">
        <input type="text" className="form-control " autoFocus onChange={handlechange("photo")} value={photo} require placeholder="Photo-Url"/>

        </div></div>
   
        <button  onClick={onsubmit} className="btn btn-danger ">Delete Room</button>
      </div>
    </form>
    )
    const goBack = () => (
      <div className="mt-5">
        <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
          Admin Home
        </Link>
      </div>
    );




    return (
        <Base title="Create/Add Room">
        <div className="col-md-8 offset-md-2">
        {successmessage()}
          {adminform()}
          {goBack()}

        </div>
        </Base>
        )
}
export default Deleteroom