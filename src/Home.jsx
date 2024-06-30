import React from 'react'
import "../src/Home.css"
import Navbar from './component/Navbar'
import Content from "../src/Content"
function Home({z,w,order,setOrder}) {
  return (
    <div className='Home'>
      <Navbar  z={z} w={w} order={order} setOrder={setOrder}/>
        <Content  z={z} w={w} order={order} setOrder={setOrder}  />
    </div>
  )
}

export default Home