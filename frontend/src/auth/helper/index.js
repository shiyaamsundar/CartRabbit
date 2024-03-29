const API='http://localhost:5000/api'

export const signup=user=>{
    return fetch(`${API}/signup`,{
        method:"post",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },

        body:JSON.stringify(user)
    })
    .then(res=>{
        return res.json()
    }).catch(error=>console.log(error))
}

export const signin=user=>{
    return fetch(`${API}/signin`,{
        method:"post",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },

        body:JSON.stringify(user)
    })
    .then(res=>{
        return res.json()
    }).catch(error=>console.log(error))
}

export const authenticate=(data,next)=>{
    if(typeof window!=="undefined"){
        localStorage.setItem("jwt",JSON.stringify(data))
        next()
    }
}


export const signout=next=>{
    if(typeof window!=="undefined")
    {
        localStorage.removeItem("jwt")
        next()

        return fetch(`${API}/signout`,{
            method:"GET"
        })
        .then(res=>console.log("Signout success"))
        .catch(error=>console.log(error))
    }
}


export const isauthenticated=()=>{
    if(typeof window=="undefined"){
        return false
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))
    }
    else{
        return false
    }
}