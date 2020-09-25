import { isauthenticated } from "../../auth/helper"

const API='http://localhost:5000/api'



export const getallrooms=()=>{
    return fetch(`${API}/rooms`,{method:"GET"})
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
    
  }

const { user}=isauthenticated()

export const getalluserrooms=()=>{
    return fetch(`${API}/rooms/user/${user.id}`,{method:"GET"})
    .then(res=>{
    
        return res.json()
        
    })
    .catch(err=>console.log(err))
    
}

export const deleteroom = (userid,token,roomid) => {
  
    return fetch(`${API}/deleteroom/${userid}/${roomid}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {

        return response.json();
      })
      .catch(err => console.log(err));
  };

  export const editprofile=(userid,token,user)=>{
    return fetch(`${API}/updateuser/${userid}`,{
        method:"PUT",
        headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
    },
    body:JSON.stringify(user)
    
    },).then(res=>{
        console.log("hello")
        return res.json()
    }).catch(err=>console.log(err))
}



export const bookroom=(userid,token,roomid,values)=>{
  return fetch(`${API}/book/${userid}/${roomid}`,{
      method:"POST",
      headers:{
      Accept:"application/json",
      "Content-Type":"application/json",
      Authorization:`Bearer ${token}`
  },

  body:JSON.stringify(values)
  
  },).then(res=>{

      return res.json()
  }).catch(err=>console.log(err))
}