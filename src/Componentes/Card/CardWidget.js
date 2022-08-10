import React from "react";
import "./CardWidget.css";
import ItemContador from '../BtnContador/ItemCount'

function Card(props) {
  console.log(props.data)
  const onAdd = (quantity)=>{
    console.log(`Compraste ${quantity} unidades`)
      }

    return (
          <div className="product-box">
            <img src={props.producto.imgproducto} alt="producto" className="product-img"></img>
            <h2 className="product-title">{props.producto.name}</h2>
            <span className="price">${props.producto.price}</span>
            <ItemContador initial={1} stock={9} onAdd={onAdd}/>
          </div>
    );
}

export default Card;