import React, {  useState } from 'react'
import Home from './Home'
import "../src/App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nike from './Nike';
import Addas from './Addas';
import Puma from './Puma';
import Vans from './Vans';

function App() {
  const [z,w]=useState("all");
const [order,setOrder]=useState(0);
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home z={z} w={w} order={order} setOrder={setOrder} />}/>
      <Route path='/Nike' element={<Nike  z={z} w={w} order={order} setOrder={setOrder} />}/>
      <Route path='/Addas' element={<Addas  z={z} w={w} order={order} setOrder={setOrder} />}/>
      <Route path='/Puma' element={<Puma  z={z} w={w} order={order} setOrder={setOrder} />}/>
      <Route path='/Vans' element={<Vans  z={z} w={w} order={order} setOrder={setOrder} />}/>

      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App