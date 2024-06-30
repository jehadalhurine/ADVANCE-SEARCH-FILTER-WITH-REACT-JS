import React, { useEffect, useState } from 'react';
import { Store } from './data';
import { AiFillStar } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Leftcontent({ z,w,order,setOrder}) {
    const navigate = useNavigate();
    const [storefilter, setStoreFilter] = useState([]);
const addone=()=>{
setOrder(order+1);

}
    useEffect(() => {
        filterProducts();
    }, [z]);

    function filterProducts() {
        let filteredProducts = [];
          if(z==="all") setStoreFilter(Store);
        else{ filteredProducts = Store.filter((product) => product.category === z);
        
          setStoreFilter(filteredProducts);}
        
    }

    return (
        <div className='Leftcontent' style={{ padding: "20px" }}>
            <h3>Recommended</h3>
            <div className='buttons'>
                <button onClick={() => navigate("/Nike")}>Nike</button>
                <button onClick={() => navigate("/Addas")}>Addas</button>
                <button onClick={() => navigate("/Puma")}>Puma</button>
                <button onClick={() => navigate("/Vans")}>Vans</button>
            </div>
            <div className="card-grid">
                {storefilter.map((product, index) => (
                    <div className='carts' key={index} >
                        <img src={product.img} alt='' />
                        <h2>{product.title}</h2>
                        <p><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                        <div className='costing'>
                        <p>{product.newPrice}$</p>
                        <FaShoppingBag style={{cursor:"pointer"}} onClick={()=>{addone()}}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Leftcontent;