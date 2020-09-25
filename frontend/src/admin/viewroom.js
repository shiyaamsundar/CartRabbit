import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { isauthenticated } from '../auth/helper'
import Base1 from '../core/Base1'
import Card1 from '../core/card1'
import { getalluserrooms } from '../core/helper/coreapi'

export default function Viweallroom() {

  const [rooms,setrooms]=useState([])
  const [err,seterr]=useState(false)



  const loadalluserrooms=()=>{
    getalluserrooms().then(data=>{
      if(data.error)
      {
        seterr(data.err)
      }
      else{
        setrooms(data)
      }
    })
  }

  useEffect(()=>{
    loadalluserrooms()
  },[])
  console.log(rooms)

  return (
    <Base1 title="All Room owned">

      <div className="row text-cenetr">

      <div className="row">
        {rooms.map((room,index)=>{
          return (
            <div className="col-4 mb-4" key={index}>
              <Card1 room={room}/>
            </div>
          )
        })}
      </div>
      </div>
    </Base1>
  );
}
