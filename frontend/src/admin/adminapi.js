import { isauthenticated } from "../auth/helper"

const API='http://localhost:5000/api'

export const addroom=(userid,token,room)=>{
    return fetch(`${API}/room/create/${userid}`,{
        method:"POST",
        headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
    },
    body:JSON.stringify(room)
    
    },).then(res=>{
        console.log("hello")
        return res.json()
    }).catch(err=>console.log(err))
}

const {user}=isauthenticated()

export const getroomdet=roomid=>{
    return fetch(`${API}/getroom/${user.id}/${roomid}`,{method:"GET"})
    .then(res=>{

        return res.json()

    })
    .catch(err=>console.log(err))
    
}

export const updateroom=(userid,token,roomid,room)=>{
    return fetch(`${API}/update/${userid}/${roomid}`,{
        method:"PUT",
        headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
    },
    body:JSON.stringify(room)
    
    },).then(res=>{
        console.log("hello")
        return res.json()
    }).catch(err=>console.log(err))
}