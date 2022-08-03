


import "./Contador.css"
import React,{useEffect, useState} from 'react'
import {FaShoppingBag} from "react-icons/fa";

function ItemContador({initial,stock,onAdd}) {

const[count, setCount] = useState(initial);

const resta = ()=> {
  setCount(count - 1);
}
const suma = ()=> {
    setCount(count + 1);
}

useEffect ( ()=> {
  setCount(parseInt(initial))
}, [initial])

  return (
    <div className="contador">
        <div className="rr">
            <button disabled={count <= 1} className="btn-resta" onClick={resta}>-</button>
            <span className="number">{count}</span>
            <button disabled={count >= stock} className="btn-suma" onClick={suma}>+</button>
        </div>
        <button className="add-cart" disabled={stock <= 0} onClick={()=> onAdd(count)}><FaShoppingBag/></button>
    </div>
   
  );
}

export default ItemContador;


