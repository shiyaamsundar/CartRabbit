import React,{useState,useEffect} from "react";
import "../styles.css";
import { API } from "../backend";
import Base1 from "./Base1";
import Card from "./card";
import { getallrooms } from "./helper/coreapi";

export default function Home() {

  const [rooms,setrooms]=useState([])
  const [err,seterr]=useState(false)
  const loadallrooms=()=>{
    getallrooms().then(data=>{
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
    loadallrooms()
  },[])


  return (
    <Base1 title="Welcome to GuestRoom Booking Arena">
      <div className="row text-cenetr">

      <div className="row">
        {rooms.map((room,index)=>{
          return (
            <div className="col-4 mb-4" key={index}>
              <Card room={room}/>
            </div>
          )
        })}
      </div>
      </div>
    </Base1>
  );
}
