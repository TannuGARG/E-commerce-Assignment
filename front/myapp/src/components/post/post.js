import React, { useState } from 'react';
import './post.css';
import { useNavigate } from 'react-router-dom';
import star from "./start.jpg";
import axios from "axios"

const Productview = () => {
    const navigate=useNavigate()
    const [quantity,setQuan]=useState(0)
    const [posts, setPost] = useState([]);
    const [size,setSize]=useState([0,0,0])
    const [add,setAdd]=useState([0,0,0])
    
    
    React.useEffect(() => {
        fetch("http://localhost:3000/user")
            .then((res) => res.json())
            .then((responseData) => setPost(responseData))
    }, [])
   
    

    
    const ChangeSize=(ind,add)=>{
        const newArr=[...size]
        newArr[ind]=add
        setSize(newArr)
        console.log("size",size)
    }
    const SendDataToDatabase=(ind)=>{
        const newCart=[...add]
        newCart[ind]=1
        setAdd(newCart)
       
        axios({
            url:"http://localhost:8000/orders",
            method:"POST",
             
            data:{
                "size":size[ind],
                "posts":posts[ind],
                "quantity":quantity,
                "date":new Date()
            }
           
           
            

        }) 
            
        .then(res => {
            alert(res.data.status)
        })
    }

    const handler=(e)=>{
        setQuan(e.target.value)

        
    }
    return (
        <div className="site-container">
            {posts.map((post, index) => {
                return (
                    <div className='post' key={index}>
                        
                        <div className='box11'>
                        
                            <div className='box2'>
                                <img src={post.PostImage1} className='pic' alt='random' />
                                <img src={post.PostImage2} className='pic' alt='random' />
                            </div>
                            <div className='box2'>
                                <img src={post.PostImage3} className='pic' alt='random' />
                                <img src={post.PostImage4} className='pic' alt='random' />
                            </div>
                        </div>
                        <div className='box1'>
                            <h1>{post.company}</h1>
                            <p>{post.describe}</p>
                            <p>{post.rating}<span><img src={star}></img></span></p>
                            <h3>{post.Cost}</h3>
                            <h5>Select Size</h5>
                            <div className='size'>
                                <button className='round'  onClick={()=>ChangeSize(index,38)} style={size[index]===38 ? { backgroundColor: "blue" } : null} >38</button>
                                <button className='round'  onClick={()=>ChangeSize(index,40)} style={size[index]===40 ? { backgroundColor: "blue" } : null} >40</button>
                                <button className='round' onClick={()=>ChangeSize(index,42)} style={size[index]===42 ? { backgroundColor: "blue" } : null}>42</button>
                            </div>
                            <br></br>
                            {add[index]===0?<button onClick={()=>{SendDataToDatabase(index)}}   className='btn'>ADD TO BAG</button>:
                                     <button onClick={()=>{navigate("/addtocart")}} className='btn2'>GO TO BAG</button>}
                            

                            <input className="quan"  type="Number" placeholder='quantity' onChange={(e)=>handler(e)}></input>
                            <hr></hr>
                            <h3>Product Details</h3>
                            <p>{post.description}</p>
                            <h3>Size & fit</h3>
                            <p>{post.Size}</p>
                            <h3>Material & care</h3>
                            <p>{post.Material}</p>
                            <p>{post.care}</p>
                        </div>
                        
                    </div>






                )
            }

            )
            }
        </div>





    )
}

export default Productview;