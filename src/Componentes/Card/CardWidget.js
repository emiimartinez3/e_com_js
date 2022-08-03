import React from "react";
import "./Card.css";
import ItemContador from '../BtnContador/ItemCount'

function Card(props) {

  const onAdd = (quantity)=>{
    console.log(`Compraste ${quantity} unidades`)
      }

    return (
          <div className="product-box">
            <img src={props.producto.imgproducto} alt="producto" className="product-img"></img>
            <h2 className="product-title">{props.producto.name}</h2>
            <span className="price">${props.producto.precio}</span>
            <ItemContador initial={1} stock={9} onAdd={onAdd}/>
          </div>
    );
}

export default Card;