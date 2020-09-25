import React from 'react'
import { Link} from "react-router-dom";


const Card=({room})=> {

    const cardprice=room?room.price:'$ 10'
    const carddesc=room?room.desc:'Located off Interstate 580, this Livermore hotel is within a 5 minute drive of 50 local wineries. It features an outdoor pool and a fitness center. All guest rooms come with free Wi-Fi.'
    const cardavab=room?room.avab:'5'
    const cardname=room?room.name:'default'
    const cardemail=room?room.email:'default@gmail.com'
    const cardphone=room?room.contact:'999999'
    var cardphoto=room?room.photo:'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?cs=srgb&dl=pexels-skitterphoto-584399.jpg&fm=jpg'
    const url='https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?cs=srgb&dl=pexels-skitterphoto-584399.jpg&fm=jpg'
    

    
    return (
          <div className="card text-white bg-dark border border-info ">

            <div className="card-body">
                   <div>
            
                         <img src={cardphoto} width="500" height="300"
                         alt={url}
                              
                              style={{ maxHeight: "100%", maxWidth: "100%" }}
                              className="mb-3 rounded"
                            />
                    </div>

              <p className="text-wrap">
              {carddesc}
              </p>
               <div className="row ">
                <div className="container">
                   <p className="btn btn-warning rounded  btn-sm px-3 "><b>Price:-</b></p>
                   <p className="  btn btn-success rounded  btn-sm px-4 ">{cardprice}</p>      
                   <span className="p-2"></span> 
                   <p className="btn bg-primary rounded  text-white btn-sm px-3 "><b>Avab:-</b></p>
                   <p className="  btn btn-success rounded  btn-sm px-4 ">{cardavab}</p>      
                   </div>
                   <div className="container">
                   <p className="btn btn-warning rounded  btn-sm px-3 "><b>Phone:-</b></p>
                   <p className="  btn btn-success rounded  btn-sm px-4 ">{cardphone}</p>       
                   </div>
                   </div> 
              <div className="row">

    <Link className="btn text-white" to={`/user/book/${room._id}`}><h4>Book Room</h4></Link>
                <p className="pl-5 pt-2">Email:-</p>
        <p className="pt-2">{cardemail}</p>

              </div>
            </div>
          </div>
        );
      }
export default Card