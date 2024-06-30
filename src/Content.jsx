import React from 'react';
import Leftcontent from './Leftcontent';

function Content({ z, w,order,setOrder }) {
  return (
    <div className='Content'>
      <div className='contentleft'>
        <div className='categorey'>
          <h2 style={{color:"white"}}>Category</h2>
          <button onClick={() => w("all")}>All</button>
          <br/>
          <button onClick={() => w("sneakers")}>Sneakers</button>
          <br/>
          <button onClick={() => w("flats")}>Flat</button>
          <br/>
          <button onClick={() => w("heels")}>Heels</button>
          <br/>
          <button onClick={() => w("sandals")}>Sandals</button>
        </div>
      </div>
      <div className='contentright'>
        <Leftcontent z={z} w={w}  order={order} setOrder={setOrder}/>
      </div>
    </div>
  );
}

export default Content;