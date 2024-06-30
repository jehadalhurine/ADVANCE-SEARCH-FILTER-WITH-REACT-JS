import React from 'react'
import { AiFillChrome } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Navbar({z,w,order,setOrder}) {
const x=useNavigate();
  return (
    <div className='Navbar'>
     
        <div className='leftside'>
        <AiFillChrome  onClick={()=>{x("/")}} style={{fontSize:"3rem"}}/>
        </div>
        <input placeholder='Enter  Your Search Shoes' value={z} onChange={(e)=>{w(e.target.value)}}/>
        <div className='rightside'>
        <CiHeart />
    
      {order?
      <FaCartPlus  style={{color:"red"}}/>:<FaCartPlus/>  
    }
        <p style={{fontSize:"20px"}} >{order}</p>
   
        <FaUserAlt />
        </div>

    </div>
  )
}

export default Navbar