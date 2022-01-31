import React, { useState } from 'react';

import './cart.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Cartview = () => {
    const navigate = useNavigate()
    const [cart, setCart] = useState([]);
    const ConfirmCancel=(id)=>{
        axios({
            url:"http://localhost:8000/orders",
            method:"DELETE",
             
            data:{
                "id":id,
               
            }

        }) 
            
        .then(res => {
            alert(res.data.content)
        })
       
        
    }
    

  

    React.useEffect(() => {
        axios({
            url: "http://localhost:8000/orders",
            method: "GET",
        })

            .then(res => {
                setCart(res.data.content)
                
               
            })

    });
    return (
        <div className="container">




            {cart.map((posts, index) => {

                return (
                    <div className='post' key={index}>


                        <div className='cart1'>
                            <button onClick={()=>{ConfirmCancel(posts._id)}} className="cancel">
                               X
                            </button>
                            

                            <h3>{posts.company}</h3>
                            <p>{posts.describe}</p>
                            <p className='light'>Sold by Truenet Commerce</p>
                            <p><span>SIZE:</span> {posts.size}</p>
                            <p> <span>QUANTITY:</span> {posts.quantity}</p>
                            <p><span>{posts.cost}</span></p>
                        </div>

                    </div>






                )
            }

            )
            }
        </div>





    )

}
export default Cartview;